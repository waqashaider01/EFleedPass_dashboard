
<template>
    <div class="card  carCard">
        <div class="chead d-flex justify-content-between p-2">
            <p class="fw-bold">001</p>
            <span class="eyeIcon">
                <a href="#">
                    <img src="assets/img/icons/carbon_view-success.svg" alt="icon" />

                </a>
            </span>
        </div>

        <div class="p-4 d-flex flex-row">
            <div class="imageCon p-3 me-2">
                <img class="bcarImg" src="assets/img/cars/big.png" alt="">
            </div>
            <div>
                <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit auctor a,
                    ornare
                    sed.</p>
                <p class="text-muted mb-1">Level 1, 5 George
                    North Strathfield NSW 2137, AUSTRALIA
                </p>
                <p class="pText mt-1">$10.76</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.imageCon {
    background: #E1E5F2;
    border-radius: 14px;
    width: fit-content;
    height: fit-content;
}

.bcarImg {
    width: 100px;
}

.pText {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Primary 2 */

    color: #00AEEF;
}

.carCard {
    border: 1px solid #E8E8E8;
    border-radius: 14px;
}

.chead {
    background: #F9FAFC;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
}
</style>
<script>
export default {
    name: 'AsserVC.vue',
}
</script>
