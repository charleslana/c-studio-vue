<template>
  <MDBNavbar
    expand="md"
    dark
    class="navbar-dark-custom"
    container="md"
    position="top"
  >
    <MDBNavbarBrand href="/">
      <img
        src="../assets/images/logo.png"
        height="60"
        alt="Logo image"
        loading="lazy"
      />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
      :toggler-icon="collapse1 ? 'x' : 'bars'"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav right>
        <MDBNavbarItem href="#about" class="nav-link-custom fw-500"
          >Sobre</MDBNavbarItem
        >
        <MDBNavbarItem href="#games" class="nav-link-custom fw-500"
          >Jogos</MDBNavbarItem
        >
        <MDBNavbarItem href="#team" class="nav-link-custom fw-500"
          >Equipe</MDBNavbarItem
        >
        <MDBNavbarItem href="#about" class="nav-link-custom fw-500"
          >Contato</MDBNavbarItem
        >
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script setup lang="ts">
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

const collapse1 = ref(false);

const originalWarn = window.console.warn;
window.console.warn = e => {
  return e.includes('If this is a native custom element')
    ? ''
    : originalWarn(e);
};
</script>

<style>
@import url('../assets/fonts/fontawesome/css/all.min.css');

.navbar-dark-custom {
  background-color: rgba(0, 0, 0, 0.8);
}

.nav-link-custom {
  font-size: 1.125rem;
}

.nav-link-custom a {
  color: white;
}

.nav-link-custom a:hover {
  color: #e48632;
}

.nav-link-custom a:focus {
  color: white;
}
</style>
