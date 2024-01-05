import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  appConfig: AppConfig
  constructor(private http:HttpClient) { }

  load()
  {
    return this.http
               .get<AppConfig>('./assets/config.json')
               .toPromise().then(config=>
                {
                  this.appConfig=config;
                });
  }
}
