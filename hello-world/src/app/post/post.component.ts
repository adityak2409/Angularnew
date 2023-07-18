import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
post:any[]=[]
id:number=0;
title:string="";
body:string='';
ishidden:boolean=true


  constructor(private service:HttpService) {

   }


  ngOnInit(): void {
    this.GetPost()
  }

  GetPost(){
   this.service.getPostData().subscribe((myresponse:any)=>{
   console.log(myresponse)
   this.post=(myresponse)
   },(myerror)=>{
    alert("Error occured")
   })
  
 
   
   

  }
  onsend(mytile:any,mybody:any){
    let obj={
       Title:mytile,
       Body:mybody
    }  
    this.service.PostData(obj).subscribe((response)=>{
     console.log(response);
    })
  }
    onEdit(item:any){
    //console.log(item)
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.ishidden=false
    }
  
    onupdate(){
      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }
      this.service.updateData(obj).subscribe((response)=>{
      console.log(response)
      })
      this.ishidden=true
    }
    ondelete(id:any){
    this.service.deletedata(id).subscribe((response)=>{
      console.log(response)
    })
    }

}
