<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <!--container start-->
    <!-- Dashboard Content -->
    <seciton class="dashboard__body">
        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Reservation</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="select modalLabel">Pick up location</label>
                                    <select class="form-select stSelect" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="select modalLabel">Drop off location</label>
                                    <select class="form-select stSelect" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label modalLabel">Start Date:
                                        *</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="eg 1/4/23">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label modalLabel">Return Date:
                                        *</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="eg 1/4/23">
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <p class="modalLabel">Vehicle Categories</p>
                            <div class=" my-2">
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">

                                    </div>
                                    <div class="imageCon p-3 me-2">
                                        <img class="bcarImg" src="../assets/img/cars/big.png" alt="">
                                    </div>
                                    <p>Test Car</p>
                                    <p>$500/day</p>
                                </div>
                                <hr>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">

                                    </div>
                                    <div class="imageCon p-3 me-2">
                                        <img class="bcarImg" src="../assets/img/cars/big.png" alt="">
                                    </div>
                                    <p>Test Car</p>
                                    <p>$500/day</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="my-2">
                            <p class="modalLabel">Add ones</p>
                            <div class="d-flex justify-content-between align-items-center my-1">
                                <button class="btn addBtn  d-flex flex-column align-items-center"><svg width="14"
                                        height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.99992 11.6666V6.99992M6.99992 6.99992V2.33325M6.99992 6.99992H11.6666M6.99992 6.99992H2.33325"
                                            stroke="#083EA1" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    Add
                                </button>
                                <img src="../img/cu.png" alt="">
                                <p>ASIC COVER INCLUDED If you have an accident or damage the vehicle, your excess liability
                                    is $4,818.
                                    $0.00 (One-time)</p>
                                <div class="d-flex">
                                    <button class="btn text-primary "> +</button>
                                    <input class="form-control mx-2" type="number">
                                    <button class="btn text-primary">-</button>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center my-1">
                                <button class="btn reBtn text-danger  d-flex flex-column align-items-center"><svg width="14"
                                        height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.92188 2.51562H4.8125C4.87266 2.51562 4.92188 2.46641 4.92188 2.40625V2.51562H9.07812V2.40625C9.07812 2.46641 9.12734 2.51562 9.1875 2.51562H9.07812V3.5H10.0625V2.40625C10.0625 1.92363 9.67012 1.53125 9.1875 1.53125H4.8125C4.32988 1.53125 3.9375 1.92363 3.9375 2.40625V3.5H4.92188V2.51562ZM11.8125 3.5H2.1875C1.94551 3.5 1.75 3.69551 1.75 3.9375V4.375C1.75 4.43516 1.79922 4.48438 1.85938 4.48438H2.68516L3.02285 11.6348C3.04473 12.101 3.43027 12.4688 3.89648 12.4688H10.1035C10.5711 12.4688 10.9553 12.1023 10.9771 11.6348L11.3148 4.48438H12.1406C12.2008 4.48438 12.25 4.43516 12.25 4.375V3.9375C12.25 3.69551 12.0545 3.5 11.8125 3.5ZM9.99824 11.4844H4.00176L3.6709 4.48438H10.3291L9.99824 11.4844Z"
                                            fill="#FF2D46" />
                                    </svg>

                                    Remove
                                </button>
                                <img src="../img/meter.png" alt="">
                                <p class="mx-5">ASIC COVER INCLUDED If you have an accident or damage the vehicle, your
                                    excess liability
                                    is $4,818.
                                    $0.00 (One-time)</p>
                                <div class="d-flex">
                                    <button class="btn text-primary "> +</button>
                                    <input class="form-control mx-2" type="number">
                                    <button class="btn text-primary">-</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="my-2">
                            <div class="d-flex align-items-center ">
                                <label class="mx-2 modalLabel" for="mySwitch">Existing Customer</label>
                                <div class="form-check form-switch mx-2">
                                    <input class="form-check-input f2" type="checkbox" id="mySwitch2" name="darkmode"
                                        value="yes" checked>


                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label modalLabel">First Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="eg John">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label modalLabel">Sur Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="eg Doe">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label modalLabel">Mobile
                                        Number</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="eg 000 00000000">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label modalLabel">Email Address
                                    </label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="eg test@gmail.com">
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="my-2">
                            <div class="d-flex align-items-center ">
                                <label class="mx-2 modalLabel" for="mySwitch">Send SmS</label>
                                <div class="form-check form-switch mx-2">
                                    <input class="form-check-input f2" type="checkbox" id="mySwitch2" name="darkmode"
                                        value="yes" checked>


                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="my-2">
                            <div class="d-flex justify-content-between">
                                <p class="modalLabel"> Card Details For Rental</p>
                                <div class="d-flex">
                                    <img src="../img/efcard.png" alt="efleet" class="mx-1">
                                    <img src="../img/picon2.png" alt="" class="mx-1">
                                    <img src="../assets/img/visaicon.png" alt="" class="mx-1">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 my-2">
                                <label for="autoSizingInputGroup" class="form-label">Add a credit card</label>
                                <label class="visually-hidden" for="autoSizingInputGroup"></label>
                                <div class="input-group">
                                    <div class="input-group-text">
                                        <img sr="../assets/img/mastercard.jpeg" width="70%" height="80%">
                                    </div>
                                    <input type="text" class="form-control" id="autoSizingInputGroup"
                                        placeholder="000 000 0000">
                                </div>
                            </div>
                            <div class="col-md-6 my-2">
                                <label for="expdate" class="form-label">Expiry Date</label>
                                <input type="date" class="form-control" id="expdate">
                            </div>
                            <div class="col-md-6 my-2">
                                <label for="cvc" class="form-label">CVC</label>
                                <input type="text" class="form-control" id="cvc" placeholder="CVC">
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Booking Notes</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        placeholder="Notes"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="my-3 d-flex justify-content-center ">

                        <button type="button" class="btn btn-primary mx-2">Send Quote</button>
                        <button type="button" class="btn  sendBtn mx-2">Send Reservation</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- dashboard filter -->
        <div class="container">
            <div class="dashboard__filter">
                <h4>Reservation Calendar</h4>
                <buttonn class="btn resBtn">Resvervation</buttonn>
                <buttonn class="btn maniBtn mx-2">Manifest</buttonn>
                <div class="dashboard__filter-right ms-4 ps-5">
                    <!-- search bar -->
                    <p class="para3">Filter by Location</p>
                    <div class="d-flex ">

                        <select class="form-select stSelect mx-2" aria-label="Default select example">
                            <option selected>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <button class="btn mx-2" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src="../img/icons/plus.svg" alt="icon" />
                        </button>
                        <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="4" fill="white" />
                                <path
                                    d="M12.8002 16.4001C12.8002 16.294 12.8423 16.1923 12.9174 16.1173C12.9924 16.0422 13.0941 16.0001 13.2002 16.0001C13.3063 16.0001 13.408 16.0422 13.483 16.1173C13.5581 16.1923 13.6002 16.294 13.6002 16.4001C13.6002 16.5062 13.5581 16.6079 13.483 16.6829C13.408 16.758 13.3063 16.8001 13.2002 16.8001C13.0941 16.8001 12.9924 16.758 12.9174 16.6829C12.8423 16.6079 12.8002 16.5062 12.8002 16.4001ZM13.2002 17.6001C13.0941 17.6001 12.9924 17.6422 12.9174 17.7173C12.8423 17.7923 12.8002 17.894 12.8002 18.0001C12.8002 18.1062 12.8423 18.2079 12.9174 18.2829C12.9924 18.358 13.0941 18.4001 13.2002 18.4001C13.3063 18.4001 13.408 18.358 13.483 18.2829C13.5581 18.2079 13.6002 18.1062 13.6002 18.0001C13.6002 17.894 13.5581 17.7923 13.483 17.7173C13.408 17.6422 13.3063 17.6001 13.2002 17.6001ZM12.8002 19.6001C12.8002 19.494 12.8423 19.3923 12.9174 19.3173C12.9924 19.2422 13.0941 19.2001 13.2002 19.2001C13.3063 19.2001 13.408 19.2422 13.483 19.3173C13.5581 19.3923 13.6002 19.494 13.6002 19.6001C13.6002 19.7062 13.5581 19.8079 13.483 19.8829C13.408 19.958 13.3063 20.0001 13.2002 20.0001C13.0941 20.0001 12.9924 19.958 12.9174 19.8829C12.8423 19.8079 12.8002 19.7062 12.8002 19.6001ZM14.8002 16.0001C14.6941 16.0001 14.5924 16.0422 14.5174 16.1173C14.4423 16.1923 14.4002 16.294 14.4002 16.4001C14.4002 16.5062 14.4423 16.6079 14.5174 16.6829C14.5924 16.758 14.6941 16.8001 14.8002 16.8001H18.8002C18.9063 16.8001 19.008 16.758 19.083 16.6829C19.1581 16.6079 19.2002 16.5062 19.2002 16.4001C19.2002 16.294 19.1581 16.1923 19.083 16.1173C19.008 16.0422 18.9063 16.0001 18.8002 16.0001H14.8002ZM14.4002 18.0001C14.4002 17.894 14.4423 17.7923 14.5174 17.7173C14.5924 17.6422 14.6941 17.6001 14.8002 17.6001H18.8002C18.9063 17.6001 19.008 17.6422 19.083 17.7173C19.1581 17.7923 19.2002 17.894 19.2002 18.0001C19.2002 18.1062 19.1581 18.2079 19.083 18.2829C19.008 18.358 18.9063 18.4001 18.8002 18.4001H14.8002C14.6941 18.4001 14.5924 18.358 14.5174 18.2829C14.4423 18.2079 14.4002 18.1062 14.4002 18.0001ZM14.8002 19.2001C14.6941 19.2001 14.5924 19.2422 14.5174 19.3173C14.4423 19.3923 14.4002 19.494 14.4002 19.6001C14.4002 19.7062 14.4423 19.8079 14.5174 19.8829C14.5924 19.958 14.6941 20.0001 14.8002 20.0001H18.8002C18.9063 20.0001 19.008 19.958 19.083 19.8829C19.1581 19.8079 19.2002 19.7062 19.2002 19.6001C19.2002 19.494 19.1581 19.3923 19.083 19.3173C19.008 19.2422 18.9063 19.2001 18.8002 19.2001H14.8002ZM12.8002 9.6001C12.3758 9.6001 11.9689 9.76867 11.6688 10.0687C11.3688 10.3688 11.2002 10.7758 11.2002 11.2001V20.8001C11.2002 21.2244 11.3688 21.6314 11.6688 21.9315C11.9689 22.2315 12.3758 22.4001 12.8002 22.4001H19.2002C19.6245 22.4001 20.0315 22.2315 20.3316 21.9315C20.6316 21.6314 20.8002 21.2244 20.8002 20.8001V13.9313C20.7999 13.6131 20.6733 13.3081 20.4482 13.0833L17.317 9.9513C17.092 9.72648 16.787 9.60017 16.469 9.6001H12.8002ZM12.0002 11.2001C12.0002 10.9879 12.0845 10.7844 12.2345 10.6344C12.3845 10.4844 12.588 10.4001 12.8002 10.4001H16.0002V13.2001C16.0002 13.5184 16.1266 13.8236 16.3517 14.0486C16.5767 14.2737 16.8819 14.4001 17.2002 14.4001H20.0002V20.8001C20.0002 21.0123 19.9159 21.2158 19.7659 21.3658C19.6159 21.5158 19.4124 21.6001 19.2002 21.6001H12.8002C12.588 21.6001 12.3845 21.5158 12.2345 21.3658C12.0845 21.2158 12.0002 21.0123 12.0002 20.8001V11.2001ZM19.8346 13.6001H17.2002C17.0941 13.6001 16.9924 13.558 16.9174 13.4829C16.8423 13.4079 16.8002 13.3062 16.8002 13.2001V10.5657L19.8346 13.6001Z"
                                    fill="#2388FF" />
                            </svg>
                        </span>
                        <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="4" fill="white" />
                                <path
                                    d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
                                    stroke="#2388FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M15.9998 17C15.9876 16.7836 16.0459 16.5691 16.1662 16.3887C16.2864 16.2083 16.462 16.0719 16.6665 16C16.9171 15.9042 17.142 15.7515 17.3236 15.554C17.5051 15.3565 17.6383 15.1195 17.7127 14.8618C17.7871 14.604 17.8007 14.3325 17.7523 14.0686C17.704 13.8047 17.595 13.5557 17.434 13.341C17.2731 13.1264 17.0645 12.9521 16.8247 12.8318C16.5849 12.7115 16.3205 12.6485 16.0522 12.6477C15.7839 12.647 15.5191 12.7085 15.2787 12.8275C15.0382 12.9465 14.8287 13.1196 14.6665 13.3334M15.9998 19.3334V19.34V19.3334Z"
                                    stroke="#2388FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <!-- -->
                    </div>

                </div>
            </div>
            <!-- PPSR Search Item -->
            <div class="bg-white pt-2 mt-2 rounded-0">
                <!-- single item -->

                <!-- single item -->


                <EventCalendar />




            </div>
        </div>
    </seciton>
    <!-- End Dashboard Content -->
</template>
  
<style scoped>
.f2:checked {
    background-color: #11B826 !important;
    ;
}

.reBtn {
    font-family: 'Port Lligat Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    /* identical to box height */

    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Alert */

    color: #FF2D46;
}

.imageCon {
    background: #E1E5F2;
    border-radius: 14px;
    width: fit-content;
    height: fit-content;
}

.bcarImg {
    width: 100px;
}

.para3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Black 80% */

    color: #2E2E2E;
}

.resBtn {
    background: #083EA1 !important;
    border-radius: 4px !important;
    color: #fff !important;
}

.addBtn {
    color: #083EA1 !important;
    font-family: 'Port Lligat Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    /* identical to box height */

    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Primary 1 */

}

.maniBtn {
    background: #E1E5F2 !important;
    border-radius: 4px !important;
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
    max-width: 100% !important;
}

.form-select {
    width: 100% !important;
    max-width: 100% !important;
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
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}
</style>
  
<script>
import EventCalendar from '../components/EventCalendar.vue';

export default {
    name: 'MonthlyStatementView',
    components: {
        EventCalendar, // Register the component here
    },
}

</script>
  