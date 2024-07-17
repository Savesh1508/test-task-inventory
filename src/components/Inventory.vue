<template>
  <div class="relative h-full w-full">
    <ul class="flex flex-wrap w-full h-full">
      <InventoryItem v-for="(item, index) in inventory" :key="index" :item="item" :index="index" />
    </ul>
    <ItemModal
      :item="currentModalItem"
      class="absolute top-0 duration-500 z-1"
      :class="isModalVisible ? 'right-0' : '-right-full'"
    />
  </div>
</template>

<script setup>
import { useInventory } from '@/composables/inventory'
import InventoryItem from '@/components/InventoryItem.vue'
import ItemModal from '@/components/modal/ItemModal.vue'

const { inventory, currentModalItem, isModalVisible } = useInventory()
</script>
