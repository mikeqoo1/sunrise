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

![](/tokyo/第1天時刻表.png)

行李就是先寄放晴空塔

以下行程用地鐵一日券

押上到秋葉原、日本橋看神田祭 (地鐵一日券)

晚上再到淺草吃飯 去藥妝店買日用品 (地鐵一日券)

淺草再回押上逛超市 (地鐵一日券)

神田祭

![](/tokyo/第1天時刻表2.png)

秋葉原車站地圖

![](/tokyo/第1天秋葉原車站地圖.png)

看完祭典可以先回民宿休息 或是 逛秋葉原
 
記得買水!!
___

**05/11(日) 橫濱 / 東京地下街**
==
先去橫濱逛街 中華料理 關公廟 媽祖廟

**可以不用轉車!!**

![](/tokyo/第2天時刻表.png)

看狀況要不要先去看神轎宮入再去橫濱

![](/tokyo/第2天時刻表2.png)

橫濱車站東口的0101 丸井百貨8 樓--寶可夢中心

![](/tokyo/第2天寶可夢人孔蓋.png)

1. 戀人皮卡丘 人孔蓋
2. 皮卡丘+可達鴨+腕力 人孔蓋
3. 皮卡丘+比克提尼+小卡比獸 人孔蓋
4. 皮卡丘+雷丘 人孔蓋
5. 皮卡丘+大嘴鷗 人孔蓋
6. 波加曼郵筒
7. 皮卡丘、伊布郵筒

牛排飯 Center Beef 橫濱關內本店

橫濱市區是搭港未來線(刷卡)

![](/tokyo/第2天橫濱景點地圖.png)

從橫濱搭車去東京車站逛逛地下街

* 東京車站一番街/拉麵街和大丸百貨/東京中城八重洲在八重洲口

* 皇居，KITTE，新舊丸大樓，丸之內站舍在丸之內口

![](/tokyo/第2天時刻表3.png)

![](/tokyo/第2天東京車站地圖.png)

JR「東京站」八重洲北口步行5分鐘・東京Metro 銀座線、東西線「日本橋站」B2出口步行3分鐘

日本橋高島屋S.C. 東館 5F(如果有時間可以當天直接去，雖然沒時間的機率很高)

#### 東京車站限定伴手禮

https://tokyo.letsgojp.com/archives/496735/


回程從大手町站搭半藏門線回押上

![](/tokyo/第2天時刻表4.png)
___

