import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  score:any
   constructor(){
    this.score=localStorage.getItem('point')
   }
   ngOnInit(): void {
     
   }

}
