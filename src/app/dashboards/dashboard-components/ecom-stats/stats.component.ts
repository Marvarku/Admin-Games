import { Component, ViewChild } from '@angular/core';

import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexTheme,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexFill
} from 'ng-apexcharts';
import { SalesperformanceChartOptions } from '../device-sales/device-sales.component';

export type PageviewChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: any;
  fill: ApexFill;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  colors: string[];
  markers: any;
};

export type earningboxChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
};

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent{
  @ViewChild("chart") chart: ChartComponent = Object.create(null);

  @ViewChild("pageviewchart") chart2: ChartComponent = Object.create(null);
  public PageviewChartOptions: Partial<PageviewChartOptions>;

  @ViewChild('chart') chart3: ChartComponent = Object.create(null);
  public SalesperformanceChartOptions: Partial<SalesperformanceChartOptions>;


  public earningboxChartOptions: Partial<earningboxChartOptions>;

  constructor() {
    this.earningboxChartOptions = {
      series: [
        {
          name: 'Earnings',
          data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
        }
      ],
      chart: {
        type: 'area',
        fontFamily: 'Nunito Sans,sans-serif',
        toolbar: {
          show: false,
        },
        height: 65,
        sparkline: { enabled: true },
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      colors: ['#4fc3f7'],
      legend: {
        show: false,
      },
      grid: {
        show: false
      },
      xaxis: {
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      tooltip: {
        theme: 'dark'
      }
    };
    this.PageviewChartOptions = {
      series: [
        {
          name: 'Streams',
          data: [28, 40, 36, 52, 38, 60, 55]
        },
      ],
      chart: {
        type: "area",
        fontFamily: 'Nunito Sans,sans-serif',
        height: "85",
        toolbar: {
          show: false,
        },
        sparkline: { enabled: true },
      },
      fill: {
        type: "solid",
        colors: ['#fff'],
        opacity: 0.4
      },
      colors: ['#fff'],
      stroke: {
        curve: "straight",
        width: 0,
      },
      tooltip: {
        theme: "dark",
      },
    };


    this.SalesperformanceChartOptions = {
      series: [45, 15, 27],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        type: 'donut',
        height: 123
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60px',
          }
        }
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0
      },
      legends: {
        show: false,
      },
      labels: ['Game A', 'Game B', 'Game C'],
      colors: ['#40c4ff', '#2961ff', '#ff821c'],
    };
  }

}
