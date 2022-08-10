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
              title: 'Sticky 1',
              text: 'This is just some text 1',
              color: 'bg-green-600'
            },
            {
              id: 2,
              title: 'Sticky 2',
              text: 'This is just some text 2',
              color: 'bg-green-600'
            },
            {
              id: 3,
              title: 'Sticky 3',
              text: 'This is just some text 3',
              color: 'bg-green-600'
            },
            {
              id: 4,
              title: 'Sticky 4',
              text: 'This is just some text 4',
              color: 'bg-green-600'
            },
            {
              id: 5,
              title: 'Sticky 5',
              text: 'This is just some text 5',
              color: 'bg-green-600'
            },
            {
              id: 6,
              title: 'Sticky 6',
              text: 'This is just some text 6',
              color: 'bg-green-600'
            },
          ]
        };
    },
    components: { Sticky, StickiesWrapper, NewStickyPlaceholder },
}
</script>

<template>
  <div>
    <StickiesWrapper>
      <NewStickyPlaceholder />
      <div v-for="(sticky, index) in stickies" :key="sticky.id">
        <Sticky :id="sticky.id" :title="sticky.title" :text="sticky.text" />
      </div>
 
   
    </StickiesWrapper>
  </div>
</template>