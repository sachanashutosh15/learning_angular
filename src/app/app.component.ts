import {
  Component,
  ElementRef,
  Inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localStorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router
  ) {
    console.log('>>>initConfig:', this.initService.config);
  }
  title = 'hotelInventoryApp';
  role = 'Admin';

  // @ViewChild('user', { read: ViewContainerRef, static: true })
  // vcr!: ViewContainerRef;

  @ViewChild('test', { static: true })
  testVCR!: ElementRef;

  ngOnInit() {
    console.log('>>> in ngOnInit of app component');
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
    // this.testVCR.nativeElement.innerText = 'Testing';
    // this.localStorage.setItem('name', 'Hilton Hotel');
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log('>>> Navigation Started');
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('>>> Navigation Ended');
      });
  }
}
