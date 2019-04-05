import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {Router} from '@angular/router';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  goToMenu() {
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }

}
