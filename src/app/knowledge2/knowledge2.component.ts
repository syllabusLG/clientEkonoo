import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-knowledge2',
  templateUrl: './knowledge2.component.html',
  styleUrls: ['./knowledge2.component.css']
})
export class Knowledge2Component implements OnInit {

  interval;
  timeLeft:number = 10;
  constructor(private router: Router) {
    this.startTimer();
  }

  ngOnInit() {
    //this.goToNext()
  }

  private goToNext(){
    setTimeout(()=>{
      this.router.navigateByUrl('home/(contentOutlet:knowledge3)');
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

  goToKnowledge3(){
    this.router.navigateByUrl('home/(contentOutlet:knowledge3)');
  }

  returnToKnowledge1(){
    this.router.navigateByUrl('home/(contentOutlet:knowledge)');
  }


}
