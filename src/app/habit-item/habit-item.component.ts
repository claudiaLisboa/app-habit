import { Component, OnInit, Input} from '@angular/core';
import { Habit } from '../habit';


@Component({
  selector: 'app-habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.scss']
})

export class HabitItemComponent implements OnInit {
      @Input() habit;
     
      // constructor called first time before the ngOnInit()
      constructor() {
       
          
      }

      // called after the constructor and called  after the first ngOnChanges() 
      ngOnInit(): void {}
      
}
