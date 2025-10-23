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
    { url: '/assets/images/estados/1.png', title: '1', description: '1' },
    { url: '/assets/images/estados/2.png', title: '2', description: '2' },
    { url: '/assets/images/estados/3.png', title: '3', description: '3' },
    { url: '/assets/images/estados/4.png', title: '4', description: '4' },
    { url: '/assets/images/estados/5.png', title: '5', description: '5' },
    { url: '/assets/images/estados/6.png', title: '6', description: '6' },
    { url: '/assets/images/estados/7.png', title: '7', description: '7' },
    { url: '/assets/images/estados/8.png', title: '8', description: '8' },
    { url: '/assets/images/estados/9.png', title: '9', description: '9' },
    { url: '/assets/images/estados/10.png',title: '10',description: '10'},
    { url: '/assets/images/estados/11.png',title: '11',description: '11'},
    { url: '/assets/images/estados/12.png',title: '12',description: '12'},
    { url: '/assets/images/estados/13.png',title: '13',description: '13'},
    { url: '/assets/images/estados/14.png',title: '14',description: '14'},
    { url: '/assets/images/estados/15.png',title: '15',description: '15'},
    { url: '/assets/images/estados/16.png',title: '16',description: '16'},
    { url: '/assets/images/estados/17.png',title: '17',description: '17'},
    { url: '/assets/images/estados/18.png',title: '18',description: '18'},
    { url: '/assets/images/estados/19.png',title: '19',description: '19'},
    { url: '/assets/images/estados/20.png',title: '20',description: '20'},
    { url: '/assets/images/estados/21.png',title: '21',description: '21'},
    { url: '/assets/images/estados/22.png',title: '22',description: '22'},
    { url: '/assets/images/estados/23.png',title: '23',description: '23'},
    { url: '/assets/images/estados/24.png',title: '24',description: '24'},
    { url: '/assets/images/estados/25.png',title: '25',description: '25'},
    { url: '/assets/images/estados/26.png',title: '26',description: '26'},
    { url: '/assets/images/estados/27.png',title: '27',description: '27'},
    { url: '/assets/images/estados/28.png',title: '28',description: '28'},
  ];

}
