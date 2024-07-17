<template>
  <div class="h-full w-1/2 ring-[1px] bg-[#262626] ring-b-color opacity-[96%]">
    {{ item }}
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object
  }
})
</script>
