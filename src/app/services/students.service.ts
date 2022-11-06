import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private myclient:HttpClient) { }
  private Base_URL = "http://localhost:3000/students";

  getAllStudents(){
    return this.myclient.get(this.Base_URL);
  }
  getStudentByID(id:number){
    return this.myclient.get(`${this.Base_URL}/${id}`);
  }
  addStudent(addStudent:{}){
    return this.myclient.post(this.Base_URL,addStudent);
  }
  updateStudent(id:number,updatedStudent:any){
    return this.myclient.put(`${this.Base_URL}/${id}`,updatedStudent);
  }

  deleteStudent(id:number){
    return this.myclient.delete(`${this.Base_URL}/${id}`);
  }
}
