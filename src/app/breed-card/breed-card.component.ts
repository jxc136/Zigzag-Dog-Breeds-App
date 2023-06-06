import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * BreedCardComponent displays detailed information about a selected dog breed.
 * It receives the selected breed as an input and updates its content when the breed changes.
 */

interface Breed {
  id: number;
  name: string;
  weight: {
    metric: string;
  };
  height: {
    metric: string;
  };
  life_span: string;
  bred_for: string;
  breed_group: string;
  image: {
    url: string;
  };
}

@Component({
  selector: 'breed-card-component',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css'],
})
export class BreedCardComponent implements OnChanges {
  @Input() selectedBreed: Breed | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedBreed'] && !changes['selectedBreed'].firstChange) {
      console.log('selectedBreed changed:', this.selectedBreed);
    }
  }
}
