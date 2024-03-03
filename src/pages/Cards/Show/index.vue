<template>
  <q-page>
    <div class="q-pa-md example-row-offsetting-columns">
      <div class="row">
        <component-cards />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComponentCards from 'src/components/Cards/Index.vue'
export default defineComponent({
  name: 'ShowCard',
  components: {
    ComponentCards,
  },
})
</script>
