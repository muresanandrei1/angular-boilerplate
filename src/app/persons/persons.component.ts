import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from '../services/persons';
import { Observable } from 'rxjs/Rx';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  public persons;

  private personSubscription;

  constructor(private router: Router, private personsService: PersonsService) {}

  displayedColumns: string[] = ['email', 'phone', 'nat', 'cell'];

  ngOnInit() {
    this.personSubscription = this.personsService.getPersons().subscribe((data) => {
      this.persons = data.results;
    });
  }

  ngOnDestroy() {
    this.personSubscription.unsubscribe();
  }

  clickExample = (id) => {
    this.router.navigate([`/person`, id]);
  }
}
