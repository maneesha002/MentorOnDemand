import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Technologies } from '../models/technologies.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TechnologiesService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8896/technologies';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Technologies[]>(this.userUrl); 
  }
  public getByTechnologies(select){
    return this.http.get<Technologies[]>(this.userUrl+"/technologies/"+select);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.techid);
  }

  public createUser(user) {
    return this.http.post<Technologies>(this.userUrl, user);
  }

}
