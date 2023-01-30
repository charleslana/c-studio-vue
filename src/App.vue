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
  />
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
  <div class="container">
    <div class="row">
      <div class="col-md-6 mb-3">
        <img
          src="./assets/images/games.jpg"
          alt="Games image"
          class="img-fluid h-100 object-cover"
        />
      </div>
      <div class="col-md-6">
        <h4 class="text-uppercase">Super Island</h4>
        <p class="fs-6 text-white-50">Navegador MMORPG | PC | Móvel</p>
        <p>
          Embarque em uma jornada para explorar ilhas desconhecidas. Batalhe com
          adversário dignos, Recrute novos personagens, encontre itens especiais
          para forjar novos equipamentos e junte-se a outros jogadores em
          batalhas épicas em tempo real! Desafie Chefes e avance pelos andares
          da Torre para encontrar tesouros preciosos! Enfrente desafios e
          torne-se o melhor de todos!
        </p>
        <div class="row">
          <div class="col-md-6 mb-3">
            <a
              href="https://super-island.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="custom-games d-flex align-items-center justify-content-center text-center bg-light text-dark rounded p-1"
              >
                <i class="fab fa-chrome fs-2"></i>
                <p class="m-0 ms-2">Jogue pelo <strong>navegador</strong></p>
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <a
              href="https://super-island.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="custom-games d-flex align-items-center justify-content-center text-center bg-light text-dark rounded p-1"
              >
                <i class="fa-solid fa-mobile fs-2"></i>
                <p class="m-0 ms-2">Jogue pelo <strong>celular</strong></p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SectionComponent
    id="team"
    title="A equipe"
    description="Nossa paixão por jogos de navegador nos une."
  />
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="card bg-transparent">
          <img
            src="./assets/images/team.png"
            alt="Team image"
            class="img-fluid"
          />
          <div class="card-body">
            <h5 class="card-title fs-3">Charles</h5>
            <p class="card-text text-muted">Fundador/Desenvolvedor/QA</p>
            <div class="row">
              <div class="col-auto">
                <a
                  href="https://www.linkedin.com/in/charleslana"
                  target="_blank"
                  ><i class="fa-brands fa-linkedin fs-2 text-primary"></i
                ></a>
              </div>
              <div class="col-auto">
                <a href="https://github.com/charleslana" target="_blank"
                  ><i class="fa-brands fa-github fs-2 text-white"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SectionComponent
    id="contact"
    title="Entre em contato"
    description="Nós adoraríamos ouvir de você ;)"
  />
  <div class="container mt-5">
    <h4 class="text-uppercase mb-5">Deixe-nos uma mensagem</h4>
    <form action="https://mailthis.to/suporteopgame@gmail.com" method="POST">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control form-control-custom"
          id="floatingInputName"
          name="name"
          placeholder="Nome"
          required
        />
        <label for="floatingInputName">Nome</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control form-control-custom"
          id="floatingInput"
          name="_replyto"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">E-mail</label>
      </div>
      <div class="form-floating mb-3">
        <textarea
          class="form-control form-control-custom textarea-custom"
          placeholder="Digite a mensagem"
          id="floatingTextarea2"
          name="message"
          required
        ></textarea>
        <label for="floatingTextarea2">Mensagem</label>
      </div>
      <div class="d-grid gap-2 d-md-block">
        <button
          type="submit"
          class="btn btn-warning btn-warning-custom btn-lg text-uppercase shadow-none mt-3"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  </div>
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

h4::after {
  border-top: 0.125rem solid;
  border-color: #e48632;
  content: '';
  display: block;
  height: 1px;
  width: 60px;
  margin: 13px 0 0 0;
}

.custom-games:hover {
  background-color: transparent !important;
  color: white !important;
}

.form-control-custom {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #e48632 !important;
  border-radius: 0;
  color: white;
}

.form-control-custom:focus {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  color: white;
}

.textarea-custom {
  height: 100px !important;
}

.btn-warning-custom {
  background-color: #e48632;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
}

.btn-warning-custom:hover,
.btn-warning-custom:focus,
.btn-warning-custom:active {
  background-color: white !important;
  color: black !important;
}
</style>
