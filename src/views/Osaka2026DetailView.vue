<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const tripHeader = {
  title: "2026 大阪之旅 — 詳細手冊",
  dates: "2026/10/10(六) ~ 2026/10/19(一)",
  members: "快樂龍、大雄、R庭、嘎菲",
};

const FIREWORKS_OFFICIAL_URL = "https://www.yodohanabi.com/faq.html";
const FIREWORKS_DAY = "10/17(六)";
const COLLAB_NOTE_URL = "https://hackmd.io/@JPtrivial/Sk1JZjLuMx";

const itinerarySource = [
  {
    date: "10/10(六)",
    title: "Day 1 — 抵達大阪＋臨空城 Outlet",
    items: [
      "航班：台灣虎航 IT710，07:45 TPE → 11:30 KIX",
      "抵達後：前往臨空城 Outlet 採買",
      "晚餐候選：Dining One Karubi 燒肉吃到飽／Tenkichi 天丼",
      "16:00 後：前往住宿、辦理入住",
    ],
  },
  {
    date: "10/11(日)",
    title: "Day 2 — 梅田商場一日遊＋哥吉拉御守",
    items: [
      "午餐：螃蟹料理（餐廳待確認）；備選為 KITTE 大阪壽喜燒商業午餐",
      "GRAND GREEN OSAKA＋GRAND FRONT OSAKA 逛街",
      "Grand Front Osaka 南館 4F arena shop（快樂龍、R庭泳裝）",
      "Alpen OSAKA 旗艦店，運動／戶外用品樓層完整，建議預留 2～3 小時",
      "綱敷天神社御旅社：週六、日 13:00～17:00 販售哥吉拉御守",
      "梅田藍天大廈：日落約 17:00～17:45，週末建議提早入場（需與御守時間一起排順序）",
    ],
  },
  {
    date: "10/12(一)",
    title: "Day 3 — 宇治散步＋任天堂博物館",
    items: [
      "日本國定假日（體育之日）：JR 野田 → 京橋 → 中書島 → 京阪宇治",
      "宇治單向散步：京阪宇治 → 宇治川 → 平等院庭園 → 表參道 → JR 宇治",
      "JR 宇治 → JR 小倉後步行約 600 公尺；也可配合時刻改搭 64 號公車",
      "任天堂博物館 13:00～13:30 入場（需提前抽選／預約）",
      "若還有時間與體力，回程可到京都車站拍照、吃晚餐",
    ],
  },
  {
    date: "10/13(二)",
    title: "Day 4 — INDIGENA＋中崎町＋阿嚕聚餐",
    items: [
      "09:00～10:00：Bread, Espresso and Sakaisuji Club 早餐",
      "10:15～12:00：可替換區（大阪交易所／北濱中之島散步／梅田商場／咖啡店休息）",
      "INDIGENA：店家與停留時段待確認",
      "14:00～17:00：中崎町散步、逛小店",
      "17:00 後：回東梅田，和阿嚕到但馬屋吃燒肉",
    ],
  },
  {
    date: "10/14(三)",
    title: "Day 5 — 京都寶可夢＋嵐山",
    items: [
      "京都寶可夢中心：阿嚕想找徽章，先確認當日庫存與營業時間",
      "京都市區候選：御金神社、新風館（與嵐山動線需再縮減）",
      "嵐山：竹林、渡月橋與周邊街區；當地也是湯豆腐發源地之一",
      "用餐方向：豬排；若在嵐山也可改吃湯豆腐",
      "雨備：新京極＋寺町京極商店街",
    ],
  },
  {
    date: "10/15(四)",
    title: "Day 6 — 環球影城",
    items: [
      "日本環球影城一日行程",
      "寶可夢萬聖節遊行筆記時段：13:00 開始、約 40 分鐘（出發前再查官方當日時間）",
      "確認超級任天堂世界與 Express Pass 入場時段",
    ],
  },
  {
    date: "10/16(五)",
    title: "Day 7 — 勝尾寺＋箕面（晚間待決定）",
    items: [
      "前往箕面萱野，轉搭 30 號巴士（8 號月台）或 4 人分攤計程車前往勝尾寺",
      "勝尾寺：看滿山達摩；箕面萱野至寺院沿路餐飲少，先安排用餐",
      "體力許可可搭計程車至箕面瀑布附近，再沿下坡景點走往阪急箕面站",
      "⚠️ 共編筆記摘要寫『好市多』、細節標題寫『心齋橋』，晚間行程先保留待大家確認",
    ],
  },
  {
    date: "10/17(六)",
    title: "Day 8 — 難波採買＋淀川花火大會 🎆",
    items: [
      "上午～中午：難波／心齋橋逛街；AKTR、Sports Depo、Workman Colors 與藥粧依優先度挑選",
      "午餐後提早結束採買、回住宿放東西；花火日下午開始有人潮與交通管制",
      "出發前先買好食物飲料，並確認當日風向、官方會場圖與進場動線",
      "⚠️ 重要更正：官方標示梅田側左岸河川敷全面禁止進入，原訂「左岸梅田會場」不可前往；觀覽會場與票券需改排",
      "19:00～20:00：第 38 回なにわ淀川花火大会施放",
      "20:00 後：離場路線需待觀覽會場確定後重排；不可再以左岸步行回玉川為前提",
      "🎫 票券：原規劃的左岸梅田會場自由席資訊作廢，請只依官方最新「協賛觀覽席」售票頁與會場圖購票",
      "⚠️ 左岸不是免費區縮小，而是梅田側河川敷全面禁止進入；請勿前往或在附近占位",
      "🚇 動線備註：改以右岸（十三側）等官方開放會場重新規劃，最寄站與散場交通需另行確認",
    ],
  },
  {
    date: "10/18(日)",
    title: "Day 9 — 神戶一日遊",
    items: [
      "神戶三宮逛街、散步",
      "北野異人館街：依開館時間挑想看的館，不必每館都進",
      "用餐候選：神戶牛（餐廳與預約待確認）",
    ],
  },
  {
    date: "10/19(一)",
    title: "Day 10 — 返台",
    items: [
      "上午：收拾行李、退房",
      "目標 10:30 抵達關西機場；住宿出發時間待交通方式確認後回推",
      "機場：退稅、托運確認、登機前最後購物",
      "航班：星宇航空 JX821 KIX T1 13:25 → TPE T1 15:20",
      "備註：注意托運重量限制，液體需托運",
    ],
  },
];

