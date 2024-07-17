<template>
  <div class="absolute top-[14px] left-0 w-full flex">
    <button
      @click="toggleTheme"
      class="w-[100px] flex items-center h-[40px] mx-auto border-[2px] border-b-color rounded-[20px]"
      :class="currentTheme == 'light' ? 'justify-end' : ''"
    >
      <div class="bg-switcher w-[36px] h-[36px] rounded-[20px]"></div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTheme = ref('dark')

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  localStorage.setItem('theme', currentTheme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  currentTheme.value = savedTheme
  document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>
