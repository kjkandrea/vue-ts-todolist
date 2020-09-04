<template>
  <div>
  <h1>TODO LIST 👻</h1>
  <ul class="nav nav-pills">
    <li role="presentation" class="active"><a href="#">All</a></li>
    <li role="presentation"><a href="#">Active</a></li>
    <li role="presentation"><a href="#">Clear</a></li>
  </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}
</script>

<style>
.nav {
  margin-bottom: 20px;
}
</style>
