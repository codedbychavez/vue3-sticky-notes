<script>
import TrashIcon from "./icons/TrashIcon.vue";
export default {
    props: {
        id: Number,
        title: String,
        text: String,
    },
    components: { TrashIcon },
    methods: {
      handleAddSticky() {
        console.log('Handle delete sticky')
      }
    }
}
</script>

<template>
  
<div class="block m-4 p-6 max-w-sm h-96 bg-white rounded-lg border border-gray-200 shadow-md">
  <!-- Replace with plus icon -->
  <div>+ New Sticky</div>
</div>

</template>

<style scoped>


</style>