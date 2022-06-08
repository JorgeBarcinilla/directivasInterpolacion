import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.sass'],
})
export class NgClassComponent implements OnInit {
  public nombre: string = 'Jorge Luis Palacio Barcinilla';
  public edad: number = 26;
  public error: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
