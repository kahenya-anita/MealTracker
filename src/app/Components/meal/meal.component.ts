import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meals: Meal[] = [
    new this.Meal('Claudia','Breakfast','Mango juice,omlett and asparagus',new'')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
