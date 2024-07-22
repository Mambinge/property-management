import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enquiry, EnquiryResponse } from '../models/enquires';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://fsboafrica.com/api/';


  constructor(private http: HttpClient) {}

  getEnquiries(): Observable<EnquiryResponse> {
    return this.http.get<EnquiryResponse>(
      `${this.baseUrl}enquiries/all`
    );
  }

  delete(enquiryId: number) {
    return this.http.delete(`${this.baseUrl}enquiries/delete/${enquiryId}`);
  }

  view(enquiryId: number) {
    return this.http.get(`${this.baseUrl}enquiries/get-single/${enquiryId}`);
  }
}
