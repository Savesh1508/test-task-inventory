<template>
  <div class="h-full w-full">
    <ul class="flex flex-wrap w-full h-full">
      <li
        class="relative bg-primary w-1/5 h-1/5 ring-[1px] ring-b-color"
        v-for="(item, index) in inventory"
        :key="index"
      >
        <div v-if="item.img" class="flex justify-center items-center h-full">
          <img :src="item.img" alt="Some Img" class="w-2/3 rounded-[12px]" />
          <div
            class="absolute bottom-0 right-0 text-[#7d7d7d] border-[1px] px-2 rounded-tl-[6px] border-b-color"
          >
            {{ item.quantity }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useInventory } from '@/composables/inventory'

const { inventory, removeFromInventory } = useInventory()
</script>
