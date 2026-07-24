<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Spot {
  name: string;
  area: string;
  station: string;
  why: string;
  stay: string;
  weekend: string;
  tips: string;
  warning?: string;
}

interface Category {
  icon: string;
  title: string;
  desc: string;
  spots: Spot[];
}

interface RouteStop {
  time: string;
  place: string;
  note: string;
}

interface TravelRoute {
  id: string;
  title: string;
  target: string;
  audience: string;
  stops: RouteStop[];
  transport: string;
}

interface WeekendNote {
  spot: string;
  note: string;
  warn: boolean;
}

interface SourceLink {
  label: string;
  url: string;
}

const categories: Category[] = [
  {
    icon: "🏘️",
    title: "下町散步・昭和遺跡",
    desc: "大正・昭和木造長屋保存地帶，藝術家與咖啡館進駐，和梅田摩天樓景象形成極大對比。",
    spots: [
      {
        name: "中崎町（なかざきちょう）",
        area: "北區・梅田正東",
        station: "地下鐵谷町線「中崎町」站（梅田步行 10 分）",
        why: "大正・昭和初期木造長屋幾乎原封不動保存至今，戰後因行政疏漏逃過都市更新。2000 年代起藝術家與年輕創業者進駐，古著店、獨立咖啡館、小畫廊錯落其中。窄巷拐角有手繪招牌、植物攀爬外牆，是在地人週末下午散步首選。",
        stay: "1.5～2 小時",
        weekend: "週六 ✓ 週日 ✓",
        tips: "大多數咖啡館開門時間在中午 12 點以後，部分古著店公休日為週一或週二，週六日多正常營業。不要依賴 Google Maps 規劃，走進去隨機發現才是精髓。",
      },
      {
        name: "空堀商店街（からほりしょうてんがい）",
        area: "中央區・大阪城西南",
        station: "地下鐵谷町線・長堀鶴見緑地線「谷町六丁目」站 3 號出口步行 1 分",
        why: "東西約 800 公尺的拱廊商店街，沿路保留大正・昭和初期長屋建築（二戰未燃及此片區），現在長屋改裝成文青咖啡館、陶瓷雜貨店、骨董鋪。旁邊的松屋町筋和生根神社一帶可一起步行串聯，觀光客極少。",
        stay: "1.5 小時",
        weekend: "週六 ✓ 週日 △（週日部分商家公休，飲食店影響較小）",
        tips: "傳統老鋪多週日休，若以咖啡館為主目的週日完全沒問題；古著・雜貨類建議週六前往。",
      },
      {
        name: "玉造（たまつくり）日之出商店街",
        area: "東成區",
        station: "JR 大阪環狀線「玉造」站 或 地下鐵長堀鶴見緑地線「玉造」站",
        why: "低調的在地拱廊商店街，周邊散落數十間個性咖啡館，不少是由老民家改裝的隱藏系選豆手沖咖啡店。附近玉造稻荷神社安靜不擁擠，是進城觀光客極少踏入的區域。",
        stay: "1 小時",
        weekend: "週六 ✓ 週日 ✓",
        tips: "商店街本體偏生活用品取向，主要目的是周邊隱藏咖啡館探索。",
      },
      {
        name: "新世界（しんせかい）・Jan Jan 橫丁",
        area: "浪速區",
        station: "地下鐵御堂筋線・堺筋線「動物園前」站，或 JR 大阪環狀線「新今宮」站",
        why: "1912 年仿照巴黎與紐約建造的複合娛樂區，如今保留濃烈的昭和低端遊戲場、串炸攤、老爺爺麻將館氣氛。Jan Jan 橫丁是 180 公尺長的昭和復古拱廊，兩側全是小吃攤和立飲屋。串炸本家 Daruma 也在此區。",
        stay: "1.5 小時（加吃飯 2.5 小時）",
        weekend: "週六 ✓ 週日 ✓",
        tips: "中午 11 點到下午 4 點是觀光人潮高峰；傍晚 5 點後在地居民和上班族進場，最有生活感。",
      },
    ],
  },
  {
    icon: "🏪",
    title: "在地商店街（ローカル商店街）",
    desc: "完全服務本地居民的日常採買場域，觀光客稀少，最真實的大阪庶民日常。",
    spots: [
      {
        name: "天神橋筋商店街（てんじんばしすじしょうてんがい）",
        area: "北區天満",
        station: "地下鐵堺筋線・谷町線「南森町」或「天神橋筋六丁目」站；JR 大阪環狀線「天満」站",
        why: "全日本最長的有頂拱廊商店街，長達 2.6 公里（1 丁目～6 丁目），完全是本地居民的採買場域。中段有「天満天神繁昌亭」上方落語小劇場，四丁目附近食堂、大衆居酒屋密度最高。",
        stay: "1～2 小時（吃飯另計）",
        weekend: "週六 ✓ 週日 ✓（週日個別老舖可能休，但整體商店街依然熱鬧）",
        tips: "1～2 丁目以日常雜貨為主；4～6 丁目餐飲較集中；建議南北方向走完再折返吃飯。",
      },
      {
        name: "千林商店街（せんばやししょうてんがい）",
        area: "旭區",
        station: "京阪電車「千林」站（梅田無直達，需換車約 20 分）",
        why: "號稱「日本最便宜商店街」，1957 年日本第一座超市就在此地誕生，約 200 家店鋪涵蓋生鮮魚貨、熟食、雜貨。商店街有自己的主題曲 24 小時循環播放，下町人情氣氛極濃，外國遊客幾乎為零。",
        stay: "1 小時",
        weekend: "週六 ✓ 週日 ✓（生鮮市場型態，週日依然有活力）",
        tips: "交通略偏不方便，適合作為京橋或鶴橋路線的加分延伸，不建議作為主要景點獨立前往。",
      },
      {
        name: "住吉大社・粉浜商店街（すみよしたいしゃ・こはましょうてんがい）",
        area: "住吉區",
        station: "南海本線「住吉大社」站，或 阪堺電氣軌道「住吉」站（復古路面電車）",
        why: "住吉大社是全國 2300 多座住吉神社的總本社，獨特的反橋（太鼓橋）坡度極陡，平日週末安靜。神社前門町「粉浜商店街」約 120 家店，食堂、花店、雜貨鋪混雜，有時舉辦百円商店街等小活動。",
        stay: "1.5 小時（含神社参拜 + 商店街漫走）",
        weekend: "週六 ✓ 週日 ✓",
        tips: "阪堺電氣（路面電車）從天王寺可直達，單程約 25 分，車費 230 日圓，搭老電車本身就是體驗。",
      },
    ],
  },
  {
    icon: "🍺",
    title: "酒場橫丁・立飲み文化",
    desc: "大阪「せんべろ」（1000 日圓喝醉）文化聖地，從傍晚到深夜的在地人下班第一站。",
    spots: [
      {
        name: "裏天満（うらてんま）飲み屋街",
        area: "北區天満",
        station: "JR 大阪環狀線「天満」站",
        why: "天満站北側、天神橋筋商店街東側的窄巷群，密集排列數十間超便宜居酒屋與立飲み屋，啤酒從 180 日圓起、燒烤串炸小菜多在 100～400 日圓。大阪在地人的「下班後第一站」，陌生人之間自然搭話，老闆多是自家料理的小夫妻店。",
        stay: "2～3 小時（一家喝完換下一家）",
        weekend: "週六 ✓ 週日 ✓（週末下午就有人開喝）",
        tips: "傍晚 6 點到 9 點是高峰；預算 1000～2000 日圓即可吃喝飽一輪；部分超迷你店家僅 8～10 個位置，等位是日常。",
      },
      {
        name: "京橋（きょうばし）立飲み・せんべろ街",
        area: "城東區",
        station: "JR 大阪環狀線・京阪電車・地下鐵長堀鶴見緑地線「京橋」站",
        why: "距離站口 300 公尺以內聚集約 300 間居酒屋，大阪密度最高的下町飲み屋街。「せんべろ」文化聖地，昭和老舖到微型立飲み屋一字排開。旁邊的「ユートピア白玉温泉」昭和 38 年老錢湯可搭配。",
        stay: "2～3 小時",
        weekend: "週六 ✓ 週日 ✓",
        tips: "比天満人潮更多、更嘈雜，適合喜歡能量強的氣氛；七津屋是可白天開喝的立飲み代表店家，週日中午就開門。",
      },
      {
        name: "十三（じゅうそう）歡楽街",
        area: "淀川區",
        station: "阪急電車「十三」站",
        why: "阪急三路線交匯，大阪最出名的庶民歡樂街。西口有沿線 50 幾間居酒屋密集排列，2014 年大火重建後恢復活力。不靠市中心觀光動線，純粹在地人的深度飲み屋體驗，大阪年輕人說「十三感覺很 Deep 但其實超好玩」。",
        stay: "2～3 小時（晚間）",
        weekend: "週六 ✓ 週日 ✓（週末晚間最熱鬧）",
        tips: "飲み屋多從傍晚 5 點開；比天満更在地，外國旅客幾乎沒有，建議帶手機翻譯。",
      },
      {
        name: "福島（ふくしま）横丁・地獄谷（ジゴクダニ）",
        area: "福島區",
        station: "JR 大阪環狀線「福島」站 或 阪神電車「福島」站",
        why: "距梅田僅一站，保留昭和庶民食堂氣氛。高架橋下「福丸通り」聚集個性居酒屋。附近野田站旁的「地獄谷」是隱藏迷你橫丁，約 20 多間微型酒吧隱於小路之間，日本媒體稱之為「最難找到卻值得」的酒場。",
        stay: "2 小時",
        weekend: "週六 ✓ 週日 ✓（週六特別熱鬧）",
        tips: "地獄谷在野田站附近，地圖上很難找，建議搜尋「福島 ジゴクダニ」；傍晚 6 點後才有感覺。",
      },
    ],
  },
  {
    icon: "🎨",
    title: "藝術・次文化・潮流",
    desc: "堀江 Orange Street 到美村巷弄，球鞋古著設計咖啡館，大阪街頭文化的濃縮。",
    spots: [
      {
        name: "堀江・南堀江（ほりえ）Orange Street",
        area: "西區",
        station: "地下鐵「西長堀」站或四つ橋線「四ツ橋」站",
        why: "立花通（通稱 Orange Street）全長 800 公尺，被稱為「大阪的代官山」。老家具行、二手黑膠唱片行、設計咖啡館、藝廊與選品店混雜。SNKRDUNK Osaka Minamihorie（限量球鞋）、BILLY'S ENT、BIOTOP 均在此區。和心齋橋僅步行 10 分鐘，氣氛截然不同。",
        stay: "2 小時",
        weekend: "週六 ✓ 週日 ✓（週末下午最有活力）",
        tips: "多數店家中午 12 點開門，部分選品店週一公休，週六日基本全開；SNKRDUNK 是轉售平台實體店，無需排隊但為二手市場價。",
      },
      {
        name: "アメリカ村（美村）深處探索",
        area: "中央區心齋橋西",
        station: "地下鐵御堂筋線「心斎橋」站 7 號出口步行 5 分",
        why: "主流旅客只走美村主幹道，在地玩法是往三角公園周邊小巷鑽：Supreme Osaka、Stüssy Osaka、Chapter Osaka、Atmos、BAIT（籃球/動漫聯名）均集中此區。巷弄牆面塗鴉也是攝影熱點。",
        stay: "1.5 小時",
        weekend: "週六 ✓ 週日 ✓（週末為開箱高峰日，排隊也長）",
        tips: "Supreme 週末必排，建議早上 10 點前到場；二手古著店 JAM、KINJI 在此區，比東京便宜 20～30%。",
      },
      {
        name: "北加賀屋（きたかがや）壁畫藝術村",
        area: "住之江區（舊造船廠區）",
        station: "地下鐵四つ橋線「北加賀屋」站",
        why: "造船業衰退後留下的空工廠群，2009 年起「北加賀屋クリエイティブ・ビレッジ」計畫引藝術家進駐，街道大型壁畫遍布，每年更新。「クリエイティブセンター大阪（CCO）」定期辦展。工業感和藝術空間並存。",
        stay: "1.5～2 小時",
        weekend: "週六 ✓ 週日 ✓（戶外壁畫全天可看，CCO 展覽需確認場次）",
        tips: "距市中心較遠（梅田約 35 分），建議搭配住吉大社排成南側半日遊；出發前查「北加賀屋 CHAOS マップ」最新版。",
      },
      {
        name: "でんでんタウン（Denden Town）日本橋",
        area: "浪速區",
        station: "地下鐵堺筋線「恵美須町」站 或「日本橋」站",
        why: "大阪版秋葉原，但更生猛、更在地。二手遊戲軟硬體（Super Potato）、舊漫畫、模型、同人誌、玩具公仔都有。比秋葉原少商業包裝，挖寶感強烈。近年古著店、咖啡館也入駐。",
        stay: "1.5～2 小時",
        weekend: "週六 ✓ 週日 ✓",
        tips: "Super Potato 是必訪二手電玩老店；和新世界直線距離極近，可串聯半日行程。",
      },
    ],
  },
  {
    icon: "⛩️",
    title: "神社・錢湯體驗",
    desc: "在地人每天生活的神社祈願與老錢湯，最容易融入大阪日常節奏的兩種體驗。",
    spots: [
      {
        name: "住吉大社・猫の社（楠珺社）",
        area: "住吉區（住吉大社境內）",
        station: "住吉大社境內深處（含在住吉大社行程中）",
        why: "住吉大社境內深處極小的「猫の社（楠珺社）」，可收集招福貓逐步換更大尺寸，流傳於貓咪愛好者之間，許多大阪在地人自己都不知道。境內大楠樹群也值得一看。",
        stay: "含在住吉大社全程 1.5 小時中",
        weekend: "週六 ✓ 週日 ✓",
        tips: "直接進住吉大社後往深處找楠珺社，路牌不明顯，可請境內工作人員指引。",
      },
      {
        name: "四天王寺骨董市",
        area: "天王寺區",
        station: "地下鐵谷町線「四天王寺前夕陽ヶ丘」站南側步行 5 分",
        why: "日本最古老官方寺院之一，每月 21、22 日辦骨董市，約 300～500 攤：古陶瓷、昭和雜貨、舊和服、二手黑膠。寺廟本身免費參拜（中心伽藍等區域收費），骨董市攤位隨意不消費也無壓力。",
        stay: "1.5～2 小時（有市集時）",
        weekend: "週六 ✓ 週日 ✓（寺院參拜）",
        tips: "寺廟免費參拜，骨董市攤位無壓力消費，即使沒有市集也值得繞一圈。",
        warning: "⚠️ 骨董市每月 21・22 日才舉辦，2026/10/17（六）、10/18（日）並非市集日。這兩天仍可入寺參拜，但無骨董市攤。",
      },
      {
        name: "錢湯體驗（銭湯）",
        area: "各地，推薦京橋／天満周邊",
        station: "代表推薦：ユートピア白玉温泉（京橋站步行 5 分）",
        why: "昭和 38 年老字號，有 Sauna，現代化改裝仍保留在地感。入浴費約 490～600 日圓。在地老人家每天來洗澡聊天的場所，是完全融入大阪日常的體驗。",
        stay: "1～1.5 小時",
        weekend: "週六 ✓ 週日 ✓",
        tips: "刺青在傳統錢湯多明令禁止，請事先確認；毛巾、沐浴乳需自備或現場購買；入口付錢、鞋放鞋箱、衣物放置物櫃，流程固定。",
      },
    ],
  },
  {
    icon: "🌏",
    title: "異文化・特色社區",
    desc: "韓國城、沖繩聚落到任天堂聖地，大阪作為多元文化匯集地的獨特面貌。",
    spots: [
      {
        name: "鶴橋コリアンタウン＋生野コリア村",
        area: "東成區・生野區",
        station: "JR 大阪環狀線・近鉄「鶴橋」站",
        why: "鶴橋站本身就是舊市場型覆頂商店街迷宮（烤肉香瀰漫），往南步行 15 分是「大阪コリアンタウン」（御幸通商店街），120 間韓式店鋪：韓式小吃、泡菜、K-pop 周邊。鶴橋燒肉定食 800～1200 日圓。",
        stay: "1.5～2 小時（加午餐 3 小時）",
        weekend: "週六 ✓ 週日 △（部分商家週日略縮短營業時間）",
        tips: "高架橋下生鮮市場早上 10 點最新鮮；11:30 前吃午餐可避開排隊；以現金交易為主。",
      },
      {
        name: "大正区「小沖繩」",
        area: "大正區",
        station: "JR 大阪環狀線「大正」站",
        why: "大正區約 25% 居民擁有沖繩根源。商店街入口有石獅子（シーサー）裝飾，沿途沖繩料理食堂、食材雜貨鋪、沖繩系居酒屋。完全沒有觀光包裝，沖繩蕎麥（ソーキそば）約 750 日圓。",
        stay: "1.5 小時",
        weekend: "週六 ✓ 週日 ✓",
        tips: "從梅田或難波搭 JR 環狀線約 20 分；可與北加賀屋搭配成南側半日遊。",
      },
      {
        name: "Nintendo OSAKA ＋ Pokemon Center 大阪",
        area: "北區梅田（大丸梅田 13 樓）",
        station: "JR「大阪」站直連",
        why: "Nintendo OSAKA 與 Pokemon Center OSAKA 同在大丸梅田 13 樓，任天堂迷朝聖路線。Pokemon Center 有大阪限定品（大阪城、章魚燒主題皮卡丘等）。心齋橋大丸 9 樓另有規模更大的「Pokemon Center OSAKA DX」含體驗展示區。",
        stay: "1～1.5 小時",
        weekend: "週六 ✓ 週日 ✓（週末人多，建議 10 點開門即去）",
        tips: "若行程不經東京，此處是入手大阪限定的唯一機會；DX 心齋橋商品種類多於梅田版。Nintendo OSAKA 10:00～21:00，Pokemon Center 梅田 10:00～20:00，DX 心齋橋 10:00～20:30。",
      },
    ],
  },
];

