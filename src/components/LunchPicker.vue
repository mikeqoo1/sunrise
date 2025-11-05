<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold mb-4">中午吃什麼？</h1>

    <!-- 篩選區 -->
    <div class="mb-4 space-x-2">
      <label v-for="type in allTypes" :key="type" class="inline-flex items-center">
        <input type="checkbox" v-model="selectedTypes" :value="type" class="mr-1">
        {{ type }}
      </label>
    </div>

    <!-- 抽選按鈕 -->
    <button @click="pickRestaurant" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      抽一家店 🍱
    </button>

    <!-- 結果顯示 -->
    <div v-if="picked" class="mt-6 p-4 bg-white rounded shadow">
      <h2 class="text-xl font-semibold">今天吃：{{ picked.name }}</h2>
      <p>類型：{{ picked.types.join('、') }}</p>
      <p>價格：約 {{ picked.price }} 元</p>
      <p>備註：{{ picked.note }}</p>
      <a :href="picked.mapUrl" target="_blank" class="text-blue-600 underline">查看地圖</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type Restaurant = {
  name: string
  types: string[]
  price: number
  distance: string
  note: string
  mapUrl: string
}

const allTypes = [
  '飯', '麵', '水餃', '火鍋', '中式', '西式', '早餐', '線上支付',
  '遠', '巨無霸', '減薪家', '小點心', '奢侈'
]


const selectedTypes = ref<string[]>([])

const picked = ref<Restaurant | null>(null)

