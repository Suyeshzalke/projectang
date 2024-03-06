import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DataService,Data } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { generalConfig } from '../constants/generalConfig';
import { Country, State, City }  from 'country-state-city';
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
  constructor(
    fb: FormBuilder,
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

    });
   }

  ngOnInit(): void {
    this.state$ = this.dataService.getState();
    console.log("this.state$",this.state$);
    console.log(Country.getAllCountries())
    this.countries=Country.getAllCountries()
    this.states=State.getAllStates()
    console.log(this.states,">>>>>>");
    

  }

  onSubmit(){
    console.log("this.planform",this.planForm.value);
    this.dataService.setState(this.planForm.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getComision(event:any) {
    this.comision = event.value;
    this.valorFinal = event.value
  }

  
}
