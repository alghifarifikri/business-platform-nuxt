<template>
  <div
    v-show="show"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="bg-white rounded-lg p-6 shadow-md w-full max-w-md relative">
      <h2 class="text-lg font-semibold mb-2">Filter</h2>
      <button class="absolute top-2 right-2 text-gray-600 m-4" @click="close">
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <p class="text-gray-400 mb-4 text-sm">Kategori</p>
      <div class="flex space-x-4">
        <div class="w-full">
          <ul>
            <li
              v-for="(category, index) in categoriesToShow"
              :key="index"
              class="flex items-center mb-1"
            >
              <div class="w-full">
                <label :for="'category' + index">{{
                  category.paramName
                }}</label>
              </div>
              <div class="ml-2">
                <input
                  :id="'category' + index"
                  v-model="selectedCategory"
                  type="checkbox"
                  :value="category.paramCode"
                  class="mr-2"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center">
        <button class="text-blue-500 text-sm mt-2" @click="expandCategories">
          {{ expanded ? 'Sembunyikan' : 'Lihat Semua' }}
          <svg
            class="w-4 h-4 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
      <button
        class="mt-4 px-4 py-2 bg-blue-500 w-full text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        :disabled="isLoading"
        @click="applyFilters"
      >
        Terapkan
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      defaultValue: false,
    },
    isLoading: {
      type: Boolean,
      required: true,
      defaultValue: false,
    },
    listCategory: {
      type: Array,
      required: true,
      defaultValue: [],
    },
  },
  data() {
    return {
      selectedCategory: [],
      categories: [],
      categoriesToShow: [],
      expanded: false,
    }
  },
  watch: {
    listCategory: {
      immediate: true,
      deep: true,
      handler(value) {
        this.categories = value
        this.categoriesToShow = value.slice(0, 4)
      },
    },
  },
  methods: {
    close() {
      this.$emit('handleModal', false)
    },
    applyFilters() {
      this.$emit('handleFilter', this.selectedCategory)
    },
    expandCategories() {
      this.expanded = !this.expanded
      this.categoriesToShow = this.expanded
        ? this.categories
        : this.categories.slice(0, 4)
    },
  },
}
</script>

<style scoped></style>
