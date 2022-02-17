import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
  Login(user){
    console.log(user);
    return this.http.post("http://localhost:8080/",user);
  }
  getUserByUserName(username:string){
    let hs=new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    return this.http.post("http://localhost:8080/",username, {headers:hs})
  }
  getPdffichedepresnce(id:any) {
    return this.http.get('http://localhost:8080/api/etudiants/getfichepresencebyniveau/'+id
      
    , {responseType:'arraybuffer'});
  
}}

