import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-all-reception-requests',
  templateUrl: './all-reception-requests.component.html',
  styleUrls: ['./all-reception-requests.component.scss']
})
export class AllReceptionRequestsComponent {
  receptions:any = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getReceptionRequests().subscribe((data) => {
      this.receptions = data;
    });
  }
}
