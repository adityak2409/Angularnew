import { Component, OnInit } from '@angular/core';
import { CourseService } from '../utility/course.service';

@Component({
  selector: 'app-corse',
  templateUrl: './corse.component.html',
  styleUrls: ['./corse.component.css']
})
export class CorseComponent implements OnInit {
  mycourse:string[]=[]
  constructor(private service:CourseService) { 
  //1.with new keyword object creation
  //2.with const parameter but view isn't render and before that we given data in mycourse
   //let service=new CourseService()
  service.getcourse();
  //this.mycourse=service.getcourse()
  }
  ngOnInit(): void {
  //3.by using ngOnInit and constructor parameter
  this.mycourse=this.service.getcourse()
  }

}
