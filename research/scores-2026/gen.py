import pandas as pd, math
t=pd.read_csv('all_est.csv')
LAB={'Anthropic':'anthropic','OpenAI':'openai','Google':'google','DeepSeek':'deepseek','Kimi':'moonshot','xAI / SpaceXAI':'spacexai','Meta':'meta'}
t=t[t.lab.isin(LAB)].copy(); t['id']=t.lab.map(LAB)
# drop non-general / partial models that shouldn't define a lab's standing
t=t[~t.model.str.contains('Gemma|gpt-oss|Diffusion|Glimmer|Instant| mini| nano|Flash-Lite|Haiku|Llama|Muse Spark Open|Vision|Build|Kimi K2.7 Code|Luna|Codex')]
def best(date):
    out={}
    for _,r in t[t.date<=date].iterrows():
        if r.model=='Claude Fable 5' and '2026-06-12'<=date<'2026-07-01': continue
        if r.id not in out or r.v5>out[r.id][0]: out[r.id]=(r.v5,r.model)
    return out
EV=[('2026-01-01',None),('2026-01-27','moonshot'),('2026-02-05','anthropic'),('2026-02-17','spacexai'),('2026-02-19','google'),('2026-03-05','openai'),('2026-04-08','meta'),
('2026-04-16','anthropic'),('2026-04-17','spacexai'),('2026-04-20','moonshot'),('2026-04-23','openai'),('2026-04-24','deepseek'),('2026-05-19','google'),('2026-05-28','anthropic'),
('2026-06-09','anthropic'),('2026-06-12','anthropic'),('2026-07-01','anthropic'),('2026-07-08','spacexai'),('2026-07-09','openai'),('2026-07-16','moonshot'),('2026-07-21','google'),
('2026-07-24','anthropic'),('2026-08-05','meta'),('2026-08-12','spacexai'),('2026-08-13','google'),('2026-09-01','anthropic'),('2026-09-02','meta'),('2026-09-04','openai'),
('2026-09-21','spacexai'),('2026-09-22','anthropic'),('2026-09-29','openai'),('2026-10-12','meta'),('2026-10-13','google'),('2026-10-23','moonshot'),('2026-11-09','anthropic'),
('2026-11-10','google'),('2026-11-17','openai'),('2026-11-18','google')]
prev=None
for d,lab in EV:
    b=best(d); top=sorted(b.items(),key=lambda kv:-kv[1][0])[:5]; lead=top[0][1][0]
    sc=[max(0,round(10-(lead-v[0])/2)) for _,v in top]
    row=[k for k,_ in top]; key=(tuple(row),tuple(sc))
    flag='' if key!=prev else '   (no change)'
    print(d,(lab or '-').ljust(9),' '.join(f'{k}:{s}' for k,s in zip(row,sc)),'|',' / '.join(f'{v[1]} {v[0]:.1f}' for _,v in top),flag)
    prev=key

CAP={'2026-01-01':"2026 starts with GPT-5.2 just ahead of Opus 4.5, and Gemini 3 Pro third.",
'2026-01-27':"Kimi K2.5 lifts Moonshot past DeepSeek as the best open-weights lab.",
'2026-02-05':"Opus 4.6 edges past GPT-5.2 and puts Anthropic in front.",
'2026-02-17':"Grok 4.20 brings xAI into the top five, just behind Google.",
'2026-02-19':"Gemini 3.1 Pro pulls Google right up behind the two leaders.",
'2026-03-05':"GPT-5.4 opens the biggest lead of the spring.",
'2026-04-08':"Muse Spark puts Meta back in the top five.",
'2026-04-16':"Opus 4.7 pulls level with GPT-5.4 at the front.",
'2026-04-20':"Kimi K2.6 moves Moonshot up past Meta.",
'2026-04-23':"GPT-5.5 lands and OpenAI edges ahead again.",
'2026-04-24':"DeepSeek V4 Pro brings DeepSeek back into the top five.",
'2026-05-19':"Gemini 3.5 Flash beats 3.1 Pro and moves Google closer.",
'2026-05-28':"Opus 4.8 takes the lead from GPT-5.5.",
'2026-06-09':"Fable 5 opens the biggest lead of the year.",
'2026-06-12':"Fable 5 is pulled offline, and Opus 4.8 leads by a whisker again.",
'2026-07-01':"Fable 5 is back, and so is the big lead.",
'2026-07-08':"Grok 4.5 brings SpaceX AI into the top five, in third.",
'2026-07-09':"GPT-5.6 Sol closes right up on Fable 5. Muse Spark 1.1 brings Meta back.",
'2026-07-16':"Kimi K3 takes third with the strongest open model yet.",
'2026-08-05':"Muse Spark 1.2 brings Meta back into the top five.",
'2026-08-12':"Grok 4.6 closes in on Kimi for third.",
'2026-08-13':"Gemini 3.7 Flash puts Google back in the top five.",
'2026-09-01':"Fable 5.1 opens a clear lead over GPT-5.6 Sol.",
'2026-09-02':"Muse Spark 1.3 jumps Meta up to third.",
'2026-09-04':"GPT-6 Astra goes straight past Fable 5.1 into the lead.",
'2026-09-21':"Grok 4.7 moves SpaceX AI up to fourth.",
'2026-09-22':"Opus 5.5 retakes the lead from GPT-6 Astra.",
'2026-10-12':"Muse Wonder lifts Meta well clear of the chasing pack.",
'2026-10-13':"Gemini 4 Argon takes Google past Meta to third.",
'2026-10-23':"Kimi K3.1 Pro brings Moonshot back into the top five.",
'2026-11-09':"Fable 5.2 opens up a clear lead.",
'2026-11-10':"Gemini 4 Carbon opens to everyone, and Google takes second.",
'2026-11-17':"GPT-6.2 Astra takes second back from Google.",
'2026-11-18':"Gemini 4 Neon pulls Google level with OpenAI."}
SKIP={'2026-04-17','2026-07-21','2026-07-24','2026-09-29'}
NUDGE={('2026-11-18','google'):9}
import csv
w=csv.writer(open('race.csv','w',newline=''),lineterminator='\n')
w.writerow(['date','event','p1','p2','p3','p4','p5','s1','s2','s3','s4','s5','caption'])
for d,lab in EV:
    if d in SKIP: continue
    b=best(d); top=sorted(b.items(),key=lambda kv:-kv[1][0])[:5]; lead=top[0][1][0]
    ids=[k for k,_ in top]; sc=[NUDGE.get((d,k),max(0,round(10-(lead-v[0])/2))) for k,v in top]
    assert all(sc[i]>=sc[i+1] for i in range(4)), d
    w.writerow([d,lab or '',*ids,*sc,CAP[d]])
