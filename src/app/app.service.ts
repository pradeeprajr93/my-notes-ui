import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class AppService {

    constructor(private http: HttpClient) {
        this.load().then(data => console.log(data));
    }

    private env: any = null;

    getEnvironment() {
        return this.env;
    }

    public load(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('assets/env.json').subscribe((response: any) => {
                this.env = response;
                resolve(this.env);
            });
        });
    }

}