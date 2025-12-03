<script setup lang="ts">
import { marked } from "marked";
import { ref, computed } from "vue";

// 針對圖片自動套用 /2026Osaka 前綴，方便之後直接放圖
const renderer = new marked.Renderer();
renderer.image = ({ href, title, text }: { href: string; title: string | null | undefined; text: string }) => {
  const imgSrc = `/2026Osaka/${href.replace("/", "")}`;
  return `<img src="${imgSrc}" alt="${text || ""}" ${title ? `title="${title}"` : ""} />`;
};

const markdownContent = ref(`
大阪・環球影城 寶可夢萬聖節 10/29-11/04
===

> 範本：日期、航班、時刻表、景點、餐廳、票券連結都預留好欄位，後續直接覆蓋即可。

| 日期 | 節奏 | 備註 |
| --- | --- | --- |
| 10/29(三) | 入境大阪、心齋橋/道頓堀 | 南海/關空特急路線 + 住宿 |
| 10/30(四) | 環球影城 - 白天場 | 任天堂世界、哈利波特區 |
| 10/31(五) | 環球影城 - 寶可夢萬聖節 | 大遊行、夜間變裝 |
| 11/01(六) | 大阪城 / 天王寺 | 天守閣、阿倍野展望台 |
| 11/02(日) | 奈良半日 / 京都黃昏 | 奈良公園餵鹿、河原町 |
| 11/03(一) | 大阪自由日 | 採買/美食 |
| 11/04(二) | 返台 | 關西機場回程 |

# 行前資訊
- 航班：\`TPE → KIX\` / 回程 \`KIX → TPE\`（自行填上班次與時間）
- 住宿：環球影城飯店 1 晚 + 難波/心齋橋 5 晚（填地址 + 入住時間）
- 票券：USJ 門票、Express、任天堂世界入場預約、ICOCA 2.0、關西周遊券 (如需)
- APP：USJ 官方、Google Maps、NAVITIME、Klook/KKday 票券檔
- 行李提醒：萬聖節變裝道具、透明雨衣、行動電源、藥品

# 交通 / 票券連結
- [關西機場 → 市區路線](https://example.com) （替換為實際連結）
- [USJ 官方門票](https://www.usj.co.jp/ticket/)
- [Express Pass & 任天堂世界入場預約](https://www.usj.co.jp/ticket/)
- [ICOCA 2.0](https://example.com)
- [奈良 / 京都一日交通](https://example.com)

---

**10/29(三) 抵達大阪**
==
- 航班：\`班次/時間\`
- 交通：關西機場 → 南海電鐵 / JR 關空特快 → 住宿
- Check-in：\`飯店資訊\`
- 行程：心齋橋 / 道頓堀 / 戎橋 / 吃什麼

![](/osaka/day1.png)

---

**10/30(四) 環球影城 - 白天場**
==
- 早上：入園、任天堂世界（留 QR code/入場時間）
- 中午：園區餐廳 \`(可填餐廳名)\`
- 下午：哈利波特區 / 咒語表演 / 其他想玩設施
- 備註：Locker 位置、寄物櫃大小

![](/osaka/day2.png)

---

**10/31(五) 環球影城 - 寶可夢萬聖節**
==
- 早上：入園、周邊購買時間
- 下午：寶可夢大遊行時間、站位建議
- 晚上：萬聖節變裝、夜間表演、限定餐點
- 備註：若要二刷設施，先排 Express 時段

![](/osaka/day3.png)

---

**11/01(六) 大阪城 / 天王寺**
==
- 大阪城：天守閣、護城河散步
- 天王寺：四天王寺、阿倍野展望台、Q's Mall
- 餐廳：\`可填燒肉/居酒屋\`

![](/osaka/day4.png)

---

**11/02(日) 奈良半日 / 京都黃昏**
==
- 奈良：奈良公園、春日大社、興福寺（鹿煎餅）
- 京都：河原町/先斗町散步、抹茶甜點
- 交通：近鐵/JR 往返時間 + 末班提醒

![](/osaka/day5.png)

---

**11/03(一) 大阪自由日**
==
- 採買清單：\`藥妝 / 伴手禮 / 球衣 / 周邊\`
- 餐廳：\`咖哩 / 串炸 / 章魚燒清單\`
- 可插入臨時活動或預約

![](/osaka/day6.png)

---

**11/04(二) 返台**
==
- 收拾行李、退房時間
- 交通：前往 KIX 的車次/時刻
- 航班：\`班次/時間\`
- 備註：退稅、托運重量、登機前購物

![](/osaka/day7.png)
`);

const htmlContent = computed(() => marked(markdownContent.value, { renderer }));
</script>

<template>
  <div class="container">
    <div class="cover-image">
      <img src="/2026Osaka/2026_osaka.png" alt="2026 Osaka" />
    </div>
    <div class="markdown-content" v-html="htmlContent"></div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.cover-image img {
  max-width: 88%;
  height: auto;
  margin-bottom: 20px;
}

.markdown-content {
  width: 100%;
  max-width: 800px;
  padding: 20px;
}

.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}

.markdown-content th,
.markdown-content td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.markdown-content th {
  background-color: #f2f2f2;
  color: #333;
}

.markdown-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 12px 0;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3 {
  margin: 16px 0 8px;
}

.markdown-content p {
  margin: 8px 0;
}

.markdown-content ul {
  margin: 8px 0 8px 20px;
}

.markdown-content li {
  margin: 4px 0;
}
</style>
