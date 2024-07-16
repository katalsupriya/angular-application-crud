import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //get data function

  getData(){
    
    let url="https://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
    // return{
    //   Id:1,
    //   name: 'Sunil Salaria',
    //   Age: 28,
    //   Gender:'Male'
    // }
  }

}
