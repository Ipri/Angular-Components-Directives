import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canonical',
  templateUrl: './canonical.component.html',
  styleUrls: ['./canonical.component.scss']
})
export class CanonicalComponent implements OnInit {

    icon: string = '👧';

    constructor() { }

    ngOnInit(): void {
    }

}
