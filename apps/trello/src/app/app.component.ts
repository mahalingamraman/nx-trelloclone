import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Track, Task } from '@trelloclone/data'

@Component({
  selector: 'trelloclone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tracks: Track[] = [];
  id = 0;
  subid = 1000;
  constructor(private http: HttpClient) {
    this.fetch();
  }
  fetch() {
    this.http.get<Track[]>('/api/trellos').subscribe(t => (this.tracks = t));
  }
  addBoard(newBoardName: string) {
    if (newBoardName !='') {
      this.http.post('/api/addBoard',{id:this.id++,title: newBoardName,tasks:[]}).subscribe(() => {
        this.fetch();
      });
    }
  }
  addList(txtNewListName: string, txtParent: string) {
    if (txtNewListName!=''){
      this.http.post('/api/addList', { parent: txtParent, data: { id: this.subid++, title: txtNewListName } }).subscribe(() => {
      });
      this.fetch();
    }
  }

  
  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }
  onTaskDrop(event: CdkDragDrop<Task[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given task to the target data array. This happens if
    // a task has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Track[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
