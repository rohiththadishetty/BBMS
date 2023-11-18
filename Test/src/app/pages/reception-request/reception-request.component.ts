import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from 'src/app/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-reception-request',
  templateUrl: './reception-request.component.html',
  styleUrls: ['./reception-request.component.scss']
})
export class ReceptionRequestComponent {
  loading:boolean = true;
  user:any = {};
  receptionId:string = '';
  reception:any = {};
  constructor(private api: ApiService, private route: ActivatedRoute, private http: HttpClient, private auth: AuthService, private message: NzMessageService) {}
  ngOnInit() {
    this.user = this.auth.currentUserValue;
    this.receptionId = this.route.snapshot.paramMap.get('id') || '';
    this.init();
  }
  init() {
    this.api.getReceptionRequestById(this.receptionId).subscribe((donation) => {
      this.reception = donation;
      this.reception.bloodGroupId = this.user.bloodGroupId;
      this.loading = false;
    });
  }
  cancelRequest() {
    this.reception.isCancelled = true;
    this.http.patch('http://localhost:3000/api/reception-requests', this.reception).subscribe(() => {
      this.message.success('The Blood reception request was cancelled');
      this.init();
    });
  }
  acceptRequest() {
    this.http.post('http://localhost:3000/api/reception-requests/accept', this.reception).subscribe(() => {
      this.reception.isAccepted = true;
      this.message.success('The Blood reception request was accepted');
      this.init();
    }, (err) => {console.log(err);this.message.error(err.error?.error?.message)});
  }
  fulfillRequest() {
    this.http.post('http://localhost:3000/api/reception-requests/fulfill', this.reception).subscribe(() => {
      this.message.success('The Blood reception request was fulfilled');
      this.reception.isDelivered = true;
      this.init();
    }, (err) => {console.log(err);this.message.error(err.error?.error?.message)});
  }
}
