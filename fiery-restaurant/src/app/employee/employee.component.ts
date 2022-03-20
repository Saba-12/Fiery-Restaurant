import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeName:string="Seher"
  EmployeeSalary:number=150000
  EmployeeAge:number=22

  constructor() { }

  ngOnInit(): void {
  }

}
