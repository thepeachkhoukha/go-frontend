import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetails } from '../../../models/user-general-info.model';

@Component({
  selector: 'app-user-general-info',
  templateUrl: './user-general-info.component.html',
  styleUrls: ['./user-general-info.component.scss']
})
export class UserGeneralInfoComponent implements OnInit{

  @Input() user: UserDetails;
  edit: boolean = false;
  fileData: File = null;
  profilePicture: any = null;
  base64textString:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(){
    this.edit = this.user.username === localStorage.getItem("username");
    this.profilePicture = atob(this.user.image);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
                                      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
