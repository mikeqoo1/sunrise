<script setup lang="ts">
interface Listing {
  id: string
  name: string
  area: string
  rating: number | null
  reviews: number
  bedrooms: number
  beds: number
  bathrooms: string
  maxGuests: number
  image: string
  desc: string
  highlights: string[]
  lat: number
  lng: number
  url: string
  estPrice: string
}

interface NearbySpot {
  icon: string
  name: string
  note: string
  walk: string
  category: 'shopping' | 'food' | 'drugstore' | 'convenience' | 'transit'
}

const selectedId = '1381483396373717320'

const listings: Listing[] = [
  {
    id: '1381483396373717320',
    name: '大阪市中心獨棟3層110㎡｜玉川站4分｜梅田4分｜道頓堀・難波直通',
    area: '福島區玉川（千日前線「玉川」站）',
    rating: 5.0,
    reviews: 29,
    bedrooms: 4,
    beds: 7,
    bathrooms: '1 淋浴・2 馬桶',
    maxGuests: 10,
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-1381483396373717320/original/bcad4057-997d-44a5-ba60-4e5bb3d48c00.jpeg?im_w=720',
    desc: '福島區玉川的三層獨棟包棟民宿，110㎡。地鐵千日前線玉川站步行 4 分，直達難波・道頓堀 8 分；走 7 分到 JR 東西線海老江站，2 站進梅田。超讚房東 Koyuki，掛「超讚房源」標章。洗衣機＋烘衣機齊備，適合 9 晚長住。',
    highlights: [
      '110㎡ 三層獨棟',
      '洗衣機＋烘衣機',
      '千日前線直達難波 8 分',
      '淀川花火左岸會場步行 15 分',
    ],
    lat: 34.692,
    lng: 135.4736,
    url: 'https://www.airbnb.com.tw/rooms/1381483396373717320',
    estPrice: '約 NT$ 51,000 / 9 晚（每人約 12,750）',
  },
  {
    id: '1624285200618600616',
    name: '日居・影 ECHO｜花園町站4分｜2026 全新裝潢／附車位',
    area: '西成區（花園町／天下茶屋）',
    rating: 5.0,
    reviews: 3,
    bedrooms: 4,
    beds: 6,
    bathrooms: '1 淋浴・2 馬桶',
    maxGuests: 12,
    image:
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1624285200618600616/original/a8023a25-81ee-43c8-a281-b25b8a04f751.jpeg?im_w=720',
    desc: '2026 全新登場的三層獨棟包棟民宿，日系簡約 × 微北歐質感，全面採用日本製床墊。地鐵四橋線花園町站步行 4 分、南海線天下茶屋站可達，直達心齋橋、梅田，附 1 個停車位。進出關西機場最快，但 USJ 與淀川花火都要多轉一趟。',
    highlights: ['2026 全新裝潢', '日本製床墊', '附停車位 1 個', '天下茶屋轉南海進機場最快'],
    lat: 34.6417,
    lng: 135.497,
    url: 'https://www.airbnb.com.tw/rooms/1624285200618600616',
    estPrice: '約 NT$ 35,000 / 7 晚（舊報價）',
  },
]

