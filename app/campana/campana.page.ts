import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-campana',
  templateUrl: './campana.page.html',
  styleUrls: ['./campana.page.scss'],
  standalone: false,
})
export class CampanaPage implements OnInit {

  constructor(
  private route: ActivatedRoute,
  private loading: LoadingController
) { }
  campanias: any = null;


  ngOnInit() {
  }

}
