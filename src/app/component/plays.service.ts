import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Play } from './play';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class PlaysService {
  

  model = 'plays';

  constructor(private http: HttpClient) { }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlWithID(course.id), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }



}


// plays: Play[] = [
//   {
//     id: '1',
//     title: 'Shallow',
//   },
//   {
//     id: '2',
//     title: 'Cross',
//   },
//   {
//     id: '3',
//     title: 'Missle',
//   },
// ]