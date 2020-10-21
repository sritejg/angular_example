import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  selectedCountry;
  countryData;
  data: any = { mail: '' };
  dataList: any = [];
  countries = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCountryData().subscribe(country => {
      this.countryData = country;
      this.countryData.filter(element => {
        this.countries.push(element.name);
      });

    });
  }

  onSubmitClick() {
    console.log("data", this.data)
    this.dataList.push(this.data);
    this.data = {};
  }

  onDataChange(data, flag) {
    if (flag === 'email') {
      this.data.email = data.target.value;
    } else if (flag === 'name') {
      this.data.name = data.target.value;
    } else if (flag === 'country') {
      this.data.country = data.target.value;
    } else if (flag === 'agree') {
      this.data.agree = data.checked;
    }
  }

}
