<template class="p-3">
  <div>
    <LoadingIndicator v-if="isLoading" />
    <div v-else>
      <HeadCustom />
      <SearchBar
        v-model="businessName"
        @handleSearch="handleSearch"
        @handleModal="handleModal"
      />
      <div v-if="listBusiness.length > 0">
        <div class="flex flex-wrap justify-center">
          <BusinessCard
            v-for="business in listBusiness"
            :key="business.id"
            :data="business"
            class="w-full md:w-1/4 m-4 hover:bg-gray-100"
          />
        </div>
        <PaginationCustom
          :current-page="paging.page"
          :total-pages="paging.total"
          @handleChangePage="handleChangePage"
        />
      </div>
      <div v-else class="mt-5">
        <NoData />
      </div>
    </div>
    <FilterModal
      :show="isShow"
      :is-loading="isLoading"
      :list-category="data.data"
      @handleModal="handleModal"
      @handleFilter="handleFilter"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import { postBusinesses } from '../utils/Api'
import BusinessCard from '../components/BusinessCard.vue'
import HeadCustom from '../components/HeadCustom.vue'
import SearchBar from '../components/SearchBar.vue'
import LoadingIndicator from '../components/LoadingIndicator.vue'
import PaginationCustom from '../components/PaginationCustom.vue'
import FilterModal from '../components/FilterModal.vue'
import NoData from '../components/NoData.vue'

export default {
  name: 'IndexPage',
  components: {
    BusinessCard,
    HeadCustom,
    SearchBar,
    LoadingIndicator,
    PaginationCustom,
    FilterModal,
    NoData,
  },
  async asyncData() {
    try {
      const headers = {
        'Accept-Language': 'id',
        'Content-Type': 'application/json',
      }
      const response = await fetch(
        'http://sandbox.bizharedev.id/media/param/business/category',
        headers
      )
      const data = await response.json()
      return { data }
    } catch (error) {
      console.error('Server-Side Fetching Error:', error)
      return { data: null }
    }
  },
  data() {
    return {
      businessName: '',
      isLoading: false,
      isShow: false,
      listSelectedCategory: [],
      listBusiness: [],
      paging: {
        size: 12,
        page: 1,
        total: 0,
      },
    }
  },
  watch: {
    businessName: {
      immediate: true,
      deep: true,
      handler() {
        this.debouncedFetchData()
      },
    },
    paging: {
      immediate: true,
      deep: true,
      handler() {
        this.isLoading = true
        this.debouncedFetchData()
      },
    },
    listSelectedCategory: {
      immediate: true,
      deep: true,
      handler() {
        this.isLoading = true
        this.isShow = false
        this.debouncedFetchData()
      },
    },
  },
  mounted() {
    this.isLoading = true
    this.postData()
  },
  methods: {
    handleSearch(param) {
      this.businessName = param
    },
    handleModal(param) {
      this.isShow = param
    },
    handleFilter(param) {
      this.listSelectedCategory = param
    },
    handleChangePage(page) {
      this.paging.page = page
    },
    debouncedFetchData: _.debounce(function (value) {
      this.isLoading = true
      this.postData(value)
    }, 300),
    async postData() {
      const requestBody = {
        businessName: this.businessName,
        size: this.paging.size,
        page: this.paging.page,
        listCategory: this.listSelectedCategory,
      }
      try {
        const response = await postBusinesses(requestBody)
        this.listBusiness = response?.content
        this.paging.size = response?.size
        this.paging.total = response?.totalPages
        this.isLoading = false
      } catch (error) {
        console.error('Error:', error)
        this.isLoading = false
      }
    },
  },
}
</script>
