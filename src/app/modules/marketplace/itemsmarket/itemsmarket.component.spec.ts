import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsmarketComponent } from './itemsmarket.component';

describe('ItemsmarketComponent', () => {
  let component: ItemsmarketComponent;
  let fixture: ComponentFixture<ItemsmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
