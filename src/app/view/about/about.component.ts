import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  longText:string = "პროგრამული ენის ჯავას პროექტი ინიცირებული იყო ჯეიმს გოზლინგის, მაიკ შერიდანის და პატრიკ ნოთონის მიერ 1991 წლის ივნისში. თავდაპირველად ჯავა შეიქმნა ინტერაცტიული ტელევიზიისთვის, მაგრამ იმ დროისთვის არსებული საკაბელო ტელევიზიის ინდუსტრიისთვის, ზედმეტად განვითარებული არმოჩნდა. დასაწყისში ერქვა OAK მუხა, შემდეგ OAK TREE, შემდეგ GREEN  და საბოლოოდ დაერქვა Java, როგორც ჯავა ყავის ტიპი ინდონეზიაში. პირველი საჯარო პროექტი Java 1.0. გაეშვა, კომპანია Sun microsistems -ის მიერ 1996 წელს."
  constructor() { }

  ngOnInit(): void {
  }

}
