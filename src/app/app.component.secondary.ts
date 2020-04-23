import { Component, Injectable } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-component-secondary',
  templateUrl: './app.component.secondary.html'
})

@Injectable()
export class AppComponentSecondary {
  constructor(private appService: AppService) {}
  public test_1 = "";
  public test_2 = "";
 
  ngOnInit() {
    this.subscribeToSubject();
  }

  private subscribeToSubject(): void {
    this.appService.getSubject().subscribe({
      next: (v) => { this.test_1 = v }
    });
    this.appService.getSubject().subscribe({
      next: (v) => { this.test_2 = v }
    });
  }
}