import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QueryConfig } from '../../utils/query-config';
import { HotelsService } from '../../service/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-hotel',
  standalone: false,
  templateUrl: './edit-hotel.component.html',
  styleUrl: './edit-hotel.component.scss'
})
export class EditHotelComponent implements OnInit {

  editHotelForm!: FormGroup;
  hotels: string[] = [];
  submitted = false;
  queryConfig = QueryConfig;
  dataHotel: any;

  constructor(
    private formBuilder: FormBuilder,
    private hotelService: HotelsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.formInit();
    this.getData();
  }

  formInit() {
    this.editHotelForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  getData() {
    this.activatedRoute.queryParams.subscribe({
      next: (result) => {
        console.log('data', result)
        this.dataHotel = result;
        this.editHotelForm.patchValue(result)
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editHotelForm.invalid) {
      return;
    }
    const name = this.editHotelForm.get('name')?.value;
    const location = this.editHotelForm.get('location')?.value;
    const description = this.editHotelForm.get('description')?.value;
    this.hotelService.hotelApi(this.queryConfig.updateHotel(this.dataHotel.id, name, location, description)).subscribe({
      next: (result) => {
        console.log('result', result);
        this.router.navigateByUrl('/list');
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
