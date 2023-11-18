import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  user:any = null;
  role:string = '';
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.currentUser.subscribe((user) => {
      console.log(user);
      this.role = user?.role;
      this.user = user;
    });
  }

  doLogout() {
    this.auth.logout();
  }
}
