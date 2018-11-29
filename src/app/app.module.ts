import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PersonsService } from './services/persons';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CounterComponent } from './counter/counter.component';


const appRoutes: Routes = [
  { path: 'persons', component: PersonsComponent },
  { path: 'person/:id', component: PersonDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PersonsComponent,
    PersonDetailsComponent,
    CounterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [ PersonsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
