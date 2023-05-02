<template>
    <!--container start-->
    <div class="container my-3">

        <div class="subhead">
            <div class="col-lg-12">
                <h5> Outstanding invoice</h5>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-4">
                        <p>
                            From <br>
                            MFA Motorways (Australia) Pty Ltd <br>
                            <span class="fw-bold"> Level 1, 5 George
                                North Strathfield NSW <br> 2137, AUSTRALIA <br></span>
                            <span class="fw-bold"> Phone: <span class="textColor"> 1300 885 367</span></span>
                        </p>
                    </div>
                    <div class="col-md-4">
                        <p>TO <br>
                            Daniel Romeiro <br>
                            The Oaks , NSW 2570 <br>
                            <span> Phone: <span class="textColor">0405843626</span></span>
                        </p>
                    </div>
                    <div class="col-md-4 d-flex justify-content-end">
                        <div>
                            <p class="fw-bold">TAX INVOICE <br>
                                #DR10821611195</p>
                            <p>24/01/2020</p>
                            <p class="fw-bold text-success">$133.95</p>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-12 table-responsive">
                        <table class="table ">
                            <thead class="">
                                <tr>
                                    <th scope="col">SKU</th>
                                    <th scope="col">Item Description</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">GST</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="">e-tolls</th>
                                    <td>6047779 / DXA52Z / 1003 / M5 <br> Motorway - HV, Hammondville <br> (Main) /
                                        2020-01-18
                                        11:02:35</td>
                                    <td>$14.45</td>
                                    <td>1</td>
                                    <td>$1.31</td>
                                    <td class="text-success">$14.45</td>
                                </tr>
                                <tr>
                                    <th scope="">a-fee</th>
                                    <td>Toll Notice Fee</td>
                                    <td>$14.45</td>
                                    <td>1</td>
                                    <td>$1.31</td>
                                    <td class="text-success">$14.45</td>
                                </tr>
                                <tr>
                                    <th scope="">a-fee</th>
                                    <td>Admin Fee</td>
                                    <td>$14.45</td>
                                    <td>1</td>
                                    <td>$1.31</td>
                                    <td class="text-success">$14.45</td>
                                </tr>
                                <tr>
                                    <th scope="">a-fee</th>
                                    <td>Admin Fee</td>
                                    <td>$14.45</td>
                                    <td>1</td>
                                    <td>$1.31</td>
                                    <td class="text-success">$14.45</td>
                                </tr>


                            </tbody>
                        </table>


                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-6">
                        <div>
                            <p class="fw-bold">Payment Mentods</p>
                            <div class="mt-3">
                                <span class="mx-2"><img src="../assets/img/visaicon.png" alt="visa icon"></span>
                                <span class="mx-2"><img src="../assets/img/picon2.png" alt="visa icon"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <div>
                            <p>SUB TOTAL: <span class="fw-bold">$130.3</span></p>
                            <p>Daily Service Fee: <span class="fw-bold">$3.30</span></p>
                            <p>TAX (GST 10% INCL): <span class="fw-bold">$12.17</span></p>
                            <p>GIFT CARD: <span class="fw-bold">$0.00</span></p>
                            <p>PAID AMOUNT: <span class="fw-bold">$0.00</span></p>
                            <p class="my-2 fw-bold">TOTAL DUE: <span class="text-success">133.95</span></p>
                            <div class="my-2">
                                <button class="payBtn btn px-3"> <span class="mx-2"><img src="../assets/img/carbon_money.png"
                                            alt=""></span>
                                    PayNow</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>



    </div>
</template>
  
<style scoped>
.textColor {
    color: #2388FF
}

.table>tbody>tr:nth-of-type(odd) {
    background: #F7F7F7 !important;

}

.table>tbody>tr:nth-of-type(even) {
    background: #fff !important;

}

.payBtn {
    /* Success */

    background: #11B826;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
}
</style>
  
<script>
export default {
    data() {
        return {
            paymentType: 'visa'
        }
    }
}
</script>
  