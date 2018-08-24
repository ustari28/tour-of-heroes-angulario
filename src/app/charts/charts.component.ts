import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {ViewChild} from '@angular/core';
import { GoogleChartComponent, Ng2GoogleChartsModule } from '../../../../node_modules/ng2-google-charts';
import {GoogleCharts} from 'google-charts';
import { Chart } from "chart.js";
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
//pattern = patternomaly.pattern;
  pieChartData =  {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Quantity'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7],
        ['Netflix',    58]
      ],
      options: {title: 'Chart1',
                is3D: true,
                chartArea: { width: '100%' },
                animation: {
                  startup: true,
                  duration: 1000,
                  easing: 'out',
                }
              },
  };
showSpinner: boolean;
chart: any;
data = {
  datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: []
  }],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
  ]
};
options = {animation: {animateScale: true},
tooltips: {
  callbacks: {
      labelColor: function(tooltipItem, chart) {
          return {
              borderColor: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(255, 255, 255)'
          }
      },
      labelTextColor: function(tooltipItem, chart){
          return 'rgb(255, 255, 255)';
      }
  }
}
}
  constructor() { }
   ngOnInit(): void {
    this.showSpinner = true;
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: this.data,
      options: this.options
  });
  this.showSpinner = false;
   }
  updateChart(task: String, value: number): void {
    this.chart.data.labels.push(task);
    this.chart.data.datasets.forEach((dataset) => {
      let color = 255 * Math.random();
      let color1 = 255 * Math.random();
      let color2 = 255 * Math.random();
        dataset.data.push(value);
        dataset.backgroundColor.push('rgba(' + color1 + ', ' + color2 + ', ' + color + ', 0.8)');
        dataset.hoverBackgroundColor.push('rgba(' + color1 + ', ' + color2 + ', ' + color + ', 0.8)');
    });
    this.chart.update();
  }

}
