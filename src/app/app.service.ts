import { Injectable } from '@angular/core';
import *  as  data from '../assets/env.json';
@Injectable({
    providedIn: 'root'
})

export class AppService {

    constructor() {
        this.load().then(data => console.log(data));
    }

    private env: any = null;

    getEnvironment() {
        return this.env;
    }

    public load(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.env = data;
            resolve(true);
        });
    }

}