import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/shared-services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  safehtml:any;
  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit() {
    window.localStorage.clear();
    this._auth.authUser = null;
      // window.localStorage.clear();
      this.deleteAllCookies();
      // this._auth.authUser = null;
      // this._auth.logoutPost().subscribe((data)=>{
      //   window.location.reload();
      // });
      
  }

  deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
}
