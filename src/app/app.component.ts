import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { AddprofiledailogComponent } from './addprofiledailog/addprofiledailog.component';

export interface Person {
  checked: boolean;
  name: string;
  mobile: number;
  email: string;
  skills: string;
  ctc: string;
  ectc: string;
  notice: string;
  noticedate: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xcelhires';

  showSecondNav = false;
  selectedOption = 'option1';
  

  ngOnInit(){}

  showdropdown() {
    this.showSecondNav = !this.showSecondNav;
  }

  constructor(private dailog: MatDialog){}

  dataSource: Person[] = [
    { checked: false, name: 'John Doe',mobile:12434667, email:'John@email', skills: 'Angular', ctc: '4 LPA', ectc: '7 LPA', notice: 'serving notice', noticedate: '12-2-23', status: 'web zoom interview', },
    { checked: false, name: 'Jane Smith',mobile:87654323, email:'Smith@email', skills: 'Angular', ctc: '4 LPA', ectc: '7 LPA', notice: 'serving notice', noticedate: '12-2-23', status: 'web zoom interview', },
    // Add more data as needed
  ];

  // statuses = [
  //   { text: "in interview" }
  // ]

  addprofiledailog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '25vw';
    dialogConfig.height = '100vh';
    dialogConfig.position = {
      right: '0', // Set the dialog to the right end of the viewport
      top: '0', // Set the dialog to the top of the viewport (adjust as needed)
    };

    this.dailog.open(AddprofiledailogComponent, dialogConfig);
  }

  get selectAllChecked(): boolean {
    return this.dataSource.every(person => person.checked);
  }

  set selectAllChecked(value: boolean) {
    this.dataSource.forEach(person => person.checked = value);
  }

  toggleAllCheckboxes(): void {
    this.selectAllChecked = !this.selectAllChecked;
  }
}




