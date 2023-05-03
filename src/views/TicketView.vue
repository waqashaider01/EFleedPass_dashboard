<template>
    <div class="container pt-3">
        <div class="row mt-5 mb-3 mx-1 align-items-center sub-head-row ">
            <div class="col-lg-6">
                <h5>Maintenance List</h5>
            </div>
            <div class="col-lg-6 d-flex my-2 justify-content-evenly align-items-center">

                <form class="d-flex sub-src">
                    <input class="form-control me-2 sub-src-input" type="search" placeholder="Search">
                    <button class="sub-src-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <router-link to="/addticket"><img src="../assets/img/pls.png" alt="icon"></router-link>
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
import MiantenanceCard from '../components/TicketCard.vue'
export default {
    name: 'MaintenanceListView',
    components: {
        MiantenanceCard, // Register the component here
    },
}

</script>
  