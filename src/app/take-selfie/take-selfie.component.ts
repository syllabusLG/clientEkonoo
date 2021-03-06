import { Component, OnInit } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-take-selfie',
  templateUrl: './take-selfie.component.html',
  styleUrls: ['./take-selfie.component.css']
})
export class TakeSelfieComponent implements OnInit {

  //toggle webcam on/off
  public showSelfie: boolean = false;
  public showWebcam: boolean = true;
  public allowCameraSwitch: boolean = true;
  public multipleWebcamsAvailable: boolean = true;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    //width: {ideal: 1024},
    //height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // lastest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  constructor(private router: Router) { }

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) =>{
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length> 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.showSelfie = true;
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  goToIdentity(){
    this.router.navigateByUrl('home/(contentOutlet:identity)');
  }

  returnToViewLicenceDriverVerso(){
    this.router.navigateByUrl('home/(contentOutlet:viewLicenceDriverVerso)');
  }

}
