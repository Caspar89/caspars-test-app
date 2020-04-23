import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppClient } from './app.client';

@Injectable()
export class AppService {
  constructor() {
    const appClient: AppClient = new AppClient();
    appClient.getStuff().then((resp) => {
      this.setWebSubject(resp);
    });
  }
  public subject: ReplaySubject<string> = new ReplaySubject<string>();
  public webSubject: ReplaySubject<string> = new ReplaySubject<string>();

  public getSubject(): ReplaySubject<string> {
    return this.subject;
  }

  public setSubject(newSubject: string) {     
    this.subject.next(newSubject);
  }

  public getWebSubject(): ReplaySubject<string> {
    return this.webSubject;
  }

  public setWebSubject(newSubject: string) {     
    this.webSubject.next(newSubject);
  }
}
