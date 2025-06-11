<template>
  <div class="grid grid-cols-1 gap-4">
    <!-- Tabla de clientes -->
    <div
      class="p-4 bg-white rounded-xl shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
    >
      <!-- Header con título y controles -->
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4"
      >
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Clientes Registrados
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Gestiona y supervisa todos los clientes registrados
          </p>
        </div>

        <!-- Controles -->
        <div class="flex flex-col sm:flex-row gap-3">
          <!-- Buscador -->
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
              v-model="searchTerm"
              type="text"
              placeholder="Buscar clientes..."
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <!-- Filtro por estado -->
          <select
            v-model="statusFilter"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Todos los estados</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
            <option value="suspendido">Suspendido</option>
          </select>

          <!-- Botón agregar cliente -->
          <button
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
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Nuevo Cliente
          </button>
        </div>
      </div>

      <!-- Tabla responsiva -->
      <div
        class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                <div class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    @change="toggleAllSelection"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  ID
                </div>
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Cliente
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Contacto
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Estado
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Fecha Registro
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Pedidos
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Total Gastado
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody
            class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <tr
              v-for="cliente in paginatedClientes"
              :key="cliente.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
            >
              <!-- Checkbox e ID -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    v-model="selectedClientes"
                    :value="cliente.id"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span
                    class="text-sm font-mono text-gray-900 dark:text-gray-100"
                  >
                    #{{ cliente.id }}
                  </span>
                </div>
              </td>

              <!-- Información del cliente -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold"
                  >
                    {{ cliente.nombre.charAt(0)
                    }}{{ cliente.apellido.charAt(0) }}
                  </div>
                  <div>
                    <div
                      class="text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      {{ cliente.nombre }} {{ cliente.apellido }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      {{ cliente.documento }}
                    </div>
                  </div>
                </div>
              </td>

              <!-- Contacto -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900 dark:text-white">
                  {{ cliente.email }}
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  {{ cliente.telefono }}
                </div>
              </td>

              <!-- Estado -->
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="getStatusClass(cliente.estado)"
                  class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                >
                  <span
                    :class="getStatusDotClass(cliente.estado)"
                    class="w-2 h-2 rounded-full mr-2"
                  ></span>
                  {{ cliente.estado }}
                </span>
              </td>

              <!-- Fecha registro -->
              <td
                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white"
              >
                {{ formatDate(cliente.fechaRegistro) }}
              </td>

              <!-- Número de pedidos -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-2">
                  <span
                    class="text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    {{ cliente.totalPedidos }}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">
                    pedidos
                  </span>
                </div>
              </td>

              <!-- Total gastado -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div
                  class="text-sm font-semibold text-green-600 dark:text-green-400"
                >
                  ${{ cliente.totalGastado.toFixed(2) }}
                </div>
              </td>

              <!-- Acciones -->
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="flex items-center justify-center gap-2">
                  <!-- Ver detalles -->
                  <button
                    @click="verDetalle(cliente)"
                    class="p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900 rounded-lg transition-colors duration-200"
                    title="Ver detalles"
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

                  <!-- Editar -->
                  <button
                    @click="editarCliente(cliente)"
                    class="p-2 text-yellow-600 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:bg-yellow-900 rounded-lg transition-colors duration-200"
                    title="Editar cliente"
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

                  <!-- Enviar mensaje -->
                  <button
                    @click="enviarMensaje(cliente)"
                    class="p-2 text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900 rounded-lg transition-colors duration-200"
                    title="Enviar mensaje"
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                  </button>

                  <!-- Menú de más opciones -->
                  <div class="relative" ref="dropdown">
                    <button
                      @click="toggleDropdown(cliente.id)"
                      class="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                      title="Más opciones"
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
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        ></path>
                      </svg>
                    </button>

                    <!-- Dropdown menu -->
                    <div
                      v-if="openDropdown === cliente.id"
                      class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10"
                    >
                      <div class="py-1">
                        <button
                          @click="verPedidos(cliente)"
                          class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Ver pedidos
                        </button>
                        <button
                          @click="cambiarEstado(cliente)"
                          class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Cambiar estado
                        </button>
                        <button
                          @click="exportarDatos(cliente)"
                          class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Exportar datos
                        </button>
                        <hr class="my-1 border-gray-200 dark:border-gray-600" />
                        <button
                          @click="eliminarCliente(cliente)"
                          class="block w-full text-left px-4 py-2 text-sm text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
                        >
                          Eliminar cliente
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Paginación -->
      <div
        class="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4"
      >
        <!-- Información de resultados -->
        <div class="text-sm text-gray-700 dark:text-gray-300">
          Mostrando
          <span class="font-semibold">{{ startIndex + 1 }}</span>
          a
          <span class="font-semibold">{{
            Math.min(endIndex, filteredClientes.length)
          }}</span>
          de
          <span class="font-semibold">{{ filteredClientes.length }}</span>
          resultados
        </div>

        <!-- Controles de paginación -->
        <div class="flex items-center gap-2">
          <!-- Botón anterior -->
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
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
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <!-- Números de página -->
          <div class="flex items-center gap-1">
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                page === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
              ]"
            >
              {{ page }}
            </button>
          </div>

          <!-- Botón siguiente -->
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
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
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientesDashboard",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 20,
      searchTerm: "",
      statusFilter: "",
      selectedClientes: [],
      openDropdown: null,

      // Datos de ejemplo - En producción vendrían de una API
      clientes: [
        {
          id: "12345",
          nombre: "María",
          apellido: "López",
          email: "maria.lopez@email.com",
          telefono: "+51 987654321",
          documento: "DNI: 12345678",
          estado: "activo",
          fechaRegistro: "2024-01-15",
          totalPedidos: 8,
          totalGastado: 420.5,
        },
        {
          id: "12346",
          nombre: "Juan",
          apellido: "Pérez",
          email: "juan.perez@email.com",
          telefono: "+51 987654322",
          documento: "DNI: 12345679",
          estado: "inactivo",
          fechaRegistro: "2024-02-20",
          totalPedidos: 3,
          totalGastado: 185.25,
        },
        {
          id: "12347",
          nombre: "Ana",
          apellido: "Gómez",
          email: "ana.gomez@email.com",
          telefono: "+51 987654323",
          documento: "DNI: 12345680",
          estado: "activo",
          fechaRegistro: "2024-03-10",
          totalPedidos: 12,
          totalGastado: 680.75,
        },
        {
          id: "12348",
          nombre: "Carlos",
          apellido: "Rodríguez",
          email: "carlos.rodriguez@email.com",
          telefono: "+51 987654324",
          documento: "DNI: 12345681",
          estado: "suspendido",
          fechaRegistro: "2024-01-25",
          totalPedidos: 2,
          totalGastado: 95.0,
        },
        {
          id: "12349",
          nombre: "Laura",
          apellido: "Martínez",
          email: "laura.martinez@email.com",
          telefono: "+51 987654325",
          documento: "DNI: 12345682",
          estado: "activo",
          fechaRegistro: "2024-04-05",
          totalPedidos: 15,
          totalGastado: 1250.3,
        },
        // Agregar más clientes de ejemplo aquí...
      ],
    };
  },

  computed: {
    filteredClientes() {
      let filtered = this.clientes;

      // Filtrar por término de búsqueda
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase();
        filtered = filtered.filter(
          (cliente) =>
            cliente.nombre.toLowerCase().includes(term) ||
            cliente.apellido.toLowerCase().includes(term) ||
            cliente.email.toLowerCase().includes(term) ||
            cliente.id.includes(term)
        );
      }

      // Filtrar por estado
      if (this.statusFilter) {
        filtered = filtered.filter(
          (cliente) => cliente.estado === this.statusFilter
        );
      }

      return filtered;
    },

    totalPages() {
      return Math.ceil(this.filteredClientes.length / this.itemsPerPage);
    },

    paginatedClientes() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredClientes.slice(start, end);
    },

    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },

    endIndex() {
      return this.startIndex + this.itemsPerPage;
    },

    visiblePages() {
      const pages = [];
      const totalPages = this.totalPages;
      const current = this.currentPage;

      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (current <= 4) {
          for (let i = 1; i <= 5; i++) {
            pages.push(i);
          }
          pages.push("...");
          pages.push(totalPages);
        } else if (current >= totalPages - 3) {
          pages.push(1);
          pages.push("...");
          for (let i = totalPages - 4; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push("...");
          for (let i = current - 1; i <= current + 1; i++) {
            pages.push(i);
          }
          pages.push("...");
          pages.push(totalPages);
        }
      }

      return pages.filter(
        (page) =>
          page !== "..." || pages.indexOf(page) === pages.lastIndexOf(page)
      );
    },
  },

  methods: {
    // Métodos de paginación
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    goToPage(page) {
      if (page !== "..." && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    // Métodos de utilidad
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("es-ES");
    },

    getStatusClass(estado) {
      const classes = {
        activo:
          "text-green-800 bg-green-100 dark:text-green-400 dark:bg-green-900",
        inactivo:
          "text-gray-800 bg-gray-100 dark:text-gray-400 dark:bg-gray-700",
        suspendido: "text-red-800 bg-red-100 dark:text-red-400 dark:bg-red-900",
      };
      return classes[estado] || classes["inactivo"];
    },

    getStatusDotClass(estado) {
      const classes = {
        activo: "bg-green-400",
        inactivo: "bg-gray-400",
        suspendido: "bg-red-400",
      };
      return classes[estado] || classes["inactivo"];
    },

    // Métodos de acciones
    toggleAllSelection() {
      if (this.selectedClientes.length === this.paginatedClientes.length) {
        this.selectedClientes = [];
      } else {
        this.selectedClientes = this.paginatedClientes.map(
          (cliente) => cliente.id
        );
      }
    },

    toggleDropdown(clienteId) {
      this.openDropdown = this.openDropdown === clienteId ? null : clienteId;
    },

    verDetalle(cliente) {
      console.log("Ver detalle del cliente:", cliente);
      // Implementar lógica para ver detalles
    },

    editarCliente(cliente) {
      console.log("Editar cliente:", cliente);
      // Implementar lógica para editar
    },

    enviarMensaje(cliente) {
      console.log("Enviar mensaje a:", cliente);
      // Implementar lógica para enviar mensaje
    },

    verPedidos(cliente) {
      console.log("Ver pedidos de:", cliente);
      this.openDropdown = null;
      // Implementar lógica para ver pedidos
    },

    cambiarEstado(cliente) {
      console.log("Cambiar estado de:", cliente);
      this.openDropdown = null;
      // Implementar lógica para cambiar estado
    },

    exportarDatos(cliente) {
      console.log("Exportar datos de:", cliente);
      this.openDropdown = null;
      // Implementar lógica para exportar
    },

    eliminarCliente(cliente) {
      console.log("Eliminar cliente:", cliente);
      this.openDropdown = null;
      // Implementar lógica para eliminar
    },
  },

  // Cerrar dropdown al hacer click fuera
  mounted() {
    document.addEventListener("click", (e) => {
      if (!this.$refs.dropdown?.contains(e.target)) {
        this.openDropdown = null;
      }
    });
  },

  // Resetear página al filtrar
  watch: {
    searchTerm() {
      this.currentPage = 1;
    },
    statusFilter() {
      this.currentPage = 1;
    },
  },
};
</script>
