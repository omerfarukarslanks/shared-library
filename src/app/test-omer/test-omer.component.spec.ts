import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOmerComponent } from './test-omer.component';

describe('TestOmerComponent', () => {
  let component: TestOmerComponent;
  let fixture: ComponentFixture<TestOmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
