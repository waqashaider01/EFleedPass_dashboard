
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
            <div class="dashboard__filter">
                <h4>Cars Qr Code List</h4>
                <div class="dashboard__filter-icons">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="assets/img/icons/file-word-outlined.svg" alt="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/icons/fluent_print.svg" alt="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/icons/car-blue-icon.svg" alt="icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Cars Qr Code List -->
            <div class="qrCode__content">
                <!-- single item -->
                <QrCard />
                <!-- single item -->
                <QrCard />
                <!-- single item -->
                <QrCard />
                <!-- single item -->
                <QrCard />
                <!-- single item -->
                <QrCard />
                <!-- single item -->
                <QrCard />
            </div>
            <!-- End Cars Qr Code List -->
        </div>
    </seciton>
    <!-- End Dashboard Content -->
    <!-- modal -->
    <!-- modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Modal title
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
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
import QrCard from '../components/QrCard.vue';


// import VueCircleProgress from 'vue-circle-progress';

export default {
    name: 'VehicleTrackerView',

    components: {
        QrCard
    },


}

</script>

  