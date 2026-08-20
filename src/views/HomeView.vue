<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import CounterBox from '../components/CounterBox.vue'
import TimelineItem from '../components/TimelineItem.vue'
import GalleryImage from '../components/GalleryImage.vue'
import PromiseCard from '../components/PromiseCard.vue'
import type { Moment } from '../components/TimelineCard.vue'
import GiftBox from '../components/GiftBox.vue'

const START_DATE = new Date('2022-03-14T00:00:00')
const elapsed = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timer: number | undefined

function updateCounter() {
  const diff = Math.max(0, Date.now() - START_DATE.getTime())
  elapsed.value = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  }
}

onMounted(() => {
  updateCounter()
  timer = window.setInterval(updateCounter, 1000)
})

onBeforeUnmount(() => window.clearInterval(timer))

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  emoji: i % 3 === 0 ? '🌸' : i % 3 === 1 ? '🌺' : '❤️',
  size: `${0.8 + Math.random() * 0.8}rem`,
}))

const moments: Moment[] = [
  { date: '14/03/2022', title: 'Lần đầu gặp gỡ', desc: 'Buổi chiều hôm ấy, Vũ thấy Trang đứng bên cửa sổ thư viện — ánh nắng chiều vàng rọi lên mái tóc, và tim anh đã bỏ lỡ một nhịp.', icon: '🌟', img: 'https://images.unsplash.com/photo-1758297802405-ab18e1a30c62?w=500&h=400&fit=crop&auto=format', alt: 'Couple holding hands walking through blooming garden' },
  { date: '14/06/2022', title: 'Buổi hẹn hò đầu tiên', desc: 'Một tách cà phê, một chiếc bánh nhỏ, và hàng giờ trò chuyện không dứt. Trang nhận ra Vũ là người cô muốn kể mọi câu chuyện.', icon: '☕', img: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?w=500&h=400&fit=crop&auto=format', alt: 'Two people sitting together with candles at night' },
  { date: '14/12/2022', title: 'Lời thú nhận', desc: 'Dưới bầu trời đầy sao, Vũ cầm tay Trang và nói ba chữ giản dị nhất thế gian. Trang gật đầu — và thế giới chỉ còn hai người.', icon: '✨', img: 'https://images.unsplash.com/photo-1591969851586-adbbd4accf81?w=500&h=400&fit=crop&auto=format', alt: 'Silhouette of two people embracing against golden light' },
  { date: '14/03/2023', title: 'Kỷ niệm 1 năm', desc: 'Một năm đầy những nụ cười, những buổi sáng cùng nhau, và những lúc bên nhau vượt qua khó khăn. Tình yêu đã trở thành ngôi nhà.', icon: '🎂', img: 'https://images.unsplash.com/photo-1615966650071-855b15f29ad1?w=500&h=400&fit=crop&auto=format', alt: 'Silhouette of couple dancing on beach at golden hour' },
  { date: '14/03/2024', title: 'Kỷ niệm 2 năm', desc: 'Hai năm — mỗi ngày là một trang mới trong cuốn sách tình yêu của chúng mình. Vũ và Trang, mãi bên nhau.', icon: '💍', img: 'https://images.unsplash.com/photo-1781145861644-3defa847eed9?w=500&h=400&fit=crop&auto=format', alt: 'Smiling couple walking on a path through flowers' },
]

const gallery = [
  { url: 'https://images.unsplash.com/photo-1615966650071-855b15f29ad1?w=600&h=500&fit=crop&auto=format', alt: 'Dancing at golden hour', tall: true },
  { url: 'https://images.unsplash.com/photo-1603124465407-c424cca96fb2?w=600&h=500&fit=crop&auto=format', alt: 'Walking together', tall: false },
  { url: 'https://images.unsplash.com/photo-1540076156429-35ffe82b7870?w=600&h=500&fit=crop&auto=format', alt: 'Tender moment', tall: false },
  { url: 'https://images.unsplash.com/photo-1567776287475-0b18a4e1dcab?w=600&h=500&fit=crop&auto=format', alt: 'Pink roses', tall: false },
  { url: 'https://images.unsplash.com/photo-1541724673942-6b2993cf1c81?w=600&h=500&fit=crop&auto=format', alt: 'Pink petals', tall: false },
  { url: 'https://images.unsplash.com/photo-1781145861644-3defa847eed9?w=600&h=500&fit=crop&auto=format', alt: 'Couple in flowers', tall: true },
]

const promises = [
  { icon: '🌙', title: 'Mỗi đêm', desc: 'Anh sẽ luôn nhắn tin chúc em ngủ ngon, dù ngày đó có bận đến đâu.' },
  { icon: '☀️', title: 'Mỗi sáng', desc: 'Cà phê đầu tiên của ngày sẽ làm anh nghĩ đến em — như mọi khi.' },
  { icon: '💫', title: 'Mãi mãi', desc: 'Dù thời gian trôi qua, tình yêu dành cho em chỉ lớn hơn, không bao giờ nhỏ lại.' },
]

const galleryVisible = ref(false)
const letterVisible = ref(false)
const heroVisible = ref(false)
const galleryRoot = ref<HTMLElement | null>(null)
const letterRoot = ref<HTMLElement | null>(null)
const heroRoot = ref<HTMLElement | null>(null)
let observers: IntersectionObserver[] = []

onMounted(() => {
  const targets: Array<[HTMLElement | null, typeof galleryVisible]> = [
    [heroRoot.value, heroVisible],
    [letterRoot.value, letterVisible],
    [galleryRoot.value, galleryVisible],
  ]
  targets.forEach(([el, state]) => {
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) state.value = true
    }, { threshold: 0.1 })
    obs.observe(el)
    observers.push(obs)
  })
})

