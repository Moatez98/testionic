import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { GestionService } from '../gestion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menuCtrl: MenuController,private Gest:GestionService,private route:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  login(form){
   
    this.Gest.Login(form.value).subscribe({
      next:(data:any)=>{
        console.log(data)       
        // localStorage.setItem("token",token)
        this.route.navigate(['/home'])
        },
        error:(err:any)=>{
         // alert("Compte non reconnue")
        },
        complete:()=>{},
    
    })
    console.log(form.value)
  }
  downloadPdfinformation(){
    this.Gest.getPdffichedepresnce(2).subscribe( (pdf:any)=>{
    const blob = new Blob([pdf], { type: 'application/pdf' })
    var fileURL = URL.createObjectURL(blob);
    window.open(fileURL);
  
  })
  
  }test(){}

}
