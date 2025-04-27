import { Component, inject, input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

@Component({
  selector: 'app-user-page',
  imports: [],
  templateUrl: './user-page.html',
  styleUrl: './user-page.scss',
})
export class UserPage implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';
  users: User[] = [];
  currentUser: User | undefined;
  userId = input<number>();

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const url = `${this.apiUrl}/${this.userId()}`;
    this.http.get<User>(url).subscribe((data) => {
      this.currentUser = data;
    });
  }
}
