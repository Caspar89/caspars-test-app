import { Component, Injectable } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
@Injectable()
export class AppComponent {
  constructor(private appService: AppService) {}
  public test_1 = "";
  public test_2 = "";
  public test_web = "";
 
  ngOnInit() {
    this.subscribeToSubject();
    this.subscribeToWebSubject();
    setTimeout(() => { this.appService.setSubject("Hi! was changed from the main component"); }, 5000);
  }

  private subscribeToSubject(): void {
    this.appService.getSubject().subscribe({
      next: (v) => { this.test_1 = v }
    });
    this.appService.getSubject().subscribe({
      next: (v) => { this.test_2 = v }
    });
  }

  private subscribeToWebSubject(): void {
    this.appService.getWebSubject().subscribe({
      next: (v) => { this.test_web = v }
    });
  }
}