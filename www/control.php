<?php
//ACCION
$accion = ISSET($_REQUEST['accion']) && $_REQUEST['accion'] != '0' ? $_REQUEST['accion'] : '';

//CLIENTE
$idCliente = ISSET($_REQUEST['idCliente']) && $_REQUEST['idCliente'] != '0' ? $_REQUEST['idCliente'] : '';
$razonSocial = ISSET($_REQUEST['razonSocial']) && $_REQUEST['razonSocial'] != '0' ? $_REQUEST['razonSocial'] : '';
$idCalle = ISSET($_REQUEST['idCalle']) && $_REQUEST['idCalle'] != '0' ? $_REQUEST['idCalle'] : '0';
$numeroExterior = ISSET($_REQUEST['numeroExterior']) && $_REQUEST['numeroExterior'] != '0' ? $_REQUEST['numeroExterior'] : '';
$numeroInterior = ISSET($_REQUEST['numeroInterior']) && $_REQUEST['numeroInterior'] != '0' ? $_REQUEST['numeroInterior'] : '';
$idColonia = ISSET($_REQUEST['idColonia']) && $_REQUEST['idColonia'] != '0' ? $_REQUEST['idColonia'] : '0';
$entre_calles = ISSET($_REQUEST['entre_calles']) && $_REQUEST['entre_calles'] != '0' ? $_REQUEST['entre_calles'] : '';
$idTipoDomicilio = ISSET($_REQUEST['idTipoDomicilio']) && $_REQUEST['idTipoDomicilio'] != '0' ? $_REQUEST['idTipoDomicilio'] : '';
$idCiudad = ISSET($_REQUEST['idCiudad']) && $_REQUEST['idCiudad'] != '0' ? $_REQUEST['idCiudad'] : '0';
$telefonoCelular = ISSET($_REQUEST['telefonoCelular']) && $_REQUEST['telefonoCelular'] != '0' ? $_REQUEST['telefonoCelular'] : '0';
$telefonoOtro = ISSET($_REQUEST['telefonoOtro']) && $_REQUEST['telefonoOtro'] != '0' ? $_REQUEST['telefonoOtro'] : '0';
$correo = ISSET($_REQUEST['correo']) && $_REQUEST['correo'] != '0' ? $_REQUEST['correo'] : '0';
$latitud = ISSET($_REQUEST['latitud']) && $_REQUEST['latitud'] != '0' ? $_REQUEST['latitud'] : '0';
$longitud = ISSET($_REQUEST['longitud']) && $_REQUEST['longitud'] != '0' ? $_REQUEST['longitud'] : '0';
$usuario = ISSET($_REQUEST['usuario']) && $_REQUEST['usuario'] != '0' ? $_REQUEST['usuario'] : '0';
$contrasena = ISSET($_REQUEST['contrasena']) && $_REQUEST['contrasena'] != '0' ? $_REQUEST['contrasena'] : '0';

