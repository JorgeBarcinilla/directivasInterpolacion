import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.sass'],
})
export class NgIfComponent implements OnInit {
  public verDiv: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
