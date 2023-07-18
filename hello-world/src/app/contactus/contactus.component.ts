import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
myid:number=0
myusername:string=""
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetDataFromUrl()
  }
  GetDataFromUrl(){
    this.route.paramMap.
    subscribe((param:any)=>{
      this.myid=+param.get("id")
      this.myusername=param.get("username")
    })
  }


}
