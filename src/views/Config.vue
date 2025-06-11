<template>
  <div class="grid grid-cols-1 gap-6 mt-8">
    <!-- Header de Configuración -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            Configuración
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Personaliza tu perfil y configuraciones del sistema
          </p>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Navegación de Pestañas -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div class="p-6">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
          >
            <div class="flex items-center gap-2">
              <component :is="tab.icon" class="w-4 h-4" />
              {{ tab.label }}
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Contenido de Pestañas -->
    <div class="space-y-6">
      <!-- Perfil Personal -->
      <div v-if="activeTab === 'profile'" class="space-y-6">
        <!-- Información Personal -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Información Personal
            </h2>
            <button
              @click="editandoPerfil = !editandoPerfil"
              class="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors"
            >
              {{ editandoPerfil ? "Cancelar" : "Editar" }}
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Avatar -->
            <div class="lg:col-span-1">
              <div class="text-center">
                <div class="relative inline-block">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold"
                  >
                    {{ perfilAdmin.nombre.charAt(0)
                    }}{{ perfilAdmin.apellido.charAt(0) }}
                  </div>
                  <button
                    v-if="editandoPerfil"
                    class="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Administrador Principal
                </p>
              </div>
            </div>

            <!-- Formulario -->
            <div class="lg:col-span-2">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    v-model="perfilAdmin.nombre"
                    :disabled="!editandoPerfil"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
                  />
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Apellido
                  </label>
                  <input
                    v-model="perfilAdmin.apellido"
                    :disabled="!editandoPerfil"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
                  />
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    v-model="perfilAdmin.email"
                    :disabled="!editandoPerfil"
                    type="email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
                  />
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    v-model="perfilAdmin.telefono"
                    :disabled="!editandoPerfil"
                    type="tel"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
                  />
                </div>

                <div class="md:col-span-2">
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Cargo
                  </label>
                  <input
                    v-model="perfilAdmin.cargo"
                    :disabled="!editandoPerfil"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
                  />
                </div>
              </div>

              <div v-if="editandoPerfil" class="flex gap-3 mt-6">
                <button
                  @click="guardarPerfil"
                  class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Guardar Cambios
                </button>
                <button
                  @click="editandoPerfil = false"
                  class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Estadísticas Rápidas -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Días Activo
                </p>
                <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  247
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Acciones Hoy
                </p>
                <p
                  class="text-2xl font-bold text-green-600 dark:text-green-400"
                >
                  89
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Último Acceso
                </p>
                <p
                  class="text-2xl font-bold text-purple-600 dark:text-purple-400"
                >
                  Ahora
                </p>
              </div>
              <div
                class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
              >
                <div
                  class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seguridad -->
      <div v-if="activeTab === 'security'" class="space-y-6">
        <!-- Cambiar Contraseña -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Cambiar Contraseña
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Contraseña Actual
                </label>
                <input
                  v-model="seguridad.contraseñaActual"
                  type="password"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nueva Contraseña
                </label>
                <input
                  v-model="seguridad.nuevaContraseña"
                  type="password"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Confirmar Nueva Contraseña
                </label>
                <input
                  v-model="seguridad.confirmarContraseña"
                  type="password"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <button
                @click="cambiarContraseña;"
                class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Actualizar Contraseña
              </button>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3
                class="text-sm font-medium text-gray-900 dark:text-white mb-3"
              >
                Requisitos de Contraseña
              </h3>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Mínimo 8 caracteres
                </li>
                <li class="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Al menos una mayúscula
                </li>
                <li class="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Al menos un número
                </li>
                <li class="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Al menos un símbolo
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Autenticación de Dos Factores -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Autenticación de Dos Factores
              </h2>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Agrega una capa extra de seguridad a tu cuenta
              </p>
            </div>
            <div class="flex items-center">
              <input
                v-model="seguridad.dosFactores"
                type="checkbox"
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {{ seguridad.dosFactores ? "Activado" : "Desactivado" }}
              </label>
            </div>
          </div>

          <div
            v-if="seguridad.dosFactores"
            class="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-4"
          >
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-green-600 dark:text-green-400"
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
              <span class="text-sm text-green-700 dark:text-green-300">
                La autenticación de dos factores está activada
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Notificaciones -->
      <div v-if="activeTab === 'notifications'" class="space-y-6">
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Preferencias de Notificaciones
          </h2>

          <div class="space-y-6">
            <div
              v-for="categoria in notificaciones"
              :key="categoria.id"
              class="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
            >
              <h3
                class="text-lg font-medium text-gray-900 dark:text-white mb-4"
              >
                {{ categoria.titulo }}
              </h3>
              <div class="space-y-3">
                <div
                  v-for="opcion in categoria.opciones"
                  :key="opcion.id"
                  class="flex items-center justify-between"
                >
                  <div>
                    <p
                      class="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {{ opcion.nombre }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {{ opcion.descripcion }}
                    </p>
                  </div>
                  <div class="flex items-center gap-4">
                    <label class="flex items-center">
                      <input
                        v-model="opcion.email"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span
                        class="ml-2 text-sm text-gray-600 dark:text-gray-400"
                        >Email</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="opcion.push"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span
                        class="ml-2 text-sm text-gray-600 dark:text-gray-400"
                        >Push</span
                      >
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              @click="guardarNotificaciones"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Guardar Preferencias
            </button>
          </div>
        </div>
      </div>

      <!-- Sistema -->
      <div v-if="activeTab === 'system'" class="space-y-6">
        <!-- Configuración de la Tienda -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Configuración de la Tienda
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nombre de la Tienda
              </label>
              <input
                v-model="sistema.nombreTienda"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Moneda
              </label>
              <select
                v-model="sistema.moneda"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="PEN">Soles Peruanos (S/)</option>
                <option value="USD">Dólares Americanos ($)</option>
                <option value="EUR">Euros (€)</option>
              </select>
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Zona Horaria
              </label>
              <select
                v-model="sistema.zonaHoraria"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="America/Lima">Lima, Perú</option>
                <option value="America/New_York">Nueva York</option>
                <option value="Europe/Madrid">Madrid</option>
              </select>
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Idioma
              </label>
              <select
                v-model="sistema.idioma"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Configuración de Inventario -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Configuración de Inventario
          </h2>

          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Alertas de Stock Bajo
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Recibir notificaciones cuando el stock sea bajo
                </p>
              </div>
              <input
                v-model="sistema.alertasStock"
                type="checkbox"
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Actualización Automática de Precios
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Permitir actualizaciones automáticas basadas en el mercado
                </p>
              </div>
              <input
                v-model="sistema.actualizacionPrecios"
                type="checkbox"
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Límite de Stock Bajo
              </label>
              <input
                v-model="sistema.limiteStockBajo"
                type="number"
                min="1"
                max="100"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        <!-- Tema y Apariencia -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Tema y Apariencia
          </h2>

          <div class="space-y-4">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
              >
                Tema de Color
              </label>
              <div class="flex gap-3">
                <button
                  v-for="tema in temas"
                  :key="tema.id"
                  @click="sistema.tema = tema.id"
                  :class="[
                    'flex items-center gap-3 p-3 rounded-lg border-2 transition-colors',
                    sistema.tema === tema.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300',
                  ]"
                >
                  <div :class="['w-4 h-4 rounded-full', tema.color]"></div>
                  <span
                    class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {{ tema.nombre }}
                  </span>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Modo Oscuro
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Cambiar entre modo claro y oscuro
                </p>
              </div>
              <input
                v-model="sistema.modoOscuro"
                type="checkbox"
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <!-- Botón Guardar -->
        <div class="flex justify-end">
          <button
            @click="guardarConfiguracion"
            class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
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
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Guardar Configuración
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Confirmación -->
    <div
      v-if="mostrarModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full mx-4"
      >
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center"
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
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ modalTitulo }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ modalMensaje }}
            </p>
          </div>
        </div>
        <div class="flex justify-end gap-3">
          <button
            @click="cerrarModal"
            class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfiguracionAdmin",
  data() {
    return {
      activeTab: "profile",
      editandoPerfil: false,
      mostrarModal: false,
      modalTitulo: "",
      modalMensaje: "",

      tabs: [
        {
          id: "profile",
          label: "Perfil",
          icon: "UserIcon",
        },
        {
          id: "security",
          label: "Seguridad",
          icon: "ShieldIcon",
        },
        {
          id: "notifications",
          label: "Notificaciones",
          icon: "BellIcon",
        },
        {
          id: "system",
          label: "Sistema",
          icon: "CogIcon",
        },
      ],

      perfilAdmin: {
        nombre: "Carlos",
        apellido: "Rodríguez",
        email: "carlos.rodriguez@mitienda.com",
        telefono: "+51 987 654 321",
        cargo: "Administrador Principal",
      },

      seguridad: {
        contraseñaActual: "",
        nuevaContraseña: "",
        confirmarContraseña: "",
        dosFactores: true,
      },

      notificaciones: [
        {
          id: "ventas",
          titulo: "Ventas y Pedidos",
          opciones: [
            {
              id: "nueva-venta",
              nombre: "Nueva Venta",
              descripcion: "Cuando se realiza una nueva venta",
              email: true,
              push: true,
            },
            {
              id: "pedido-cancelado",
              nombre: "Pedido Cancelado",
              descripcion: "Cuando un cliente cancela un pedido",
              email: true,
              push: false,
            },
            {
              id: "reembolso",
              nombre: "Solicitud de Reembolso",
              descripcion: "Cuando se solicita un reembolso",
              email: true,
              push: true,
            },
          ],
        },
        {
          id: "inventario",
          titulo: "Inventario",
          opciones: [
            {
              id: "stock-bajo",
              nombre: "Stock Bajo",
              descripcion: "Cuando un producto tiene stock bajo",
              email: true,
              push: true,
            },
            {
              id: "producto-agotado",
              nombre: "Producto Agotado",
              descripcion: "Cuando un producto se agota",
              email: true,
              push: true,
            },
            {
              id: "nuevo-producto",
              nombre: "Nuevo Producto",
              descripcion: "Cuando se agrega un nuevo producto",
              email: false,
              push: true,
            },
          ],
        },
        {
          id: "sistema",
          titulo: "Sistema",
          opciones: [
            {
              id: "backup",
              nombre: "Backup Completado",
              descripcion: "Cuando se completa un backup del sistema",
              email: true,
              push: false,
            },
            {
              id: "actualizacion",
              nombre: "Actualizaciones",
              descripcion: "Cuando hay actualizaciones disponibles",
              email: true,
              push: false,
            },
            {
              id: "error-sistema",
              nombre: "Errores del Sistema",
              descripcion: "Cuando ocurren errores críticos",
              email: true,
              push: true,
            },
          ],
        },
      ],

      sistema: {
        nombreTienda: "Mi Tienda Online",
        moneda: "PEN",
        zonaHoraria: "America/Lima",
        idioma: "es",
        alertasStock: true,
        actualizacionPrecios: false,
        limiteStockBajo: 10,
        tema: "azul",
        modoOscuro: false,
      },

      temas: [
        { id: "azul", nombre: "Azul", color: "bg-blue-500" },
        { id: "verde", nombre: "Verde", color: "bg-green-500" },
        { id: "purpura", nombre: "Púrpura", color: "bg-purple-500" },
        { id: "rojo", nombre: "Rojo", color: "bg-red-500" },
      ],
    };
  },

  methods: {
    guardarPerfil() {
      // Validar campos
      if (
        !this.perfilAdmin.nombre ||
        !this.perfilAdmin.apellido ||
        !this.perfilAdmin.email
      ) {
        this.mostrarNotificacion(
          "Error",
          "Por favor completa todos los campos obligatorios"
        );
        return;
      }

      // Simular guardado
      this.editandoPerfil = false;
      this.mostrarNotificacion(
        "Perfil Actualizado",
        "Tu información personal ha sido actualizada correctamente"
      );
      this.$emit("perfil-actualizado", this.perfilAdmin);
    },

    cambiarContraseña() {
      // Validaciones
      if (
        !this.seguridad.contraseñaActual ||
        !this.seguridad.nuevaContraseña ||
        !this.seguridad.confirmarContraseña
      ) {
        this.mostrarNotificacion(
          "Error",
          "Por favor completa todos los campos de contraseña"
        );
        return;
      }

      if (
        this.seguridad.nuevaContraseña !== this.seguridad.confirmarContraseña
      ) {
        this.mostrarNotificacion("Error", "Las contraseñas no coinciden");
        return;
      }

      if (this.seguridad.nuevaContraseña.length < 8) {
        this.mostrarNotificacion(
          "Error",
          "La contraseña debe tener al menos 8 caracteres"
        );
        return;
      }

      // Simular cambio de contraseña
      this.seguridad.contraseñaActual = "";
      this.seguridad.nuevaContraseña = "";
      this.seguridad.confirmarContraseña = "";
      this.mostrarNotificacion(
        "Contraseña Actualizada",
        "Tu contraseña ha sido cambiada exitosamente"
      );
    },

    guardarNotificaciones() {
      this.mostrarNotificacion(
        "Preferencias Guardadas",
        "Tus preferencias de notificaciones han sido actualizadas"
      );
      this.$emit("notificaciones-actualizadas", this.notificaciones);
    },

    guardarConfiguracion() {
      this.mostrarNotificacion(
        "Configuración Guardada",
        "La configuración del sistema ha sido actualizada"
      );
      this.$emit("configuracion-actualizada", this.sistema);
    },

    mostrarNotificacion(titulo, mensaje) {
      this.modalTitulo = titulo;
      this.modalMensaje = mensaje;
      this.mostrarModal = true;
    },

    cerrarModal() {
      this.mostrarModal = false;
    },
  },

  components: {
    UserIcon: {
      template: `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      `,
    },
    ShieldIcon: {
      template: `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      `,
    },
    BellIcon: {
      template: `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4.868 4.868a2.5 2.5 0 113.536 3.536L15 15h-5v5l-3.536-3.536a2.5 2.5 0 01-3.536-3.536L4.868 4.868z"></path>
        </svg>
      `,
    },
    CogIcon: {
      template: `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      `,
    },
  },
};
</script>
