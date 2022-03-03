import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  name: String | null = null
  nameFormControl = new FormControl();

  constructor() {
    // this.name = "Nabendu"
  }

  ngOnInit(): void {
    this.name = "nabendu"
  }

}
