import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Adresse} from '../adresse/adresse.component';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rachat1',
  templateUrl: './rachat1.component.html',
  styleUrls: ['./rachat1.component.css']
})
export class Rachat1Component implements OnInit {

  position: string = 'Liquidation dû au chomage long terme';
  myControl = new FormControl();
  options: Adresse[] = [
    {name: 'Depart à la retraite'},
    {name: 'Depart à la retraite anticipé'},
    {name: 'Achat résidence principale'},
    {name: this.position}
  ];
  filteredOptions: Observable<Adresse[]>;

  myFilter(){
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Adresse>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  displayFn(adresse?: Adresse): string | undefined{
    return adresse ? adresse.name : undefined;
  }
  private _filter(name: string): Adresse[]{
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.myFilter();
  }
  goToRachat2(){
    this.router.navigateByUrl('home/(contentOutlet:rachat2)');
  }
  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }

  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }

  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }


}
