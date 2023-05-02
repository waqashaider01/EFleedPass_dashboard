
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
                <h4>Vehicle - ENX04M</h4>
            </div>
            <!-- Vehicle Tracker -->
            <div class="vehicle__tracker py-3 my-2">
                <div class="vehicle__tracker-list">
                    <!-- Tracker Metar -->
                    <div class="vehicle__tracker-metar">
                        <div class="tracker__top">
                            <!-- single metar -->
                            <div class="single__metar">
                                <div class="circle rpm">
                                    <div class="bar"></div>
                                    <div class="box"><span></span></div>
                                    <div class="text">
                                        <div class="text__value"></div>
                                        <img src="../assets/img/icons/meter.svg" alt="icon" />
                                        <small>RPM</small>
                                    </div>
                                </div>
                            </div>
                            <!-- single metar -->
                            <div class="single__metar">
                                <div class="circle kmh">
                                    <div class="bar"></div>
                                    <div class="box"><span></span></div>
                                    <div class="text">
                                        <div class="text__value"></div>
                                        <img src="../assets/img/icons/meter.svg" alt="icon" />
                                        <small> Km/h </small>
                                    </div>
                                </div>
                            </div>
                            <!-- single metar -->
                            <div class="single__metar">
                                <div class="circle fule">
                                    <div class="bar"></div>
                                    <div class="box"><span></span></div>
                                    <div class="text">
                                        <div class="text__value"></div>
                                        <img src="../assets/img/icons/meter.svg" alt="icon" />
                                        <small> Fule </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tracker__bottom">
                            <img src="assets/img/cars/big.png" class="imgCar" alt="car" />
                        </div>
                    </div>
                    <div class="vehicle__tracker-text">
                        <p>Average Speed: <small>50.82 km/h</small></p>
                        <p>Average Engine RPM: <small>0 rpm</small></p>
                        <p>dometer: <small>O7,449.00 km</small></p>
                        <p>Total Harsh Accelerations: <small>0</small></p>
                        <p>Total Harsh Breakings: <small>0</small></p>
                        <p>Total Harsh Cornerings: <small>0</small></p>
                    </div>
                </div>
                <div class="vehicle__tracker-map">
                    <div class="map__viewer">
                        <span>
                            <img src="../assets/img/icons/location-blue.svg" alt="location" />
                        </span>
                        <p>29 Budapest Street, Rooty Hill NSW, Australia</p>
                    </div>
                    <!-- Route box -->
                    <div class="route__box">
                        <h3>ENX04M</h3>
                        <p>078921</p>
                    </div>
                </div>
            </div>
            <!-- Tab -->
            <div class="dashboard__tab">
                <h4>Vehicle - ENX04M</h4>
            </div>
            <!-- single models -->
            <div class="my-2">
                <div class="row">
                    <div class="col-md-6 col-sm-12 my-2">
                        <CarCard />
                    </div>
                    <div class="col-md-6 col-sm-12 my-2">
                        <CarCard />
                    </div>
                    <div class="col-md-6 col-sm-12 my-2">
                        <CarCard />
                    </div>
                    <div class="col-md-6 col-sm-12 my-2">
                        <CarCard />
                    </div>
                </div>

            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
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
import CarCard from '../components/CarCard.vue';


// import VueCircleProgress from 'vue-circle-progress';

export default {
    name: 'VehicleTrackerView',

    components: {
        CarCard
    },


}

</script>

  