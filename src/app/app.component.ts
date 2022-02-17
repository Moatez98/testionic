import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Fiche de Paie', url: 'fichedepaye', icon: 'newspaper' },
    { title: "Certificat d'impot", url: 'certificatdimpot', icon: 'cash' },
    { title: 'solde conge', url: 'soldedecong', icon: 'cafe' },
    { title: 'Solde assurence', url: 'soldeassurance', icon: 'medkit' }
  ];

  constructor() {}
}
