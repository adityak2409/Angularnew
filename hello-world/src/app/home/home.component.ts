import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myid:number=9;
myusername:string="Aditya-Kadam";


  constructor(private route : Router) {

   }

  ngOnInit(): void {
   
  }
  onPage1(){
  this.route.navigate(['/Page1'])
  }
  onAbout(){
  this.route.navigate(['/AboutUs',this.myid])
  }
  
  onContact(){
  this.route.navigate(['/ContactUs',this.myid,this.myusername])
  }

  onFollower(){
  this.route.navigate(['/Follower'])
  }

  onQueryParameter(){
  this.route.navigate(['/QueryParameter'],{
    queryParams:this.jsonobj
  })
  
  }



  jsonobj={
    id:9,
    fname:"aditya",
    role:"devops"
  }


}
