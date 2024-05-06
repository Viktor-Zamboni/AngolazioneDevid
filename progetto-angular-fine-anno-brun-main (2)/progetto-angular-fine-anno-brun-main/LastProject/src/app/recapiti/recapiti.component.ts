import { Component, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { FooterComponent } from '../components/shared/footer/footer.component';

@Component({
  selector: 'app-recapiti',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './recapiti.component.html',
  styleUrl: './recapiti.component.css'
})
export class RecapitiComponent {
  constructor(private _renderer: Renderer2)
  {

  }

  ngOnInit(){
    this._renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngOnDestroy(): void {
    this._renderer.removeStyle(document.body, 'overflow');
  }
}
