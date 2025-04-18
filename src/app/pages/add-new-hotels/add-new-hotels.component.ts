import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelsService } from '../../service/hotels.service';
import { Router } from '@angular/router';
import { QueryConfig } from '../../utils/query-config';

@Component({
  selector: 'app-add-new-hotels',
  standalone: false,
  templateUrl: './add-new-hotels.component.html',
  styleUrl: './add-new-hotels.component.scss'
})
export class AddNewHotelsComponent implements OnInit {

  addNewHotelForm!: FormGroup;
  hotels: string[] = [];
  submitted = false;
  queryConfig = QueryConfig;

  constructor(
    private formBuilder: FormBuilder,
    private hotelService: HotelsService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.addNewHotelForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.addNewHotelForm.invalid) {
      return;
    }
    const name = this.addNewHotelForm.get('name')?.value;
    const location = this.addNewHotelForm.get('location')?.value;
    const description = this.addNewHotelForm.get('description')?.value;
    this.hotelService.hotelApi(this.queryConfig.addHotel(name, location, description)).subscribe({
      next: (result) => {
        console.log('result', result);
        this.addNewHotelForm.reset();
      },
      error: (error) => {
        console.log('error', error)
      }
    })
  }

  goToList() {
    this.router.navigateByUrl('/list');
  }

}
