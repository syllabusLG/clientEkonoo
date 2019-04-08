import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Adresse} from '../adresse/adresse.component';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispositif1',
  templateUrl: './dispositif1.component.html',
  styleUrls: ['./dispositif1.component.css']
})
export class Dispositif1Component implements OnInit {

  position: string = 'Societe Générale';
  myControl = new FormControl();
  options: Adresse[] = [
    {name: 'Amundi Tenu des comptes'},
    {name: 'AXA Tenue des comptes'},
    {name: 'BNP Paribas'},
    {name: 'HSBC'},
    {name: 'Pro BTP'},
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
  goToDispositif2(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif2)');
  }

}
