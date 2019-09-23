import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomOverviewComponent } from './bottom-overview.component';

describe('BottomOverviewComponent', () => {
  let component: BottomOverviewComponent;
  let fixture: ComponentFixture<BottomOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
