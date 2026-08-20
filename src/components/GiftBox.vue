<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const opening = ref(false)

function openGift() {
  if (opening.value) return

  opening.value = true

  setTimeout(() => {
    router.push('/gift/1')
  }, 900)
}
</script>

<template>
  <section class="gift-section">
    <div class="gift-container">

      <p class="script gift-kicker">
        Một điều bất ngờ dành cho em
      </p>

      <h2>
        Có một món quà nhỏ
        <br />
        đang chờ em...
      </h2>

      <div
          class="gift-wrapper"
          :class="{ opening }"
          @click="openGift"
          role="button"
          tabindex="0"
          @keydown.enter="openGift"
          @keydown.space.prevent="openGift"
      >
        <div class="sparkle sparkle-1">✦</div>
        <div class="sparkle sparkle-2">✧</div>
        <div class="sparkle sparkle-3">♡</div>

        <div class="gift-box">

          <div class="gift-lid">
            <div class="gift-ribbon-horizontal"></div>
            <div class="gift-bow">
              <span class="bow-left"></span>
              <span class="bow-right"></span>
              <span class="bow-center"></span>
            </div>
          </div>

          <div class="gift-body">
            <div class="gift-ribbon-vertical"></div>
            <div class="gift-paper">
              <span>♥</span>
            </div>
          </div>

        </div>

        <div class="gift-shadow"></div>
      </div>

      <p class="gift-hint">
        Chạm vào hộp quà để mở
      </p>

      <button
          class="gift-button"
          type="button"
          :disabled="opening"
          @click="openGift"
      >
        <span v-if="!opening">Mở quà ♥</span>
        <span v-else>Đang mở... ✨</span>
      </button>

    </div>
  </section>
</template>

