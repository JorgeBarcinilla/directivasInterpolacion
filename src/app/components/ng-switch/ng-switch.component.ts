import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.sass'],
})
export class NgSwitchComponent implements OnInit {
  opcion: string | null = 'opcion1';

  constructor() {}

  ngOnInit(): void {}

  cambiarOpcion(): void {
    let numero = Math.floor(Math.random() * 3);
    this.opcion = 'opcion' + (numero + 1);
  }
}
