import { Component, OnInit } from '@angular/core';
import { GoogleService } from './google.service';
import { GoogleData } from './google-data';
import { promise as sql } from 'alasql';
import { JsLoaderService } from '../services/js-loader.service';

declare global {
  var gapi;
}

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  // This is the Google javascript API file we want to load.
  private javascriptFile = "https://apis.google.com/js/platform.js";
  private apiJsFile = "https://apis.google.com/js/api.js";

  public googleData: GoogleData = null;
  public tables = "first string";

  constructor(public data: GoogleService,
    private loader: JsLoaderService) { }

  ngOnInit() {

    console.log("Loading the javascript API file.");
    this.loader.loadjs(this.javascriptFile).then(() => {
      console.log("The javascript file has been loaded.");
      this.data.getGoogleData().then((data) => {
        this.googleData = data;
        this.showInfo(data.googleUser);
        this.loader.loadjs(this.apiJsFile).then(() => {
          this.accessSpreadsheet();
        });
      });
    });
    this.create_t_spreadsheets();
    this.updateTables();
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

  // Create the table to hold spreadsheets that are being worked on
  private create_t_spreadsheets() {
    sql("create table t_spreadsheets (id string primary key, "
      + "sheet_id text number, name string);").then((data) => {
        console.log("create_t_spreadsheet finished successfully");
      },
        (error) => {
          console.log("Error trying to create the spreadsheet: "
            + error);
        });
  }

  // updates the tables string with a list of tables from alasql
  private updateTables() {
    sql("show tables").then((data) => {
      this.tables = JSON.stringify(data);
    });
  }


  public signOut() {
    // the following works but isn't needed:
    //gapi.load("client", () => {
    //  console.log("client loaded");
    //});

    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  private accessSpreadsheet() {
    console.log("Attempting to access a spreadsheet");
    gapi.load("client", () => {
      console.log("client loaded");
      gapi.client.load('sheets', 'v4', () => {
        console.log("sheets v4 loaded");
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: "1q_ZTQm16d_nhtgVk9JWdXrhVpXXL2nBKnRVwhc29AH8",
          range: 'Daily!A3'
        }).then((response) => {
          console.log("Range retrieved." 
          + response.result.values[0]);
        });
      });
    });
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