const nearbySpots: NearbySpot[] = [
  {
    icon: '🏬',
    name: 'Lawson 玉川三丁目店',
    note: '最近的便利商店，玉川站 5 號出口方向',
    walk: '步行 3 分',
    category: 'convenience',
  },
  {
    icon: '💊',
    name: 'ハピネス薬局 玉川店',
    note: '距站 163 公尺的處方藥局，臨時要買常備藥最近；觀光藥妝建議到野田阪神',
    walk: '步行 3 分',
    category: 'drugstore',
  },
  {
    icon: '🛒',
    name: '阪急 OASIS 福島玉川店',
    note: '阪急系超市，生鮮熟食水準高，晚餐想自己煮或買便當都靠這間',
    walk: '步行 5 分內',
    category: 'shopping',
  },
  {
    icon: '🛍️',
    name: 'AEON STYLE 野田阪神（WISTE）',
    note: '直結阪神野田站的大型商場：1F 食品 8:00–24:00、2F 日用品化妝品＋AEON 藥局、3F 服飾＋大創、4F 美食廣場',
    walk: '電車 1 站 2 分／步行 12 分',
    category: 'shopping',
  },
  {
    icon: '🐟',
    name: '大阪市中央批發市場',
    note: '大阪的築地，場內外食堂群。「中央市場食堂」7:00–14:00（週日休），鮪魚丼與海鮮定食是在地價',
    walk: '步行 8 分',
    category: 'food',
  },
  {
    icon: '🍺',
    name: '福島橫丁・地獄谷',
    note: '在地人景點頁的酒場橫丁重點，高架橋下個性居酒屋＋約 20 間微型酒吧，傍晚 6 點後才有味道',
    walk: '步行 12〜15 分',
    category: 'food',
  },
  {
    icon: '🎆',
    name: '淀川花火 左岸（梅田）會場',
    note: '10/17(六) 19:00–20:00 施放。三十萬人散場不用擠電車，走回來就好',
    walk: '步行 15〜18 分',
    category: 'transit',
  },
  {
    icon: '🚇',
    name: '難波・道頓堀・心齋橋',
    note: '千日前線玉川站直達難波 4 站，不用轉車，宵夜回程也順',
    walk: '電車 8 分',
    category: 'transit',
  },
  {
    icon: '🚇',
    name: '梅田（大阪站）',
    note: '走到 JR 東西線海老江站，2 站到北新地；JR 大阪站接新快速去京都 29 分',
    walk: '步行 7 分＋電車 4 分',
    category: 'transit',
  },
  {
    icon: '🎢',
    name: 'USJ（環球影城）',
    note: '玉川不在 JR 環狀線上，需 2〜3 次轉乘。10/15 開園日記得多留 10 分鐘',
    walk: '電車 30〜35 分',
    category: 'transit',
  },
  {
    icon: '✈️',
    name: '關西機場',
    note: '千日前線到難波 8 分，轉南海空港急行約 45 分／ラピート 38 分，1 次轉乘',
    walk: '電車 60 分',
    category: 'transit',
  },
]

const categoryLabel: Record<NearbySpot['category'], string> = {
  shopping: '購物',
  food: '飲食',
  drugstore: '藥妝',
  convenience: '便利商店',
  transit: '交通',
}

const categoryOrder: NearbySpot['category'][] = ['convenience', 'drugstore', 'shopping', 'food', 'transit']

const spotsByCategory = categoryOrder.map((cat) => ({
  key: cat,
  label: categoryLabel[cat],
  spots: nearbySpots.filter((s) => s.category === cat),
}))

const tripConfig = {
  checkIn: '2026-10-10',
  checkOut: '2026-10-19',
  adults: 4,
  get nights() {
    const a = new Date(this.checkIn + 'T00:00:00')
    const b = new Date(this.checkOut + 'T00:00:00')
    return Math.round((b.getTime() - a.getTime()) / 86_400_000)
  },
}

function starsDisplay(rating: number | null): string {
  if (rating === null) return '全新'
  return `${rating}`
}

function mapUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`
}

function bookingUrl(listing: Listing): string {
  const params = new URLSearchParams({
    check_in: tripConfig.checkIn,
    check_out: tripConfig.checkOut,
    adults: String(tripConfig.adults),
  })
  return `${listing.url}?${params.toString()}`
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  const days = ['日', '一', '二', '三', '四', '五', '六']
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}/${m}/${day}（${days[d.getDay()]}）`
}
</script>

