<script>
import Color from './Color.vue'

export default {
  components: {
    Color,
  },
  data() {
    return {
      backgroundColors: [
        {
          name: 'Green',
          value: 'bg-green-400',
        },
        {
          name: 'Red',
          value: 'bg-red-400',
        },
        {
          name: 'Orange',
          value: 'bg-orange-400',
        },
        {
          name: 'Blue',
          value: 'bg-blue-400',
        },
      ]
    }
  },
  methods: {
    handleBackgroundColorChange(color) {
      console.log('Handle background color change')
    }
  }
}
</script>

<template>
  <div>
    <h3>Background Color</h3>
    <div class="flex">
      <div class="flex items-center">
        <div v-for="(backgroundColor, index) in backgroundColors" :key="index">
          <Color :label="backgroundColor.name" :color="backgroundColor.value" />
        </div>
      </div>
    </div>
  </div>
</template>