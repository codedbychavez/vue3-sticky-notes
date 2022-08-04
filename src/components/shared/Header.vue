<script>
import SettingsIcon from "../icons/SettingsIcon.vue";
import SettingsModal from "../modals/SettingsModal.vue";
export default {
  data() {
    return {
      showSettingsModal: false,
    }
  },
  components: {
    SettingsIcon,
    SettingsModal,
  },
  methods: {
    handleClose() {
      this.showSettingsModal = false;
    }
  }
};
</script>

<template>
  <div>
    <div class="header p-4 flex">
      <button @click="showSettingsModal = true" class="p-0 text-gray-200">
        <SettingsIcon />
      </button>
    </div>

    <!-- Modal -->
    <SettingsModal :show="showSettingsModal" @closeSettingsModal="handleClose" />
  </div>
</template>

<style>
.header {
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
}
</style>