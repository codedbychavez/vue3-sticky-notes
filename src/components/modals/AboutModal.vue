<script>
import AboutInfo from '../AboutInfo.vue'
  export default {
    props: {
      show: Boolean,
    },
    components: {
      AboutInfo,
    },
    methods: {
      handleClose() {
        this.$emit('closeSettingsModal')
      }
    }
  }
</script>

<template>
  <!-- Main modal -->
  <div tabindex="-1" aria-hidden="true" :class="{hidden: !show}" class="fixed top-0 right-0 z-50">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow-xl">
              <!-- Modal header -->
              <div class="flex justify-between items-start p-4 rounded-t border-b">
              <h5 class="text-base font-semibold text-gray-900 md:text-xl">
                About
              </h5>
                <button @click="handleClose" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">
                <AboutInfo />
              </div>

          </div>
      </div>
  </div>
</template>