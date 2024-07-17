import { useInventoryStore } from '@/store/inventory'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export function useInventory() {
  const store = useInventoryStore()

  const { inventory } = storeToRefs(store)
  const { removeFromInventory, saveStorage, moveItems } = useInventoryStore()

  const moveItem = (fromIndex, toIndex) => {
    moveItems(fromIndex, toIndex)
  }

  onMounted(() => {
    saveStorage()
  })

  return {
    inventory,
    removeFromInventory,
    moveItem
  }
}
