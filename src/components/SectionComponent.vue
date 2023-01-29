<template>
  <MDBContainer class="mt-5 pt-5" :id="id">
    <div class="row">
      <div class="col-md-auto">
        <h2 class="text-uppercase" :data-text="lastWorld">{{ firstWorld }}</h2>
      </div>
      <div class="col-md">
        <hr class="animate__animated animate__fadeInLeft" />
      </div>
      <div class="col-12 mt-3">
        <p>{{ description }}</p>
      </div>
    </div>
  </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';

export default defineComponent({
  name: 'SectionComponent',
  components: {
    MDBContainer,
  },
  props: {
    title: String,
    description: String,
    id: String,
  },
  data() {
    return {
      lastWorld: this.title?.split(' ').pop(),
      firstWorld: '',
    };
  },
  mounted() {
    this.renderTitle();
  },
  methods: {
    renderTitle() {
      const lastIndexOfSpace = this.title?.lastIndexOf(' ');
      this.firstWorld = this.title?.slice(0, lastIndexOfSpace) ?? '';
    },
  },
});
</script>

<style scoped>
h2 {
  font-family: 'Bungee', sans-serif;
  letter-spacing: 0.313rem;
}

h2:before {
  color: transparent;
}

h2:after {
  content: attr(data-text);
  color: var(--orange);
  margin-left: 0.8rem;
}

hr {
  border-top: 0.125rem solid;
  color: var(--orange);
}

*[id]:before {
  display: block;
  content: '';
  margin-top: -2rem;
  height: 100px;
  visibility: hidden;
}
</style>