const routes: TravelRoute[] = [
  {
    id: "A",
    title: "北大阪文青午日 → 居酒屋深夜",
    target: "推薦 10/17（六）",
    audience: "漫步、拍照、古著、下午咖啡、晚上喝酒",
    stops: [
      { time: "10:30", place: "中崎町站", note: "昭和咖啡館早午餐" },
      { time: "11:00–13:00", place: "中崎町巷弄散步", note: "古著、手沖咖啡、藝廊" },
      { time: "13:00–14:30", place: "天神橋筋商店街 4 丁目", note: "老食堂定食午餐 600～900 日圓" },
      { time: "15:00–17:00", place: "堀江 Orange Street", note: "SNKRDUNK / BILLY'S ENT / BIOTOP" },
      { time: "18:00–21:00", place: "裏天満飲み歩き", note: "3～4 間接力，人均 1500～2000 日圓" },
    ],
    transport: "全程地鐵（谷町線＋堺筋線＋長堀鶴見緑地線），地鐵一日券 820 日圓可用",
  },
  {
    id: "B",
    title: "鶴橋燒肉午餐 → 新世界串炸 → 任天堂",
    target: "推薦 10/18（日）",
    audience: "美食優先、寶可夢 / 任天堂購物、昭和復古",
    stops: [
      { time: "10:00–12:00", place: "鶴橋 Korea Town", note: "市場漫步＋燒肉午餐" },
      { time: "13:00–15:00", place: "新世界・Jan Jan 橫丁", note: "串炸、昭和遊戲場、通天閣周邊" },
      { time: "16:00–17:30", place: "Nintendo OSAKA + Pokemon Center", note: "大丸梅田 13F 限定商品採購" },
      { time: "18:00–", place: "梅田高架下飲食或回飯店", note: "收尾輕鬆用餐" },
    ],
    transport: "JR 大阪環狀線為主軸，ICOCA 一卡到底",
  },
  {
    id: "C",
    title: "南大阪下町異文化半日",
    target: "推薦 10/17（六）下午替代案",
    audience: "避開觀光客、社區型探索、沖繩 / 藝術工業感",
    stops: [
      { time: "13:00–14:30", place: "大正區小沖繩", note: "商店街＋ソーキそば午餐" },
      { time: "15:00–16:30", place: "北加賀屋壁畫藝術村", note: "戶外免費，展覽 200～500 日圓" },
      { time: "17:30–19:00", place: "堀江晚飯＋Orange Street 收尾", note: "連接晚間活動" },
    ],
    transport: "四つ橋線串聯大正・北加賀屋・四ツ橋（堀江）",
  },
];

