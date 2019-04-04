import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-knowledge6',
  templateUrl: './knowledge6.component.html',
  styleUrls: ['./knowledge6.component.css']
})
export class Knowledge6Component implements OnInit {

  interval;
  timeLeft:number = 10;

  constructor(private router: Router) {
    this.startTimer();
  }

  ngOnInit() {
    this.goToNext()
  }

  private goToNext(){
    setTimeout(()=>{
      this.router.navigateByUrl('home/(contentOutlet:knowledge7)');
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

}
