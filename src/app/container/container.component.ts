import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeesComponent) employees!: EmployeesComponent;
  ngAfterContentInit(): void {
    this.employees.employeeName = 'Rick';
  }
}