const weekendNotes: WeekendNote[] = [
  { spot: "空堀商店街", note: "週日部分傳統商家公休，以咖啡館為主目的則無妨。", warn: false },
  { spot: "鶴橋コリアンタウン", note: "週日部分商家較早關門，建議早上前往。", warn: false },
  { spot: "Nintendo / Pokemon Center", note: "週末人多，建議 10 點開門即入場。", warn: false },
  {
    spot: "四天王寺骨董市",
    note: "骨董市只在每月 21・22 日舉辦，2026/10/17（六）、10/18（日）均非市集日，無攤位。寺院本身仍可參拜。",
    warn: true,
  },
  { spot: "Supreme（アメリカ村）", note: "週末必排隊，建議早上 10 點前到場。", warn: false },
  { spot: "其餘景點", note: "週六日皆正常，部分飲み屋更早開門。", warn: false },
];

const sources: SourceLink[] = [
  { label: "Off the Beaten Path in Osaka", url: "https://goldiegoesglobal.com/2025/06/05/off-the-beaten-path-in-osaka/" },
  { label: "Hidden Gems in Osaka – City Unscripted", url: "https://www.cityunscripted.com/travel-magazine/hidden-gems-in-osaka" },
  { label: "Off the Beaten Path Osaka Neighborhoods", url: "https://tourismattractions.net/japan/off-the-beaten-path-osaka-neighborhoods" },
  { label: "10 Hidden Gems in Osaka – Best Adventure Kansai", url: "https://bestadventurekansai.com/10-hidden-gems-in-osaka/" },
  { label: "Streetwear Stores in Osaka – SNKRDUNK", url: "https://snkrdunk.com/en/magazine/2025/02/26/snkrdunk-travels-top-streetwear-stores-to-visit-in-osaka-2025/" },
  { label: "Fukushima Ward Guide – Gaijin Pot", url: "https://travel.gaijinpot.com/fukushima/" },
  { label: "Jigokudani Osaka – Japan Times", url: "https://www.japantimes.co.jp/life/2019/02/23/food/jigokudani-osakas-hidden-hell-valley-barhopping/" },
  { label: "Izakaya Hopping Tenma Guide", url: "https://osakaa.net/osaka-city/izakaya-hopping-osaka-tenma-guide/" },
  { label: "Osaka Okinawa Taisho Ward", url: "https://osakaa.net/osaka-city/bay-area/osaka-okinawa-taisho-ward/" },
  { label: "Karahori Osaka 空堀", url: "https://karahori-osaka.com/" },
  { label: "Pokemon Center Osaka – Metro Nine", url: "https://metronine.osaka/en/article_tour/20230714-pokemon-center-shop/" },
  { label: "四天王寺骨董市", url: "https://marketdays.jp/event/shitennoji-kottou-ichi/" },
  { label: "中崎町 – Magical Trip", url: "https://www.magical-trip.com/media/nakazakicho-in-osaka-visit-thrift-shops-and-fashionable-cafes-restaurants/" },
  { label: "堀江 Orange Street", url: "https://tfp-group.co.jp/japan-spot-guide/osaka/horie" },
  { label: "美村・堀江球鞋店 – Kickswrap", url: "https://kickswrap.com/en/blogs/all/shinsaibashi-snekershops" },
  { label: "北加賀屋藝術村 – 大阪市官網", url: "https://www.city.osaka.lg.jp/suminoe/page/0000540426.html" },
  { label: "千林商店街 官方網站", url: "https://www.senbayashi.com/" },
  { label: "大阪錢湯指南 – 大阪府浴場組合", url: "https://osaka268.com/" },
];
</script>

