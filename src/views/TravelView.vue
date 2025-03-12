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
加菲日本團05/10-05/17
===
![鄭主母](/tokyo/38e81488-44e7-4d54-8cb4-b87f70c99a2e.png)

![皮卡丘](/tokyo/a7cc0e64-47c9-4ae3-8eee-84a32c0f770d.png)

| 日期 | 行程 |
| -------- | -------- |
| 05/10(六) | 到東京✈ / 神田祭 ⛩️| 
| 05/11(日) | 橫濱![pokemon_ball](/tokyo/bfe62b69-3936-4efe-8385-0c10058c0ba7.png)/ 東京地下街🍜| 
| 05/12(一) | 築地市場🍣/ 台場🤖 /日本橋![pokemon_ball](/tokyo/bfe62b69-3936-4efe-8385-0c10058c0ba7.png)| 
| 05/13(二) | 哈利波特🧙 /池袋![pokemon_ball](/tokyo/bfe62b69-3936-4efe-8385-0c10058c0ba7.png)| 
| 05/14(三) | 澀谷![pokemon_ball](/tokyo/bfe62b69-3936-4efe-8385-0c10058c0ba7.png)/新宿(六歌仙)放生🥩 | 
| 05/15(四) | 淺草⛩️ /上野🦖 / 晴空塔![pokemon_ball](/tokyo/bfe62b69-3936-4efe-8385-0c10058c0ba7.png)|
| 05/16(五) | 春日部車站![Shin](/tokyo/14121d78-202d-491c-b4a9-4022adf88ee9.png)/ AEON LakeTown🛍 | 
| 05/17(六) | 搭飛機回台灣✈ | 




# 其他連結

[晴空塔的寄物櫃使用狀況](<https://www.akilocker.biz/mobile/area.html?locationId=SOLAMACHI&lang=4>)

[車站的寄物櫃使用狀況](https://cloak.ecbo.io/zh-TW/jpn/city/tokyo/184)

[快樂龍的地標](https://maps.app.goo.gl/wC7nH3pbngAqLYmV7)

[出國前準備](/tokyo/#/travellist)

**05/10 東京✈ / 神田祭**
==
✈ 飛機資訊

TR898 
桃園國際機場(第一航廈)

06:40➔日本成田國際機場(第一航廈)10:45 

在機場搭Access特快(橘色車車)

![](/tokyo/0b02a06d-6a97-4398-9ad6-be66f920c4bf.png)

行李就是先寄放晴空塔

吃午餐後再去秋葉原看神田祭

神田祭

![](/tokyo/0724270b-abef-40af-925c-38cec6d48293.png)

看完祭典可以先回民宿休息 或是 逛秋葉原
 
記得買水!!

___

**05/11 橫濱 / 東京地下街**
==
先去橫濱逛街 中華料理 關公廟 媽祖廟

![](/tokyo/145859b4-60b4-4858-b6d7-355265671306.png)

橫濱車站東口的0101 丸井百貨8 樓--寶可夢中心

牛排飯 Center Beef 橫濱關內本店

橫濱市區是搭港未來線(刷卡)
![](/tokyo/c235fe4f-e3f1-425c-83c4-d0acb56d09e8.png)

從橫濱搭車去東京車站逛逛地下街

* 東京車站一番街/拉麵街和大丸百貨/東京中城八重洲在八重洲口

* 皇居，KITTE，新舊丸大樓，丸之內站舍在丸之內口

![](/tokyo/78ed0ff7-4a69-48d6-8efe-29c858466c8d.png)

___

**05/12 築地市場 / 台場 /日本橋**
==
* 築地市場

![](/tokyo/f8c23643-36e4-4d9b-beff-c51c6581b60e.png)

* 台場(千客萬來 / 台場)

![](/tokyo/72cf0672-f064-478d-a8a8-f3da59eb3f13.png)

___

**05/13 哈利波特 / 池袋**
==
![](/tokyo/9df71337-a09f-4bb2-8356-2495ecd7298e.png)
![](/tokyo/a96d4766-0c4a-49c7-be65-df8fcfb25496.png)
___

**05/14 澀谷 / 新宿**
==
[快樂龍的地標](https://maps.app.goo.gl/wC7nH3pbngAqLYmV7)
___

**05/15 淺草 /上野**
==
___

**05/16 春日部 / OUTLET**
==

* 春日部車站/ AEON LakeTown(有OUTLET) |

![](/tokyo/cf984788-bce1-4dc0-ab22-36100313224b.png)
___

**05/17 回台灣**
==
`);

// 將 Markdown 轉為 HTML
const htmlContent = computed(() => marked(markdownContent.value));
</script>

<template>
  <div class="Travel"></div>
  <div class="markdown-content" v-html="htmlContent"></div>
</template>

<style>
.markdown-content {
  padding: 20px;
}

.markdown-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.markdown-content th,
.markdown-content td {
  border: 2px solid #888;
  padding: 12px;
  text-align: left;
  font-size: 16px;
}

.markdown-content th {
  background-color: #e0e0e0;
  font-weight: bold;
  color: #ff2f00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* 添加文字陰影 */
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