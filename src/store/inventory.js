import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useInventoryStore = defineStore('inventoryStore', {
  state: () => {
    const initialState = {
      inventory: Array.from({ length: 25 }, () => ({
        id: uuidv4(),
        name: null,
        quantity: 0,
        img: null,
        info: null
      })),
      isModalVisible: false,
      currentModalItem: null
    }

    initialState.inventory[0] = {
      id: uuidv4(),
      name: 'sword',
      quantity: 9,
      img: 'https://picsum.photos/200/200',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus facere doloribus dolorum commodi voluptatum laborum delectus, debitis, eligendi ullam voluptatem voluptate eos? Cumque quas dolorem at maiores deleniti voluptate.'
    }
    initialState.inventory[1] = {
      id: uuidv4(),
      name: 'shield',
      quantity: 5,
      img: 'https://picsum.photos/300/300',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus facere doloribus dolorum commodi voluptatum laborum delectus, debitis, eligendi ullam voluptatem voluptate eos? Cumque quas dolorem at maiores deleniti voluptate.'
    }
    initialState.inventory[2] = {
      id: uuidv4(),
      name: 'knife',
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
    removeFromInventory(id, amountToRemove) {
      const itemIndex = this.inventory.findIndex((item) => item.id === id)
      if (itemIndex === -1) {
        return
      }
      const item = this.inventory[itemIndex]

      if (amountToRemove >= item.quantity) {
        this.inventory[itemIndex] = {
          ...item,
          name: null,
          quantity: 0,
          img: null,
          info: null
        }
      } else {
        item.quantity -= amountToRemove
      }

      this.isModalVisible = false
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
    },

    changeModalVisibility(index) {
      const item = this.inventory[index]

      if (this.isModalVisible && (!item.name || item == this.currentModalItem)) {
        this.isModalVisible = false
      } else if (!this.isModalVisible && !item.name) {
        return
      } else {
        this.currentModalItem = item
        this.isModalVisible = true
      }

      this.saveStorage()
    },

    closeModal() {
      this.isModalVisible = false
      this.saveStorage()
    }
  }
})
