import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { CarritoService } from '../services/carrito.service';
import { OrdenService } from '../services/orden.service';

import { ICotizar, IProducto } from '../interfaces/carrito.response'
import { IDatosPago, IDetalleOrden, IMedioPago, IOrden } from '../interfaces/orden.response'
import { ICliente } from '../interfaces/cliente.response';


@Component({
  selector: 'app-pagar-orden',
  templateUrl: './pagar-orden.component.html',
  styleUrls: ['./pagar-orden.component.css']
})

export class PagarOrdenComponent implements OnInit {

  cotizar: ICotizar | undefined;

  medios: IMedioPago[] = [];

  mostrarCC : boolean = false;

  informacionForm = this.formBuilder.group({
    NombreEnvio: new FormControl(),
    ApellidoEnvio: new FormControl(),
    DireccionEnvio: new FormControl(),
    TelefonoEnvio: new FormControl(),
    CiudadEnvio: new FormControl(),
    CodigoAreaEnvio: new FormControl(),
    medios: new FormControl(),
    CCtitular: new FormControl(),
    CCtipo: new FormControl(),
    CCnumero: new FormControl(),
    CCvencimiento: new FormControl(),
    CCV: new FormControl()
  });

  facturacionForm = this.formBuilder.group({
    DireccionFacturacion: new FormControl(),
    CorreoElectronicoFacturacion: new FormControl()
  });

  constructor(private formBuilder: FormBuilder,
    private carritoService : CarritoService,
    private ordenService : OrdenService) {    
  }

  ngOnInit(): void {

    this.carritoService.cotizar().subscribe( data => {  
      this.cotizar = data;
    });

    this.ordenService.consultarMedios().subscribe( data => {
      this.medios = data;
    });

  }

  onMediosChange( value : any ) {
    if( value == '2' )
    {
      this.mostrarCC = true;
    }
    else
    {
      this.mostrarCC = false;
    }
  }

  pagarOrden() {

    let NombreEnvio = this.informacionForm.get('NombreEnvio')?.value;
    let ApellidoEnvio = this.informacionForm.get('ApellidoEnvio')?.value;
    let DireccionEnvio = this.informacionForm.get('DireccionEnvio')?.value;
    let TelefonoEnvio = this.informacionForm.get('TelefonoEnvio')?.value;
    let CiudadEnvio = this.informacionForm.get('CiudadEnvio')?.value;
    let CodigoAreaEnvio = this.informacionForm.get('CodigoAreaEnvio')?.value;
    let medios = this.informacionForm.get('medios')?.value;
    let CCtitular = this.informacionForm.get('CCtitular')?.value;
    let CCtipo = this.informacionForm.get('CCtipo')?.value;
    let CCnumero = this.informacionForm.get('CCnumero')?.value;
    let CCvencimiento = this.informacionForm.get('CCvencimiento')?.value;
    let CCV = this.informacionForm.get('CCV')?.value;

    let DireccionFacturacion = this.facturacionForm.get('DireccionFacturacion')?.value;
    let CorreoElectronicoFacturacion = this.facturacionForm.get('CorreoElectronicoFacturacion')?.value;

    let cotizar : ICotizar = this.cotizar!;
    let cliente : ICliente = this.carritoService.cliente!;
    let productos : IProducto [] = this.carritoService.productos;
    let detalles : IDetalleOrden [] = [];
    let datospago : IDatosPago [] = [];

    let datopago : IDatosPago = {
      AnoExpiracion : 25,
      CodCV : CCV,
      CodMoneda : cotizar.moneda ,
      Email : cliente.userName ,
      MedioPago : Number(medios),
      MesExpiracion : 1,
      NombreTitular : CCtitular,
      NumeroTarjeta : Number(CCnumero),
      TipoTarjeta : CCtipo
    }
    datospago.push(datopago);

    for( let item of productos ) {
      let detalle : IDetalleOrden = {
        CantidadOrdenada : item.cantidad,
        CodigoProducto : item.codigo,
        CodigoProveedor : item.codigoProveedor,
        NombreProducto : item.nombre,
        PrecioUnitario : item.precio,
        ProductoId : item.id,
        TipoProveedor : item.tipoProveedor
      };
      detalles.push(detalle);
    }

    let fullOrden : IOrden = {
      ApellidoEnvio : ApellidoEnvio,
      CarritoId : this.carritoService.CarritoExiste(),
      CiudadEnvio : CiudadEnvio,
      CiudadFacturacion : CiudadEnvio,
      CodigoAreaEnvio : CodigoAreaEnvio,
      CodigoAreaFacturacion : CodigoAreaEnvio,
      CorreoElectronicoFacturacion : CorreoElectronicoFacturacion,
      DatosPago : datospago,
      DetallesOrden : detalles,
      DireccionEnvio : DireccionEnvio,
      DireccionFacturacion : DireccionFacturacion,
      EmailCliente : cliente.userName,
      EstadoEnvio : CiudadEnvio,
      EstadoFacturacion : CiudadEnvio,
      NombreEnvio : NombreEnvio,
      NumeroDocumentoCliente : cliente.nit,
      PaisEnvio : this.carritoService.pais,
      PaisFacturacion : this.carritoService.pais,
      PrecioTotal : cotizar.total,
      TelefonoEnvio : TelefonoEnvio,
      TelefonoFacturacion : TelefonoEnvio,
      TipoDocumentoCliente : 'CC',
      ValorImpuestos : cotizar.impuesto      
    }

    this.carritoService.colocarOrden( fullOrden ).subscribe( data=> {        
      if( data.id > 0 ) {
        window.alert( 'Orden creada exitosamente: ' + data.id );
      }
    });

  }

}
