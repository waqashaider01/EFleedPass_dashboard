
<template>
    <div class="main-card padding-card">
        <div class=" bg-row d-flex my-auto align-items-center">
            <h3 class="ch mx-2">DR10821611195</h3>
            <small class="alert alert-danger px-2 cp mt-3">Unpaid</small>
        </div>
        <div class="details">
            <p class="dp">Subject <span class="text-muted ">Bonnet Repair</span></p>
            <p class="dp">Type <span class="text-muted ">New</span></p>
            <p class="dp">Last Repair <span class="text-muted ">2020-11-11</span></p>
            <p class="dp">Last Activity<span class="text-muted ">2020-11-11</span></p>

        </div>

    </div>
</template>

<script >
export default {
    name: 'TicketCard',
}
</script>
<style scoped>
.ch {
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

.cp {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    /* Orange/500 */

    color: #AA5B00 !important;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    width: fit-content;
    width: 63px;
    height: 20px;
}

.dp {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Black 100% */

    color: #000000;

}
</style>