const restaurants: Restaurant[] = [
  {
    name: '八方雲集',
    types: ['水餃', '麵', '中式', '線上支付'],
    price: 100,
    distance: '5分鐘',
    note: '就是八方(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=八方雲集 台北聯合店'
  },
  {
    name: 'Hërs biströ她/的餐酒',
    types: ['飯', '麵', '西式', '線上支付'],
    price: 150,
    distance: '5分鐘',
    note: '好吃的義大利麵也有飯(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=Hërs biströ她/的餐酒'
  },
  {
    name: '雅加達活力早餐',
    types: ['麵', '早餐'],
    price: 100,
    distance: '5分鐘',
    note: '公司附近的早餐店 有鍋燒麵 價格稍貴',
    mapUrl: 'https://maps.google.com/?q=雅加達活力早餐'
  },
  {
    name: '凱琳手作蛋餅',
    types: ['麵', '早餐', '線上支付'],
    price: 90,
    distance: '5分鐘',
    note: '好吃的蛋餅(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=凱琳手作蛋餅'
  },
  {
    name: '森小館',
    types: ['飯', '中式', '巨無霸'],
    price: 200,
    distance: '5分鐘',
    note: '內用湯跟飯還有飲料不用錢 可以吃合菜',
    mapUrl: 'https://maps.google.com/?q=森小館'
  },
  {
    name: '老哥（雞肉飯·乾拌麵）',
    types: ['飯', '麵', '中式'],
    price: 100,
    distance: '5分鐘',
    note: 'G肉飯',
    mapUrl: 'https://maps.google.com/?q=老哥（雞肉飯·乾拌麵）'
  },
  {
    name: '二代福林福州乾拌麵',
    types: ['麵', '中式'],
    price: 100,
    distance: '5分鐘',
    note: '嘎菲不喜歡這家的環境',
    mapUrl: 'https://maps.google.com/?q=二代福林福州乾拌麵'
  },
  {
    name: '安好食-大巨蛋店 早午餐 炒麵',
    types: ['麵', '早餐', '線上支付'],
    price: 100,
    distance: '5分鐘',
    note: '阿雄很愛去的早餐店(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=安好食-大巨蛋店 早午餐 炒麵'
  },
  {
    name: 'BURGER OUT',
    types: ['西式'],
    price: 200,
    distance: '5分鐘',
    note: '人氣很旺的漢堡跟炸G店',
    mapUrl: 'https://maps.google.com/?q=BURGER OUT'
  },
  {
    name: '湯餅舖 市府',
    types: ['飯', '麵', '中式'],
    price: 100,
    distance: '5分鐘',
    note: '王中偉很愛去的店',
    mapUrl: 'https://maps.google.com/?q=湯餅舖 市府'
  },
  {
    name: '巢飯麵食館（市府店）',
    types: ['飯', '麵', '中式'],
    price: 150,
    distance: '5分鐘',
    note: '很好吃的炒飯~~也有麵',
    mapUrl: 'https://maps.google.com/?q=巢飯麵食館（市府店）'
  },
  {
    name: '養鍋 石頭涮涮鍋 台北松菸店（寵物友善餐廳）',
    types: ['火鍋', '線上支付', '奢侈'],
    price: 300,
    distance: '5分鐘',
    note: '火鍋店翁中午時間不夠吃(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=養鍋 石頭涮涮鍋 台北松菸店（寵物友善餐廳）'
  },
  {
    name: '韓川館',
    types: ['飯', '麵', '線上支付'],
    price: 300,
    distance: '5分鐘',
    note: '好吃的韓式料理 中午都簡單點 晚上可以吃炸G(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=韓川館正宗韓式料理店'
  },
  {
    name: '味家魯肉飯',
    types: ['飯', '麵', '中式'],
    price: 150,
    distance: '5分鐘',
    note: '超好吃的小吃店但是外帶比較方便',
    mapUrl: 'https://maps.google.com/?q=味家魯肉飯'
  },
  {
    name: '松菸地下街',
    types: ['飯', '麵', '中式', '西式', '線上支付'],
    price: 100 - 300,
    distance: '5分鐘',
    note: '松菸地下街 很多吃的 隨便找(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=松山文創園區'
  },
  {
    name: '巧之味手工水餃 永吉店',
    types: ['水餃', '中式', '遠'],
    price: 120,
    distance: '15分鐘',
    note: '水餃專賣店',
    mapUrl: 'https://maps.google.com/?q=巧之味手工水餃 永吉店'
  },
  {
    name: '明峯排骨',
    types: ['飯', '中式', '遠'],
    price: 120,
    distance: '15分鐘',
    note: '便當專賣店',
    mapUrl: 'https://maps.google.com/?q=明峯排骨'
  },
  {
    name: '宏品炒飯麵食專賣',
    types: ['飯', '麵', '中式', '遠', '巨無霸'],
    price: 150,
    distance: '15分鐘',
    note: '份量很大的炒飯跟麵 很爽',
    mapUrl: 'https://maps.google.com/?q=宏品炒飯麵食專賣'
  },
  {
    name: '麵屋天曉得-永吉店',
    types: ['麵', '線上支付', '遠'],
    price: 200,
    distance: '15分鐘(可以line pay)',
    note: '拉麵店',
    mapUrl: 'https://maps.google.com/?q=麵屋天曉得-永吉店'
  },
  {
    name: '凱薩溫雲南泰式料理',
    types: ['飯', '麵', '遠'],
    price: 200,
    distance: '15分鐘',
    note: '雲南和菜',
    mapUrl: 'https://maps.google.com/?q=凱薩溫雲南泰式料理'
  },
  {
    name: '食米 四川巴適',
    types: ['飯', '麵', '中式', '線上支付', '遠'],
    price: 200,
    distance: '15分鐘',
    note: '不太會辣 好吃(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=食米 四川巴適'
  },
  {
    name: '亞米小廚 yummy kitchenette',
    types: ['飯', '麵', '西式', '線上支付', '遠'],
    price: 200,
    distance: '15分鐘',
    note: '好吃的小餐館(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=亞米小廚 yummy kitchenette'
  },
  {
    name: '瑞記海南雞飯 永吉店',
    types: ['飯', '麵', '中式', '線上支付', '遠', '奢侈'],
    price: 300,
    distance: '15分鐘',
    note: '好吃但稍微貴一點(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=瑞記海南雞飯 永吉店'
  },
  {
    name: '胡饕米粉湯55年老店',
    types: ['飯', '麵', '中式', '線上支付', '遠'],
    price: 200,
    distance: '15分鐘',
    note: '屎魯很愛的米粉湯(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=胡饕米粉湯55年老店（台北市府店）台北小吃 台北必吃 市政府美食 市政府小吃 信義區美食 信義區小吃'
  },
  {
    name: '雙和盛麵餃館1987',
    types: ['飯', '麵', '中式', '遠', '巨無霸'],
    price: 200,
    distance: '15分鐘',
    note: '超大份量 好爽',
    mapUrl: 'https://maps.google.com/?q=雙和盛麵餃館1987'
  },
  {
    name: '福嗑',
    types: ['西式', '線上支付', '遠'],
    price: 200,
    distance: '15分鐘',
    note: '古巴三明治(可以line pay)',
    mapUrl: 'https://maps.google.com/?q=福嗑 Lucky eat 美式漢堡·古巴三明治·輕食·飲品'
  },
  {
    name: '永吉油飯',
    types: ['飯', '麵', '中式', '遠'],
    price: 100,
    distance: '15分鐘',
    note: '油飯小吃店',
    mapUrl: 'https://maps.google.com/?q=永吉油飯'
  },
  {
    name: '小樂天餃子館',
    types: ['水餃', '麵', '中式', '遠'],
    price: 120,
    distance: '15分鐘',
    note: '餃子店',
    mapUrl: 'https://maps.google.com/?q=小樂天餃子館'
  },
  {
    name: '雞湯桑 Torisan 市府店',
    types: ['麵', '線上支付', '遠', '減薪家', '奢侈'],
    price: 300,
    distance: '15分鐘',
    note: '減薪家賠錢專用5',
    mapUrl: 'https://maps.google.com/?q=雞湯桑 Torisan 市府店'
  },
  {
    name: '芝香雞肉飯 涼麵',
    types: ['飯', '麵', '中式', '遠'],
    price: 120,
    distance: '15分鐘',
    note: '好吃的飯跟麵',
    mapUrl: 'https://maps.google.com/?q=芝香雞肉飯 涼麵'
  },
  {
    name: '珍品九如湖州粽專賣店',
    types: ['飯', '麵', '中式', '遠'],
    price: 120,
    distance: '15分鐘',
    note: '有賣粽子跟飯跟麵的店家',
    mapUrl: 'https://maps.google.com/?q=珍品九如湖州粽專賣店'
  },
  {
    name: '福勝亭 市府店',
    types: ['飯', '線上支付', '遠', '減薪家'],
    price: 200,
    distance: '15分鐘',
    note: '減薪家賠錢專用4',
    mapUrl: 'https://maps.google.com/?q=福勝亭 市府店'
  },
  {
    name: '摩斯漢堡 台北市府店',
    types: ['西式', '線上支付', '遠'],
    price: 200,
    distance: '15分鐘',
    note: '摩斯',
    mapUrl: 'https://maps.google.com/?q=摩斯漢堡 台北市府店'
  },
  {
    name: 'すき家 SUKIYA 台北市政府店',
    types: ['飯', '線上支付', '遠'],
    price: 100,
    distance: '15分鐘',
    note: 'すき家 SUKIYA',
    mapUrl: 'https://maps.google.com/?q=すき家 SUKIYA 台北市政府店'
  },
  {
    name: '龍涎居好湯 信義永吉店',
    types: ['飯', '麵', '線上支付', '遠', '奢侈'],
    price: 300,
    distance: '15分鐘',
    note: '龍涎居好湯 冬天應該很適合',
    mapUrl: 'https://maps.google.com/?q=龍涎居好湯 信義永吉店'
  },
  {
    name: '武鼎越豐',
    types: ['飯', '麵', '遠', '巨無霸'],
    price: 200,
    distance: '15分鐘',
    note: '份量不錯好吃的越式料理',
    mapUrl: 'https://maps.app.goo.gl/fSs8YWbFtP3WgpwQ8'
  },
  {
    name: '新牛屋（牛一牛）厚切牛排-永吉店',
    types: ['線上支付', '遠', '巨無霸', '減薪家', '奢侈'],
    price: 300,
    distance: '15分鐘',
    note: '減薪家賠錢專用',
    mapUrl: 'https://maps.app.goo.gl/vbvwUmZG1LTiAUMG7'
  },
  {
    name: '牛肉麵．雞湯 新信義店',
    types: ['麵', '中式', '遠', '線上支付', '奢侈'],
    price: 300,
    distance: '15分鐘',
    note: '好吃的牛肉麵評價很高但是距離比較遠',
    mapUrl: 'https://maps.app.goo.gl/yJdnGAZX2wrsSi4W7'
  },
  {
    name: '半島牛肉麵',
    types: ['麵', '中式', '遠', '線上支付'],
    price: 250,
    distance: '20分鐘',
    note: '好吃的牛肉麵評價很高比較遠',
    mapUrl: 'https://maps.app.goo.gl/ZQxAzVtZmph9U5Nu9'
  },
  {
    name: '靜岡勝政日式豬排 統一時代台北店',
    types: ['飯', '遠', '線上支付', '減薪家', '奢侈'],
    price: 400,
    distance: '15分鐘',
    note: '減薪家賠錢專用2',
    mapUrl: 'https://maps.app.goo.gl/eMiCY3SZ4MnxEsJWA'
  },
  {
    name: '新娘子麵館（忠孝店）',
    types: ['麵', '遠', '線上支付'],
    price: 150,
    distance: '15分鐘',
    note: '皮蛋麵 讚',
    mapUrl: 'https://maps.app.goo.gl/QsTcE6aj5SvwSegJ8'
  },
  {
    name: '丸舢拉麵 市府店',
    types: ['麵', '遠', '線上支付', '減薪家', '奢侈'],
    price: 300,
    distance: '15分鐘',
    note: '減薪家賠錢專用3',
    mapUrl: 'https://maps.app.goo.gl/j2MK5uB7R5xqT7oQ7'
  },
  {
    name: '麵大廚—市府店',
    types: ['麵', '遠', '線上支付'],
    price: 200,
    distance: '15分鐘',
    note: '豆花吃到飽',
    mapUrl: 'https://maps.app.goo.gl/HwrQTwhUo2yE8JUG7'
  },
  {
    name: '30巷咖哩飯',
    types: ['飯', '中式', '遠'],
    price: 120,
    distance: '15分鐘',
    note: '30巷咖哩飯',
    mapUrl: 'https://maps.app.goo.gl/mQNpDugpLjQoz661A'
  },
  // {
  //   name: '阿瑋紅燒排骨(倒閉)',
  //   types: ['飯', '麵', '中式', '遠'],
  //   price: 120,
  //   distance: '15分鐘',
  //   note: '有G腿 有排骨 有飯 有麵 一般的小吃店',
  //   mapUrl: 'https://maps.google.com/?q=阿瑋紅燒排骨'
  // },
  {
    name: '冠美小吃',
    types: ['水餃', '麵', '飯', '中式', '遠', '巨無霸'],
    price: 100,
    distance: '15分鐘',
    note: '小菜給很多',
    mapUrl: 'https://maps.app.goo.gl/GezuDLdD9fJsNiN47'
  },
  {
    name: '30號早餐吧',
    types: ['麵', '早餐'],
    price: 100,
    distance: '10分鐘',
    note: '在全聯旁邊的早餐店有養一隻黑狗',
    mapUrl: 'https://maps.app.goo.gl/vKQBWJ5fQF11dhKr5'
  },
  {
    name: '老三豬腳永吉店',
    types: ['飯', '麵', '中式', '遠'],
    price: 200,
    distance: '15分鐘',
    note: '好吃豬腳飯',
    mapUrl: 'https://maps.app.goo.gl/1qmu2UjGtnNGMrYf6'
  },
  {
    name: '捲餅達人 (Pancake Roll)',
    types: ['小點心', '遠', '奢侈'],
    price: 150,
    distance: '15分鐘',
    note: '有名的烤鴨捲餅',
    mapUrl: 'https://maps.app.goo.gl/vk7ZEZevmxp4A8yy9'
  },
  {
    name: '貳虎 OFFTEA 永吉店',
    types: ['小點心', '遠', '奢侈'],
    price: 100,
    distance: '15分鐘',
    note: '超好吃G排',
    mapUrl: 'https://maps.app.goo.gl/qdsMjiQm87hFZgkaA'
  },
  {
    name: '丸 地瓜球 永吉店',
    types: ['小點心', '遠'],
    price: 80,
    distance: '15分鐘',
    note: '讚讚 地瓜球',
    mapUrl: 'https://maps.app.goo.gl/J2ouV9h8sjz2984s6'
  },
  {
    name: 'BURNT BURGER SOCIAL CLUB',
    types: ['西式', '遠', '奢侈'],
    price: 400,
    distance: '15分鐘',
    note: '超好吃漢堡跟肯窮薯條',
    mapUrl: 'https://maps.app.goo.gl/gpECGit7PsptkMcq5'
  },

]

function pickRestaurant() {
  const filtered = selectedTypes.value.length
    ? restaurants.filter(r => r.types.some(t => selectedTypes.value.includes(t)))
    : restaurants

  if (filtered.length === 0) {
    alert('沒有符合條件的店家')
    return
  }

  const randomIndex = Math.floor(Math.random() * filtered.length)
  picked.value = filtered[randomIndex]
}
</script>

<style>
body {
  font-family: 'Helvetica Neue', sans-serif;
}
</style>
