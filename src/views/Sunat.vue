<template>
  <div class="grid grid-cols-1 gap-6">
    <!-- KPIs Principales SUNAT -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <!-- Total Comprobantes -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Comprobantes
            </p>
            <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {{ formatNumber(totalComprobantes) }}
            </p>
            <div class="flex items-center mt-2">
              <svg
                class="w-4 h-4 text-blue-500"
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
              <span class="text-xs font-medium text-blue-600 ml-1"
                >{{ crecimientoComprobantes }}%</span
              >
              <span class="text-xs text-gray-500 ml-1">vs mes anterior</span>
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- IGV Recaudado -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              IGV Recaudado
            </p>
            <p class="text-2xl font-bold text-green-600 dark:text-green-400">
              S/ {{ formatNumber(igvRecaudado) }}
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
                  d="M7 17l7-7 7 7M5 12l7-7 7 7"
                ></path>
              </svg>
              <span class="text-xs font-medium text-green-600 ml-1"
                >{{ crecimientoIGV }}%</span
              >
              <span class="text-xs text-gray-500 ml-1">vs mes anterior</span>
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Comprobantes Electrónicos -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Electrónicos
            </p>
            <p class="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {{ porcentajeElectronicos }}%
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <span class="text-xs font-medium text-purple-600 ml-1"
                >Digital</span
              >
              <span class="text-xs text-gray-500 ml-1">del total</span>
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Estado SUNAT -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Estado Sistema
            </p>
            <p class="text-2xl font-bold text-green-600 dark:text-green-400">
              ACTIVO
            </p>
            <div class="flex items-center mt-2">
              <div
                class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
              ></div>
              <span class="text-xs text-gray-500 ml-2">Conexión estable</span>
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
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Controles y Filtros -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 mb-6"
    >
      <div
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
      >
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Gestión SUNAT
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Control de facturación electrónica y comprobantes fiscales
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <!-- Filtro de período -->
          <select
            v-model="dateFilter"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="day">Últimos 7 días</option>
            <option value="week">Últimas 4 semanas</option>
            <option value="month">Últimos 6 meses</option>
            <option value="year">Últimos 2 años</option>
          </select>

          <!-- Filtro de tipo comprobante -->
          <select
            v-model="tipoComprobante"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="todos">Todos los comprobantes</option>
            <option value="facturas">Facturas</option>
            <option value="boletas">Boletas</option>
            <option value="notas-credito">Notas de Crédito</option>
            <option value="notas-debito">Notas de Débito</option>
          </select>

          <!-- Botón generar reporte -->
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Reporte SUNAT
          </button>
        </div>
      </div>
    </div>

    <!-- Gráficas de Comprobantes -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- Gráfica de Tipos de Comprobante -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Distribución de Comprobantes
          </h3>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>Por Tipo</span>
          </div>
        </div>
        <div class="h-64 w-full">
          <canvas ref="tiposChart"></canvas>
        </div>
      </div>

      <!-- Gráfica de Tendencia Mensual -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Tendencia Mensual
          </h3>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Facturación</span>
          </div>
        </div>
        <div class="h-64 w-full">
          <canvas ref="tendenciaChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Lista de Comprobantes Recientes -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- Comprobantes Pendientes -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Comprobantes Pendientes
          </h3>
          <span
            class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium"
          >
            {{ comprobantesPendientes.length }} pendientes
          </span>
        </div>
        <div class="space-y-3 max-h-80 overflow-y-auto">
          <div
            v-for="comprobante in comprobantesPendientes"
            :key="comprobante.id"
            class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                :class="getComprobanteColor(comprobante.tipo)"
              >
                {{ getComprobanteIcon(comprobante.tipo) }}
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">
                  {{ comprobante.numero }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ comprobante.cliente }}
                </p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-900 dark:text-white">
                S/ {{ formatNumber(comprobante.monto) }}
              </p>
              <div class="flex items-center gap-2 mt-1">
                <span
                  class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs"
                >
                  {{ comprobante.estado }}
                </span>
                <button class="text-blue-600 hover:text-blue-700 text-xs">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Comprobantes Recientes -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Últimos Comprobantes
          </h3>
          <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Ver todos
          </button>
        </div>
        <div class="space-y-3 max-h-80 overflow-y-auto">
          <div
            v-for="comprobante in comprobantesRecientes"
            :key="comprobante.id"
            class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                :class="getComprobanteColor(comprobante.tipo)"
              >
                {{ getComprobanteIcon(comprobante.tipo) }}
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">
                  {{ comprobante.numero }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ comprobante.fecha }}
                </p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-900 dark:text-white">
                S/ {{ formatNumber(comprobante.monto) }}
              </p>
              <div class="flex items-center gap-2 mt-1">
                <span
                  class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs"
                >
                  {{ comprobante.estado }}
                </span>
                <button class="text-blue-600 hover:text-blue-700 text-xs">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabla de Resumen Tributario -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
    >
      <div class="flex justify-between items-center mb-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Resumen Tributario Mensual
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Detalle de impuestos y retenciones por período
          </p>
        </div>
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
          Exportar PDT
        </button>
      </div>

      <div
        class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Período
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Base Imponible
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                IGV
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Retenciones
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Total
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Estado
              </th>
            </tr>
          </thead>
          <tbody
            class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <tr
              v-for="resumen in resumenTributario"
              :key="resumen.periodo"
              class="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="font-medium text-gray-900 dark:text-white">{{
                  resumen.periodo
                }}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-gray-700 dark:text-gray-300"
                  >S/ {{ formatNumber(resumen.baseImponible) }}</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="font-semibold text-green-600 dark:text-green-400"
                  >S/ {{ formatNumber(resumen.igv) }}</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-gray-700 dark:text-gray-300"
                  >S/ {{ formatNumber(resumen.retenciones) }}</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="font-bold text-gray-900 dark:text-white"
                  >S/ {{ formatNumber(resumen.total) }}</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="getEstadoClass(resumen.estado)"
                  class="px-3 py-1 rounded-full text-xs font-medium"
                >
                  {{ resumen.estado }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Acciones Rápidas -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <button
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-3"
      >
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
        <span class="font-medium text-gray-900 dark:text-white"
          >Nueva Factura</span
        >
      </button>

      <button
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-3"
      >
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        </div>
        <span class="font-medium text-gray-900 dark:text-white"
          >Nueva Boleta</span
        >
      </button>

      <button
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-3"
      >
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
              d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m0 0l6 6m-6-6v12"
            ></path>
          </svg>
        </div>
        <span class="font-medium text-gray-900 dark:text-white"
          >Nota Crédito</span
        >
      </button>

      <button
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-3"
      >
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            ></path>
          </svg>
        </div>
        <span class="font-medium text-gray-900 dark:text-white">Reportes</span>
      </button>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, nextTick } from "vue";
