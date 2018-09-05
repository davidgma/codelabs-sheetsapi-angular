import { Component, OnInit } from '@angular/core';
import { GoogleService } from './google.service';
import { GoogleData } from './google-data';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  // This is the Google javascript API file we want to load.
  private javascriptFile = "https://apis.google.com/js/platform.js";

  public googleData: GoogleData = null;

  constructor(public data: GoogleService) { }

  ngOnInit() {
    console.log("Loading the javascript API file.");
    let node = document.createElement('script');
    node.src = this.javascriptFile;
    node.type = 'text/javascript';
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0]
      .appendChild(node);
    node.onload = () => {
      console.log("The javascript file has been loaded.");
      this.data.getGoogleData().then((data) => {
        this.googleData = data;
        this.showInfo(data.googleUser);
      });
    }
  }

  public showInfo(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }

  // OLD BUT KEEP: 
  // This stops a compile error for the type window.onSignIn.
  // Alternate: (<any>window).onSignIn = (googleUser) => this.onSignIn(googleUser);
  // Alternate2: window["onSignIn"] = (googleUser) => this.onSignIn(googleUser);
  // Alternate3: (window as any).onSignIn = (googleUser) => this.onSignIn(googleUser);
  //declare global {
  //  interface Window { onSignIn: (googleuser: any) => void; }
  //}
  // window.onSignIn = (googleUser) => this.onSignIn(googleUser);

}