import { useInventoryStore } from '@/store/inventory'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export function useInventory() {
  const store = useInventoryStore()

  const { inventory, isModalVisible, currentModalItem } = storeToRefs(store)
  const { saveStorage, moveItems, changeModalVisibility } = useInventoryStore()

  const moveItem = (fromIndex, toIndex) => {
    moveItems(fromIndex, toIndex)
  }

  onMounted(() => {
    saveStorage()
  })

  return {
    inventory,
    isModalVisible,
    moveItem,
    changeModalVisibility,
    currentModalItem
  }
}
