<template>
  <main class="container">
    <h1 class="headline text-center spacing-vertical--lg">Leistungen</h1>
    <section class="services">
      <swiper
        space-between="16"
        slides-per-view="1.2"
        :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 16
          },
          '992': {
            slidesPerView: 3,
            spaceBetween: 16
          }
        }"
      >
        <swiper-slide>
          <ServiceItem
            title="Think wide."
            subtitle="Strategy, Ideation, Consulting"
            description="Wer im komplexen digitalen Umfeld erfolgreich sein will, muss das große Ganze verstehen."
            color="primary"
          />
        </swiper-slide>
        <swiper-slide>
          <ServiceItem
            title="Build deep."
            subtitle="UX/UI Design, Fullstack Development, Content Creation"
            description="Wir sind überzeugt: Eine gute Strategie bedarf einer noch besseren Umsetzung."
            color="secondary"
          />
        </swiper-slide>
        <swiper-slide>
          <ServiceItem
            title="Grow fast."
            subtitle="SEO/SEA, Social Media/Paid, Data & Analytics"
            description="Ein Projekt ins Leben zu rufen ist einfach, es jedoch erfolgreich großwerden zu sehen, ist die Königsdisziplin."
            color="white"
          />
        </swiper-slide>
      </swiper>
    </section>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import ServiceItem from '@/components/ServiceItem.vue'

const breakpoints = {
  768: {
    slidesPerView: 3
  }
}
</script>

<style scoped>
.swiper-slide {
  height: auto;
}

@media screen and (min-width: 768px) {
  .swiper {
    overflow: visible;
  }
}
</style>
