import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  openSubMenu: string | null = null;

  constructor(
    private gameService: GameService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}


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
    this.getHome();
  }
  

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('eleemnr:', this.searchInput);
    }, 5000);
    if (this.isSubMenuOpen('search')) {
    }
  }

  getHome() {
    this.openSubMenu = 'home';
    this.gameService.getHomeContent().subscribe((data: any) => {
      console.log( data);
    });
  }

  toggleSubMenu(subMenu: string) {
    this.openSubMenu = this.openSubMenu === subMenu ? null : subMenu;
    if (this.openSubMenu && this.openSubMenu == 'pc-games') {
      this.gameService.getComputerGames().subscribe((pcGames: any) => {
        console.log('PC Games:\n', pcGames);
      });
    }
    if (this.openSubMenu && this.openSubMenu == 'browser-games') {
      this.gameService.getBrowserGames().subscribe((pcGames: any) => {
        console.log('Browser Games:\n', pcGames);
      });
    }
    if (this.openSubMenu && this.openSubMenu == 'search') {
      // alert(this.openSubMenu);
      setTimeout(() => {
        this.focusSearchInput();
      }, 1000);
    }
  }

  isSubMenuOpen(subMenu: string): boolean {
    return this.openSubMenu === subMenu;
  }

  fetchGenreTag(genreQuery: string) {
    this.gameService.getByGenreTag(genreQuery).subscribe((tagData: any) => {
      console.log('Response :\n', tagData);
    });
  }

  focusSearchInput() {
    this.searchInput.nativeElement.autofocus = true;
  }
}
