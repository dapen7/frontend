<template>
  <div class="mainDiv" :class="{hidenmenu:!max}">

    <div class="header">big logo</div>

    <div class="menu">
      <div class="menubtn" @click="max = !max">
        {{max?"hide":"show"}}
      </div>
      <Menu></Menu>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>

    <div class="footer">footer text</div>
  </div>

</template>
<script setup>
  import Menu from './Menu.vue'
  import { ref, onMounted } from 'vue'

  const max = ref(true)
  const calMax = () => {
    let width = document.body.clientWidth
    max.value = width > 800
  }
  let t = null
  const ls = window.addEventListener("resize", () => {
    t && clearTimeout(t)
    t = setTimeout(() => {
      calMax()
    }, 50)
  })
  onMounted(() => {
    calMax()
  })

</script>
<style scoped>
  .mainDiv {
    height: 100%;
    display: grid;
    grid-template: "menu header" 60px
      "menu content" 1fr
      "menu footer" 60px / 280px 1fr;
  }

  .mainDiv.hidenmenu {
    grid-template-columns: 45px 1fr;
  }

  .header {
    grid-area: header;
    background-color: black;
    overflow: hidden;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }

  .menu {
    grid-area: menu;
    background-color: antiquewhite;
    overflow-y: auto;
  }

  .mainDiv.hidenmenu .menu {
    overflow-x: hidden;
    white-space: nowrap;
  }

  .content {
    grid-area: content;
    background-color: white;
    overflow: auto;
  }

  .footer {
    grid-area: footer;
    background-color: black;
    overflow: hidden;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menubtn {
    text-align: right;
    cursor: pointer;
    position: sticky;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 1;
  }
</style>