<template>
  <div class="py-20 container mx-auto flex flex-col gap-12">
    Vitesse - Formkit

    <FormKit
      v-model="selected"
      type="select"
      name="state"
      label="State"
      :options="{
        ca: 'California',
        ny: 'New York',
        va: 'Virginia'
      }"
    />
    <pre>selected: {{ selected }}</pre>
  </div>
</template>

<script setup lang="ts">
const selected = ref(null)
</script>
