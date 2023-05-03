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
                <h4>Cars List</h4>
                <div class="dashboard__filter-right">
                    <!-- dashboard select -->
                    <select class="form-select" aria-label="Default select example">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <!-- search bar -->
                    <div class="dashboard__filter-search">
                        <input type="search" placeholder="Search..." />
                        <button type="submit">
                            <img src="../assets/img/icons/Search.png" alt="icon" />
                        </button>
                    </div>
                    <!-- filter icons -->
                    <div class="dashboard__filter-icons">
                        <ul>
                            <li>

                                <img src="../assets/img/icons/plus.svg" alt="icon" />

                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icons/tag.svg" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <router-link to="/vehicleqr"><img src="../assets/img/icons/qr-code-line.svg"
                                        alt="icon" /></router-link>

                            </li>
                            <li>

                                <img src="../assets/img/icons/plus.svg" alt="icon" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" />

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Dashboard content -->
            <div class="dashboard__vechicles">
                <!-- single Vechicles -->
                <VehicleSecCard />
                <!-- single Vechicles -->
                <VehicleSecCard />
            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
    <!-- modal -->
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Send Email</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="select" class=" modalLabel">Statement of</label>
                        <select class="form-select stSelect" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </div>
                <div class="my-3 d-flex justify-content-center">

                    <button type="button" class="btn  sendBtn">Prepare Report</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
</template>
  
<style scoped>
.tabcontent {
    display: none;
}

.tabcontent .active {
    display: block !important;
}

.dp {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Black 100% */

    color: #000000;

}

.padding-card {
    padding: 0px !important;

}

.invP {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1px 10px;
    gap: 6px;



    /* Green/0 */

    background: #E1FCEF;
    border-radius: 10px;
}

.Inpara2 {
    width: 73px;
    height: 18px;

    /* Caption/c1 */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    /* Green/500 */

    color: #14804A !important;

}

.modalLabel {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */


    /* Black 100% */

    color: #000000;
}

.stSelect {
    width: 100% !important;
    max-width: 100% !important
}

.form-select {
    width: 100% !important;
    max-width: 100% !important
}

.sendBtn {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 10px 16px !important;
    gap: 10px !important;



    background: #083EA1 !important;
    border-radius: 4px !important;
    color: #fff;
    font-weight: 600 !important;
}

.modal-content {
    border: 1px solid #E8E8E8 !important;
    border-radius: 14px !important;
}

.modal-header {
    padding: 1rem 1rem;
    border-bottom: 1px solid #F9FAFC;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}
</style>
  
<script>
import VehicleSecCard from '../components/VehicleSecCard.vue';

export default {
    name: 'VehiclesView',
    components: {
        VehicleSecCard, // Register the component here
    },
}

</script>
  