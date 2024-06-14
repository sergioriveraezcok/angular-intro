import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{

    name: 'trunks',
    power: 50
  },
  {
    name: 'goku',
    power: 10000
  },
  {
    name: 'gohan',
    power: 100

  }]

  onNewCharacter(characters:Character){
    console.log("Main Page Component")
    console.log(characters);
    this.characters.unshift(characters)

  }

 onDeleteCharacter(index:number){
  this.characters.splice(index,1)
 }

}
