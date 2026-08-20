<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import GalleryImage from '../components/GalleryImage.vue'

type Photo = {
  url: string
  alt: string
  tall: boolean
  caption: string
}

type Section = {
  id: string
  kicker: string
  title: string
  description: string
  emoji: string
  photos: Photo[]
}

const sections: Section[] = [
  {
    id: 'angry',
    kicker: 'Khi em giận',
    title: 'Lúc em tức giận',
    description: 'Dù em có dỗi đến đâu, anh vẫn chỉ muốn ôm em vào lòng thôi.',
    emoji: '😤',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&h=900&fit=crop&auto=format',
        alt: 'Em đang dỗi',
        tall: true,
        caption: 'Dỗi một chút thôi mà',
      },
      {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=700&fit=crop&auto=format',
        alt: 'Ánh mắt dỗi hờn',
        tall: false,
        caption: 'Ánh mắt ấy làm anh run',
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&h=900&fit=crop&auto=format',
        alt: 'Em giận',
        tall: true,
        caption: 'Giận rồi cũng sẽ hết',
      },
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&h=700&fit=crop&auto=format',
        alt: 'Em vẫn xinh khi dỗi',
        tall: false,
        caption: 'Dỗi cũng đáng yêu',
      },
    ],
  },
  {
    id: 'baby',
    kicker: 'Khi em là em bé',
    title: 'Lúc em là em bé',
    description: 'Những lúc em nghịch ngợm, cười tít mắt — anh chỉ muốn chiều hết tất cả.',
    emoji: '🥺',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&h=900&fit=crop&auto=format',
        alt: 'Em bé của anh',
        tall: true,
        caption: 'Em bé của anh đây',
      },
      {
        url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&h=700&fit=crop&auto=format',
        alt: 'Nụ cười trẻ con',
        tall: false,
        caption: 'Cười như em bé',
      },
      {
        url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=700&h=900&fit=crop&auto=format',
        alt: 'Em nghịch ngợm',
        tall: true,
        caption: 'Nghịch quá đi thôi',
      },
      {
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&h=700&fit=crop&auto=format',
        alt: 'Em đáng yêu',
        tall: false,
        caption: 'Đáng yêu hết mức',
      },
    ],
  },
  {
    id: 'tired',
    kicker: 'Khi em mệt',
    title: 'Lúc em phờ phạc',
    description: 'Dù em mệt đến đâu, anh vẫn muốn được ở cạnh, vuốt ve và nói “ngủ ngoan nhé”.',
    emoji: '😴',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=900&fit=crop&auto=format',
        alt: 'Em mệt mỏi',
        tall: true,
        caption: 'Mệt rồi phải không',
      },
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&h=700&fit=crop&auto=format',
        alt: 'Em cần nghỉ ngơi',
        tall: false,
        caption: 'Nghỉ ngơi một chút',
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&h=900&fit=crop&auto=format',
        alt: 'Em phờ phạc',
        tall: true,
        caption: 'Anh ôm em nhé',
      },
      {
        url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&h=700&fit=crop&auto=format',
        alt: 'Em cần anh',
        tall: false,
        caption: 'Có anh ở đây rồi',
      },
    ],
  },
  {
    id: 'happy',
    kicker: 'Khi em vui',
    title: 'Lúc em hạnh phúc',
    description: 'Nụ cười của em là điều anh muốn nhìn thấy mỗi ngày.',
    emoji: '🥰',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&h=900&fit=crop&auto=format',
        alt: 'Em cười tươi',
        tall: true,
        caption: 'Cười lên nào bé',
      },
      {
        url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=700&h=700&fit=crop&auto=format',
        alt: 'Em vui vẻ',
        tall: false,
        caption: 'Hạnh phúc quá đi',
      },
      {
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&h=900&fit=crop&auto=format',
        alt: 'Em rạng rỡ',
        tall: true,
        caption: 'Rạng rỡ như nắng',
      },
      {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=700&fit=crop&auto=format',
        alt: 'Em yêu đời',
        tall: false,
        caption: 'Yêu đời quá đi thôi',
      },
    ],
  },
]

const sectionVisible = ref<Record<string, boolean>>({})
const sectionRoots = ref<Record<string, HTMLElement | null>>({})
const observers: IntersectionObserver[] = []

function setSectionRef(id: string, el: any) {
  sectionRoots.value[id] = el as HTMLElement | null
}

onMounted(() => {
  sections.forEach((section) => {
    const el = sectionRoots.value[section.id]
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionVisible.value[section.id] = true
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    observers.push(obs)
  })
})

