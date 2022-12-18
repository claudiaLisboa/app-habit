import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { Habit } from './habit';


@Injectable({
  providedIn: 'root'
})

export class HabitService {

    habits: Habit[] = [
      {
        id: 1,
        title: 'Go to the gym 6 times a week',
        count: 6
      },
      {
        id: 2,
        title: 'Walk Dora 40 minutes 2 times a day',
        count: 4
      },
      {
        id: 3,
        title: 'Work on side project 5 hours/week',
        count: 3
      },
      {
        id: 4,
        title:'Read for 20 minutes a day',
        count: 7
      },
      {
        id: 5,
        title:'Clean littier of cat 3 times a day',
        count: 2
      }
    ];

  constructor() {}

  getHabits(): Observable<Habit[]>{
    return of (this.habits);
  }

  addHabit(newHabit){
    const id = this.habits.length +1;
    newHabit.id = id;
    this.habits.push(newHabit);
    
  }
  
}
