import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Eliminar si no se usa.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
