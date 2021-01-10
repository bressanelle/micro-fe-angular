import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'micro-fe-angular';

  ngOnInit(){
    const microapp1 = document.createElement('script')
    microapp1.src = 'http://localhost:8080/microapp1/main.js'
    document.body.appendChild(microapp1)

    const microapp2 = document.createElement('script')
    microapp2.src = 'http://localhost:8080/microapp2/main.js'
    document.body.appendChild(microapp2)
  }
}
