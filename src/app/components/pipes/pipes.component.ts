import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass'],
})
export class PipesComponent implements OnInit {
  fecha: Date = new Date();

  fechaTransformada: string | null = this.datePipe.transform(
    new Date(),
    'fullDate'
  );

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}
}