import Chart from "chart.js/auto";

export default {
  name: "SunatDashboard",
  setup() {
    // Referencias reactivas para los datos
    const totalComprobantes = ref(12847);
    const crecimientoComprobantes = ref(12.5);
    const igvRecaudado = ref(2458693.5);
    const crecimientoIGV = ref(8.3);
    const porcentajeElectronicos = ref(94.8);

    // Filtros
    const dateFilter = ref("month");
    const tipoComprobante = ref("todos");

    // Referencias para los gráficos
    const tiposChart = ref(null);
    const tendenciaChart = ref(null);

    // Datos para comprobantes
    const comprobantesPendientes = ref([
      {
        id: 1,
        numero: "F001-00012458",
        cliente: "Inversiones SAC",
        monto: 15420.0,
        estado: "Pendiente",
        tipo: "factura",
      },
      {
        id: 2,
        numero: "B001-00089563",
        cliente: "María González",
        monto: 850.0,
        estado: "En proceso",
        tipo: "boleta",
      },
      {
        id: 3,
        numero: "NC01-00001245",
        cliente: "Comercial Lima",
        monto: 2340.0,
        estado: "Pendiente",
        tipo: "nota-credito",
      },
      {
        id: 4,
        numero: "F001-00012459",
        cliente: "Constructora Norte",
        monto: 28900.0,
        estado: "Error",
        tipo: "factura",
      },
      {
        id: 5,
        numero: "B001-00089564",
        cliente: "Carlos Pérez",
        monto: 450.0,
        estado: "Pendiente",
        tipo: "boleta",
      },
    ]);

    const comprobantesRecientes = ref([
      {
        id: 1,
        numero: "F001-00012457",
        fecha: "09/06/2025",
        monto: 18750.0,
        estado: "Aceptado",
        tipo: "factura",
      },
      {
        id: 2,
        numero: "B001-00089562",
        fecha: "09/06/2025",
        monto: 1250.0,
        estado: "Aceptado",
        tipo: "boleta",
      },
      {
        id: 3,
        numero: "F001-00012456",
        fecha: "08/06/2025",
        monto: 32400.0,
        estado: "Aceptado",
        tipo: "factura",
      },
      {
        id: 4,
        numero: "NC01-00001244",
        fecha: "08/06/2025",
        monto: 3200.0,
        estado: "Aceptado",
        tipo: "nota-credito",
      },
      {
        id: 5,
        numero: "B001-00089561",
        fecha: "08/06/2025",
        monto: 680.0,
        estado: "Aceptado",
        tipo: "boleta",
      },
    ]);

    const resumenTributario = ref([
      {
        periodo: "Mayo 2025",
        baseImponible: 845600.0,
        igv: 152208.0,
        retenciones: 8456.0,
        total: 989264.0,
        estado: "Declarado",
      },
      {
        periodo: "Abril 2025",
        baseImponible: 762300.0,
        igv: 137214.0,
        retenciones: 7623.0,
        total: 907137.0,
        estado: "Declarado",
      },
      {
        periodo: "Marzo 2025",
        baseImponible: 698450.0,
        igv: 125721.0,
        retenciones: 6985.0,
        total: 831156.0,
        estado: "Declarado",
      },
      {
        periodo: "Febrero 2025",
        baseImponible: 923100.0,
        igv: 166158.0,
        retenciones: 9231.0,
        total: 1098489.0,
        estado: "Pendiente",
      },
      {
        periodo: "Enero 2025",
        baseImponible: 1256700.0,
        igv: 226206.0,
        retenciones: 12567.0,
        total: 1495473.0,
        estado: "Rectificado",
      },
    ]);

    // Métodos utilitarios
    const formatNumber = (number) => {
      return new Intl.NumberFormat("es-PE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(number);
    };

    const getComprobanteIcon = (tipo) => {
      const icons = {
        factura: "F",
        boleta: "B",
        "nota-credito": "NC",
        "nota-debito": "ND",
      };
      return icons[tipo] || "C";
    };

    const getComprobanteColor = (tipo) => {
      const colors = {
        factura: "bg-blue-500",
        boleta: "bg-green-500",
        "nota-credito": "bg-purple-500",
        "nota-debito": "bg-orange-500",
      };
      return colors[tipo] || "bg-gray-500";
    };

    const getEstadoClass = (estado) => {
      const classes = {
        Declarado:
          "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        Pendiente:
          "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
        Rectificado:
          "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        Error: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      };
      return (
        classes[estado] ||
        "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      );
    };

    // Configuración de gráficos
    const initTiposChart = () => {
      if (tiposChart.value) {
        const ctx = tiposChart.value.getContext("2d");
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: [
              "Facturas",
              "Boletas",
              "Notas de Crédito",
              "Notas de Débito",
            ],
            datasets: [
              {
                data: [45, 35, 15, 5],
                backgroundColor: ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"],
                borderWidth: 0,
                hoverBorderWidth: 2,
                hoverBorderColor: "#ffffff",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  padding: 20,
                  font: {
                    size: 12,
                  },
                },
              },
            },
            cutout: "60%",
          },
        });
      }
    };

    const initTendenciaChart = () => {
      if (tendenciaChart.value) {
        const ctx = tendenciaChart.value.getContext("2d");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
            datasets: [
              {
                label: "Facturación (Miles S/)",
                data: [1495, 1098, 831, 907, 989, 1200],
                borderColor: "#10B981",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: "#10B981",
                pointBorderColor: "#ffffff",
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: "#6B7280",
                },
              },
              y: {
                grid: {
                  color: "rgba(107, 114, 128, 0.1)",
                },
                ticks: {
                  color: "#6B7280",
                  callback: function (value) {
                    return value + "K";
                  },
                },
              },
            },
            interaction: {
              intersect: false,
              mode: "index",
            },
          },
        });
      }
    };

    // Lifecycle hooks
    onMounted(() => {
      nextTick(() => {
        initTiposChart();
        initTendenciaChart();
      });
    });

    return {
      // Datos reactivos
      totalComprobantes,
      crecimientoComprobantes,
      igvRecaudado,
      crecimientoIGV,
      porcentajeElectronicos,
      dateFilter,
      tipoComprobante,
      comprobantesPendientes,
      comprobantesRecientes,
      resumenTributario,

      // Referencias de gráficos
      tiposChart,
      tendenciaChart,

      // Métodos
      formatNumber,
      getComprobanteIcon,
      getComprobanteColor,
      getEstadoClass,
    };
  },
};
</script>
