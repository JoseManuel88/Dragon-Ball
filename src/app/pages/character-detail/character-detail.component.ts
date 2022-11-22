import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  id: any;
  myCharacter: any;


  reactiveForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    genre: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    race: new FormControl(null),
    transform: new FormControl(null),
    universe: new FormControl(null)
  });

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharactersService, private route: Router) {

    this.activatedRoute.paramMap.subscribe((params) => {

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
    
    const obj = this.id;
    
    
    this.characterService.deleteCharacter(obj).subscribe(res => {
      this.route.navigateByUrl('/characters');
    });
  }

  
  public updateCharacter() {

    this.route.navigateByUrl('newCharacter/' + this.id);
  
      }
      
  }


