
import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input } from '@angular/core';
import { google } from "google-maps";

@Component({
    selector: 'AutocompleteComponent',
    template: `
        <mat-form-field appearance="outline">
        <mat-label>Address</mat-label>
        <input matInput placeholder="Address" 
                        [(ngModel)]="autocompleteInput"
                        #addresstext>
        <mat-icon matSuffix>place</mat-icon>
        </mat-form-field>
    `,
})
export class GooglePlacesComponent implements OnInit, AfterViewInit {
    @Input() adressType: string;
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @ViewChild('addresstext', {static: false}) addresstext: any;

    autocompleteInput: string;
    queryWait: boolean;

    
    constructor() {
       
    }

    ngOnInit() {
        this.getPlaceAutocomplete();
    }


    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }

    private getPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
            {
                componentRestrictions: { country: 'US' },
                types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
            });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }

    invokeEvent(place: Object) {
        this.setAddress.emit(place);
    }

}
