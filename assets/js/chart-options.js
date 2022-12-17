(function($) {
    "use strict";

    if($('#mountain').length) {
        var options1 = {
            series: [
                {
                    name: 'series1',
                    data: [0, 60, 42, 100, 30, 50, 0]
                }, 
                {
                    name: 'series2',
                    data: [0, 50, 30, 70, 45, 55, 0]
                }, 
                {
                    name: 'series3',
                    data: [0, 42, 35, 60, 34, 48, 0]
                }
            ],
            chart: {
                height: 120,
                sparkline: {
                    enabled: !0
                },
                type: 'area',
            },
            fill: {
                colors: ['#029ed7', '#1bc5eb', '#abdbf1'],
                opacity: 0
            },
            stroke: {
                show: false,
                curve: 'straight'
            },
            tooltip: {
                enabled: false
            }
        };
    
        new ApexCharts(document.querySelector("#mountain"), options1).render();
    }   


    if($('#earnings_mountain').length) {
        var options2 = {
            series: [
                {
                    name: 'series1',
                    data: [0, 300, 100, 500, 900, 50]
                }, 
                {
                    name: 'series2',
                    data: [0, 350, 200, 700, 250, 600]
                }, 
                {
                    name: 'series3',
                    data: [0, 700, 35, 60, 34, 48]
                }
            ],
            chart: {
                height: 400,
                type: 'area',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                colors: ['#029ed7', '#1bc5eb', '#abdbf1'],
                opacity: 0
            },
            stroke: {
                show: false,
                curve: 'smooth'
            },
            legend: {
                show: false
            },
            tooltip: {
                enabled: false
            },
            // title: {
            //     text: 'Earnings',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            // subtitle: {
            //     text: '2020',
            //     align: 'left',
            //     margin: 0,
            //     offsetX: 0,
            //     offsetY: 45,   
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.4rem',
            //         fontWeight: '400',
            //         color:  '#7d7d7d'
            //     }
            // },
            grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            xaxis: {
                categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };
    
        new ApexCharts(document.querySelector("#earnings_mountain"), options2).render();
    }   
    

    // Line chart 1
    if($('#line_1').length) {
        var options3 = {
          chart: {
            type: "line",
            height: 120,
            sparkline: {
              enabled: !0
            }
          },
          series: [{
              data: [3844, 3855, 3841, 3867]
          }],
          stroke: {
            width: 2,
            curve: "smooth"
          },
          markers: {
            size: 0
          },
          colors: ["#727cf5"],
          xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
          }
        };
        new ApexCharts(document.querySelector("#line_1"),options3).render();
    }


    if($('#progress_chart').length) {
        var options4 = {
            series: [
                {
                    name: "Credit",
                    data: [12,0,1,0,8,2,1]
                    // data: [5, 10, 41, 35, 51, 49, 62]
                },
                {
                    name: "Debit",
                    data: [0,0,0,0,2,0,0]
                    // data: [50, 20, 35, 20, 75, 30, 60]
                },
                {
                    name: "Send Money",
                    data: [0,0,0,0,0,0,0]
                    // data: [15, 30, 15, 40, 55, 20, 40]
                },
            ],                
            chart: {
                height: 450,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#000',
                    opacity: 0.15
                },
                toolbar: {
                    show: false,
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            colors:["#fb7636", '#24b314', '#027ad7', '#8452e7'],
            // title: {
            //     text: 'Transactions History',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            // subtitle: {
            //     text: 'Last 7 days',
            //     align: 'left',
            //     margin: 0,
            //     offsetX: 0,
            //     offsetY: 45,   
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.4rem',
            //         fontWeight: '400',
            //         color:  '#7d7d7d'
            //     }
            // },
            xaxis: {
                categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            legend: {
                offsetX: 0,
                offsetY: 15,
                floating: false,
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

       new ApexCharts(document.querySelector("#progress_chart"), options4).render();
    }


    if($('#activity_chart').length) {
        var options4 = {
            series: [
                {
                    name: "Desktops",
                    data: [20, 90, 30, 80, 35, 120]
                }
            ],                
            chart: {
                height: 350,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#7a37ff',
                    opacity: 0.15
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            colors:["#9967fd"],
            // title: {
            //     text: 'Recent Activity',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 7,
                        fillColor: '#5f10fd',
                        strokeColor: '#5f10fd',
                        size: 5
                    }, 
                    {
                        seriesIndex:3,
                        dataPointIndex: 1,
                        fillColor: '#000',
                        strokeColor: '#eee',
                        size: 4
                    }
                ],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

       new ApexCharts(document.querySelector("#activity_chart"), options4).render();
    }



    if($('#statistics').length) {
        var options5 = {
            series: [
                {
                    name: "Desktops",
                    data: [0, 1000, 500, 2100]
                }
            ],                
            chart: {
                height: 435,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#000',
                    opacity: 0.15
                },
                toolbar: {
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors:["#f3466c"],
            // title: {
            //     text: 'Profit Statistics',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: -5,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            xaxis: {
                categories: ['January 2015', 'January 2016', 'January 2017', 'January 2020'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#statistics"), options5).render();
    }

    if($('#sales').length) {
        var options5 = {
            series: [
                {
                    name: "Desktops",
                    data: [0, 1000, 500, 2100]
                }
            ],                
            chart: {
                height: 375,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#8452e7',
                    opacity: 0.15
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors:["#f3466c"],
            // title: {
            //     text: 'Sales',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            xaxis: {
                categories: ['January 2015', 'January 2016', 'January 2017', 'January 2020'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#sales"), options5).render();
    }


    if($('#revenue_chart').length) {
        var options6 = {
            series: [
                {
                    name: "day",
                    data: [100, 400, 350, 200, 100, 300, 350, 250, 100, 150, 350, 200]
                },
                {
                    name: "month",
                    data: [100, 400, 150, 300, 150, 400, 100, 300, 100, 400, 200, 300]
                },
                {
                    name: "year",
                    data: [200, 300, 150, 400, 200, 200, 350, 250, 400, 300, 150, 250]
                }
            ],                
            chart: {
                height: 250,
                type: 'line',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors:["#f3466c", "#8452e7", "#23d1f1"],
            // title: {
            //     text: 'Monthly Revenue Progress',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#revenue_chart"), options6).render();
    }

    // Visitor Chart
    if($("#visitors").length) {
        var options7 = {
            colors: ["#23d1f1", "#8452e7", "#f3466c", "#fb7636"],
            series: [44, 55, 41, 17],
            chart: {
                foreColor: '#3d4859',
                type: 'donut',
                height: 380,
                parentHeightOffset: 0
            },
            dataLabels: {
                enabled: false,               
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: '85%',
                        labels: {
                            show: true
                        }
                    }
                }
            },
            labels: ['Search Engine', 'Social Media', 'Direct link', 'Bookmarks Click'],
            legend: {
                fontSize: '15px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                position: 'bottom',
                width: '100%',
                itemMargin: {
                    horizontal: 0,
                    vertical: 10
                },
                markers: {
                    radius: 12,
                    width: 12,
                    height: 12,
                    offsetX: -10
                },
                formatter: function(val, opts) {
                    return [val, "<span>"+opts.w.globals.series[opts.seriesIndex]+"%</span>"]
                }
            },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#visitors"), options7).render();
    }

    // Traffic Sources
    if($("#traffic_sources").length) {
        var options7 = {
            colors: ["#23d1f1", "#8452e7", "#f3466c"],
            series: [44, 55, 41],
            chart: {
                foreColor: '#3d4859',
                type: 'donut',
                height: 360,
                parentHeightOffset: 0
            },
            dataLabels: {
                enabled: false,               
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: '85%',
                        labels: {
                            show: true
                        }
                    }
                }
            },
            // title: {
            //     text: 'Traffic Sources',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            // subtitle: {
            //     text: 'This Month',
            //     align: 'left',
            //     margin: 0,
            //     offsetX: 0,
            //     offsetY: 45,   
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.4rem',
            //         fontWeight: '400',
            //         color:  '#7d7d7d'
            //     }
            // },
            labels: ['Search Engine', 'Social Media', 'Direct link'],
            legend: {
                fontSize: '15px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                position: 'bottom',
                width: '100%',
                itemMargin: {
                    horizontal: 0,
                    vertical: 10
                },
                markers: {
                    radius: 12,
                    width: 12,
                    height: 12,
                    offsetX: -10
                },
                formatter: function(val, opts) {
                    return [val, "<span>"+opts.w.globals.series[opts.seriesIndex]+"%</span>"]
                }
            },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#traffic_sources"), options7).render();
    }

    // Yearly Eearning Chart
    if($("#yearly_earning").length) {
        var options7 = {
            colors: ["#23d1f1", "#8452e7", "#f3466c", "#fb7636"],
            series: [44, 55, 41, 17],
            chart: {
                foreColor: '#3d4859',
                type: 'donut',
                height: 380,
                parentHeightOffset: 0
            },
            dataLabels: {
                enabled: false,               
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: '85%',
                        labels: {
                            show: true
                        }
                    }
                }
            },
            labels: ['Search Engine', 'Social Media', 'Direct link', 'Bookmarks Click'],
            legend: {
                fontSize: '15px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                position: 'bottom',
                width: '100%',
                itemMargin: {
                    horizontal: 0,
                    vertical: 10
                },
                markers: {
                    radius: 12,
                    width: 12,
                    height: 12,
                    offsetX: -10
                },
                formatter: function(val, opts) {
                    return [val, "<span>"+opts.w.globals.series[opts.seriesIndex]+"%</span>"]
                }
            },
            title: {
                text: 'Yearly Earning',
                align: 'left',
                margin: 0,
                floating: false,
                offsetX: 0,
                offsetY: 15,     
                style: {
                    fontFamily:  'Roboto, sans-serif',
                    fontSize:  '1.8rem',
                    fontWeight: '500',
                    color:  '#3d4859',
                    lineHeight: '1.8rem'
                }
            },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#yearly_earning"), options7).render();
    }

    if($("#yearly_earning_02").length) {
        var options7 = {
            colors: ["#23d1f1", "#8452e7", "#f3466c", "#fb7636"],
            series: [5415, 2355, 1241],
            chart: {
                foreColor: '#3d4859',
                type: 'donut',
                height: 450,
                // parentHeightOffset: 0
            },
            dataLabels: {
                enabled: false,               
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: '85%',
                        labels: {
                            show: true
                        }
                    }
                }
            },
            labels: ['Deposit', 'Expese', 'Payable'],
            legend: {
                fontSize: '18px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                position: 'bottom',
                width: '100%',
                offsetY: 20,
                itemMargin: {
                    horizontal: 0,
                    vertical: 10
                },
                labels: {
                    colors: "#7d7d7d",
                    useSeriesColors: false
                },
                markers: {
                    radius: 0,
                    width: 0,
                    height: 0,
                    offsetX: 0
                },
                formatter: function(val, opts) {
                    return [val+" :", "<span>$"+opts.w.globals.series[opts.seriesIndex]+"</span>"]
                }
            },
            // title: {
            //     text: 'Yearly Earning',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };

        new ApexCharts(document.querySelector("#yearly_earning_02"), options7).render();
    }

    // Order Chart
    if($('#order_chart').length) {
        var options8 = {
            colors: ["#8452e7", "#f3466c"],
            series: [76],
            chart: {
                type: 'radialBar',
                offsetY: 0,
                sparkline: {
                    enabled: true
                }, 
                height: 350,
                parentHeightOffset: 0
            },
            // title: {
            //     text: 'Product Order',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily: 'Roboto, sans-serif',
            //         fontSize: '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            // subtitle: {
            //     text: 'This Month',
            //     align: 'left',
            //     margin: 0,
            //     offsetX: 0,
            //     offsetY: 45,   
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.4rem',
            //         fontWeight: '400',
            //         color:  '#7d7d7d'
            //     }
            // },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#fefefe",
                        strokeWidth: '97%',
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: '#999',
                            opacity: 1,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: '22px'
                        }
                    },
                    hollow: {
                        margin: 5,
                        size: '35%',
                        background: 'transparent',
                    },
                }                
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "",
                    type: "vertical",
                    gradientToColors: ["#f3466c"],
                    stops: [0, 100]
                }
            }
        };
  
        var chart = new ApexCharts(document.querySelector("#order_chart"), options8);
        chart.render();  
    }
    
    
    // Order Chart 02
    if($('#order_chart_02').length) {

        var options = {
            series: [44, 55, 67, 83],
            chart: {
                type: 'radialBar',
                height: 280,
                parentHeightOffset: 0,
            },  
            // title: {
            //     text: 'Request Handling',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily: 'Roboto, sans-serif',
            //         fontSize: '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            // subtitle: {
            //     text: 'This Month',
            //     align: 'left',
            //     margin: 0,
            //     offsetX: 0,
            //     offsetY: 45,   
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.4rem',
            //         fontWeight: '400',
            //         color:  '#7d7d7d'
            //     }
            // },
            plotOptions: {
                radialBar: {
                    // hollow: {
                    //     size: '40%'
                    // },
                    track: {
                        margin: 10, 
                        strokeWidth: '100%',
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            // responsive: [{
            //     breakpoint: 1352,
            //     options: {
            //         chart: {
            //             height: 260
            //         }
            //     },
            // }],
          };
  
          var chart = new ApexCharts(document.querySelector("#order_chart_02"), options);
          chart.render();
    }

    // Order Chart 02
    if($('#device-chart').length) {

        var options = {
            series: [44, 55, 67],
            chart: {
                type: 'radialBar',
                height: 280,
                parentHeightOffset: 0,
            },  
            // title: {
            //     text: 'Device Used',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily: 'Roboto, sans-serif',
            //         fontSize: '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            // subtitle: {
            //     text: 'Mosly used devices',
            //     align: 'left',
            //     margin: 0,
            //     offsetX: 0,
            //     offsetY: 45,   
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.4rem',
            //         fontWeight: '400',
            //         color:  '#7d7d7d'
            //     }
            // },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '40%'
                    },
                    track: {
                        margin: 10, 
                        strokeWidth: '100%',
                    }
                }
            },
            labels: ['Desktop', 'Mobile', 'Tablet'],
            // responsive: [{
            //     breakpoint: 1352,
            //     options: {
            //         chart: {
            //             height: 260
            //         }
            //     },
            // }],
          };
  
          var chart = new ApexCharts(document.querySelector("#device-chart"), options);
          chart.render();
    }

    if($('#revenue_chart_02').length) {
        var options = {
            series: [
                {
                    data: [44, 140, 88, 185, 65, 159, 20, 109, 99, 160, 29, 100]
                }
            ],
            chart: {
            type: 'bar',
            height: 380,
            parentHeightOffset: 0
          },
          colors: ['#8452e7'],
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '15%',
              endingShape: 'flat',
              colors: {
                    ranges: [{
                        from: 0,
                        to: 100,
                        color: "#f3466c"
                    }]
                },
            },
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false,
          },
        //   title: {
        //     text: 'Monthly Revenue Progress',
        //     align: 'left',
        //     margin: 0,
        //     floating: false,
        //     offsetX: 0,
        //     offsetY: 15,     
        //     style: {
        //         fontFamily:  'Roboto, sans-serif',
        //         fontSize:  '1.8rem',
        //         fontWeight: '500',
        //         color:  '#3d4859',
        //         lineHeight: '1.8rem'
        //     }
        //   },
          stroke: {
            show: false,
          },
          grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            }
          },
          yaxis: {
            labels: {
                show: true,
                align: 'center',
                style: {
                    colors: "#7e7e7e",
                    fontSize: '1.2rem',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
                offsetX: -10,
                offsetY: 0
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            enabled: false
          }
          };
  
          var chart = new ApexCharts(document.querySelector("#revenue_chart_02"), options);
          chart.render();
    }

    if ($('#daily_transaction').length) {
        var options = {
        series: [
            {
                name: 'Deposite',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'Send Money',
                data: [11, 32, 45, 32, 34, 52, 41]
            }
        ],
        chart: {
            height: 350,
            type: 'area',
            zoom: {
                enabled: false
            },
            toolbar: {
                tools: {
                    download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                }
            }
        },
        // title: {
        //     text: 'Daily Transactions',
        //     align: 'left',
        //     margin: 0,
        //     floating: false,
        //     offsetX: 0,
        //     offsetY: 15,     
        //     style: {
        //         fontFamily:  'Roboto, sans-serif',
        //         fontSize:  '1.8rem',
        //         fontWeight: '500',
        //         color:  '#3d4859',
        //         lineHeight: '1.8rem'
        //     }
        // },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        };

        var chart = new ApexCharts(document.querySelector("#daily_transaction"), options);
        chart.render();
    }
    
    // Browsers chart

    // Line chart 1
    if($('#line_2').length) {
        var options3 = {
          chart: {
            type: "line",
            height: 40,
            sparkline: {
              enabled: !0
            }
          },
          series: [{
              data: [3844, 3855, 3841, 3867]
          }],
          stroke: {
            width: 2,
            curve: "smooth"
          },
          markers: {
            size: 0
          },
          colors: ["#ea4335"],
          xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
          }
        };
        new ApexCharts(document.querySelector("#line_2"),options3).render();
    }

    if($('#crypto_chart').length) {
        var options4 = {
            series: [
                {
                    name: "Buy",
                    data: [50, 20, 35, 20, 75, 30, 60]
                },
                {
                    name: "Sell",
                    data: [5, 60, 20, 45, 15, 55, 25]
                }
            ],                
            chart: {
                height: 450,
                type: 'area',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 20,
                    left: 0,
                    blur: 2,
                    color: '#000',
                    opacity: .05
                },
                toolbar: {
                    show: false,
                    tools: {
                        download: '<span class="more-icon-v"><i class="fas fa-ellipsis-v"></i></span>'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            colors:['#23d1f1', '#8452e7'],
            // title: {
            //     text: 'Crypto Balance Statistics',
            //     align: 'left',
            //     margin: 0,
            //     floating: false,
            //     offsetX: 0,
            //     offsetY: 15,     
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.8rem',
            //         fontWeight: '500',
            //         color:  '#3d4859',
            //         lineHeight: '1.8rem'
            //     }
            // },
            // subtitle: {
            //     text: 'Last Week',
            //     align: 'left',
            //     margin: 0,
            //     offsetX: 0,
            //     offsetY: 45,   
            //     style: {
            //         fontFamily:  'Roboto, sans-serif',
            //         fontSize:  '1.4rem',
            //         fontWeight: '400',
            //         color:  '#7d7d7d'
            //     }
            // },
            xaxis: {
                categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
                labels: {
                    show: true,
                    align: 'left',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'center',
                    style: {
                        colors: "#7e7e7e",
                        fontSize: '1.2rem',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: -10,
                    offsetY: 0,
                }
            },
            grid: {
                show: true,
                borderColor: "#eceeef",
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            markers: {
                size: 6,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            legend: {
                offsetX: 0,
                offsetY: 15,
                floating: false,
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                },
            },
            responsive: [
                {
                    breakpoint: 1441,
                    options: {
                        chart: {
                            height: 350
                        }
                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: 300
                        }
                    }
                }
            ]
        };

       new ApexCharts(document.querySelector("#crypto_chart"), options4).render();
    }

    // Gradient Box Line chart
    function barChart(sel, opts) {
        var options = {
            series: [
                {
                    data: opts.value
                }
            ],
            chart: {
                type: 'bar',
                height: 80,
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                }
            },
            colors: [opts.colors[0]],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                    endingShape: 'flat',
                    colors: {
                        ranges: [{
                            from: 0,
                            to: 50,
                            color: opts.colors[1]
                        }]
                    },
                },
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
            },
          
            stroke: {
                show: false,
            },
            grid: {
                show: false,
                },
            xaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    show: false,
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                enabled: false
            }            
        };
  
          var chart = new ApexCharts(document.querySelector(sel), options);
          chart.render();
    }

    // const bar1_colors = ['#8452e7', '#f3466c']

    const bar1_opts = {
        value: [44, 140, 88, 185, 65, 159, 20, 109, 99, 160, 29, 100],
        colors: ['#8452e7', '#f3466c']
    }
    const bar2_opts = {
        value: [100, 50, 88, 40, 30, 98, 24, 109, 39, 140, 29, 115],
        colors: ['#23d1f1', '#1197e6']
    }

    if($('.bar-chart').length) {
        barChart('#bar1', bar1_opts)
        barChart('#bar2', bar2_opts)
        barChart('#bar3', bar1_opts)
        barChart('#bar4', bar2_opts)
    }

    // Gradient Box Area chart

    function areaChart (sel, opts) {
        var options = {
            series: opts.series,
            chart: {
                height: 50,
                sparkline: {
                    enabled: !0
                },
                width: '100%',
                type: 'area',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            colors: opts.colors,
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 1,
            },
            grid: {
                show: false
            },
            legend: {
                show: false
            }, 
            xaxis: {
                labels : {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
            },
            yaxis: {
                labels : {
                    show: false
                },
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };
    
        var chart = new ApexCharts(document.querySelector(sel), options);
        chart.render();
    }

    const area1 = {
        series: [
            {
                name: 'New',
                data: [0, 100, 30, 90, 10, 95, 20]
            }, 
            {
                name: 'Active',
                data: [50, 5, 70, 30, 110, 10, 50]
            }
        ],
        colors: ['#f3466c', '#fb7636']
    }
    const area2 = {
        series: [
            {
                name: 'New',
                data: [50, 5, 70, 30, 110, 10, 50]
            }, 
            {
                name: 'Active',
                data: [0, 200, 48, 70, 23, 140, 70]
            }
        ],
        colors: ['#1197e6', '#3358cb']
    }
    const area3 = {
        series: [
            {
                name: 'New',
                data: [150, 10, 200, 90, 100, 40, 70]
            }, 
            {
                name: 'Active',
                data: [10, 120, 50, 90, 40, 150, 50]
            }
        ],
        colors: ['#8452e7', '#4d5ed0']
    }
    const area4 = {
        series: [
            {
                name: 'New',
                data: [60, 160, 30, 190, 20, 95, 55]
            }, 
            {
                name: 'Active',
                data: [90, 5, 70, 30, 110, 10, 130]
            }
        ],
        colors: ['#027ad7', '#23d1f1']
    }

    if($('.area-chart').length) {
        areaChart('#trnx-chart1', area1)
        areaChart('#trnx-chart2', area2)
        areaChart('#trnx-chart3', area3)
        areaChart('#trnx-chart4', area4)
    }

})(jQuery);