interface ScheduleItem {
  id: string;
  text: string;
  note: string;
  mapUrl: string;
}

interface ItineraryDay {
  date: string;
  title: string;
  items: ScheduleItem[];
}

interface DropTarget {
  dayIndex: number;
  itemIndex: number;
}

const STORAGE_KEY = "osaka-2026-detail-itinerary-v2";

const googleMapsSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const defaultMapQueries: Record<string, string> = {
  "day-1-item-1": "關西國際機場 第1航廈",
  "day-1-item-2": "りんくうプレミアム・アウトレット 大阪府泉佐野市りんくう往来南3-28",
  "day-2-item-2": "グラングリーン大阪 大深町",
  "day-2-item-3": "arena shop 大阪 グランフロント大阪 南館4階 大阪市北区大深町4-20",
  "day-2-item-4": "Alpen OSAKA 大阪市北区茶屋町1-32 YANMAR FLYING-Y BUILDING",
  "day-2-item-5": "綱敷天神社御旅社 大阪市北区茶屋町12-5",
  "day-2-item-6": "梅田スカイビル 空中庭園展望台",
  "day-3-item-2": "平等院 京都府宇治市宇治蓮華116",
  "day-3-item-4": "ニンテンドーミュージアム 京都府宇治市小倉町神楽田56",
  "day-4-item-1": "パンとエスプレッソと堺筋倶楽部",
  "day-4-item-4": "中崎町 大阪",
  "day-4-item-5": "但馬屋 イーマ 東梅田",
  "day-5-item-1": "ポケモンセンターキョウト",
  "day-5-item-2": "御金神社 京都 新風館",
  "day-5-item-3": "渡月橋 京都市右京区嵯峨中ノ島町",
  "day-5-item-5": "新京極商店街 寺町京極商店街 京都",
  "day-6-item-1": "ユニバーサル・スタジオ・ジャパン 大阪市此花区桜島2-1-33",
  "day-6-item-2": "ユニバーサル・スタジオ・ジャパン 大阪市此花区桜島2-1-33",
  "day-7-item-1": "箕面萱野駅",
  "day-7-item-2": "勝尾寺 大阪府箕面市勝尾寺",
  "day-7-item-3": "箕面大滝 大阪府箕面市箕面公園",
  "day-8-item-1": "なんばパークス 大阪",
  "day-9-item-1": "神戸三宮駅",
  "day-9-item-2": "北野異人館街 神戸",
  "day-10-item-2": "關西國際機場 第1航廈",
  "day-10-item-3": "關西國際機場 第1航廈",
  "day-10-item-4": "關西國際機場 第1航廈",
};

const defaultMapUrlFor = (itemId: string) => {
  const query = defaultMapQueries[itemId];
  return query ? googleMapsSearchUrl(query) : "";
};

const legacyFireworksTextUpdates: Record<string, { from: string; to: string }> = {
  "day-8-item-4": {
    from: "17:00：左岸「梅田會場」開場，從住處步行 15～18 分過去（從梅田走要 25 分，我們近很多）",
    to: itinerarySource[7].items[3],
  },
  "day-8-item-6": {
    from: "20:00 後：步行 15 分回住處，或轉去福島橫丁・地獄谷喝一杯（週六最熱鬧）",
    to: itinerarySource[7].items[5],
  },
  "day-8-item-7": {
    from: "🎫 票券：左岸梅田會場只有「パイプ椅子席（自由席）」，前售 大人 ¥4,500／兒童 ¥2,500（3 歲～小學），附廁所與賣店，入場後自由選位。當日不販售",
    to: itinerarySource[7].items[6],
  },
  "day-8-item-8": {
    from: "⚠️ 今年左岸因高速公路施工，免費觀覽區大幅縮小，強烈建議買付費席，不要賭免費區",
    to: itinerarySource[7].items[7],
  },
  "day-8-item-9": {
    from: "🚇 動線備註：三十萬人散場不用擠電車，走回玉川就好 — 這是改住福島區最大的好處。會場無停車場",
    to: itinerarySource[7].items[8],
  },
};

