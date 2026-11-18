# The World in One Day — 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Calistaa113/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Calistaa113/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image summing up Wednesday 18 November 2026's world news, drawn as a
newspaper front page for the
[news-image-20261118 bounty](https://make.fun/bounty/news-image-20261118).

## What the page carries

- **Lead — Iran strikes Kuwait and Bahrain.** Iran hit Kuwait's Ali Al
  Salem Air Base and targets in Bahrain, hours after the U.S. struck a
  missile site on Qeshm Island.
- **China — Xi and Putin meet in Shenzhen**, a day before their summit
  with Trump; Xi pledged against protectionism, Putin attacked sanctions.
- **United States — Democrats take the Senate.** Mary Peltola defeated
  Sen. Dan Sullivan in Alaska, giving Democrats a projected 56–44 majority.
- **Ukraine — Kerch Bridge hit again, span falls.** Ukraine struck the
  bridge for a second day; part of its road span collapsed into the strait.
- **Africa — Ebola in DR Congo doubles**, past 11,000 cases and 5,400
  deaths; three in four infected children under five die.
- **Pacific — Cyclone Xavier hits the Cook Islands** as a Category 5 storm.
- **Briefs —** the Siberian plane crash, COP31 in Antalya, the World
  Court's Myanmar ruling, and the Board of Peace on Gaza.

## How it is made

`draw.py` (Python 3, Pillow, standard fonts only) draws the page as a
1024×1024 PNG — no network, no randomness, the same bytes every run.
`main.ts` copies `entry.png` to the grader's output directory.

```sh
python3 draw.py
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
