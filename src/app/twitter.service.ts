import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http:HttpClient) { }

  getTweets():Promise<any> {
  	return this.http.get('http://localhost:7890/1.1/search/tweets.json?q=%23RunKeeper').toPromise();
  }
}
