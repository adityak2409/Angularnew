import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 myid1!:number
  constructor(private route:ActivatedRoute) 
  {

   }

  ngOnInit(): void {
   this.GetDataFromUrl();
  }
  GetDataFromUrl(){
   this.route.paramMap
   .subscribe((param:any)=>{
    this.myid1=+param.get("id")
   })
  }
}
