const dateFormat = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const remove = (id) => {
  local.ventas = local.ventas.filter((venta) => {
    return venta.id != id;
  });
  generarTablaDeVentas();
};
const tabla = document.getElementById("table1");
const generarTablaDeVentas = () => {
  tabla.innerHTML = local.ventas.reduce(
    (html, venta) => {
      return (
        html +
        `<tr scope="row">
            <td class="table__text">${dateFormat(venta.fecha)}</td>
            <td class="table__text">${venta.nombreVendedora}</td>
            <td class="table__text">${venta.sucursal}</td>
            <td class="table__text">${venta.componentes}</td>
            <td class="table__text">${precioMaquina(venta.componentes)}</td>
            <td>
              <button onClick="eliminarVenta(${venta.id})" class="btn-remove">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>`
      );
    },
    `<tr>
      <th scope="col" class="table__title">
        Fecha
      </th>
      <th scope="col" class="table__title">
        Vendedora
      </th>
      <th scope="col" class="table__title">
        Sucursal
      </th>
      <th scope="col" class="table__title">
        Componentes
      </th>
      <th scope="col" class="table__title">
        Precio
      </th>
      <th scope="col" class="table__title"></th>
    </tr>`
  );
};

generarTablaDeVentas();

const totalVentasPorSucursal = () => {
  const tabla2 = document.getElementById("table2");
  tabla2.innerHTML = local.sucursales.reduce(
    (html, sucursal) => {
      return (
        html +
        `<tr>
            <td class="table__text">${sucursal}</td>
            <td id="ventas-centro" class="table__text">${ventasSucursal(
          sucursal
        )}</td>
          </tr>`
      );
    },
    `<tr>
            <th class="table__title">Sucursal</th>
            <th class="table__title">Total ventas</th>
          </tr>`
  );
};

totalVentasPorSucursal();

const favoritos = () => {
  const productoEstrella = document.getElementById("text1");
  const vendedoraEstrella = document.getElementById("text2");

  productoEstrella.innerText = `Producto estrella: ${componenteMasVendido()}`;
  vendedoraEstrella.innerText = `Vendedora que más ingresos generó: ${vendedoraConMasIngresos()}`;
};

favoritos();

const botonAgregar = document.getElementById("btn-agregar");
const modal = document.getElementById("container-modal");
const modalContent = document.getElementById("modal-content");
const botonCerrar = document.getElementById("btn-cerrar");
const botonCancelar = document.getElementById("btn-cancel");

const btnadd = document.getElementById("btn-add");
const optionVendedora = document.getElementById("vendedora-option");
const sucursalOption = document.getElementById("sucursal-option");
const optionComponentes = document.getElementById("componentes-option");
const today = new Date();

btnadd.addEventListener("click", function () {

  const vendedoraSeleccionada = optionVendedora.options[optionVendedora.selectedIndex].value;
  const sucursalSeleccionada = sucursalOption.options[sucursalOption.selectedIndex].value;

  const selected = [...optionComponentes.options].filter(option => option.selected).map(option => option.value);
  local.ventas.push({
    id: local.ventas.length + 1,
    fecha: today,
    nombreVendedora: vendedoraSeleccionada,
    sucursal: sucursalSeleccionada,
    componentes: selected,
  })
  generarTablaDeVentas();
  totalVentasPorSucursal();
  favoritos();
  modal.classList.replace("show", "fade");
  modalContent.classList.remove("active");
})
botonCancelar.addEventListener("click", function () {
  modal.classList.replace("show", "fade");
  modalContent.classList.remove("active");
});

botonAgregar.addEventListener("click", function () {
  modal.classList.replace("fade", "show");
  modalContent.classList.add("active");
});

botonCerrar.addEventListener("click", function () {
  modal.classList.replace("show", "fade");
  modalContent.classList.remove("active");
});

modal.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.classList.replace("show", "fade");
    modalContent.classList.remove("active");
  }
});

const modalPapelera = document.getElementById("container-modal2");
const modalContentPapelera = document.getElementById("modal-content2");
const btnCerrarModalPapelera = document.getElementById("btn-cerrar2");
const btnEliminarPapelera = document.getElementById("btn-eliminar");
const btnCancelar2 = document.getElementById("btn-cancel2");

const eliminarVenta = (id) => {
  modalPapelera.classList.replace("fade", "show");
  modalContentPapelera.classList.add("active");
  btnCerrarModalPapelera.addEventListener("click", function () {
    modalPapelera.classList.replace("show", "fade");
    modalContentPapelera.classList.remove("active");
  });
  modal.addEventListener("click", function (event) {
    if (event.target == modalPapelera) {
      modalPapelera.classList.replace("show", "fade");
      modalContentPapelera.classList.remove("active");
    }
  });
  btnEliminarPapelera.addEventListener("click", function (event) {
    modalPapelera.classList.replace("show", "fade");
    modalContentPapelera.classList.remove("active");
    remove(id);
  });
  btnCancelar2.addEventListener("click", function () {
    modalPapelera.classList.replace("show", "fade");
    modalContentPapelera.classList.remove("active");
  });
};