const createDefaultItinerary = (): ItineraryDay[] =>
  itinerarySource.map((day, dayIndex) => ({
    ...day,
    items: day.items.map((text, itemIndex) => ({
      id: `day-${dayIndex + 1}-item-${itemIndex + 1}`,
      text,
      note: "",
      mapUrl: defaultMapUrlFor(`day-${dayIndex + 1}-item-${itemIndex + 1}`),
    })),
  }));

const itinerary = ref<ItineraryDay[]>(createDefaultItinerary());
const editingItemId = ref<string | null>(null);
const expandedItemId = ref<string | null>(null);
const editDraft = ref("");
const saveStatus = ref("已儲存於此裝置");
const draggingItemId = ref<string | null>(null);
const dragSourceDayIndex = ref(-1);
const dragSourceItemIndex = ref(-1);
const dropTarget = ref<DropTarget | null>(null);
const dragPreviewText = ref("");
const pointerX = ref(0);
const pointerY = ref(0);
let activeDragHandle: HTMLElement | null = null;
let activePointerId: number | null = null;
let autoScrollFrame = 0;
let saveStatusTimer = 0;

const createItemId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `item-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const persistItinerary = () => {
  const storedItems = Object.fromEntries(itinerary.value.map((day) => [day.date, day.items]));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedItems));
  saveStatus.value = "已自動儲存";
  window.clearTimeout(saveStatusTimer);
  saveStatusTimer = window.setTimeout(() => {
    saveStatus.value = "已儲存於此裝置";
  }, 1200);
};

const restoreItinerary = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const stored = JSON.parse(raw) as Record<string, unknown>;
    itinerary.value = createDefaultItinerary().map((day) => {
      const savedItems = stored[day.date];
      if (!Array.isArray(savedItems)) return day;

      const validItems = savedItems
        .filter(
          (item): item is Pick<ScheduleItem, "id" | "text"> & Partial<ScheduleItem> =>
          typeof item === "object" &&
          item !== null &&
          typeof (item as ScheduleItem).id === "string" &&
          typeof (item as ScheduleItem).text === "string",
        )
        .map((item) => {
          const safetyUpdate = legacyFireworksTextUpdates[item.id];
          return {
            id: item.id,
            text: safetyUpdate?.from === item.text ? safetyUpdate.to : item.text,
            note: typeof item.note === "string" ? item.note : "",
            mapUrl:
              typeof item.mapUrl === "string" && item.mapUrl.trim()
                ? item.mapUrl
                : defaultMapUrlFor(item.id),
          };
        });
      return { ...day, items: validItems };
    });
  } catch {
    saveStatus.value = "讀取舊資料失敗，已使用預設行程";
  }
};

const startEditing = (item: ScheduleItem) => {
  if (draggingItemId.value) return;
  editingItemId.value = item.id;
  editDraft.value = item.text;
  void nextTick(() => {
    document.querySelector<HTMLTextAreaElement>(`[data-editor-id="${item.id}"]`)?.focus();
  });
};

const cancelEditing = () => {
  editingItemId.value = null;
  editDraft.value = "";
};

const toggleItemDetails = (item: ScheduleItem) => {
  if (editingItemId.value || draggingItemId.value) return;
  expandedItemId.value = expandedItemId.value === item.id ? null : item.id;
};

const safeMapUrl = (value: string) => {
  const url = value.trim();
  if (!url) return "";

  try {
    const parsed = new URL(/^https?:\/\//i.test(url) ? url : `https://${url}`);
    return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.href : "";
  } catch {
    return "";
  }
};

const mapSearchUrl = (text: string) => googleMapsSearchUrl(text.replace(/^.*?：/, ""));

const saveItemDetails = () => {
  persistItinerary();
  saveStatus.value = "補充內容已儲存";
};

const saveEditing = (dayIndex: number, itemIndex: number) => {
  const text = editDraft.value.trim();
  if (!text) return;

  itinerary.value[dayIndex].items[itemIndex].text = text;
  cancelEditing();
  persistItinerary();
};

const addItem = (dayIndex: number) => {
  const item = { id: createItemId(), text: "新增行程", note: "", mapUrl: "" };
  itinerary.value[dayIndex].items.push(item);
  persistItinerary();
  startEditing(item);
};

const removeItem = (dayIndex: number, itemIndex: number) => {
  const item = itinerary.value[dayIndex].items[itemIndex];
  if (!window.confirm(`確定要刪除「${item.text}」嗎？`)) return;

  itinerary.value[dayIndex].items.splice(itemIndex, 1);
  if (editingItemId.value === item.id) cancelEditing();
  if (expandedItemId.value === item.id) expandedItemId.value = null;
  persistItinerary();
};

const resetItinerary = () => {
  if (!window.confirm("確定要恢復原始行程嗎？目前在此裝置的編輯與排序都會被清除。")) return;

  itinerary.value = createDefaultItinerary();
  localStorage.removeItem(STORAGE_KEY);
  cancelEditing();
  expandedItemId.value = null;
  saveStatus.value = "已恢復原始行程";
};

const isDropBefore = (dayIndex: number, itemIndex: number) =>
  dropTarget.value?.dayIndex === dayIndex && dropTarget.value.itemIndex === itemIndex;

const isDropAtEnd = (dayIndex: number, itemCount: number) =>
  draggingItemId.value !== null &&
  dropTarget.value?.dayIndex === dayIndex &&
  dropTarget.value.itemIndex === itemCount;

