
<template>
    <!-- single item -->
    <div class="single__qr">
        <h3>DB24CZ</h3>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Dymo Print
        </button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Print Qr</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="paQ">To print the QR code you would need the following device: DYMO LabelWriter 450 Duo.</p>
                    <div class="mb-3">
                        <label for="select" class=" modalLabel">Statement of</label>
                        <select class="form-select stSelect" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </div>
                <div class="my-3 d-flex justify-content-center">

                    <button type="button" class="btn mx-2 canBtn" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                    <button type="button" class="btn mx-2 sendBtn">Print</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
</template>
<style scoped>
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
    max-width: 100% !important
}

.form-select {
    width: 100% !important;
    max-width: 100% !important
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
    border-bottom: 1px solid #F9FAFC;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}

.paQ {

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */

    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Black 100% */

    color: #000000;
}

.canBtn {
    background: #F4F4F4 !important;
    border-radius: 4px !important;
    font-weight: 600 !important;
    color: #000000 !important;
}
</style>
<script >
export default {
    name: 'QrCard',
}
</script>
