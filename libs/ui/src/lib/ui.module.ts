import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrelloComponent } from './trello/trello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TrelloComponent],
  exports: [TrelloComponent]
})
export class UiModule {}
