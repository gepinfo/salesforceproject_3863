import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})

export class AccountComponent implements OnInit {
    public name:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private accountService: AccountService,
    ) { }

    ngOnInit() {
        this.name.created_by = sessionStorage.getItem('email') || ''; 
    }
}