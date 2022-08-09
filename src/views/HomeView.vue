<script>
import Sticky from '../components/Sticky.vue'
import StickiesWrapper from '../components/StickiesWrapper.vue'
import NewStickyPlaceholder from '../components/NewStickyPlaceholder.vue';
export default {
    data() {
        return {
          stickies: [
            {
              id: 1,
              title: 'My Title',
              text: 'This is just some text',
              color: 'bg-green-600'
            },
            {
              id: 2,
              title: 'My Title',
              text: 'This is just some text',
              color: 'bg-green-600'
            },
            {
              id: 3,
              title: 'My Title',
              text: 'This is just some text',
              color: 'bg-green-600'
            },
            {
              id: 4,
              title: 'My Title',
              text: 'This is just some text',
              color: 'bg-green-600'
            },
            {
              id: 5,
              title: 'My Title',
              text: 'This is just some text',
              color: 'bg-green-600'
            },
            {
              id: 6,
              title: 'My Title',
              text: 'This is just some text',
              color: 'bg-green-600'
            },
          ]
        };
    },
    components: { Sticky, StickiesWrapper, NewStickyPlaceholder },
    computed: {
      last() {
        return this.stickies.length - 1
      }
    }
    
}
</script>

<template>
  <div>
    <StickiesWrapper>
      <div v-for="(sticky, index) in stickies" :key="sticky.id">
        <NewStickyPlaceholder v-if="index == 0" />
        <Sticky :title="sticky.title" :text="sticky.text" />
      </div>
 
   
    </StickiesWrapper>
  </div>
</template>