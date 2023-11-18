import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  // blood groups
  getBloodGroups() {
    return this.http.get(`${this.baseUrl}/blood-groups`);
  }

  // create blood donation request
  createBloodDonationRequest(body:any) {
    return this.http.post( `${this.baseUrl}/donation-requests`, body);
  }

  // create blood donation request
  createBloodReceptionRequest(body:any) {
    return this.http.post( `${this.baseUrl}/reception-requests`, body);
  }

  // get donation requests by user
  getDonationRequestsByUser(id:string) {
    return this.http.get(`${this.baseUrl}/users/${id}?filter[include]=donation-requests`);
  }
  // get all donations
  getDonationRequests() {
    return this.http.get(`${this.baseUrl}/donation-requests`);
  }
  // get one donation
  getDonationRequestById(id:string) {
    return this.http.get(`${this.baseUrl}/donation-requests/${id}?filter[include]=donor&filter[include]=bloodGroup`);
  }
  // get reception requests by user
  getReceptionRequestsByUser(id:string) {
    return this.http.get(`${this.baseUrl}/hospitals/${id}?filter[include]=reception-requests`);
  }
  // get all reception
  getReceptionRequests() {
    return this.http.get(`${this.baseUrl}/reception-requests`);
  }
  // get one reception
  getReceptionRequestById(id:string) {
    return this.http.get(`${this.baseUrl}/reception-requests/${id}?filter[include]=receptor&filter[include]=bloodGroup`);
  }
}
