<template>
  <NavbarComponent />
  <div class="bg-image">
    <img
      src="./assets/images/bg.jpg"
      class="w-100 vh-100 object-cover"
      alt="Background image"
    />
    <div class="mask bg">
      <div class="d-flex justify-content-center align-items-center h-100">
        <p class="text-white mb-0 display-1 fw-500 text-center text-capitalize">
          Nós criamos <span class="span-custom">incríveis</span> jogos de
          Navegador
        </p>
      </div>
    </div>
  </div>
  <SectionComponent
    id="about"
    title="Sobre nós"
    description="Criamos jogos de navegador simples e divertidos com interface gráfica
          intuitiva e jogabilidade fácil que podem ser jogados em qualquer
          dispositivo."
  >
  </SectionComponent>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p class="m-0">
          Nós nos esforçamos muito para garantir uma excelente experiência do
          usuário.
        </p>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <img src="./assets/images/about.png" alt="About image" height="112" />
      </div>
    </div>
  </div>
  <SectionComponent
    id="games"
    title="Nossos jogos"
    description="Temos orgulho de oferecer experiências ricas e refinadas nas quais nossa base de fãs pode desfrutar e mergulhar."
  />
  <FooterComponent />
  <LoadingComponent />
</template>

<script lang="ts">
import NavbarComponent from './components/NavbarComponent.vue';
import LoadingComponent from './components/LoadingComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SectionComponent from './components/SectionComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    LoadingComponent,
    FooterComponent,
    SectionComponent,
  },
};
</script>

<style>
.bg {
  background-color: rgba(0, 0, 0, 0.4);
}

.span-custom {
  color: var(--orange);
}
</style>
