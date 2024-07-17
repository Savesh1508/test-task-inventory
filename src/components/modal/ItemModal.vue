<template>
  <div
    v-if="item"
    class="h-full w-1/2 ring-[1px] bg-primary ring-b-color opacity-[96%] flex items-center flex-col"
  >
    <button @click="closeModal()">
      <i class="bx bx-x absolute right-0 p-3 text-t-color text-[36px]"></i>
    </button>

    <img :src="item.img" alt="photo" class="w-[55%] mt-[70px] mb-[45px] rounded-[12px]" />
    <div class="h-[1px] bg-b-color w-[90%] mb-[24px]"></div>

    <h3 class="mb-[36px] text-t-color font-semibold uppercase text-[24px]">{{ item.name }}</h3>

    <p class="text-t-color text-center w-[75%] mb-[36px]">{{ item.info }}</p>
    <div class="h-[1px] bg-b-color w-[90%]"></div>

    <button
      @click="toggleConfirmation()"
      v-if="!showConfirmation"
      class="h-[60px] cursor-pointer bg-confirmbtn-color hover:bg-hover-confirmbtn-color rounded-[8px] w-[90%] my-auto text-t-color font-semibold"
    >
      Удалить предмет
    </button>

    <!-------- Delete Modal --------->
    <div
      v-if="showConfirmation"
      class="absolute p-[30px] flex flex-col items-center bottom-0 w-full border-t-[1px] border-b-color bg-primary"
    >
      <input
        type="number"
        v-model="confirmationInput"
        class="input-number w-full bg-primary h-[50px] py-2 px-3 mb-[25px] rounded-[4px] border-[1px] border-b-color text-t-color font-semibold"
        placeholder="Введите количество"
      />
      <div class="flex justify-between w-full">
        <button
          @click="toggleConfirmation()"
          class="w-[40%] h-[45px] rounded-[8px] bg-cancelbtn-color text-cancelbtn-text-color"
        >
          Отмена
        </button>
        <button
          @click="removeFromInventory(item.id, confirmationInput)"
          class="w-[55%] h-[45px] bg-confirmbtn-color hover:bg-hover-confirmbtn-color rounded-[8px] text-t-color"
        >
          Подтвердить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useInventory } from '@/composables/inventory'
const { closeModal, removeFromInventory } = useInventory()

import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object
  }
})

const showConfirmation = ref(false)
const confirmationInput = ref('')

function toggleConfirmation() {
  showConfirmation.value = !showConfirmation.value
}
</script>

<style scoped>
.input-number {
  outline: none;
}

.input-number::-webkit-outer-spin-button,
.input-number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
