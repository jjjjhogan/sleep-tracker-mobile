import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaytimeLoggerPage } from './daytime-logger.page';

describe('DaytimeLoggerPage', () => {
  let component: DaytimeLoggerPage;
  let fixture: ComponentFixture<DaytimeLoggerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaytimeLoggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
