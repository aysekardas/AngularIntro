import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  todoList:string[] = [
    'Liste elemanı 1',
  ];
}
 // imports: [NavbarComponent],
//sayfa dediğimiz yapıların selectorü olmaz, selector diğer componentten çağırılmaya yarıyor