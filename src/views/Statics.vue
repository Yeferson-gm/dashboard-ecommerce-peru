<template>
  <div class="grid grid-cols-1 gap-6">
    <!-- KPIs Principales -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <!-- Ventas Totales -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Ventas Totales
            </p>
            <p class="text-2xl font-bold text-green-600 dark:text-green-400">
              ${{ formatNumber(ventasTotales) }}
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
                >{{ crecimientoVentas }}%</span
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

      <!-- Total Pedidos -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Pedidos
            </p>
            <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {{ formatNumber(totalPedidos) }}
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
                >{{ crecimientoPedidos }}%</span
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Conversión -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Tasa de Conversión
            </p>
            <p class="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {{ tasaConversion }}%
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
                >{{ crecimientoConversion }}%</span
              >
              <span class="text-xs text-gray-500 ml-1">vs mes anterior</span>
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
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Ticket Promedio -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Ticket Promedio
            </p>
            <p class="text-2xl font-bold text-orange-600 dark:text-orange-400">
              ${{ formatNumber(ticketPromedio) }}
            </p>
            <div class="flex items-center mt-2">
              <svg
                class="w-4 h-4 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 13l-7 7-7-7M17 7l-7 7-7-7"
                ></path>
              </svg>
              <span class="text-xs font-medium text-red-600 ml-1"
                >{{ crecimientoTicket }}%</span
              >
              <span class="text-xs text-gray-500 ml-1">vs mes anterior</span>
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
                d="M9 8h6m-5 0a3 3 0 110 6H9l3 3-3-3h1m1-4h6m-5 0a3 3 0 110 6H9l3 3-3-3h1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Filtros y Controles -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 mb-6"
    >
      <div
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
      >
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Panel de Estadísticas
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Análisis detallado del rendimiento de tu e-commerce
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

          <!-- Filtro de métrica principal -->
          <select
            v-model="selectedMetric"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="ventas">Ventas</option>
            <option value="pedidos">Pedidos</option>
            <option value="conversion">Conversión</option>
            <option value="trafico">Tráfico</option>
          </select>

          <!-- Botón exportar -->
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Exportar Reporte
          </button>
        </div>
      </div>
    </div>

    <!-- Gráficas Principales -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- Gráfica de Ventas -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Tendencia de Ventas
          </h3>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>Ventas Mensuales</span>
          </div>
        </div>
        <div class="h-64 w-full">
          <canvas ref="ventasChart"></canvas>
        </div>
      </div>

      <!-- Gráfica de Conversión -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Embudo de Conversión
          </h3>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Tasa de Conversión</span>
          </div>
        </div>
        <div class="h-64 w-full">
          <canvas ref="conversionChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Productos y Categorías -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <!-- Top Productos -->
      <div
        class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Productos Más Vendidos
        </h3>
        <div class="space-y-4">
          <div
            v-for="(producto, index) in topProductos"
            :key="index"
            class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              >
                {{ index + 1 }}
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">
                  {{ producto.nombre }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ producto.ventas }} unidades vendidas
                </p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-900 dark:text-white">
                ${{ formatNumber(producto.ingresos) }}
              </p>
              <div
                class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1"
              >
                <div
                  :style="{ width: (producto.ventas / maxVentas) * 100 + '%' }"
                  class="bg-blue-600 h-2 rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Distribución por Categorías -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Ventas por Categoría
        </h3>
        <div class="h-48 w-full mb-4">
          <canvas ref="categoriesChart"></canvas>
        </div>
        <div class="space-y-2">
          <div
            v-for="categoria in categorias"
            :key="categoria.name"
            class="flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <div
                :style="{ backgroundColor: categoria.color }"
                class="w-3 h-3 rounded-full"
              ></div>
              <span class="text-sm text-gray-700 dark:text-gray-300">{{
                categoria.name
              }}</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white"
              >{{ categoria.value }}%</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Análisis de Tráfico -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 mb-6"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Análisis de Tráfico Web
        </h3>
        <div class="flex items-center gap-4 text-sm">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span class="text-gray-600 dark:text-gray-400">Visitas</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            <span class="text-gray-600 dark:text-gray-400">Usuarios</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span class="text-gray-600 dark:text-gray-400">Sesiones</span>
          </div>
        </div>
      </div>
      <div class="h-64 w-full">
        <canvas ref="trafficChart"></canvas>
      </div>
    </div>

    <!-- Tabla de Rendimiento por Región -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
    >
      <div class="flex justify-between items-center mb-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Rendimiento por Región
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Análisis geográfico de ventas y crecimiento
          </p>
        </div>
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
                Región
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Ventas
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Pedidos
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Crecimiento
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"
              >
                Participación
              </th>
            </tr>
          </thead>
          <tbody
            class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <tr
              v-for="region in regiones"
              :key="region.region"
              class="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-3">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  >
                    {{ region.region.charAt(0) }}
                  </div>
                  <span class="font-medium text-gray-900 dark:text-white">{{
                    region.region
                  }}</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="font-semibold text-gray-900 dark:text-white"
                  >${{ formatNumber(region.ventas) }}</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-gray-700 dark:text-gray-300">{{
                  region.pedidos
                }}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-1">
                  <svg
                    :class="
                      region.crecimiento >= 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    "
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="
                        region.crecimiento >= 0
                          ? 'M7 17l7-7 7 7M5 12l7-7 7 7'
                          : 'M17 13l-7 7-7-7M17 7l-7 7-7-7'
                      "
                    ></path>
                  </svg>
                  <span
                    :class="
                      region.crecimiento >= 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    "
                    class="font-medium"
                  >
                    {{ region.crecimiento >= 0 ? "+" : ""
                    }}{{ region.crecimiento }}%
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-2">
                  <div
                    class="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2"
                  >
                    <div
                      :style="{
                        width: (region.ventas / maxVentasRegion) * 100 + '%',
                      }"
                      class="bg-blue-600 h-2 rounded-full"
                    ></div>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    {{
                      Math.round((region.ventas / totalVentasRegiones) * 100)
                    }}%
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import Chart from "chart.js/auto";

