import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
 // imports: [NavbarComponent],
//sayfa dediğimiz yapıların selectorü olmaz, selector diğer componentten çağırılmaya yarıyor