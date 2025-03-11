<script setup lang="ts">
import { marked } from 'marked'; // 引入 marked
import { ref, computed } from 'vue'; // 修正：加上 computed

// 定義 Markdown 內容
const markdownContent = ref(`
加菲日本團05/10-05/17
===
![](img/38e81488-44e7-4d54-8cb4-b87f70c99a2e.png)



[big_pika]: img/a7cc0e64-47c9-4ae3-8eee-84a32c0f770d.png
[pokemon_ball]:img/bfe62b69-3936-4efe-8385-0c10058c0ba7.png


| 日期 | 行程 |
| -------- | -------- |
| 05/10(六) | 到東京 / 神田祭 | 
| 05/11(日) | 橫濱 ![pokemon_ball][] / 東京地下街🍜| 
| 05/12(一) | 築地市場🍣/ 台場  /日本橋 ![pokemon_ball][] | 
| 05/13(二) | 哈利波特  /池袋 ![pokemon_ball][]| 
| 05/14(三) | 澀谷 ![pokemon_ball][] /新宿(六歌仙)放生🥩 | 
| 05/15(四) | 淺草 /上野🦖 / 晴空塔 ![pokemon_ball][] |
| 05/16(五) | 春日部車站/ AEON LakeTown🛍 | 
| 05/17(六) | 搭飛機 | 

**05/10**
==
✈ 飛機資訊

TR898 
桃園國際機場(第一航廈)06:40➔日本成田國際機場(第一航廈)10:45 
在機場搭Access特快(橘色車車)
![](img/0b02a06d-6a97-4398-9ad6-be66f920c4bf.png)

看能不能先到民宿寄放行李或是放在晴空塔
吃午餐後再去秋葉原看神田祭


神田祭
![](img/0724270b-abef-40af-925c-38cec6d48293.png)

看完祭典可以先回民宿休息 或是 逛秋葉原
 
記得買水!!

___

**05/11**
==
先去橫濱逛街
![](img/145859b4-60b4-4858-b6d7-355265671306.png)
橫濱車站東口的0101 丸井百貨8 樓--寶可夢中心

橫濱市區是搭港未來線(刷卡)
![](img/c235fe4f-e3f1-425c-83c4-d0acb56d09e8.png)


從橫濱搭車去東京車站逛逛地下街
* 東京車站一番街/拉麵街和大丸百貨/東京中城八重洲在八重洲口，
* 皇居，KITTE，新舊丸大樓，丸之內站舍在丸之內口
![](img/78ed0ff7-4a69-48d6-8efe-29c858466c8d.png)



___

**05/12**
==
* 築地市場
![](img/f8c23643-36e4-4d9b-beff-c51c6581b60e.png)

* 台場(千客萬來 / 台場)

![](img/72cf0672-f064-478d-a8a8-f3da59eb3f13.png)



___
**05/13**
==
![](img/9df71337-a09f-4bb2-8356-2495ecd7298e.png)


___
**05/16**
==

* 春日部車站/ AEON LakeTown(有OUTLET) |

![](img/cf984788-bce1-4dc0-ab22-36100313224b.png)

`);

// 將 Markdown 轉為 HTML
const htmlContent = computed(() => marked(markdownContent.value));
</script>

<template>
  <div class="Travel"></div>
  <div class="markdown-content" v-html="htmlContent"></div>
</template>

<style scoped>
.markdown-content {
  padding: 20px;
}

/* 自訂表格樣式 */
.markdown-content table {
  border-collapse: collapse;
  width: 100%;
}

.markdown-content th,
.markdown-content td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.markdown-content th {
  background-color: #f2f2f2;
}
</style>