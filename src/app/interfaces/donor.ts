export interface iDonor {
    id: number;
    first_name: string;
    last_name:string;
    email: string;
    gender: string;
    state: string;
    zip: string;
    address: string;
    amount: number;
    date: string | Date
  }