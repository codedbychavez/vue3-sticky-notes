<script>
import TrashIcon from "./icons/TrashIcon.vue";
import { useStickiesStore } from "../stores/stickies";

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
    handleDeleteSticky() {
      this.stickiesStore.removeSticky(this.id);
    },
  },
};
</script>

<template>
  <div
    class="
      sticky
      block
      m-4
      p-6
      max-w-sm
      bg-white
      rounded-lg
      border border-gray-200
      shadow-md
    "
  >
    <div class="flex justify-end">
      <button
        @click="handleDeleteSticky"
        class="text-gray-400 hover:text-red-500"
      >
        <TrashIcon />
      </button>
    </div>
    <input
      class="
        w-full
        rounded-sm
        mb-2
        p-1
        text-2xl
        font-bold
        tracking-tight
        text-gray-900
      "
      type="text"
      :value="title"
    />
    <textarea
      class="w-full rounded-sm p-1 font-normal text-gray-700"
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="text"
    ></textarea>
  </div>
</template>

<style scoped>
.sticky {
  min-height: 25rem;
  min-width: 25rem;
}

textarea {
  min-height: 15rem;
}
</style>