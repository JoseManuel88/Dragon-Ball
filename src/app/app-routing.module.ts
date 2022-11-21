import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { NewCharacterComponent } from './pages/new-character/new-character.component';

const routes: Routes = [
{path: '',component : HomeComponent},
{path:'characters', component: CharactersComponent},
{path:'character/:id', component: CharacterDetailComponent},
{path: 'newCharacter', component: NewCharacterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
