import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Enquiry, EnquiryResponse } from '../../models/enquires';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquires-list',
  templateUrl: './enquires-list.component.html',
  styleUrl: './enquires-list.component.css',
})
export class EnquiresListComponent implements OnInit {
  enquiries: Enquiry[] = [];
  page: number = 1;
  itemsPerPage: number = 5;
  totalItems: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {

    this.fetchEnquiries();

  }

fetchEnquiries() {
  this.apiService.getEnquiries().subscribe(
    (response: EnquiryResponse) => {
      this.enquiries = response.data;
      this.totalItems = response.totalItems;
      console.log(response);
    },

    (error) => {
      console.error('Error fetching enquiries:', error);
    }
  );
}


delete(id: number) {
  this.apiService.delete(id).subscribe(
    () => {
      this.fetchEnquiries();
      console.log('Enquiry deleted successfully');
    },
    (error) => {
      console.error('Error deleting enquiry:', error);
    }
  );
}

view(id: number) {
  this.router.navigate(['/enquiries', id]);

}
}