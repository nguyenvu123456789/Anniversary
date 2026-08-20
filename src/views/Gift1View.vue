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
              Vì vậy, hãy đọc thật kỹ gợi ý bên dưới nhé. ♥
            </p>
          </div>

          <div class="signature">
            — Vũ của em
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

        <!-- NÚT ĐÃ TÌM THẤY -->
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
              Về lại câu chuyện ♥
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

<style scoped>
.gift-page {
  min-height: 100vh;
  overflow: hidden;
  color: var(--plum);
  background:
      radial-gradient(
          circle at 20% 10%,
          rgba(240, 213, 213, .7),
          transparent 30%
      ),
      radial-gradient(
          circle at 80% 40%,
          rgba(196, 152, 74, .08),
          transparent 28%
      ),
      var(--cream);
}

.gift-hero {
  position: relative;
  padding: 35px 24px 110px;
}

.back-link {
  display: block;
  width: fit-content;
  margin: 0 auto 55px;
  color: var(--muted);
  font-size: 13px;
  text-decoration: none;
  transition: color .3s ease, transform .3s ease;
}

.back-link:hover {
  color: var(--rose);
  transform: translateX(-4px);
}

.gift-content {
  width: min(100%, 850px);
  margin: 0 auto;
  text-align: center;
}

.gift-kicker {
  margin: 0 0 10px;
  color: var(--rose);
  font-size: 26px;
}

.gift-content h1 {
  margin: 0;
  color: var(--plum);
  font-family: var(--display);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 300;
  line-height: 1.08;
}

.heading-line {
  width: 70px;
  height: 1px;
  margin: 28px auto;
  background: linear-gradient(
      to right,
      transparent,
      var(--rose),
      transparent
  );
}

.gift-intro {
  margin: 0 auto 55px;
  color: var(--muted);
  font-size: 15px;
  font-style: italic;
  line-height: 1.9;
}

/* IMAGE */

.gift-photo {
  width: min(100%, 680px);
  margin: 0 auto 70px;
}

.photo-frame {
  position: relative;
  padding: 12px;
  border-radius: 24px;
  background: rgba(253, 246, 238, .85);
  border: 1px solid rgba(201, 137, 138, .28);
  box-shadow: 0 25px 70px rgba(61, 32, 32, .13);
}

.photo-frame img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 16px;
}

.photo-caption {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 15px 0 5px;
  color: var(--rose);
  font-family: var(--script);
  font-size: 20px;
}

.photo-caption span {
  color: var(--gold);
}

/* MESSAGE */

.message-card {
  position: relative;
  width: min(100%, 700px);
  margin: 0 auto;
  padding: 55px 55px 45px;
  border-radius: 26px;
  background: rgba(253, 246, 238, .88);
  border: 1px solid rgba(201, 137, 138, .22);
  box-shadow: 0 20px 60px rgba(201, 137, 138, .12);
  text-align: left;
}

.message-heart {
  position: absolute;
  top: -32px;
  left: 50%;
  display: grid;
  width: 64px;
  height: 64px;
  place-items: center;
  border-radius: 50%;
  transform: translateX(-50%);
  color: var(--cream);
  background: var(--rose);
  font-size: 25px;
  box-shadow: 0 10px 30px rgba(201, 137, 138, .28);
  animation: heartbeat 2s ease-in-out infinite;
}

.message-card > .script {
  margin: 0 0 5px;
  color: var(--rose);
  font-size: 24px;
  text-align: center;
}

.message-card h2 {
  margin: 0 0 30px;
  color: var(--plum);
  font-family: var(--display);
  font-size: 34px;
  font-weight: 400;
  text-align: center;
}

.message-copy {
  color: #5A3535;
  font-size: 16px;
  font-style: italic;
  line-height: 1.9;
}

.message-copy p {
  margin: 0 0 18px;
}

.signature {
  margin-top: 30px;
  color: var(--rose);
  font-family: var(--script);
  font-size: 25px;
  text-align: right;
}

/* CLUE */

.clue-section {
  margin-top: 100px;
}

