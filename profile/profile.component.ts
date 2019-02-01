import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any;
check: boolean = true;
  
  constructor() { 
    this.user = {
      name: 'Jobin',
      job: 'softeare engineer',
      address: 'Trivandrum',
      phone: ['7736862991','9400091251']
    }
  }
togglecheck(){
  this.check = !this.check;
}

  ngOnInit() {
  }

}
