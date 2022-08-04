<script>
// Imports
import Header from '../components/shared/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>