const updateDropTarget = (clientX: number, clientY: number) => {
  const element = document.elementFromPoint(clientX, clientY) as HTMLElement | null;
  const dayCard = element?.closest<HTMLElement>(".day-card[data-day-index]");
  if (!dayCard) return;

  const dayIndex = Number(dayCard.dataset.dayIndex);
  const itemElements = Array.from(dayCard.querySelectorAll<HTMLElement>(".schedule-item"));
  let itemIndex = itemElements.length;

  for (let index = 0; index < itemElements.length; index += 1) {
    const bounds = itemElements[index].getBoundingClientRect();
    if (clientY < bounds.top + bounds.height / 2) {
      itemIndex = index;
      break;
    }
  }

  dropTarget.value = { dayIndex, itemIndex };
};

const runAutoScroll = () => {
  if (!draggingItemId.value) return;

  const edgeSize = Math.min(130, window.innerHeight * 0.2);
  let speed = 0;
  if (pointerY.value < edgeSize) {
    speed = -Math.ceil((edgeSize - pointerY.value) / 7);
  } else if (pointerY.value > window.innerHeight - edgeSize) {
    speed = Math.ceil((pointerY.value - (window.innerHeight - edgeSize)) / 7);
  }

  if (speed !== 0) {
    window.scrollBy(0, speed);
    updateDropTarget(pointerX.value, pointerY.value);
  }
  autoScrollFrame = window.requestAnimationFrame(runAutoScroll);
};

const startDragging = (event: PointerEvent, dayIndex: number, itemIndex: number) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;

  const item = itinerary.value[dayIndex].items[itemIndex];
  cancelEditing();
  expandedItemId.value = null;
  draggingItemId.value = item.id;
  dragSourceDayIndex.value = dayIndex;
  dragSourceItemIndex.value = itemIndex;
  dropTarget.value = { dayIndex, itemIndex };
  dragPreviewText.value = item.text;
  pointerX.value = event.clientX;
  pointerY.value = event.clientY;
  activePointerId = event.pointerId;
  activeDragHandle = event.currentTarget as HTMLElement;
  activeDragHandle.setPointerCapture(event.pointerId);
  window.cancelAnimationFrame(autoScrollFrame);
  autoScrollFrame = window.requestAnimationFrame(runAutoScroll);
};

const moveDragging = (event: PointerEvent) => {
  if (!draggingItemId.value || event.pointerId !== activePointerId) return;

  event.preventDefault();
  pointerX.value = event.clientX;
  pointerY.value = event.clientY;
  updateDropTarget(event.clientX, event.clientY);
};

const clearDragging = () => {
  draggingItemId.value = null;
  dragSourceDayIndex.value = -1;
  dragSourceItemIndex.value = -1;
  dropTarget.value = null;
  dragPreviewText.value = "";
  activeDragHandle = null;
  activePointerId = null;
  window.cancelAnimationFrame(autoScrollFrame);
};

const finishDragging = (event: PointerEvent) => {
  if (!draggingItemId.value || event.pointerId !== activePointerId) return;

  if (activeDragHandle?.hasPointerCapture(event.pointerId)) {
    activeDragHandle.releasePointerCapture(event.pointerId);
  }

  const sourceDayIndex = dragSourceDayIndex.value;
  const sourceItemIndex = dragSourceItemIndex.value;
  const target = dropTarget.value;
  if (!target) {
    clearDragging();
    return;
  }

  const sourceItems = itinerary.value[sourceDayIndex].items;
  const [movedItem] = sourceItems.splice(sourceItemIndex, 1);
  let insertIndex = target.itemIndex;
  if (target.dayIndex === sourceDayIndex && insertIndex > sourceItemIndex) insertIndex -= 1;
  itinerary.value[target.dayIndex].items.splice(insertIndex, 0, movedItem);
  clearDragging();
  persistItinerary();
};

onMounted(restoreItinerary);
onBeforeUnmount(() => {
  window.cancelAnimationFrame(autoScrollFrame);
  window.clearTimeout(saveStatusTimer);
});

const essentialInfo = [
  { label: "航班（去程）", value: "2026/10/10（六）台灣虎航 IT710 07:45 TPE → 11:30 KIX" },
  { label: "航班（回程）", value: "2026/10/19（一）星宇航空 JX821 KIX T1 13:25 → TPE T1 15:20" },
  { label: "住宿", value: "玉川站步行約 4 分的獨棟住宿（10/10 16:00 入住）" },
  { label: "票券", value: "USJ 門票、Express Pass、任天堂世界預約、任天堂博物館抽選、ICOCA" },
  { label: "APP", value: "USJ 官方、Google Maps、NAVITIME、Klook/KKday 票券檔" },
  { label: "行李提醒", value: "行動電源、藥品、雨具、舒適步行鞋" },
];

const ticketLinks = [
  { label: "USJ 官方門票", url: "https://www.usj.co.jp/ticket/" },
  { label: "Express Pass 購買", url: "https://www.usj.co.jp/ticket/" },
  { label: "任天堂博物館預約", url: "https://museum.nintendo.com/" },
  { label: "關西機場交通", url: "https://www.kansai-airport.or.jp/access/" },
  { label: "大阪 Metro 路線圖", url: "https://subway.osakametro.co.jp/tw/guide/routemap.php" },
  {
    label: "勝尾寺 30 號巴士時刻",
    url: "https://japantravel.navitime.com/zh-tw/area/jp/depArrTimeList/00348506/00152123/00037701?direction=down",
  },
];
</script>

