<template>
  <div
    v-bind:class="
      isLoading ? 'visible' : 'animate__animated animate__fadeOutUpBig'
    "
    class="mask text-light d-flex justify-content-center flex-column text-center align-items-center loading-bg"
  >
    <img src="../assets/images/logo.png" alt="Logo image" width="200" />
    <MDBProgress class="mt-3 progress-custom">
      <MDBProgressBar :value="0" class="progress-bar-custom" id="progress" />
    </MDBProgress>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap, { Power4 } from 'gsap';
import 'animate.css';
import * as createjs from 'createjs-module';

export default defineComponent({
  name: 'LoadingComponent',
  data() {
    return {
      isLoading: true,
      body: document.body.classList,
    };
  },
  mounted() {
    this.showLoading();
  },
  created() {
    this.loadImages();
  },
  methods: {
    showLoading(): void {
      this.isLoading = true;
      this.body.add('overflow-hidden');
      this.showProgress();
    },
    hideLoading(): void {
      this.isLoading = false;
      this.body.remove('overflow-hidden');
    },
    showProgress() {
      const tweenConfig: gsap.TweenVars = {
        width: '100%',
        duration: 0.5,
        ease: Power4.easeIn,
      };
      gsap.to('#progress', tweenConfig);
    },
    loadImages() {
      window.createjs = createjs;
      const queue = new createjs.LoadQueue(true);
      queue.loadManifest([
        'img/logo.3336880e.png',
        'img/bg.117ff626.jpg',
        'img/about.268b6487.png',
        'img/games.117ff626.jpg',
        'img/team.55b40d4c.png',
      ]);
      queue.addEventListener('complete', this.hideLoading);
    },
  },
});
</script>

<script setup lang="ts">
import { MDBProgress, MDBProgressBar } from 'mdb-vue-ui-kit';
</script>

<style scoped>
.loading-bg {
  background-color: #111;
  z-index: 2000;
}

.progress-custom {
  width: 100%;
  height: 0.2rem;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.progress-bar-custom {
  background-color: var(--orange);
}
</style>
