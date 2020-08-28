import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealFormComponent } from './Components/meal-form/meal-form.component';
import { MealComponent } from './Components/meal/meal.component';

@NgModule({
  declarations: [
    AppComponent,
    MealFormComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