<template>
  <div class="hidden-gems-page">
    <section class="hero-card">
      <RouterLink class="back-link" to="/2026travel">← 回到總覽</RouterLink>
      <div class="pill">🗺️ 2026 大阪・在地人景點</div>
      <h1>大阪深度旅遊 非觀光客路線</h1>
      <p class="lede">
        台灣四人團 10/17（六）、10/18（日）的在地人路線。21 處景點分六大主題，
        三條動線建議直接可用。跳出標準觀光動線，走進下町、橫丁、壁畫村與庶民商店街。
      </p>
    </section>

    <section v-for="cat in categories" :key="cat.title" class="category-section">
      <div class="section-head">
        <p class="eyebrow">{{ cat.icon }} THEME</p>
        <h2>{{ cat.title }}</h2>
        <p class="section-desc">{{ cat.desc }}</p>
      </div>
      <div class="spot-grid">
        <article v-for="spot in cat.spots" :key="spot.name" class="spot-card">
          <div v-if="spot.warning" class="spot-warning">{{ spot.warning }}</div>
          <h3 class="spot-name">{{ spot.name }}</h3>
          <div class="spot-meta-row">
            <span class="badge area">{{ spot.area }}</span>
            <span class="badge stay">⏱ {{ spot.stay }}</span>
          </div>
          <p class="spot-station">📍 {{ spot.station }}</p>
          <p class="spot-why">{{ spot.why }}</p>
          <div class="spot-footer">
            <div class="spot-weekend">{{ spot.weekend }}</div>
            <div class="spot-tips">💡 {{ spot.tips }}</div>
          </div>
        </article>
      </div>
    </section>

    <section class="guide-section routes-section">
      <div class="section-head">
        <p class="eyebrow">ITINERARY</p>
        <h2>三條動線建議</h2>
      </div>
      <div class="routes-grid">
        <article v-for="route in routes" :key="route.id" class="route-card">
          <div class="route-header">
            <span class="route-badge">Route {{ route.id }}</span>
            <span class="route-target">{{ route.target }}</span>
          </div>
          <h3 class="route-title">{{ route.title }}</h3>
          <p class="route-audience">適合：{{ route.audience }}</p>
          <div class="stop-list">
            <div v-for="stop in route.stops" :key="stop.time" class="stop-row">
              <span class="stop-time">{{ stop.time }}</span>
              <span class="stop-place">{{ stop.place }}</span>
              <span class="stop-note">{{ stop.note }}</span>
            </div>
          </div>
          <p class="route-transport">🚇 {{ route.transport }}</p>
        </article>
      </div>
    </section>

    <section class="guide-section">
      <div class="section-head">
        <p class="eyebrow">WEEKEND</p>
        <h2>週六 vs 週日注意事項</h2>
      </div>
      <div class="weekend-list">
        <div
          v-for="item in weekendNotes"
          :key="item.spot"
          class="weekend-item"
          :class="{ warn: item.warn }"
        >
          <span class="weekend-spot">{{ item.spot }}</span>
          <span class="weekend-note">{{ item.note }}</span>
        </div>
      </div>
    </section>

    <section class="alert-card">
      <h2>現場提醒</h2>
      <p>
        10/17-18 兩天請注意：四天王寺骨董市不在這兩天舉辦（骨董市固定在每月 21・22 日）。
        寺院本身全天可參拜。Nintendo OSAKA 與 Pokemon Center 週末人多，10 點開門即去。
      </p>
    </section>

    <section class="guide-section sources-section">
      <div class="section-head">
        <p class="eyebrow">REFERENCES</p>
        <h2>資料來源</h2>
      </div>
      <div class="source-grid">
        <a
          v-for="src in sources"
          :key="src.url"
          :href="src.url"
          class="source-link"
          target="_blank"
          rel="noopener noreferrer"
        >{{ src.label }}</a>
      </div>
    </section>

    <div class="bottom-nav">
      <RouterLink class="btn ghost" to="/2026travel">← 回到總覽</RouterLink>
      <RouterLink class="btn ghost" to="/2026kansai-pass">關西樂享周遊券</RouterLink>
      <RouterLink class="btn ghost" to="/2026food">美食 &amp; 必逛</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.hidden-gems-page {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 960px;
  margin: 0 auto;
}

