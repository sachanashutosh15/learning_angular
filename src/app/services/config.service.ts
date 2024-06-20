import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig.interface';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log('>>> in config service constructor', this.configToken);
  }
}
