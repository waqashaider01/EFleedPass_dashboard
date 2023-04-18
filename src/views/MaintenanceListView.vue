<template>
    <div class="container pt-3">
        <div class="row mt-5 mb-3 mx-1 align-items-center sub-head-row ">
            <div class="col-lg-6">
                <h5>Maintenance List</h5>
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
                <img src="img/pls.png" alt="icon">
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 my-2 ">
                <MiantenanceCard />
            </div>
            <div class="col-md-4 my-2 ">
                <MiantenanceCard />
            </div>
            <div class="col-md-4 my-2 ">
                <MiantenanceCard />
            </div>
            <div class="col-md-4 my-2 ">
                <MiantenanceCard />
            </div>
            <div class="col-md-4 my-2 ">
                <MiantenanceCard />
            </div>
            <div class="col-md-4 my-2 ">
                <MiantenanceCard />
            </div>
        </div>
    </div>
</template>
  

  
<script>
import MiantenanceCard from '../components/MaintenanceCard.vue'
export default {
    name: 'MaintenanceListView',
    components: {
        MiantenanceCard, // Register the component here
    },
}

</script>
  