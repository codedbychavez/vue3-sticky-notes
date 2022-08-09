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
      console.log('Handle background color change', color);
    }
  }
}
</script>

<template>
  <div>
    <h3 class="text-md font-semibold">Background color <span class="text-gray-400">(Global)</span></h3>
    <div class="mt-2">
      <div class="flex items-center">
        <div v-for="(backgroundColor, index) in backgroundColors" :key="index">
          <Color @colorChange="handleBackgroundColorChange" :label="backgroundColor.name" :color="backgroundColor.value" />
        </div>
      </div>
    </div>
  </div>
</template>