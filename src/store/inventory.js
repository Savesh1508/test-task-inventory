import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventoryStore', {
  state: () => {
    const initialState = {
      inventory: Array.from({ length: 25 }, () => ({
        item: null,
        quantity: 0,
        img: null
      }))
    }

    initialState.inventory[0] = {
      item: 'sword',
      quantity: 9,
      img: 'https://picsum.photos/200/200'
    }
    initialState.inventory[1] = {
      item: 'shield',
      quantity: 5,
      img: 'https://picsum.photos/300/300'
    }

    const savedState = JSON.parse(localStorage.getItem('inventory'))

    return savedState || initialState
  },

  actions: {
    saveStorage() {
      localStorage.setItem('inventory', JSON.stringify(this.$state))
    },

    removeFromInventory(index, amountToRemove) {
      const currentItem = this.inventory[index]

      if (!currentItem || currentItem.quantity === 0) {
        return
      }

      if (currentItem.quantity > amountToRemove) {
        currentItem.quantity -= amountToRemove
      } else {
        currentItem.item = null
        currentItem.quantity = 0
      }

      this.saveStorage()
    }
  }
})
