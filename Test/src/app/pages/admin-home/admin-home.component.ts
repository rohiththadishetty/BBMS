import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  constructor(private http: HttpClient) {}
  bloodGroups:any = [];

  listOfColumns = [
    {
      title: 'Blood Group',
      index: 'name'
    },
    {
      title: 'Blood Amount',
      index: 'bloodAmount'
    }
  ];
  ngOnInit() {
    this.http.get('http://localhost:3000/api/blood-groups').subscribe((data) => {
      this.bloodGroups = data;
    });
  }
}
