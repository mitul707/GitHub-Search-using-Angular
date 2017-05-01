import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
    user:any;
    repos:any;
    uname:string = '';

    constructor (private _githubservice : GithubService) {
        this.user = false;
    }

    searchUser() {
        console.log(this.uname);
        this._githubservice.updateUser(this.uname);

        this._githubservice.getUser().subscribe(user => {
            this.user = user;
        });

        this._githubservice.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}