onBeforeUnmount(() => {
  observers.forEach((o) => o.disconnect())
})
</script>

<template>
  <main class="photos-page">
    <span class="floating-heart heart-1">♡</span>
    <span class="floating-heart heart-2">♡</span>
    <span class="floating-heart heart-3">✦</span>
    <span class="floating-heart heart-4">♡</span>
    <span class="floating-heart heart-5">🌸</span>
    <span class="floating-heart heart-6">♥</span>

    <!-- Hero -->
    <section class="photos-hero">
      <RouterLink to="/" class="back-link">
        ← Quay về trang chủ
      </RouterLink>

      <div class="photos-header">
        <p class="script photos-kicker">Dành riêng cho em</p>
        <h1>
          Hình ảnh
          <br />
          của người ấy
        </h1>
        <div class="heading-line"></div>
        <p class="photos-intro">
          Mọi khoảnh khắc của em
          <br />
          anh đều muốn giữ lại. ♥
        </p>
      </div>

      <!-- Mục lục nhanh -->
      <nav class="section-nav">
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          class="nav-chip"
        >
          <span>{{ s.emoji }}</span>
          {{ s.title }}
        </a>
      </nav>
    </section>

    <!-- Các phần ảnh -->
    <section
      v-for="section in sections"
      :key="section.id"
      :id="section.id"
      class="photo-section"
    >
      <div class="section-inner">
        <header class="section-heading">
          <p class="script section-kicker">{{ section.kicker }}</p>
          <h2>
            <span class="section-emoji">{{ section.emoji }}</span>
            {{ section.title }}
          </h2>
          <div class="heading-line"></div>
          <p class="section-desc">{{ section.description }}</p>
        </header>

        <div
          :ref="(el) => setSectionRef(section.id, el)"
          class="photos-grid reveal"
          :class="{ visible: sectionVisible[section.id] }"
        >
          <div
            v-for="(photo, index) in section.photos"
            :key="photo.url + index"
            class="photo-item"
            :class="{ tall: photo.tall }"
            :style="{ '--index': index }"
          >
            <GalleryImage
              :url="photo.url"
              :alt="photo.alt"
              :tall="photo.tall"
              :index="index"
            />
            <div class="photo-caption">
              <span>♡</span>
              {{ photo.caption }}
              <span>♡</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lời nhắn cuối -->
    <section class="photos-message">
      <div class="message-card">
        <div class="message-heart">♥</div>
        <p class="script">Gửi Bé iu của anh</p>
        <h2>Dù em thế nào, anh vẫn yêu</h2>
        <p>
          Giận dữ, nghịch ngợm, mệt mỏi hay vui vẻ…
          <br />
          Anh đều muốn được ở cạnh em.
        </p>
        <div class="signature">— Anh iu của em 💌</div>
      </div>
    </section>

    <footer class="photos-footer">
      <div>Vũ <span>♥</span> Trang</div>
      <p class="script">Mọi phiên bản của em đều đáng yêu</p>
    </footer>
  </main>
</template>

<style scoped>
.photos-page {
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--plum);
  background:
    radial-gradient(circle at 15% 5%, rgba(240, 213, 213, 0.65), transparent 26%),
    radial-gradient(circle at 85% 20%, rgba(196, 152, 74, 0.07), transparent 24%),
    var(--cream);
}

.floating-heart {
  position: fixed;
  pointer-events: none;
  z-index: 5;
  opacity: 0.4;
  animation: floatHeart 9s ease-in-out infinite;
  font-size: 1.35rem;
  color: var(--rose);
}

.heart-1 { top: 10%; left: 6%; }
.heart-2 { top: 25%; right: 8%; animation-delay: 1.4s; font-size: 1.1rem; }
.heart-3 { top: 48%; left: 4%; animation-delay: 2.8s; color: var(--gold); }
.heart-4 { top: 68%; right: 6%; animation-delay: 4.2s; }
.heart-5 { top: 38%; left: 12%; animation-delay: 1.8s; font-size: 1.15rem; }
.heart-6 { top: 82%; left: 48%; animation-delay: 5.5s; }

@keyframes floatHeart {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-16px) rotate(8deg); opacity: 0.65; }
}

/* ===== Hero ===== */
.photos-hero {
  padding: 36px 20px 30px;
  text-align: center;
}

