<script setup>
import { ref } from 'vue'
import Pagination from '../components/Pagination.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

const currentPage = ref(1)
const totalPages = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const visiblePage = ref(5)

const handleGoToPage = (page) => {
  currentPage.value = page
}
</script>

<template>
         <div class="ml-70">
          <HeaderComponent title="Pagination"/>
          <Pagination
    :currentPage="currentPage"
    :totalPages="totalPages"
    :visiblePage="visiblePage"
    @goToPage="handleGoToPage"
  />
  <p>Текущая страница: {{ currentPage }}</p>
         </div>

</template>
