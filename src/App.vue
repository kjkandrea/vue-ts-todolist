<template>
  <div id="app">
    <app-header />
    <item-input />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppHeader from '@/components/Header.vue';
import ItemInput from '@/components/ItemInput.vue';

@Component({
  components: {
    AppHeader,
    ItemInput,
  },
})
export default class App extends Vue {

}
</script>

<style>
  #app {
    width: fit-content;
    max-width: 620px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
