import { Component } from '@angular/core';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent {
  router: any;
  data_received(formdata:any){
    console.log(formdata)
    this.router.navigateByUrl("/dashboard");

  }
}