<template>
  <div class="detail">
    <section class="hero-card">
      <RouterLink class="back-link" to="/2026travel">← 回到總覽</RouterLink>
      <div class="pill">2026 大阪・詳細手冊</div>
      <h1>{{ tripHeader.title }}</h1>
      <div class="meta">
        <div class="meta-item">
          <span class="meta-label">日期</span>
          <span class="meta-value">{{ tripHeader.dates }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">成員</span>
          <span class="meta-value">{{ tripHeader.members }}</span>
        </div>
      </div>
    </section>

    <section class="source-note" aria-labelledby="source-note-title">
      <div class="source-note-icon" aria-hidden="true">📝</div>
      <div>
        <p class="source-note-eyebrow">本次更新來源</p>
        <h2 id="source-note-title">阿庭 × 嘎菲共編行程</h2>
        <p>已把宇治散步、中崎町、勝尾寺調整、難波花火日與神戶一日遊整併進手冊；原稿保留完整圖片與路線研究。</p>
      </div>
      <a :href="COLLAB_NOTE_URL" target="_blank" rel="noopener noreferrer">開啟 HackMD 原稿 ↗</a>
    </section>

    <section id="fireworks-warning" class="critical-alert" role="alert">
      <div class="critical-alert-icon" aria-hidden="true">⚠️</div>
      <div class="critical-alert-copy">
        <p class="critical-alert-eyebrow">10/17 行程重要更正</p>
        <h2>梅田側左岸河川敷全面禁止進入</h2>
        <p>
          花火大會官方 FAQ 目前明確標示：因高速道路施工，淀川左岸（梅田側河川敷）全面禁止進入。
          原訂「左岸梅田會場」、左岸自由席與步行回玉川的規劃均不可沿用，請改依官方最新會場圖與售票資訊重新安排。
        </p>
      </div>
      <a :href="FIREWORKS_OFFICIAL_URL" target="_blank" rel="noopener noreferrer" class="critical-alert-link">
        查看官方公告 ↗
      </a>
    </section>

    <section class="info-section">
      <h2 class="section-title">行前資訊</h2>
      <div class="info-grid">
        <div v-for="info in essentialInfo" :key="info.label" class="info-item">
          <span class="info-label">{{ info.label }}</span>
          <span class="info-value">{{ info.value }}</span>
        </div>
      </div>
    </section>

    <section class="info-section">
      <h2 class="section-title">票券 / 交通連結</h2>
      <div class="link-grid">
        <a
          v-for="link in ticketLinks"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="ticket-link"
        >
          <span class="ticket-label">{{ link.label }}</span>
          <span class="ticket-arrow">→</span>
        </a>
      </div>
    </section>

    <section class="itinerary">
      <div class="itinerary-heading">
        <div>
          <h2 class="section-title">每日行程</h2>
          <p class="itinerary-help">
            <span aria-hidden="true">⠿</span> 按住把手拖曳排序或移到其他天，點鉛筆可修改內容
          </p>
        </div>
        <div class="itinerary-tools">
          <span class="save-status" aria-live="polite"><span aria-hidden="true">✓</span> {{ saveStatus }}</span>
          <button class="reset-button" type="button" @click="resetItinerary">恢復原始行程</button>
        </div>
      </div>

      <div class="itinerary-board">
      <article
        v-for="(day, dayIndex) in itinerary"
        :key="day.date"
        class="day-card"
        :class="{
          'drop-target': dropTarget?.dayIndex === dayIndex,
          'has-official-alert': day.date === FIREWORKS_DAY,
        }"
        :data-day-index="dayIndex"
      >
        <header class="day-header">
          <span class="day-date">{{ day.date }}</span>
          <h3>{{ day.title }}</h3>
        </header>
        <a v-if="day.date === FIREWORKS_DAY" class="day-alert-link" href="#fireworks-warning">
          <span aria-hidden="true">⚠️</span>
          此日原左岸行程已作廢，請先查看上方官方警示
        </a>
        <ul class="day-items">
          <li
            v-for="(item, itemIndex) in day.items"
            :key="item.id"
            class="schedule-item"
            :class="{
              'is-dragging': draggingItemId === item.id,
              'drop-before': isDropBefore(dayIndex, itemIndex),
            }"
            :data-item-id="item.id"
          >
            <button
              class="drag-handle"
              type="button"
              :aria-label="`拖曳行程：${item.text}`"
              title="按住拖曳"
              @pointerdown="startDragging($event, dayIndex, itemIndex)"
              @pointermove="moveDragging"
              @pointerup="finishDragging"
              @pointercancel="finishDragging"
            >
              <span aria-hidden="true">⠿</span>
            </button>

            <div class="item-content">
              <template v-if="editingItemId === item.id">
                <textarea
                  v-model="editDraft"
                  class="item-editor"
                  :data-editor-id="item.id"
                  rows="2"
                  aria-label="編輯行程內容"
                  @keydown.esc="cancelEditing"
                  @keydown.ctrl.enter="saveEditing(dayIndex, itemIndex)"
                  @keydown.meta.enter="saveEditing(dayIndex, itemIndex)"
                />
                <div class="edit-actions">
                  <button type="button" class="mini-button save" @click="saveEditing(dayIndex, itemIndex)">
                    儲存
                  </button>
                  <button type="button" class="mini-button" @click="cancelEditing">取消</button>
                </div>
              </template>
              <button
                v-else
                class="item-summary"
                type="button"
                :aria-expanded="expandedItemId === item.id"
                @click="toggleItemDetails(item)"
              >
                <span class="item-text">{{ item.text }}</span>
                <span v-if="item.note || safeMapUrl(item.mapUrl)" class="detail-indicators" aria-label="已有補充內容">
                  <span v-if="item.note" title="已有文字說明" aria-hidden="true">📝</span>
                  <span v-if="safeMapUrl(item.mapUrl)" title="已有地圖" aria-hidden="true">📍</span>
                </span>
                <span class="expand-icon" aria-hidden="true">{{ expandedItemId === item.id ? "⌃" : "⌄" }}</span>
              </button>
            </div>

            <div v-if="editingItemId !== item.id" class="item-actions">
              <button type="button" aria-label="編輯行程" title="編輯" @click="startEditing(item)">✎</button>
              <button
                type="button"
                class="delete"
                aria-label="刪除行程"
                title="刪除"
                @click="removeItem(dayIndex, itemIndex)"
              >
                ×
              </button>
            </div>

            <div v-if="expandedItemId === item.id" class="item-details" @click.stop>
              <div class="details-heading">
                <div>
                  <span class="details-eyebrow">行程補充</span>
                  <strong>說明與地圖</strong>
                </div>
                <button
                  class="close-details"
                  type="button"
                  aria-label="收合補充內容"
                  @click="expandedItemId = null"
                >
                  ×
                </button>
              </div>

              <label class="detail-field">
                <span>文字說明</span>
                <textarea
                  v-model="item.note"
                  rows="3"
                  placeholder="例如：集合地點、預約資訊、必點餐點或其他提醒…"
                />
              </label>

              <label class="detail-field">
                <span>Google Maps 地圖連結</span>
                <input
                  v-model="item.mapUrl"
                  type="url"
                  inputmode="url"
                  placeholder="貼上 maps.app.goo.gl 或 Google Maps 網址"
                />
              </label>

              <div class="detail-footer">
                <div class="map-actions">
                  <a
                    v-if="safeMapUrl(item.mapUrl)"
                    class="map-link saved-map"
                    :href="safeMapUrl(item.mapUrl)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    開啟已存地圖 ↗
                  </a>
                  <a
                    class="map-link"
                    :href="mapSearchUrl(item.text)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Maps 搜尋 ↗
                  </a>
                </div>
                <button class="save-details-button" type="button" @click="saveItemDetails">儲存補充內容</button>
              </div>
            </div>
          </li>
          <li v-if="day.items.length === 0" class="empty-day">把行程拖到這裡，或新增一個項目</li>
          <li v-if="isDropAtEnd(dayIndex, day.items.length)" class="drop-at-end" aria-hidden="true" />
        </ul>
        <button class="add-item-button" type="button" @click="addItem(dayIndex)">
          <span aria-hidden="true">＋</span> 新增行程
        </button>
      </article>
      </div>
    </section>

    <div
      v-if="draggingItemId"
      class="drag-preview"
      :style="{ left: `${pointerX + 14}px`, top: `${pointerY + 14}px` }"
      aria-hidden="true"
    >
      <span>⠿</span>
      {{ dragPreviewText }}
    </div>

    <div class="bottom-nav">
      <RouterLink class="btn ghost" to="/2026travel">← 回到總覽</RouterLink>
      <RouterLink class="btn ghost" to="/travellist">行前打包清單</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 860px;
  margin: 0 auto;
}

