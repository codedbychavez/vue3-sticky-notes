<script>
import { computed } from "@vue/reactivity";
import Sticky from "../components/sticky/Sticky.vue";
import StickiesWrapper from "../components/sticky/StickiesWrapper.vue";
import NewStickyPlaceholder from "../components/sticky/NewStickyPlaceholder.vue";
import { useStickiesStore } from "@/stores/stickies";

export default {
  setup() {
    const stickiesStore = useStickiesStore();

    return {
      stickiesStore,
      stickies: computed(() => stickiesStore.stickies),
    };
  },
  components: { Sticky, StickiesWrapper, NewStickyPlaceholder },
};
</script>

<template>
  <div>
    <StickiesWrapper>
      <NewStickyPlaceholder />
      <div v-for="sticky in stickies" :key="sticky.id">
        <Sticky :id="sticky.id" :title="sticky.title" :text="sticky.text" />
      </div>
    </StickiesWrapper>
  </div>
</template>