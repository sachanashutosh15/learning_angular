import { InjectionToken } from '@angular/core';
import { AppConfig } from './appConfig.interface';
import { environment } from 'src/environments/environment';

export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  endPoint: environment.endPoint,
};
