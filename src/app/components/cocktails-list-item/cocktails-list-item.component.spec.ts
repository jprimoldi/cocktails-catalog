import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsListItemComponent } from './cocktails-list-item.component';

describe('CocktailsListItemComponent', () => {
  let component: CocktailsListItemComponent;
  let fixture: ComponentFixture<CocktailsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
