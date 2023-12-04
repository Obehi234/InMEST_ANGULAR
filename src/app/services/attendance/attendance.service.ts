import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private attendanceDb = [
    {
      id: 1,
      eit_id: 'john.doe@meltwater.org',
      reporting_time: '8:30am',
      class: true,
      number_of_times: 3,
      skills: 'UI/UX',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 3',
      number_of_working_days: '24',
      number_of_times_mest_in: '1',
      most_missed_classes: 'Business',
      absense: '7',
      punctuality: 'Good',
      requests: '4',
    },
    {
      id: 2,
      eit_id: 'alice.smith@meltwater.org',
      reporting_time: '9:00am',
      class: false,
      number_of_times: 1,
      skills: 'Backend Developer',
      role: 'Fellow',
      status: 'Part time',
      milestone: 'Capston 3',
      number_Of_working_days: '24',
      number_Of_timesMestIn: '4',
      most_missed_classes: '8',
      absense: '1',
      punctuality: 'Good',
      requests: '1',
    },
    {
      id: 3,
      eit_id: 'bob.johnson@meltwater.org',
      reporting_time: '8:45am',
      class: true,
      number_of_times: 31,
      skills: 'Frontend Developer',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 2',
      number_Of_working_days: '34',
      number_Of_timesMestIn: '4',
      most_missed_classes: '3',
      absense: '4',
      punctuality: 'Good',
      requests: '4',
    },
    {
      id: 4,
      eit_id: 'emma.wilson@meltwater.org',
      reporting_time: '9:15am',
      class: true,
      number_of_times: 0,
      skills: 'Business Development',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 7',
      number_Of_working_days: '24',
      number_Of_timesMestIn: '4',
      most_missed_classes: '8',
      absense: '4',
      punctuality: 'Excellent',
      requests: '4',
    },
    {
      id: 5,
      eit_id: 'samuel.roberts@meltwater.org',
      reporting_time: '9:30am',
      class: false,
      number_of_times: 4,
      skills: '',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 1',
      number_Of_working_days: '24',
      number_Of_timesMestIn: '4',
      most_missed_classes: '8',
      absense: '4',
      punctuality: 'Good',
      requests: '4',
    },
    {
      id: 6,
      eit_id: 'sarah.davis@meltwater.org',
      reporting_time: '8:55am',
      class: true,
      number_of_times: 2,
      skills: 'UI/UX',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 1',
      number_Of_working_days: '24',
      number_Of_timesMestIn: '4',
      most_missed_classes: '8',
      absense: '4',
      punctuality: 'Good',
      requests: '4',
    },
    {
      id: 7,
      eit_id: 'michael.thompson@meltwater.org',
      reporting_time: '8:40am',
      class: true,
      number_of_times: 0,
      skills: 'UI/UX',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 1',
      number_Of_working_days: '24',
      number_Of_timesMestIn: '4',
      most_missed_classes: '8',
      absense: '4',
      punctuality: 'Good',
      requests: '4',
    },
    {
      id: 8,
      eit_id: 'olivia.wilson@meltwater.org',
      reporting_time: '9:20am',
      class: false,
      number_of_times: 3,
      skills: 'UI/UX',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 1',
      number_Of_working_days: '24',
      number_Of_timesMestIn: '4',
      most_missed_classes: '8',
      absense: '4',
      punctuality: 'Good',
      requests: '4',
    },
    {
      id: 9,
      eit_id: 'benjamin.brown@meltwater.org',
      reporting_time: '8:35am',
      class: true,
      number_of_times: 1,
      skills: 'JavaScript, NodeJS ',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 4',
      number_Of_working_days: '24',
      number_Of_timesMestIn: '4',
      most_missed_classes: '8',
      absense: '4',
      punctuality: 'Good',
      requests: '4',
    },
    {
      id: 10,
      eit_id: 'grace.thomas@meltwater.org',
      reporting_time: '9:10am',
      class: true,
      number_of_times: 5,
      skills: 'Java, Android, Kotlin',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 1',
      number_Of_working_days: '24',
      number_Of_timesMestIn: '4',
      most_missed_classes: '8',
      absense: '4',
      punctuality: 'Good',
      requests: '4',
    },
  ];
  constructor() {}

  getAttendance() {
    return of(this.attendanceDb);
  }

  getSingleAttendance(id: number) {
    const user = this.attendanceDb.find((element) => 
      element.id = id
    );
    return of (user);
  }
}