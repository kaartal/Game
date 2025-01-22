import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  news: News[];

  constructor() {
    this.news = [
      new News('Nova verzija "Cyberpunk 2077" dolazi!',
        'Uskoro izlazi nadogradnja za Cyberpunk 2077 sa novim misijama, poboljšanim grafičkim prikazom i optimizacijama za sve platforme.',
        new Date('2025-01-08'),
        'Gaming Portal',
        'https://www.noob.ba/wp-content/uploads/2022/02/eb9ad39fd4c3ad026e35c9be5934b9f5d0e8c4690c26291c437b8d5316801c07_product_card_v2_mobile_slider_639.jpg'),

      new News('“The Legend of Zelda: Tears of the Kingdom” najavljena za 2025.',
        'Nintendo najavljuje novu igru u serijalu Zelda koja će biti dostupna na Nintendo Switch platformama. Očekujte fantastične nove avanture!',
        new Date('2025-01-07'),
        'Games World',
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/princess-zelda-the-legend-of-zelda-tears-of-the-kingdom.jpg'),

      new News('“Call of Duty: Modern Warfare 3” DLC dolazi ove zime.',
        'Infinity Ward je najavio izlazak novog DLC paketa za Modern Warfare 3 koji donosi nove mape, oružja i multiplayer modove.',
        new Date('2025-01-06'),
        'Gamer Hub',
        'https://media.emuglx.org/2023/11/Call-of-Duty%C2%AE_20231118013129-768x432.jpg'),

      new News('“The Witcher 4” razvoj u punom jeku!',
        'CD Projekt Red potvrđuje da je razvoj četvrte igre u serijalu The Witcher u punom jeku, sa novim likovima i još bogatijim svijetom.',
        new Date('2025-01-05'),
        'RPG Fans',
        'https://www.bug.hr/img/the-witcher-4-je-u-najnaprednijem-stadiju-razvoja-od-svih-novih-igara-cd_7NrBLB.jpg'),

      new News('“Final Fantasy XVI” DLC najavljen za proljeće 2025.',
        'Square Enix je najavio dodatne sadržaje za Final Fantasy XVI, koji će uključivati nove borbene sekvence i proširenja za likove.',
        new Date('2025-01-04'),
        'Square Enix News',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ821jjhu5K_aAkbXK9ljHi9DqV-f2djohZQ&s'),

      new News('“Starfield” proširenje sa novim planetama dolazi!',
        'Bethesda najavljuje veliki update za Starfield sa novim planetama, misijama i proširenjima za istraživanje svemira.',
        new Date('2025-01-03'),
        'Starfield Updates',
        'https://www.oslobodjenje.ba/media/2024/08/20/1089594/W-1089594-1235.webp'),

      new News('“Resident Evil 9” već u fazi razvoja!',
        'Capcom je potvrdio da je deveta igra u serijalu Resident Evil u fazi razvoja, a fanovi mogu očekivati nove strašne horore.',
        new Date('2025-01-02'),
        'Capcom News',
        'https://www.gameground.ba/uploads/images/screenshot-2021-06-10-150528dssd456789_1623330341.jpg'),

      new News('“Hogwarts Legacy” DLC sa novim područjima!',
        'Igrači Hogwarts Legacy-a uskoro će moći istraživati nova područja u Hogwartsu uz nadogradnje i dodatke.',
        new Date('2025-01-01'),
        'Wizarding World',
        'https://www.respawn.ba/wp-content/uploads/2023/01/Hogwarts-Legacy-3-860x484.jpg'),

      new News('“Elden Ring” nadogradnje za bolju optimizaciju.',
        'Bandai Namco obećava nova ažuriranja koja će poboljšati performanse igre i dodati nova područja u Elden Ring.',
        new Date('2024-12-31'),
        'Gaming Daily',
        'https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-screenshot-13-en-15jun21?$1600px$'),
    ];
  }
}

export class News {
  constructor(
    public title: string,
    public description: string,
    public date: Date,
    public author: string,
    public imageUrl: string // Dodali smo URL slike
  ) { }
}
