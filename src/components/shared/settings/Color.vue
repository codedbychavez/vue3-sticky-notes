<script>
export default {
  props: {
    color: String,
    label: String,
  }
}
</script>

<template>
  <div class="flex items-center mx-2">
    <div class="w-4 h-4 rounded-lg" :class="[color ? color : 'bg-gray-400']"></div>
    <div class="ml-2">{{ label }}</div>
  </div>
</template>