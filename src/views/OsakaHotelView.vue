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
  lat: number
  lng: number
  url: string
}

interface Area {
  name: string
  icon: string
  color: string
  desc: string
  attractions: string[]
  listings: Listing[]
}

const areas: Area[] = [
  {
    name: '環球影城/西九條 區',
    icon: '🎢',
    color: '#ff9966',
    desc: '距離 USJ 最近，適合連兩天玩環球影城的行程安排',
    attractions: ['環球影城 (USJ)', '天保山摩天輪', '海遊館', '2025 世博紀念公園'],
    listings: [
      {
        id: '1402843086264680755',
        name: 'USJ兩站｜門口即公園｜溫馨獨棟',
        area: '此花區',
        rating: 4.97,
        reviews: 35,
        bedrooms: 3,
        beds: 4,
        bathrooms: '2',
        maxGuests: 4,
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1402843086264680755/original/4f1abbec-73de-4844-a947-c0e50fc40067.jpeg?im_w=720',
        desc: '關西機場電車直達，距 USJ 僅 2 站。三層獨棟，一樓長輩房含衛浴，頂樓大露台。附近有 Life 超市（營業至凌晨）。',
        lat: 34.68284,
        lng: 135.45923,
        url: 'https://www.airbnb.com.tw/rooms/1402843086264680755',
      },
      {
        id: '1419357307031751742',
        name: '西九條 Maison Le Bleu 千草｜地中海風別墅',
        area: '此花區',
        rating: 4.96,
        reviews: 23,
        bedrooms: 3,
        beds: 5,
        bathrooms: '2',
        maxGuests: 5,
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQxOTM1NzMwNzAzMTc1MTc0Mg==/original/c0fd2046-8b56-420c-b0cc-81ae090371f4.jpeg?im_w=720',
        desc: '地中海風格三層獨棟別墅，約 80 平方米。鄰近西九條上公園，世博、USJ、梅田、難波電車直達。設有浴缸。',
        lat: 34.6818,
        lng: 135.4698,
        url: 'https://www.airbnb.com.tw/rooms/1419357307031751742',
      },
      {
        id: '1252602666981252423',
        name: '西九條站步行5分｜USJ電車5分｜整棟出租',
        area: '此花區',
        rating: 4.92,
        reviews: 60,
        bedrooms: 2,
        beds: 4,
        bathrooms: '1',
        maxGuests: 6,
        image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1252602666981252423/original/dedd5948-3599-4455-91d0-21a1728e926f.jpeg?im_w=720',
        desc: '2024 年 10 月新開幕。時尚設計，滾筒洗衣機（含烘乾）、3 台空調、Netflix 電視、完整廚房設備。',
        lat: 34.68254,
        lng: 135.47061,
        url: 'https://www.airbnb.com.tw/rooms/1252602666981252423',
      },
    ],
  },
  {
    name: '野田/福島 區',
    icon: '🚉',
    color: '#7df0ff',
    desc: '交通樞紐地段，前往大阪站、USJ、難波都很方便',
    attractions: ['大阪站/梅田', '空中庭園展望台', '中之島公園', 'USJ 電車約 12 分'],
    listings: [
      {
        id: '851024529727089380',
        name: '大阪站8分｜USJ 11分｜4臥室安靜住宅',
        area: '福島區',
        rating: 5.0,
        reviews: 1,
        bedrooms: 4,
        beds: 5,
        bathrooms: '1',
        maxGuests: 8,
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-851024529727089380/original/db325c7a-f3ff-4380-bb22-ca88b5d7b288.jpeg?im_w=720',
        desc: '野田站/玉川站步行 3 分鐘。靠近超市和便利商店，環境安靜。前往大阪站 9 分、難波 16 分、USJ 12 分。',
        lat: 34.68859,
        lng: 135.4764,
        url: 'https://www.airbnb.com.tw/rooms/851024529727089380',
      },
    ],
  },
  {
    name: '市中心/難波 區',
    icon: '🏙️',
    color: '#ffd700',
    desc: '逛街美食首選，道頓堀、心齋橋、新世界都在步行範圍',
    attractions: ['道頓堀', '心齋橋筋商店街', '通天閣/新世界', '黑門市場', '大阪巨蛋'],
    listings: [
      {
        id: '1401748623627579133',
        name: '和の家・鶴鳴｜市中心獨棟｜2站到難波',
        area: '大國町',
        rating: 4.89,
        reviews: 27,
        bedrooms: 3,
        beds: 5,
        bathrooms: '1.5',
        maxGuests: 8,
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1401748623627579133/original/865a425e-9c45-4164-b5d7-2e72502fa1f1.png?im_w=720',
        desc: '鶴見橋商店街旁，兩年內新屋。三層獨棟，附車庫。品牌床墊、完整廚房。地鐵站步行 5 分鐘，2 站到難波。',
        lat: 34.647,
        lng: 135.4945,
        url: 'https://www.airbnb.com.tw/rooms/1401748623627579133',
      },
      {
        id: '1528311482366788358',
        name: '動物園前站2分｜難波直達5分｜整棟包棟',
        area: '新世界',
        rating: 5.0,
        reviews: 12,
        bedrooms: 3,
        beds: 5,
        bathrooms: '1.5',
        maxGuests: 5,
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1528311482366788358/original/e124bc4a-4725-4e65-a4da-abd84cc10847.jpeg?im_w=720',
        desc: '步行可到 Don Quijote、新世界、通天閣、天王寺。關西機場約 60 分鐘直達。附近有串炸店、章魚燒、咖啡館。',
        lat: 34.6471,
        lng: 135.5051,
        url: 'https://www.airbnb.com.tw/rooms/1528311482366788358',
      },
      {
        id: '1635361989380289039',
        name: '潁澤軒｜大阪巨蛋旁｜大正站步行5分',
        area: '大正區',
        rating: 5.0,
        reviews: 2,
        bedrooms: 3,
        beds: 6,
        bathrooms: '2',
        maxGuests: 7,
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1635361989380289039/original/de54b6b5-af43-4159-bd66-0b0818e93ca5.jpeg?im_w=720',
        desc: '三室一廳，雙衛浴雙淋浴。JR/地鐵大正站步行 4-5 分鐘，可直達關西機場。緊鄰大阪巨蛋，乾濕分離設計。',
        lat: 34.66665,
        lng: 135.47587,
        url: 'https://www.airbnb.com.tw/rooms/1635361989380289039',
      },
    ],
  },
]

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

