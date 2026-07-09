<script setup lang="ts">
interface SpotLink {
  label: string;
  note?: string;
  url: string;
}

interface Spot {
  eyebrow: string;
  title: string;
  blurb?: string;
  area?: string;
  links?: SpotLink[];
}

const diningSpots: Spot[] = [
  {
    eyebrow: "大阪肉肉・已預訂",
    title: "焼肉力丸 梅田東通り店",
    blurb:
      "吃到飽燒肉，大阪市北區小松原町4-32 北大阪東通りビル3F，東梅田站步行 4 分。已預訂。",
    area: "東梅田站步行 4 分",
    links: [
      {
        label: "Tabelog 店家頁 ⭐ 已預訂",
        note: "菜單、評價與訂位資訊",
        url: "https://tabelog.com/en/osaka/A2701/A270101/27139009/",
      },
      {
        label: "Google Maps 位置",
        note: "焼肉力丸 梅田東通り店 地圖標註",
        url: "https://www.google.com/maps/search/%E7%84%BC%E8%82%89%E5%8A%9B%E4%B8%B8+%E6%A2%85%E7%94%B0%E6%9D%B1%E9%80%9A%E3%82%8A%E5%BA%97",
      },
    ],
  },
  {
    eyebrow: "嘎菲指定・厚切豬排",
    title: "epais 阪神梅田店（エペ）",
    blurb:
      "北新地米其林必比登姊妹店搬到阪神百貨地下美食街，主打嚴選品牌豬厚切豬排與單點和牛料理。住宿在花園町，搭四橋線一站直達西梅田（約 10 分），下車走地下通道接阪神百貨 B2，全程不用出地面，是三家分店中最近、最不耗體力的一間。",
    area: "阪神梅田本店 B2F 阪神バル横丁（西梅田）",
    links: [
      {
        label: "Tabelog 店家頁 ⭐ 嘎菲指定",
        note: "大阪市北區梅田1-13-13 阪神梅田本店 B2F",
        url: "https://tabelog.com/en/osaka/A2701/A270101/27125466/",
      },
      {
        label: "阪神百貨官方介紹",
        note: "B2 阪神バル横丁グルメゾーン｜可單點豬排、和牛、シャトーブリアン",
        url: "https://www.hanshin-dept.jp/hshonten/restaurantguide/gourmetzone/gourmetzone02.html",
      },
      {
        label: "Google Maps 位置",
        note: "epais 阪神梅田店 地圖標註",
        url: "https://www.google.com/maps/search/epais+%E9%98%AA%E7%A5%9E%E6%A2%85%E7%94%B0%E5%BA%97",
      },
    ],
  },
];

const shoppingSpots: Spot[] = [
  {
    eyebrow: "恐龍指定・籃球 + 咖啡",
    title: "AKTR Sports Supply（美國村）",
    blurb:
      "日本籃球潮流品牌旗艦店，店內附設 SPORTY COFFEE（芝加哥 Sawada Coffee 拉花世界冠軍監修）。住宿在花園町，搭四橋線一條線到底、3 站直達四ツ橋（約 6 分），5 號出口走 3 分到店，買完還可以順遊心齋橋筋／道頓堀。",
    area: "西心斎橋2-10-13-101｜8:30–20:00（美國村）",
    links: [
      {
        label: "AKTR Sports Supply 官網",
        note: "日本籃球潮流品牌旗艦店",
        url: "https://aktr.jp/en/pages/sports-supply",
      },
      {
        label: "Sporty Coffee 介紹",
        note: "與 Sawada Coffee／THE CUPS 合作｜現場拉花、季節限定豆",
        url: "https://aktr.jp/en/collections/sporty-coffee/sporty-aac",
      },
      {
        label: "Google Maps 位置",
        note: "AKTR Sports Supply Amemura 地圖標註",
        url: "https://www.google.com/maps/search/AKTR+Sports+Supply+%E7%BE%8E%E5%9C%8B%E6%9D%91",
      },
    ],
  },
  {
    eyebrow: "運動用品・快樂龍/R庭/大雄",
    title: "Sports Depo なんばパークス店",
    blurb:
      "綜合運動用品大型店，籃球服飾（AKTR／Spalding）、球襪、泳裝品項多，免稅對應。",
    area: "なんばパークス 4F（直通難波站）",
    links: [
      {
        label: "Google Maps 位置",
        note: "スポーツデポ なんばパークス店",
        url: "https://www.google.com/maps/search/Sports+Depo+Namba+Parks",
      },
    ],
  },
  {
    eyebrow: "泳裝專賣・快樂龍/R庭",
    title: "arena shop Osaka（グランフロント大阪）",
    blurb:
      "arena 泳裝專賣店，泳褲／泳鏡／女款泳衣款式最齊，快樂龍與 R庭 的泳裝主場。",
    area: "グランフロント大阪 南館 4F（梅田站）",
    links: [
      {
        label: "Google Maps 位置",
        note: "arena shop グランフロント大阪",
        url: "https://www.google.com/maps/search/arena+shop+Grand+Front+Osaka",
      },
    ],
  },
  {
    eyebrow: "嘎菲藥粧",
    title: "大國藥妝 / 松本清 / 唐吉訶德",
    blurb:
      "難波・心齋橋藥粧一次購足，多家分店可比價，唐吉訶德 24 小時最彈性，嘎菲藥粧首選。",
    area: "難波／心齋橋／道頓堀",
    links: [
      {
        label: "Google Maps 位置",
        note: "唐吉訶德 道頓堀店（藥粧夜逛）",
        url: "https://www.google.com/maps/search/Don+Quijote+Dotonbori",
      },
    ],
  },
];
</script>

