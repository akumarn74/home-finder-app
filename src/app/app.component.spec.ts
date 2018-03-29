import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeFormListComponent } from './home-form-list/home-form-list.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeListingComponent } from './home-listing/home-listing.component';
import { FormsModule } from '@angular/forms';
import { SortByPipe } from './pipes/sort-by.pipe';
import { HomeService } from './services/home.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { UtilService } from './services/util.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeFormListComponent,
        HomeCardComponent,
        HomeListingComponent,
        SortByPipe 
      ],
      imports:[FormsModule,
        HttpClientModule,
        HttpModule],

      providers: [HomeService,UtilService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
