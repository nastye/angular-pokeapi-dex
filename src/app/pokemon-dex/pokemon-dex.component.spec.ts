import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDexComponent } from './pokemon-dex.component';

describe('PokemonDexComponent', () => {
  let component: PokemonDexComponent;
  let fixture: ComponentFixture<PokemonDexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
