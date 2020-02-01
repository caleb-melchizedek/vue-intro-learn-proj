<template>
  <div>
    <PetTable
    species="dogs"
    :pets="dogs"
    />
  </div>
</template>

<script>
import PetTable from '@/components/PetTable.vue'
import { mapState } from 'vuex'
export default {
  components: {
    PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
