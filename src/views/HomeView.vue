<template>
  <main>
    <section class="services container">
      <h1 class="services__headline spacing-vertical--lg container">Leistungen</h1>
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
    <section>
      <ContactForm />
    </section>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import ServiceItem from '@/components/ServiceItem.vue'
import ContactForm from '@/components/ContactForm.vue'

const breakpoints = {
  768: {
    slidesPerView: 3
  }
}
</script>

<style scoped>
.services {
  --services-section-margin-bottom: 2rem;
  --service-headline-padding: 2rem 0;
  --service-headline-text-align: left;
  --service-headline-font-size: 1.5rem;

  margin-bottom: var(--services-section-margin-bottom);
}
@media screen and (min-width: 768px) {
  .services {
    --service-headline-text-align: center;
    --service-headline-padding: 2rem 0;
    --services-section-margin-bottom: 5rem;
    --service-headline-font-size: 3rem;
  }
}

.services__headline {
  font-size: var(--service-headline-font-size);
  text-align: var(--service-headline-text-align);
  padding: var(--service-headline-padding);
  font-weight: 800;
}
.swiper-slide {
  height: auto;
}

@media screen and (min-width: 768px) {
  .swiper {
    overflow: visible;
  }
}
</style>
