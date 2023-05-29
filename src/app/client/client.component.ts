import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientsService) { }
  ngOnInit(): void {
    this.loadClient();

  }

  loadClient() {
    this.clientService.getClients().subscribe(
      {
        next: data => this.clients = data
      }
    );
  }

}
