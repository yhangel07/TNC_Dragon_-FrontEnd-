import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class WordpressService {
 
  url = 'https://tnc.com.ph/wp-json/wp/v2/';
  totalPosts = null;
  pages: any;
 
  constructor(private http: HttpClient) { }
 
  getPosts(page = 1): Observable<any[]> {
    let options = {
      observe: "response" as 'body',
      params: {
        per_page: '5',
        page: ''+page
      }
    };
 
    return this.http.get<any[]>(`${this.url}posts?_embed`, options).pipe(
      map(resp => {
        this.pages = resp['headers'].get('x-wp-totalpages');
        this.totalPosts = resp['headers'].get('x-wp-total');
 
        let data = resp['body'];
 
        for (let post of data) {
          post.media_url = post['_embedded']['wp:featuredmedia'];
        }
        return data;
      })//,
      //catchError(error => of(console.log('Empty pipe')))
      
    )
  }
 
  getPostContent(id) {
    return this.http.get(`${this.url}posts/${id}?_embed`).pipe(
      map(post => {
        post['media_url'] = post['_embedded']['wp:featuredmedia'];
        return post;
      }),
      catchError(error => of(console.log('Empty pipe')))


    )
  }
}