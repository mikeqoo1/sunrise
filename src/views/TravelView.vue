<script setup lang="ts">
import { marked } from 'marked';
import { ref, computed } from 'vue';

// 定義自訂渲染器
const renderer = new marked.Renderer();

// 修正 image 渲染器，接受物件參數
renderer.image = ({ href, title, text }: { href: string; title: string | null | undefined; text: string }) => {
  // 為圖片添加 /tokyo/ 前綴，與 GitHub Pages 子路徑匹配
  const imgSrc = `/tokyo/${href.replace('/', '')}`;
  return `<img src="${imgSrc}" alt="${text || ''}" ${title ? `title="${title}"` : ''} />`;
};

// 定義 Markdown 內容
const markdownContent = ref(`
快樂東京團05/10-05/17
===

![皮卡丘](/tokyo/奔跑皮卡秋.png)

| 日期 | 行程 |
| -------- | -------- |
| 05/10(六) | 到東京✈ / 神田祭 ⛩️|
| 05/11(日) | 神田祭 ⛩️/ 橫濱![pokemon_ball](/tokyo/寶貝球.png) |
| 05/12(一) | 澀谷![pokemon_ball](/tokyo/寶貝球.png)/ 新宿(六歌仙)放生🥩 |
| 05/13(二) | 哈利波特🧙 / 池袋![pokemon_ball](/tokyo/寶貝球.png) |
| 05/14(三) | 千客萬來🤖 / 日本橋![pokemon_ball](/tokyo/寶貝球.png)/ 晴空塔![pokemon_ball](/tokyo/寶貝球.png) |
| 05/15(四) | 上野🦖 / 東京車站🍜 |
| 05/16(五) | 龜有 / 淺草三社祭⛩️ |
| 05/17(六) | 搭飛機回台灣✈ |

# 其他連結

第一天當地要買 牙膏 牙刷 沐浴乳 鏡子 梳子 調味料

[晴空塔的寄物櫃使用狀況](<https://www.akilocker.biz/mobile/area.html?locationId=SOLAMACHI&lang=4>)

[車站的寄物櫃使用狀況](https://cloak.ecbo.io/zh-TW/jpn/city/tokyo/184)

[快樂龍的地標](https://maps.app.goo.gl/wC7nH3pbngAqLYmV7)

[入境日本網站](https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/)

[出國前準備](/tokyo/#/travellist)

[東京車站地鐵圖](/tokyo/#/tokyostationsubway)

![72小時票](/tokyo/72小時票.png)

**05/10(六) ✈東京 / 神田祭**
==
✈ 飛機資訊

TR876
桃園國際機場(第一航廈)

06:40➔日本成田國際機場(第一航廈)10:45

在機場搭Access特快(橘色車車)

![](/tokyo/2025Tokyo/第1天時刻表.png)

行李就是先寄放晴空塔

以下行程用地鐵一日券

押上到秋葉原、日本橋看神田祭 (地鐵一日券)

晚上再到淺草吃飯 去藥妝店買日用品 (地鐵一日券)

淺草再回押上逛超市 (地鐵一日券)

神田祭

![](/tokyo/2025Tokyo/第1天時刻表2.png)

秋葉原車站地圖

![](/tokyo/第1天秋葉原車站地圖.png)

看完祭典可以先回民宿休息 或是 逛秋葉原

記得買水!!
___

**05/11(日) 橫濱 / 東京地下街**
==
先去橫濱逛街 中華料理 關公廟 媽祖廟

**可以不用轉車!!**

![](/tokyo/2025Tokyo/第2天時刻表.png)

看狀況要不要先去看神轎宮入再去橫濱

![](/tokyo/2025Tokyo/第2天時刻表2.png)

橫濱車站東口的0101 丸井百貨8 樓--寶可夢中心

![](/tokyo/2025Tokyo/第2天寶可夢人孔蓋.png)

1. 戀人皮卡丘 人孔蓋
2. 皮卡丘+可達鴨+腕力 人孔蓋
3. 皮卡丘+比克提尼+小卡比獸 人孔蓋
4. 皮卡丘+雷丘 人孔蓋
5. 皮卡丘+大嘴鷗 人孔蓋
6. 波加曼郵筒
7. 皮卡丘、伊布郵筒

牛排飯 Center Beef 橫濱關內本店

橫濱市區是搭港未來線(刷卡)

![](/tokyo/2025Tokyo/第2天橫濱景點地圖.png)

從橫濱搭車去東京車站逛逛地下街

* 東京車站一番街/拉麵街和大丸百貨/東京中城八重洲在八重洲口

* 皇居，KITTE，新舊丸大樓，丸之內站舍在丸之內口

![](/tokyo/2025Tokyo/第2天時刻表3.png)

![](/tokyo/2025Tokyo/第2天東京車站地圖.png)

JR「東京站」八重洲北口步行5分鐘・東京Metro 銀座線、東西線「日本橋站」B2出口步行3分鐘

日本橋高島屋S.C. 東館 5F(如果有時間可以當天直接去，雖然沒時間的機率很高)

#### 東京車站限定伴手禮

https://tokyo.letsgojp.com/archives/496735/


回程從大手町站搭半藏門線回押上

![](/tokyo/2025Tokyo/第2天時刻表4.png)
___

**05/12(一) 澀谷 / 新宿**
==
[快樂龍的地標](https://maps.app.goo.gl/wC7nH3pbngAqLYmV7)

![](/tokyo/2025Tokyo/第3天時刻表.png)

**早上先在澀谷晃晃**

有 "KITH" "Sports shop Gallery 2" "ballaholic TOKYO" 3間店可以去逛逛

![](/tokyo/2025Tokyo/第3天澀谷景點地圖.png)

中午再去新宿吃六歌仙

六歌仙燒肉在西新宿，這裏交通四通八達最少有超過20條路線匯集，

其中最靠近的是地鐵大江戶線的「新宿西口站」出站就到了，

或者從「JR新宿站」中央西口出來，走路也約2~3分鐘而已

![](/tokyo/2025Tokyo/第3天六歌仙大樓.png)

在這棟裡面

![](/tokyo/2025Tokyo/第3天新宿地圖.png)

吃完之後就散會，自由活動時間，大家晚上再見
___

**05/13(二) 哈利波特 / 池袋**
==

### 哈利波特

![](/tokyo/2025Tokyo/第4天時刻表.png)

![](/tokyo/2025Tokyo/第4天哈利波特地圖.png)

### 池袋 (這邊用西瓜卡)

![](/tokyo/2025Tokyo/第4天時刻表2.png)

![](/tokyo/2025Tokyo/第4天池袋地圖.png)
___

**05/14(三) 築地市場 / 台場 /日本橋**
==
### 台場(千客萬來 / 台場)

![](/tokyo/2025Tokyo/第5天時刻表.png)

搭乘地鐵：

搭乘東京地鐵有樂町線到「豐洲站」，步行10分鐘。

搭乘百合鷗號至「市場前站」後，步行4分鐘。

![](/tokyo/2025Tokyo/第5天車站.png)

### 新橋-博品館

我以為他靠近銀座，其實是在新橋耶 哈哈哈

JR新橋站銀座口步行3分鐘

![](/tokyo/2025Tokyo/第5天新橋-博品館.png)

### 日本橋 快閃

JR「東京站」八重洲北口步行5分鐘・東京Metro 銀座線、東西線「日本橋站」B2出口步行3分鐘

日本橋高島屋S.C. 東館  5F

![](/tokyo/2025Tokyo/第5天時刻表2.png)

:::info
感覺這天就可以肥家休息了 大熊煮飯
:::
___

**05/15(四) 淺草 /上野**
==
![](/tokyo/2025Tokyo/第6天時刻表.png)

!! 都走1號公園口 !!

## 上野動物園

建議早上，4點動物會進欄休息，動物3點時就累累，越早活力越好

【時間】9:30~17:00 (最終售票時間 : 16:00)，5/12(一) 休館

【門票】¥600

【明星】北極熊、熊貓森林

## 東京國立科學博物館

![](/tokyo/2025Tokyo/第6天科博館地圖.png)

【停留】約3小時

【時間】9:00~17:00  (最終入館時間 : 16:30) / 休園 : 禮拜一、 [閉館日查詢](https://www.kahaku.go.jp/event/ueno.php)
【
門票】常設展-個人參觀 : ¥630

【設備】語音導覽租借 : ¥630

「1比1的擬真動物」「恐龍化石🦕」「地球科學」

![](/tokyo/2025Tokyo/第6天科博館地圖2.png)

## 東京國立博物館

為世界排名第15名，可以偷看一下

## 阿美橫町

![](/tokyo/2025Tokyo/第6天阿美橫町地圖.png)
___

**05/16(五) 龜有/ 淺草三社祭⛩️
==
這天看看要去比較遠的[OUTLET行程] 還是[龜有]

### 春日部車站/ AEON LakeTown(有OUTLET)

![](/tokyo/2025Tokyo/第7天時刻表.png)

- LaLa garden 3F(302)-蠟筆小新遊樂場

![](/tokyo/2025Tokyo/第7天蠟筆小新遊樂場.png)

- 春日部情報発信館 ぷらっとかすかべ-說搬家了

- 可能可以看到紫藤花(4月下旬-5月中旬)

### 龜有/ 淺草三社祭⛩️

![](/tokyo/2025Tokyo/第7天時刻表2.png)

![](/tokyo/2025Tokyo/第7天烏龍派出所.png)

![](/tokyo/2025Tokyo/第7天烏龍派出所2.png)

![](/tokyo/2025Tokyo/第7天時刻表3.png)
___

**05/17 回台灣**
12:45的飛機 第一航廈

![](/tokyo/2025Tokyo/第8天時刻表.png)

![](/tokyo/2025Tokyo/第8天時刻表2.png)

==
`);

