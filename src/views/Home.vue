<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    <TotalProducts />
    <NewOrders />
    <ActiveClients />
    <Earnings />
  </div>
</template>

<script>
import TotalProducts from "@/components/Home/totalProducts.vue";
import NewOrders from "@/components/Home/newOrders.vue";
import ActiveClients from "@/components/Home/activeClients.vue";
import Earnings from "@/components/Home/earnings.vue";

export default {
  components: {
    TotalProducts,
    NewOrders,
    ActiveClients,
    Earnings,
  },
};
</script>
