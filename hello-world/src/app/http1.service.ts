import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Http1Service {
  Url:string='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) {
    
   }
   getPostData(){
    return(this.http.get(this.Url));
    }
  PostData(obj:any){
    return(this.http.post(this.Url,obj))
  }
}
