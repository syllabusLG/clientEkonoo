import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-knowledge5',
  templateUrl: './knowledge5.component.html',
  styleUrls: ['./knowledge5.component.css']
})
export class Knowledge5Component implements OnInit {

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
      this.router.navigateByUrl('home/(contentOutlet:knowledge6)');
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
  goToScore(){
    this.router.navigateByUrl('home/(contentOutlet:score)');
  }

}
