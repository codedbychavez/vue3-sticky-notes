import { defineStore } from 'pinia'

export const useStickiesStore = defineStore({
  id: 'stickiesStore',
  state: () => ({
    stickies: []
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
    removeSticky(id) {
      const stickyIndex = this.stickies.findIndex(sticky => sticky.id == id);
      this.stickies.splice(stickyIndex, 1);
    }
  }
})
