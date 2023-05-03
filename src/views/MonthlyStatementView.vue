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
                <h4>Monthly Statements</h4>
                <div class="dashboard__filter-right ms-4 ps-5">
                    <!-- search bar -->
                    <p class="para3">Filter by Month & Year</p>
                    <div class="d-flex ">
                        <select class="form-select stSelect mx-2" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select stSelect mx-2" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <button class="btn mx-2" type="submit">
                            <img src="../img/icons/Search.png" alt="icon" />
                        </button>
                        <!-- -->
                    </div>

                </div>
            </div>
            <!-- PPSR Search Item -->
            <div class="">
                <!-- single item -->

                <!-- single item -->
                <div class="row">
                    <div class="col-sm-12 col-md-6 my-2">
                        <MoStateMentCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <MoStateMentCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <MoStateMentCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <MoStateMentCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <MoStateMentCard />
                    </div>
                    <div class="col-sm-12 col-md-6 my-2">
                        <MoStateMentCard />
                    </div>
                </div>


            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
</template>
  
<style>
.para3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Black 80% */

    color: #2E2E2E;
}
</style>
  
<script>
import MoStateMentCard from '../components/MoStatementCard.vue';

export default {
    name: 'MonthlyStatementView',
    components: {
        MoStateMentCard, // Register the component here
    },
}

</script>
  