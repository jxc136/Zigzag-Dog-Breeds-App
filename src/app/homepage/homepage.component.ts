import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

/**
 * The HomepageComponent is responsible for displaying the main page of the app.
 * It retrieves the list of dog breeds from the DogApiService and allows users to select a breed, view its details,
 * and display all available dog breeds.
 *
 * This component should be split into two components to handle user interactions and display the data
 * and should be the priority for seperation of concerns if there were not time constraints
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
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  constructor(private DogApiService: DogApiService) {}

  doglist: string[] = []; // The names of dogbreeds for the dropdown
  alldogs: Breed[] = []; // An array of dog breed objects from the API
  selectedBreed: Breed | null = null; // Keeps track of the currently selected breed from the dropdown
  displayDogsClicked = false; // This determines if the breed-card-component is displayed or the 'all dogs' view


  ngOnInit(): void {
    // Retrieves the dog breed data from the API when the app is initialised 
    this.displayDogs(); 
  }

  displayDogs(): void {
  this.DogApiService.getBreeds()
    .then(response => {
      const data = response.data;
      this.alldogs = data;
      console.log(this.alldogs);
    })
    .catch(error => {
      console.log(error);
    });
  }

  populateNames(): void {
    if (this.alldogs) {
      this.doglist = this.alldogs.map((breed: Breed) => breed.name);
    }
  }

  handleBreedChange(e: Event): void {
    const target = e.target as HTMLSelectElement;
    const selectedName = target.value;
    if (this.alldogs) {
      const selectedDog = this.alldogs.find((breed: Breed) => breed.name === selectedName);
      this.selectedBreed = selectedDog || null;
    }
  }  

  handleButtonClick(): void {
     this.displayDogsClicked = true;
  }

  handleCardClick(dog: Breed): void {
    this.selectedBreed = dog
    this.handleButtonClick()
  }

  viewAllDogs(): void {
    this.displayDogsClicked = false;
  }
}