<template>
  <div class="food-page">
    <section class="hero-card">
      <RouterLink class="back-link" to="/2026travel">← 回到總覽</RouterLink>
      <div class="pill">🍽️ 2026 大阪・美食 &amp; 必逛</div>
      <h1>美食 &amp; 必逛</h1>
      <p class="lede">
        大阪環球之旅的餐廳與必逛店家一次整理：已預訂的燒肉、嘎菲指定豬排，
        以及運動用品、泳裝、藥粧的採買地點與交通動線。
      </p>
      <div class="cta-row">
        <RouterLink class="btn ghost" to="/2026shopping">大阪購物清單</RouterLink>
        <RouterLink class="btn ghost" to="/2026travel/detail">2026 詳細手冊</RouterLink>
      </div>
    </section>

    <section class="spot-section">
      <h2 class="section-title">🍖 美食</h2>
      <div class="spot-list">
        <article v-for="spot in diningSpots" :key="spot.title" class="spot-card">
          <p class="spot-eyebrow">{{ spot.eyebrow }}</p>
          <h3 class="spot-title">{{ spot.title }}</h3>
          <p v-if="spot.area" class="spot-area">📍 {{ spot.area }}</p>
          <p v-if="spot.blurb" class="spot-blurb">{{ spot.blurb }}</p>
          <div v-if="spot.links" class="spot-links">
            <a
              v-for="link in spot.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="spot-link"
            >
              <span class="spot-link-label">{{ link.label }}</span>
              <span v-if="link.note" class="spot-link-note">{{ link.note }}</span>
              <span class="spot-link-arrow">前往 →</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <section class="spot-section">
      <h2 class="section-title">🛍️ 必逛</h2>
      <div class="spot-list">
        <article v-for="spot in shoppingSpots" :key="spot.title" class="spot-card">
          <p class="spot-eyebrow">{{ spot.eyebrow }}</p>
          <h3 class="spot-title">{{ spot.title }}</h3>
          <p v-if="spot.area" class="spot-area">📍 {{ spot.area }}</p>
          <p v-if="spot.blurb" class="spot-blurb">{{ spot.blurb }}</p>
          <div v-if="spot.links" class="spot-links">
            <a
              v-for="link in spot.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="spot-link"
            >
              <span class="spot-link-label">{{ link.label }}</span>
              <span v-if="link.note" class="spot-link-note">{{ link.note }}</span>
              <span class="spot-link-arrow">前往 →</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <div class="bottom-nav">
      <RouterLink class="btn ghost" to="/2026travel">← 回到總覽</RouterLink>
      <RouterLink class="btn ghost" to="/2026shopping">大阪購物清單</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.food-page {
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
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin: 0.4rem 0;
}

.lede {
  color: var(--text-muted);
  max-width: 720px;
}

.cta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.9rem;
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

/* Spot sections */
.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.spot-section {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.spot-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.spot-card {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
}

.spot-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  font-size: 0.78rem;
}

.spot-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0.2rem 0 0.3rem;
}

.spot-area {
  color: var(--accent);
  font-size: 0.88rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.spot-blurb {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.92rem;
  margin: 0 0 0.7rem;
}

.spot-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}

.spot-link {
  padding: 0.7rem 0.9rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  display: grid;
  gap: 0.2rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.spot-link:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.spot-link-label {
  font-weight: 700;
  font-size: 0.92rem;
}

.spot-link-note {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.5;
}

.spot-link-arrow {
  color: var(--accent);
  font-weight: 700;
  font-size: 0.85rem;
}

/* Bottom navigation */
.bottom-nav {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  padding: 0.8rem 0;
}
</style>
