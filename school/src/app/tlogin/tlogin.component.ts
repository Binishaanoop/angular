import { Component } from '@angular/core';

@Component({
  selector: 'app-tlogin',
  templateUrl: './tlogin.component.html',
  styleUrls: ['./tlogin.component.css']
})
export class TloginComponent {
  router: any;
  data_received(formdata:any){
    console.log(formdata)
    this.router.navigateByUrl("/teacher");
    
  }
}
