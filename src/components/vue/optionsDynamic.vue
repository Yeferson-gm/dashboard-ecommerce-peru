<!-- src/components/DynamicContent.vue -->
<template>
  <div class="dynamic-content">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { ref, markRaw, defineAsyncComponent, onMounted } from "vue";

const currentComponent = ref(null);

const changeComponent = async (componentName) => {
  try {
    let component;
    switch (componentName) {
      case "Home":
        component = await import("../../views/Home.vue");
        break;
      case "Statics":
        component = await import("../../views/Statics.vue");
        break;
      case "Orders":
        component = await import("../../views/Orders.vue");
        break;
      case "Clients":
        component = await import("../../views/Clients.vue");
        break;
      case "Config":
        component = await import("../../views/Config.vue");
        break;
      case "Sunat":
        component = await import("../../views/Sunat.vue");
        break;
      case "allProducts":
        component = await import("../../views/AllProducts.vue");
        break;
      case "NewProduct":
        component = await import("../../views/NewProduct.vue");
        break;
      default:
        console.error("Componente no encontrado:", componentName);
        return;
    }
    currentComponent.value = markRaw(component.default);
  } catch (error) {
    console.error("Error cargando el componente:", error);
  }
};

onMounted(() => {
  changeComponent("Home");
});

if (typeof window !== "undefined") {
  window.changeDynamicComponent = changeComponent;
}

defineExpose({
  changeComponent,
});
</script>
