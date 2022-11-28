import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { CommunicatorService } from 'src/app/services/communicator.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  myCharacters?: any[];
  constructor(private characterService: CharactersService, private communicatorService: CommunicatorService) {

    this.communicatorService.setLoading(true);

    this.characterService.getAllCharacters().subscribe((data: any) => {
      console.log(data);


      const characterData: any[] = data.map((character: any) => ({
        id: character._id,
        name: character.name,
        image: character.img,
        race: character.race
      }))
      this.myCharacters = [...characterData];
      console.log(this.myCharacters);

    });

    setTimeout(() => {
      this.communicatorService.setLoading(false);
    }, 800);
  }

  ngOnInit(): void {
  }

}
