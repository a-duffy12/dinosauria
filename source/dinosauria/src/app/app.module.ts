import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinosauriaService } from './services/dinosauria.service';
import { DinosauriaTableComponent } from './components/dinosauria-table/dinosauria-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosauriaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DinosauriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
