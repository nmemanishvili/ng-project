import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name:string = "";
  lastName:string = "";
  city:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  logValue(){
    console.log(`მე ვარ ${this.name} ${this.lastName} ${this.city}დან `)
  }

}
