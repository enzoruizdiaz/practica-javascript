// switch

const metodoPago = 'cheque';

switch(metodoPago){
    case 'tarjeta': 
       console.log('Pagaste con tarjeta');
       break;
       case 'cheque': 
       console.log('El usuario va a pagar con cheque');
       break;
       case 'efectivo': 
       console.log('El usuario va a pagar con efectivo');
       break;
       default: 
          console.log('aun no has pagado.')
       break;

}