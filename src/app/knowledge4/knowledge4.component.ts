import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-knowledge4',
  templateUrl: './knowledge4.component.html',
  styleUrls: ['./knowledge4.component.css']
})
export class Knowledge4Component implements OnInit {

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
      this.router.navigateByUrl('home/(contentOutlet:knowledge5)');
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

  goToKnowledge5(){
    this.router.navigateByUrl('home/(contentOutlet:knowledge5)');
  }


}