//PEDIDO
$idPedido = ISSET($_REQUEST['idPedido']) && $_REQUEST['idPedido'] != '0' ? $_REQUEST['idPedido'] : '0';
$idTipoPedido = ISSET($_REQUEST['idTipoPedido']) && $_REQUEST['idTipoPedido'] != '0' ? $_REQUEST['idTipoPedido'] : '0';
$idSucursal = ISSET($_REQUEST['idSucursal']) && $_REQUEST['idSucursal'] != '0' ? $_REQUEST['idSucursal'] : '0';
$idDomicilio = ISSET($_REQUEST['idDomicilio']) && $_REQUEST['idDomicilio'] != '0' ? $_REQUEST['idDomicilio'] : '0';
$cantidad = ISSET($_REQUEST['cantidad']) && $_REQUEST['cantidad'] != '0' ? $_REQUEST['cantidad'] : '0';
$observaciones = ISSET($_REQUEST['observaciones']) && $_REQUEST['observaciones'] != '' ? $_REQUEST['observaciones'] : '';

 if($accion == "1"){
echo GuardarCliente($razonSocial,$idCalle,$numeroExterior,$numeroInterior,$idColonia,$entre_calles,$idTipoDomicilio,$idCiudad,$telefonoCelular,$telefonoOtro,$correo,$latitud,$longitud,$usuario,$contrasena);
}else if($accion == "2"){
echo ActualizarCliente($idCliente,$razonSocial,$telefonoCelular,$telefonoOtro,$correo);
}else if($accion == "3"){
echo ActualizarDomicilioCliente($idCliente,$idCalle,$numeroExterior,$numeroInterior,$idColonia,$entre_calles,$idTipoDomicilio,$idCiudad,$latitud,$longitud);
}else if($accion == "4"){
echo ActualizarUsuarioCliente($idCliente,$usuario,$contrasena);
}else if($accion == "5"){
echo login($usuario,$contrasena);
}else if($accion == "6"){
echo obtenerCalles();
}else if($accion == "7"){
echo obtenerColonias();
}else if($accion == "8"){
echo obtenerTipoPedido();
}else if($accion == "9"){
echo obtenerSucursal();
}else if($accion == "10"){
echo GuardarPedido($idTipoPedido,$idSucursal,$idCliente,$idDomicilio,$cantidad,$observaciones);
}else if($accion == "11"){
echo CancelarPedido($idPedido,$observaciones);
}else if($accion === "12"){
echo obtenerUnidadAsignada($idPedido);
}else if($accion === "13"){
echo obtenerHistorial($idCliente);
}

/*FUNCION QUE GUARDA EL CLIENTE

@param:

razonSocial
idCalle,
numeroExterior,
numeroInterior,
idColonia,
entre_calles,
idTipoDomicilio,
idCiudad,
telefonoCelular,
telefonoOtro,
correo,
latitud,
longitud,
usuario,
contrasena

@output:

array(
"idCliente" => 'idCliente',
"idUsuario" => 'idUsuario',
"idDomicilio" => 'idDomicilio'
"idSucursal" => 'idSucursal'
);

*/
function GuardarCliente($razonSocial,$idCalle,$numeroExterior,$numeroInterior,$idColonia,$entre_calles,$idTipoDomicilio,
$idCiudad,$telefonoCelular,$telefonoOtro,$correo,$latitud,$longitud,$usuario,$contrasena){

$cliente = new Cliente();
$domicilioCliente= new DomicilioCliente();
$usuarioClientePedidos= new UsuarioClientePedidos();
$pedidosAppDAO = new pedidosAppDAO();

$cliente->setIdCliente(0);
$cliente->setRazonSocial($razonSocial);
$cliente->setIdUsuario(0);
$cliente->setTelefono1($telefonoCelular);
$cliente->setTelefono2($telefonoOtro);
$cliente->setCodigoRI(0);
$cliente->setIdSucursal(1);
$cliente->setCorreo($correo);

$domicilioCliente->setIdDomicilio(0);
$domicilioCliente->setIdCalle($idCalle);
$domicilioCliente->setIdColonia($idColonia);
$domicilioCliente->setIdMunicipio($idCiudad);
$domicilioCliente->setNumero($numeroExterior);
$domicilioCliente->setNumeroInterior($numeroInterior);
$domicilioCliente->setEntreCalles($entre_calles);
$domicilioCliente->setIdTipoDomicilio($idTipoDomicilio);
$domicilioCliente->setLatitud($latitud);
$domicilioCliente->setLatitud($longitud);

$usuarioClientePedidos->setIdUsuario(0);
$usuarioClientePedidos->setIdClientePedidos(0);
$usuarioClientePedidos->setUsuario($usuario);
$usuarioClientePedidos->setContrasena($contrasena);
$usuarioClientePedidos->setActivo(1);

    return json_encode($pedidosAppDAO->GuardarCliente($cliente,$domicilioCliente,$usuarioClientePedidos));
}


