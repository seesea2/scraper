import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

interface image {
  src: string;
  title: string;
  description: string;
}
@Component({
  selector: 'home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  images: image[];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.images = [
      {
        src: '/assets/desktop.jpg',
        title: 'desktop',
        description: ''
      },
      { src: '/assets/desktop2.jpg', title: 'desktop2', description: '' },
      { src: '/assets/desktop3.jpg', title: 'desktop3', description: '' }
    ];
  }
}
