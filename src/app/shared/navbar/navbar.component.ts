import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private gameService: GameService) {}
  genreArray = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts',
  ];

  ngOnInit() {
    // this.gameService.getHomeContent().subscribe((data: any) => {
    //   console.log('data', data);
    // });
    this.getHome();
  }
  openSubMenu: string | null = null;

  getHome(){
    this.openSubMenu="home";
    this.gameService.getHomeContent().subscribe((data: any) => {
      console.log('data', data);
    });

  }

  toggleSubMenu(subMenu: string) {
    this.openSubMenu = this.openSubMenu === subMenu ? null : subMenu;
    if(this.openSubMenu && this.openSubMenu == "pc-games"){
      this.gameService.getComputerGames().subscribe(
        (pcGames:any)=>{
          console.log("PC Games:\n",pcGames);
          
        }
      )
    }
    if(this.openSubMenu && this.openSubMenu == "browser-games"){
      this.gameService.getBrowserGames().subscribe(
        (pcGames:any)=>{
          console.log("Browser Games:\n",pcGames);
          
        }
      )
    }
  }

  isSubMenuOpen(subMenu: string): boolean {
    return this.openSubMenu === subMenu;
  }

  fetchGenreTag(genreQuery:string){
    this.gameService.getByGenreTag(genreQuery).subscribe(
      (tagData:any)=>{
        console.log("Response :\n",tagData)
      }
    )
  }
}