/*FUNCION QUE ACTUALIZA EL CLIENTE

@param:

idCliente
razonSocial,
telefonoCelular,
telefonoOtro,
correo

@output:

int 0 or 1 

*/
function ActualizarCliente($idCliente,$razonSocial,$telefonoCelular,$telefonoOtro,$correo){

$cliente = new Cliente();
$pedidosAppDAO = new pedidosAppDAO();

$cliente->setIdCliente($idCliente);
$cliente->setRazonSocial($razonSocial);
$cliente->setTelefono1($telefonoCelular);
$cliente->setTelefono2($telefonoOtro);
$cliente->setCorreo($correo);

    return json_encode($pedidosAppDAO->ActualizarCliente($cliente));
}

/*FUNCION QUE ACTUALIZA EL DOMICILIO DE EL CLIENTE

@param:

idCliente
idCalle,
numeroExterior,
numeroInterior,
idColonia,
entre_calles,
idTipoDomicilio,
idCiudad,
latitud,
longitud

@output:

int 0 or 1 

*/

function ActualizarDomicilioCliente($idCliente,$idCalle,$numeroExterior,$numeroInterior,$idColonia,$entre_calles,$idTipoDomicilio,$idCiudad,$latitud,$longitud){

$domicilioCliente= new DomicilioCliente();
$pedidosAppDAO = new pedidosAppDAO();


$domicilioCliente->setIdCliente($idCliente);
$domicilioCliente->setIdCalle($idCalle);
$domicilioCliente->setIdColonia($idColonia);
$domicilioCliente->setIdMunicipio($idCiudad);
$domicilioCliente->setNumero($numeroExterior);
$domicilioCliente->setNumeroInterior($numeroInterior);
$domicilioCliente->setEntreCalles($entre_calles);
$domicilioCliente->setIdTipoDomicilio($idTipoDomicilio);
$domicilioCliente->setLatitud($latitud);
$domicilioCliente->setLatitud($longitud);

return json_encode($pedidosAppDAO->ActualizarDomicilioCliente($domicilioCliente));
}


/*FUNCION QUE ACTUALIZA EL USUARIO DE EL CLIENTE

@param:

idCliente
usuario,
contrasena

@output:

int 0 or 1 

*/
function ActualizarUsuarioCliente($idCliente,$usuario,$contrasena){

$usuarioClientePedidos= new UsuarioClientePedidos();
$pedidosAppDAO = new pedidosAppDAO();

$usuarioClientePedidos->setIdClientePedidos($idCliente);
$usuarioClientePedidos->setUsuario($usuario);
$usuarioClientePedidos->setContrasena($contrasena);

    return json_encode($pedidosAppDAO->ActualizarUsuarioCliente($usuarioClientePedidos));
}

/*FUNCION QUE LOGUEA AL CLIENTE

@param:

usuario,
contrasena

@output:

array(
"idCliente" => idCliente,
"idSucursal" => idSucursal,
"correo" => correo,
"telefono_celular" => telefono_celular,
"telefono_otro" => telefono_otro,
"idDomicilio" => idDomicilio,
"idCalle" => idCalle,
"idColonia" => idColonia,
"idCiudad" => idCiudad,
"numero_exterior" => numero_exterior,
"numero_interior" => numero_interior,
"entrecalles" => entrecalles,
"idTipoDomicilio" => idTipoDomicilio,
"latitud" => latitud,
"longitud" => longitud,
"idUsuario" => idUsuario
);

*/

function login($usuario,$contrasena){
$pedidosAppDAO = new pedidosAppDAO();
return json_encode($pedidosAppDAO->login($usuario, $contrasena));
}

/*FUNCION QUE OBTIENE LAS CALLES

@param:



@output:

array(
"idCalle" => idCalle,
"descripcion" => descripcion
);

*/

