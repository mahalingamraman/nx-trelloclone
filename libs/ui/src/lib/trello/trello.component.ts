import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Trello } from '@trelloclone/data';

@Component({
  selector: 'trelloclone-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {
  @Input() allBoards: Trello[];
  id = 1000;
  constructor(private http: HttpClient) {
    this.fetch();
  }
  fetch() {
    this.http.get<Trello[]>('/api/trellos').subscribe(t => (this.allBoards = t));
  }
  ngOnInit() {
  }
  addList(txtNewListName: string, txtParent: string) {
    this.http.post('/api/addList', { parent: txtParent, data:{ id: this.id++, title: txtNewListName }}).subscribe(() => {
    });
    this.fetch();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allBoards, event.previousIndex, event.currentIndex);
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
