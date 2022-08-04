<script>
import SettingsIcon from "../icons/SettingsIcon.vue";
export default {
  components: {
    SettingsIcon,
  },
};
</script>

<template>
  <div>
    <div class="header p-4 flex">
      <button class="p-0 text-gray-200">
        <SettingsIcon />
      </button>
    </div>

    <!-- Modal -->
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