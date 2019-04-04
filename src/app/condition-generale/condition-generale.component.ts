import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-condition-generale',
  templateUrl: './condition-generale.component.html',
  styleUrls: ['./condition-generale.component.css']
})
export class ConditionGeneraleComponent implements OnInit {

  @ViewChild('demo') demo: ElementRef;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLancementA(){
    this.router.navigateByUrl('home/(contentOutlet:lancementA)');
  }

  downloadPDF(){
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    let content = this.demo.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('condition_general.pdf');
  }

}
