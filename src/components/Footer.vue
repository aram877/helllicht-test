<template>
  <footer id="footer" class="spacing-vertical--lg">
    <div class="container footer__content">
      <router-link to="/datenschutz" class="link"> Datenschutz </router-link>
      <router-link to="/impressum" class="link"> Impressum </router-link>
    </div>
  </footer>
</template>

<style scoped>
.footer__content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
