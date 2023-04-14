

<template>
  <header class="main-header py-3">

    <nav class="navbar navbar-expand-lg navbar-light">

      <div class="container-fluid justify-content-around">

        <div class="col-lg-3 col-sm-12 mb-lg-0 mb-2">

          <a class="navbar-brand " href="#"><img src="img/efl-logo.png" alt="logo"></a>

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

          <a href="#"><img class="me-2" src="img/Dashboard.png" alt="">Dashboard </a>

        </div>

        <div class="me-3">

          <a href="#"><img class="me-2" src="img/fluent_building.png" alt="">Corporate Rentals </a>

        </div>

        <div class="me-3">

          <a href="drivers.html"><img class="me-2" src="img/ri_steering-fill.png" alt="">Drivers </a>

        </div>

        <div class="me-3">

          <a href="#"><img class="me-2" src="img/fluent_vehicle-bus.png" alt="">Vehicles </a>

        </div>

        <div class="me-4">

          <a href="#"><img class="me-2" src="img/ant-design.png" alt="">Transactions </a>

        </div>

        <div class="me-4">

          <a href="#"><img class="me-2" src="img/ri_reserved.png" alt="">Reservations </a>

        </div>

        <div class="me-4">

          <a href="#"><img class="me-2" src="img/List.png" alt="">Statements </a>

        </div>

        <div class="me-4">

          <a href="#"><img class="me-2" src="img/codicon_graph.png" alt="">Reports </a>

        </div>

        <div class="me-4">

          <a href="#"><img class="me-2" src="img/fluent_web-asset.png" alt="">Assets </a>

        </div>

        <div class="me-4 d-none">
          <a href="#">
            <i class="fa-solid fa-ellipsis blu me-2" @click="toggleMenu" id="assets-btn"></i>
          </a>
          <div id="assets-menu" class="dropdown-menu1 main-card">
            <!-- menu items go here -->
            <p><a href="#"><img src="img/invoice.png"> Asset Invoices</a></p>
            <p><a href="#"><img src="img/dollar.png"> Infringements</a></p>
            <p><a href="#"><img src="img/person.png"> Maintenance</a></p>
            <p><a href="#"><img src="img/tools.png"> Support</a></p>
            <p><a href="#"><img src="img/logout.png"> Logout</a></p>
          </div>
        </div>

      </div>

    </div>
    <router-view />

  </div>
</template>
<style></style>
<script >
// import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    hideMenu(event) {
      if (!this.$el.contains(event.target)) {
        this.showMenu = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.hideMenu);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideMenu);
  },
};


</script>