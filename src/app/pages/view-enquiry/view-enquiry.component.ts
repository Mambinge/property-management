import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enquiry } from '../../models/enquires';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit {
  enquiry: Enquiry = {} as Enquiry; 

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getEnquiry(id);
  }

  getEnquiry(id: number): void {
    this.apiService.view(id).subscribe(
      (data: any) => {
        this.enquiry = data;
        console.log(this.enquiry);
        
      },
      (error: any) => {
        console.error('Error fetching enquiry:', error);
      }
    );
  }


}
