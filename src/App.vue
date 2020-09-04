<template>
  <div id="app">
    <app-header />
    <item-input />
    <item />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppHeader from '@/components/Header.vue'
import ItemInput from '@/components/ItemInput.vue'
import Item from '@/components/Item.vue'

@Component({
  components: {
    AppHeader,
    ItemInput,
    Item
  }
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
