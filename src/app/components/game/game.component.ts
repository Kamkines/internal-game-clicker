import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  points = 0

  onImageClick() {
    this.points++;
    const image = document.querySelector('.click-image');

    image?.classList.add('shake-image');
    setTimeout(() => {
      image?.classList.remove('shake-image')
    }, 500
    )
  }
}