export default {
  name: "DashboardStats",
  setup() {
    // Referencias para los canvas de las gráficas
    const ventasChart = ref(null);
    const conversionChart = ref(null);
    const categoriesChart = ref(null);
    const trafficChart = ref(null);

    // Variables reactivas para filtros
    const dateFilter = ref("month");
    const selectedMetric = ref("ventas");

    // Datos principales (KPIs)
    const ventasTotales = ref(125000);
    const totalPedidos = ref(342);
    const tasaConversion = ref(3.2);
    const ticketPromedio = ref(365);

    // Crecimiento comparativo
    const crecimientoVentas = ref(12.5);
    const crecimientoPedidos = ref(8.3);
    const crecimientoConversion = ref(0.8);
    const crecimientoTicket = ref(-2.1);

    // Datos para productos más vendidos
    const topProductos = ref([
      { nombre: "Smartphone Pro X", ventas: 89, ingresos: 45000 },
      { nombre: "Auriculares Bluetooth", ventas: 156, ingresos: 23400 },
      { nombre: "Tablet Ultra", ventas: 67, ingresos: 33500 },
      { nombre: "Smartwatch Series 5", ventas: 134, ingresos: 26800 },
      { nombre: "Laptop Gaming", ventas: 23, ingresos: 34500 },
    ]);

    // Datos para categorías
    const categorias = ref([
      { name: "Electrónicos", value: 45, color: "#3B82F6" },
      { name: "Ropa", value: 28, color: "#10B981" },
      { name: "Hogar", value: 15, color: "#F59E0B" },
      { name: "Deportes", value: 12, color: "#EF4444" },
    ]);

    // Datos para regiones
    const regiones = ref([
      { region: "Norte", ventas: 45000, pedidos: 123, crecimiento: 15.2 },
      { region: "Centro", ventas: 38000, pedidos: 98, crecimiento: 8.7 },
      { region: "Sur", ventas: 28000, pedidos: 87, crecimiento: -3.1 },
      { region: "Este", ventas: 14000, pedidos: 34, crecimiento: 22.5 },
    ]);

    // Datos para gráficas
    const datosVentas = ref([
      { mes: "Ene", ventas: 65000 },
      { mes: "Feb", ventas: 78000 },
      { mes: "Mar", ventas: 85000 },
      { mes: "Abr", ventas: 92000 },
      { mes: "May", ventas: 88000 },
      { mes: "Jun", ventas: 125000 },
    ]);

    const datosTrafico = ref([
      { fecha: "01", visitas: 1200, usuarios: 890, sesiones: 1050 },
      { fecha: "02", visitas: 1450, usuarios: 1020, sesiones: 1280 },
      { fecha: "03", visitas: 1380, usuarios: 980, sesiones: 1190 },
      { fecha: "04", visitas: 1620, usuarios: 1150, sesiones: 1420 },
      { fecha: "05", visitas: 1580, usuarios: 1100, sesiones: 1380 },
      { fecha: "06", visitas: 1750, usuarios: 1250, sesiones: 1560 },
      { fecha: "07", visitas: 1650, usuarios: 1180, sesiones: 1480 },
    ]);

    // Computadas
    const maxVentas = computed(() => {
      return Math.max(...topProductos.value.map((p) => p.ventas));
    });

    const maxVentasRegion = computed(() => {
      return Math.max(...regiones.value.map((r) => r.ventas));
    });

    const totalVentasRegiones = computed(() => {
      return regiones.value.reduce((total, region) => total + region.ventas, 0);
    });

    // Función para formatear números
    const formatNumber = (num) => {
      return new Intl.NumberFormat("es-ES").format(num);
    };

    // Función para crear gráfica de ventas
    const createVentasChart = () => {
      if (!ventasChart.value) return;

      const ctx = ventasChart.value.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: datosVentas.value.map((d) => d.mes),
          datasets: [
            {
              label: "Ventas",
              data: datosVentas.value.map((d) => d.ventas),
              borderColor: "#3B82F6",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: "#3B82F6",
              pointBorderColor: "#ffffff",
              pointBorderWidth: 2,
              pointRadius: 6,
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
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
              ticks: {
                callback: function (value) {
                  return "$" + value / 1000 + "K";
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
      });
    };

    // Función para crear gráfica de conversión
    const createConversionChart = () => {
      if (!conversionChart.value) return;

      const ctx = conversionChart.value.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Convertidos", "No Convertidos"],
          datasets: [
            {
              data: [tasaConversion.value, 100 - tasaConversion.value],
              backgroundColor: ["#10B981", "#E5E7EB"],
              borderWidth: 0,
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
                padding: 20,
                usePointStyle: true,
              },
            },
          },
          cutout: "70%",
        },
      });
    };

    // Función para crear gráfica de categorías
    const createCategoriesChart = () => {
      if (!categoriesChart.value) return;

      const ctx = categoriesChart.value.getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: categorias.value.map((c) => c.name),
          datasets: [
            {
              data: categorias.value.map((c) => c.value),
              backgroundColor: categorias.value.map((c) => c.color),
              borderWidth: 2,
              borderColor: "#ffffff",
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
        },
      });
    };

    // Función para crear gráfica de tráfico
    const createTrafficChart = () => {
      if (!trafficChart.value) return;

      const ctx = trafficChart.value.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: datosTrafico.value.map((d) => d.fecha),
          datasets: [
            {
              label: "Visitas",
              data: datosTrafico.value.map((d) => d.visitas),
              borderColor: "#3B82F6",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
            },
            {
              label: "Usuarios",
              data: datosTrafico.value.map((d) => d.usuarios),
              borderColor: "#10B981",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
            },
            {
              label: "Sesiones",
              data: datosTrafico.value.map((d) => d.sesiones),
              borderColor: "#8B5CF6",
              backgroundColor: "rgba(139, 92, 246, 0.1)",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
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
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
      });
    };

    // Función para actualizar datos basado en filtros
    const updateData = () => {
      // Aquí puedes implementar la lógica para actualizar los datos
      // basado en los filtros seleccionados
      console.log(
        "Actualizando datos para:",
        dateFilter.value,
        selectedMetric.value
      );
    };

    // Watchers para los filtros
    watch([dateFilter, selectedMetric], () => {
      updateData();
    });

    // Montaje del componente
    onMounted(() => {
      setTimeout(() => {
        createVentasChart();
        createConversionChart();
        createCategoriesChart();
        createTrafficChart();
      }, 100);
    });

    return {
      // Referencias
      ventasChart,
      conversionChart,
      categoriesChart,
      trafficChart,

      // Filtros
      dateFilter,
      selectedMetric,

      // KPIs
      ventasTotales,
      totalPedidos,
      tasaConversion,
      ticketPromedio,
      crecimientoVentas,
      crecimientoPedidos,
      crecimientoConversion,
      crecimientoTicket,

      // Datos
      topProductos,
      categorias,
      regiones,

      // Computadas
      maxVentas,
      maxVentasRegion,
      totalVentasRegiones,

      // Funciones
      formatNumber,
      updateData,
    };
  },
};
</script>
