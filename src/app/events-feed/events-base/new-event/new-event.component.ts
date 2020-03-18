import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  categories: any[] = [
    { value: 'education-0', viewValue: 'Education' },
    { value: 'teen-1', viewValue: 'Teen' },
    { value: 'network-2', viewValue: 'Network' }
  ];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // GOOGLE MAPS AUTOCOMPLETE
  address: Object;
  establishmentAddress: Object;

  formattedAddress: string;
  formattedEstablishmentAddress: string;

  phone: string;
  // GOOGLE MAPS AUTOCOMPLETE

  //Image upload
  fileData: File = null;
  previewUrl: any = null;
  base64textString: any;
  //Image upload

  constructor(private dialogRef: MatDialogRef<NewEventComponent>,
    private _formBuilder: FormBuilder,
    public zone: NgZone) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      ownerUsername: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      shortDescription: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      location: ['', Validators.required],
      city: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      expectedNumber: ['', Validators.required],
      threshold: ['', Validators.required],
    });
  }

  submit(): void {
    console.log(this.secondFormGroup.value);
    this.dialogRef.close({
      generalInfo: this.firstFormGroup.value,
      specificInfo: this.secondFormGroup.value,
      image: this.base64textString
    });
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.fileData);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
    this.previewUrl = atob(this.base64textString);
  }

  // GOOGLE MAPS AUTOCOMPLETE
  getAddress(place: object) {
    this.address = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedAddress = place['formatted_address'];
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
    console.log(this.address)
  }

  getEstablishmentAddress(place: object) {
    this.establishmentAddress = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedEstablishmentAddress = place['formatted_address'];
    this.zone.run(() => {
      this.formattedEstablishmentAddress = place['formatted_address'];
      this.phone = place['formatted_phone_number'];
    });
  }

  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }

  getStreetNumber(place) {
    const COMPONENT_TEMPLATE = { street_number: 'short_name' },
      streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return streetNumber;
  }

  getStreet(place) {
    const COMPONENT_TEMPLATE = { route: 'long_name' },
      street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  getCity(place) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
  }

  getState(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getDistrict(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getCountryShort(place) {
    const COMPONENT_TEMPLATE = { country: 'short_name' },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  getCountry(place) {
    const COMPONENT_TEMPLATE = { country: 'long_name' },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  getPostCode(place) {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

  getPhone(place) {
    const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }
  //END OF GOOGLE MAPS AUTOCOMPLETE
}
