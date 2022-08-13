import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core';

export const useStickiesStore = defineStore({
  id: 'stickiesStore',
  state: () => ({
    stickies: useStorage('stickies', [])
  }),
  getters: {
    allStickies: (state) => state.stickies
  },
  actions: {
    addSticky() {
      this.stickies.unshift({
        id: Date.now(),
        title: 'My Title',
        text: 'Write your content here',
        color: 'bg-green-600',
        placeholder: true,
      })
    },
    updateSticky(sticky) {
      const stickyId = sticky.id;
      const stickyIndex = this.stickies.findIndex(sticky => sticky.id == stickyId);
      this.stickies.splice(stickyIndex, 1, sticky);
    },
    removeSticky(id) {
      const stickyIndex = this.stickies.findIndex(sticky => sticky.id == id);
      this.stickies.splice(stickyIndex, 1);
    }
  }
})
