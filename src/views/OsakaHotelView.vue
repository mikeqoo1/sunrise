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

const selectedId = '1624285200618600616'

const listings: Listing[] = [
  {
    id: '1624285200618600616',
    name: '日居・影 ECHO｜花園町站4分｜2026 全新裝潢／附車位',
    area: '西成區（花園町／天下茶屋）',
    rating: 5.0,
    reviews: 3,
    bedrooms: 4,
    beds: 6,
    bathrooms: '2',
    maxGuests: 12,
    image:
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1624285200618600616/original/a8023a25-81ee-43c8-a281-b25b8a04f751.jpeg?im_w=720',
    desc: '2026 全新登場的三層獨棟包棟民宿，日系簡約 × 微北歐質感，全面採用日本製床墊。地鐵四橋線花園町站步行 4 分、南海線天下茶屋站可達，直達心齋橋、梅田，附 1 個停車位。',
    highlights: ['2026 全新裝潢', '日本製床墊', '附停車位 1 個', '4 房 6 床／可睡 12 人'],
    lat: 34.6417,
    lng: 135.497,
    url: 'https://www.airbnb.com.tw/rooms/1624285200618600616',
    estPrice: '約 NT$ 35,000 / 7 晚',
  },
]

const nearbySpots: NearbySpot[] = [
  {
    icon: '🛒',
    name: 'Super Tamade 花園店',
    note: '大阪激安代表超市，24 小時營業，蔬菜生肉熟食飲料一應俱全',
    walk: '步行 1 分',
    category: 'shopping',
  },
  {
    icon: '🏪',
    name: 'Daily Kana-art Izumiya 花園店',
    note: '中型超市，店內含大創百元店＋ cocokara fine 藥妝，一次購足',
    walk: '步行 2 分',
    category: 'shopping',
  },
  {
    icon: '💊',
    name: 'Daikoku Drug 花園町駅前店',
    note: '大阪本土最強藥妝連鎖，藥品、保養品、食品雜貨全都有',
    walk: '步行 2 分',
    category: 'drugstore',
  },
  {
    icon: '🏬',
    name: 'FamilyMart 花園町店',
    note: '最近的便利商店，24 小時',
    walk: '步行 1 分',
    category: 'convenience',
  },
  {
    icon: '🏬',
    name: 'Lawson 花園北2丁目店',
    note: '24 小時，離住宿另一方向',
    walk: '步行 3 分',
    category: 'convenience',
  },
  {
    icon: '🏮',
    name: '鶴見橋商店街',
    note: '昭和復古有蓋商店街全長約 1 公里，老肉舖、魚店、立吞み小酒館，大阪庶民街景代表',
    walk: '步行 3〜5 分',
    category: 'shopping',
  },
  {
    icon: '🍢',
    name: 'ひげ勝（Hige Katsu）',
    note: '創業 40 年串炸老舖，每串 90 日圓起，西成在地人愛店，常客滿需早到',
    walk: '步行 3 分',
    category: 'food',
  },
  {
    icon: '🍜',
    name: '鶴見橋商店街 立吞み小酒館',
    note: '商店街內多間站著喝的小居酒屋，啤酒 350〜500 日圓，串燒關東煮即叫即上',
    walk: '步行 5 分',
    category: 'food',
  },
  {
    icon: '🛍️',
    name: '業務超市 天下茶屋站前店',
    note: '量販型食材超市，大容量冷凍食品、調味料超划算，適合補貨',
    walk: '步行 12 分',
    category: 'shopping',
  },
  {
    icon: '🚇',
    name: '難波（Namba）',
    note: '地鐵四橋線直達 2 站，下車即是道頓堀、心齋橋商圈',
    walk: '電車 3〜4 分',
    category: 'transit',
  },
  {
    icon: '🚇',
    name: '心齋橋 / 美國村',
    note: '四橋線至難波再換乘御堂筋線 1 站，或步行往北約 20 分',
    walk: '電車 10〜15 分',
    category: 'transit',
  },
  {
    icon: '🗼',
    name: '通天閣（新世界）',
    note: '沿鶴見橋商店街方向步行可到，大阪庶民名所',
    walk: '步行 20〜25 分',
    category: 'transit',
  },
  {
    icon: '✈️',
    name: '天下茶屋駅（南海電鐵）',
    note: '步行或地鐵可達，南海線直達關西機場約 25 分',
    walk: '步行 15〜20 分',
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
  checkOut: '2026-10-17',
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
      <h1>日居・影 ECHO</h1>
      <p class="lede">
        票選結果出爐！選定花園町的全新裝潢整棟包棟民宿「日居・影 ECHO」。入住
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
            <span>{{ listing.bathrooms }} 衛</span>
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
        <p class="nearby-sub">花園町駅 4 分鐘步行圈內的實用店家與交通資訊</p>
        <a
          class="map-area-link"
          href="https://www.google.com/maps/search/%E8%8A%B1%E5%9C%92%E7%94%BA%E9%A7%85+%E5%91%A8%E8%BE%BA/@34.6417,135.497,15z"
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
