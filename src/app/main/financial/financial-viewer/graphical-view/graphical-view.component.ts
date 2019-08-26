import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';
import * as d3 from 'd3';
import 'nvd3';
import { FinancialService, FRecords, FSummary, FLiveSummary } from '../../../../shared/shared-services/financial/financial.service';
declare var require: any;
declare var $: any;
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/heatmap')(Highcharts);
require('highcharts/modules/drilldown')(Highcharts);


@Component({
  selector: 'app-graphical-view',
  templateUrl: './graphical-view.component.html',
  // template: '<div><nvd3 [optio  ns]="options" [data]="data"></nvd3></div>',
  styleUrls: ['./graphical-view.component.scss']
})
export class GraphicalViewComponent implements OnInit {
  public graphWidth = '310px';
  public options: any;
  public data: any;
  public series: any;
  _fgraphdata: any;
  public _fsummary: any;
  expandGraph = 'none';
  screenWidth = '600';
  screenHeight = '500';
  xLabelsRotation = [0];
  @Input('graphdata') public set graphData(graph: any) {
    if (graph) {
      this._fgraphdata = graph;
      // this.data = [
      //   {
      //     "key": "Number of Records",
      //     "bar": true,
      //     "values": this._fgraphdata["sum_rc"]
      //   },
      //   {
      //     "key": "Savings",
      //     "values": this._fgraphdata["sum_savings"]
      //   }
      // ].map(function (series: any) {
      //   series.values = series.values.map(function (d) { return { x: d[0], y: d[1] } });
      //   return series;
      // });
    }
  }
  constructor(private _financialservice: FinancialService) { }
  ngOnInit() {
    this.screenWidth = screen.width - 15 + 'px';
    this.screenHeight = screen.height + 'px';

    // this.data = [
    //   {
    //     "key": "Number of Records",
    //     "bar": true,

    //     "values": [[1136005200000, 1271000.0], [1138683600000, 1271000.0], [1141102800000, 1271000.0], [1143781200000, 0], [1146369600000, 0], [1149048000000, 0], [1151640000000, 0], [1154318400000, 0], [1156996800000, 0], [1159588800000, 3899486.0], [1162270800000, 3899486.0], [1164862800000, 3899486.0], [1167541200000, 3564700.0], [1170219600000, 3564700.0], [1172638800000, 3564700.0], [1175313600000, 2648493.0], [1177905600000, 2648493.0], [1180584000000, 2648493.0], [1183176000000, 2522993.0], [1185854400000, 2522993.0], [1188532800000, 2522993.0], [1191124800000, 2906501.0], [1193803200000, 2906501.0], [1196398800000, 2906501.0], [1199077200000, 2206761.0], [1201755600000, 2206761.0], [1204261200000, 2206761.0], [1206936000000, 2287726.0], [1209528000000, 2287726.0], [1212206400000, 2287726.0], [1214798400000, 2732646.0], [1217476800000, 2732646.0], [1220155200000, 2732646.0], [1222747200000, 2599196.0], [1225425600000, 2599196.0], [1228021200000, 2599196.0], [1230699600000, 1924387.0], [1233378000000, 1924387.0], [1235797200000, 1924387.0], [1238472000000, 1756311.0], [1241064000000, 1756311.0], [1243742400000, 1756311.0], [1246334400000, 1743470.0], [1249012800000, 1743470.0], [1251691200000, 1743470.0], [1254283200000, 1519010.0], [1256961600000, 1519010.0], [1259557200000, 1519010.0], [1262235600000, 1591444.0], [1264914000000, 1591444.0], [1267333200000, 1591444.0], [1270008000000, 1543784.0], [1272600000000, 1543784.0], [1275278400000, 1543784.0], [1277870400000, 1309915.0], [1280548800000, 1309915.0], [1283227200000, 1309915.0], [1285819200000, 1331875.0], [1288497600000, 1331875.0], [1291093200000, 1331875.0], [1293771600000, 1331875.0], [1296450000000, 1154695.0], [1298869200000, 1154695.0], [1301544000000, 1194025.0], [1304136000000, 1194025.0], [1306814400000, 1194025.0], [1309406400000, 1194025.0], [1312084800000, 1194025.0], [1314763200000, 1244525.0], [1317355200000, 475000.0], [1320033600000, 475000.0], [1322629200000, 475000.0], [1325307600000, 690033.0], [1327986000000, 690033.0], [1330491600000, 690033.0], [1333166400000, 514733.0], [1335758400000, 514733.0]]
    //   },
    //   {
    //     "key": "Savings",
    //     "values": [[1136005200000, 71.89], [1138683600000, 75.51], [1141102800000, 68.49], [1143781200000, 62.72], [1146369600000, 70.39], [1149048000000, 59.77], [1151640000000, 57.27], [1154318400000, 67.96], [1156996800000, 67.85], [1159588800000, 76.98], [1162270800000, 81.08], [1164862800000, 91.66], [1167541200000, 84.84], [1170219600000, 85.73], [1172638800000, 84.61], [1175313600000, 92.91], [1177905600000, 99.8], [1180584000000, 121.191], [1183176000000, 122.04], [1185854400000, 131.76], [1188532800000, 138.48], [1191124800000, 153.47], [1193803200000, 189.95], [1196398800000, 182.22], [1199077200000, 198.08], [1201755600000, 135.36], [1204261200000, 125.02], [1206936000000, 143.5], [1209528000000, 173.95], [1212206400000, 188.75], [1214798400000, 167.44], [1217476800000, 158.95], [1220155200000, 169.53], [1222747200000, 113.66], [1225425600000, 107.59], [1228021200000, 92.67], [1230699600000, 85.35], [1233378000000, 90.13], [1235797200000, 89.31], [1238472000000, 105.12], [1241064000000, 125.83], [1243742400000, 135.81], [1246334400000, 142.43], [1249012800000, 163.39], [1251691200000, 168.21], [1254283200000, 185.35], [1256961600000, 188.5], [1259557200000, 199.91], [1262235600000, 210.732], [1264914000000, 192.063], [1267333200000, 204.62], [1270008000000, 235.0], [1272600000000, 261.09], [1275278400000, 256.88], [1277870400000, 251.53], [1280548800000, 257.25], [1283227200000, 243.1], [1285819200000, 283.75], [1288497600000, 300.98], [1291093200000, 311.15], [1293771600000, 322.56], [1296450000000, 339.32], [1298869200000, 353.21], [1301544000000, 348.5075], [1304136000000, 350.13], [1306814400000, 347.83], [1309406400000, 335.67], [1312084800000, 390.48], [1314763200000, 384.83], [1317355200000, 381.32], [1320033600000, 404.78], [1322629200000, 382.2], [1325307600000, 405.0], [1327986000000, 456.48], [1330491600000, 542.44], [1333166400000, 599.55], [1335758400000, 583.98]]
    //   }
    // ].map(function (series: any) {
    //   series.values = series.values.map(function (d) { return { x: d[0], y: d[1] } });
    //   return series;
    // });

    var self = this;
    this.options =
      {
        chart: {
          type: 'linePlusBarChart',
          height: 230,
          focusEnable: false,
          focusHeight: null,
          margin: {
            top: 35,
            right: 75,
            bottom: 50,
            left: 75
          },
          "tooltip": {
            "duration": 100,
            "gravity": "w",
            "distance": 25,
            "snapDistance": 0,
            "classes": null,
            "chartContainer": null,
            "enabled": true,
            "hideDelay": 200,
            "headerEnabled": true,
            "fixedTop": null,
            "offset": {
              "left": 0,
              "top": 0
            },
            "hidden": true,
            "data": null,
            "id": "nvtooltip-67707"
          },
          legendLeftAxisHint: "",
          legendRightAxisHint: "",
          legend: {
            rightAlign: false,
            legendPosition: 'top',
            margin: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 5
            }
          },
          bars: {
            forceY: [0]
          },
          bars2: {
            forceY: [0]
          },
          color: ['#d3d3d3', '#592885'],
          x: function (d, i) { return i; },
          xAxis: {
            axisLabel: '',
            rotateLabels: -45,
            tickFormat: function (d) {
              var dx = self.data[0].values[d] && self.data[0].values[d].x || 0;
              if (dx > 0) {
                // Epoch format having 10 digits, d3 needs 13digits so added last 3 digits(0)
                return d3.time.format('%Y-%b-%d')(new Date(dx * 1000)); // d3.time.format('%x')(new Date(dx))
              }
              return null;
            }
          },
          x2Axis: {
            tickFormat: function (d) {
              var dx = self.data[0].values[d] && self.data[0].values[d].x || 0;
              return d3.time.format('%b-%Y')(new Date(dx));
            },
            showMaxMin: false
          },
          y1Axis: {
            axisLabel: 'Number of Records',
            tickFormat: function (d) {
              return d3.format(',f')(d);
            },
            axisLabelDistance: 12
          },
          y2Axis: {
            axisLabel: 'Savings',
            tickFormat: function (d) {
              return '$' + d3.format(',.2f')(d);
            }
          },
          y3Axis: {
            tickFormat: function (d) {
              return d3.format(',f')(d);
            }
          },
          y4Axis: {
            tickFormat: function (d) {
              return '$' + d3.format(',.2f')(d);
            }
          }
        }
      };
    this.showGraph();
  }
  showGraph() {
    if (this._fgraphdata.savings && this._fgraphdata.savings.data && this._fgraphdata.savings.data.length > 0 &&
      this._fgraphdata.series.length > 0) {

      const savingsSpline = {
        name: this._fgraphdata.savings.name,
        type: 'spline',
        color: '#5c73e4',
        yAxis: 1,
        showInLegend: false,
        marker: {
          enabled: false
        },
        data: this._fgraphdata.savings.data,
        tooltip: {
          valueSuffix: ''
        }
      };
      let series = [];
      series = this._fgraphdata.series;
      if (series.length > 0) {
        series.push(savingsSpline);
      }

      // let xLabelsRotation = [0];
      if (this._financialservice.selectedFilter === 'YTD' || this._financialservice.selectedFilter === 'LIFE') {
        // this.graphWidth = "310px";
        this.xLabelsRotation = [0];
      } else if (this._fgraphdata.xAxis.categories.length < 7) {
        this.xLabelsRotation = [0];
        // this.graphWidth = "310px";
        // } else if(this._fgraphdata.xAxis.categories.length < 16) {
        //   this.graphWidth = "1300px";
        // } else if(this._fgraphdata.xAxis.categories.length < 20) {
        //   this.graphWidth = "1500px";
        // } else if(this._fgraphdata.xAxis.categories.length < 25) {
        //   this.graphWidth = "1800px";
        // } else if(this._fgraphdata.xAxis.categories.length < 32) {
        //   this.graphWidth = "2400px";
      } else {
        this.xLabelsRotation = [-45];
        // this.graphWidth = "1400px";
      }

      const chartData = {
        chart: {
          // zoomType: 'xy',
          type: 'column',
          events: {
            load: function (event) {
              $('.highcharts-legend-item rect').attr('height', '6').attr('width', 30);
            }
          }
        },
        title: {
          // text: this._fgraphdata.graphTitle,
          text: this._financialservice.selectedFilter === 'LIFE' ?
            'Life-to-date Throughput & Savings Graph' : this._financialservice.selectedFilter + ' Throughput & Savings Graph',
          style: {
            color: '#000000ad',
            fontWeight: 'bold',
            fontSize: '12'
          }
        },
        xAxis: {
          minorTickLength: 0,
          tickLength: 0,
          lineColor: '#979797',
          crosshair: false,
          categories: this._fgraphdata.xAxis.categories,
          labels: {
            rotation: this.xLabelsRotation
          }
        },

        yAxis: [{
          labels: {
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          min: 0,
          opposite: this._fgraphdata.yAxis[0].opposite,
          gridLineWidth: 0,
          lineWidth: 2,
          lineColor: '#979797',
          title: {
            text: this._fgraphdata.yAxis[0].titleText,
            margin: 20,
            style: {
              color: '#5B5A5A',
              fontWeight: 'bold',
              fontSize: '12px'
            }
          }
        }, {
          labels: {
            formatter: function () {
              if (this.isFirst) { return '$'; }
              return '$' + this.value;
            }
          },
          min: 0,
          opposite: this._fgraphdata.yAxis[1].opposite,
          gridLineWidth: 0,
          lineColor: '#979797',
          lineWidth: 2,
          title: {
            text: this._fgraphdata.yAxis[1].titleText,
            rotation: [-90],
            margin: 20,
            style: {
              color: '#5B5A5A',
              fontWeight: 'bold',
              fontSize: '12px'
            }
          }
        }],

        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
          shared: true
        },
        plotOptions: {
          series: {
            maxPointWidth: 30
          },
          column: {
            stacking: 'normal',
            borderWidth: 0
          }
        },
        legend: {

          layout: 'horizontal',
          verticalAlign: 'bottom',
          symbolHeight: 10,
          symbolPadding: 20,
          symbolRadius: 0,
          itemStyle: {
            color: '#000000',
            fontWeight: 'normal',
            fontSize: '10'
          },
          x: 35,
          y: 0
        },

        series: series
      };

      const chartData1 = chartData;
      const that = this;
      $(function () {
        (function (H) {
          if (that._fgraphdata && that._fgraphdata.savings && that._fgraphdata.savings.data && that._fgraphdata.savings.data.length > 1 &&
            that._fgraphdata.series.length > 1) {

            H.wrap(H.Series.prototype, 'drawGraph', function (proceed) {

              // Now apply the original function with the original arguments, 
              // which are sliced off this function's arguments
              proceed.apply(this, Array.prototype.slice.call(arguments, 1));

              var arrowLength = 15,
                arrowWidth = 9,
                series = this,
                data = series.data,
                // len = data.length,
                segments = data,
                lastSeg = segments[segments.length - 1],
                path = [];


              var lastPoint = null;
              var nextLastPoint = null;

              // if (lastSeg.y == 0) {
              //   lastPoint = segments[segments.length - 1];
              //   nextLastPoint = segments[segments.length - 2];
              // } else {
              //   lastPoint = segments[segments.length - 1];
              //   nextLastPoint = segments[segments.length - 2];
              // }
              if (lastSeg.y == 0) {
                lastPoint = segments[segments.length - 1];
                nextLastPoint = segments[segments.length - 2];
              } 
              if(lastSeg.y !=0) {
                lastPoint = segments[segments.length - 1];
                nextLastPoint = segments[segments.length - 2];
              }
              var angle = 0;
              if (lastPoint && lastPoint.plotX && nextLastPoint && nextLastPoint.plotX) {
                angle = Math.atan((lastPoint.plotX - nextLastPoint.plotX) /
                  (lastPoint.plotY - nextLastPoint.plotY));
              } 

              if (angle < 0) angle = Math.PI + angle;

              path.push('M', lastPoint.plotX, lastPoint.plotY);

              if (that._fgraphdata.xAxis.categories.length > 1) {


                if (lastPoint.plotX > nextLastPoint.plotX) {
                  path.push(
                    'L',
                    lastPoint.plotX + arrowWidth * Math.cos(angle),
                    lastPoint.plotY - arrowWidth * Math.sin(angle)
                  );
                  path.push(
                    lastPoint.plotX + arrowLength * Math.sin(angle),
                    lastPoint.plotY + arrowLength * Math.cos(angle)
                  );
                  path.push(
                    lastPoint.plotX - arrowWidth * Math.cos(angle),
                    lastPoint.plotY + arrowWidth * Math.sin(angle),
                    'Z'
                  );
                } else {
                  path.push(
                    'L',
                    lastPoint.plotX - arrowWidth * Math.cos(angle),
                    lastPoint.plotY + arrowWidth * Math.sin(angle)
                  );
                  path.push(
                    lastPoint.plotX - arrowLength * Math.sin(angle),
                    lastPoint.plotY - arrowLength * Math.cos(angle)
                  );
                  path.push(
                    lastPoint.plotX + arrowWidth * Math.cos(angle),
                    lastPoint.plotY - arrowWidth * Math.sin(angle),
                    'Z'
                  );
                }
              }

              series.chart.renderer.path(path)
                .attr({
                  fill: series.color
                })
                .add(series.group);

            });
          }
        }(Highcharts));
        Highcharts.chart('container', chartData);
        (<HTMLElement>document.getElementsByClassName('highcharts-credits')[0]).style.display = 'none';
        (<HTMLElement>document.getElementsByClassName('highcharts-exporting-group')[0]).style.display = 'none';
        console.log(chartData1);
        console.log(chartData);
        Highcharts.chart('containerGraph', chartData1);
      });


      setTimeout(() => {
        const doc = document.getElementsByClassName('rightDiv');
        if (screen.height < doc[0].clientHeight) {
          this._financialservice.leftScreenHeight = doc[0].clientHeight + 'px';
        } else {
          this._financialservice.leftScreenHeight = screen.height + 'px';
        }
      }, 3000);
    }
  }

  openGraph() {
    window.scrollTo(0, 0);
    this.expandGraph = this.expandGraph === 'none' ? 'block' : 'none';
    console.log('openg', this.expandGraph);
  }
  onClose() {
    this.expandGraph = 'none';
  }
}
