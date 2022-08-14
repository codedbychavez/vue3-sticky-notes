<script>
import TrashIcon from "../icons/TrashIcon.vue";
import { useStickiesStore } from "@/stores/stickies";

export default {
  setup() {
    const stickiesStore = useStickiesStore();
    return {
      stickiesStore,
    };
  },
  props: {
    id: Number,
    title: String,
    text: String,
  },
  components: { TrashIcon },
  methods: {
    handleAddSticky() {
      console.log("Handle add sticky");
      this.stickiesStore.addSticky();
    },
  },
};
</script>

<template>
  <div
    class="
      sticky
      m-4
      p-6
      max-w-sm
      h-96
      bg-white
      rounded-lg
      border border-gray-200
      shadow-md
      flex
    "
  >
    <!-- Replace with plus icon -->
    <button
      @click="handleAddSticky"
      class="
        m-auto
        text-2xl
        font-bold
        tracking-tight
        text-gray-800
        p-1
        hover:text-blue-900
      "
    >
      + New Sticky
    </button>
  </div>
</template>

<style scoped>
.sticky {
  min-height: 25rem;
  min-width: 25rem;
}
</style>