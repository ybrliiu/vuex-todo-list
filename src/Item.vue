<template>
  <div>
    <md-checkbox
      @click="DONE_TASK(item)"
      v-model="item.is_do">
      {{ item.title }}
    </md-checkbox>
  </div>
</template>
 
<script>
import { mapActions } from 'vuex'
import * as types from './store/mutation-types';
 
export default {
  props: ['item'],
  methods: {
    ...mapActions([
      types.DONE_TASK
    ])
  }
}
</script>

<style lang="scss" scoped>
  div {
    cursor: pointer;
  }
  div.is-do {
    text-decoration: line-through;
  }
</style>
