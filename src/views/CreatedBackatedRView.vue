

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
                <h4>Create Backdated Corporate Rental</h4>
                <div class="dashboard__filter-right">
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                  <router-link to="/indx"><img src="../assets/img/icons/carbon_view.png" alt="icon" /></router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- corporate__widgets -->
            <div class="corporate__widgets">
                <!-- corporate from title -->
                <div class="corporate__from__title">
                    <h4>Add Backdated Corporate Rental</h4>
                </div>
                <!-- corporate from -->
                <div class="corporate_from">
                    <div class="corporate_single_info">
                        <label for="Rental">Rental Agreement No: *</label>
                        <input type="text" class="form-control" id="Rental" placeholder="e.g.12345" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="SelectAvailablecustomer">Select Available Customer: *</label>
                        <select class="form-select" id="SelectAvailablecustomer">
                            <option selected>Select Customer</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="corporate_single_info">
                        <label for="SelectAvailableVehicle">Select Available Vehicle: *</label>
                        <select class="form-select" id="SelectAvailableVehicle">
                            <option selected>Select Vehicle</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="corporate_single_info">
                        <label for="startdatetime">Start Date Time: *</label>
                        <input type="text" class="form-control" id="startdatetime" placeholder="e.g.09,12/2022" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Due Date Time: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="e.g.09,12/2022" />
                    </div>
                </div>
                <div class="corporate_btns">
                    <button type="submit" class="btns">
                        <img src="../assets/img/icons/arrow-reset.png" alt="arrow-reset" />
                        Reset
                    </button>
                    <button type="submit" class="btns confirm">
                        <img src="../assets/img/icons/circle-check.png" alt="circle-checkt" />
                        Confirm Details
                    </button>
                </div>
            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
</template>
<script>
// import VehicleCard from '../components/VehicleCard.vue'
export default {
    name: 'CreatedBackatedRView',
    // components: {
    //     VehicleCard, // Register the component here
    // },
}
</script>
