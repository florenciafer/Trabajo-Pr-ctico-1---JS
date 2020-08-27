const precioMaquina = (componentes) => {
  return local.precios.reduce((sumaComponentes, precio) => {
    if (componentes.includes(precio.componente)) {
      sumaComponentes += precio.precio;
    }
    return sumaComponentes;
  }, 0);
};

const cantidadVentasComponente = (componente) => {
  return local.ventas.reduce((cantidadDeVentas, venta) => {
    if (venta.componentes.includes(componente)) {
      cantidadDeVentas++;
    }
    return cantidadDeVentas;
  }, 0);
};

const vendedoraDelMes = (mes, anio) => {
  const ventasPorFecha = local.ventas.filter((venta) => {
    return (
      venta.fecha.getMonth() == mes - 1 && venta.fecha.getFullYear() == anio
    );
  });
  const vendedoras = ventasPorFecha.reduce(
    (ventasPorVendedora, ventaPorVendedora) => {
      if (ventasPorVendedora[ventaPorVendedora.nombreVendedora]) {
        ventasPorVendedora[ventaPorVendedora.nombreVendedora] += precioMaquina(
          ventaPorVendedora.componentes
        );
      } else {
        ventasPorVendedora[ventaPorVendedora.nombreVendedora] = precioMaquina(
          ventaPorVendedora.componentes
        );
      }
      return ventasPorVendedora;
    },
    {}
  );
  return mayorDeUnObjeto(vendedoras);
};

const mayorDeUnObjeto = (objeto) => {
  const valores = Object.values(objeto);
  const indice = valores.indexOf(Math.max(...valores));
  return Object.keys(objeto)[indice];
};

const ventasMes = (mes, anio) => {
  const ventasPorFecha = local.ventas.filter((venta) => {
    return (
      venta.fecha.getMonth() == mes - 1 && venta.fecha.getFullYear() == anio
    );
  });

  return ventasPorFecha.reduce((sumaVentas, venta) => {
    return sumaVentas + precioMaquina(venta.componentes);
  }, 0);
};

const ventasVendedora = (nombre) => {
  const vendedora = local.ventas.filter((venta) => {
    return venta.nombreVendedora == nombre;
  });
  return vendedora.reduce((sumaVentas, venta) => {
    return sumaVentas + precioMaquina(venta.componentes);
  }, 0);
};

const componenteMasVendido = () => {
  const listaComponentes = local.precios.reduce((cantidadComponentes, item) => {
    if (!cantidadComponentes[item.componente]) {
      cantidadComponentes[item.componente] = cantidadVentasComponente(
        item.componente
      );
    }
    return cantidadComponentes;
  }, {});
  return mayorDeUnObjeto(listaComponentes);
};

const huboVentas = (mes, anio) => {
  const ventasPorFecha = local.ventas.filter((venta) => {
    return (
      venta.fecha.getMonth() == mes - 1 && venta.fecha.getFullYear() == anio
    );
  });

  return ventasPorFecha.length > 0 ? true : false;
};

const ventasSucursal = (sucursal) => {
  const sucursales = local.ventas.filter((venta) => {
    return venta.sucursal == sucursal;
  });
  return totalVentas(sucursales);
};

const totalVentas = (ventas) => {
  return ventas.reduce((sumaVentas, venta) => {
    return sumaVentas + precioMaquina(venta.componentes);
  }, 0);
};

const sucursalDelMes = (mes, anio) => {
  const ventasPorFecha = local.ventas.filter((venta) => {
    return (
      venta.fecha.getMonth() == mes - 1 && venta.fecha.getFullYear() == anio
    );
  });
  const ventasSucursales = ventasPorFecha.reduce((ventasPorSucursal, venta) => {
    if (!ventasPorSucursal[venta.sucursal]) {
      ventasPorSucursal[venta.sucursal] = +ventasSucursal(venta.sucursal);
    }
    return ventasPorSucursal;
  }, {});
  return mayorDeUnObjeto(ventasSucursales);
};

//

const vendedoraConMasIngresos = () => {
  const vendedoras = local.ventas.reduce(
    (ventasPorVendedora, ventaPorVendedora) => {
      if (ventasPorVendedora[ventaPorVendedora.nombreVendedora]) {
        ventasPorVendedora[ventaPorVendedora.nombreVendedora] += precioMaquina(
          ventaPorVendedora.componentes
        );
      } else {
        ventasPorVendedora[ventaPorVendedora.nombreVendedora] = precioMaquina(
          ventaPorVendedora.componentes
        );
      }
      return ventasPorVendedora;
    },
    {}
  );
  return mayorDeUnObjeto(vendedoras);
};
