import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
private username:string;
private client_id='2e56059293f7ec967c05 ';
private client_secret='734c0907c72e9eaeebe13949459935760db037c2';
constructor(private _http:Http)
{
console.log('Github Service Ready');
this.username='nikhil051097';
}
getUser(){
return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
.map(res=>res.json());
}
getRepos(){
return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
.map(res=>res.json());
}
updateUser(username:string)
{
this.username=username;
}
}
