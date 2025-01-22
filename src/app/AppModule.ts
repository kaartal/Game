import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // Glavna komponenta
  ],
  imports: [
    BrowserModule, // Omogućava prikaz u pretraživaču
    FormsModule,   // Omogućava korištenje Angular formi
  ],
  providers: [],
  bootstrap: [AppComponent], // Glavna komponenta koja se pokreće
})
export class AppModule { }
