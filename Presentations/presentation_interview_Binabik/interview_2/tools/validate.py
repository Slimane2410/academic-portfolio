#!/usr/bin/env python3
"""Offline structural/media/document validation. Python standard library only."""
from pathlib import Path
from collections import Counter
import json,re,hashlib
root=Path(__file__).resolve().parents[1]
d=json.loads((root/'deck.json').read_text());ss=d['slides']
assert len(ss)==31
assert len({s['id'] for s in ss})==31
assert sum(s['duration'] for s in ss)==1245
sections=Counter()
for s in ss:sections[s['section']]+=s['duration']
assert list(sections.values())==[60,885,150,90,60],sections
assert sum(len(s['details']) for s in ss)==108
assert all(0<=len(s['details'])<=4 for s in ss)
assert ss[-1]['script'].endswith(d['final_sentence'])
assert not ss[-1]['transition']
for s in ss:
 assert 3<=len(s['points'])<=5
 for v in s['details']:
  assert all(v[k] for k in ['question','answer','reason','visual','sources','return_line'])
  assert len(v['reason'])>=2
  assert all(k in d['sources'] for k in v['sources'])
  if v['visual']['type']=='image':assert (root/v['visual']['file']).is_file()
 if s.get('video'):
  assert (root/s['video']['file']).is_file()
  assert (root/s['video']['poster']).is_file()
  assert s['video'].get('narrated') or s['video']['end']-s['video']['start']<=s['silence']
for m in json.loads((root/'assets/MEDIA_MANIFEST.json').read_text()):
 f=root/m['file'];assert f.is_file(),f
 assert hashlib.sha256(f.read_bytes()).hexdigest()==m['sha256'],f
for f in ['inter-latin.woff2','manrope-latin.woff2']:assert (root/'assets/fonts'/f).is_file()
public=(root/'content.js').read_text()
assert 'SOURCES_ET_VERIFICATIONS' not in public
for f in ['index.html','app.js','styles.css']:
 text=(root/f).read_text()
 assert not re.search(r'https?://',text),f+' has a runtime network reference'
for f in ['FIL_ROUGE_INTERVIEW_2_BINABIK.md','GUIDE_ORAL_INTERVIEW_2_BINABIK.md','SOURCES_ET_VERIFICATIONS.md','README.md']:
 assert (root/f).is_file()
guide=(root/'GUIDE_ORAL_INTERVIEW_2_BINABIK.md').read_text()
for s in ss:
 assert f'### {s["id"][1:]} — {s["title"]}' in guide
 if s['transition']:assert s['transition'] in guide
 for v in s['details']:assert f'### {s["id"][1:]}/{v["id"]}' in guide
assert '### 31 — Ready for the challenge' in guide
assert d['final_sentence'] in guide
assert not re.search(r'bicopter',public,re.I)
print('PASS · 31 main slides / 108 details / 1,245 s / section budgets 60, 885, 150, 90, 60')
print('PASS · media checksums / English guide IDs and transitions / closing sentence / offline runtime')
