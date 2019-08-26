import { Component } from '@angular/core';
import { AuthService } from '../app/shared/shared-services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _auth: AuthService
  ) {
      this._auth.getclientDetails().subscribe((data: any) => {
        // console.log(data);
        sessionStorage.setItem('clientDetails', JSON.stringify( data));
        this._auth.setAppFavicon('appIcon', data.browserTitle, data.favIcon);
      }, (error) => {
        console.log(error);
      });
  }
}

