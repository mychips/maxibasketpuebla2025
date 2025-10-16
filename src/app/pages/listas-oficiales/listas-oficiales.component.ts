import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listas-oficiales',
  imports: [CommonModule],
  templateUrl: './listas-oficiales.component.html',
  styleUrl: './listas-oficiales.component.scss'
})
export class ListasOficialesComponent {
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 3000;
  currentSlide = 0;
  hidden = false;


  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  ngOnInit() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }
  
  slides: any[] = [
    {
      url: './assets/images/estados/aguas.png',
      title: '1',
      description: '1',
    },
    {
      url: '/assets/images/estados/bajaNorte.png',
      title: '2',
      description: '2',
    },
    {
      url: '/assets/images/estados/bajaSur.png',
      title: '3',
      description: '3',
    },
    {
      url: '/assets/images/estados/cdmx.png',
      title: '4',
      description: '4',
    },
    // {
    //  url: '/assets/images/mike.jpeg',
    //  title: '5',
    //  description: '5',
    //},
    //{
    //  url: '/assets/images/knicks.jpg',
    //  title: '6',
    //  description: '6',
    //}
  ];

}
