import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  tweets:string[];

  constructor(private http:HttpClient, private twitter:TwitterService) { }

  ngOnInit() {
  	//This HTTP request won't work because of the same-origin permissions we've discussed in lecture. But it does demonstrate how an HTTP request would be made!
  	// this.http.get('http://inf133-fa18.depstein.net').toPromise().then(response => {
  	// 	console.log(response);
  	// });

    //Twitter is a service I created, defined in twitter.service.ts. It has a function, getTweets() which returns a Promise.
    //After the Promise completes, I parse the response and set it to the tweets[] array. The array is then bound to the view of the component, looped over with *ngFor.
    this.twitter.getTweets().then((tweets) => {
      this.tweets = tweets['statuses'].map((tweet) => {
        return tweet.text;
      });
    });
  }

}
