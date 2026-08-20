<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const showHint = ref(false)
</script>

<template>
  <main class="gift-page">

    <!-- Hoa rơi -->
    <span class="floating-heart heart-1">♡</span>
    <span class="floating-heart heart-2">♡</span>
    <span class="floating-heart heart-3">✦</span>
    <span class="floating-heart heart-4">♡</span>

    <section class="gift-hero">

      <RouterLink to="/" class="back-link">
        ← Em có thích món quà đó không
      </RouterLink>

      <div class="gift-content">

        <p class="script gift-kicker">
          Món quà đầu tiên
        </p>

        <h1>
          Một món quà
          <br />
          dành riêng cho em
        </h1>

        <div class="heading-line"></div>

        <p class="gift-intro">
          Anh đã chuẩn bị một điều nho nhỏ cho em.
          <br />
          Nhưng trước khi nhận được nó...
          <br />
          em phải tìm ra nó trước nhé. ♥
        </p>

        <!-- ẢNH MÓN QUÀ -->
        <div class="gift-photo">
          <div class="photo-frame">
            <img
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=900&h=700&fit=crop&auto=format"
                alt="Món quà dành cho em"
            />

            <div class="photo-caption">
              <span>♡</span>
              Một chút yêu thương
              <span>♡</span>
            </div>
          </div>
        </div>

        <!-- LỜI NHẮN -->
        <article class="message-card">

          <div class="message-heart">
            ♥
          </div>

          <p class="script">
            Gửi Bé iu hay dỗi của anh
          </p>

          <h2>
            Em biết không...
          </h2>

          <div class="message-copy">
            <p>
              Món quà này không phải thứ đắt tiền nhất,
              cũng không phải thứ lớn lao nhất.
            </p>

            <p>
              Nhưng anh muốn em tìm thấy nó,
              bởi vì anh muốn biến một món quà bình thường
              thành một kỷ niệm mà chúng mình sẽ nhớ mãi.
            </p>

            <p>
              Vì vậy, hãy tìm và gửi anh hình ảnh món quà mà em tìm được nhé. ♥
            </p>
          </div>

          <div class="signature">
            — Anh iu của em
          </div>

        </article>

        <!-- MANH MỐI -->
        <section class="clue-section">

          <p class="script clue-kicker">
            Một chút gợi ý
          </p>

          <h2>
            Em hãy tìm anh ở nơi...
          </h2>

          <div class="clue-card">

            <div class="clue-icon">
              📍
            </div>

            <p>
              Nơi mà chúng mình thường ngồi cạnh nhau,
              nơi có những câu chuyện chẳng bao giờ kể hết,
              và cũng là nơi em thường nhìn thấy đầu tiên
              mỗi khi bước vào.
            </p>

            <div class="clue-divider"></div>

            <span class="clue-small">
              Gợi ý #01
            </span>

          </div>

        </section>

        <div class="found-section">

          <button
              v-if="!showHint"
              class="found-button"
              type="button"
              @click="showHint = true"
          >
            ♥ Em đã tìm thấy quà rồi ạ
          </button>

          <div v-else class="found-message">

            <div class="success-heart">
              ♥
            </div>

            <p class="script">
              Giỏi lắm!
            </p>

            <h2>
              Vậy là em đã tìm thấy rồi.
            </h2>

            <p>
              Nhưng câu chuyện chưa kết thúc đâu...
              <br />
              Nhớ chuẩn bị 1 nồi lẩu để chiêu đãi anh sau khi anh đi làm về mệt nhoaaaa.
            </p>

            <RouterLink
                to="/"
                class="home-button"
            >
              Cảm ơn em iu của anh ♥
            </RouterLink>

          </div>

        </div>

      </div>

    </section>

    <footer class="gift-footer">
      <div>
        Vũ <span>♥</span> Trang
      </div>

      <p class="script">
        Một món quà nhỏ, một kỷ niệm thật lớn.
      </p>
    </footer>

  </main>
</template>
<style scoped src="../assets/styles/gift1.css"></style>