
<template>
    <div class="main-card padding-card">
        <div class=" bg-row d-flex my-auto align-items-center py-2 d-flex justify-content-between">
            <h3 class="ch mx-2">DR10821611195</h3>
            <span><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.4698 5.83C14.8817 4.30882 13.8608 2.99331 12.5332 2.04604C11.2056 1.09878 9.62953 0.561286 7.99979 0.5C6.37005 0.561286 4.79398 1.09878 3.46639 2.04604C2.1388 2.99331 1.11787 4.30882 0.529787 5.83C0.490071 5.93985 0.490071 6.06015 0.529787 6.17C1.11787 7.69118 2.1388 9.00669 3.46639 9.95396C4.79398 10.9012 6.37005 11.4387 7.99979 11.5C9.62953 11.4387 11.2056 10.9012 12.5332 9.95396C13.8608 9.00669 14.8817 7.69118 15.4698 6.17C15.5095 6.06015 15.5095 5.93985 15.4698 5.83ZM7.99979 10.5C5.34979 10.5 2.54979 8.535 1.53479 6C2.54979 3.465 5.34979 1.5 7.99979 1.5C10.6498 1.5 13.4498 3.465 14.4648 6C13.4498 8.535 10.6498 10.5 7.99979 10.5Z"
                        fill="#11B826" />
                    <path
                        d="M8 3C7.40666 3 6.82664 3.17595 6.33329 3.50559C5.83994 3.83524 5.45543 4.30377 5.22836 4.85195C5.0013 5.40013 4.94189 6.00333 5.05765 6.58527C5.1734 7.16721 5.45912 7.70176 5.87868 8.12132C6.29824 8.54088 6.83279 8.8266 7.41473 8.94236C7.99667 9.05811 8.59987 8.9987 9.14805 8.77164C9.69623 8.54458 10.1648 8.16006 10.4944 7.66671C10.8241 7.17336 11 6.59334 11 6C11 5.20435 10.6839 4.44129 10.1213 3.87868C9.55871 3.31607 8.79565 3 8 3ZM8 8C7.60444 8 7.21776 7.8827 6.88886 7.66294C6.55996 7.44318 6.30362 7.13082 6.15224 6.76537C6.00087 6.39991 5.96126 5.99778 6.03843 5.60982C6.1156 5.22186 6.30608 4.86549 6.58579 4.58579C6.86549 4.30608 7.22186 4.1156 7.60982 4.03843C7.99778 3.96126 8.39992 4.00087 8.76537 4.15224C9.13082 4.30362 9.44318 4.55996 9.66294 4.88886C9.8827 5.21776 10 5.60444 10 6C10 6.53043 9.78929 7.03914 9.41421 7.41421C9.03914 7.78929 8.53043 8 8 8Z"
                        fill="#11B826" />
                </svg>
            </span>
        </div>
        <div class="details">
            <p class="dp">Penelity Amount <span class="text-muted ">$112.00</span></p>
            <p class="dp">Offence Date <span class="text-muted ">2020-11-11</span></p>
            <p class="dp">Park in ticket parking area not display ticket as required</p>
        </div>

    </div>
</template>

<script >
export default {
    name: 'InfragmentNomCard',
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

}</style>