.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(255, 153, 102, 0.16), rgba(125, 240, 255, 0.14));
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-soft);
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
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  margin: 0.4rem 0 0;
}

.source-note {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  background:
    radial-gradient(circle at 0 0, rgba(125, 240, 255, 0.16), transparent 44%),
    rgba(125, 240, 255, 0.055);
  border: 1px solid rgba(125, 240, 255, 0.28);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
}

.source-note-icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  font-size: 1.4rem;
  background: rgba(125, 240, 255, 0.1);
  border: 1px solid rgba(125, 240, 255, 0.24);
  border-radius: 14px;
}

.source-note h2 {
  margin: 0.08rem 0 0.2rem;
  font-size: 1.08rem;
}

.source-note p:last-child {
  color: var(--text-muted);
  font-size: 0.86rem;
  line-height: 1.5;
}

.source-note-eyebrow {
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.source-note a {
  padding: 0.52rem 0.7rem;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  border: 1px solid rgba(125, 240, 255, 0.3);
  border-radius: 9px;
}

.source-note a:hover {
  color: #fff;
  border-color: var(--accent);
}

.critical-alert {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  background:
    radial-gradient(circle at 0 0, rgba(255, 177, 66, 0.2), transparent 42%),
    rgba(255, 105, 90, 0.09);
  border: 1px solid rgba(255, 150, 95, 0.58);
  border-radius: 18px;
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.24);
}

.critical-alert-icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  font-size: 1.45rem;
  background: rgba(255, 177, 66, 0.13);
  border: 1px solid rgba(255, 177, 66, 0.32);
  border-radius: 14px;
}

