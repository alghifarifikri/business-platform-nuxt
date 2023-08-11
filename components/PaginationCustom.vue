<template>
  <div
    class="flex items-center justify-between pl-4 pr-4 md:pl-32 md:pr-32 mt-5 mb-5"
  >
    <div class="text-gray-600">
      Halaman {{ currentPage }} dari {{ totalPages }}
    </div>
    <div class="flex space-x-2">
      <button
        :disabled="currentPage === 1"
        class="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        @click="changePage(currentPage - 1)"
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
          />
        </svg>
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        :disabled="currentPage === page"
        :class="{
          'px-3 py-1 text-white rounded-md disabled:cursor-not-allowed': true,
          'bg-blue-700': currentPage === page,
          'bg-gray-300': currentPage !== page,
          'opacity-50 cursor-not-allowed': currentPage === page,
        }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <button
        :disabled="currentPage === totalPages"
        class="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        @click="changePage(currentPage + 1)"
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
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
      defaultValue: 1,
    },
    totalPages: {
      type: Number,
      required: true,
      defaultValue: 1,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('handleChangePage', page)
    },
  },
}
</script>

<style scoped></style>
