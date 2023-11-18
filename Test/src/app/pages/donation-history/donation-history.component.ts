import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.component.html',
  styleUrls: ['./donation-history.component.scss']
})
export class DonationHistoryComponent {
  user:any;
  fullProfile:any;
  constructor(private api: ApiService, private auth: AuthService) {}
  ngOnInit() {
    this.user = this.auth.currentUserValue;
    this.api.getDonationRequestsByUser(this.user.userId).subscribe((data) => {
      this.fullProfile = data;
      console.log(this.fullProfile);
    });
  }
}
