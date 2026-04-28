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

const listings: Listing[] = [
  {
    id: '1597546007884684618',
    name: '松Inn｜天下茶屋6分｜花園町站直達難波/梅田',
    area: '西成區（天下茶屋／花園町）',
    rating: 5.0,
    reviews: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: '2',
    maxGuests: 8,
    image:
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1597546007884684618/original/9cfd1d3f-4232-4371-b965-f4d687f83a4d.jpeg?im_w=720',
    desc: '三層獨棟新一戶建，88 ㎡，3 臥室 4 床雙衛浴。南海線天下茶屋站步行 6 分（直達關西機場 25 分），地鐵四橋線花園町站 7 分，距難波 5 分鐘、梅田 15 分鐘。住宅區內鬧中取靜，超市、藥妝、便利商店齊全。',
    highlights: ['直達關西機場 25 分', '南海線+地鐵雙站', '一樓長輩房', '88 ㎡ 三層獨棟'],
    lat: 34.64071,
    lng: 135.49588,
    url: 'https://www.airbnb.com.tw/rooms/1597546007884684618',
    estPrice: '約 NT$ 35,000 / 7 晚',
  },
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
      <div class="pill">2026 大阪住宿｜最後票選</div>
      <h1>最後 2 選 1</h1>
      <p class="lede">
        經過候選名單篩選，最終決選保留 2 間天下茶屋／花園町區的整棟 Airbnb，
        7 晚預算皆落在 NT$ 35,000 上下。入住日期
        {{ formatDate(tripConfig.checkIn) }} ~ {{ formatDate(tripConfig.checkOut) }}（{{ tripConfig.nights }} 晚），{{ tripConfig.adults }} 人同行。點擊「查詢空房＆價格」可前往 Airbnb 查看即時價格與空房狀況。
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
          <span class="meta-value">{{ listings.length }} 間（決選）</span>
        </div>
      </div>
    </section>

    <section class="finalist-grid">
      <div
        v-for="(listing, idx) in listings"
        :key="listing.id"
        class="listing-card"
      >
        <div class="finalist-tag">候選 {{ idx + 1 }}</div>
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
          <div class="price-pill">{{ listing.estPrice }}</div>
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
    </section>

    <section class="note-card">
      <h2>票選注意事項</h2>
      <ul>
        <li>兩間皆位於天下茶屋／花園町區，南海線可直達關西機場、地鐵四橋線可直達難波及梅田，交通條件相近</li>
        <li>價格因季節與需求浮動，請點進 Airbnb 連結確認即時報價（兩間目前估算約 NT$ 35,000 / 7 晚）</li>
        <li>建議選定後盡早預訂，10 月為大阪旅遊旺季，房源容易被搶</li>
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

.finalist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.2rem;
}

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

.listing-card:hover {
  border-color: var(--accent);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.finalist-tag {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  z-index: 2;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffd700, #ff9966);
  color: #0a0a0a;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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
  background: linear-gradient(135deg, #ffd700, #ff9966);
  color: #0a0a0a !important;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s;
}

.booking-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

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
}
</style>
