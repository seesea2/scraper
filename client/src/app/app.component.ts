import { Component } from '@angular/core';
import { faAnchor, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faAnchor = faAnchor
  faHeart = faHeart;
}
