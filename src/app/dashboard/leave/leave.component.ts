import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './../../material/material.module';
import { CdkTableDataSourceInput } from '@angular/cdk/table';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterLink, MatTabsModule, MatTableModule, MatCardModule, MaterialModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class LeaveComponent implements OnInit {
  leaves: any [] = [];
element: any;
dataSource: CdkTableDataSourceInput<any> | undefined;
  constructor(
    private leaveService: LeaveService
  ){ }
  ngOnInit(): void {
    this.getLeaves();
  }
  getLeaves(){
    this.leaveService.getLeaves().subscribe((resp : any)=> {
        this.leaves = resp;
    });
  }
}
