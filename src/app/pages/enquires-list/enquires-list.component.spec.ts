import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiresListComponent } from './enquires-list.component';

describe('EnquiresListComponent', () => {
  let component: EnquiresListComponent;
  let fixture: ComponentFixture<EnquiresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnquiresListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
