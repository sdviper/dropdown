import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dropdown';
  selectedMobileBrand = 0;
  selectedMobileModel = 0;
  models = [];
  // tslint:disable-next-line: variable-name
  onSelectMobileBrand(mobileBrand_id: number) {
    this.selectedMobileBrand = mobileBrand_id;
    this.selectedMobileModel = 0;
    this.models = this.getMobileModels().filter((item) => {
      return item.mobileBrand_id === Number(mobileBrand_id);
    });
  }
// tslint:disable-next-line: variable-name
  onSelectMobileModel(MobileModel_id: number) {
    this.selectedMobileModel = MobileModel_id;
  }
  getMobileBrands() {
    return [
      { id: 1, name: 'APPLE' },
      { id: 2, name: 'SAMSUNG' },
      { id: 3, name: 'NOKIA' },
      { id: 4, name: 'ONE PLUS' }
    ];
  }
  getMobileModels() {
    return [
      { id: 1, mobileBrand_id: 1, name: 'IPHONE XS' },
      { id: 2, mobileBrand_id: 1, name: 'IPHONE 6' },
      { id: 3, mobileBrand_id: 2, name: 'GALAXY MINI' },
      { id: 4, mobileBrand_id: 3, name: 'NOTE 6.1' },
      { id: 5, mobileBrand_id: 3, name: 'NOTE 7 PLUS' },
      { id: 6, mobileBrand_id: 3, name: 'NOTE 8' },
      { id: 7, mobileBrand_id: 4, name: 'PLUS 10' },
      { id: 8, mobileBrand_id: 4, name: 'PLUS 11' }

    ];
  }
}
