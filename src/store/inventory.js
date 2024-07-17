import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventoryStore', {
  state: () => {
    const initialState = {
      inventory: Array.from({ length: 25 }, () => ({
        item: null,
        quantity: 0,
        img: null,
        info: null
      }))
    }

    initialState.inventory[0] = {
      item: 'sword',
      quantity: 9,
      img: 'https://picsum.photos/200/200',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus facere doloribus dolorum commodi voluptatum laborum delectus, debitis, eligendi ullam voluptatem voluptate eos? Cumque quas dolorem at maiores deleniti voluptate.'
    }
    initialState.inventory[1] = {
      item: 'shield',
      quantity: 5,
      img: 'https://picsum.photos/300/300',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus facere doloribus dolorum commodi voluptatum laborum delectus, debitis, eligendi ullam voluptatem voluptate eos? Cumque quas dolorem at maiores deleniti voluptate.'
    }
    initialState.inventory[2] = {
      item: 'knife',
      quantity: 7,
      img: 'https://picsum.photos/400/400',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus facere doloribus dolorum commodi voluptatum laborum delectus, debitis, eligendi ullam voluptatem voluptate eos? Cumque quas dolorem at maiores deleniti voluptate.'
    }

    const savedState = JSON.parse(localStorage.getItem('inventory'))

    return savedState || initialState
  },

  actions: {
    // Сохранение в localStorage
    saveStorage() {
      localStorage.setItem('inventory', JSON.stringify(this.$state))
    },

    // Удаление объекта из массива
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
    },

    // Для перемещения объекта по массиву
    moveItems(fromIndex, toIndex) {
      const itemToMove = this.inventory[fromIndex]
      if (!itemToMove || !this.inventory[toIndex]) {
        return
      }
      const temp = this.inventory[toIndex]
      this.inventory[toIndex] = this.inventory[fromIndex]
      this.inventory[fromIndex] = temp

      // console.log(localStorage.getItem('inventory'))
      this.saveStorage()
    }
  }
})
