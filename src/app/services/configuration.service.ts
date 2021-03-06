import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
  public Server = 'http://localhost:7000/';
  public ApiUrl = 'api';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

  public defaultDataset = 'on_time_performance_2014';
  
  constructor() { }

}
