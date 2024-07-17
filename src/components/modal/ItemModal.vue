<template>
  <div
    v-if="item"
    class="h-full w-1/2 ring-[1px] bg-[#262626] ring-b-color opacity-[96%] flex items-center flex-col"
  >
    <button @click="closeModal()">
      <i class="bx bx-x absolute right-0 p-3 text-white text-[36px]"></i>
    </button>

    <img :src="item.img" alt="photo" class="w-[55%] mt-[70px] mb-[45px] rounded-[12px]" />
    <div class="h-[1px] bg-b-color w-[90%] mb-[24px]"></div>

    <h3 class="mb-[36px] text-white font-semibold uppercase text-[24px]">{{ item.name }}</h3>

    <p class="text-white text-center w-[75%] mb-[36px]">{{ item.info }}</p>
    <div class="h-[1px] bg-b-color w-[90%]"></div>

    <button
      @click="toggleConfirmation()"
      v-if="!showConfirmation"
      class="h-[60px] cursor-pointer bg-[#FA7272] hover:bg-[#FF8888] rounded-[8px] w-[90%] my-auto text-white font-semibold"
    >
      Удалить предмет
    </button>

    <!-------- Modal --------->
    <div
      v-if="showConfirmation"
      class="absolute p-[30px] flex flex-col items-center bottom-0 w-full border-t-[1px] border-b-color bg-primary"
    >
      <input
        type="number"
        v-model="confirmationInput"
        class="input-number w-full bg-primary h-[50px] py-2 px-3 mb-[25px] rounded-[4px] border-[1px] border-b-color text-[#ffffff] font-semibold"
        placeholder="Введите количество"
      />
      <div class="flex justify-between w-full">
        <button
          @click="toggleConfirmation()"
          class="w-[40%] h-[45px] rounded-[8px] bg-white text-[#2d2d2d]"
        >
          Отмена
        </button>
        <button
          @click="removeFromInventory(item.id, confirmationInput)"
          class="w-[55%] h-[45px] bg-[#FA7272] hover:bg-[#FF8888] rounded-[8px] text-white"
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
