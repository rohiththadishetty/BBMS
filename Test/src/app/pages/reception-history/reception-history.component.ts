import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-reception-history',
  templateUrl: './reception-history.component.html',
  styleUrls: ['./reception-history.component.scss']
})
export class ReceptionHistoryComponent {
  user:any;
  fullProfile:any;
  constructor(private api: ApiService, private auth: AuthService) {}
  ngOnInit() {
    this.user = this.auth.currentUserValue;
    this.api.getReceptionRequestsByUser(this.user.userId).subscribe((data) => {
      this.fullProfile = data;
      console.log(this.fullProfile);
    });
  }
}
