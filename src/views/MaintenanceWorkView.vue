

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
                <h4>Add Maintenance Work</h4>
                <div class="dashboard__filter-right">
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icons/carbon_view.png" alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- corporate__widgets -->
            <div class="corporate__widgets">
            <!-- corporate from title -->
            <!-- <div class="corporate__from__title">
                                                                                                                                                                                                <h4>Complete Corporate Customer Rental</h4>
                                                                                                                                                                                            </div> -->
                <!-- corporate from -->
                <div class="corporate_from d-sm-block d-md-grid">
                    <div class="corporate_single_info">
                        <label for="Rental">Select Car: *</label>
                        <input type="text" class="form-control" id="Rental" placeholder="Search Card" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="RSelect">Service Date: *</label>
                        <input type="text" class="form-control" id="RSelect" placeholder="11-10-2023" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="name">Name: *</label>
                        <input type="text" class="form-control" id="name" placeholder="Name" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="startdatetime">Remind Before: *</label>
                        <input type="text" class="form-control" id="startdatetime" placeholder="eg.2" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Cost: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="cost" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Service Type: </label>
                        <div class="d-flex">
                            <label class="form-check-label" for="mySwitch"> <small>Planned Service</small></label>
                            <div class="form-check form-switch mx-2">
                                <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes"
                                    checked>
                                <label class="form-check-label text-danger" for="mySwitch">Unplanned Service</label>

                            </div>
                        </div>

                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Notification Type: </label>
                        <div class="d-flex">
                            <label class="form-check-label" for="mySwitch"> <small class="text-success">SMS</small></label>
                            <div class="form-check form-switch mx-2">
                                <input class="form-check-input f2" type="checkbox" id="mySwitch2" name="darkmode"
                                    value="yes" checked>
                                <label class="form-check-label " for="mySwitch">E-mail</label>

                            </div>
                        </div>

                    </div>

                    <div></div>
                    <div></div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Description: </label>
                        <div class="form-group">


                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                columns="100"></textarea>

                        </div>

                    </div>
                </div>
                <div class="corporate_btns compleate_rental_from d-flec justify-content-end">

                    <div class="btns_group">
                        <button type="submit" class="btns mx-2">
                            <img src="../assets/img/icons/arrow-reset.png" alt="arrow-reset" />
                            Reset
                        </button>
                        <button type="submit" class="btns confirm mx-2">
                            <img src="../assets/img/icons/circle-check.png" alt="circle-checkt" />
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
    name: 'MaintenanceWork',
    // components: {
    //     VehicleCard, // Register the component here
    // },
}
</script>
<style scoped>
.form-check-input:checked {
    background-color: #FF2D46 !important;
    z-index: -11;
}

.f2:checked {
    background-color: green !important;
    ;
}
</style>