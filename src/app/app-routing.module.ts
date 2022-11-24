import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './guard/is-auth.guard';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCharacterComponent } from './pages/new-character/new-character.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
{path: '',component : HomeComponent},
{path:'characters', component: CharactersComponent , canActivate : [IsAuthGuard]},
{path:'character/:id', component: CharacterDetailComponent, canActivate : [IsAuthGuard]},
{path: 'newCharacter', component: NewCharacterComponent, canActivate : [IsAuthGuard]},
{path: 'newCharacter/:id', component: NewCharacterComponent, canActivate : [IsAuthGuard]},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
