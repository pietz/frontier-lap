import pandas as pd, numpy as np, csv, sys
LAB_SHRINK=float(sys.argv[1]) if len(sys.argv)>1 else 3.0   # pseudo-count for lab-offset shrinkage
USE_LAB = LAB_SHRINK<1e6
d=pd.read_csv('../research/aa-history.csv')
p=d.pivot_table(index='model',columns='index_version',values='score',aggfunc='max')
lab=d.groupby('model')['lab'].first()
p['v5']=p['v5.0.2'].fillna(p['v5.0.1']).fillna(p['v5.0'])
p.loc['Kimi K3','v5']=np.nan        # v5 only for Low effort -> not comparable
OLD=['v4.0','v4.1','v4.1.1','v4.2','v4.3','v4.3.2']

def fit(x,y,labs,deg):
    c=np.polyfit(x,y,deg); res=y-np.polyval(c,x)
    off={}
    for L in set(labs):
        r=res[labs==L]; off[L]=r.sum()/(len(r)+LAB_SHRINK) if USE_LAB else 0.0
    adj=res-np.array([off[L] for L in labs])
    return c,off,adj.std(ddof=deg+1)

# step 1: each old version -> v4.3.2 ; step 2: v4.3.2 -> v5
steps={}
for v in OLD[:-1]:
    m=p[[v,'v4.3.2']].dropna()
    steps[v]=fit(m[v].values,m['v4.3.2'].values,lab[m.index].values,2)
m=p[['v4.3.2','v5']].dropna()
steps['v4.3.2']=fit(m['v4.3.2'].values,m['v5'].values,lab[m.index].values,2)
for k,(c,off,sd) in steps.items():
    print(k,'n=%d sd=%.2f'%(len(p[[k,'v4.3.2' if k!='v4.3.2' else 'v5']].dropna()),sd),
          {L:round(o,1) for L,o in off.items() if L in('Anthropic','OpenAI','Google','DeepSeek','Kimi','xAI / SpaceXAI','Meta')})

def est(model):
    row=p.loc[model]; L=lab[model]
    if not np.isnan(row['v5']): return row['v5'],0.0,'measured'
    for v in reversed(OLD):
        if not np.isnan(row[v]): break
    else: return np.nan,np.nan,'none'
    x=row[v]; var=0
    if v!='v4.3.2':
        c,off,sd=steps[v]; x=np.polyval(c,x)+off.get(L,0); var+=sd**2
    c,off,sd=steps['v4.3.2']; y=np.polyval(c,x)+off.get(L,0); var+=sd**2
    return y,np.sqrt(var),'est from '+v

# dates: sonnet csv + 2025 baselines
name={'Kimi K2.5 (open weights)':'Kimi K2.5','GPT-5.3 Codex':'GPT-5.3 Codex','Grok 4.20 (beta)':'Grok 4.20 0309 v2',
 'Gemini 3.1 Pro (Preview)':'Gemini 3.1 Pro Preview','GPT-5.4 (Thinking)':'GPT-5.4','Kimi K2.6 (open weights)':'Kimi K2.6',
 'DeepSeek V4 Flash (Preview, 0420; open weights)':'DeepSeek V4 Flash 0420','DeepSeek V4 Pro (Preview, 0424; open weights)':'DeepSeek V4 Pro 0424',
 'GPT-5.5 Instant':'GPT-5.5 Instant (June 2026)','Gemma 4 12B (open weights)':'Gemma 4 12B','Kimi K2.7 Code (open weights)':'Kimi K2.7 Code',
 'Muse Glimmer (30B, open weights)':'Muse Glimmer','DeepSeek V4 Pro 0813 (GA)':'DeepSeek V4 Pro 0813','DeepSeek V4 Flash Vision Exp':'DeepSeek V4 Flash Vision',
 'Muse Spark Open (816B A42B, open weights)':'Muse Spark Open','DeepSeek V4.1 Flash 1017 (open weights)':'DeepSeek V4.1 Flash 1017',
 'Gemma 4 (26B A4B, 31B, E4B, E2B; open weights)':'Gemma 4 31B'}
dates={}
for r in csv.DictReader(open('../research/claude-sonnet.csv')):
    n=name.get(r['model'],r['model'])
    if n in p.index: dates[n]=r['available_date']
dates['Grok 4.3']='2026-04-17'
for b in ['Claude Opus 4.5','GPT-5.2','Gemini 3 Pro Preview','Gemini 3 Flash Preview','Kimi K2 Thinking','DeepSeek V3.2','Grok 4.1 Fast','Claude 4.5 Sonnet']:
    dates[b]='2025-12-31'
# non-7-lab models: available from first observed date (conservative proxy)
first=d.groupby('model')['observed_date'].min()
for mdl in p.index:
    if mdl not in dates and lab[mdl] not in ('Anthropic','OpenAI','Google','DeepSeek','Kimi','xAI / SpaceXAI','Meta'):
        dates[mdl]=min(first[mdl],'2026-12-31') if first[mdl]>'2026-01-06' else '2025-12-31'
rows=[]
for mdl,dt in dates.items():
    y,se,how=est(mdl); rows.append(dict(model=mdl,lab=lab[mdl],date=dt,v5=y,se=se,how=how))
t=pd.DataFrame(rows).dropna(subset=['v5']).sort_values('date')
FRONT=['Kimi K2.5','Claude Opus 4.6','Grok 4.20 0309 v2','Gemini 3.1 Pro Preview','GPT-5.4','Muse Spark','Claude Opus 4.7','Grok 4.3','Kimi K2.6','GPT-5.5',
'DeepSeek V4 Pro 0424','Gemini 3.5 Flash','Claude Opus 4.8','Claude Fable 5','Grok 4.5','GPT-5.6 Sol','Muse Spark 1.1','Kimi K3','Gemini 3.6 Flash','Claude Opus 5',
'Muse Spark 1.2','Grok 4.6','DeepSeek V4 Pro 0813','Gemini 3.7 Flash','Claude Fable 5.1','Gemini 3.8 Flash','Muse Spark 1.3','GPT-6 Astra','Grok 4.7','Claude Opus 5.5',
'GPT-6 Sol','GPT-6.1 Sol','Muse Wonder Full','Gemini 4 Argon','Kimi K3.1 Pro','Claude Fable 5.2','Gemini 4 Carbon','GPT-6.2 Astra','GPT-6.2 Sol','Gemini 4 Neon']
out=[]
for f in FRONT:
    r=t[t.model==f].iloc[0]
    prev=t[t.date<r.date]; best=prev.loc[prev.v5.idxmax()]
    out.append(dict(date=r.date,model=f,v5=round(r.v5,1),pm=round(1.64*r.se,1),how=r.how,lead=round(r.v5-best.v5,1),vs=best.model,vs_v5=round(best.v5,1)))
t.to_csv("all_est.csv",index=False); o=pd.DataFrame(out); pd.set_option('display.width',250)
print(o.to_string()); o.to_csv('result_%s.csv'%('nolab' if not USE_LAB else 'lab'),index=False)
