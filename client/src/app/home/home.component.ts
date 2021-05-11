import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    registerMode: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    registerToggle() {
        this.registerMode = !this.registerMode;
    }

    cancelRegisterMode(event: boolean) {
        this.registerMode = event;
    }

}