function obtenerCalles(){
$pedidosAppDAO = new pedidosAppDAO();
return json_encode($pedidosAppDAO->obtenerCalles());
}

/*FUNCION QUE OBTIENE LAS COLONIAS

@param:



@output:

array(
"idColonia" => idColonia,
"descripcion" => descripcion
);

*/

function obtenerColonias(){
$pedidosAppDAO = new pedidosAppDAO();
return json_encode($pedidosAppDAO->obtenerColonias());
}

/*FUNCION QUE OBTIENE EL TIPO DE PEDIDO 

@param:



@output:

array(
"idTipoPedido" => idTipoPedido,
"descripcion" => descripcion
);

*/

function obtenerTipoPedido(){
$pedidosAppDAO = new pedidosAppDAO();
return json_encode($pedidosAppDAO->obtenerTipoPedido());
}

/*FUNCION QUE OBTIENE LAS SUCURSALES 

@param:



@output:

array(
"idSucursal" => idSucursal,
"descripcion" => descripcion
);

*/

function obtenerSucursal(){
$pedidosAppDAO = new pedidosAppDAO();
return json_encode($pedidosAppDAO->obtenerSucursal());
}

/*FUNCION QUE GUARDA UN PEDIDO 

@param:

idTipoPedido
idSucursal
idCliente
idDomicilio
cantidad
observaciones

@output:

array(
"idPedido" => idPedido
);

*/

function GuardarPedido($idTipoPedido,$idSucursal,$idCliente,$idDomicilio,$cantidad,$observaciones){
$pedido= new Pedido();
$pedidosAppDAO = new pedidosAppDAO();

$pedido->setIdTipoPedido($idTipoPedido);
$pedido->setIdSucursal($idSucursal);
$pedido->setIdCliente($idCliente);
$pedido->setIdUsuario(0);
$pedido->setIdDomicilio($idDomicilio);
$pedido->setCantidad($cantidad);
$pedido->setObservaciones($observaciones);

return json_encode($pedidosAppDAO->GuardarPedido($pedido));
}

/*FUNCION QUE CANCELA UN PEDIDO 

@param:

idPedido
observaciones

@output:

int 0 or 1 

*/

function CancelarPedido($idPedido,$observaciones){
$pedido= new Pedido();
$pedidosAppDAO = new pedidosAppDAO();

$pedido->setIdPedido($idPedido);
$pedido->setObservaciones($observaciones);

return json_encode($pedidosAppDAO->CancelarPedido($pedido));
}

/*FUNCION QUE OBTIENE UNIDAD ASIGNADA 

@param:

idPedido

@output:

array(
"idUnidad" => idUnidad,
"claveunidad" => claveunidad,
"latitud" => latitud,
"longitud" => longitud,
"fechaHora" => fechaHora,
);

*/

function obtenerUnidadAsignada($idPedido){
$pedidosAppDAO = new pedidosAppDAO();
return json_encode($pedidosAppDAO->obtenerUnidadAsignada($idPedido));
}

/*FUNCION QUE OBTIENE EL HISTORIAL DE LOS PEDIDOS DEL CLIENTE

@param:

idCliente

@output:

array(
"idCliente" => idCliente,
"idPedido" => idPedido,
"fechaHoraRegistro" => fechaHoraRegistro,
"fechaHoraSurtido" => fechaHoraSurtido,
"fechaHoraCancelado" => fechaHoraCancelado,
"razonSocial" => razonSocial,
"calle" => calle,
"numero_exterior" => numero_exterior,
"numero_interior" => numero_interior,
"colonia" => colonia,
"estatus" => estatus,
"unidad" => unidad,
"tipopedido" => tipopedido
);

*/

function obtenerHistorial($idCliente){
$pedidosAppDAO = new pedidosAppDAO();
return json_encode($pedidosAppDAO->obtenerHistorial($idCliente));
}