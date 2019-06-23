export interface LunchPal {
  _id: any;
  name: string;
}

export interface LunchRecord {
  _id: any;
  createdOn: string;
  attendees: string[];
  payer: string;
}

export interface LunchStats {
  name: string;
  attendance: number;
  payment: number;
}
