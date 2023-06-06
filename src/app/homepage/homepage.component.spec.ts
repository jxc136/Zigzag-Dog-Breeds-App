import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent} from './homepage.component';
import { MatCardModule } from '@angular/material/card'; 

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent,],
      imports: [MatCardModule,]
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a dropdown of breed items', () => {
     const dropdownEl: HTMLElement = fixture.nativeElement.querySelector('#dog-dropdown')
     const breedOptions = dropdownEl.querySelectorAll('option');
     expect(dropdownEl).toBeDefined()
     expect(breedOptions.length).toBeGreaterThan(0)

  })

  it('should render a button to get a dog bio', () => {
    const buttonEl: HTMLElement = fixture.nativeElement.querySelector('#homepage-button')
    expect(buttonEl).toBeDefined()
    expect(buttonEl.innerText).toBe('Submit')
  })
});

describe('Dropdown Element', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent]
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should call the handleChange function when a new item is selected', () => {

    const dropdownEl: HTMLSelectElement = fixture.nativeElement.querySelector('#dog-dropdown select')
    spyOn(component, 'handleBreedChange')
  
    dropdownEl.dispatchEvent(new Event('change'));
    expect(component.handleBreedChange).toHaveBeenCalled()
  });

  it('should track the selected breed option', () => {
    const dropdownEl: HTMLSelectElement = fixture.nativeElement.querySelector('#dog-dropdown select');
    const mockBreedOption = {
      id: 1,
      name: 'Maltese',
      weight: { metric: '4-7' },
      height: { metric: '21-25' },
      life_span: '12-15 years',
      bred_for: 'Companion',
      breed_group: 'Toy',
      image: { url: 'https://example.com/maltese.jpg' }
    };
    component.alldogs = [mockBreedOption]
    dropdownEl.value = mockBreedOption.name;
    dropdownEl.dispatchEvent(new Event('change'));

    fixture.detectChanges(); 

    expect(component.selectedBreed).toEqual(mockBreedOption);
  });


})

describe('Button Element', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent]
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should call the handleClick function when the submit button is clicked', () => {

    const buttonEl: HTMLButtonElement = fixture.nativeElement.querySelector('#homepage-button')
    spyOn(component, 'handleButtonClick')
    buttonEl.dispatchEvent(new Event('click'));
    expect(component.handleButtonClick).toHaveBeenCalled()
  });


})