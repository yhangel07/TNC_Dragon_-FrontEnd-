import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { JsonPipe } from '@angular/common';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  apiUrl = 'http://localhost:3000';
  users : any;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.apiUrl}/users/${id}`);
    }

    register(user: User) {

        // if (this.users.find(x => x.username === user.username)) {
        //     this.error('Username "' + user.username + '" is already taken')
        // }

        var registerParams = {
            "user":{
                    //"id": user.id,
                    "uname": user.username,
                    "fname": user.firstName,
                    "lname": user.lastName,
                    "password": user.password,
                    "email": user.email,
                    "nickname": 'sampleNickName'
                }
              }
        return this.http.post(`${this.apiUrl}/signup`, registerParams);
    }

    update(user: User) {
        return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }

}