.critical-alert-copy h2 {
  margin: 0.08rem 0 0.25rem;
  color: #ffd8b6;
  font-size: 1.08rem;
  font-weight: 700;
}

.critical-alert-copy p:last-child {
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.critical-alert-eyebrow {
  color: #ffb142;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.critical-alert-link {
  padding: 0.52rem 0.7rem;
  color: #ffd8b6;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  border: 1px solid rgba(255, 177, 66, 0.36);
  border-radius: 9px;
}

.critical-alert-link:hover {
  color: #fff;
  border-color: #ffb142;
}

.meta {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.8rem;
}

.meta-item {
  padding: 0.8rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.meta-label {
  display: block;
  color: var(--text-muted);
  font-size: 0.85rem;
  letter-spacing: 0.03em;
}

.meta-value {
  font-weight: 600;
}

/* Info section */
.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.info-section {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.info-item {
  padding: 0.7rem 0.9rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.info-label {
  color: var(--text-muted);
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.info-value {
  font-weight: 600;
}

/* Ticket links */
.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.6rem;
}

.ticket-link {
  padding: 0.8rem 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: var(--text-primary);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.ticket-link:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.ticket-label {
  font-weight: 600;
}

.ticket-arrow {
  color: var(--accent);
  font-weight: 700;
}

/* Itinerary */
.itinerary {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.itinerary-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
}

.itinerary-heading .section-title {
  margin-bottom: 0.15rem;
}

.itinerary-help {
  color: var(--text-muted);
  font-size: 0.86rem;
}

.itinerary-tools {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.75rem;
}

.save-status {
  color: var(--accent);
  font-size: 0.78rem;
  white-space: nowrap;
}

.reset-button,
.add-item-button,
.mini-button,
.item-actions button,
.drag-handle {
  color: var(--text-primary);
  font-family: inherit;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  cursor: pointer;
}

.reset-button {
  padding: 0.42rem 0.68rem;
  color: var(--text-muted);
  font-size: 0.78rem;
  border-radius: 9px;
}

.itinerary-board {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.day-card {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  transition: border-color 0.16s ease, background 0.16s ease;
}

.day-card.drop-target {
  background: rgba(140, 248, 216, 0.055);
  border-color: rgba(140, 248, 216, 0.55);
}

.day-card.has-official-alert {
  border-color: rgba(255, 150, 95, 0.5);
}

.day-alert-link {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: -0.15rem 0 0.75rem;
  padding: 0.55rem 0.65rem;
  color: #ffd8b6;
  font-size: 0.8rem;
  background: rgba(255, 105, 90, 0.08);
  border: 1px solid rgba(255, 150, 95, 0.26);
  border-radius: 9px;
}

.day-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border);
}

.day-date {
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  background: linear-gradient(145deg, #ff9966, #7df0ff);
  color: #0a0a0a;
  font-weight: 700;
  font-size: 0.85rem;
  white-space: nowrap;
}

.day-header h3 {
  font-weight: 700;
  font-size: 1.1rem;
}

.day-items {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.schedule-item {
  position: relative;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.55rem;
  min-height: 46px;
  padding: 0.45rem 0.5rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid transparent;
  border-radius: 11px;
  transition: opacity 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.schedule-item:hover {
  background: rgba(255, 255, 255, 0.045);
  border-color: var(--border);
}

.schedule-item.is-dragging {
  opacity: 0.25;
}

.schedule-item.drop-before::before,
.drop-at-end::before {
  position: absolute;
  right: 0.4rem;
  left: 0.4rem;
  height: 3px;
  background: var(--accent);
  border-radius: 999px;
  box-shadow: 0 0 14px rgba(140, 248, 216, 0.55);
  content: "";
}

.schedule-item.drop-before::before {
  top: -0.35rem;
}

.drop-at-end {
  position: relative;
  height: 5px;
  list-style: none;
}

.drop-at-end::before {
  top: 1px;
}

.drag-handle {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  padding: 0;
  color: var(--accent);
  font-size: 1.15rem;
  border-radius: 9px;
  cursor: grab;
  touch-action: none;
  user-select: none;
}

.drag-handle:active {
  cursor: grabbing;
}

.item-content {
  min-width: 0;
}

.item-summary {
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0;
  color: inherit;
  font: inherit;
  text-align: left;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.item-text {
  display: block;
  color: var(--text-muted);
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.detail-indicators {
  display: inline-flex;
  gap: 0.18rem;
  font-size: 0.78rem;
}

.expand-icon {
  display: grid;
  width: 24px;
  height: 24px;
  place-items: center;
  color: var(--accent);
  font-size: 1rem;
  background: rgba(140, 248, 216, 0.08);
  border-radius: 7px;
}

.item-actions {
  display: flex;
  gap: 0.3rem;
  opacity: 0.48;
  transition: opacity 0.15s ease;
}

.schedule-item:hover .item-actions,
.item-actions:focus-within {
  opacity: 1;
}

.item-actions button {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  padding: 0;
  border-radius: 8px;
}

.item-actions button:hover,
.drag-handle:hover,
.add-item-button:hover,
.reset-button:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.item-actions .delete:hover {
  color: #ff9a9a;
  border-color: rgba(255, 120, 120, 0.6);
}

.item-editor {
  width: 100%;
  min-height: 68px;
  padding: 0.55rem 0.65rem;
  resize: vertical;
  color: var(--text-primary);
  font: inherit;
  line-height: 1.45;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--accent);
  border-radius: 9px;
  outline: none;
}

.item-details {
  grid-column: 2 / -1;
  min-width: 0;
  margin: 0.15rem 0 0.25rem;
  padding: 0.85rem;
  background:
    linear-gradient(145deg, rgba(140, 248, 216, 0.065), rgba(125, 240, 255, 0.025)),
    rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(140, 248, 216, 0.24);
  border-radius: 11px;
}

.details-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.75rem;
}

.details-heading > div {
  display: flex;
  flex-direction: column;
}

.details-heading strong {
  font-weight: 700;
}

.details-eyebrow {
  color: var(--accent);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.close-details {
  display: grid;
  width: 28px;
  height: 28px;
  flex: 0 0 auto;
  place-items: center;
  padding: 0;
  color: var(--text-muted);
  font: inherit;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
}

.detail-field {
  display: grid;
  gap: 0.3rem;
  margin-top: 0.65rem;
  color: var(--text-muted);
  font-size: 0.78rem;
}

.detail-field textarea,
.detail-field input {
  width: 100%;
  padding: 0.58rem 0.65rem;
  color: var(--text-primary);
  font: inherit;
  font-size: 0.86rem;
  line-height: 1.45;
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid var(--border);
  border-radius: 8px;
  outline: none;
}

.detail-field textarea {
  resize: vertical;
}

.detail-field textarea:focus,
.detail-field input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(140, 248, 216, 0.08);
}

.detail-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 0.75rem;
}

.map-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.map-link {
  color: var(--text-muted);
  font-size: 0.76rem;
}

.map-link:hover,
.map-link.saved-map {
  color: var(--accent);
}

.save-details-button {
  flex: 0 0 auto;
  padding: 0.48rem 0.72rem;
  color: #071018;
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  background: var(--accent);
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}

.edit-actions {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.4rem;
}

.mini-button {
  padding: 0.32rem 0.65rem;
  font-size: 0.78rem;
  border-radius: 7px;
}

.mini-button.save {
  color: #071018;
  font-weight: 700;
  background: var(--accent);
  border-color: var(--accent);
}

.add-item-button {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.75rem;
  padding: 0.48rem 0.75rem;
  color: var(--text-muted);
  font-size: 0.82rem;
  border-style: dashed;
  border-radius: 9px;
}

.empty-day {
  padding: 1rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  text-align: center;
  border: 1px dashed var(--border);
  border-radius: 10px;
}

.drag-preview {
  position: fixed;
  z-index: 1000;
  width: min(320px, calc(100vw - 2rem));
  max-height: 88px;
  padding: 0.7rem 0.8rem;
  overflow: hidden;
  color: var(--text-primary);
  font-size: 0.84rem;
  line-height: 1.4;
  background: rgba(16, 23, 38, 0.96);
  border: 1px solid var(--accent);
  border-radius: 11px;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.48);
  opacity: 0.94;
  pointer-events: none;
  transform: rotate(1deg);
}

.drag-preview span {
  margin-right: 0.35rem;
  color: var(--accent);
}

/* Bottom navigation */
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
  .detail {
    gap: 0.85rem;
  }

  .hero-card,
  .source-note,
  .critical-alert,
  .info-section,
  .day-card {
    padding: 1rem;
  }

  .meta {
    grid-template-columns: 1fr;
  }

  .critical-alert {
    grid-template-columns: 40px minmax(0, 1fr);
    align-items: start;
    gap: 0.7rem;
  }

  .source-note {
    grid-template-columns: 40px minmax(0, 1fr);
    align-items: start;
    gap: 0.7rem;
  }

  .source-note-icon {
    width: 40px;
    height: 40px;
    font-size: 1.15rem;
    border-radius: 11px;
  }

  .source-note p:last-child {
    font-size: 0.8rem;
  }

  .source-note a {
    grid-column: 2;
    justify-self: start;
  }

  .critical-alert-icon {
    width: 40px;
    height: 40px;
    font-size: 1.15rem;
    border-radius: 11px;
  }

  .critical-alert-copy h2 {
    font-size: 1rem;
  }

  .critical-alert-copy p:last-child {
    font-size: 0.8rem;
  }

  .critical-alert-link {
    grid-column: 2;
    justify-self: start;
  }

  .day-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }

  .itinerary-heading {
    align-items: flex-start;
  }

  .itinerary-tools {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;
  }

  .itinerary-help {
    max-width: 220px;
    font-size: 0.76rem;
  }

  .save-status,
  .reset-button {
    font-size: 0.7rem;
  }

  .schedule-item {
    grid-template-columns: 40px minmax(0, 1fr) auto;
    margin-inline: -0.35rem;
    padding: 0.5rem 0.35rem;
  }

  .drag-handle {
    width: 40px;
    height: 40px;
  }

  .item-actions {
    flex-direction: column;
    opacity: 0.82;
  }

  .item-actions button {
    width: 32px;
    height: 32px;
  }

  .item-details {
    grid-column: 1 / -1;
    margin-top: 0.25rem;
    padding: 0.75rem;
  }

  .detail-footer {
    align-items: stretch;
    flex-direction: column;
  }

  .save-details-button {
    min-height: 42px;
  }

  .drag-preview {
    transform: translate(-35%, -115%) rotate(1deg);
  }
}
</style>
