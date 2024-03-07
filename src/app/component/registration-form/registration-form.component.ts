import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DataService,Data } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { generalConfig } from '../constants/generalConfig';
import { Country, State, City }  from 'country-state-city';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  comision = 24;
  pattern = generalConfig.pattern;
  patternMessage = generalConfig.patternMessages;

  valorFinal = 10;
  public isAvailable$ = new BehaviorSubject<boolean>(false);
  public state$: Observable<Data> | undefined;
  planForm: FormGroup;
  countries: any;
  states: any;
  selectedImage: string | ArrayBuffer | null = null;
    invalidImageSize: boolean = false;
  fileimage: any;
  checkboxValue: boolean = false;
  data: any
  constructor(
    fb: FormBuilder, private router: Router,
    private dataService: DataService,
    public dialogRef: MatDialogRef<RegistrationFormComponent>,
  ) {
    this.planForm = fb.group({
      first_name: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(3), Validators.maxLength(generalConfig.pattern.NAMEMAXLENGTH), Validators.pattern(generalConfig.pattern.ALPHANUMERICANDSPECIALCHAR)]),
      last_name: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(1), Validators.maxLength(generalConfig.pattern.NAMEMAXLENGTH), Validators.pattern(generalConfig.pattern.ALPHANUMERICANDSPECIALCHAR)]),
      mob_no: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(3), Validators.maxLength(generalConfig.pattern.MOBILEMAX), Validators.pattern(generalConfig.pattern.MOB_NO)]),
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(3), Validators.maxLength(generalConfig.pattern.NAMEMAXLENGTH), Validators.pattern(generalConfig.pattern.EMAIL)]),
      state:new FormControl({ value: '', disabled: false }, [Validators.required, ]),
      country:new FormControl({ value: '', disabled: false }, [Validators.required, ]),
      address:new FormControl({ value: '', disabled: false }, [Validators.required, ]),
      tags:new FormControl({ value: '', disabled: false }, [Validators.required, ]),
    check:new FormControl({ value: '', disabled: false }, []),
    });
   }

  ngOnInit(): void {
    this.state$ = this.dataService.getState();
    console.log(Country.getAllCountries())
    this.countries=Country.getAllCountries()
    this.states=State.getAllStates()
  }

  onSubmit(){
    let obj={
      first_name:this.planForm.value.first_name,
      last_name:this.planForm.value.last_name,
      mob_no:this.planForm.value.mob_no,
      email:this.planForm.value.email,
      age:this.comision,
      country:this.planForm.value.country,
      state:this.planForm.value.state,
      address:this.planForm.value.address,
      tags:this.planForm.value.tags,
      image:this.fileimage,
      newsLetter:this.checkboxValue 
    }
    this.data=obj
    this.dataService.setState(this.data);
    this.router.navigate(['/profile']);
    this.onNoClick();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getComision(event:any) {
    this.comision = event.value;
    this.valorFinal = event.value
  }
  getSelectedCountryValue() {
    console.log(this.planForm.value.country); // This will log the selected country value
  }
  

  getSelectedStateValue(){

  }



  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   this.fileimage=file
  //   console.log("this.fileimage",this.fileimage);

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = (e: any) => {
  //       const img = new Image();
  //       img.src = e.target.result;

  //       img.onload = () => {
  //           if (img.width === 310 && img.height === 325) {
  //               this.selectedImage = e.target.result;
  //               this.invalidImageSize = false;
  //           } else {
  //               this.invalidImageSize = true;
  //               this.selectedImage = null;
  //           }
  //       };
  //   };

  //   reader.readAsDataURL(file);
  //   }
   
    
  // }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileimage = file;

    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
            const img = new Image();
            img.src = e.target.result;

            img.onload = () => {
                if (img.width === 310 && img.height === 325) {
                    this.selectedImage = e.target.result;
                    this.invalidImageSize = false;
                } else {
                    this.invalidImageSize = true;
                    this.selectedImage = null;
                }
            };
        };
    }
}



onCheckboxClick() {
  this.checkboxValue = true;
  
}
}
