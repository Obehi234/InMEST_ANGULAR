
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private leavesDB = [
    {
        "id": 1,
        "EIT_id": "don.moen@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-09-15 | 2023-09-25",
        "status": "Pending "
    },
    {
        "id": 2,
        "EIT_id": "ama.montana@meltwater.org",
        "type": "Property",
        "date": "2023-10-20 | 2023-12-25",
        "status": "Accepted"
    },
    {
        "id": 3,
        "EIT_id": "paul.johnson@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-11-05 | 2023-12-25",
        "status": "Declined"
    },
    {
        "id": 4,
        "EIT_id": "emily.fitz@meltwater.org",
        "type": "Property",
        "date": "2023-08-10 | 2023-09-25",
        "status": "Accepted"
    },
    {
        "id": 5,
        "EIT_id": "grace.oliver@meltwater.org",
        "type": "Property",
        "date": "2023-12-02 | 2023-12-25",
        "status": "Pending "
    },
    {
        "id": 6,
        "EIT_id": "obehi.omo-ataga@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-11-20 | 2023-12-25",
        "status": "Accepted"
    },
    {
        "id": 7,
        "EIT_id": "sylvie.ametepe@meltwater.org",
        "type": "Property",
        "date": "2023-09-30 | 2023-11-25",
        "status": "Declined"
    },
    {
        "id": 8,
        "EIT_id": "grandson.miller@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-10-12 | 2023-10-25",
        "status": "Pending "
    },
    {
        "id": 9,
        "EIT_id": "tony.rodriguez@meltwater.org",
        "type": "Property",
        "date": "2023-11-28 | 2023-12-25",
        "status": "Accepted"
    },
    {
        "id": 10,
        "EIT_id": "roman.montgrand@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-12-01 | 2023-12-25",
        "status": "Declined"
    },
    {
        "id": 10,
        "EIT_id": "yanel.balogoun@meltwater.org",
        "type": "Property",
        "date": "2023-12-15 | 2023-12-25",
        "status": "Pending "
    },
    {
        "id": 11,
        "EIT_id": "betille.macron@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-11-25 | 2023-12-25",
        "status": "Accepted"
    },
    {
        "id": 12,
        "EIT_id": "jean.hollande@meltwater.org",
        "type": "Property",
        "date": "2023-10-18 | 2023-10-25",
        "status": "Declined"
    },
    {
        "id": 13,
        "EIT_id": "kamil.bensalem@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-09-20 | 2023-09-25",
        "status": "Pending "
    }
  ]

  constructor() { }

  getLeaves() {
    return of(this.leavesDB)
  }

  getApprovedLeaves() {

    console.log(this.leavesDB.filter(leave => leave.status === 'Accepted'))
    return of(this.leavesDB.filter(leave => leave.status === 'Accepted'));
  }
  
  getLeaveByID(id:number){
    return of(this.leavesDB.find(element => element.id === id));
  }
}