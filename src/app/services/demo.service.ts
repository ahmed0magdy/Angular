import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private myClient:HttpClient) { }

  private BASE_URL="https://jsonplaceholder.typicode.com/users";
  //CRUD
  getAllUsers(){
    return this.myClient.get(this.BASE_URL); //return body as default
  }
  getUserByID(id:number){
    // return this.myClient.get(this.BASE_URL+"/"+id)
    return this.myClient.get(`${this.BASE_URL}/${id}`);
  }  
  Adduser(newuser:{}){
    return this.myClient.post(this.BASE_URL,newuser);
  }
}
