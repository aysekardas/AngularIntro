import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
 // imports: [NavbarComponent],
//sayfa dediğimiz yapıların selectorü olmaz, selector diğer componentten çağırılmaya yarıyor