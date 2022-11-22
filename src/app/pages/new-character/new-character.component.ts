import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  reactiveForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    genre: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    race: new FormControl(null),
    transform: new FormControl(null),
    universe: new FormControl(null)
  });

  id?: any;

  constructor(private charactersService: CharactersService, private route: Router,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((params) => {

      this.id = params.get('id');

      if (this.id) {
        this.charactersService.getCharacter(this.id).subscribe((data: any) => {
          console.log(data)

          this.reactiveForm.get('name')?.setValue(data.name);
          this.reactiveForm.get('race')?.setValue(data.race);
          this.reactiveForm.get('universe')?.setValue(data.universe);
          this.reactiveForm.get('transform')?.setValue(data.transform);
          this.reactiveForm.get('genre')?.setValue(data.genre);
          this.reactiveForm.get('image')?.setValue(data.img);
  
  
        })

      }
    })

  }


  ngOnInit(): void {
  }
  public createCharacter() {
    if (this.reactiveForm.valid) {
      const obj = {
        "name": this.reactiveForm.get('name')?.value,
        "race": this.reactiveForm.get('race')?.value,
        "img": this.reactiveForm.get('image')?.value,
        "universe": this.reactiveForm.get('universe')?.value,
        "transform": this.reactiveForm.get('transform')?.value,
        "genre": this.reactiveForm.get('genre')?.value,
      }
      this.charactersService.createCharacter(obj).subscribe(res => {
        this.route.navigateByUrl('/characters');
      });

    } else {
      alert('Datos obligatorios');
    }

  }
  public updateCharacter() {
    if (this.reactiveForm.valid){
      const obj = {
        "name": this.reactiveForm.get('name')?.value,
        "race": this.reactiveForm.get('race')?.value,
        "img": this.reactiveForm.get('image')?.value,
        "universe": this.reactiveForm.get('universe')?.value,
        "transform": this.reactiveForm.get('transform')?.value,
        "genre": this.reactiveForm.get('genre')?.value,
      }
  
      this.charactersService.updateCharacter(obj, this.id).subscribe(res => {
        this.route.navigateByUrl('/characters');
      });

    }else {
      alert('Datos obligatorios');
    }
    

  }



}
