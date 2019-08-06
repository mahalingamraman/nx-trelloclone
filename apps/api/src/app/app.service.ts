import { Injectable } from '@nestjs/common';
import { Track } from '@trelloclone/data'

@Injectable()
export class AppService {
  tracks: Track[] = [
  {
    title: "111111",
    id: "0",
    tasks: [
      {
        id: "1",
        title: "1"
      }
    ]
    },
    {
      title: "222222",
      id: "1",
      tasks: [
        {
          id: "1000",
          title: "2"
        }
      ]
    },
    {
      title: "33333",
      id:"2",
      tasks: [
        {
          id: "2000",
          title: "3"
        }
      ]
    },
    {
      title: "44444",
      id: "3",
      tasks: [
        {
          id: "3000",
          title: "4"
        }
      ]
    }];

  getData(): Track[] {
    return this.tracks;
  }

  addBoard(data) {
    this.tracks.push(data);
  }
  addList(data) {
    this.tracks[data.parent].tasks.push(data.data);
  }
  
}
