<template>
  <div class="flex items-center justify-between pl-4 pr-4 md:pl-32 md:pr-32">
    <div class="relative flex items-center w-full">
      <input
        v-model="localBusinessName"
        type="text"
        class="py-2 pr-10 pl-3 bg-gray-200 border rounded-l focus:ring focus:border-blue-300 focus:ring-blue-200 w-full"
        placeholder="Cari bisnis..."
      />
    </div>
    <button
      class="ml-3 px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-r hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      @click="handleModal(true)"
    >
      Kategori
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      defaultValue: '',
    },
  },
  data() {
    return {
      localBusinessName: this.value,
    }
  },
  watch: {
    localBusinessName(newValue) {
      this.$emit('handleSearch', newValue) // Mengemis perubahan kembali ke komponen induk
    },
  },
  methods: {
    handleModal(param) {
      this.$emit('handleModal', param)
    },
  },
}
</script>

<style scoped>
/* Gaya sesuai kebutuhan */
</style>
