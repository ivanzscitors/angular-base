import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getheroDescription(): string {
  return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Spider-man';
  }

  public changeAge(): void {
    this.age = 25;
  }

  public resetForm() {
    this.name = "ironman";
    this.age = 45;
  }
}