/* Hero */
.hero-card,
.guide-section,
.alert-card {
  padding: 1.4rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.hero-card {
  background: linear-gradient(135deg, rgba(100, 200, 130, 0.14), rgba(125, 240, 255, 0.12));
}

.back-link {
  display: inline-block;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
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
}

.lede {
  color: var(--text-muted);
  line-height: 1.65;
}

/* Category section */
.category-section {
  padding: 1.4rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.section-head {
  margin-bottom: 1rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.section-head h2 {
  font-size: 1.3rem;
  margin: 0.2rem 0 0.3rem;
}

.section-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Spot grid */
.spot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.9rem;
}

.spot-card {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.spot-warning {
  padding: 0.55rem 0.75rem;
  border-radius: 8px;
  background: rgba(255, 160, 50, 0.12);
  border: 1px solid rgba(255, 160, 50, 0.4);
  color: #ffb060;
  font-size: 0.88rem;
  line-height: 1.5;
}

.spot-name {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
}

.spot-meta-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  display: inline-block;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  font-size: 0.78rem;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
}

.badge.stay {
  color: var(--accent);
  border-color: rgba(125, 240, 255, 0.25);
}

.spot-station {
  font-size: 0.87rem;
  color: var(--text-muted);
  margin: 0;
}

.spot-why {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.spot-footer {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-top: 0.4rem;
  border-top: 1px solid var(--border);
  margin-top: auto;
}

.spot-weekend {
  font-size: 0.83rem;
  font-weight: 600;
  color: var(--accent);
}

.spot-tips {
  font-size: 0.84rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Routes */

.routes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0.9rem;
}

.route-card {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.route-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.route-badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(100, 200, 130, 0.25), rgba(125, 240, 255, 0.2));
  border: 1px solid rgba(125, 240, 255, 0.3);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
}

.route-target {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.route-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}

.route-audience {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin: 0;
}

.stop-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.stop-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 0.4rem 0.6rem;
  font-size: 0.88rem;
}

.stop-time {
  font-weight: 700;
  color: var(--accent);
  white-space: nowrap;
}

.stop-place {
  font-weight: 600;
  grid-column: 2;
}

.stop-note {
  grid-column: 2;
  color: var(--text-muted);
  font-size: 0.83rem;
}

.route-transport {
  font-size: 0.87rem;
  color: var(--text-muted);
  padding-top: 0.4rem;
  border-top: 1px solid var(--border);
  margin: 0;
}

/* Weekend notes */
.weekend-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.weekend-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 0.6rem 0.8rem;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  align-items: start;
}

