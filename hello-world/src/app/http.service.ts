import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  Url:string='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { 
    
  }
  getPostData(){
  return(this.http.get(this.Url));
  }

  PostData(obj:any){
    return this.http.post(this.Url,obj)
  }
  updateData(obj:any){
   return( this.http.put(`${this.Url}/${obj.id}`,obj))

  }
  deletedata(id:any){
   return( this.http.delete(`${this.Url}/${id}`))

  }
}
