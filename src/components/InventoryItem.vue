<template>
  <li
    class="relative bg-primary w-1/5 h-1/5 ring-[1px] ring-b-color"
    :class="item.name ? 'cursor-pointer hover:bg-[#2f2f2f]' : ''"
    @click="changeModalVisibility(index)"
    :draggable="item.name ? true : false"
    @dragstart="dragStart(item, index, $event)"
    @dragover.prevent
    @drop="drop(item, index, $event)"
  >
    <div v-if="item.name" class="flex justify-center items-center h-full">
      <img :src="item.img" alt="Some Img" class="w-2/3 rounded-[12px]" />
      <div
        class="absolute bottom-0 right-0 text-[#7d7d7d] border-[1px] px-2 rounded-tl-[6px] border-b-color"
      >
        {{ item.quantity }}
      </div>
    </div>
  </li>
</template>

<script setup>
import { useInventory } from '@/composables/inventory'
import { useDragAndDrop } from '@/composables/dragAndDrop'

const props = defineProps({
  item: {
    type: Object
  },
  index: {
    type: Number
  }
})

const { moveItem, changeModalVisibility } = useInventory()
const { dragStart, drop } = useDragAndDrop(moveItem)
</script>
