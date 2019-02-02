import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  stu = new Student();
  isRegistered:boolean = false;
  constructor( private mentorService: MentorService) {
        
    
   }
  
  ngOnInit() {
    
  }

  registration(f:NgForm){
    this.mentorService.store(this.stu).subscribe(
      data =>{
        //update the list of students
        //this.student = data;

        //Inform the user
        //this.success = 'Registered successfully';
        this.isRegistered = true;
        console.log("You are successfully registered");
        f.reset();
      },
      (err) => {
        //this.error = err;
        this.isRegistered = false;}
    )
  }

}
