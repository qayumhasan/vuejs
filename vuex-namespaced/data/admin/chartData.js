export default {
    revenueChart: {
        totalAmount: 0,
        partAmount: 0,
        series: [{
            name: "Revenue",
            data: []
        }],
        options: {
            chart: {
                toolbar: { show: false },
                dropShadow: {
                    enabled: true,
                    top: 5,
                    left: 0,
                    blur: 4,
                    opacity: 0.10,
                },
            },
            stroke: {
                curve: 'smooth',
                dashArray: [0, 8],
                width: [4, 2],
            },
            grid: { borderColor: '#e7e7e7' },
            legend: { show: false },
            colors: ['#F97794'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    inverseColors: false,
                    gradientToColors: ['#7367F0'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                },
            },
            markers: {
                size: 0,
                hover: { size: 5 }
            },
            xaxis: {
                labels: {
                    style: { cssClass: 'text-grey fill-current' }
                },
                axisTicks: { show: false },
                categories: [],
                axisBorder: { show: false },
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    style: { cssClass: 'text-grey fill-current' },
                    formatter: function(val) {
                        return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
                    }
                }
            },
            tooltip: {
                x: { show: false }
            }
        },
    },
    goldOverviewChart: {
        completedNumber: 0,
        progressNumber: 0,
        series: [0],
        options: {
            plotOptions: {
                radialBar: {
                    size: 110,
                    startAngle: -150,
                    endAngle: 150,
                    hollow: { size: '77%' },
                    track: {
                        background: "#bfc5cc",
                        strokeWidth: '50%',
                    },
                    dataLabels: {
                        name: { show: false },
                        value: {
                            offsetY: 18,
                            color: '#99a2ac',
                            fontSize: '4rem'
                        }
                    }
                }
            },
            colors: ['#00db89'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#00b5b5'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                },
            },
            stroke: { lineCap: 'round' },
            chart: {
                sparkline: { enabled: true },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    left: 1,
                    top: 1,
                    opacity: 0.1
                },
            },
        }
    },
    engagementOverviewChart: {
        series: [{
            name: 'Trips',
            data: []
        }, {
            name: 'Bids',
            data: []
        }],
        options: {
            grid: {
                borderColor: '#ebebeb',
                padding: { left: 0, right: 0 }
            },
            legend: { show: false, },
            dataLabels: { enabled: false },
            chart: {
                //stacked: true,
                type: 'bar',
                toolbar: { show: false },
            },
            colors: ['#7367F0', '#EA5455'],
            plotOptions: {
                bar: { columnWidth: '30%' }
            },
            xaxis: {
                labels: {
                    style: { cssClass: 'text-grey fill-current' },
                },
                axisTicks: { show: false, },
                categories: [],
                axisBorder: { show: false, },
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    style: { cssClass: 'text-grey fill-current' },
                    /*formatter: function (val) {
                        return val.toFixed(0)
                    }*/
                },
            },
            tooltip: {
                x: { show: false }
            },
        }
    },
}
