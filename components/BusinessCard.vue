<template>
  <div class="bg-white rounded-lg shadow-lg p-4">
    <div class="rounded-lg border-2">
      <img
        :src="data.logoUrl"
        alt="Business Logo"
        class="w-full h-60 mx-auto mb-4"
      />
    </div>
    <h3 class="text-lg font-semibold mt-3">{{ data.businessName }}</h3>
    <p class="text-sm mt-8 text-gray-400">{{ data.businessCategoryName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      defaultValue: {},
    },
  },
}
</script>

<style scoped></style>