**05/12(一) 澀谷 / 新宿**
==
[快樂龍的地標](https://maps.app.goo.gl/wC7nH3pbngAqLYmV7)

![](/tokyo/第3天時刻表.png)

**早上先在澀谷晃晃**

有 "KITH" "Sports shop Gallery 2" "ballaholic TOKYO" 3間店可以去逛逛

![](/tokyo/第3天澀谷景點地圖.png)

中午再去新宿吃六歌仙

六歌仙燒肉在西新宿，這裏交通四通八達最少有超過20條路線匯集，

其中最靠近的是地鐵大江戶線的「新宿西口站」出站就到了，

或者從「JR新宿站」中央西口出來，走路也約2~3分鐘而已

![](/tokyo/第3天六歌仙大樓.png)

在這棟裡面

![](/tokyo/第3天新宿地圖.png)

吃完之後就散會，自由活動時間，大家晚上再見
___

**05/13(二) 哈利波特 / 池袋**
==

### 哈利波特

![](/tokyo/第4天時刻表.png)

![](/tokyo/第4天哈利波特地圖.png)

### 池袋 (這邊用西瓜卡)

![](/tokyo/第4天時刻表2.png)

![](/tokyo/第4天池袋地圖.png)
___

**05/14(三) 築地市場 / 台場 /日本橋**
==
### 台場(千客萬來 / 台場)

![](/tokyo/第5天時刻表.png)

搭乘地鐵：

搭乘東京地鐵有樂町線到「豐洲站」，步行10分鐘。

搭乘百合鷗號至「市場前站」後，步行4分鐘。

![](/tokyo/第5天車站.png)

### 新橋-博品館

我以為他靠近銀座，其實是在新橋耶 哈哈哈

JR新橋站銀座口步行3分鐘

![](/tokyo/第5天新橋-博品館.png)

### 日本橋 快閃

JR「東京站」八重洲北口步行5分鐘・東京Metro 銀座線、東西線「日本橋站」B2出口步行3分鐘

日本橋高島屋S.C. 東館  5F

![](/tokyo/第5天時刻表2.png)

:::info
感覺這天就可以肥家休息了 大熊煮飯
:::
___

**05/15(四) 淺草 /上野**
==
![](/tokyo/第6天時刻表.png)

!! 都走1號公園口 !!

## 上野動物園

建議早上，4點動物會進欄休息，動物3點時就累累，越早活力越好

【時間】9:30~17:00 (最終售票時間 : 16:00)，5/12(一) 休館

【門票】¥600

【明星】北極熊、熊貓森林

## 東京國立科學博物館

![](/tokyo/第6天科博館地圖.png)

【停留】約3小時

【時間】9:00~17:00  (最終入館時間 : 16:30) / 休園 : 禮拜一、 [閉館日查詢](https://www.kahaku.go.jp/event/ueno.php)
【
門票】常設展-個人參觀 : ¥630

【設備】語音導覽租借 : ¥630

「1比1的擬真動物」「恐龍化石🦕」「地球科學」

![](/tokyo/第6天科博館地圖2.png)

## 東京國立博物館

為世界排名第15名，可以偷看一下

## 阿美橫町

![](/tokyo/第6天阿美橫町地圖.png)
___

**05/16(五) 龜有/ 淺草三社祭⛩️
==
這天看看要去比較遠的[OUTLET行程] 還是[龜有]

### 春日部車站/ AEON LakeTown(有OUTLET)

![](/tokyo/第7天時刻表.png)

- LaLa garden 3F(302)-蠟筆小新遊樂場

![](/tokyo/第7天蠟筆小新遊樂場.png)

- 春日部情報発信館 ぷらっとかすかべ-說搬家了

- 可能可以看到紫藤花(4月下旬-5月中旬)

### 龜有/ 淺草三社祭⛩️

![](/tokyo/第7天時刻表2.png)

![](/tokyo/第7天烏龍派出所.png)

![](/tokyo/第7天烏龍派出所2.png)

![](/tokyo/第7天時刻表3.png)
___

**05/17 回台灣**
12:45的飛機 第一航廈

![](/tokyo/第8天時刻表.png)

![](/tokyo/第8天時刻表2.png)

==
`);

// 將 Markdown 轉為 HTML
const htmlContent = computed(() => marked(markdownContent.value));
</script>

<template>
  <div class="container">
    <div class="cover-image">
      <img src="/2025封面.png" alt="封面图" />
    </div>
    <div class="markdown-content" v-html="htmlContent"></div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  /* 将内容垂直排列 */
  align-items: center;
  /* 水平居中 */
  padding: 20px;
}

.cover-image img {
  max-width: 88%;
  /* 设置图片宽度为容器的最大宽度 */
  height: auto;
  /* 保持纵横比 */
  margin-bottom: 20px;
  /* 增加图片和内容之间的间距 */
}

.markdown-content {
  width: 100%;
  /* 确保内容区域填满容器 */
  max-width: 800px;
  /* 限制内容区域的最大宽度 */
  padding: 20px;
}

/* 其他样式保持不变 */
.markdown-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.markdown-content th,
.markdown-content td {
  border: 2px solid #7f8b73;
  padding: 12px;
  text-align: left;
  font-size: 16px;
}

.markdown-content th {
  background-color: #aee0e6;
  font-weight: bold;
  color: #ff2f00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.markdown-content td {
  color: #289393;
}

.markdown-content tr:nth-child(even) {
  background-color: #f9f9f9;
}

.markdown-content tr:hover {
  background-color: #f1f1f1;
  transition: background-color 0.3s ease;
}

@media (max-width: 600px) {
  .markdown-content table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>