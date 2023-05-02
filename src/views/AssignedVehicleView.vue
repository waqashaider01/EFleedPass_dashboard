

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
                <h4>Ultimate Luxury Cars Pty Ltd's Vehicles List</h4>
                <div class="dashboard__filter-right">
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icons/document.svg" alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Vehicles Aleart Section -->
            <div class="vehicles__aleart">
                <div class="vehicles__aleart-text">
                    <p>
                        Clients will have the following charges incurred to them if they
                        are not paid on time.
                    </p>
                    <p>After 14days you incur $2.20 Toll Notice Fee</p>
                    <p>After 30 days you incur $25 Admin Fee Per Toll Notice</p>
                    <p>
                        After 60 days the account goes to collections for legal recovery
                        with further legal charges made up to $2,500.00 per client
                        matter tendered to court for
                    </p>
                    <p>claims against the offending client.</p>
                </div>
            </div>
            <!-- End Vehicles Aleart Section -->
            <div class="vehicles_widget">
                <!-- Vehicles Person Info -->
                <div class="vehicles__person-info">
                    <div class="vehicles__person-info-img">
                        <img src="../assets/img/fleet-manager.png" alt="fleet-manager" />
                    </div>
                    <div class="vehicles__person-info-text table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Name:</th>
                                    <td><span>Frank</span> (Fleet Manager)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email:</th>
                                    <td><span>frank@ultimaterentals.com.au</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Mobile:</th>
                                    <td><span>0488111411</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="vehicles__person-info-text">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Name:</th>
                                    <td><span>Ultimate Luxury Cars Pty Ltd</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Address:</th>
                                    <td>
                                        <span>139 Princes Highway, Arncliffe NSW, Australia</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Mobile:</th>
                                    <td><span>40909311443</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="vehicles__person-info-btns">
                        <button class="btns">
                            <img src="../assets/img/icons/carbon_money.png" alt="carbon_money" />
                            Pay Now
                        </button>
                    </div>
                </div>
                <div class="vehicles__person-info-btn d-flex">
                   
                    <router-link to="/assignedvehicle" class="active">Assigned Vehicles</router-link>
                    <router-link to="/rentalnotes">Notes</router-link>
                </div>
            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
    <!-- Vehicles Table -->
    <section class="vehicle__table">
        <div class="container">

            <!-- single car -->
            <div class="row">
                <div class="col-sm-12 my-2 col-md-6 ">
                    <VehicleCard />
                    <!-- single car -->

                </div>
                <div class="col-sm-12 my-2 col-md-6">
                    <VehicleCard />
                    <!-- single car -->

                </div>
                <div class="col-sm-12 my-2 col-md-6">
                    <VehicleCard />
                    <!-- single car -->

                </div>
                <div class="col-sm-12 my-2 col-md-6">
                    <VehicleCard />
                    <!-- single car -->

                </div>
            </div>

        </div>
    </section>
</template>
<script>
import VehicleCard from '../components/VehicleCard.vue'
export default {
    name: 'AssignedVehicleView',
    components: {
        VehicleCard, // Register the component here
    },
}
</script>