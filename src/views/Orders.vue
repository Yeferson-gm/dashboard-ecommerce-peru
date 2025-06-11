<template>
  <div class="grid grid-cols-1 gap-4">
    <!-- Estadísticas de pedidos -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Pedidos
            </p>
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ totalPedidos }}
            </p>
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Ventas Totales
            </p>
            <p class="text-2xl font-bold text-green-600 dark:text-green-400">
              ${{ ventasTotales.toFixed(2) }}
            </p>
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pendientes
            </p>
            <p class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {{ pedidosPendientes }}
            </p>
          </div>
          <div
            class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-yellow-600 dark:text-yellow-400"
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

      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Completados
            </p>
            <p class="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {{ pedidosCompletados }}
            </p>
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabla de pedidos -->
    <div
      class="p-4 bg-white rounded-xl shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
    >
      <!-- Header con título y controles -->
      <div
        class="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-4"
      >
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Gestión de Pedidos
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Administra todos los pedidos realizados por los clientes
          </p>
        </div>

        <!-- Controles -->
        <div class="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
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
              placeholder="Buscar pedidos..."
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <!-- Filtro por estado -->
          <select
            v-model="statusFilter"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Todos los estados</option>
            <option value="pendiente">Pendiente</option>
            <option value="procesando">Procesando</option>
            <option value="enviado">Enviado</option>
            <option value="entregado">Entregado</option>
            <option value="cancelado">Cancelado</option>
          </select>

          <!-- Filtro por fecha -->
          <select
            v-model="dateFilter"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Todas las fechas</option>
            <option value="today">Hoy</option>
            <option value="week">Esta semana</option>
            <option value="month">Este mes</option>
            <option value="year">Este año</option>
          </select>

          <!-- Botón exportar -->
          <button
            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Exportar
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
                  Pedido
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
                Productos
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
                Fecha
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                Método Pago
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
              v-for="pedido in paginatedPedidos"
              :key="pedido.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
            >
              <!-- Checkbox e ID del pedido -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    v-model="selectedPedidos"
                    :value="pedido.id"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <div
                      class="text-sm font-mono font-semibold text-gray-900 dark:text-white"
                    >
                      #{{ pedido.id }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      {{ pedido.tipoOrden }}
                    </div>
                  </div>
                </div>
              </td>

              <!-- Información del cliente -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                  >
                    {{ pedido.cliente.nombre.charAt(0)
                    }}{{ pedido.cliente.apellido.charAt(0) }}
                  </div>
                  <div>
                    <div
                      class="text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      {{ pedido.cliente.nombre }} {{ pedido.cliente.apellido }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      {{ pedido.cliente.email }}
                    </div>
                  </div>
                </div>
              </td>

              <!-- Productos -->
              <td class="px-6 py-4">
                <div class="max-w-xs">
                  <div
                    class="text-sm text-gray-900 dark:text-white font-medium"
                  >
                    {{ pedido.productos[0].nombre }}
                    <span
                      v-if="pedido.productos.length > 1"
                      class="text-gray-500"
                    >
                      +{{ pedido.productos.length - 1 }} más
                    </span>
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    {{
                      pedido.productos.reduce(
                        (total, p) => total + p.cantidad,
                        0
                      )
                    }}
                    items
                  </div>
                </div>
              </td>

              <!-- Estado -->
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="getStatusClass(pedido.estado)"
                  class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                >
                  <span
                    :class="getStatusDotClass(pedido.estado)"
                    class="w-2 h-2 rounded-full mr-2"
                  ></span>
                  {{ pedido.estado }}
                </span>
              </td>

              <!-- Fecha -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900 dark:text-white">
                  {{ formatDate(pedido.fecha) }}
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  {{ formatTime(pedido.fecha) }}
                </div>
              </td>

              <!-- Total -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div
                  class="text-sm font-semibold text-gray-900 dark:text-white"
                >
                  ${{ pedido.total.toFixed(2) }}
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  {{ pedido.moneda }}
                </div>
              </td>

              <!-- Método de pago -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-2">
                  <div
                    :class="getPaymentMethodClass(pedido.metodoPago)"
                    class="w-8 h-8 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4"
                      :class="getPaymentMethodIconClass(pedido.metodoPago)"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        v-if="pedido.metodoPago === 'tarjeta'"
                        d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                      />
                      <path
                        v-else-if="pedido.metodoPago === 'efectivo'"
                        d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                      />
                      <path
                        v-else
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div
                      class="text-xs font-medium text-gray-900 dark:text-white capitalize"
                    >
                      {{ pedido.metodoPago }}
                    </div>
                  </div>
                </div>
              </td>

              <!-- Acciones -->
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="flex items-center justify-center gap-2">
                  <!-- Ver detalles -->
                  <button
                    @click="verDetallePedido(pedido)"
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

                  <!-- Editar pedido -->
                  <button
                    @click="editarPedido(pedido)"
                    class="p-2 text-yellow-600 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:bg-yellow-900 rounded-lg transition-colors duration-200"
                    title="Editar pedido"
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

                  <!-- Tracking -->
                  <button
                    @click="verTracking(pedido)"
                    class="p-2 text-purple-600 hover:bg-purple-100 dark:text-purple-400 dark:hover:bg-purple-900 rounded-lg transition-colors duration-200"
                    title="Ver tracking"
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </button>

                  <!-- Menú de más opciones -->
                  <div class="relative">
                    <button
                      @click="toggleDropdown(pedido.id)"
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
                      v-if="openDropdown === pedido.id"
                      class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10"
                    >
                      <div class="py-1">
                        <button
                          @click="cambiarEstado(pedido)"
                          class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Cambiar estado
                        </button>
                        <button
                          @click="imprimirFactura(pedido)"
                          class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Imprimir factura
                        </button>
                        <button
                          @click="enviarNotificacion(pedido)"
                          class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Notificar cliente
                        </button>
                        <button
                          @click="duplicarPedido(pedido)"
                          class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Duplicar pedido
                        </button>
                        <hr class="my-1 border-gray-200 dark:border-gray-600" />
                        <button
                          @click="cancelarPedido(pedido)"
                          class="block w-full text-left px-4 py-2 text-sm text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
                        >
                          Cancelar pedido
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
            Math.min(endIndex, filteredPedidos.length)
          }}</span>
          de
          <span class="font-semibold">{{ filteredPedidos.length }}</span>
          resultados
        </div>

        <!-- Controles de paginación -->
        <div class="flex items-center gap-2">
          <!-- Items por página -->
          <select
            v-model="itemsPerPage"
            @change="currentPage = 1"
            class="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="10">10 por página</option>
            <option value="20">20 por página</option>
            <option value="50">50 por página</option>
            <option value="100">100 por página</option>
          </select>

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
  name: "GestionPedidos",
  data() {
    return {
      // Estados de filtrado y búsqueda
      searchTerm: "",
      statusFilter: "",
      dateFilter: "",

      // Paginación
      currentPage: 1,
      itemsPerPage: 10,

      // Selección de pedidos
      selectedPedidos: [],

      // Control de dropdown
      openDropdown: null,

      // Datos de pedidos (ejemplo)
      pedidos: [
        {
          id: "ORD-001",
          tipoOrden: "Online",
          cliente: {
            nombre: "Juan",
            apellido: "Pérez",
            email: "juan.perez@email.com",
          },
          productos: [
            { nombre: "Smartphone Galaxy S23", cantidad: 1, precio: 899.99 },
            { nombre: "Funda protectora", cantidad: 1, precio: 29.99 },
          ],
          estado: "pendiente",
          fecha: new Date("2024-06-01T10:30:00"),
          total: 929.98,
          moneda: "USD",
          metodoPago: "tarjeta",
        },
        {
          id: "ORD-002",
          tipoOrden: "Presencial",
          cliente: {
            nombre: "María",
            apellido: "González",
            email: "maria.gonzalez@email.com",
          },
          productos: [
            { nombre: "Laptop Dell XPS 13", cantidad: 1, precio: 1299.99 },
          ],
          estado: "procesando",
          fecha: new Date("2024-06-02T14:15:00"),
          total: 1299.99,
          moneda: "USD",
          metodoPago: "efectivo",
        },
        {
          id: "ORD-003",
          tipoOrden: "Online",
          cliente: {
            nombre: "Carlos",
            apellido: "Rodríguez",
            email: "carlos.rodriguez@email.com",
          },
          productos: [
            { nombre: "Tablet iPad Air", cantidad: 1, precio: 749.99 },
            { nombre: "Apple Pencil", cantidad: 1, precio: 129.99 },
            { nombre: "Smart Keyboard", cantidad: 1, precio: 179.99 },
          ],
          estado: "enviado",
          fecha: new Date("2024-06-03T09:45:00"),
          total: 1059.97,
          moneda: "USD",
          metodoPago: "transferencia",
        },
        {
          id: "ORD-004",
          tipoOrden: "Online",
          cliente: {
            nombre: "Ana",
            apellido: "Martínez",
            email: "ana.martinez@email.com",
          },
          productos: [
            {
              nombre: "Smartwatch Apple Watch Series 9",
              cantidad: 1,
              precio: 399.99,
            },
          ],
          estado: "entregado",
          fecha: new Date("2024-06-04T16:20:00"),
          total: 399.99,
          moneda: "USD",
          metodoPago: "tarjeta",
        },
        {
          id: "ORD-005",
          tipoOrden: "Presencial",
          cliente: {
            nombre: "Luis",
            apellido: "García",
            email: "luis.garcia@email.com",
          },
          productos: [
            {
              nombre: "Auriculares Sony WH-1000XM5",
              cantidad: 1,
              precio: 349.99,
            },
          ],
          estado: "cancelado",
          fecha: new Date("2024-06-05T11:10:00"),
          total: 349.99,
          moneda: "USD",
          metodoPago: "efectivo",
        },
      ],
    };
  },

  computed: {
    // Pedidos filtrados según los criterios de búsqueda y filtros
    filteredPedidos() {
      let filtered = this.pedidos;

      // Filtro por término de búsqueda
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase();
        filtered = filtered.filter(
          (pedido) =>
            pedido.id.toLowerCase().includes(term) ||
            `${pedido.cliente.nombre} ${pedido.cliente.apellido}`
              .toLowerCase()
              .includes(term) ||
            pedido.cliente.email.toLowerCase().includes(term) ||
            pedido.productos.some((p) => p.nombre.toLowerCase().includes(term))
        );
      }

      // Filtro por estado
      if (this.statusFilter) {
        filtered = filtered.filter(
          (pedido) => pedido.estado === this.statusFilter
        );
      }

      // Filtro por fecha
      if (this.dateFilter) {
        const now = new Date();
        const today = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );

        filtered = filtered.filter((pedido) => {
          const pedidoDate = new Date(pedido.fecha);

          switch (this.dateFilter) {
            case "today":
              return pedidoDate >= today;
            case "week":
              const weekAgo = new Date(
                today.getTime() - 7 * 24 * 60 * 60 * 1000
              );
              return pedidoDate >= weekAgo;
            case "month":
              const monthAgo = new Date(
                today.getFullYear(),
                today.getMonth() - 1,
                today.getDate()
              );
              return pedidoDate >= monthAgo;
            case "year":
              const yearAgo = new Date(
                today.getFullYear() - 1,
                today.getMonth(),
                today.getDate()
              );
              return pedidoDate >= yearAgo;
            default:
              return true;
          }
        });
      }

      return filtered;
    },

    // Pedidos paginados
    paginatedPedidos() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPedidos.slice(start, end);
    },

    // Cálculo de estadísticas
    totalPedidos() {
      return this.pedidos.length;
    },

    ventasTotales() {
      return this.pedidos.reduce((total, pedido) => {
        return pedido.estado !== "cancelado" ? total + pedido.total : total;
      }, 0);
    },

    pedidosPendientes() {
      return this.pedidos.filter((p) => p.estado === "pendiente").length;
    },

    pedidosCompletados() {
      return this.pedidos.filter((p) => p.estado === "entregado").length;
    },

    // Paginación
    totalPages() {
      return Math.ceil(this.filteredPedidos.length / this.itemsPerPage);
    },

    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },

    endIndex() {
      return this.startIndex + this.itemsPerPage;
    },

    visiblePages() {
      const pages = [];
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(this.totalPages, this.currentPage + 2);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    },
  },

  methods: {
    // Métodos de formato
    formatDate(date) {
      return new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(date));
    },

    formatTime(date) {
      return new Intl.DateTimeFormat("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(date));
    },

    // Métodos de estilos para estados
    getStatusClass(estado) {
      const classes = {
        pendiente:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        procesando:
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        enviado:
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
        entregado:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        cancelado: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      };
      return (
        classes[estado] ||
        "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      );
    },

    getStatusDotClass(estado) {
      const classes = {
        pendiente: "bg-yellow-500",
        procesando: "bg-blue-500",
        enviado: "bg-purple-500",
        entregado: "bg-green-500",
        cancelado: "bg-red-500",
      };
      return classes[estado] || "bg-gray-500";
    },

    // Métodos para métodos de pago
    getPaymentMethodClass(metodo) {
      const classes = {
        tarjeta: "bg-blue-100 dark:bg-blue-900",
        efectivo: "bg-green-100 dark:bg-green-900",
        transferencia: "bg-purple-100 dark:bg-purple-900",
      };
      return classes[metodo] || "bg-gray-100 dark:bg-gray-900";
    },

    getPaymentMethodIconClass(metodo) {
      const classes = {
        tarjeta: "text-blue-600 dark:text-blue-400",
        efectivo: "text-green-600 dark:text-green-400",
        transferencia: "text-purple-600 dark:text-purple-400",
      };
      return classes[metodo] || "text-gray-600 dark:text-gray-400";
    },

    // Métodos de selección
    toggleAllSelection(event) {
      if (event.target.checked) {
        this.selectedPedidos = this.paginatedPedidos.map((p) => p.id);
      } else {
        this.selectedPedidos = [];
      }
    },

    // Métodos de paginación
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(page) {
      this.currentPage = page;
    },

    // Métodos de control de dropdown
    toggleDropdown(pedidoId) {
      this.openDropdown = this.openDropdown === pedidoId ? null : pedidoId;
    },

    // Métodos de acciones de pedidos
    verDetallePedido(pedido) {
      console.log("Ver detalle del pedido:", pedido);
      // Implementar navegación o modal para ver detalles
      this.$emit("ver-detalle", pedido);
    },

    editarPedido(pedido) {
      console.log("Editar pedido:", pedido);
      // Implementar navegación o modal para editar
      this.$emit("editar-pedido", pedido);
    },

    verTracking(pedido) {
      console.log("Ver tracking del pedido:", pedido);
      // Implementar modal o página de tracking
      this.$emit("ver-tracking", pedido);
    },

    cambiarEstado(pedido) {
      console.log("Cambiar estado del pedido:", pedido);
      // Implementar modal para cambiar estado
      this.$emit("cambiar-estado", pedido);
      this.openDropdown = null;
    },

    imprimirFactura(pedido) {
      console.log("Imprimir factura del pedido:", pedido);
      // Implementar impresión de factura
      this.$emit("imprimir-factura", pedido);
      this.openDropdown = null;
    },

    enviarNotificacion(pedido) {
      console.log("Enviar notificación del pedido:", pedido);
      // Implementar envío de notificación
      this.$emit("enviar-notificacion", pedido);
      this.openDropdown = null;
    },

    duplicarPedido(pedido) {
      console.log("Duplicar pedido:", pedido);
      // Implementar duplicación de pedido
      this.$emit("duplicar-pedido", pedido);
      this.openDropdown = null;
    },

    cancelarPedido(pedido) {
      console.log("Cancelar pedido:", pedido);
      if (confirm("¿Estás seguro de que deseas cancelar este pedido?")) {
        // Implementar cancelación
        this.$emit("cancelar-pedido", pedido);
      }
      this.openDropdown = null;
    },
  },

  // Cerrar dropdown al hacer clic fuera
  mounted() {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".relative")) {
        this.openDropdown = null;
      }
    });
  },

  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>
