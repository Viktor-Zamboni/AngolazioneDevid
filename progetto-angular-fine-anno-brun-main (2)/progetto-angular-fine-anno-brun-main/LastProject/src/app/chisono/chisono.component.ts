import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chisono',
  standalone: true,
  imports: [],
  templateUrl: './chisono.component.html',
  styleUrl: './chisono.component.css',
})
export class ChisonoComponent {
  constructor(private _renderer: Renderer2)
  {

  }

  //tolgo lo scroll dalla pagina
  ngOnInit(){
    this._renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  //ripristino lo scroll della pagina
  ngOnDestroy(): void {
    this._renderer.removeStyle(document.body, 'overflow');
  }
}
