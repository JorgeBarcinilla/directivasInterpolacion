import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.sass'],
})
export class PropertyBindingComponent implements OnInit {
  public urlImg =
    'https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png';

  public nombre: string = 'Jorge';

  constructor() {}

  ngOnInit(): void {}
}
