import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id='a69924cb5a60fbe2b378';
    private client_secret='309b2a2daffc6926cb6bc37417efedaaea1810e7';

    constructor (private _http: Http) {
        console.log('Github Service Ready....');

        this.username = 'mitul707';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username+'?client_id=' + this.client_id +'&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username+'/repos?client_id=' + this.client_id +'&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}