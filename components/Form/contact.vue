<script setup lang="ts">
import { reset } from '@formkit/core'
import {useToast} from "tailvue";

const props = defineProps<{ name: { firstName: string, lastName: string } }>()

const fullName = computed(() => {
  return `${props.name.firstName} ${props.name.lastName}`;
});

const email = computed(() => {
  return `${props.name.firstName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}@${props.name.lastName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}.com`;
});

const message = reactive({
  name: '',
  title: '',
  email: '',
  phone: '',
  message: ''
})

const handleCreateContact = async (e: SubmitEvent) => {
  await useCreateContact(message)

  useToast().success('Votre message a bien été envoyé')

  reset('contact-form', {
    name: '',
    title: '',
    email: '',
    phone: '',
    message: ''
  })
}
</script>

<template>
  <FormKit id="contact-form" name="contact-form" type="form" #default="{ state: { valid } }" :actions="false" @submit="handleCreateContact">
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 mb-16">
      <div class="col-span-1">
        <FormKit
            type="text"
            name="name"
            id="name"
            label="Nom complet"
            help="Votre nom complet"
            :placeholder="fullName"
            v-model="message.name"
            validation="required|alpha:latin"
            validation-visibility="blur"
            :validation-messages="{
              required: 'Le nom est obligatoire',
              alpha: 'Le nom ne doit contenir que des lettres'
            }"
        />
        <FormKit
            type="text"
            name="title"
            id="title"
            label="Votre demande"
            help="Objet de la demande"
            placeholder="Demande de devis"
            v-model="message.title"
            validation="required"
            validation-visibility="blur"
            :validation-messages="{
              required: 'L\'objet de la demande est obligatoire',
            }"
        />
        <FormKit
            type="email"
            name="email"
            id="email"
            label="Adresse email"
            help="Votre adresse email"
            :placeholder="email"
            v-model="message.email"
            validation="required|email"
            validation-visibility="blur"
            :validation-messages="{
              required: 'L\'email est obligatoire',
              email: 'L\'email n\'est pas valide'
            }"
        />
        <FormKit
            type="text"
            name="phone"
            id="phone"
            label="Téléphone"
            help="Votre numéro de téléphone"
            placeholder="06 12 34 56 78"
            v-model="message.phone"
        />
      </div>
      <div class="col-span-2">
        <FormKit
            type="textarea"
            name="message"
            id="message"
            label="Message"
            help="Votre message"
            placeholder="Bonjour, je souhaiterais obtenir un devis pour..."
            v-model="message.message"
            validation="required|length:10"
            validation-visibility="blur"
            :validation-messages="{
              required: 'Le message est obligatoire',
              length: 'Le message doit contenir au moins 10 caractères'
            }"
        ></FormKit>
        <FormKit
            type="submit"
            label="Envoyer"
            wrapper-class="grid grid-cols-1 place-items-center"
            input-class="w-full mx-auto py-2 $remove:flex"
            :disabled="!valid"
        />
        <div class="flex w-full justify-between mt-16">
          <div class="w-1/3 grid grid-cols-1">
            <Icon name="clarity:phone-handset-line" size="64" class="text-primary mx-auto mb-4"/>
            <span class="text-center">Tel : <a href="tel:0751673240">07 51 67 32 40</a></span>
          </div>
          <div class="w-1/3 grid grid-cols-1">
            <Icon name="clarity:envelope-line" size="64" class="text-primary mx-auto mb-4"/>
            <span class="text-center">E-mail : <a
                href="mailto:arnaud.pointet@gmail.com">arnaud.pointet@gmail.com</a></span>
          </div>
          <div class="w-1/3 grid grid-cols-1">
            <Icon name="clarity:house-line" size="64" class="text-primary mx-auto mb-4"/>
            <address class="text-center">7 rue des docteurs Thery - 33210 Langon</address>
          </div>
        </div>
      </div>
    </div>
  </FormKit>
</template>

<style scoped>

</style>
