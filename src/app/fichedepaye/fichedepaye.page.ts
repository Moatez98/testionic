import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichedepaye',
  templateUrl: './fichedepaye.page.html',
  styleUrls: ['./fichedepaye.page.scss'],
})
export class FichedepayePage implements OnInit {
fichedepaie={"cod_soc":"01","dt_bul":"","cod_typ_bul":"","matericule":""}
  constructor() { }

  ngOnInit() {
  }
  afficher(){
    console.log(this.fichedepaie)
  }
}
