<template>
  <div class="grid grid-cols-1 gap-6 mt-8">
    <!-- KPIs Productos Recientes -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <!-- Total Productos Recientes -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Productos Recientes
            </p>
            <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {{ productosRecientes.length }}
            </p>
            <div class="flex items-center mt-2">
              <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span class="text-xs text-gray-500 ml-2">última hora</span>
            </div>
          </div>
          <div
            class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Últimos 15 minutos -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Últimos 15 min
            </p>
            <p class="text-2xl font-bold text-green-600 dark:text-green-400">
              {{ productosUltimos15Min.length }}
            </p>
            <div class="flex items-center mt-2">
              <svg
                class="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
              <span class="text-xs font-medium text-green-600 ml-1"
                >Muy reciente</span
              >
            </div>
          </div>
          <div
            class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Valor Agregado Reciente -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Valor Agregado
            </p>
            <p class="text-2xl font-bold text-purple-600 dark:text-purple-400">
              S/ {{ valorTotalRecientes }}
            </p>
            <div class="flex items-center mt-2">
              <svg
                class="w-4 h-4 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 17l7-7 7 7M5 12l7-7 7 7"
                ></path>
              </svg>
              <span class="text-xs font-medium text-purple-600 ml-1"
                >+{{ porcentajeDelTotal }}%</span
              >
              <span class="text-xs text-gray-500 ml-1">del inventario</span>
            </div>
          </div>
          <div
            class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-purple-600 dark:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Actividad -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Actividad
            </p>
            <p class="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {{ actividadReciente }}
            </p>
            <div class="flex items-center mt-2">
              <div
                class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
              ></div>
              <span class="text-xs text-gray-500 ml-2">productos/hora</span>
            </div>
          </div>
          <div
            class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-orange-600 dark:text-orange-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Controles y Filtros -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"
    >
      <div
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
      >
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Productos Recientes
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Productos agregados en las últimas horas
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <!-- Filtro de tiempo -->
          <div
            class="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1"
          >
            <button
              v-for="filtro in filtrosTiempo"
              :key="filtro.value"
              @click="filtroTiempoActivo = filtro.value"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                filtroTiempoActivo === filtro.value
                  ? 'bg-white dark:bg-gray-800 text-blue-600 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
              ]"
            >
              {{ filtro.label }}
            </button>
          </div>

          <!-- Búsqueda -->
          <div class="relative">
            <svg
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              v-model="busqueda"
              type="text"
              placeholder="Buscar productos..."
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <!-- Actualizar -->
          <button
            @click="actualizarDatos"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
            Actualizar
          </button>
        </div>
      </div>

      <!-- Indicador de tiempo real -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center gap-2 text-sm text-gray-500">
          <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Última actualización: {{ ultimaActualizacion }}</span>
        </div>

        <div class="flex items-center gap-4">
          <label class="flex items-center gap-2">
            <input
              v-model="autoActualizar"
              type="checkbox"
              class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span class="text-sm text-gray-600 dark:text-gray-400"
              >Auto-actualizar</span
            >
          </label>
        </div>
      </div>
    </div>

    <!-- Lista de Productos Recientes -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Productos Recientes
          </h3>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span>Mostrando {{ productosFiltrados.length }} productos</span>
          </div>
        </div>

        <!-- Vista de Lista -->
        <div class="space-y-4">
          <div
            v-for="producto in productosFiltrados"
            :key="producto.id"
            class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <!-- Imagen del producto -->
                <div
                  class="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-8 h-8 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                </div>

                <!-- Información del producto -->
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <h4
                      class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      {{ producto.nombre }}
                    </h4>
                    <span
                      v-if="producto.etiqueta"
                      class="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    >
                      {{ producto.etiqueta }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {{ producto.descripcion }}
                  </p>
                  <div class="flex items-center gap-4 text-sm">
                    <span class="text-gray-500"
                      >Código: <strong>{{ producto.codigo }}</strong></span
                    >
                    <span
                      class="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {{ producto.categoria }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Información lateral -->
              <div class="text-right">
                <div class="flex items-center gap-6">
                  <!-- Precio -->
                  <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Precio
                    </p>
                    <p class="text-lg font-bold text-gray-900 dark:text-white">
                      S/ {{ producto.precio.toFixed(2) }}
                    </p>
                  </div>

                  <!-- Stock -->
                  <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Stock
                    </p>
                    <p
                      class="text-lg font-bold text-green-600 dark:text-green-400"
                    >
                      {{ producto.stock }}
                    </p>
                  </div>

                  <!-- Tiempo -->
                  <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Agregado
                    </p>
                    <p
                      class="text-sm font-medium text-blue-600 dark:text-blue-400"
                    >
                      {{ tiempoTranscurrido(producto.fechaCreacion) }}
                    </p>
                  </div>

                  <!-- Acciones -->
                  <div class="flex items-center gap-2">
                    <button
                      @click="editarProducto(producto.id)"
                      class="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors"
                      title="Editar"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      @click="verDetalle(producto.id)"
                      class="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      title="Ver detalle"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Estado vacío -->
          <div v-if="productosFiltrados.length === 0" class="text-center py-12">
            <svg
              class="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              ></path>
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No hay productos recientes
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              No se han agregado productos en el período seleccionado
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductosRecientes",
  data() {
    return {
      filtroTiempoActivo: 60, // minutos
      busqueda: "",
      autoActualizar: true,
      ultimaActualizacion: "",
      intervalId: null,

      filtrosTiempo: [
        { label: "15 min", value: 15 },
        { label: "30 min", value: 30 },
        { label: "1 hora", value: 60 },
        { label: "2 horas", value: 120 },
      ],

      // Datos de ejemplo - en una app real vendrían de una API
      productos: [
        {
          id: 1,
          codigo: "PHONE001",
          nombre: "iPhone 15 Pro",
          descripcion: "Smartphone Apple iPhone 15 Pro 128GB Negro Titanio",
          categoria: "electronica",
          precio: 4299.99,
          stock: 8,
          etiqueta: "Nuevo ⭐",
          fechaCreacion: new Date(Date.now() - 5 * 60 * 1000), // 5 minutos atrás
        },
        {
          id: 2,
          codigo: "WATCH001",
          nombre: "Apple Watch Series 9",
          descripcion: "Smartwatch Apple Watch Series 9 GPS 45mm",
          categoria: "electronica",
          precio: 1899.99,
          stock: 12,
          etiqueta: "Hot 🔥",
          fechaCreacion: new Date(Date.now() - 12 * 60 * 1000), // 12 minutos atrás
        },
        {
          id: 3,
          codigo: "TABLET001",
          nombre: "iPad Air",
          descripcion: 'Tablet Apple iPad Air 10.9" 64GB WiFi',
          categoria: "electronica",
          precio: 2499.99,
          stock: 6,
          etiqueta: "",
          fechaCreacion: new Date(Date.now() - 25 * 60 * 1000), // 25 minutos atrás
        },
        {
          id: 4,
          codigo: "GAME001",
          nombre: "PlayStation 5",
          descripción: "Consola Sony PlayStation 5 Standard Edition",
          categoria: "electronica",
          precio: 2199.99,
          stock: 3,
          etiqueta: "Limitado ⏰",
          fechaCreacion: new Date(Date.now() - 45 * 60 * 1000), // 45 minutos atrás
        },
        {
          id: 5,
          codigo: "BOOK001",
          nombre: "Libro de Programación",
          descripcion: "Clean Code: Manual de Programación Limpia",
          categoria: "libros",
          precio: 89.99,
          stock: 20,
          etiqueta: "",
          fechaCreacion: new Date(Date.now() - 75 * 60 * 1000), // 75 minutos atrás (más de 1 hora)
        },
      ],
    };
  },
  computed: {
    productosRecientes() {
      const ahora = new Date();
      const limite = new Date(
        ahora.getTime() - this.filtroTiempoActivo * 60 * 1000
      );

      return this.productos.filter(
        (producto) => new Date(producto.fechaCreacion) >= limite
      );
    },

    productosUltimos15Min() {
      const ahora = new Date();
      const limite = new Date(ahora.getTime() - 15 * 60 * 1000);

      return this.productos.filter(
        (producto) => new Date(producto.fechaCreacion) >= limite
      );
    },

    productosFiltrados() {
      let productos = this.productosRecientes;

      if (this.busqueda) {
        const termino = this.busqueda.toLowerCase();
        productos = productos.filter(
          (producto) =>
            producto.nombre.toLowerCase().includes(termino) ||
            producto.codigo.toLowerCase().includes(termino) ||
            producto.categoria.toLowerCase().includes(termino)
        );
      }

      return productos.sort(
        (a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)
      );
    },

    valorTotalRecientes() {
      return this.productosRecientes
        .reduce(
          (total, producto) => total + producto.precio * producto.stock,
          0
        )
        .toFixed(2);
    },

    porcentajeDelTotal() {
      const valorTotal = this.productos.reduce(
        (total, producto) => total + producto.precio * producto.stock,
        0
      );
      return valorTotal > 0
        ? ((this.valorTotalRecientes / valorTotal) * 100).toFixed(1)
        : 0;
    },

    actividadReciente() {
      // Productos por hora en las últimas 2 horas
      const productosUltimasHoras = this.productos.filter((producto) => {
        const ahora = new Date();
        const limite = new Date(ahora.getTime() - 2 * 60 * 60 * 1000); // 2 horas
        return new Date(producto.fechaCreacion) >= limite;
      });

      return Math.round(productosUltimasHoras.length / 2);
    },
  },

  mounted() {
    this.actualizarTiempo();
    if (this.autoActualizar) {
      this.iniciarAutoActualizacion();
    }
  },

  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },

  watch: {
    autoActualizar(nuevoValor) {
      if (nuevoValor) {
        this.iniciarAutoActualizacion();
      } else {
        this.detenerAutoActualizacion();
      }
    },
  },

  methods: {
    actualizarDatos() {
      // Simular actualización de datos
      this.actualizarTiempo();
      // Aquí llamarías a la API para obtener productos actualizados
      this.$emit("actualizar-productos");
    },

    actualizarTiempo() {
      this.ultimaActualizacion = new Date().toLocaleTimeString();
    },

    iniciarAutoActualizacion() {
      this.intervalId = setInterval(() => {
        this.actualizarDatos();
      }, 30000); // Actualizar cada 30 segundos
    },

    detenerAutoActualizacion() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },

    tiempoTranscurrido(fecha) {
      const ahora = new Date();
      const fechaProducto = new Date(fecha);
      const diferencia = ahora - fechaProducto;

      const minutos = Math.floor(diferencia / (1000 * 60));
      const horas = Math.floor(minutos / 60);

      if (minutos < 1) {
        return "Ahora mismo";
      } else if (minutos < 60) {
        return `${minutos} min`;
      } else {
        return `${horas}h ${minutos % 60}min`;
      }
    },

    editarProducto(id) {
      this.$emit("editar-producto", id);
    },

    verDetalle(id) {
      this.$emit("ver-detalle", id);
    },
  },
};
</script>
