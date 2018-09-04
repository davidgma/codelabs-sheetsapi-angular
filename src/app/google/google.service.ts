// From https://github.com/rubenCodeforges/ng-gapi/blob/master/src/GoogleApiService.ts

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Observer } from "rxjs";

@Injectable()
export class GoogleService {

  private readonly gapiUrl: string =
  'https://apis.google.com/js/platform.js';

  constructor() {
  }

  public loadGapi(): Observable<void> {
    return Observable.create(
      (observer: Observer<boolean>) => {
        let node = document.createElement('script');
        node.src = this.gapiUrl;
        node.type = 'text/javascript';
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0]
          .appendChild(node);
        node.onload = () => {
          observer.next(true);
          observer.complete();
        };
      });
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
