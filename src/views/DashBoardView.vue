

<template>
  <div class="container my-3">
    <div class="row mt-5 mb-3 align-items-center">

      <div class="col-lg-10 mt-5">

        <h5>Profile Completion</h5>

        <p class="text-secondary">Please complete your profile</p>

      </div>

    <!-- <div class="col-lg-2 text-end ">

        <i class='previous round fas fa-angle-left' style='font-size:24px'></i>

              <i class='next round fas fa-angle-right' style='font-size:24px'></i>

                          </div> -->

    </div>
  </div>

  <div class="container">

    <div class="row align-items-center">

      <div class="col-lg-4 ">

        <div class="main-card border-0">

          <div class="row">

            <div class="col-lg-6 d-flex align-items-center">

              <div class="tt_color">
                <h5><b>Wellcome Joe,</b></h5>

                <p class="text-secondary"><small>Good Morning!</small></p>

              </div>



            </div>

            <div class="col-lg-6">

              <div class="card border-0">

                <div class="percent">

                  <svg class="circle-high">

                    <circle cx="90" cy="90" r="60"></circle>

                    <circle cx="90" cy="90" r="60" style="--percent: 30"></circle>

                  </svg>

                  <div class="number d-flex flex-column num-trans text-center">

                    <h4>50<span>%</span></h4>
                    <p class="text-muted">complete</p>

                  </div>

                </div>

              </div>

            </div>

          </div>



        </div>

      </div>



      <div class="col-lg-4  ">

        <div class="main-card border-0 my-lg-0 my-3 card-padding">

          <div id="carousel-slider" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators carousel-slider-indicators">
              <button type="button" data-bs-target="#carousel-slider" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carousel-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carousel-slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div>
                  <h5>Email</h5>

                  <p class="text-secondary mb-1"><small>Complete your email so, we can verify your
                      profile.</small></p>
                </div>

                <div class="verifybtn rounded">

                  <button type="button" class="verifybtn btn-block ">Verify Now</button>

                </div>
              </div>
              <div class="carousel-item">
                <div>
                  <h5>Email</h5>

                  <p class="text-secondary mb-1"><small>Complete your email so, we can verify your
                      profile.</small></p>
                </div>

                <div class="verifybtn rounded">

                  <button type="button" class="verifybtn btn-block ">Verify Now</button>

                </div>
              </div>
              <div class="carousel-item">
                <div>
                  <h5>Email</h5>

                  <p class="text-secondary mb-1"><small>Complete your email so, we can verify your
                      profile.</small></p>
                </div>

                <div class="verifybtn rounded">

                  <button type="button" class="verifybtn btn-block ">Verify Now</button>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="col-lg-4 ">

        <div class="main-card border-0 card-padding d-flex align-items-center">

          <div class="flex-grow-1">
            <h5>Scan Apple Pass</h5>

            <p class="text-secondary mb-3"><small>Scan this QR code to verify your data.</small></p>
          </div>

          <div class="flex-grow-1 align-self-end">
            <img :src="imageUrl" alt="scan" class="img-fluid">
          </div>



        </div>

      </div>

    </div>

  </div>

  <div class="container mt-3">

    <div class="row">

      <div class="col-lg-4">

        <div class="main-card">

          <p>Weather Widget </p>

          <!-- Weather wedges -->

        </div>

      </div>

      <div class="col-lg-4">

        <div class="main-card">

          <p>Clock Widget </p>

          <!-- Clock wedges -->

        </div>

      </div>

      <div class="col-lg-4">

        <div class="main-card">

          <p>Calender Widget </p>

          <!-- Calander wedges -->

        </div>

      </div>



    </div>
  </div>

  <div class="container mt-3">



    <div class="row">

      <div class="col-lg-6 ps-0">

        <div class="names">

          <div class="row">

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/pp.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Peter Herbert Barnaba</h6>

            </div>

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/lisa.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Lisa</h6>

            </div>

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/chri.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Chris Patt</h6>

            </div>

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/julie.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Julie Roberts</h6>

            </div>

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/kris.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Kristen</h6>

            </div>



          </div>

          <div class="row mt-3">

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/peteer.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Peter Herbert Barnaba</h6>

            </div>

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/lisaa.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Lisa</h6>

            </div>

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/cc.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Chris Patt</h6>

            </div>

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/dd.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Julie Roberts</h6>

            </div>

            <div class="col us-profile mt-lg-0 mt-3">

              <div class="text-center"><img class="pet" src="../assets/img/ee.jpg" alt=""></div>

              <h6 class="text-secondary mt-2 text-center">Kristen</h6>

            </div>



          </div>



        </div>

      </div>



      <div class="col-lg-6 pe-0">

        <div class="rec">

          <div class="row">

            <div class="Recent">

              <h6>Recent Rentals</h6>

            </div>

          </div>

          <div class="Recent row mt-2 mb-3">

            <div class="col-lg-10">

              <p class="second_section"><b>Utimate Luxury Car Rentals Pty Ltd. | LDV-RA </b></p>

              <p class="second_sec"><small>Start Date: May 12, 2021 | End Date: May 20, 2021</small>
              </p>

            </div>

            <div class="col-lg-2"><img class="aa" src="../assets/img/aa.jpg" alt=""></div>

          </div>

          <div class="Recent row mb-3">

            <div class="col-lg-10">

              <p class="second_section"><b>Utimate Luxury Car Rentals Pty Ltd. | LDV-RA </b></p>

              <p class="second_sec"><small>Start Date: May 12, 2021 | End Date: May 20, 2021</small>
              </p>

            </div>

            <div class="col-lg"><img class="aa" src="../assets/img/bb.jpg" alt=""></div>

          </div>

          <div class="Recent row mb-3">

            <div class="col-lg-10">

              <p class="second_section"><b> Utimate Luxury Car Rentals Pty Ltd. | LDV-RA </b></p>

              <p class="second_sec"><small>Start Date: May 12, 2021 | End Date: May 20, 2021</small>
              </p>

            </div>

            <div class="col-lg-2"><img class="aa" src="../assets/img/aa.jpg" alt=""></div>

          </div>

          <div class="Recent row mb-3">

            <div class="col-lg-10">

              <p class="second_section"><b>Utimate Luxury Car Rentals Pty Ltd. | LDV-RA </b></p>

              <p class="second_sec"><small>Start Date: May 12, 2021 | End Date: May 20, 2021</small>
              </p>

            </div>

            <div class="col-lg-2"><img class="aa" src="../assets/img/bb.jpg" alt=""></div>

          </div>

        </div>

      </div>

    </div>

  </div>



  <div class="container">

    <div class="row mt-3">

      <div class="col-lg-4 mt-4">

        <div class="reg_driver row">

          <ul class="list-group list-group-horizontal align-items-center justify-content-between">

            <li class="list-group-item list-num">027</li>

            <li class="list-group-item list-text">Registered Driver</li>

          </ul>

        </div>

        <div class="con_earn row mt-4">

          <ul class="list-group list-group-horizontal align-items-center justify-content-between">

            <li class="list-group-item list-num">$20</li>

            <li class="list-group-item list-text">Connect Earn</li>

          </ul>

        </div>

      </div>

      <div class=" col-lg-8 mt-4 pe-0">

        <div id="carouselExampleCaptions" class=" carousel slide" data-bs-ride="carousel">

          <div class="carousel-indicators">

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>

          </div>

          <div class="carousel-inner">

            <div class="carousel-item active cararea">

              <img src="../assets/img/car.png" class=" d-block mx-auto" alt="...">

              <div class=" labal carousel-caption d-none d-lg-block ">

                <h5 style="color: white;">NEED TO RENT CARS?</h5>



              </div>

            </div>

            <div class="carousel-item cararea">

              <img src="../assets/img/car.png" class="d-block mx-auto" alt="...">

              <div class="labal carousel-caption d-none d-lg-block mb-0">

                <h5 style="color: white;">NEED TO RENT CARS?</h5>

              </div>

            </div>

          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">

            <span class="carousel-control-prev-icon" aria-hidden="true"></span>

            <span class="visually-hidden">Previous</span>

          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">

            <span class="carousel-control-next-icon" aria-hidden="true"></span>

            <span class="visually-hidden">Next</span>

          </button>

        </div>

      </div>

    </div>

  </div>

  <div class="container mb-5">



    <div class="">

      <div class="row d-flex align-items-baseline ">

        <div class="add_new col-lg d-flex justify-content-center mt-5">

          <button class="bt btn text-white "><i class="fa fa-plus-circle"></i>

            <p class="my-3"><b>Add New Renta</b></p>

            <div class="sec_sec"><small>New Rental</small></div>

          </button>

        </div>



        <div class="end_rent col-lg d-flex justify-content-center mt-5">

          <button class="bt btn text-white"><i class="fa fa-plus-circle"></i>

            <p class="my-3"><b>End Rent</b></p>

            <div class="sec_sec"><small>Complete Rent</small></div>

          </button>

        </div>

        <div class="start_con col-lg d-flex justify-content-center mt-5">

          <button class="bt btn text-white"><i class="fa fa-plus-circle"></i>

            <p class="my-3"><b>Start Condition Report</b></p>

            <div class="sec_sec"><small>Vehicle Condition Report</small></div>

          </button>

        </div>

        <div class="view_usage col-lg d-flex justify-content-center mt-5">

          <button class="bt btn text-white"><i class="fa fa-plus-circle"></i>

            <p class="my-3"><b>View Usage Statements</b></p>

            <div class="sec_sec"><small>Usage Statemets</small></div>

          </button>

        </div>

        <div class="manage_tag col-lg d-flex justify-content-center mt-5">

          <button class="bt btn text-white"><i class="fa fa-plus-circle"></i>

            <p class="my-3"><b>Manage Tag</b></p>

            <div class="sec_sec text-white"><small>Tags Management</small></div>

          </button>

        </div>

      </div>

    </div>

  </div>
</template>
<script >
export default {
  name: 'DashboardView',
   data() {
    return {
      imageUrl: "../img/iphone-scan.png"
    }
  }
}
 
</script>
