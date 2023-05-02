
<template>
    <div class="main-card padding-card ">
        <div class=" bg-row d-flex my-auto align-items-center justify-content-between px-2 py-2">

            <h3 class="ch ">DR10821611195</h3>
            <small class="alert alert-danger px-2 cp mt-3">Unpaid</small>
            <div class="d-flex justify-content-between">
                <button class="btn"><svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.4698 5.83C14.8817 4.30882 13.8608 2.99331 12.5332 2.04604C11.2056 1.09878 9.62953 0.561286 7.99979 0.5C6.37005 0.561286 4.79398 1.09878 3.46639 2.04604C2.1388 2.99331 1.11787 4.30882 0.529787 5.83C0.490071 5.93985 0.490071 6.06015 0.529787 6.17C1.11787 7.69118 2.1388 9.00669 3.46639 9.95396C4.79398 10.9012 6.37005 11.4387 7.99979 11.5C9.62953 11.4387 11.2056 10.9012 12.5332 9.95396C13.8608 9.00669 14.8817 7.69118 15.4698 6.17C15.5095 6.06015 15.5095 5.93985 15.4698 5.83ZM7.99979 10.5C5.34979 10.5 2.54979 8.535 1.53479 6C2.54979 3.465 5.34979 1.5 7.99979 1.5C10.6498 1.5 13.4498 3.465 14.4648 6C13.4498 8.535 10.6498 10.5 7.99979 10.5Z"
                            fill="#11B826" />
                        <path
                            d="M8 3C7.40666 3 6.82664 3.17595 6.33329 3.50559C5.83994 3.83524 5.45543 4.30377 5.22836 4.85195C5.0013 5.40013 4.94189 6.00333 5.05765 6.58527C5.1734 7.16721 5.45912 7.70176 5.87868 8.12132C6.29824 8.54088 6.83279 8.8266 7.41473 8.94236C7.99667 9.05811 8.59987 8.9987 9.14805 8.77164C9.69623 8.54458 10.1648 8.16006 10.4944 7.66671C10.8241 7.17336 11 6.59334 11 6C11 5.20435 10.6839 4.44129 10.1213 3.87868C9.55871 3.31607 8.79565 3 8 3ZM8 8C7.60444 8 7.21776 7.8827 6.88886 7.66294C6.55996 7.44318 6.30362 7.13082 6.15224 6.76537C6.00087 6.39991 5.96126 5.99778 6.03843 5.60982C6.1156 5.22186 6.30608 4.86549 6.58579 4.58579C6.86549 4.30608 7.22186 4.1156 7.60982 4.03843C7.99778 3.96126 8.39992 4.00087 8.76537 4.15224C9.13082 4.30362 9.44318 4.55996 9.66294 4.88886C9.8827 5.21776 10 5.60444 10 6C10 6.53043 9.78929 7.03914 9.41421 7.41421C9.03914 7.78929 8.53043 8 8 8Z"
                            fill="#11B826" />
                    </svg>
                </button>
                <button class="btn">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.75 0.25H1.25C1.05116 0.250232 0.860528 0.329324 0.719926 0.469926C0.579324 0.610528 0.500232 0.801159 0.5 1V11C0.500232 11.1988 0.579324 11.3895 0.719926 11.5301C0.860528 11.6707 1.05116 11.7498 1.25 11.75H14.75C14.9488 11.7498 15.1395 11.6707 15.2801 11.5301C15.4207 11.3895 15.4998 11.1988 15.5 11V1C15.4998 0.801159 15.4207 0.610528 15.2801 0.469926C15.1395 0.329324 14.9488 0.250232 14.75 0.25V0.25ZM14.5 1.25V3.25H1.5V1.25H14.5ZM1.5 10.75V5.25H14.5V10.75H1.5Z"
                            fill="#083EA1" />
                    </svg>

                </button>
            </div>
        </div>
        <div class="details px-2 py-2">
            <p class="dp">Name <span class="text-muted ">Bonnet Repair</span></p>
            <p class="dp">Service Date <span class="text-muted ">2020-11-11</span></p>

        </div>

    </div>
</template>

<script >
export default {
    name: 'TollNCard',
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
    width: 50px;
    height: 10px;
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

.padding-card {
    padding: 0px !important;

}
</style>