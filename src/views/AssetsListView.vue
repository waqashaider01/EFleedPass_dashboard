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
                <h4>Assets List</h4>
                <div class="dashboard__filter-right">
                    <!-- dashboard select -->

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
                                    <img src="../assets/img/icons/qr-code-line.svg" alt="icon" />
                                </a>
                            </li>

                            <li>
                                <router-link to="/addasset">
                                    <img src="../assets/img/icons/plus.svg" alt="icon" /></router-link>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Dashboard content -->
            <div class="row mt-2">
                <div class="col-md-4 my-2">

                    <AsserVC />
                </div>
                <div class="col-md-4 my-2">

                    <AsserVC />
                </div>
                <div class="col-md-4 my-2">

                    <AsserVC />
                </div>
                <div class="col-md-4 my-2">

                    <AsserVC />
                </div>
                <div class="col-md-4 my-2">

                    <AsserVC />
                </div>
                <div class="col-md-4 my-2">

                    <AsserVC />
                </div>
                <div class="col-md-4 my-2">

                    <AsserVC />
                </div>
            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
</template>
  
<style scoped></style>
  
<script>
import AsserVC from '../components/AssetVC.vue';

export default {
    name: 'VehiclesView',
    components: {
        AsserVC, // Register the component here
    },
}

</script>
  