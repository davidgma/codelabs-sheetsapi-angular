import { Component, OnInit } from '@angular/core';
import { GoogleService } from './google.service';

// This stops a compile error for the type window.onSignIn.
// Alternate: (<any>window).onSignIn = (googleUser) => this.onSignIn(googleUser);
// Alternate2: window["onSignIn"] = (googleUser) => this.onSignIn(googleUser);
// Alternate3: (window as any).onSignIn = (googleUser) => this.onSignIn(googleUser);
declare global {
  interface Window { onSignIn: (googleuser: any) => void; }
}

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(private googleService: GoogleService) {
    
   }

   ngOnInit() {
    this.googleService.loadGapi().subscribe();
    window.onSignIn = (googleUser) => this.onSignIn(googleUser);
  }

  public onSignIn(googleUser) {
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

}