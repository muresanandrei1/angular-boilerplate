import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PersonsService {
  constructor(private http:HttpClient) {}

  getPersons = () =>
    this.http.get('https://randomuser.me/api/?results=20')
}