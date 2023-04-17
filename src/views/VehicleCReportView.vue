
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
                <h4>Condition Reports for ENX04M</h4>
            </div>
            <!-- Tab -->
            <div class="dashboard__tab ppsr__tab">
                <div class="ppsr__box">
                    <label for="#"> * Please enter the 17 digit VIN number * </label>
                    <div class="ppsr__form">
                        <input type="search" value="MPBUMFF50MX329528" />
                        <button type="submit">
                            <img src="assets/img/icons/search-white.svg" alt="" />
                            Search Now
                        </button>
                    </div>
                </div>
            </div>
            <!-- Tab -->
            <div class="dashboard__tab">
                <h4>Previous Searches</h4>
            </div>
            <!-- PPSR Search Item -->
            <div class="">
                <div class="row">
                    <div class="col-sm-12 col-md-6 my-2">
                        <!-- single item -->
                        <PsCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <!-- single item -->
                        <PsCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <!-- single item -->
                        <PsCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <!-- single item -->
                        <PsCard />
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
import PsCard from '../components/PsCard.vue';


// import VueCircleProgress from 'vue-circle-progress';

export default {
    name: 'VehicleCReportView',

    components: {
        PsCard
    },


}

</script>

  