.back-link {
  display: block;
  width: fit-content;
  margin: 0 auto 40px;
  color: var(--muted);
  font-size: 13px;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.back-link:hover {
  color: var(--rose);
  transform: translateX(-4px);
}

.photos-header {
  max-width: 680px;
  margin: 0 auto 36px;
}

.photos-kicker {
  margin: 0 0 10px;
  color: var(--rose);
  font-size: 25px;
}

.photos-header h1 {
  margin: 0;
  font-family: var(--display);
  font-size: clamp(2.6rem, 6.5vw, 4.5rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--plum);
}

.heading-line {
  width: 64px;
  height: 1px;
  margin: 22px auto;
  background: linear-gradient(to right, transparent, var(--rose), transparent);
}

.photos-intro {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  font-style: italic;
  line-height: 1.85;
}

/* Mục lục */
.section-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 720px;
  margin: 0 auto;
}

.nav-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(201, 137, 138, 0.35);
  background: rgba(253, 246, 238, 0.85);
  color: var(--plum);
  font-size: 13px;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.nav-chip:hover {
  background: var(--plum);
  color: var(--cream);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(61, 32, 32, 0.15);
}

.nav-chip span {
  font-size: 15px;
}

/* ===== Mỗi phần ===== */
.photo-section {
  padding: 50px 16px 30px;
}

.photo-section:nth-child(even) {
  background: linear-gradient(180deg, transparent, rgba(240, 213, 213, 0.25), transparent);
}

.section-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-heading {
  text-align: center;
  margin-bottom: 36px;
}

.section-kicker {
  margin: 0 0 8px;
  color: var(--rose);
  font-size: 22px;
}

.section-heading h2 {
  margin: 0;
  font-family: var(--display);
  font-size: clamp(1.8rem, 4.5vw, 2.6rem);
  font-weight: 400;
  color: var(--plum);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.section-emoji {
  font-size: 1.15em;
}

.section-desc {
  margin: 14px auto 0;
  max-width: 480px;
  color: var(--muted);
  font-size: 14.5px;
  font-style: italic;
  line-height: 1.7;
}

/* Grid ảnh */
.photos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.85s ease, transform 0.85s ease;
}

.photos-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.photo-item {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: var(--blush);
  box-shadow: 0 4px 16px rgba(61, 32, 32, 0.1);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(61, 32, 32, 0.18);
}

.photo-item.tall {
  grid-row: span 2;
}

.photo-item :deep(.gallery-image) {
  height: 100%;
  min-height: 200px;
  border-radius: 0;
  box-shadow: none;
}

.photo-item.tall :deep(.gallery-image) {
  min-height: 420px;
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 10px;
  background: linear-gradient(to top, rgba(61, 32, 32, 0.7), transparent);
  color: #fff;
  font-family: var(--script);
  font-size: 17px;
  text-align: center;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.photo-item:hover .photo-caption {
  opacity: 1;
  transform: translateY(0);
}

.photo-caption span {
  margin: 0 5px;
  color: var(--blush);
}

/* Message */
.photos-message {
  padding: 40px 20px 80px;
  text-align: center;
}

.message-card {
  max-width: 540px;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 24px;
  background: rgba(253, 246, 238, 0.92);
  border: 1px solid rgba(201, 137, 138, 0.25);
  box-shadow: 0 18px 48px rgba(201, 137, 138, 0.12);
}

.message-heart {
  font-size: 40px;
  color: var(--rose);
  margin-bottom: 10px;
  animation: heartbeat 2s ease-in-out infinite;
}

.message-card .script {
  margin: 0 0 6px;
  color: var(--mauve);
  font-size: 21px;
}

.message-card h2 {
  margin: 0 0 16px;
  font-family: var(--display);
  font-size: clamp(1.5rem, 3.8vw, 2rem);
  font-weight: 400;
  color: var(--plum);
}

.message-card p {
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.8;
  font-style: italic;
}

.signature {
  color: var(--rose);
  font-family: var(--script);
  font-size: 21px;
}

/* Footer */
.photos-footer {
  padding: 32px 20px;
  text-align: center;
  background: var(--plum);
  color: var(--blush);
}

.photos-footer div {
  font-family: var(--display);
  font-size: 1.7rem;
  font-weight: 300;
  margin-bottom: 6px;
}

.photos-footer span {
  color: var(--rose);
}

.photos-footer .script {
  margin: 0;
  color: var(--rose);
  font-size: 17px;
}

/* Responsive */
@media (max-width: 900px) {
  .photos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .photos-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .photo-item.tall :deep(.gallery-image) {
    min-height: 300px;
  }

  .section-nav {
    gap: 8px;
  }

  .nav-chip {
    padding: 7px 12px;
    font-size: 12px;
  }

  .message-card {
    padding: 30px 20px;
  }

  .photos-hero {
    padding-top: 24px;
  }
}
</style>