const totalListings = areas.reduce((sum, a) => sum + a.listings.length, 0)

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
      <div class="pill">2026 大阪住宿比較</div>
      <h1>住宿選擇整理</h1>
      <p class="lede">
        大阪之旅 {{ totalListings }} 間候選住宿，依區域分類整理。入住日期
        {{ formatDate(tripConfig.checkIn) }} ~ {{ formatDate(tripConfig.checkOut) }}（{{ tripConfig.nights }} 晚），{{ tripConfig.adults }} 人同行。點擊「查詢空房＆價格」可前往 Airbnb
        查看最新價格與空房。
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
          <span class="meta-label">候選</span>
          <span class="meta-value">{{ totalListings }} 間</span>
        </div>
      </div>
    </section>

    <section v-for="area in areas" :key="area.name" class="area-section">
      <div class="area-header">
        <span class="area-icon">{{ area.icon }}</span>
        <div>
          <h2 class="area-title">{{ area.name }}</h2>
          <p class="area-desc">{{ area.desc }}</p>
        </div>
      </div>

      <div class="attractions-bar">
        <span class="attractions-label">周邊景點</span>
        <span
          v-for="attr in area.attractions"
          :key="attr"
          class="attraction-tag"
          :style="{ borderColor: area.color }"
        >
          {{ attr }}
        </span>
      </div>

      <div class="listing-grid">
        <div
          v-for="listing in area.listings"
          :key="listing.id"
          class="listing-card"
        >
          <div class="listing-img-wrap">
            <img :src="listing.image" :alt="listing.name" loading="lazy" />
            <span class="rating-badge" :style="{ background: area.color }">
              {{ starsDisplay(listing.rating) }}
              <template v-if="listing.rating !== null"> ({{ listing.reviews }})</template>
            </span>
          </div>
          <div class="listing-body">
            <h3 class="listing-name">{{ listing.name }}</h3>
            <div class="listing-specs">
              <span>{{ listing.bedrooms }} 臥</span>
              <span>{{ listing.beds }} 床</span>
              <span>{{ listing.bathrooms }} 衛</span>
              <span>{{ listing.maxGuests }} 人</span>
            </div>
            <p class="listing-area">{{ listing.area }}</p>
            <p class="listing-desc">{{ listing.desc }}</p>
            <div class="listing-actions">
              <a
                :href="bookingUrl(listing)"
                target="_blank"
                rel="noopener"
                class="action-link booking-btn"
                :style="{ background: area.color }"
              >查詢空房＆價格</a>
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
      </div>
    </section>

    <section class="note-card">
      <h2>注意事項</h2>
      <ul>
        <li>價格因季節與需求浮動，請點進 Airbnb 連結查看即時報價（目前日期較遠，部分房源尚未開放訂房）</li>
        <li>環球影城周邊房源適合 Day 1-2 入住，市中心房源適合後半段逛街行程</li>
        <li>新大阪房源最大容納 3 人，不適合 4 人同住，但交通最便利</li>
        <li>建議選定後盡早預訂，10 月為大阪旅遊旺季</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.hotel-page {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Hero */
.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(255, 153, 102, 0.16), rgba(125, 240, 255, 0.14));
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

/* Area sections */
.area-section {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.area-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.area-icon {
  font-size: 2rem;
}

.area-title {
  font-size: 1.3rem;
  font-weight: 700;
}

.area-desc {
  color: var(--text-muted);
  font-size: 0.92rem;
}

/* Attractions bar */
.attractions-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}

.attractions-label {
  font-size: 0.82rem;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  font-weight: 600;
}

.attraction-tag {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid;
  font-size: 0.82rem;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.04);
}

/* Listing grid */
.listing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.listing-card {
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.listing-card:hover {
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
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

.listing-card:hover .listing-img-wrap img {
  transform: scale(1.05);
}

.rating-badge {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #0a0a0a;
}

.listing-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.listing-name {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
}

.listing-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.listing-specs span {
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.listing-area {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
}

.listing-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  flex: 1;
}

.listing-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
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
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.88rem;
  color: #0a0a0a !important;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s;
}

.booking-btn:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

/* Note card */
.note-card {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.note-card h2 {
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.note-card ul {
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.note-card li {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.5;
}

/* Mobile */
@media (max-width: 640px) {
  .listing-grid {
    grid-template-columns: 1fr;
  }

  .meta {
    grid-template-columns: repeat(2, 1fr);
  }

  .area-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
}
</style>
