import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from 'src/app/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-donation-request',
  templateUrl: './donation-request.component.html',
  styleUrls: ['./donation-request.component.scss']
})
export class DonationRequestComponent {
  loading:boolean = true;
  user:any = {};
  donationId:string = '';
  donation:any = {};
  constructor(private api: ApiService, private route: ActivatedRoute, private http: HttpClient, private auth: AuthService, private message: NzMessageService) {}
  ngOnInit() {
    this.user = this.auth.currentUserValue;
    console.log(this.user);
    const donationId = this.route.snapshot.paramMap.get('id') || '';
    this.donationId = donationId;
    this.init();
  }
  init() {
    this.api.getDonationRequestById(this.donationId).subscribe((donation) => {
      this.donation = donation;
      this.donation.bloodGroupId = this.donation.donor?.bloodGroupId;
      this.loading = false;
    });
  }
  cancelRequest() {
    this.donation.isCancelled = true;
    this.http.patch('http://localhost:3000/api/donation-requests', this.donation).subscribe(() => {
      this.message.success('The Blood donation request was cancelled');
      this.init();
    });
  }
  acceptRequest() {
    this.donation.isAccepted = true;  
    this.http.patch('http://localhost:3000/api/donation-requests', this.donation).subscribe(() => {
      this.message.success('The Blood donation request was accepted');
      this.init();
    });
  }
  fulfillRequest() {
    this.donation.isReceived = true;
    this.http.post('http://localhost:3000/api/donation-requests/fulfill', this.donation).subscribe(() => {
      this.message.success('The Blood donation request was fulfilled');
      this.init();
    });
  }
}
