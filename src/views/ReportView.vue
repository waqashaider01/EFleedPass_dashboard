<template>
    <head>
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
    </head>
    <seciton class="dashboard__body">
        <!-- dashboard filter -->
        <div class="container">
            <!-- Tab -->
            <div class="dashboard__tab">
                <h4>Reports</h4>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card my-3">
                        <div class="card-header">
                            Debt Report
                        </div>
                        <div class="card-body row p-3 d-flex">
                            <div>
                                <canvas id="debtChart"></canvas>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card my-3">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold">Utilization Report</h6>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Nov</option>
                                    <option value="2">Dec</option>
                                    <option value="3">Jan</option>
                                </select>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">2021</option>
                                    <option value="2">2022</option>
                                    <option value="3">2023</option>
                                </select>

                            </div>
                        </div>
                        <div class="card-body row p-3 d-flex">
                            <div class="d-flex justify-content-between mt-3 mb-4">
                                <small class="fw-bold">Fleet Utilization</small>
                                <div class="d-flex">
                                    <div class="d-flex mx-2">
                                        <div class="blueC mx-2">



                                        </div>
                                        <small class="fw-bold">Utilized</small>
                                    </div>
                                    <div class="d-flex mx-2">
                                        <div class="redC mx-2"></div>
                                        <small class="fw-bold">Not Utilized</small>
                                    </div>
                                </div>
                            </div>
                            <div class=" chart-container">
                                <canvas id="myChart" width="10" height="10"></canvas>
                            </div>
                            <div class="mt-2">
                                <p class="note">Note: Fleet utilization is calculated based on the total numbers of vehicles
                                    that were on the Rentals within the month against the total active vehicles .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card my-3">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold">Vehicles Status Report</h6>



                            </div>
                        </div>
                        <div class="card-body row p-3 d-flex">
                            <div class="d-flex justify-content-between mt-3 mb-4">
                                <small class="fw-bold">Vehicle Status</small>
                                <div class="d-flex">
                                    <div class="d-flex mx-1">
                                        <div class="blueC mx-2">



                                        </div>
                                        <small class="fw-bold">Available</small>
                                    </div>
                                    <div class="d-flex mx-1">
                                        <div class="sblueC mx-2">



                                        </div>
                                        <small class="fw-bold">Deactive</small>
                                    </div>
                                    <div class="d-flex mx-1">
                                        <div class="greenC mx-2">



                                        </div>
                                        <small class="fw-bold">Sold</small>
                                    </div>
                                    <div class="d-flex mx-1">
                                        <div class="redC mx-2"></div>
                                        <small class="fw-bold">Pending</small>
                                    </div>
                                    <div class="d-flex mx-1">
                                        <div class="blackC mx-2"></div>
                                        <small class="fw-bold">Live</small>
                                    </div>
                                    <div class="d-flex mx-1">
                                        <div class="dblueC mx-2"></div>
                                        <small class="fw-bold">Total</small>
                                    </div>
                                </div>
                            </div>

                            <canvas id="hbChart" width="400" height="400"></canvas>

                            <div class="mt-2">
                                <p class="note">Note: Fleet utilization is calculated based on the total numbers of vehicles
                                    that were on the Rentals within the month against the total active vehicles .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </seciton>
</template>
<style scoped>
.blueC {
    width: .8rem;
    height: .8rem;
    background: blue;
    border-radius: 50%;
    aspect-ratio: 1;
}

.sblueC {
    width: .8rem;
    height: .8rem;
    background: #00AEEF;
    border-radius: 50%;
    aspect-ratio: 1;
}

.greenC {
    width: .8rem;
    height: .8rem;
    background: #11B826;
    border-radius: 50%;
    aspect-ratio: 1;
}

.redC {
    width: .8rem;
    height: .8rem;
    background: #FF2D46;
    border-radius: 50%;
    aspect-ratio: 1;
}

.blackC {
    width: .8rem;
    height: .8rem;
    background: #000;
    border-radius: 50%;
    aspect-ratio: 1;
}

.dblueC {
    width: .8rem;
    height: .8rem;
    background: #2388FF;
    border-radius: 50%;
    aspect-ratio: 1;
}

.chart-container {
    width: 100%;
    height: 230px;
}

.note {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    /* or 167% */

    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Black 60% */

    color: #5C5C5C;

}

#hbChart {
    width: 100%;
    height: auto;
}
</style>
<script>
// import Chart from 'chart.js/auto';



// Chart.register(HorizontalBarController)
// import { onMounted } from "@vue/runtime-core";
import { Chart } from "chart.js";
// import { HorizontalBarController } from 'chart.js';

export default {

    mounted() {
        this.renderChart();
        const ctx = document.getElementById("myChart").getContext("2d");

        const myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                datasets: [
                    {
                        data: [75, 25],
                        backgroundColor: ["#083EA1", "#FF2D46"],
                    },
                ],
            },
            options: {
                responsive: true,
                cutout: "65%",
            },
        });

        const ctb = document.getElementById("hbChart").getContext("2d");

        const hbChart = new Chart(ctb, {
            type: "horizontalBar",
            data: {
                labels: ["MFA", "Financials", "Holdings", "PTY LTD"],
                datasets: [
                    {
                        label: "Vehicle Status",
                        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
                        backgroundColor: "rgba(54,73,93,.5)",
                        borderColor: "rgba(54,73,93,.5)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });



    },
    methods: {
        renderChart() {
            const data = {
                labels: ['-1', '0', '0', '0', '0', '0', '0', '0', '0', '1'],
                datasets: [


                    {
                        label: 'Homebush',
                        data: [12, 11, 10, 9, 8, 7, 6, 5, 4],
                        borderColor: 'rgba(255, 205, 86,.5)',
                        backgroundColor: 'rgba(255, 205, 86,.5)',
                        fill: false,
                        yAxisID: 'y-axis-2',
                    },
                    {
                        label: 'North Strathfield',
                        data: [-1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                        borderColor: 'rgba(255, 99, 132, 0.5)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        fill: false,
                        yAxisID: 'y-axis-1',
                    }
                ],
            };

            const options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            id: 'y-axis-1',
                            type: 'linear',
                            position: 'left',
                            ticks: {
                                beginAtZero: true,
                                stepSize: 2,
                                suggestedMax: 10,
                            },
                        },
                        {
                            id: 'y-axis-2',
                            type: 'linear',
                            position: 'right',
                            ticks: {
                                beginAtZero: true,
                                stepSize: 2,
                                suggestedMax: 12,
                            },
                        },
                    ],
                },
            };

            const debtChart = new Chart('debtChart', {
                type: 'line',
                data,
                options,
            });
        }
    }



};


</script>
