<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="container my-3">
    <!-- main menu start-->
    <!-- <div class="row menu-row">
      <div class="col-12 d-flex">
        <div class="me-3">
          <a href="dashboard.html"><img class="me-2" src="../assets/img/Dashboard.png" alt="">Dashboard </a>
        </div>
        <div class="me-3">
          <a href="#"><img class="me-2" src="../assets/img/fluent_building.png" alt="">Corporate Rentals </a>
        </div>
        <div class="me-3">
          <a href="drivers.html"><img class="me-2" src="../assets/img/ri_steering-fill.png" alt="">Drivers </a>
        </div>
        <div class="me-3">
          <a href="#"><img class="me-2" src="../assets/img/fluent_vehicle-bus.png" alt="">Vehicles </a>
        </div>
        <div class="me-4">
          <a href="#"><img class="me-2" src="../assets/img/ant-design.png" alt="">Transactions </a>
        </div>
        <div class="me-4">
          <a href="#"><img class="me-2" src="../assets/img/ri_reserved.png" alt="">Reservations </a>
        </div>
        <div class="me-4">
          <a href="#"><img class="me-2" src="../assets/img/List.png" alt="">Statements </a>
        </div>
        <div class="me-4">
          <a href="#"><img class="me-2" src="../assets/img/codicon_graph.png" alt="">Reports </a>
        </div>
        <div class="me-4">
          <a href="#"><img class="me-2" src="../assets/img/fluent_web-asset.png" alt="">Assets </a>
        </div>


        <div class="me-4">
          <a href="#">
            <i id="assets-btn" class="fa-solid fa-ellipsis blu me-2"></i>
          </a>
          <div id="assets-menu" class="dropdown-menu1 main-card">
           menu items go here -->
    <!-- <p><a href="#"><img src="../assets/img/invoice.png"> Asset Invoices</a></p>
    <p><a href="#"><img src="../assets/img/dollar.png"> Infringements</a></p>
    <p><a href="#"><img src="../assets/img/person.png"> Maintenance</a></p>
    <p><a href="#"><img src="../assets/img/tools.png"> Support</a></p>
    <p><a href="#"><img src="../assets/img/logout.png"> Logout</a></p>
  </div>
  </div>


  </div>
  </div> -->
    <!-- main menu end-->
    <!-- View Driver Notes Start-->
    <div class="row mt-5 align-items-center sub-head-row ">
      <div class="col-lg-6">
        <h5>View Driver Notes</h5>
      </div>
      <div class="col-lg-6 d-flex my-2 justify-content-end align-items-center" style="flex-direction: row;">
        <li class="list-group-item"><i class="fa-solid fa-bus blu"></i></li>
        <li class="list-group-item"><i class="fa-regular fa-pen-to-square blu"></i></li>
        <li class="list-group-item" id="dropdown-icon" @click="showDropdown = !showDropdown"> <i
            class="fa-solid fa-ellipsis-vertical"></i>

        </li>
        <ul class="dropdown-menu" id="dropdown-list" v-show="showDropdown" style="display:block">
          <li class="my-1">
            <h5>Scan & Verify License</h5>
          </li>
          <li class="my-1">Verify License (Manual)</li>
          <li class="my-1">Credit Check</li>
          <li class="my-1">View Statment</li>
          <li class="my-1">Send New Credentials</li>
        </ul>
      </div>
    </div>
    <!-- View Driver Notes end-->
  </div>
  <!--profile container start-->
  <div class="container">
    <div class="row">
      <div class="col-lg-12 main-card ">
        <div class="profile-card">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-1 text-center">
                <img src="../assets/img/fleet-manager.png" class="img-fluid rounded-start" alt="...">

              </div>
              <div class="col-md-11 ps-2">
                <div>
                  <div class="row">
                    <div class="row" style="padding-right:0px !important">
                      <div class="col-md-2 text-left">
                        <h5 class="card-title" style="display: inline-block;">Sam John</h5>
                        <p class="card-text"><small>Balance: $0</small></p>
                      </div>
                      <div class="col-md-3 ">
                        <span class="badge rounded-pill btn-primary "
                          style="display: inline-block; color: white !important;">
                          efleet point:5 </span>
                        <span class="badge-verify">
                          <i class="fa-solid fa-circle-check me-2"></i>Get Verified</span>
                      </div>
                      <button type="button"
                        style="width: fit-content; margin: 5px;color: white !important; background-color: #00AEEF;"
                        class="btn btn-labeled ms-lg-auto"><span class="btn-label"><img src="../assets/img/pls-white.png"
                            alt="icon"></span>&nbsp;Add
                        Card(Tolling)</button>
                      <button type="button" id="pay-button"
                        style="width: fit-content; margin: 5px;color: white !important;background-color: #11B826;"
                        class="btn btn-labeled">
                        <span class="btn-label"><img src="../assets/img/money.png" alt="icon"></span>
                        &nbsp; Pay Toll Notice
                      </button>


                      <button type="button"
                        style="width: fit-content;margin: 5px;color: white !important;background-color: #083EA1;"
                        class="btn btn-labeled active" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><span
                          class="btn-label"><img src="../assets/img/money.png" alt="icon"></span>
                        &nbsp;Manual Charge</button>
                      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header" style="border-bottom: 0 none; background-color: #f2fafd;">
                              <h6 class="modal-title" id="exampleModalLongTitle">Charge
                                Driver [Sam John] </h6>
                            </div>
                            <div class="modal-body">
                              <small>
                                The payment information for RENTAL has not been added
                                yet. Please click the link below to add payment
                                information.
                              </small>
                              <div class="acard"
                                style="display: flex; justify-content: center; align-items: center; margin: 10px;">
                                <button type="button" class="btn btn-labeled btn-primary active">Add
                                  Card</button>
                              </div>

                            </div>
                            <div class="modal-footer" style="align-items: center;">
                              <button type="button" class="btn btn-light" data-dismiss="modal"
                                style="align-items: center;">Close</button>
                              <button type="button" class="btn btn-success" style="margin-right: 30%;">Charge Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>


                <div class="row">
                  <div class="col-md-4">
                    <b>Birthday:</b> july 1991<br>
                    <b>Added Date:</b> April 30,2021
                  </div>
                  <div class="col-md-8 mt-3 d-flex flex-wrap justify-content-lg-end" style="padding-right:0px !important">
                    <button type="button" class="btn me-lg-3 me-3 mt-lg-0 mt-2 btn-labeled "
                      style="background-color:#E9F5FF;"><span class="btn-label">
                        <i class="fa-regular fa-comment-dots"></i></span>&nbsp;Send
                      SMS</button>
                    <button type="button" class="btn me-lg-3 me-3 mt-lg-0 mt-2 btn-labeled"
                      style="background-color:#E9F5FF;">
                      <i class="fa-regular fa-credit-card"></i> <span class="btn-label">
                      </span>&nbsp;Charge
                      Now</button>
                    <button type="button" class="btn me-lg-3 me-3 mt-lg-0 mt-2 btn-labeled"
                      style="background-color:#E9F5FF;"><span class="btn-label">
                        <img src="../assets/img/call.png" alt="call"></span>&nbsp;Call
                      Customer</button>
                    <button type="button" class="btn me-lg-3 me-3 mt-lg-0 mt-2 btn-labeled" data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop" style="background-color:#E9F5FF;"><span class="btn-label"><img
                          src="../assets/img/map.svg" alt="location"></span>&nbsp;My
                      Location</button>


                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <img src="../assets/img/mylocation.png">
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--TAb bar Start-->
          <div class="row">
            <div class="tab tab-btn">
              <button class="tablinks" :class="{ active: activeTab === 'Personal Details' }"
                @click="openTab('Personal Details')">Personal Details</button>
              <button class="tablinks" :class="{ active: activeTab === 'Rental History' }"
                @click="openTab('Rental History')">Rental History</button>
              <button class="tablinks" :class="{ active: activeTab === 'Notes' }" @click="openTab('Notes')">Notes</button>
              <button class="tablinks" :class="{ active: activeTab === 'Subscriptions' }"
                @click="openTab('Subscriptions')">Subscriptions</button>
              <button class="tablinks" :class="{ active: activeTab === 'Notifications' }"
                @click="openTab('Notifications')">Notifications</button>
              <button class="tablinks" :class="{ active: activeTab === 'Collection' }"
                @click="openTab('Collection')">Collection</button>
              <button class="tablinks" :class="{ active: activeTab === 'Logbook' }"
                @click="openTab('Logbook')">Logbook</button>
            </div>
          </div>
          <!--TAb bar End-->
          <!--TAb bar Script Start-->
          <!-- <script>
            function openCity(evt, cityName) {
                              var i, tabcontent, tablinks;
                              tabcontent = document.getElementsByClassName("tabcontent");
                              for (i = 0; i < tabcontent.length; i++) {
                                  tabcontent[i].style.display = "none";
                              }
                              tablinks = document.getElementsByClassName("tablinks");
                              for (i = 0; i < tablinks.length; i++) {
                                  tablinks[i].className = tablinks[i].className.replace(" active", "");
                              }
                              document.getElementById(cityName).style.display = "block";
                              evt.currentTarget.className += " active";
                          }
          </script> -->
          <!--TAb bar Script  Start-->
        </div>

      </div>
    </div>


  </div>
  <!--profile container End-->
  <!--Personal Details Start-->
  <div class="container tabcontent" :class="{ active: activeTab === 'Personal Details' }" id="Personal Details">
    <div class="row  sub-head-row px-2">
      <div class="row align-items-center ">
        <div class="col-lg-6">
          <h5>Personal Detalils</h5>
        </div>
        <div class="col-lg-6 d-flex my-2 justify-content-end align-items-center" style="flex-direction: row;">
          <button type="button" class="btn btn-labeled btn-primary active"><span class="btn-label"><i
                class="fa-regular fa-pen-to-square blu" style="color: white;"></i></span>&nbsp;Edit
            Profile</button>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-lg-2">
          <p class="mb-2">Email:</p>
          <p class="mb-2">Mobile Number:</p>
          <p class="mb-2">Alternate Number:</p>
          <p class="mb-2">Address:</p>
          <p class="mb-2">Driver Licence No:</p>
        </div>
        <div class="col-lg-4">
          <p class="text-muted mb-2"> Not Found</p>
          <p class="text-muted mb-2"> 041474185</p>
          <p class="text-muted mb-2"> 0414741852</p>
          <p class="text-muted mb-2"> Parramatta NSW 2154</p>
          <p class="text-muted mb-2"> 21874147</p>
        </div>
        <div class="col-lg-6">
          <p>License Front Picture:</p>
          <img src="../assets/img/drivers_l.png">
        </div>
      </div>


    </div>
  </div>
  <!--Personal Details End-->

  <!--Rental History Start -->
  <div class="tabcontent" :class="{ active: activeTab === 'Rental History' }" id="Rental History">
    <div class="container">

      <div class="row p-3 pb-0 align-items-center sub-head-row ">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <h5>Rental History of Sam John</h5>
          </div>
        </div>
        <div class="row">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" id="rental-tab" href="#">Rentals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#" id="bookings-tab">Bookings</a>
            </li>



          </ul>

        </div>


      </div>
    </div>
    <div class="container px-0" id="rentals-content" style="display: block;">
      <div class="row my-3 ">
        <div class="col-lg-4 ">
          <div class="main-card3">
            <div class="row">
              <div class="row my-2">
                <div class="col-lg-11">
                  <img src="../assets/img/sam.png">
                  &nbsp;&nbsp;<b>Sam John</b>&nbsp;&nbsp;<span class="badge">Completed</span>
                </div>
                <div class="col-lg-1 d-flex my-2 justify-content-end align-items-center" style="flex-direction: row;">
                  <img src="../assets/img/pdf-img.png" alt="pdf">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg">
                  <p class="n">
                  <h6><b>RA #2016-000-39</b></h6>
                  </p>
                  <p class="n">REGO:&nbsp;<span class="text-muted">BXC30A</span></p>
                  <p class="n">Phone&nbsp;<span class="text-muted">&nbsp;744&nbsp;564&nbsp;564&nbsp;56</span></p>
                  <p class="n">Start Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span></p>
                  <p class="n">End Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-lg-4 ">
          <div class="main-card3">
            <div class="row">
              <div class="row my-2">
                <div class="col-lg-11">
                  <img src="../assets/img/sam.png">
                  &nbsp;&nbsp;<b>Sam John</b>&nbsp;&nbsp;<span class="badge">Completed</span>
                </div>
                <div class="col-lg-1 d-flex my-2 justify-content-end align-items-center" style="flex-direction: row;">
                  <img src="../assets/img/pdf-img.png" alt="pdf">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg">
                  <p class="n">
                  <h6><b>RA #2016-000-39</b></h6>
                  </p>
                  <p class="n">REGO:&nbsp;<span class="text-muted">BXC30A</span></p>
                  <p class="n">Phone&nbsp;<span class="text-muted">&nbsp;744&nbsp;564&nbsp;564&nbsp;56</span></p>
                  <p class="n">Start Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span></p>
                  <p class="n">End Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 ">
          <div class="main-card3">
            <div class="row">
              <div class="row my-2">
                <div class="col-lg-11">
                  <img src="../assets/img/sam.png">
                  &nbsp;&nbsp;<b>Sam John</b>&nbsp;&nbsp;<span class="badge">Completed</span>
                </div>
                <div class="col-lg-1 d-flex my-2 justify-content-end align-items-center" style="flex-direction: row;">
                  <img src="../assets/img/pdf-img.png" alt="pdf">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg">
                  <p class="n">
                  <h6><b>RA #2016-000-39</b></h6>
                  </p>
                  <p class="n">REGO:&nbsp;<span class="text-muted">BXC30A</span></p>
                  <p class="n">Phone&nbsp;<span class="text-muted">&nbsp;744&nbsp;564&nbsp;564&nbsp;56</span></p>
                  <p class="n">Start Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span></p>
                  <p class="n">End Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-0" id="bookings-content" style="display: none;">
      <div class="row my-3 ">
        <div class="col-lg-4 ">
          <div class="main-card3">
            <div class="row">
              <div class="row my-2">
                <div class="col-lg-11">
                  <img src="../assets/img/sam.png">
                  &nbsp;&nbsp;<b>Sam John</b>&nbsp;&nbsp;<span class="badge">Completed</span>
                </div>
                <div class="col-lg-1 d-flex my-2 justify-content-end align-items-center" style="flex-direction: row;">
                  <img src="../assets/img/pdf-img.png" alt="pdf">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg">
                  <p class="n">
                  <h6><b>RA #2016-000-39</b></h6></p>
                  <p class="n">Start Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span></p>
                  <p class="n">End Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span>
                  </p>
                  <p class="n">Category/Subscription:&nbsp;<span class="text-muted">&nbsp;N/A&nbsp;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-lg-4 ">
          <div class="main-card3">
            <div class="row">
              <div class="row my-2">
                <div class="col-lg-11">
                  <img src="../assets/img/sam.png">
                  &nbsp;&nbsp;<b>Sam John</b>&nbsp;&nbsp;<span class="badge">Completed</span>
                </div>
                <div class="col-lg-1 d-flex my-2 justify-content-end align-items-center" style="flex-direction: row;">
                  <img src="../assets/img/pdf-img.png" alt="pdf">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg">
                  <p class="n">
                  <h6><b>RA #2016-000-39</b></h6>
                  </p>
                  <p class="n">Start Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span></p>
                  <p class="n">End Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span>
                  </p>
                  <p class="n">Category/Subscription:&nbsp;<span class="text-muted">&nbsp;N/A&nbsp;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 ">
          <div class="main-card3">
            <div class="row">
              <div class="row my-2">
                <div class="col-lg-11">
                  <img src="../assets/img/sam.png">
                  &nbsp;&nbsp;<b>Sam John</b>&nbsp;&nbsp;<span class="badge">Completed</span>
                </div>
                <div class="col-lg-1 d-flex my-2 justify-content-end align-items-center" style="flex-direction: row;">
                  <img src="../assets/img/pdf-img.png" alt="pdf">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg">
                  <p class="n">
                  <h6><b>RA #2016-000-39</b></h6>
                  </p>
                  <p class="n">Start Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span></p>
                  <p class="n">End Date:&nbsp;<span class="text-muted">&nbsp;08/04/2016&nbsp;09:00</span>
                  </p>
                  <p class="n">Category/Subscription:&nbsp;<span class="text-muted">&nbsp;N/A&nbsp;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Rental History End -->

  <!--Notes Start-->
  <div class="container tabcontent rounded-4" :class="{ active: activeTab === 'Notes' }" id="Notes">

    <div class="row my-4 sub-head-row">

      <div class="nn ">

        <div class="col-lg-12 ">

          <div class="notes_area row ">

            <div class="col-lg-6 ps-1 d-flex align-items-left">

              <h5><b>Notes</b> </h5>

            </div>



            <div class=" col-lg-6 justify-content-end mr-3">

              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>

            </div>

          </div>

          <div class="d-lg-flex mt-2">

            <div class="col-lg-6">

              <label for="exampleFormControlTextarea1" class="form-label">Driver Notes</label>

              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>




            </div>



            <div class="col-lg-6 upload ">

              <form>

                <div class="row">

                  <div class="justify-content-center m-4 col-lg-3 ">

                    <label for="img" class="btn-lg btn-info " style="color: white;">Upload</label>

                    <input type="file" id="img" style="display:none">

                  </div>

                  <div class="col-lg mt-1">

                    <span style="margin-left: 10px;"><b>Attach a File</b></span>

                    <br>

                    <span style="font-size: 14px;">You can
                      Upload PDF,DOC,DOCX,PNG,JPG or JPEG file.</span>

                    <br>

                    <span style="font-size: 14px;">File must
                      not exceed 200MB</span>

                  </div>

                </div>

              </form>

            </div>

          </div>





        </div>



        <div class="row mt-4">

          <div class="col-lg d-grid">

            <button type="button" class="btn btn-dark btn-block my-1">Not a Rental
              Contract</button>

          </div>

          <div class="col-lg-7 d-grid">



          </div>

          <div class="col-lg-1 pe-0 d-grid">

            <button type="button" class="btn btn-danger btn-block my-1">Reset</button>

          </div>

          <div class="col-lg-1 d-grid">

            <button type="button" class="btn btn-primary btn-block my-1">Save</button>

          </div>

        </div>

      </div>

    </div>

  </div>
  <!--Notes End-->

  <!--Subscription -->
  <div class="container tabcontent" :class="{ active: activeTab === 'Subscriptions' }" id="subscriptions">
    <div class="row sub-head-row p-3">
      <div class=" mt-3 col-lg-12 col-sm-12 ">
        <div class="pb-0 ">

          <div class="col-lg-8 mb-3 d-flex align-items-center">

            <h5>Subscription of Sam John </h5>
          </div>
          <ul class="nav nav-tabs subs-bar">
            <li class="nav-item">
              <a class="nav-link me-4" href="#">Overview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4" href="#">Invoices</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4" href="#">Customer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4 " href="#">History</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 col-lg-6 notification-div">

        <div class="row mt-3 p-3 border-0 " id="n1">Notifications
        </div>
        <div class="row p-3  notification-row" id="n2">
          <div class="alert " role="alert">
            <div class="row align-items-center">
              <div class="col-lg-1 col-2 row-cols-sm-3">
                <i class="fa-regular fa-circle-xmark me-2 text-danger not-icn"></i>
              </div>
              <div class="col-lg-8 col-6">

                <span class="text-danger ">
                  <strong> Payment
                    Failure!</strong>
                  <br>Please check your payment method.
                </span>

              </div>
              <div class="col-lg-3 col-4 p-0 "><button type="button" class="btn  border-danger text-danger px-3 py-2">Fix
                  Now</button></div>
            </div>
          </div>
        </div>
        <div class="row mt-0 p-3  notification-row" id="n2">
          <div class="alert " role="alert">
            <div class="row align-items-center">
              <div class="col-lg-1 col-2 row-cols-sm-3">
                <img src="../assets/img/ext-icn.svg" alt="icon" class="icn">
              </div>
              <div class="col-lg-8 col-6 "><strong><span class="text-warning">Crash Detected!</span></strong>
                <br>We detected a crashed vehicle.
              </div>
              <div class="col-lg-3 col-4 p-0 "><button type="button"
                  class="btn  border-warning text-warning px-3 py-2">Call Now</button></div>
            </div>
          </div>
        </div>
        <div class="row mt-0 p-3  notification-row" id="n2">
          <div class="alert " role="alert">
            <div class="row align-items-center">
              <div class="col-lg-1 col-2 row-cols-sm-3">
                <img src="../assets/img/mis-icn.svg" alt="icon" class="icn">
              </div>
              <div class="col-lg-8 col-6 "><strong><span class="text-primary">Missing Contact Number!</span></strong>
                <br><span>Please fill up the missing contact detail.</span>
              </div>
              <div class="col-lg-3 col-3 p-0"><button type="button"
                  class="btn  border-primary text-primary px-3 py-2 fs-16">Check Now</button></div>
            </div>
          </div>
        </div>


        <div class="row mt-3">
          <div class="main-card ">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <span class="text-start">
                    <h5>My Plan</h5>
                  </span>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-lg-6">
                  <button type="button" class="text-light me-2 orng weekly-btn">WEEKLY</button>
                  <strong>Plan</strong>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-lg-4 col-6 mb-3">
                  <p class="fs-25"><sup>$</sup><span class="fs-45">25</span><sub>/month</sub></p>

                </div>
                <div class="col-lg-8 col-6 ">
                  <p class="mb-3 text-muted">Next Payment</p>
                  <p><b>on November 31, 2022</b></p>
                </div>
                <div>
                  <a class="btn-grade mb-2">
                    <img src="../assets/img/circle-right.png"> Upgrade Plan
                  </a>
                  <a class="btn-mng">
                    <img src="../assets/img/carbon.png"> Manage Payments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="main-card ">
            <div class="container">
              <div class="row align-items-start table-responsive">

                <ul class="card-details">
                  <li class="mb-4"><b>Subscription Charges</b></li>
                </ul>

                <table class="table table-borderless">
                  <thead class="fs-18 mb-5">
                    <th class="pb-4" scope="col">Details</th>
                    <th class="pb-4 text-end" scope="col">Weekly</th>
                    <th class="pb-4 text-end" scope="col">Qty</th>
                    <th class="pb-4 text-end" scope="col">Total</th>
                  </thead>
                  <tbody class="fs-20">
                    <tr>
                      <td class="pb-4" scope="row">Car Fee</td>
                      <td class="text-end">$20</td>
                      <td class="text-end">1</td>
                      <td class="text-end">$20.00</td>
                    </tr>
                    <tr>
                      <td class="pb-4" scope="row">Insurance</td>
                      <td class="text-end">$100</td>
                      <td class="text-end">1</td>
                      <td class="text-end">$100.00</td>
                    </tr>
                    <tr>
                      <td scope="row"></td>
                      <td class="text-end" colspan="2">SUB TOTAL:</td>
                      <td class="text-end">$120.00</td>
                    </tr>
                    <tr>
                      <td class="pb-4" scope="row"></td>
                      <td class="text-end" colspan="2">TAX (GST 10% INCL):</td>
                      <td class="text-end">$14.00</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <th class="fs-25" colspan="2">WEEKLY TOTAL:</th>
                      <th class="fs-25 text-end grn">$134.00</th>
                    </tr>
                  </tbody>
                </table>


                <div class="row mt-3">
                  <div class="row-cols-5">

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="main-card mb-5 ">
            <div class="row mb-5">
              <div class="col-lg-6 col-6">
                <h5> Payment Method </h5>
              </div>
              <div class="col-lg-6 col-6 text-end"><i class="fa-regular fa-square-plus blu"></i></div>


            </div>


            <img src="../assets/img\master-card.png" alt="mastercard" class="rounded mx-auto d-block mb-3 masCard">

            <ul type="none">
              <li class="d-flex align-items-center">
                <img src="../assets/img\mastercard-logo.png" class=" mb-2">
                <div class="ms-2"><span>**** **** **** 9978 Mastercard</span>
                  <p><b>$482.00</b></p>
                </div>
                <i class="fa-solid fa-ellipsis-vertical ms-auto sblu"></i>

              </li>
              <hr>
              <li class="d-flex align-items-center">
                <img src="../assets/img\visa-logo.png" class=" mb-2">
                <div class="ms-2"><span>**** **** **** 9978 Mastercard</span>
                  <p><b>$482.00</b></p>
                </div>
                <i class="fa-solid fa-ellipsis-vertical ms-auto sblu"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-6 pe-0">
        <div class="main-card p-0 mt-3">
          <div class="row align-items-center">
            <div class="col-md-6 " id="i1">
              <img src="../assets/img/white_car.png" class="img-fluid img-bg" width="100%">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">Tesla Model-Y</h5>
                <p class="card-text">Make Model:<small class="text-muted"> 2014</small>
                  <br> Registered State:<small class="text-muted"> NSW</small><br>
                  Color: <small class="text-muted">White</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3 row-cols-1 row-cols-sm-3 g-1">
          <div class="col ">
            <div class="card card-red img-thumbnail border-0">
              <div class="percent">
                <svg id="c1">
                  <circle cx="90" cy="90" r="60"></circle>
                  <circle cx="90" cy="90" r="60" style="--percent: 50"></circle>
                </svg>
                <div class="number d-flex flex-column">
                  <img src="../assets/img/meter.png">
                  <div class="text-danger h4 mb-0">8000 </div>
                  <div class=" text-muted text-center">RPM</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card card-blu img-thumbnail border-0">
              <div class="percent">
                <svg id="c2">
                  <circle cx="90" cy="90" r="60"></circle>
                  <circle cx="90" cy="90" r="60" style="--percent: 30"></circle>
                </svg>
                <div class="number d-flex flex-column">
                  <img src="../assets/img/speedometer.png" alt="">
                  <div class="text-danger h4 mb-0">50 </div>
                  <div class=" text-muted text-center">Km/h</div>


                </div>
              </div>

            </div>
          </div>
          <div class="col ">
            <div class="card card-grn img-thumbnail border-0">
              <div class="percent">
                <svg id="c3">
                  <circle cx="90" cy="90" r="60"></circle>
                  <circle cx="90" cy="90" r="60" style="--percent: 35"></circle>
                </svg>
                <div class="number d-flex flex-column">
                  <img src="../assets/img/fire.png">
                  <div class="text-danger h4 mb-0">60% </div>
                  <div class=" text-muted text-center">Fuel</div>


                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="main-card mt-3">
          <div class="card-body">
            <div class="row g-0">
              <div class="col-lg-10">
                <h6><strong>Swap Subscription Vehicle</strong></h6>
                <div class="strong text-dark h6 mt-3">Tesla is not currently entitled to a
                  free swap.</div>
                <div class="text-dark">A new agreement will be generated if you select to
                  swap their subscription vehicle.</div>
              </div>
              <div class="col-lg-2 text-end">
                <label class="switch1">
                  <input type="checkbox" checked>
                  <span class="slider1 round"></span>
                </label>
              </div>
              <div class="col-lg-12">
                <div class="mt-3 h6"><strong>Current vehicle</strong>

                  <div class="card mt-5 mb-3 border-0">
                    <div class="row g-0">
                      <div class="col-md-3 align-self-center   img-bg">
                        <img src="../assets/img\white_car.png" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-6">
                        <div class="ms-3">
                          <div>
                            <h5 class="card-title fs-18"><b>Tesla - Model Y</b><span
                                class="badge bg-info text-light ms-2 fs-11">SUBSCRIBED</span>
                            </h5>
                          </div>
                          <ul type="none" class="card-details mb-0">
                            <li class="mt-2">Make Model: <span class="text-muted">2014</span></li>
                            <li class="mt-2">Registered State: <span class="text-muted">NSW</span></li>
                            <li class="mt-2">Color: <span class="text-muted">White</span></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3 text-end">
                        <h4>$0</h4>
                        <h5>Weekly</h5>
                        <p class="text-muted">Vehicle only</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="mt-3  h6 "><strong>Swap to</strong>
                  <div class="card mt-5 mb-3 border-0">
                    <div class="row g-0">
                      <div class="col-md-3 align-self-center   img-bg">
                        <img src="../assets/img/car-full-img.png" class="img-fluid ms-4">
                      </div>
                      <div class="col-md-6">
                        <div class="ms-3">
                          <div>
                            <h5 class="card-title fs-18"><b>Range Rover Sport</b></h5>
                          </div>
                          <ul type="none" class="card-details mb-0">
                            <li class="mt-2">Make Model: <span class="text-muted">2020</span></li>
                            <li class="mt-2">Registered State: <span class="text-muted">NSW</span></li>
                            <li class="mt-2">Color: <span class="text-muted">black</span></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3 text-end">
                        <h4>$0</h4>
                        <h5>Weekly</h5>
                        <p class="text-muted">Vehicle only</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-3  h6 text-center"><strong>No Swap Fee + $0 per week</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="main-card mt-3">
          <div class="card-body">
            <div class="row g-0">
              <div class="col">
                <h5><strong> Subscription </strong><span class="badge ms-2 ">Active</span></h5>
                <ul type="none" class="card-details">
                  <li class="mt-3">Name: <span class="text-muted">BXC30A</span></li>
                  <li class="mt-2">Security Deposit: <span class="text-muted">$600.00</span>
                  </li>
                  <li class="mt-2">Maximum Distance: <span class="text-muted">400
                      Km</span></li>
                  <li class="mt-2">Start Date: <span class="text-muted">08/04/2016
                      09:00 AM</span></li>
                  <li class="mt-2">End Date: <span class="text-muted ">08/04/2024
                      09:00 AM</span></li>
                  <div class="pt-4">
                    <h6><i class="fa-regular fa-circle-check grn"></i> Contract Signed on 07/04/2016 11:00 PM</h6>
                  </div>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 mt-3 mb-5 main-card">
          <div>
            <h5><strong> History </strong></h5>

          </div>
          <div class="row align-items-center mt-2">
            <div class="col-3 text-right">
              <p>January 10, 2022</p>
              <p>12:09 PM</p>
            </div>
            <div class="col-1">
              <div class="history-dot" style="background-color: #083EA1"></div>
            </div>
            <div class="col-8">
              <h5>Invoice Paid</h5>
              <p>Paid $120.00 billed as Invoive #123900</p>
            </div>
          </div>

          <div class="row align-items-center mt-2">
            <div class="col-3 text-right">
              <p>January 10, 2022</p>
              <p>12:09 PM</p>
            </div>
            <div class="col-1">
              <div class="history-dot" style="background-color: #00AEEF;"></div>
            </div>
            <div class="col-8">
              <h5>Invoice Paid</h5>
              <p>Paid $120.00 billed as Invoive #123900</p>
            </div>
          </div>

          <div class="row align-items-center mt-2">
            <div class="col-3 text-right">
              <p>January 10, 2022</p>
              <p>12:09 PM</p>
            </div>
            <div class="col-1">
              <div class="history-dot " style="background-color: #11B826;"></div>
            </div>
            <div class="col-8">
              <h5>Invoice Paid</h5>
              <p>Paid $120.00 billed as Invoive #123900</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Subscription End-->

  <!--Notifications Start -->
  <div class="container tabcontent " :class="{ active: activeTab === 'Notifications' }" id="Notifications">
    <div class="row my-2 align-items-center sub-head-row-2  ">
      <div class="col-lg-6">
        <h5><b>All SMS sent to Sam John</b></h5>
      </div>
      <div class="col-lg-6 d-flex justify-content-end align-items-center">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search....">
        </div>
        <div class="col-lg-3 d-flex justify-content-end">
          <h8 class="text-muted"><b>Total Cost: $0</b></h8>
        </div>
      </div>
    </div>
    <div class="row my-4 ">
      <div class="col-lg-4 px-0 pe-2">
        <div class="main-card">
          <div class="row">
            <div class="col-lg-25">
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet,consecutur adipiscing elit.Est hac
                  non scelerisque mi,nibh.Nisl metus,telllus egestas sem erat pellentesque turpis
                  semper pharetra.</p>
                <h6 class="card-subtitle mb-2 text-muted"><b>Dec 21,2022</b></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 px-0 pe-2">
        <div class="main-card">
          <div class="row">
            <div class="col-lg-25">
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet,consecutur adipiscing elit.Est hac
                  non scelerisque mi,nibh.Nisl metus,telllus egestas sem erat pellentesque turpis
                  semper pharetra.</p>
                <h6 class="card-subtitle mb-2 text-muted"><b>Dec 21,2022</b></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 px-0">
        <div class="main-card">
          <div class="row">
            <div class="col-lg-25">
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet,consecutur adipiscing elit.Est hac
                  non scelerisque mi,nibh.Nisl metus,telllus egestas sem erat pellentesque turpis
                  semper pharetra.</p>
                <h6 class="card-subtitle mb-2 text-muted"><b>Dec 21,2022</b></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Notifications End-->

  <!--Collection Start -->
  <div class="container tabcontent" :class="{ active: activeTab === 'Collection' }" id="Collection">
    <div class="row">
      <div class="col-lg-12 px-0">
        <div class="main-card pt-3">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-left">
              <h5>Driver Collection Notes <span class="badge"></span></h5>
            </div>
            <div class="col-lg-6 flex justify-content-end text-right ">
              <button type="button" class="btn btn-danger" id="recordAccidentClaimBtn" style="margin-bottom: 20px;">Record
                Accident
                Claim</button>
              <div style="width: 20px;"></div>
              <button type="button" class="btn btn-success" style="margin-bottom: 20px;">Download
                Authority Form</button>
            </div>

            <div class="row align-items-center">
              <div class="col-lg-6 ">
                <label for="exampleFormControlTextarea1" class="form-label">Driver Notes</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>


              </div>
              <div class="col-lg-6">
                <form class="p-2" style="border: 2px dashed skyblue; border-radius: 10px;">
                  <div class="form-group">

                    <label for="img" class="btn btn-info">Upload</label>
                    <span style="margin-left: 10px;"><b>Attach a File</b></span>
                    <p style="margin-left: 100px; font-size: 14px;">You can PDF,DOC,DOCX,PNG,JPG or JPEG file.</p>
                    <p style="margin-left: 100px; font-size: 14px;">File must not exceed 200MB</p>

                    <input type="file" id="img" style="display:none">


                  </div>
                </form>


              </div>



            </div>



          </div>
          <div class="row align-items-center">
            <div class="col-lg d-grid">
              <div class="input-group mb-3">

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Damage Claim amount</label>

                  <label class="visually-hidden" for="autoSizingInputGroup">Username</label>

                  <div class="input-group">
                    <div class="input-group-text">$</div>
                    <input type="text" class="form-control" id="exampleInputEmail1">
                  </div>
                </div>



              </div>
            </div>
            <div class="col-lg-7 d-grid">



            </div>

            <div class="col-lg-1 pe-0 text-end">

              <button type="button" class="btn btn-danger btn-block">Reset</button>

            </div>

            <div class="col-lg-1">

              <button type="button" class="btn btn-primary btn-block">Save</button>

            </div>

          </div>
        </div>
        <div class="row mt-3">


        </div>
      </div>
    </div>
    <!-- repoAccClaim Start-->
    <div class="repoAccClaim" id="codeDisplay" style="display: none;">
      <h5 class="mb-4">Report Accident Claim</h5>
      <form>
        <div class="row mb-4">
          <div class="col-md-4">
            <label for="dable" class="form-label"><b>Driveable:</b></label>
            <select class="form-control" id="dable">
              <option selected>Choose...</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>

          <div class="col-md-4">

            <div class="form-group">
              <label for="selRen" class="form-label"><b>Select Rental:</b></label>
              <select class="form-control" id="selRen">
                <option selected>Select customer</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>

            </div>
          </div>
          <div class="col-md-4">
            <label for="opname" class="form-label"><b>Other Party Name:</b></label>
            <input type="text" class="form-control" id="opname" placeholder="e.g.12345">
          </div>
        </div>

        <div class="row mb-4">

          <div class="col-md-4">
            <label for="opAddress" class="form-label"><b>Other Party Address:</b></label>
            <input type="text" class="form-control" id="opAddress" placeholder="e.g.12345">
          </div>

          <div class="col-md-4">
            <label for="oplnumber" class="form-label"><b>Other Party License Number:</b></label>
            <input type="text" class="form-control" id="oplnumber" placeholder="e.g.12345">
          </div>

          <div class="col-md-4">
            <label for="oprnumber" class="form-label"><b>Other Party Rego Number:</b></label>
            <input type="text" class="form-control" id="oprnumber" placeholder="e.g.12345">
          </div>
        </div>

        <div class="row mb-4">

          <div class="col-md-4">
            <div class="form-group">
              <label for="opiCompany" class="form-label"><b>Other Party Insurance Company:</b></label>
              <select class="form-control" id="opiCompany">
                <option selected>Select customer</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>

            </div>
          </div>

          <div class="col-md-4">
            <label for="clNumber" class="form-label"><b>Claim Number:</b></label>
            <input type="text" class="form-control" id="clNumber" placeholder="e.g.12345">
          </div>

          <div class="col-md-4">
            <label for="doAccident" class="form-label"><b>Date of Accident:</b></label>
            <input type="date" class="form-control" id="doAccident" placeholder="e.g.12345">
          </div>
        </div>

        <div class="row mb-4">

          <div class="col-md-4">
            <div class="form-group">
              <label for="porNumber" class="form-label"><b>Policy Report Number:</b></label>
              <select class="form-control" id="porNumber">
                <option selected>Select customer</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>

            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-12">
            <label for="desAccident" class="form-label"><b>Accident Description:</b></label>
            <textarea rows="4" class="form-control"
              id="desAccident">Accident Description
                                                                                                                            </textarea>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md-4">
            <div class="form-group p-2" style="margin: 6px; border: 2px dashed lightblue;">
              <label for="img" class="btn btn-info text-light">Upload 1</label>
              <span style="margin-left: 2px;"><b>Attach a File</b></span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group p-2" style="margin: 6px; border: 2px dashed lightblue;">
              <label for="img" class="btn btn-info text-light">Upload 2</label>
              <span style="margin-left: 2px;"><b>Attach a File</b></span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group p-2" style="margin: 6px; border: 2px dashed lightblue;">
              <label for="img" class="btn btn-info text-light">Upload 3</label>
              <span style="margin-left: 2px;"><b>Attach a File</b></span>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md-4">
            <div class="form-group p-2" style="margin: 6px; border: 2px dashed lightblue;">
              <label for="img" class="btn btn-info text-light">Upload 4</label>
              <span style="margin-left: 2px;"><b>Attach a File</b></span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group p-2" style="margin: 6px; border: 2px dashed lightblue;">
              <label for="img" class="btn btn-info text-light">Upload 5</label>
              <span style="margin-left: 2px;"><b>Attach a File</b></span>
            </div>
          </div>
        </div>

        <div class="flex justify-content-end text-right ">
          <button type="submit" class="btn btn-success" style="margin-bottom: 20px;background-color:#083EA1"><svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle"
              viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg> Confirm Details</button>
        </div>
      </form>
    </div>
    <!-- repoAccClaim End-->
  </div>

  <!--Collection End -->

  <!--Logbook Start-->
  <div class="container tabcontent" :class="{ active: activeTab === 'Logbook' }" id="Logbook">
    <div class="row">
      <div class="col-lg-6 ps-0 pe-2 ">
        <div class="main-card">
          <div class="row">
            <div class="col-lg-12 d-flex align-items-center">
              <h5>ENX04M(#54566) <span class="badge"></span></h5>
              <span class="icon-holder ms-auto">
                <img src="../assets/img/map-icn.png" alt="map">
              </span>
            </div>
          </div>
          <br>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center custom-container">
                <img src="../assets/img/white_car.png" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <ul class="card-body">
                  <li><b class="font-size-b">Trip Start Date:</b> <span class="font-size-text">2021-06-17 10:03:40</span>
                  </li>
                  <li><b class="font-size-b">Trip End Date:</b> <span class="font-size-text">
                      2021-06-17 10:11:41</span></li>
                  <li><b class="font-size-b">FBT Start ODO:</b> <span class="font-size-text">
                      40143</span></li>
                  <li><b class="font-size-b">FBT End ODO:</b> <span class="font-size-text">
                      42206</span></li>
                  <li><b class="font-size-b">Trip Reason:</b> <span class="font-size-text">
                      1009</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 ps-2 pe-0">
        <div class="main-card">
          <div class="row">
            <div class="col-lg-12 d-flex align-items-center">

              <h5>ENX04M(#54566)<span class="badge"></span></h5>
              <span class="icon-holder ms-auto">
                <img src="../assets/img/map-icn.png" alt="map">
              </span>
            </div>
          </div>
          <br>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center custom-container">
                <img src="../assets/img/white_car.png" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <ul class="card-body">
                  <li><b class="font-size-b">Trip Start Date:</b> <span class="font-size-text">2021-06-17 10:03:40</span>
                  </li>
                  <li><b class="font-size-b">Trip End Date:</b> <span class="font-size-text">
                      2021-06-17 10:11:41</span></li>
                  <li><b class="font-size-b">FBT Start ODO:</b> <span class="font-size-text">
                      40143</span></li>
                  <li><b class="font-size-b">FBT End ODO:</b> <span class="font-size-text">
                      42206</span></li>
                  <li><b class="font-size-b">Trip Reason:</b> <span class="font-size-text">
                      1009</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-6 ps-0 pe-2">
        <div class="main-card">
          <div class="row">
            <div class="col-lg-12 d-flex align-items-center">

              <h5>ENX04M(#54566)<span class="badge"></span></h5>
              <span class="icon-holder1 ms-auto">
                <img src="../assets/img/map-icn.png" alt="map">
              </span>

            </div>
          </div>
          <br>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center custom-container">
                <img src="../assets/img/white_car.png" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <ul class="card-body">
                  <li><b class="font-size-b">Trip Start Date:</b> <span class="font-size-text">2021-06-17 10:03:40</span>
                  </li>
                  <li><b class="font-size-b">Trip End Date:</b> <span class="font-size-text">
                      2021-06-17 10:11:41</span></li>
                  <li><b class="font-size-b">FBT Start ODO:</b> <span class="font-size-text">
                      40143</span></li>
                  <li><b class="font-size-b">FBT End ODO:</b> <span class="font-size-text">
                      42206</span></li>
                  <li><b class="font-size-b">Trip Reason:</b> <span class="font-size-text">
                      1009</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 ps-2 pe-0">
        <div class="main-card">
          <div class="row">
            <div class="col-lg-12 d-flex align-items-center">

              <h5>ENX04M(#54566)<span class="badge"></span></h5>
              <span class="icon-holder1 ms-auto">
                <img src="../assets/img/map-icn.png" alt="map">
              </span>

            </div>
          </div>
          <br>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center custom-container">
                <img src="../assets/img/white_car.png" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <ul class="card-body">
                  <li><b class="font-size-b">Trip Start Date:</b> <span class="font-size-text">2021-06-17 10:03:40</span>
                  </li>
                  <li><b class="font-size-b">Trip End Date:</b> <span class="font-size-text">
                      2021-06-17 10:11:41</span></li>
                  <li><b class="font-size-b">FBT Start ODO:</b> <span class="font-size-text">
                      40143</span></li>
                  <li><b class="font-size-b">FBT End ODO:</b> <span class="font-size-text">
                      42206</span></li>
                  <li><b class="font-size-b">Trip Reason:</b> <span class="font-size-text">
                      1009</span></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Logbook End-->
</template>

<style>
/* #dropdown-list {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
} */

#dropdown-list li {
  cursor: pointer;
}

#dropdown-icon {
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      activeTab: 'Personal Details',
      showDropdown: false
    }
  },
  methods: {
    openTab(cityName) {
      this.activeTab = cityName;
      console.log(cityName)
    }
  }


};
</script>
