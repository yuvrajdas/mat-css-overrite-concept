import { Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio'; 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor() { }

  ngOnInit(): void {
  }

}
