<script>
export default {
  props: {
    color: String,
    label: String,
  }
}
</script>

<template>
  <button @click="$emit('colorChange', color)" class="flex items-center hover:bg-gray-200 px-2 py-1 rounded">
    <div class="w-4 h-4 rounded-lg" :class="[color ? color : 'bg-gray-400']"></div>
    <div class="mx-2">{{ label }}</div>
  </button>
</template>