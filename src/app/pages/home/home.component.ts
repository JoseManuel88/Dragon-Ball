import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public myCharacters?: any[];
  constructor(private characterService: CharactersService) {

    this.characterService.getAllCharacters().subscribe((data: any) => {
      console.log(data);


      const characterData: any[] = data.map((character: any) => ({
        id: character._id,
        name: character.name,
        image: character.img,
        race: character.race,
        universe:character.universe,
        genre:character.genre
      }))
      this.myCharacters = [...characterData];
      console.log(this.myCharacters);

    });

  }

  ngOnInit(): void {
  }

}
