

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
                            <img src="assets/img/icons/Search.svg" alt="icon" />
                        </button>
                    </div>
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-custom-class="custom-tooltip" data-bs-title="View Corporate Lists">
                                    <img src="assets/img/icons/carbon_view.png" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/img/icons/plus.svg" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/img/icons/document.svg" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/img/icons/clipboard.svg" alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
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

export default {
    name: 'IndxView',
    components: {
        CorporateCard // Register the component here
    },
    // Your component code here
}
</script>