onBeforeUnmount(() => observers.forEach((o) => o.disconnect()))

const footerDays = computed(() => elapsed.value.days)
</script>

<template>
  <main class="page-shell">
    <span
        v-for="petal in petals"
        :key="petal.id"
        class="petal"
        :style="{ left: petal.left, animationDelay: petal.delay, animationDuration: petal.duration, fontSize: petal.size }"
    >{{ petal.emoji }}</span>

    <section class="hero section-surface">
      <div class="hero-bg" />
      <div ref="heroRoot" class="hero-content" :class="{ visible: heroVisible }">
        <div class="hero-image animate-float">
          <img src="https://images.unsplash.com/photo-1591969851586-adbbd4accf81?w=500&h=500&fit=crop&auto=format" alt="Vũ và Trang" />
        </div>
        <p class="script hero-kicker">Câu chuyện tình yêu của</p>
        <h1>Quang Vũ <span>❤️</span> Thu Trang</h1>
        <p class="hero-date">Bắt đầu từ ngày 14 tháng 09 năm 2024</p>

        <div class="love-counter glass-card">
          <CounterBox :value="elapsed.days" label="Ngày" />
          <i>·</i>
          <CounterBox :value="elapsed.hours" label="Giờ" />
          <i>·</i>
          <CounterBox :value="elapsed.minutes" label="Phút" />
          <i>·</i>
          <CounterBox :value="elapsed.seconds" label="Giây" />
        </div>
        <p class="counter-caption">♡ Chúng mình đã bên nhau ♡</p>
      </div>
      <div class="scroll-hint" aria-hidden="true"><span /></div>
    </section>

    <section class="timeline-section">
      <div class="content-wide">
        <header class="section-heading">
          <p class="script">Hành trình của chúng mình</p>
          <h2>Những khoảnh khắc đặc biệt</h2>
          <div class="heading-line" />
        </header>
        <div class="timeline-line">
          <TimelineItem
              v-for="(moment, index) in moments"
              :key="moment.date"
              :moment="moment"
              :index="index"
              :last="index === moments.length - 1"
          />
        </div>
      </div>
    </section>

    <section class="letter-section">
      <div ref="letterRoot" class="letter-wrap reveal" :class="{ visible: letterVisible }">
        <div class="letter-heart">♥</div>
        <p class="script">Từ Vũ gửi Trang</p>
        <h2>Lá thư tình</h2>
        <article class="letter-card">
          <div class="quote-mark">&quot;</div>
          <div class="letter-copy">
            <p>Trang ơi, từ cái buổi chiều đầu tiên ngồi bên nhau ở thư viện, anh đã biết cuộc đời mình sẽ khác đi. Không phải vì em đẹp — dù em đẹp lắm — mà vì cái cách em cười, cái cách em nói chuyện, khiến anh muốn ngồi nghe mãi không thôi.</p>
            <p>Mỗi ngày bên em là một món quà anh không bao giờ xứng đáng được nhận. Em là người làm cho những buổi sáng thường ngày trở nên đáng sống, làm cho những lúc khó khăn nhất cũng có chỗ để dựa vào.</p>
            <p>Cảm ơn em đã chọn anh — trong tất cả mọi ngày, trong tất cả mọi lúc. Anh yêu em hôm nay, ngày mai, và mãi mãi.</p>
          </div>
          <div class="signature">— Vũ của em 💌</div>
        </article>
      </div>
    </section>

    <section class="gallery-section">
      <div class="content-gallery">
        <header class="section-heading gallery-heading">
          <p class="script">Những bức ảnh đẹp nhất</p>
          <h2>Ký ức của đôi ta</h2>
        </header>
        <div ref="galleryRoot" class="gallery-grid reveal" :class="{ visible: galleryVisible }">
          <GalleryImage v-for="(img, index) in gallery" :key="img.url" v-bind="img" :index="index" />
        </div>
      </div>
    </section>

    <section class="promise-section">
      <div class="content-medium">
        <header class="section-heading">
          <p class="script">Những lời hứa</p>
          <h2>Mãi bên nhau</h2>
        </header>
        <div class="promise-grid">
          <PromiseCard v-for="(promise, index) in promises" :key="promise.title" v-bind="promise" :index="index" />
        </div>
      </div>
    </section>
    <GiftBox />
    <footer class="footer">
      <div class="footer-name">Vũ <span>♥</span> Trang</div>
      <p class="script">Yêu nhau từ 14.09.2024</p>
      <p class="footer-count">{{ footerDays }} CHÚC EM IU HẠNH PHÚC VÀ MÃI MÃI BÊN ANH</p>
      <div class="footer-hearts"><span>♡</span><span>♡</span><span>♡</span></div>
    </footer>
  </main>
</template>
