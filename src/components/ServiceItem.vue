<template>
  <router-link to="/test" :class="['service-item', `service-item--${color}`]">
    <div class="service-item__text-content space-y-4">
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
  padding: 3.5rem;
  color: var(--white);
  transition: transform 0.3s;
  transition: box-shadow 0.125s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.service-item__subtitle {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.service-item__description {
  font-size: 1rem;
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
  border-bottom: 1px solid transparent;

  transition: all 0.125s ease-in-out;
}

.service-item__link-icon {
  height: 1.5rem;
  width: 1.5rem;
  transition: transform 0.125s ease-in-out;
}

.service-item:hover .service-item__link-icon {
  transform: translateX(0.5rem);
}

.service-item--white .service-item__link {
  color: var(--black);
}

.service-item:hover .service-item__link-text {
  border-bottom: 1px solid var(--white);
}
</style>
