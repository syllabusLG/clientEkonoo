import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-knowledge1',
  templateUrl: './knowledge1.component.html',
  styleUrls: ['./knowledge1.component.css']
})
export class Knowledge1Component implements OnInit {

  interval;
  timeLeft:number = 10;

  constructor( private router: Router) {

    this.startTimer();
  };

  ngOnInit() {
    //this.goToNext()
  }
  private goToNext(){
    setTimeout(() =>{
      this.router.navigateByUrl('home/(contentOutlet:knowledge2)');
    }, 10000);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10;
      }
    },1000)
  }

  goToKnowledge2(){
    this.router.navigateByUrl('home/(contentOutlet:knowledge2)');
  }
  returnToConnaissance(){
    this.router.navigateByUrl('home/(contentOutlet:connaissance)');
  }



}
