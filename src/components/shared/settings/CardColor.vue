<script>
import Color from './Color.vue';
export default {
    data() {
        return {
            cardColors: [
                {
                    name: "Green",
                    value: "bg-green-400",
                },
                {
                    name: "Red",
                    value: "bg-red-400",
                },
                {
                    name: "Orange",
                    value: "bg-orange-400",
                },
                {
                    name: "Blue",
                    value: "bg-blue-400",
                },
            ]
        };
    },
    methods: {
        handleCardColorChange(color) {
            console.log("Handle card color change", color);
        }
    },
    components: { Color }
}
</script>

<template>
  <div>
    <h3 class="text-md font-semibold">Card color</h3>
    <div class="mt-2">
      <div class="flex items-center">
        <div v-for="(cardColor, index) in cardColors" :key="index">
          <Color @colorChange="handleCardColorChange" :label="cardColor.name" :color="cardColor.value" />
        </div>
      </div>
    </div>
  </div>
</template>