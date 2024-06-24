<template>
  <router-link to="#" :class="['service-item', `service-item--${color}`]">
    <div class="service-item__text-content">
      <h3 class="service-item__title">{{ title }}</h3>
      <h4 class="service-item__subtitle">{{ subtitle }}</h4>
      <p class="service-item__description">{{ description }}</p>
    </div>

    <div class="service-item__link">
      <div class="service-item__link-text">Mehr erfahren</div>
      <div class="service-item__link-icon">
        <ArrowRight :color="color === 'light' ? 'var(--black)' : 'var(--white)'" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import ArrowRight from '@/components/icons/ArrowRight.vue'
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true,
    validator: (value) => ['primary', 'secondary', 'light'].includes(value)
  }
})
</script>

<style scoped>
.service-item {
  --service-item-padding: 1rem;
  --service-item-title-font-size: 1.5rem;
  --service-item-subtitle-font-size: 0.8rem;
  --service-item-text-content-spacing: 2rem;

  height: 100%;
  padding: var(--service-item-padding);
  color: var(--white);
  transition: transform 0.3s;
  transition: box-shadow 0.125s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (min-width: 768px) {
  .service-item {
    --service-item-padding: 3.5rem;
    --service-item-title-font-size: 2rem;
    --service-item-subtitle-font-size: 1rem;
    --service-item-text-content-spacing: 3rem;
  }
}

.service-item:hover {
  box-shadow: 1px 10px 16px 2px rgba(0, 0, 0, 0.2);
}

.service-item--primary {
  background-color: var(--primary);
}

.service-item--secondary {
  background-color: var(--secondary);
}

.service-item--white {
  background-color: var(--white);
  border: 1px solid var(--black);
  color: var(--black);
}

.service-item__title {
  font-size: var(--service-item-title-font-size);
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.service-item__subtitle {
  font-size: var(--service-item-subtitle-font-size);
  font-weight: 700;
  margin-bottom: 1rem;
}

.service-item__description {
  font-size: var(--service-item-subtitle-font-size);
  font-weight: 400;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
}

.service-item__link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--white);
}

.service-item__link-text {
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
}

.service-item__link-text::after {
  content: '';
  width: 0px;
  height: 2px;
  display: block;
  background: var(--white);
  transition: 300ms;
}

.service-item__link-icon {
  height: 1.5rem;
  width: 1.5rem;
  transition: transform 0.125s ease-in-out;
}

.service-item__text-content > * + * {
  margin-top: var(--service-item-text-content-spacing);
}

.service-item:hover .service-item__link-icon {
  transform: translateX(0.5rem);
}

.service-item--white .service-item__link {
  color: var(--black);
}

.service-item:hover .service-item__link-text::after {
  width: 100%;
}

.service-item--white:hover .service-item__link-text::after {
  width: 100%;
  background-color: var(--black);
}
</style>
