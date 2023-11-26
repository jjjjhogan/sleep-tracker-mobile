import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OvernightLoggerPage } from './overnight-logger.page';

describe('OvernightLoggerPage', () => {
  let component: OvernightLoggerPage;
  let fixture: ComponentFixture<OvernightLoggerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OvernightLoggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
