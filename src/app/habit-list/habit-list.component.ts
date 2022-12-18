import { Component, OnInit, } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';


@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})

export class HabitListComponent implements OnInit{
     habits: Observable<Habit[]> ;

    
    // constructor called first time before the ngOnInit()
    constructor(private habitService: HabitService) {
        this.habits = habitService.getHabits();
    } 
  
    // called after the constructor and called  after the first ngOnChanges() 
    ngOnInit(): void{
        this.habits = this.habitService.getHabits().pipe(
            map((habits) =>{
            return habits.map((habit) =>{
                habit.streak = habit.count > 5 ? true : false;
                return habit;
            });
        }));
    
    } 

    onAddHabit(newHabit){
        this.habitService.addHabit(newHabit);
    }

}
