import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
  standalone: false,
})
export class CitaPage implements OnInit {

  constructor(
  private route: ActivatedRoute,
  private loading: LoadingController
) { }

  ngOnInit() {
  }

}
