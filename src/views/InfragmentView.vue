<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <!--container start-->
    <div class="container my-3">


        <div class="subhead">
            <div class="col-lg-12 d-flex justify-content-between">
                <h5 class="fw-bolder">Fleet Details</h5>
                <router-link to="/addticket"> <span class="plus"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 3C6.13261 3 6.25979 3.05268 6.35355 3.14645C6.44732 3.24021 6.5 3.36739 6.5 3.5V5.5H8.5C8.63261 5.5 8.75979 5.55268 8.85355 5.64645C8.94732 5.74021 9 5.86739 9 6C9 6.13261 8.94732 6.25979 8.85355 6.35355C8.75979 6.44732 8.63261 6.5 8.5 6.5H6.5V8.5C6.5 8.63261 6.44732 8.75979 6.35355 8.85355C6.25979 8.94732 6.13261 9 6 9C5.86739 9 5.74021 8.94732 5.64645 8.85355C5.55268 8.75979 5.5 8.63261 5.5 8.5V6.5H3.5C3.36739 6.5 3.24021 6.44732 3.14645 6.35355C3.05268 6.25979 3 6.13261 3 6C3 5.86739 3.05268 5.74021 3.14645 5.64645C3.24021 5.55268 3.36739 5.5 3.5 5.5H5.5V3.5C5.5 3.36739 5.55268 3.24021 5.64645 3.14645C5.74021 3.05268 5.86739 3 6 3Z"
                                fill="#2388FF" />
                            <path
                                d="M0 6C-1.17411e-08 5.21207 0.155195 4.43185 0.456723 3.7039C0.758251 2.97595 1.20021 2.31451 1.75736 1.75736C2.31451 1.20021 2.97595 0.758251 3.7039 0.456723C4.43185 0.155195 5.21207 0 6 0C6.78793 0 7.56815 0.155195 8.2961 0.456723C9.02405 0.758251 9.68549 1.20021 10.2426 1.75736C10.7998 2.31451 11.2417 2.97595 11.5433 3.7039C11.8448 4.43185 12 5.21207 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 2.37122e-08 7.5913 0 6ZM6 1C4.67392 1 3.40215 1.52678 2.46447 2.46447C1.52678 3.40215 1 4.67392 1 6C1 7.32608 1.52678 8.59785 2.46447 9.53553C3.40215 10.4732 4.67392 11 6 11C7.32608 11 8.59785 10.4732 9.53553 9.53553C10.4732 8.59785 11 7.32608 11 6C11 4.67392 10.4732 3.40215 9.53553 2.46447C8.59785 1.52678 7.32608 1 6 1Z"
                                fill="#2388FF" />
                        </svg>
                    </span></router-link>
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
  