import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  id: any;
  myCharacter: any;

  constructor(private actvatedRoute: ActivatedRoute, private characterService: CharactersService) {

    this.actvatedRoute.paramMap.subscribe((params) => {

      this.id = params.get('id');

      this.characterService.getCharacter(this.id).subscribe((data: any) => {
        console.log(data)

        this.myCharacter = { ...data };

      })
    })
  }

  ngOnInit(): void {
  }

  public deleteCharacter() {
    
    const obj = {
      "id": this.id
    }
    this.characterService.deleteCharacter(obj).subscribe(res => {

    });
  }

}
