import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interface/interfaces';
import { CharactersService } from 'src/app/services/characters.service';
import { CommunicatorService } from 'src/app/services/communicator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public myCharacters?: ICharacter[];
  constructor(private characterService: CharactersService, private communicatorService: CommunicatorService) {

    this.communicatorService.setLoading(true);

    this.characterService.getAllCharacters().subscribe((data: ICharacter[]) => {
      console.log(data);


      const characterData: ICharacter[] = data.map((character: ICharacter) => ({
        _id: character._id,
        name: character.name,
        img: character.img,
        race: character.race,
        universe:character.universe,
        genre:character.genre
      }))
      this.myCharacters = [...characterData];
      console.log(this.myCharacters);


      setTimeout(() => {
        this.communicatorService.setLoading(false);
      }, 800);

    });

  }

  ngOnInit(): void {
  }

}
