<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <!--container start-->
    <!-- Dashboard Content -->
    <seciton class="dashboard__body">
        <!-- dashboard filter -->
        <div class="container">
            <div class="dashboard__filter">
                <h4>Cars List</h4>
                <div class="dashboard__filter-right">
                    <!-- dashboard select -->
                    <select class="form-select" aria-label="Default select example">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <!-- search bar -->
                    <div class="dashboard__filter-search">
                        <input type="search" placeholder="Search..." />
                        <button type="submit">
                            <img src="../assets/img/icons/Search.png" alt="icon" />
                        </button>
                    </div>
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icons/plus.svg" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icons/tag.svg" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <router-link to="/vehicleqr"><img src="../assets/img/icons/qr-code-line.svg" alt="icon" /></router-link>  
                              
                            </li>
                            <li>
                               <router-link to="/">
                                    <img src="../assets/img/icons/plus.svg" alt="icon" />
                              </router-link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Dashboard content -->
            <div class="dashboard__vechicles">
                <!-- single Vechicles -->
                <VehicleSecCard />
                <!-- single Vechicles -->
                <VehicleSecCard />
            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
    <!-- modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Modal title
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
</template>
  
<style>
.tabcontent {
    display: none;
}

.tabcontent .active {
    display: block !important;
}
</style>
  
<script>
import VehicleSecCard from '../components/VehicleSecCard.vue';

export default {
    name: 'VehiclesView',
    components: {
        VehicleSecCard, // Register the component here
    },
}

</script>
  