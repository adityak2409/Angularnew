import { Component, OnInit } from '@angular/core';
import { Http1Service } from '../http1.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  post:any[]=[]
  constructor(private service:Http1Service) {
  
   }

  ngOnInit(): void {
   
    this.GetPost()
  }

  GetPost(){
   this.service.getPostData().subscribe((myresponse:any)=>{
   console.log(myresponse)
   this.post=(myresponse)
   })
  
  }
  onSend(mytitle:any,mybody:any){
    
    let obj={
      title:mytitle,
      body:mybody
    }
    this.service.PostData(obj).subscribe((response)=>{
      console.log(response);
    })
  }
  onEdit(item:any){
    
  }
  }
  

