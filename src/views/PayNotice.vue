<template>
    <!--container start-->
    <div class="container my-3">
     
        <div class="subhead">
            <div class="col-lg-12">
                <h5>Pay All Outstanding invoice</h5>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Invoice Details
            </div>
            <div class="card-body row p-3 d-flex">
                <div class="col-md-3 ">
                    <small>
                        <span>Invoice Number:</span><br>
                        <span>Invoice Date:</span><br>
                        <span>Total Un-paid Toll:</span><br>
                        <span>Daily Service Fee:</span><br>
                        <span>Tax(GST 10% Incl):</span><br>
                        <span>Gift Card:</span><br></small>
                    <h6 class="totamo">Total Amount:</h6>
                </div>
                <div class="col-md-9">
                    <small>
                        <span>#DR10821611195</span><br>
                        <span>24/01/2020</span><br>
                        <span>$130.65</span><br>
                        <span>$3.30</span><br>
                        <span>$12.17</span><br>
                        <span>$0.00</span><br>
                    </small>
                    <h6 class="totamo" style="color: rgb(26, 237, 26);">$133.95</h6>
                </div>
            </div>
        </div>
        <div class="payNow my-4 ">
            <form class="row g-3">

                <div class="subhead">
                    <h6>All Toll bill till Date: 21/09/2022 for Sam John</h6>
                </div>

                <div class="col-md-12">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked
                            value="visa" v-model="paymentType">
                        <label class="form-check-label" for="inlineRadio1"><img src="../assets/img/visa.jpeg"><img
                                src="../assets/img/mastercard.jpeg"></label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="bank" v-model="paymentType">
                        <label class="form-check-label" for="inlineRadio2"><img src="../assets/img/banklogo.jpeg"> Bank
                            Payment</label>
                    </div>
                    <div class="bankPay row g-3" id="BankInfo" v-if="paymentType === 'bank'">
                        <div class="col-md-4">
                            <label for="name" class="form-label">Account Name</label>
                            <input type="text" class="form-control" id="name">
                        </div>

                        <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4">
                        </div>

                        <div class="col-md-4" id="container">
                            <label for="autoSizingInputGroup" class="form-label">Account Number</label>
                            <label class="visually-hidden" for="autoSizingInputGroup"></label>
                            <div class="input-group">
                                <div class="input-group-text"><img src="../assets/img/banklogo.jpeg" width="70%" height="80%"></div>
                                <input type="text" class="form-control" id="autoSizingInputGroup"
                                    placeholder="000 000 0000">
                            </div>
                        </div>

                        <p>
                            By providing your bank account details and confirming this payment, you agree to this Direct
                            Debit Request service
                            agreement, and authorise Stripe Payment Australia Pty Ltd ACN 160 180 343 Direct Debit User ID
                            number 507156("Stripe")to debit your account through the
                            Bulk Electronic Clearing System (BECS) on behalf of MFA Motorways (Australia)Pyt Ltd(the
                            "Merchant")for any amount separately communicated to you
                            by the Merchant. You certify that you are either an account holder or an authorised signatory on
                            the account listed above.
                        </p>

                        <div class="mt-4 mb-4 d-flex flex-column flex-md-row justify-content-between">

                            <button type="submit" class="btn btn-success success">Pay Now($133.95) </button>

                        </div>
                    </div>


                </div>





                <div class="visaPay row g-3" id="VisaInfo" v-if="paymentType === 'visa'">

                    <div class="col-md-4">
                        <label for="name" class="form-label">Account Name</label>
                        <input type="text" class="form-control" id="name">
                    </div>

                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>
                    <div class="col-md-4">
                        <label for="phoneNumber" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="phoneNumber" pattern="[1-9]{1}[0-9]{9}">
                    </div>

                    <div class="col-md-4">
                        <label for="autoSizingInputGroup" class="form-label">Add a credit card</label>
                        <label class="visually-hidden" for="autoSizingInputGroup"></label>
                        <div class="input-group">
                            <div class="input-group-text"><img src="../assets/img/mastercard.jpeg" width="70%" height="80%"></div>
                            <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="000 000 0000">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="expdate" class="form-label">Expiry Date</label>
                        <input type="date" class="form-control" id="expdate">
                    </div>
                    <div class="col-md-4">
                        <label for="cvc" class="form-label">CVC</label>
                        <input type="text" class="form-control" id="cvc" placeholder="CVC">
                    </div>


                    <div class="mt-4 mb-4 d-flex justify-content-between">

                        <p>This transaction will incur a non-refundable surcharge of 2.5% upon successful
                            processing.International cards 3.5% </p>
                        <button type="submit" class="btn btn-success success">Pay Now($133.95) </button>

                    </div>


                </div>

            </form>
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
export default {
    data() {
        return {
            paymentType: 'visa'
        }
    }
}
</script>
  