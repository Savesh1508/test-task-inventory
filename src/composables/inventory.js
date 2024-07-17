import { useInventoryStore } from '@/store/inventory'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export function useInventory() {
  const store = useInventoryStore()

  const { inventory } = storeToRefs(store)
  const { removeFromInventory, saveStorage } = useInventoryStore()

  onMounted(() => {
    saveStorage()
  })

  return {
    inventory,
    removeFromInventory
  }
}
