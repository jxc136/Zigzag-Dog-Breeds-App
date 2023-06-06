import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BreedCardComponent } from './breed-card/breed-card.component';
import { HomepageComponent } from './homepage/homepage.component';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent , HomepageComponent, BreedCardComponent,]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a h1 element 'Zigzag dog-breeds'`, () => {
  const fixture = TestBed.createComponent(AppComponent);
  const h1El = fixture.nativeElement.querySelector('h1');
  expect(h1El).toBeTruthy();
  expect(h1El.innerText).toContain('ZigZag Dog Breeds');
});
});
