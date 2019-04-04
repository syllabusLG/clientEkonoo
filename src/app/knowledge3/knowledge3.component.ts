import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-knowledge3',
  templateUrl: './knowledge3.component.html',
  styleUrls: ['./knowledge3.component.css']
})
export class Knowledge3Component implements OnInit {

  interval;
  timeLeft:number = 10;
  constructor(private router: Router) {
    this.startTimer();
  }

  ngOnInit() {
    //this.goToNext();
  }
  private goToNext(){
    setTimeout(()=>{
      this.router.navigateByUrl('home/(contentOutlet:knowledge4)');
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
  goToKnowledge4(){
    this.router.navigateByUrl('home/(contentOutlet:knowledge4)');
  }


}
