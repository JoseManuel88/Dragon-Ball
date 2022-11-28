import { Component } from '@angular/core';
import { CommunicatorService } from './services/communicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dragon-Ball';

  public ocultar = false;

  constructor(private communicatorService: CommunicatorService) {
    this.communicatorService.getLoading().subscribe(res => {
      console.log(res);
      this.ocultar = res;
    });
  }
}
