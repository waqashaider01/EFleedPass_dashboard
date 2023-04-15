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
            <div class="ppsr__searchitem">
                <!-- single item -->
                <div class="single__ppsr">
                    <div class="ppsr__head">
                        <div class="profile__img">
                            <a href="#">
                                <img src="assets/img/profile-image-2.png" alt="img" />
                            </a>
                            <h3>Driver Demo</h3>
                        </div>
                        <a href="#">
                            <img src="assets/img/icons/carbon_view-success.svg" alt="icon" />
                        </a>
                    </div>
                    <div class="ppsr__body">
                        <p>Search Date.: <small>2022-08-25 08:28:15</small></p>
                        <h3 class="price-pro">$10.76</h3>
                    </div>
                </div>
                <!-- single item -->
                <TransactionCard />
                <!-- single item -->
                <TransactionCard />
                <!-- single item -->
                <TransactionCard />
                <!-- single item -->
                <TransactionCard />
                <!-- single item -->
                <TransactionCard />


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
import TransactionCard from '../components/TransactionCard.vue';

export default {
    name: 'TransactionView',
    components: {
        TransactionCard, // Register the component here
    },
}

</script>
  