describe("Chequeo de empleades ", () => {
  it("(1)Ingresar un array de componentes y devolver la suma de precios de los componentes", () => {
    const componentes = local.ventas[0].componentes;

    expect(precioMaquina(componentes)).to.be.eql(320);
  });
  it("(2)Recibe un componente y devuelve la cantidad de veces que fue vendido", () => {
    let componente = "Monitor ASC 543";
    expect(cantidadVentasComponente(componente)).to.be.eql(2);
  });
  it("(3)Recibe parametros numerios mes y año y devuelve el nombre de la vendedora que mas vendio en plata ese mes", () => {
    let mes = 1;
    let anio = 2019;
    expect(vendedoraDelMes(mes, anio)).to.be.eql("Ada");
  });
  it("(4)Recibe parametros numerios mes y año y devuelve las ventas del mes", () => {
    let mes = 1;
    let anio = 2019;
    expect(ventasMes(mes, anio)).to.be.eql(1250);
  });
  it("(5)Recibe una vendedora y devuelve las ventas sin limite de fecha", () => {
    let nombre = "Grace";
    expect(ventasVendedora(nombre)).to.be.eql(900);
  });
  it("(6)devuelve el componente mas vendido historicamente", () => {
    expect(componenteMasVendido()).to.be.eql("Monitor GPRS 3000");
  });
  it("(7)recibe un mes y un anio y devuelve si hubo ventas", () => {
    let mes = 1;
    let anio = 2019;
    expect(huboVentas(mes, anio)).to.be.eql(true);
  });
  it("(2.1)recibe una sucursal y devuelve las ventas totales", () => {
    let sucursal = "Centro";
    expect(ventasSucursal(sucursal)).to.be.eql(990);
  });
  it("(2.2)recibe un mes y un anio y devuelve las ventas totales", () => {
    let mes = 1;
    let anio = 2019;
    expect(sucursalDelMes(mes, anio)).to.be.eql("Centro");
  });
});

//- Crear la función **sucursalDelMes(mes, anio)**, que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
