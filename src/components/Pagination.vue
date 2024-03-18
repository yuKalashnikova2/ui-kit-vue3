<script setup>
const props = defineProps({
  totalPages: {
    type: Array,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  visiblePage: {
    type: Number,
    required: true,
  },
})

const prevPage = () => {
  console.log('PREV PAGE')
  if (props.currentPage > 1) {
    emit('goToPage', props.currentPage - 1)
  }
}

const goToPage = (page) => {
  console.log(page)
  emit('goToPage', page)
}

const nextPage = () => {
  console.log('ЗДЕСЬ НОМЕР СЛЕДУЮЩЕГО СТРАНИЦЫ')
  if (props.currentPage < props.totalPages[props.totalPages.length - 1]) {
    emit('goToPage', props.currentPage + 1)
  }
}

const emit = defineEmits(['goToPage'])
</script>

<template>
  <h2>Pagination Component</h2>

  <div class="pagination">
    <button class="pagination__item" @click="prevPage">
      <img src="/prev.svg" alt="prev" />
    </button>
    <div
      v-for="page in totalPages"
      :class="[
        'pagination__item',
        page === currentPage ? 'pagination__item_active' : '',
      ]"
      @click="goToPage(page)"
    >
      {{ page }}
    </div>
    <button class="pagination__item" @click="nextPage">
      <img src="/next.svg" alt="prev" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  &__item {
    padding: 1rem;
    border: 1px solid rgb(203, 213, 225);
    color: rgb(51, 65, 85);
    background-color: #fff;
    &:hover {
      background-color: rgb(231, 235, 240);
      cursor: pointer;
    }
    & img {
      width: 10px;
      height: 10px;
    }
    &_active {
      color: #fff;
      background-color: #42b883;
      border: 1px solid #42b883;
      &:hover {
        background-color: #42b883;
        opacity: 0.8;
      }
    }
  }
}
</style>
