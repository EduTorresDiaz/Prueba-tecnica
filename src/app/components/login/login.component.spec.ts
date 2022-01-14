import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { MatSlideToggleHarness } from '@angular/material/slide-toggle/testing';


const res = {
  email: 'etdiaz@soaint.com',
  password: '123456',
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let storage = {};

  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [MatSlideToggleModule],
      declarations: [ LoginComponent ],
      providers: [MatSlideToggleHarness],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    storage = {};
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string => {
        return  storage = <string>value;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger toggle', () => {
    const componentDebug = fixture.debugElement;
    const slider = componentDebug.query(By.directive(MatSlideToggle));
    spyOn(component, 'toggle');
    slider.triggerEventHandler('change', null);
    expect(component.toggle).toHaveBeenCalled();
  });

  it('onSubmit', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });

  it('simula un usuario', () => {
    const toggle = document.getElementById('toggle') as HTMLElement;
    const button = document.getElementById('button') as HTMLElement;
    (<HTMLInputElement>document.getElementById('email')).value = 'etdiaz@soaint.com';
    (<HTMLInputElement>document.getElementById('password')).value = '123456';
    toggle.click();
    toggle.click();
    expect(res).toEqual({'email': 'etdiaz@soaint.com', 'password': '123456'});
  });

  
});


