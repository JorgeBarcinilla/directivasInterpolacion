import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.sass'],
})
export class NgStyleComponent implements OnInit {
  textSize: number = 20;

  constructor() {}

  ngOnInit(): void {}
}
