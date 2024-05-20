<template>
    <div class="header__flex">

       <div class="header">  
        <router-link to="/">
          <button>
            <img src="/back.svg" alt="come-back">
          </button>
        </router-link>
        <h1>Vue 3</h1>
      </div>

      <h2 class="header__title">
      Welcome to UI Kit for Vue 3!
    </h2>
    </div>

</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    gap: 20px;
    align-items: center;
    & button {
      width: 30px;
      height: 30px;
      background-color: #42b883;
      color: #fff;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    &__flex {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    &__title {
 
      font-weight: 700;
      font-size: 30px;
      color:#42b883;
    }
  }
</style>