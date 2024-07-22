export interface Enquiry {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }

  export interface EnquiryResponse {
    data: Enquiry[];
    totalItems:any;
  }