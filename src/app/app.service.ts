import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  startTimer(timeLeft, interval) {
    interval = setInterval(() => {
      if(timeLeft > 0) {
        timeLeft--;
      } else {
        timeLeft = 60;
      }
    },1000)
  }
}
