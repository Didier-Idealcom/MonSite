<template>
  <footer class="footer">
    &copy; Copyright {{ new Date().getFullYear() }} | All rights reserved
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
  .footer {margin-top: 50px; line-height: 30px;}
</style>
