import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {


  @Output() days: Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getDays(): void  {
	let datePicker = document.getElementById("birthday");
	if (datePicker === null) return;
	let birthDate = (<HTMLInputElement>datePicker).value;
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;

	// a and b are javascript Date objects
	function dateDiffInDays(a: Date, b: Date) {
	  // Discard the time and time-zone information.
	  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
	}

	let start = new Date(birthDate);
	let end = new Date();

	let difference = dateDiffInDays(start, end);
	this.days = Number(difference);
	console.log(difference);
	
  }

}
