import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.page.html',
  styleUrls: ['./medicamento.page.scss'],
  standalone: false,
})
export class MedicamentoPage implements OnInit {

constructor(
  private route: ActivatedRoute,
  private loading: LoadingController
) { }

  ngOnInit() {
  }

}
