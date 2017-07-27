import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  expense;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.expense = navParams.get('expense');
  }

}
