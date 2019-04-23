import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispositif6',
  templateUrl: './dispositif6.component.html',
  styleUrls: ['./dispositif6.component.css']
})
export class Dispositif6Component implements OnInit, AfterViewInit {

  @ViewChild(SignaturePad)
  signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 350,
    'canvasHeight': 200
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    //console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    //console.log('begin drawing');
  }
  goToDispositif7(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif7)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  goToRachat(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif5)');
  }
  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
}


