

<template>
  <header class="main-header py-3">

    <nav class="navbar navbar-expand-lg navbar-light">

      <div class="container-fluid justify-content-around">

        <div class="col-lg-3 col-sm-12 mb-lg-0 mb-2">

          <router-link to="/"><img src="img/efl-logo.png" alt="logo"></router-link>

        </div>

        <div class="col-lg-6 col-sm-12">

          <form class="d-flex src-form">

            <input class="form-control me-2 src-input" type="search" placeholder="Search Rentals, Vehicles & Drivers...">

            <button class="src-btn " type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>

          </form>

        </div>

        <div class="col-lg-3 col-sm-12 text-end mt-lg-0 mt-3">

          <div class="fawesome text-white">
            <img src="img/light.png" class="mx-3">
            <img src="img/language-line.png" class="mx-3">
            <img src="img/help.png" class="mx-3">
            <span class="live"><img src="img/pro-img.png"></span>

          </div>

        </div>

      </div>



    </nav>

    <div>

      <div class="text-center mt-2 d-flex justify-content-center flex-wrap">

        <div>

          <img src="img/mfa.png" class="mx-lg-4 mx-2">
          <div class="text-white mx-2 fs-10">MFA</div>

        </div>

        <div>
          <img src="img/check.png" class="mx-lg-4 mx-2">
          <div class="text-white mx-2 fs-10">eFleetTrack</div>

        </div>

        <div>

          <img src="img/toll.png" class="mx-lg-4 mx-2">
          <div class="text-white mx-2 fs-10">eFleetTolling</div>

        </div>

        <div>
          <img src="img/rent.png" class="mx-lg-4 mx-2">
          <div class="text-white mx-2 fs-10">eFleetCheck</div>

        </div>

        <div>

          <img src="img/track.png" class="mx-lg-4 mx-2">
          <div class="text-white mx-2 fs-10">eFleetRent</div>

        </div>

      </div>

    </div>

  </header>


  <div class="container my-3">
    <div class="row menu-row">

      <div class="col-12 d-flex">

        <div class="me-3">

          <router-link to="/home"><img class="me-2" src="img/Dashboard.png" alt="">Dashboard </router-link>

        </div>

        <div class="me-3">

          <router-link to="/indx"> <img class="me-2" src="img/fluent_building.png" alt="">Corporate Rentals</router-link>

        </div>


        <div class="me-3">

          <router-link to="/driver"><img class="me-2" src="img/ri_steering-fill.png" alt="">Drivers </router-link>

        </div>

        <div class="me-3">

          <router-link to="/vehicle"><img class="me-2" src="img/fluent_vehicle-bus.png" alt="">Vehicles </router-link>

        </div>

        <div class="me-4">

          <router-link to="/transaction"><img class="me-2" src="img/ant-design.png" alt="">Transactions </router-link>

        </div>

        <div class="me-4">

          <router-link to="/home"><img class="me-2" src="img/ri_reserved.png" alt="">Reservations </router-link>

        </div>

        <div class="me-4">

          <router-link to="/statement"><img class="me-2" src="img/List.png" alt="">Statements </router-link>

        </div>

        <div class="me-4">

          <router-link to="/home"><img class="me-2" src="img/codicon_graph.png" alt="">Reports </router-link>

        </div>

        <div class="me-4">

          <router-link to="/home"><img class="me-2" src="img/fluent_web-asset.png" alt="">Assets </router-link>

        </div>

        <div class="me-4">
          <i class="fa-solid fa-ellipsis blu me-2" @click="toggleMenu" id="assets-btn"></i>
          <div v-if="isMenuOpen">
            <div id="assets-menu" class="dropdown-menu1 main-card">
              <!-- menu items go here -->
              <p><router-link to="/home"><img src="img/invoice.png"> Asset Invoices</router-link></p>
              <p><router-link to="/home"><img src="img/dollar.png"> Infringements</router-link></p>
              <p><router-link to="/home"><img src="img/person.png"> Maintenance</router-link></p>
              <p><router-link to="/home"><img src="img/tools.png"> Support</router-link></p>
              <p><router-link to="/home"><img src="img/logout.png"> Logout</router-link></p>
            </div>
          </div>
        </div>

      </div>

    </div>
    <router-view />

  </div>
</template>
<style>
.dropdown-menu1 {
  display: block !important;
}
</style>

// import { RouterLink, RouterView } from 'vue-router'
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>