<template>
  <div class="hotel-page">
    <section class="hero-card">
      <div class="pill confirmed">✓ 住宿已確定</div>
      <h1>玉川 獨棟 110㎡</h1>
      <p class="lede">
        改選福島區玉川的三層獨棟包棟民宿（110㎡）。福島區把梅田、京都、淀川花火三條動線同時拉近，
        花火左岸會場步行 15 分就到。入住
        {{ formatDate(tripConfig.checkIn) }} ~ {{ formatDate(tripConfig.checkOut) }}（{{ tripConfig.nights }} 晚），{{ tripConfig.adults }} 人同行。
      </p>
      <div class="meta">
        <div class="meta-item">
          <span class="meta-label">入住</span>
          <span class="meta-value">{{ formatDate(tripConfig.checkIn) }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">退房</span>
          <span class="meta-value">{{ formatDate(tripConfig.checkOut) }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">人數</span>
          <span class="meta-value">{{ tripConfig.adults }} 人</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">狀態</span>
          <span class="meta-value highlight-text">已選定</span>
        </div>
      </div>
    </section>

    <section class="finalist-grid">
      <div
        v-for="listing in listings"
        :key="listing.id"
        class="listing-card"
        :class="listing.id === selectedId ? 'selected' : 'dimmed'"
      >
        <div class="finalist-tag" :class="listing.id === selectedId ? 'chosen' : 'runner-up'">
          {{ listing.id === selectedId ? '✓ 已選定' : '備選' }}
        </div>
        <div class="listing-img-wrap">
          <img :src="listing.image" :alt="listing.name" loading="lazy" />
          <span class="rating-badge">
            ⭐ {{ starsDisplay(listing.rating) }}
            <template v-if="listing.rating !== null"> ({{ listing.reviews }})</template>
          </span>
        </div>
        <div class="listing-body">
          <h2 class="listing-name">{{ listing.name }}</h2>
          <p class="listing-area">{{ listing.area }}</p>
          <div class="listing-specs">
            <span>{{ listing.bedrooms }} 臥</span>
            <span>{{ listing.beds }} 床</span>
            <span>{{ listing.bathrooms }}</span>
            <span>{{ listing.maxGuests }} 人</span>
          </div>
          <div class="price-pill" :class="{ selected: listing.id === selectedId }">{{ listing.estPrice }}</div>
          <ul class="highlights">
            <li v-for="h in listing.highlights" :key="h">{{ h }}</li>
          </ul>
          <p class="listing-desc">{{ listing.desc }}</p>
          <div class="listing-actions">
            <a
              :href="bookingUrl(listing)"
              target="_blank"
              rel="noopener"
              class="action-link booking-btn"
              :class="{ dimmed: listing.id !== selectedId }"
            >{{ listing.id === selectedId ? '前往 Airbnb 預訂' : '查詢空房' }}</a>
            <a
              class="action-link map-link"
              :href="mapUrl(listing.lat, listing.lng)"
              target="_blank"
              rel="noopener"
            >
              Google Map
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="nearby-section">
      <div class="nearby-header">
        <h2>住宿周邊指南</h2>
        <p class="nearby-sub">玉川駅 4 分鐘步行圈內的實用店家與交通資訊</p>
        <a
          class="map-area-link"
          href="https://www.google.com/maps/search/%E7%8E%89%E5%B7%9D%E9%A7%85+%E5%91%A8%E8%BE%BA/@34.692,135.4736,15z"
          target="_blank"
          rel="noopener"
        >在地圖上查看整區 →</a>
      </div>

      <div class="category-row" v-for="group in spotsByCategory" :key="group.key">
        <div class="category-label">{{ group.label }}</div>
        <div class="spots-grid">
          <div class="spot-card" v-for="spot in group.spots" :key="spot.name">
            <div class="spot-icon">{{ spot.icon }}</div>
            <div class="spot-info">
              <div class="spot-name">{{ spot.name }}</div>
              <div class="spot-note">{{ spot.note }}</div>
            </div>
            <div class="spot-walk">{{ spot.walk }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hotel-page {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(0, 220, 180, 0.12), rgba(125, 240, 255, 0.16));
  border: 1px solid rgba(0, 220, 180, 0.3);
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

.pill.confirmed {
  background: rgba(0, 220, 180, 0.18);
  border-color: rgba(0, 220, 180, 0.5);
  color: #00dcb4;
  font-weight: 700;
}

.hero-card h1 {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin: 0.4rem 0;
}

.lede {
  color: var(--text-muted);
  max-width: 720px;
}

.meta {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
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

.highlight-text {
  color: #00dcb4;
}

.finalist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.2rem;
}

/* ── Selected card ── */
.listing-card {
  position: relative;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-soft);
}

.listing-card.selected {
  border-color: #00dcb4;
  box-shadow: 0 0 0 1px #00dcb4, 0 12px 36px rgba(0, 220, 180, 0.18);
}

.listing-card.selected:hover {
  box-shadow: 0 0 0 1px #00dcb4, 0 16px 48px rgba(0, 220, 180, 0.28);
  transform: translateY(-2px);
}

/* ── Dimmed / runner-up card ── */
.listing-card.dimmed {
  opacity: 0.45;
  filter: grayscale(0.6);
  border-color: rgba(255, 255, 255, 0.07);
}

.listing-card.dimmed:hover {
  opacity: 0.6;
  filter: grayscale(0.3);
}

.finalist-tag {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  z-index: 2;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.finalist-tag.chosen {
  background: linear-gradient(135deg, #00dcb4, #7df0ff);
  color: #0a0a0a;
}

.finalist-tag.runner-up {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--text-muted);
}

.listing-img-wrap {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.listing-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.listing-card.selected:hover .listing-img-wrap img {
  transform: scale(1.05);
}

.rating-badge {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.7);
  color: #ffd700;
  font-size: 0.85rem;
  font-weight: 700;
  backdrop-filter: blur(4px);
}

.listing-body {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.listing-name {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.35;
}

.listing-area {
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 600;
}

.listing-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.listing-specs span {
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.price-pill {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  border-radius: 10px;
  background: rgba(125, 240, 255, 0.12);
  border: 1px solid rgba(125, 240, 255, 0.35);
  color: var(--accent);
  font-weight: 700;
  font-size: 0.95rem;
  align-self: flex-start;
}

.price-pill.selected {
  background: rgba(0, 220, 180, 0.14);
  border-color: rgba(0, 220, 180, 0.45);
  color: #00dcb4;
}

.highlights {
  list-style: none;
  padding: 0;
  margin: 0.2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
}

.highlights li {
  font-size: 0.85rem;
  color: var(--text-primary);
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border-left: 3px solid var(--accent);
}

.listing-card.selected .highlights li {
  border-left-color: #00dcb4;
}

.listing-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  flex: 1;
}

.listing-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 0.6rem;
  padding-top: 0.8rem;
  border-top: 1px solid var(--border);
}

.action-link {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--accent);
}

.map-link {
  text-decoration: none;
  color: var(--text-muted) !important;
  transition: color 0.2s;
}

.map-link:hover {
  color: var(--text-primary) !important;
}

.booking-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.55rem 1.1rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.92rem;
  background: linear-gradient(135deg, #00dcb4, #7df0ff);
  color: #0a0a0a !important;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s;
}

.booking-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.booking-btn.dimmed {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-muted) !important;
}

/* ── Nearby Section ── */
.nearby-section {
  border-radius: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  padding: 1.4rem 1.4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nearby-header {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}

.nearby-header h2 {
  font-size: 1.15rem;
  margin: 0;
}

.nearby-sub {
  color: var(--text-muted);
  font-size: 0.88rem;
  margin: 0;
  flex: 1;
}

.map-area-link {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.map-area-link:hover {
  text-decoration: underline;
}

.category-row {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.category-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #00dcb4;
  text-transform: uppercase;
  padding: 0 0.2rem;
}

.spots-grid {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.spot-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.8rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.15s;
}

.spot-card:hover {
  background: rgba(255, 255, 255, 0.065);
}

.spot-icon {
  font-size: 1.1rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.spot-info {
  flex: 1;
  min-width: 0;
}

.spot-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}

.spot-note {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: 0.15rem;
  line-height: 1.45;
}

.spot-walk {
  font-size: 0.8rem;
  font-weight: 700;
  color: #00dcb4;
  white-space: nowrap;
  flex-shrink: 0;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  background: rgba(0, 220, 180, 0.1);
  border: 1px solid rgba(0, 220, 180, 0.2);
  align-self: center;
}

@media (max-width: 640px) {
  .finalist-grid {
    grid-template-columns: 1fr;
  }

  .meta {
    grid-template-columns: repeat(2, 1fr);
  }

  .highlights {
    grid-template-columns: 1fr;
  }

  .nearby-header {
    flex-direction: column;
    gap: 0.3rem;
  }
}
</style>
