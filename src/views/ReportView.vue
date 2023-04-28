<template>
    <div>
        <canvas id="debtChart"></canvas>
    </div>
</template>
  
<script>
import { onMounted } from "@vue/runtime-core";
import { Chart } from "chart.js";

export default {
    name: 'DebtReport',
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const data = {
                labels: ['-1', '0', '0', '0', '0', '0', '0', '0', '0', '1'],
                datasets: [
                    {
                        label: 'North',
                        data: [8, 6, 4, 2, 0, 2, 4, 6, 8],
                        borderColor: 'rgba(54,73,93,.5)',
                        backgroundColor: 'rgba(54,73,93,.5)',
                        fill: false,
                        yAxisID: 'y-axis-1',
                    },
                    {
                        label: 'Strathfield',
                        data: [4, 5, 6, 7, 8, 9, 10, 11, 12],
                        borderColor: 'rgba(71, 183,132,.5)',
                        backgroundColor: 'rgba(71, 183,132,.5)',
                        fill: false,
                        yAxisID: 'y-axis-2',
                    },
                    {
                        label: 'Homebush',
                        data: [12, 11, 10, 9, 8, 7, 6, 5, 4],
                        borderColor: 'rgba(255, 205, 86,.5)',
                        backgroundColor: 'rgba(255, 205, 86,.5)',
                        fill: false,
                        yAxisID: 'y-axis-2',
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
  