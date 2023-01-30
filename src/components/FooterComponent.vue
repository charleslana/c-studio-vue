<template>
  <MDBFooter
    bg="transparent"
    :text="['center', 'white']"
    class="pt-5 pb-3 mt-auto"
  >
    <MDBContainer>
      <div class="row align-items-center">
        <div class="col-md-6 text-center">
          <span class="text-white span"
            >Charles Studio © {{ year }}. Todos os direitos reservados.
            Desenvolvido no Brasil.</span
          >
        </div>
        <div class="col-md-6">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                href="#"
                target="_blank"
                class="nav-link px-2 text-white nav-link-footer"
                >Política de privacidade</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                target="_blank"
                class="nav-link px-2 text-white nav-link-footer"
                >Termos de serviço</a
              >
            </li>
          </ul>
        </div>
      </div>
    </MDBContainer>
  </MDBFooter>
</template>

<script setup lang="ts">
import { MDBFooter, MDBContainer } from 'mdb-vue-ui-kit';
</script>

<script lang="ts">
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.nav-link-footer:hover {
  color: var(--orange) !important;
  text-decoration: underline;
}
</style>
