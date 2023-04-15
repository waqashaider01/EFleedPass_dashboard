
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
            <!-- Tab -->
            <div class="dashboard__tab">
                <h4>Previous Searches</h4>
            </div>
            <!-- PPSR Search Item -->
            <div class="ppsr__searchitem">
                <!-- single item -->
                <PsCard />
                <!-- single item -->
                <PsCard />
                <!-- single item -->
                <PsCard />
                <!-- single item -->
                <PsCard />
                <!-- single item -->
                <PsCard />
                <!-- single item -->
                <PsCard />>
            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
<!-- <vue-circle-progress :percent="50" :options="{
        size: 100,
        thickness: 10,
        emptyFill: '#e6e6e6',
        fill: { gradient: ['#00bcd4', '#009688'] },
                                                                }" /> -->

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
import PsCard from '../components/PsCard.vue';


// import VueCircleProgress from 'vue-circle-progress';

export default {
    name: 'VehiclePpaeView',

    components: {
        PsCard
    },


}

</script>

  