import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  canvas: any;
  ctx: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  goToOnBoard1(){
    this.router.navigateByUrl('home/(contentOutlet:onBoard1)');
  }
  returnToKnowledge5(){
    this.router.navigateByUrl('home/(contentOutlet:knowledge5)');
  }

}
