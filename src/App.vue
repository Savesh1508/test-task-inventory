<template>
  <div class="relative px-5 duration-500 pt-[70px] bg-body">
    <ThemeSwitcher />
    <div class="flex justify-center mb-9">
      <Profile />
      <div class="overflow-hidden w-[800px] h-[750px] rounded-[12px] ring-[1px] ring-b-color">
        <Inventory />
      </div>
    </div>
    <div
      class="flex mx-auto duration-500 bg-primary w-full max-w-[1190px] h-[108px] rounded-[12px] border-[1px] border-b-color"
    >
      <div class="w-full bg-gray-700 my-[27px] ml-[27px] mr-[54px] rounded-[12px]"></div>
      <i class="bx bx-x text-t-color text-[36px]"></i>
    </div>
  </div>
</template>

<script setup>
import ThemeSwitcher from '@/components/base/ThemeSwitcher.vue'
import Profile from './components/Profile.vue'
import Inventory from './components/Inventory.vue'
</script>
