import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-quizsection',
  templateUrl: './quizsection.component.html',
  styleUrls: ['./quizsection.component.css']
})
export class QuizsectionComponent implements OnInit {
  name1:any
  quesArray:any
  currentQues:any
  quesInter:any
  counter=60
  isCurrentAns:any
  selectedAns=[]
  points:any=0
  correctAns=0
 
 
 
      constructor(private router:Router){ 
       this.name1=localStorage.getItem('uname')
       this.currentQues=0
       this.isCurrentAns=false
       this.correctAns=0
       this.quesArray=[{
         "quesLabel":"Which of the following does TypeScript use to specify types?",
         "options":[{
           "label":":",
           "correct":true},
           {
             "label":";"
             
           },
           {
             "label":"!"
           },
           {
             "label":"&"
           }]
         },
           {
             "quesLabel":"TS uses a colon (:) to separate the property name from the property type",
             "options":[{
               "label":"number"
               },
               {
                 "label":"string"
                 
               },
               {
                 "label": "boolean",
                 
               },
               {
                 "label":"enum",
                 "correct":true
               }]
           },
           {
             "quesLabel":"How can we specify properties and methods for an object in TypeScript?",
             "options":[{
               "label":"Use classes.",
               },
               {
                 "label":"Use interfaces.",
                 "correct":true
                 
               },
               {
                 "label":"Use enums."
               },
               {
                 "label":"Use async/await."
               }]
           },
           {
             "quesLabel":"How else can Array<number> be written in TypeScript?",
             "options":[{
               "label":"@number"},
               {
                 "label":"number[]",
                 "correct":true
                 
               },
               {
                 "label":"number!"
               },
               {
                 "label":"number?",
               
               }]
           },
           {
             "quesLabel":"In which of these does a class take parameters?",
             "options":[{
               "label":"constructor",
               "correct":true},
               {
                 "label":"destructor"
                 
               },
               {
                 "label":"import"
               },
               {
                 "label":"subscribe"
               }]
           },
           {
             "quesLabel":"Which is NOT an access modifier?",
             "options":[{
               "label":"private",
               },
               {
                 "label":"protected"
                 
               },
               {
                 "label":"public"
               },
               {
                 "label":"async",
                 "correct":true
               }]
           },
           {
             "quesLabel":"Which keyword allows us to share information between files in TypeScript?",
             "options":[{
               "label":"export",
               "correct":true},
               {
                 "label":"async"
                 
               },
               {
                 "label":"constructor"
               },
               {
                 "label":"import"
               }]
           },
           {
             "quesLabel":"Which is an array method to generate a new array based on a condition?",
             "options":[{
               "label":"filter",
               "correct":true},
               {
                 "label":"map"
                 
               },
               {
                 "label":"async"
               },
               {
                 "label":"enum"
               }]
           },
           {
             "quesLabel":"How is a property accessible within a class?",
             "options":[{
               "label":"Using this.propertyName",
               "correct":true},
               {
                 "label":"Accessors"
                 
               },
               {
                 "label":"Destructuring"
               },
               {
                 "label":"Arrow function"
               }]
           },
           {
             "quesLabel":"How many keywords are there in JavaScript to declare variables or constants?",
             "options":[{
               "label":"1"},
               {
                 "label":"2"
                 
               },
               {
                 "label":"3",
               "correct":true
               },
               {
                 "label":"4"
               }]
           }
 
 
       ]
     }
     
 
     
      ngOnInit(): void {
        this.startCount();
       // setTimeout((timer:any)=>{
       //   this.quesInter.unsubscribe();
       //   // this.router.navigateByUrl('/result')
       //  })
      }
      onSelect(question:any,options:any,option:any){
       // question.isAttempted=true;
       options.forEach((element:any)=>{
         element.isSelected=false;
       });
       this.isCurrentAns=true;
       if(option.correct){
         this.points=this.points+10;
          
         
         
       }
       else{
         this.points=this.points-10
 
       }
       localStorage.setItem('point',this.points)
       console.log(this.points);
      option.isSelected=true;
       
     }
     nextQues(){
       if(!(this.quesArray.length-1==this.currentQues)){
         this.currentQues++;
         this.startCount()
       }else{
 
       }
     }
      prevQues(){
     if(this.currentQues !==0){
       this.currentQues--;
     }
    }
    timeout(){
     if(this.currentQues==9 && this.counter==1){
      this.router.navigateByUrl('/result')
   } }
     startCount(){
       this.counter=60
       this.quesInter=interval(1300).subscribe(counter=>{
         this.counter--;
         if(this.counter==0){
           this.nextQues();
           
         }else 
         {
           this.timeout();
         }
       })
     }
    finish(){
     this.router.navigateByUrl('/result')
    }
      
 }
 


