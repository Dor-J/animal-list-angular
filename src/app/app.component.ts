import { Component } from '@angular/core';
import { AnimalInfos } from './models/animalInfos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'animal-list-angular';

  animalInfos: AnimalInfos[] = [
    { type: 'Malayan Tiger', count: 787 },
    { type: 'Mountain Gorilla', count: 212 },
    { type: 'Fin Whale', count: 28 },
  ];
}