<style scoped>
.gift-section {
  position: relative;
  padding: 110px 24px 120px;
  overflow: hidden;
  text-align: center;
  background:
      radial-gradient(circle at 50% 30%, rgba(240, 213, 213, .55), transparent 45%),
      linear-gradient(180deg, var(--cream), #F8ECE2 55%, var(--blush));
}

.gift-container {
  max-width: 720px;
  margin: 0 auto;
}

.gift-kicker {
  margin: 0 0 10px;
  color: var(--rose);
  font-size: 25px;
}

.gift-section h2 {
  margin: 0;
  color: var(--plum);
  font-family: var(--display);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 400;
  line-height: 1.2;
}

.gift-wrapper {
  position: relative;
  width: 280px;
  height: 300px;
  margin: 55px auto 20px;
  cursor: pointer;
  outline: none;
}

.gift-box {
  position: absolute;
  left: 50%;
  bottom: 48px;
  width: 190px;
  height: 160px;
  transform: translateX(-50%);
  transition: transform .7s cubic-bezier(.2,.8,.2,1);
}

.gift-wrapper:hover .gift-box {
  transform: translateX(-50%) translateY(-10px);
}

.gift-wrapper.opening .gift-box {
  animation: gift-open .9s ease forwards;
}

.gift-body {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 190px;
  height: 125px;
  overflow: hidden;
  border: 2px solid rgba(61, 32, 32, .08);
  border-radius: 8px 8px 14px 14px;
  background: linear-gradient(135deg, #e7b7b8, #c9898a);
  box-shadow: 0 15px 35px rgba(61, 32, 32, .16);
}

.gift-paper {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: rgba(253, 246, 238, .85);
  font-size: 35px;
}

.gift-ribbon-vertical {
  position: absolute;
  left: 50%;
  top: 0;
  width: 34px;
  height: 100%;
  transform: translateX(-50%);
  background: rgba(196, 152, 74, .85);
  box-shadow:
      inset 3px 0 rgba(255,255,255,.18),
      inset -3px 0 rgba(61,32,32,.08);
}

.gift-lid {
  position: absolute;
  left: -9px;
  top: -10px;
  z-index: 3;
  width: 208px;
  height: 42px;
  border-radius: 8px;
  background: linear-gradient(135deg, #efc9c9, #c9898a);
  border: 2px solid rgba(61, 32, 32, .08);
  box-shadow: 0 8px 18px rgba(61, 32, 32, .14);
  transform-origin: 12% 100%;
  transition: transform .7s cubic-bezier(.2,.8,.2,1);
}

.gift-wrapper.opening .gift-lid {
  transform: rotate(-18deg) translate(-15px, -30px);
}

.gift-ribbon-horizontal {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 15px;
  transform: translateY(-50%);
  background: rgba(196, 152, 74, .85);
}

.gift-bow {
  position: absolute;
  left: 50%;
  top: -26px;
  width: 65px;
  height: 45px;
  transform: translateX(-50%);
}

.bow-left,
.bow-right {
  position: absolute;
  top: 5px;
  width: 34px;
  height: 28px;
  border: 5px solid var(--gold);
  background: rgba(196, 152, 74, .25);
}

.bow-left {
  left: 0;
  border-radius: 70% 30% 60% 40%;
  transform: rotate(-18deg);
}

.bow-right {
  right: 0;
  border-radius: 30% 70% 40% 60%;
  transform: rotate(18deg);
}

.bow-center {
  position: absolute;
  left: 50%;
  top: 12px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: translateX(-50%);
  background: var(--gold);
}

.gift-shadow {
  position: absolute;
  left: 50%;
  bottom: 28px;
  width: 210px;
  height: 25px;
  border-radius: 50%;
  transform: translateX(-50%);
  background: rgba(61, 32, 32, .12);
  filter: blur(8px);
  transition: transform .7s ease, opacity .7s ease;
}

.gift-wrapper:hover .gift-shadow {
  transform: translateX(-50%) scale(.9);
}

.gift-wrapper.opening .gift-shadow {
  opacity: 0;
}

.sparkle {
  position: absolute;
  color: var(--gold);
  font-size: 28px;
  animation: sparkle 2.2s ease-in-out infinite;
}

.sparkle-1 {
  top: 45px;
  left: 30px;
}

.sparkle-2 {
  top: 80px;
  right: 25px;
  animation-delay: .5s;
}

.sparkle-3 {
  top: 150px;
  left: 15px;
  color: var(--rose);
  animation-delay: 1s;
}

.gift-hint {
  margin: 0 0 24px;
  color: var(--muted);
  font-size: 14px;
  font-style: italic;
}

.gift-button {
  border: 1px solid rgba(201, 137, 138, .45);
  border-radius: 999px;
  padding: 13px 30px;
  color: var(--cream);
  background: var(--plum);
  font-family: var(--body);
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(61, 32, 32, .16);
  transition:
      transform .3s ease,
      box-shadow .3s ease,
      background .3s ease;
}

.gift-button:hover:not(:disabled) {
  transform: translateY(-3px);
  background: var(--rose);
  box-shadow: 0 12px 30px rgba(201, 137, 138, .3);
}

.gift-button:disabled {
  cursor: wait;
  opacity: .75;
}

@keyframes gift-open {
  0% {
    transform: translateX(-50%) scale(1);
  }

  45% {
    transform: translateX(-50%) scale(1.08);
  }

  100% {
    transform: translateX(-50%) scale(.8);
    opacity: 0;
  }
}

@keyframes sparkle {
  0%, 100% {
    transform: scale(.8) rotate(0deg);
    opacity: .35;
  }

  50% {
    transform: scale(1.2) rotate(15deg);
    opacity: 1;
  }
}

@media (max-width: 480px) {
  .gift-section {
    padding: 80px 18px 100px;
  }

  .gift-wrapper {
    transform: scale(.9);
    margin-top: 40px;
    margin-bottom: 10px;
  }

  .gift-wrapper:hover .gift-box {
    transform: translateX(-50%) translateY(-6px);
  }
}
</style>