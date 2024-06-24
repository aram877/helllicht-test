<template>
  <main class="container">
    <h1 class="headline text-center spacing-vertical--lg">Leistungen</h1>
    <section class="services">
      <ServiceItem
        title="Think wide."
        subtitle="Strategy, Ideation, Consulting"
        description="Wer im komplexen digitalen Umfeld erfolgreich sein will, muss das große Ganze verstehen."
        color="primary"
      />
      <ServiceItem
        title="Build deep."
        subtitle="UX/UI Design, Fullstack Development, Content Creation"
        description="Wir sind überzeugt: Eine gute Strategie bedarf einer noch besseren Umsetzung."
        color="secondary"
      />
      <ServiceItem
        title="Grow fast."
        subtitle="SEO/SEA, Social Media/Paid, Data & Analytics"
        description="Ein Projekt ins Leben zu rufen ist einfach, es jedoch erfolgreich großwerden zu sehen, ist die Königsdisziplin."
        color="white"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
import ServiceItem from '@/components/ServiceItem.vue'
</script>

<style scoped>
.services {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.8rem;
}
@media screen and (min-width: 768px) {
  .services {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
}
</style>
