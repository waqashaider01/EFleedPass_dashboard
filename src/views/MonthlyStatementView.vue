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
                <h4>Payment Transaction for last 60 days</h4>
                <div class="dashboard__filter-right">
                    <!-- search bar -->
                    <div class="dashboard__filter-search">
                        <input type="search" placeholder="Search by Driver" />
                        <button type="submit">
                            <img src="assets/img/icons/Search.png" alt="icon" />
                        </button>
                    </div>
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="assets/img/icons/word-list-blue.svg" alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- PPSR Search Item -->
            <div class="">
                <!-- single item -->

                <!-- single item -->
                <div class="row">
                    <div class="col-sm-12 col-md-6 my-2">
                        <TollNCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <TollNCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <TollNCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <TollNCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <TollNCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <TollNCard />
                    </div>
                </div>


            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
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
import TollNCard from '../components/TollNCard.vue';

export default {
    name: 'TollNoticeView',
    components: {
        TollNCard, // Register the component here
    },
}

</script>
  