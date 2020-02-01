<template>
  <div>
    <PetTable
    species='cats'
    :pets="cats"
    />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'
export default {
  components: {
    PetTable
  },
  data () {
    return {
      // cats: ['a', 'f', 'e', 'g', 'f']
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
