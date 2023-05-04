
<template>
    <!-- single item -->
    <div class="col-md-6">
        <div class="main-card padding-card">
            <div class="row bg-row p-2">
                <div class="col-lg-7 d-flex align-items-center">
                    <img class="me-2" src="../assets/img/sam.png" alt="sam">
                    <h5>Example heading <span class="badge">Added</span></h5>
                </div>
                <div class="col-lg-5">
                    <ul class="list-group list-group-horizontal justify-content-end">
                        <li class="list-group-item"><i class="fa-regular fa-eye grn"></i></li>
                        <li class="list-group-item"><router-link to="/driverdetail"><img src="../assets/img/info.png"
                                    alt="icon"></router-link></li>
                        <li class="list-group-item"><i class="fa-regular fa-pen-to-square blu"></i></li>
                        <li class="list-group-item"><i class="fa-regular fa-trash-can red"></i></li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-7">
                    <ul class="card-details">
                        <li><b>Personal Information</b></li>
                        <li>Address: <span>29 Budapest Street, Rooty Hill NSW, Australia</span></li>
                        <li>Address: <span> 744 564 564 56</span></li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <ul class="card-details">
                        <li><b>Other Information</b></li>
                        <li>Rental No.: <span>the demo</span></li>
                        <li>Licence No.: <span>the demo</span></li>
                        <li>State Issued: <span>the demo</span></li>
                        <li>Unpaid Balance: <span>the demo</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    name: 'LiveDriveCard',
}
</script>
