import { NgZone } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let ngZone: NgZone;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '**', component: NotFoundComponent }
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    ngZone = TestBed.get(NgZone);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show not found link', fakeAsync(() => {
    ngZone.run(() => {
      // Arrange
      const url = '/AaAaMv';
      const spanUrlElement = fixture.debugElement.query(By.css('span[class=notfound_url]'));

      // Act
      router.navigate([url]);
      tick();
      fixture.detectChanges();

      // Assert
      expect(spanUrlElement.nativeElement.textContent).toBe(url);
    });
  }));
});
