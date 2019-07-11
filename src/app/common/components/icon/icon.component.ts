import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() name: string;
  @Input() size: string;
  @Input() categorie: string;
  @Input() classes: string;

  getStyleCategorie(style: string) {
    return {
      solid: 's',
      regular: 'r',
      light: 'l',
      brands: 'b'
    }[style];
  }

}