.weekend-item.warn {
  background: rgba(255, 160, 50, 0.08);
  border-color: rgba(255, 160, 50, 0.35);
}

.weekend-spot {
  font-weight: 700;
  font-size: 0.92rem;
}

.weekend-item.warn .weekend-spot {
  color: #ffb060;
}

.weekend-note {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Alert */
.alert-card {
  border-color: rgba(255, 160, 50, 0.45);
  background: rgba(255, 160, 50, 0.08);
}

.alert-card h2 {
  font-size: 1.05rem;
  margin-bottom: 0.35rem;
}

.alert-card p {
  color: var(--text-muted);
  line-height: 1.65;
}

/* Sources */

.source-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.source-link {
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--accent);
  text-decoration: none;
  font-size: 0.83rem;
  transition: border-color 0.2s ease;
}

.source-link:hover {
  border-color: var(--accent);
  text-decoration: underline;
}

/* Bottom nav */
.bottom-nav {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  padding: 0.8rem 0;
}

.btn {
  padding: 0.7rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease;
  color: var(--text-primary);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.04);
}

.btn:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

@media (max-width: 640px) {
  .spot-grid {
    grid-template-columns: 1fr;
  }

  .routes-grid {
    grid-template-columns: 1fr;
  }

  .weekend-item {
    grid-template-columns: 1fr;
  }

  .stop-row {
    grid-template-columns: 80px 1fr;
  }
}
</style>
