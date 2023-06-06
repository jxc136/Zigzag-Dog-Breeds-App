import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { BreedCardComponent } from './breed-card.component';

describe('BreedCardComponent', () => {
  let component: BreedCardComponent;
  let fixture: ComponentFixture<BreedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedCardComponent],
      imports: [MatCardModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedCardComponent);
    component = fixture.componentInstance;

    component.selectedBreed = {
      id: 1,
      name: 'Maltese',
      weight: { metric: '4-7' },
      height: { metric: '21-25' },
      life_span: '12-15 years',
      bred_for: 'Companion',
      breed_group: 'Toy',
      image: { url: 'https://example.com/maltese.jpg' }
    };

    fixture.detectChanges()

    
  });

  it('should create a material UI card component', () => {
    const cardEl = HTMLElement = fixture.nativeElement.querySelector('mat-card')
    expect(cardEl).toBeTruthy();
  });

  it('should display mat-card title and subtitle elements in a header', () => {
    const cardEL = HTMLElement = fixture.nativeElement.querySelector('mat-card')
    const headerEl = HTMLElement = cardEL.querySelector('mat-card-header')
    expect(headerEl).toBeTruthy();

    const titleEl = HTMLElement = headerEl.querySelector('mat-card-title')
    expect(titleEl).toBeTruthy();

    const subTitleEl = HTMLElement = headerEl.querySelector('mat-card-subtitle')
    expect(subTitleEl).toBeTruthy();
  });

  it('should display the name and breed group in mat-card title and subtitle elements', () => {
    const cardEL = HTMLElement = fixture.nativeElement.querySelector('mat-card')
    const headerEl = HTMLElement = cardEL.querySelector('mat-card-header')
    
    const titleEl = HTMLElement = headerEl.querySelector('mat-card-title')
    expect(titleEl.textContent).toBe(component.selectedBreed?.name);

    const subTitleEl = HTMLElement = headerEl.querySelector('mat-card-subtitle')
    expect(subTitleEl.textContent).toBe(component.selectedBreed?.breed_group);
  })

  it('should display an image of the active dog ', () => {
    const cardEL = HTMLElement = fixture.nativeElement.querySelector('mat-card') 
    const imageEl = HTMLElement = cardEL.querySelector('img[mat-card-image]')
    expect(imageEl).toBeTruthy();
    expect(imageEl.getAttribute('src')).toContain(component.selectedBreed?.image.url);
    
  });


  it('should display information on the weight height life span and bred for active dog ', () => {
    const cardEL = HTMLElement = fixture.nativeElement.querySelector('mat-card')
    const contentEl = HTMLElement = cardEL.querySelector('mat-card-content')
    expect(contentEl).toBeTruthy();
    expect(contentEl.textContent).toContain(component.selectedBreed?.weight.metric)
    expect(contentEl.textContent).toContain(component.selectedBreed?.height.metric)
    expect(contentEl.textContent).toContain(component.selectedBreed?.life_span)
    expect(contentEl.textContent).toContain(component.selectedBreed?.bred_for)
  
  });


});
