<template>
  <div class="contact-form">
    <div class="contact-form__wrapper container">
      <div class="contact-form__contact-image">
        <img src="@/assets/images/image-contact.jpg" alt="Phone" />
      </div>

      <div class="contact-form__form-container">
        <form @submit.prevent="onSubmit">
          <h2 class="contact-form__form-headline">Kontakt</h2>
          <div class="form-group">
            <label for="email">E-Mail-Adresse</label>
            <input
              id="email"
              v-model="email"
              type="email"
              :class="{ 'is-invalid': errors.email }"
              placeholder="Deine E-Mail-Adresse..."
            />
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <div class="contact-form__country-label">
              <label for="country">Land</label>
              <span class="contact-form__optional-label">optional</span>
            </div>

            <select
              id="country"
              v-model="country"
              :class="{ 'is-invalid': errors.country, selected: country }"
              class="contact-form__input"
            >
              <option value="">Land wählen...</option>
              <option v-for="country in countries" :key="country" :value="country">
                {{ country }}
              </option>
            </select>
            <span v-if="errors.country" class="error">{{ errors.country }}</span>
          </div>

          <div class="form-group">
            <label for="message">Nachricht</label>
            <textarea
              id="message"
              v-model="message"
              :class="{ 'is-invalid': errors.message }"
              placeholder="Deine Nachricht..."
            ></textarea>
            <span v-if="errors.message" class="error">{{ errors.message }}</span>
          </div>

          <div class="form-group contact-form__checkbox-group">
            <div class="copy copy--bold copy--small">Datenschutz</div>
            <div class="contact-form__checkbox-group-wrapper">
              <input
                id="privacy"
                v-model="privacy"
                type="checkbox"
                :class="{ 'is-invalid': errors.privacy }"
              />
              <label for="privacy">Ich bin mit der verarbeitung meiner Daten einverstanden.</label>
            </div>
            <span v-if="errors.privacy" class="error">{{ errors.privacy }}</span>
          </div>

          <button type="submit" class="submit-button">Senden <SendIcon color="white" /></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { onMounted } from 'vue'
import SendIcon from '@/components/icons/SendIcon.vue'

const email = ref('')
const country = ref('')
const message = ref('')
const privacy = ref(false)
const errors = ref({})
const countries = ref([])

onMounted(async () => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()

  countries.value = data
    .filter((country) => country.region === 'Europe')
    .map((country) => country.name.common)
})

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Gültige E-Mail-Adresse eingeben')
    .required('E-Mail-Adresse ist erforderlich'),
  country: yup.string().optional('Land ist erforderlich'),
  message: yup.string().required('Nachricht ist erforderlich'),
  privacy: yup.bool().oneOf([true], 'Datenschutz muss akzeptiert werden')
})

const onSubmit = async () => {
  try {
    await schema.validate(
      {
        email: email.value,
        country: country.value,
        message: message.value,
        privacy: privacy.value
      },
      { abortEarly: false }
    )
    errors.value = {}
    alert('Form successfully submitted!')
  } catch (err) {
    const errorMessages = {}
    err.inner.forEach((error) => {
      errorMessages[error.path] = error.message
    })
    errors.value = errorMessages
  }
}
</script>

<style scoped>
.contact-form {
  --contact-form-graphic-width: 80px;
  --contact-form-graphic-height: 80px;
  --contact-form-graphic-top: calc(-1 * var(--contact-form-graphic-height) / 2);
  --contact-form-graphic-left: unset;
  --contact-from-graphic-right: 1rem;
  --contact-form-headline-font-size: 1.5rem;
  --contact-form-padding: 2rem 0;

  background-color: var(--light);
  padding: var(--contact-form-padding);
}

@media screen and (min-width: 768px) {
  .contact-form {
    --contact-form-graphic-left: 1rem;
    --contact-from-graphic-right: unset;
    --contact-form-graphic-width: 120px;
    --contact-form-graphic-height: 120px;
    --contact-form-headline-font-size: 3rem;
    --contact-form-padding: 4rem 0;
  }
}

.contact-form__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 5rem;
}

.contact-form__contact-image {
  order: 2;
  position: relative;
}

.contact-form__contact-image::after {
  content: '';
  background-image: url(@/assets/images/image-dot.svg);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: var(--contact-form-graphic-top);
  left: var(--contact-form-graphic-left);
  right: var(--contact-from-graphic-right);
  width: var(--contact-form-graphic-width);
  height: var(--contact-form-graphic-height);
  z-index: 80;
}

.contact-form__form-container {
  order: 1;
}

.contact-form__contact-image img {
  max-width: 100%;
}

.contact-form__form-headline {
  margin-bottom: 2rem;
  font-size: var(--contact-form-headline-font-size);
  font-weight: 800;
}

@media screen and (min-width: 768px) {
  .contact-form__wrapper {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .contact-form__contact-image {
    order: 1;
  }
  .contact-form__form-container {
    order: 2;
  }
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 0.8rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem 0.8rem;
  border: 1px solid var(--input);
  border-radius: 2px;
}

.form-group select {
  color: var(--gray);
}

.form-group select.selected {
  color: var(--black);
}

.form-group input.is-invalid,
.form-group select.is-invalid,
.form-group textarea.is-invalid {
  border-color: red;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
  display: block;
}

.contact-form__checkbox-group {
  background-color: var(--input);
  padding: 1rem;
}

.contact-form__checkbox-group label {
  display: block;
  margin-bottom: 0;
  font-weight: 400;
}
.contact-form__checkbox-group-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  background-color: var(--input);
}

.submit-button {
  background-color: var(--primary);
  color: var(--white);
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 1px 16px 2px rgba(0, 0, 0, 0.2);
}

.submit-button:hover {
  background-color: var(--primary);
}

::placeholder {
  color: var(--gray);
}
.contact-form__country-label {
  display: flex;
  justify-content: space-between;
}

.contact-form__optional-label {
  font-size: 0.8rem;
  color: var(--gray);
}

.contact-form__input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--input);
  border-radius: 2px;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
}
</style>
