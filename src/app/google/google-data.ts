export class GoogleData {
    public profile: any = null;
    public id_token: string = "";
    public googleUser: any;
  
    public toString(): string {
      let ret = "";
      if (this.profile == null) {
        return "You are not connected";
      }
      else {
        ret += "ID: " + this.profile.getId() + ". ";
      //console.log('Full Name: ' + this.profile.getName());
      console.log('Given Name: ' + this.profile.getGivenName());
      console.log('Family Name: ' + this.profile.getFamilyName());
      console.log("Image URL: " + this.profile.getImageUrl());
      console.log("Email: " + this.profile.getEmail());
      
      }
      if (this.id_token.length != 0) {
        console.log("ID Token: " + this.id_token);
      }
      return ret;
    }
  }