<template>
  <div id="app">
    <Navigation />

    <div class="py-4">
      <router-view/>  
    </div>
  </div>
</template>

<script>

import Navigation from '@/components/navigator'
export default {
  components: {
    Navigation,
  }
}
</script>
