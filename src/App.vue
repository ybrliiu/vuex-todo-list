<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">TODO List</span>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <md-content class="md-scrollbar">
          <item v-for="(item, index) in items" :item="item" :key="index"></item>
        </md-content>
        <md-field>
          <label>タスク名</label>
          <md-input v-model="inputTitle"></md-input>
        </md-field>
        <md-button
          @click="addTask(inputTitle)"
          class="md-dense md-raised md-primary">
          追加
        </md-button>
        <md-button
          @click="REMOVE_TASK()"
          class="md-dense md-raised md-primary">
          削除
        </md-button>
      </md-app-content>
    </md-app>
  </div>
</template>
 
<script>
import { mapState, mapActions } from 'vuex'
import * as types from './store/mutation-types';
import Item from './Item.vue'
 
export default {
  name: 'app',
  components: {
    Item
  },
  data () {
    return {
      inputTitle: "",
      menuVisible: false,
    }
  },
  computed: {
    ...mapState(['items'])
  },
  methods: {
    addTask(inputTitle) {
      this.$store.dispatch(types.ADD_TASK, this.inputTitle);
      this.inputTitle = '';
    },
    ...mapActions([
      types.ADD_TASK,
      types.REMOVE_TASK,
    ]),
  }
}
</script>

<style lang="scss" scoped>
.md-scrollbar {
  height: 300px;
  overflow: auto;
}
</style>