.clue-kicker {
  margin: 0 0 8px;
  color: var(--rose);
  font-size: 24px;
}

.clue-section h2 {
  margin: 0 0 35px;
  color: var(--plum);
  font-family: var(--display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
}

.clue-card {
  width: min(100%, 620px);
  margin: 0 auto;
  padding: 40px;
  border-radius: 24px;
  background:
      linear-gradient(
          145deg,
          rgba(240, 213, 213, .65),
          rgba(253, 246, 238, .9)
      );
  border: 1px solid rgba(201, 137, 138, .25);
  box-shadow: 0 15px 45px rgba(201, 137, 138, .12);
}

.clue-icon {
  margin-bottom: 20px;
  font-size: 42px;
}

.clue-card p {
  margin: 0;
  color: #5A3535;
  font-size: 16px;
  font-style: italic;
  line-height: 1.9;
}

.clue-divider {
  width: 60px;
  height: 1px;
  margin: 25px auto;
  background: var(--rose);
}

.clue-small {
  color: var(--gold);
  font-size: 11px;
  letter-spacing: .18em;
  text-transform: uppercase;
}

/* FOUND */

.found-section {
  margin-top: 65px;
  text-align: center;
}

.found-button,
.home-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  padding: 15px 30px;
  color: var(--cream);
  background: var(--plum);
  font-family: var(--body);
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(61, 32, 32, .16);
  transition:
      transform .3s ease,
      background .3s ease,
      box-shadow .3s ease;
}

.found-button:hover,
.home-button:hover {
  transform: translateY(-3px);
  background: var(--rose);
  box-shadow: 0 15px 35px rgba(201, 137, 138, .25);
}

.found-message {
  animation: fade-up .7s ease both;
}

.success-heart {
  margin-bottom: 15px;
  color: var(--rose);
  font-size: 50px;
  animation: heartbeat 2s ease-in-out infinite;
}

.found-message .script {
  margin: 0 0 8px;
  color: var(--rose);
  font-size: 27px;
}

.found-message h2 {
  margin: 0 0 15px;
  font-family: var(--display);
  font-size: 32px;
  font-weight: 400;
}

.found-message > p {
  margin: 0 0 25px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  font-style: italic;
}

/* FOOTER */

.gift-footer {
  margin-top: 100px;
  padding: 45px 24px;
  text-align: center;
  color: var(--blush);
  background: var(--plum);
}

.gift-footer > div {
  margin-bottom: 10px;
  font-family: var(--display);
  font-size: 34px;
}

.gift-footer span {
  color: var(--rose);
}

.gift-footer .script {
  margin: 0;
  color: var(--rose);
  font-size: 19px;
}

/* FLOATING */

.floating-heart {
  position: fixed;
  z-index: 1;
  color: var(--rose);
  pointer-events: none;
  opacity: .3;
  animation: float-heart 7s ease-in-out infinite;
}

.heart-1 {
  top: 20%;
  left: 8%;
  font-size: 30px;
}

.heart-2 {
  top: 45%;
  right: 8%;
  font-size: 24px;
  animation-delay: 1s;
}

.heart-3 {
  top: 70%;
  left: 12%;
  color: var(--gold);
  font-size: 25px;
  animation-delay: 2s;
}

.heart-4 {
  top: 82%;
  right: 14%;
  font-size: 30px;
  animation-delay: 3s;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.2);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.15);
  }

  70% {
    transform: scale(1);
  }
}

@keyframes float-heart {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(8deg);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .gift-hero {
    padding: 25px 18px 80px;
  }

  .back-link {
    margin-bottom: 40px;
    font-size: 12px;
  }

  .gift-intro {
    font-size: 14px;
  }

  .photo-frame img {
    height: 300px;
  }

  .message-card {
    padding: 50px 24px 35px;
  }

  .message-card h2 {
    font-size: 29px;
  }

  .message-copy {
    font-size: 14px;
  }

  .clue-card {
    padding: 30px 22px;
  }

  .clue-card p {
    font-size: 14px;
  }
}
</style>