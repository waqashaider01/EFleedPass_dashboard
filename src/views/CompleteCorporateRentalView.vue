

<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <seciton class="dashboard__body">
        <!-- dashboard filter -->
        <div class="container">
            <div class="dashboard__filter">
                <h4>Complete Corporate Rental</h4>
                <div class="dashboard__filter-right">
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="assets/img/icons/carbon_view.png" alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- corporate__widgets -->
            <div class="corporate__widgets">
                <!-- corporate from title -->
                <div class="corporate__from__title">
                    <h4>Complete Corporate Customer Rental</h4>
                </div>
                <!-- corporate from -->
                <div class="corporate_from">
                    <div class="corporate_single_info">
                        <label for="Rental">Rental Agreement No: *</label>
                        <input type="text" class="form-control" id="Rental" placeholder="LDV-RA" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="RSelect">RSelect Available Customer: *</label>
                        <input type="text" class="form-control" id="RSelect" placeholder="MFA FINANCIAL HOLDINGS PTY LTD" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="SelectAvailableVehicle">Select Available Vehicle: *</label>
                        <select class="form-select" id="SelectAvailableVehicle">
                            <option selected>DXA52Z</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="corporate_single_info">
                        <label for="startdatetime">Start Date Time: *</label>
                        <input type="text" class="form-control" id="startdatetime" placeholder="26/06/2021 13:00" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Due Date Time: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="26/12/2021 23:00" />
                    </div>
                </div>
                <div class="corporate_btns compleate_rental_from">
                    <div class="form-check check__box">
                        <input class="form-check-input" type="checkbox" value="submit" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                        </label>
                    </div>
                    <div class="btns_group">
                        <button type="submit" class="btns">
                            <img src="assets/img/icons/arrow-reset.png" alt="arrow-reset" />
                            Reset
                        </button>
                        <button type="submit" class="btns confirm">
                            <img src="assets/img/icons/circle-check.png" alt="circle-checkt" />
                            Confirm Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </seciton>
</template>
<script>
// import VehicleCard from '../components/VehicleCard.vue'
export default {
    name: 'CompleteCoeporateRentalView',
    // components: {
    //     VehicleCard, // Register the component here
    // },
}
</script>