// 將 Markdown 轉為 HTML
const htmlContent = computed(() => marked(markdownContent.value));
</script>

<template>
  <div class="travel">
    <section class="hero-card">
      <div class="pill">2025 東京旅行手冊</div>
      <h1>快樂東京團</h1>
      <p class="lede">05/10 - 05/17 八天七夜的完整行程規劃</p>
    </section>

    <section class="card">
      <div class="cover-image">
        <img src="/2025封面.png" alt="封面图" />
      </div>
      <div class="markdown-content" v-html="htmlContent"></div>
    </section>
  </div>
</template>

<style scoped>
.travel {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(140, 248, 216, 0.14), rgba(125, 240, 255, 0.12));
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-soft);
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.32rem 0.8rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.12);
  letter-spacing: 0.08em;
  font-size: 0.82rem;
  color: var(--text-muted);
}

.hero-card h1 {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin: 0.4rem 0;
  font-weight: 700;
}

.lede {
  color: var(--text-muted);
  max-width: 720px;
}

.card {
  padding: 1.2rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cover-image img {
  max-width: 88%;
  height: auto;
  margin-bottom: 1.2rem;
  border-radius: var(--radius-md);
}

.markdown-content {
  width: 100%;
  max-width: 800px;
  padding: 1.2rem;
}

/* Markdown rendered content — use :deep() for v-html */
.markdown-content :deep(h1) {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 1.5rem 0 0.8rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--border);
}

