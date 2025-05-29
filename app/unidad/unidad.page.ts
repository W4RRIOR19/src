import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.page.html',
  styleUrls: ['./unidad.page.scss'],
  standalone: false,
})
export class UnidadPage implements OnInit {

  constructor(
  private route: ActivatedRoute,
  private loading: LoadingController
) { }

  ngOnInit() {
  }

}
