<template>
  <div class="menuDiv">
    <div class="onemenu" v-for="(menu, index) in menulist" :key="menu.id" :class="{active:activeId == menu.id}"
      @click="menuclick(menu)">
      {{menu.name}}
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  const router = useRouter()


  const menulist = ref([])
  for (let i = 0; i < 100; i++) {
    menulist.value.push({
      id: i,
      name: `菜单${i + 1}`
    })
  }
  const activeId = ref("")
  const menuclick = (menu) => {
    activeId.value = menu.id
    router.push({ name: 'page1' })
  }
</script>
<style scoped>
  .menuDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 20px;
    gap: 10px;
  }

  .onemenu {
    cursor: pointer;
    color: var(--fontcolor2)
  }

  .onemenu:hover {
    filter: brightness(0.1);
  }

  .active {
    color: var(--color-blue)
  }
</style>