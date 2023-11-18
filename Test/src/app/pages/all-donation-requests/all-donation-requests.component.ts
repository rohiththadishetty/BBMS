import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-all-donation-requests',
  templateUrl: './all-donation-requests.component.html',
  styleUrls: ['./all-donation-requests.component.scss']
})
export class AllDonationRequestsComponent {
  donations:any = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getDonationRequests().subscribe((data) => {
      this.donations = data;
    });
  }

}
