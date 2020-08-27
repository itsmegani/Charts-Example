import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'varGroupTask';
  isLineChart:boolean = false;
  isBarChart:boolean = false;
  isPieChart:boolean = false;

  form =new FormGroup({
    revenue1:new FormControl('',Validators.required),
    revenue2:new FormControl('',Validators.required),
    revenue3:new FormControl('',Validators.required),
    firstColor:new FormControl('',Validators.required),
    secondColor:new FormControl('',Validators.required),
    thirdColor:new FormControl('',Validators.required)
  });

  // Total colors for displaying in the dropdown
  chartColors:string[]=['Red','Green','Purple','Yellow','Blue','Grey','Orange'];

  //Line Chart Data
  lineChartColors:any[];
  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true  // minimum value will be 0.
        },
        scaleLabel: {
          display: true,
          labelString: 'Select monthly Revenue',
          fontStyle : 'bold'
        }
      }],
      xAxes:[{
        scaleLabel: {
          display: true,
          labelString: 'Color',
          fontStyle : 'bold'
        }
      }]
    }
  };
  lineChartData = [];
  lineChartLabels = ['January', 'February', 'March'];

  //Pie Chart Data
  pieChartLabels:string[] = ['January', 'February', 'March'];
  pieChartData:number[] ;
  pieChartType:string = 'pie';
  pieChartColors: any[];
  pieChartOptions:any = [];
 
  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true ,
    scales: {
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true   // minimum value will be 0.
          },
          scaleLabel: {
            display: true,
            labelString: 'Select monthly Revenue',
            fontStyle : 'bold'
          }
        }],
        xAxes:[{
        scaleLabel: {
          display: true,
          labelString: 'Color',
          fontStyle : 'bold'
        }
      }]
    }
  }
  labels =  ['January', 'February', 'March'];
  chartData = [];
  colors = [];

  selectedChart: string;
  charts: string[] = ['Pie', 'Bar', 'Line'];

  // when the user checked the radio button, the corresponding chart will be displayed on the DOM 
  onSelectionChange(){
    if(this.selectedChart == this.charts[0]){
      this.isPieChart = true;
      this.isBarChart =  false;
      this.isLineChart = false;
      this.pieChartData =[parseInt(this.form.value.revenue1),parseInt(this.form.value.revenue2),parseInt(this.form.value.revenue3)];
      this.pieChartColors = [ {backgroundColor:[this.form.value.firstColor,this.form.value.secondColor,this.form.value.thirdColor]}];
    }
    if(this.selectedChart == this.charts[1]){
      this.isBarChart = true;
      this.isPieChart = false;
      this.isLineChart = false;
      this.chartData = [{data: [parseInt(this.form.value.revenue1), parseInt(this.form.value.revenue2), parseInt(this.form.value.revenue3)]}];
      this.colors = [{backgroundColor:[this.form.value.firstColor,this.form.value.secondColor,this.form.value.thirdColor]}];
    }
    if(this.selectedChart == this.charts[2]){
      this.isLineChart = true;
      this.isPieChart = false;
      this.isBarChart =  false;
      this.lineChartData= [{ data: [parseInt(this.form.value.revenue1)]},
      { data: [null,parseInt(this.form.value.revenue2)]},
      { data: [null,null,parseInt(this.form.value.revenue3)]}];
      this.lineChartColors = [ {pointBackgroundColor:this.form.value.firstColor},
      {pointBackgroundColor:this.form.value.secondColor},{pointBackgroundColor:this.form.value.thirdColor}];
    }
  }

}