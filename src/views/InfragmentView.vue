<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <!--container start-->
    <div class="container my-3">
        <div class="row menu-row">
            <div class="col-12 d-flex">
                <div class="me-3">
                    <a href="#"><img class="me-2" src="img/Dashboard.png" alt="">Dashboard </a>
                </div>
                <div class="me-3">
                    <a href="#"><img class="me-2" src="img/fluent_building.png" alt="">Corporate Rentals </a>
                </div>
                <div class="me-3">
                    <a href="#"><img class="me-2" src="img/ri_steering-fill.png" alt="">Drivers </a>
                </div>
                <div class="me-3">
                    <a href="#"><img class="me-2" src="img/fluent_vehicle-bus.png" alt="">Vehicles </a>
                </div>
                <div class="me-4">
                    <a href="#"><img class="me-2" src="img/ant-design.png" alt="">Transactions </a>
                </div>
                <div class="me-4">
                    <a href="#"><img class="me-2" src="img/ri_reserved.png" alt="">Reservations </a>
                </div>
                <div class="me-4">
                    <a href="#"><img class="me-2" src="img/List.png" alt="">Statements </a>
                </div>
                <div class="me-4">
                    <a href="#"><img class="me-2" src="img/codicon_graph.png" alt="">Reports </a>
                </div>
                <div class="me-4">
                    <a href="#"><img class="me-2" src="img/fluent_web-asset.png" alt="">Assets </a>
                </div>

            </div>
        </div>

        <div class="subhead">
            <div class="col-lg-12">
                <h5 class="fw-bolder">Fleet Details</h5>
            </div>
        </div>

        <div class="card">
            <div class="card-header fw-bolder">
                Penalty Notice Details
            </div>
            <div class="card-body row p-3 d-flex">
                <div class="col-md-3 ">
                    <small>
                        <span class="fw-bold">Penalty notice no. </span><br>
                        <span class="fw-bold"> Vehicle registration </span><br>
                        <span class="fw-bold">Penalty amount</span><br>
                        <span class="fw-bold">Offence description</span><br>
                        <span class="fw-bold">Offence date</span><br>
                        <span class="fw-bold">Offence time </span><br>
                        <span class="fw-bold">Offence time </span><br>
                        <span class="fw-bold">Offence time </span><br></small>

                </div>
                <div class="col-md-9">
                    <small>
                        <span>3210571742</span><br>
                        <span>CXU26G </span><br>
                        <span>$116.00</span><br>
                        <span>Park in ticket parking area not display ticket as required </span><br>
                        <span>11/11/2020</span><br>
                        <span>19:54:00 </span><br>
                        <span>Foster Street, SURRY HILLS </span><br>
                        <span>N </span><br>
                    </small>

                </div>
            </div>
        </div>



    </div>
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
                <div class="corporate_from row">
                    <div class="col-md-4 corporate_single_info ">
                        <label for="Rental">Select Driver: *</label>
                        <select v-model="selected" class="select py-2 ">
                            <option disabled value="">Please select one</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>

                    </div>
                    <div class="col-md-1 pt-4 ">
                        <button class="btn "><svg width="52" height="52" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="58" height="58" rx="4" fill="white" />
                                <path
                                    d="M16 13C16.1326 13 16.2598 13.0527 16.3536 13.1464C16.4473 13.2402 16.5 13.3674 16.5 13.5V15.5H18.5C18.6326 15.5 18.7598 15.5527 18.8536 15.6464C18.9473 15.7402 19 15.8674 19 16C19 16.1326 18.9473 16.2598 18.8536 16.3536C18.7598 16.4473 18.6326 16.5 18.5 16.5H16.5V18.5C16.5 18.6326 16.4473 18.7598 16.3536 18.8536C16.2598 18.9473 16.1326 19 16 19C15.8674 19 15.7402 18.9473 15.6464 18.8536C15.5527 18.7598 15.5 18.6326 15.5 18.5V16.5H13.5C13.3674 16.5 13.2402 16.4473 13.1464 16.3536C13.0527 16.2598 13 16.1326 13 16C13 15.8674 13.0527 15.7402 13.1464 15.6464C13.2402 15.5527 13.3674 15.5 13.5 15.5H15.5V13.5C15.5 13.3674 15.5527 13.2402 15.6464 13.1464C15.7402 13.0527 15.8674 13 16 13Z"
                                    fill="#2388FF" />
                                <path
                                    d="M10 16C10 15.2121 10.1552 14.4319 10.4567 13.7039C10.7583 12.9759 11.2002 12.3145 11.7574 11.7574C12.3145 11.2002 12.9759 10.7583 13.7039 10.4567C14.4319 10.1552 15.2121 10 16 10C16.7879 10 17.5681 10.1552 18.2961 10.4567C19.0241 10.7583 19.6855 11.2002 20.2426 11.7574C20.7998 12.3145 21.2417 12.9759 21.5433 13.7039C21.8448 14.4319 22 15.2121 22 16C22 17.5913 21.3679 19.1174 20.2426 20.2426C19.1174 21.3679 17.5913 22 16 22C14.4087 22 12.8826 21.3679 11.7574 20.2426C10.6321 19.1174 10 17.5913 10 16ZM16 11C14.6739 11 13.4021 11.5268 12.4645 12.4645C11.5268 13.4021 11 14.6739 11 16C11 17.3261 11.5268 18.5979 12.4645 19.5355C13.4021 20.4732 14.6739 21 16 21C17.3261 21 18.5979 20.4732 19.5355 19.5355C20.4732 18.5979 21 17.3261 21 16C21 14.6739 20.4732 13.4021 19.5355 12.4645C18.5979 11.5268 17.3261 11 16 11Z"
                                    fill="#2388FF" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="corporate_from d-sm-block d-md-grid">
                    <div class="corporate_single_info">
                        <label for="Rental">First Name: *</label>
                        <input type="text" class="form-control" id="Rental" placeholder="First Name" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="RSelect">Sur Name: *</label>
                        <input type="text" class="form-control" id="RSelect" placeholder="Sur Name" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="name">License No.: *</label>
                        <input type="text" class="form-control" id="name" placeholder="License No" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="startdatetime">License Issued State: *</label>
                        <input type="text" class="form-control" id="startdatetime" placeholder="License Issued State" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Date of Birth: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="Date of Birth" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Mobile Number: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="Mobile Number" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Address Line 1: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="Address Line 1" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Address Line 2: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="Address Line 2" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Subrub: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="subrub" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">State: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="state" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Post Code: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="Post Code" />
                    </div>
                    <div class="corporate_single_info">
                        <label for="duedatetime">Country: *</label>
                        <input type="text" class="form-control" id="duedatetime" placeholder="Country" />
                    </div>

                </div>
                <div class="d-flex justify-content-end my-3 mx-3">
                    <button class="btn nom">Nominate</button>
                </div>
            </div>
        </div>
    </seciton>
</template>
  
<style>
.select {
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    width: 20rem;
}

.nom {
    background: #083EA1;
    border-radius: 4px;
    color: #fff
}
</style>
  
<script>
export default {

}
</script>
  