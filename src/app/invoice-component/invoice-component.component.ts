import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Invoice } from '../Models/invoice.model';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { InvoiceListComponentComponent } from '../invoice-list-component/invoice-list-component.component';
import { InvoiceService } from '../invoice.service';
@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent  implements OnInit {
  id!: number;
  active!: boolean;
  invoice!: Invoice | undefined; 

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService  ,
    private router: Router ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = +params['id'];
      this.active = params['active'] === 'true';
      this.invoice = this.invoiceService.getInvoiceById(this.id);
      console.log(this.invoice)
    });
  }
  retour(): void {
    // Redirigez l'utilisateur vers MainInvoiceComponent
    this.router.navigate(['/main-invoice']);
  }
}






