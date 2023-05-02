

<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <!-- Dashboard Content -->
    <seciton class="dashboard__body">
        <!-- dashboard filter -->
        <div class="container">
            <div class="dashboard__filter">
                <h4>Live Corporate Rentals</h4>
                <div class="dashboard__filter-right">
                    <!-- search bar -->
                    <div class="dashboard__filter-search">
                        <input type="search" placeholder="Search..." />
                        <button type="submit">
                            <img src="../assets/img/icons/Search.svg" alt="icon" />
                        </button>
                    </div>
                    <!-- filter icons -->
                  <CorFliter/>
                </div>
            </div>
            <div class="dashboard__content">
                <!-- single rentals -->
                <CorporateCard />
                <CorporateCard />
                <CorporateCard />
                <CorporateCard />
                <CorporateCard />
                <CorporateCard />
            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
</template>
<script>

import CorporateCard from '../components/CororateCard.vue'
import CorFliter from '../components/CorFliter.vue'

export default {
    name: 'IndxView',
    components: {
        CorporateCard,
        CorFliter // Register the component here
    },
    // Your component code here
}
</script>
