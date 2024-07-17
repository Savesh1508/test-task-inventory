import { useInventoryStore } from '@/store/inventory'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export function useInventory() {
  const store = useInventoryStore()

  const { inventory, isModalVisible, currentModalItem } = storeToRefs(store)
  const { saveStorage, moveItems, changeModalVisibility, closeModal, removeFromInventory } =
    useInventoryStore()

  onMounted(() => {
    saveStorage()
  })

  return {
    inventory,
    isModalVisible,
    moveItems,
    changeModalVisibility,
    currentModalItem,
    removeFromInventory,
    closeModal
  }
}
