const anio = 2001;
let campeon = null;

switch (anio) {
    case 2000:
        campeon = '(Clausura) River Plate';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2001:
        campeon = '(Apertura) Boca Juniors 2001 (Clausura) San Lorenzo de Almagro';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2002:
        campeon = '(Apertura) Racing Club';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2003:
        campeon = '(Clausura) River Plate (Apertura) Independiente';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2004:
        campeon = '(Clausura) River Plate (Apertura) Boca Juniors';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2005:
        campeon = 'Clausura) River Plate (Apertura) Newell´s Old Boys';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2006:
        campeon = '(Clausura) Vélez Sarsfield (Apertura) Boca Juniors';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2007:
        campeon = '(Clausura) Boca Juniors (Apertura) Estudiantes de La Plata';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2008:
        campeon = '(Clausura) San Lorenzo de Almagro (Apertura) Lanús';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2009:
        campeon = '(Clausura) River Plate (Apertura) Boca Juniors';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2010:
        campeon = '(Clausura) Vélez Sársfield (Apertura) Bánfield';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2011:
        campeon = '(Clausura) Argentinos Juniors (Apertura) Estudiantes de La Plata';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2012:
        campeon = '(Clausura) Vélez Sársfield (Apertura) Boca Juniors';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2013:
        campeon = '(Clausura) Arsenal F.C. (Torneo Inicial) Vélez Sarsfield ,(Torneo Final) Newells Old Boys (Campeón del Campeonato de Primera División';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2014:
        campeon = 'Vélez Sarsfield (Torno Inicial) San Lorenzo de Almagro';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2015:
        campeon = '(Torneo Final) River Plate (Torneo Inicial) Racing Club';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2016:
        campeon = '(Campeonato de Primera División) Boca Juniors';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    case 2017:
        campeon = '(Campeonato de Primera División) Lanús, (Campeón del Campeonato de Primera División) Boca Juniors';
        mensaje = `En el año ${anio} salió campeón: ${campeon}`;
        break;
    default:
        campeon = '';
        mensaje = 'Por favor ingrese un año entre 2000 y 2017';
        break;
}

console.log(mensaje);