.markdown-content :deep(h2) {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
  margin: 1.2rem 0 0.6rem;
}

.markdown-content :deep(h3) {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--accent-strong);
  margin: 1rem 0 0.5rem;
}

.markdown-content :deep(h4) {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0.8rem 0 0.4rem;
}

.markdown-content :deep(p) {
  color: var(--text-primary);
  line-height: 1.7;
  margin: 0.5rem 0;
}

.markdown-content :deep(strong) {
  color: var(--accent);
  font-weight: 700;
}

.markdown-content :deep(a) {
  color: var(--accent-strong);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.markdown-content :deep(a:hover) {
  color: var(--accent);
}

.markdown-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  margin: 0.8rem 0;
}

.markdown-content :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 1.2rem 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.markdown-content :deep(th),
.markdown-content :deep(td) {
  border: 1px solid var(--border);
  padding: 0.75rem;
  text-align: left;
  font-size: 0.95rem;
}

.markdown-content :deep(th) {
  background: var(--surface-strong);
  font-weight: 700;
  color: var(--accent);
}

.markdown-content :deep(td) {
  color: var(--text-primary);
}

.markdown-content :deep(tr:nth-child(even)) {
  background: rgba(255, 255, 255, 0.02);
}

.markdown-content :deep(tr:hover) {
  background: rgba(255, 255, 255, 0.04);
  transition: background-color 0.3s ease;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  color: var(--text-primary);
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.markdown-content :deep(li) {
  margin: 0.3rem 0;
  color: var(--text-primary);
}

.markdown-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--border);
  margin: 1.5rem 0;
}

.markdown-content :deep(blockquote) {
  border-left: 3px solid var(--accent);
  padding-left: 1rem;
  margin: 0.8rem 0;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .hero-card {
    padding: 1.2rem;
  }

  .hero-card h1 {
    font-size: 1.4rem;
  }

  .card {
    padding: 0.8rem;
  }

  .cover-image img {
    max-width: 100%;
  }

  .markdown-content {
    padding: 0.6rem;
  }

  .markdown-content :deep(h1) {
    font-size: 1.4rem;
  }

  .markdown-content :deep(h2) {
    font-size: 1.15rem;
  }

  .markdown-content :deep(table) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .markdown-content :deep(th),
  .markdown-content :deep(td) {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
}
</style>
