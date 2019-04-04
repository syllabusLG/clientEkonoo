import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-epargne-retraite-col',
  templateUrl: './epargne-retraite-col.component.html',
  styleUrls: ['./epargne-retraite-col.component.css']
})
export class EpargneRetraiteColComponent implements OnInit {

  PieChart=[];

  constructor(private router: Router) { }

  globalChart(){
    // pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ["Collectif 40%", "Individuel 60%","Plan d'épargne retraite collectif 35%"],
        datasets: [
          {
            label: '# of Votes',
            data: [28, 60, 12],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64 )'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },
        ]

      },

      options: {
        legend:{
          labels: {
            fontColor: "white",
            fontFamily: 'Roboto',
          },

        },
        title:{
          text:"",
          display:true,
        },

      }
    });

  }

  goToEpargneRetraiteCollectif(){
    this.router.navigateByUrl('home/(contentOutlet:epargneRetraiteCol)');
  }
  goToEpargneEntreprise(){
    this.router.navigateByUrl('home/(contentOutlet:epargneEntreprise)');
  }
  goToEpargneRetraiteIndividuel(){
    this.router.navigateByUrl('home/(contentOutlet:epargneRetraiteInd)');
  }
  goToEpargneIndividuel(){
    this.router.navigateByUrl('home/(contentOutlet:epargneIndividuel)');
  }

  ngOnInit() {
    this.globalChart();
  }

}
