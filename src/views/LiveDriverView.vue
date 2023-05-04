<template>
    <!--profile container start-->
    <div class="container">
        <div class="row mt-5 mb-3 mx-1 align-items-center sub-head-row ">
            <div class="col-lg-6">
                <h5>Live Drivers</h5>
            </div>
            <div class="col-lg-6 d-flex my-2 justify-content-evenly align-items-center">
                <select class="form-select">
                    <option selected>ALL</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <form class="d-flex sub-src">
                    <input class="form-control me-2 sub-src-input" type="search" placeholder="Search">
                    <button class="sub-src-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <i class="far fa-file-alt sblu"></i>
            </div>
        </div>
        <div class="row">
            <LiveDriverCard />

            <LiveDriverCard />
        </div>

        <div class="row mt-4">
            <LiveDriverCard />

            <LiveDriverCard />
        </div>

        <div class="row mt-4">
            <LiveDriverCard />
            <LiveDriverCard />
        </div>
    </div>
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
import LiveDriverCard from '../components/LiveDriverCard.vue';
export default {
    data() {
        return {
            activeTab: 'Personal Details'
        };
    },
    components: {
        LiveDriverCard,
    },


    methods: {
        openTab(cityName) {
            this.activeTab = cityName;
            console.log(cityName)
        }
    }
};
</script>
  