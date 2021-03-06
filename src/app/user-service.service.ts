import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserServiceService {

  private usersUrl :string;
  // private adduserUrl:string;
  constructor(private http : HttpClient) { 
    this.usersUrl = 'http://localhost:8080/users';
    // this.adduserUrl = 'http://localhost:8080/adduser';
  }

  public findAll() : Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user :User){
    return this.http.post<User>(this.usersUrl,user);
  }
}
