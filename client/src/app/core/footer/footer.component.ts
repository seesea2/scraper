import { Component, OnInit } from '@angular/core';
import { faHeart, faAnchor } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faWeixin
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faAnchor = faAnchor;
  faHeart = faHeart;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;
  faWeixin = faWeixin;

  constructor() {}

  ngOnInit() {}
}
