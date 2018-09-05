// This is a version of google-data-service that doesn't use RxJS
// The import code came from https://github.com/rubenCodeforges/ng-gapi/blob/master/src/GoogleApiService.ts

import { Injectable } from '@angular/core';
import { GoogleData } from './google-data';

@Injectable()
export class GoogleService {

  public data: GoogleData;
  private promises = new Array<Promise<void>>();
  public googleUser: any;

  constructor() {
    let p1 = new Promise<void>((resolve) => {
      // Listen to the onSignIn event from the html data-onsuccess="onSignIn"
      window["onSignIn"] = (googleUser) => {
        this.googleUser = googleUser;
        resolve();
      };
    });
    this.promises.push(p1);
  }

  public getGoogleData(): Promise<GoogleData> {
    let p = new Promise<GoogleData>((resolve) => {
      // Wait until there is data
      Promise.all(this.promises).then(() => {
        let gd = new GoogleData();
        gd.googleUser = this.googleUser;
        gd.profile = this.googleUser.getBasicProfile();
        gd.id_token = this.googleUser.getAuthResponse().id_token;
        console.log('Full Name: ' + gd.profile.getName());
        resolve(gd);
      });
    });
    return p;
  }


  /* OLD
  public haveAuth = false;
  public client_id =
  "492755457190-ccvd44h31u9t4043g72jlvpk2dsel205.apps.googleusercontent.com"
  // no longer used
  public loadAuth() {
    let gapi: any;
    gapi.load("client", () => {
      console.log("api loaded");
      gapi.client.load('sheets', 'v4', () => {
        console.log("sheets v4 loaded");
        let scope = [
          //  'https://www.googleapis.com/auth/spreadsheets',
          // View your Google Spreadsheets
          'https://www.googleapis.com/auth/spreadsheets.readonly'
        ];
        let immediate = false;
        gapi.auth.authorize({
          client_id: this.client_id,
          scope: scope, immediate: immediate
        }, authResult => {
          if (authResult && !authResult.error) {
            console.log("Auth success");
            this.haveAuth = true;
            this.run();
          } else {
            console.log("Auth error: " + authResult.error);
          }
        });
        //this.run();
      });
    });
  }
 

  // no longer used
  private async run() {
    let gapi: any;
    gapi.client.load('sheets', 'v4', () => {
      console.log("sheets loaded again");
      //gapi.client.spreadsheets.values.get({
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1GKWxuvh6cp2nGyetJsWIcGWD2J8zBSB8dZPGoafCkLE',
        range: 'foods!A1:C',
      }).then(function (response) {
        let range = response.result;
        console.log(range);
      });

    });
  }
 */

}
