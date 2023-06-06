import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  /**
   * Retrieves dog breeds from an external API.
   * Note: This implementation directly includes the API key for simplicity and ease of reviewing.
   * In a production environment this would be stored in environment variables for security
   */ 
  getBreeds() {
    return axios.get('https://api.thedogapi.com/v1/breeds?page=0', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'live_WMjr3tA6GeDabDHcclPgxGhvAWlE0beFziPaE2FBEcZI3A72NKkSMFaFaIdYuhCa'
      }
    });
  }
  
}
