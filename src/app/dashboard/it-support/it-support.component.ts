import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-it-support',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatIconModule],
  templateUrl: './it-support.component.html',
  styleUrl: './it-support.component.scss'
})
export class ItSupportComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  incidents: any[] = [];
  
  displayedColumns: string[] = ['id', 'eitID', 'state', 'description', 'category', 'action'];
    dataSource = this.incidents
  

}
