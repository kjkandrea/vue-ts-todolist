<template>
  <div>
  <h1>TODO LIST 👻</h1>
  <ul class="nav nav-pills">
    <li role="presentation" class="active"><router-link to="/">All</router-link></li>
    <li role="presentation"><router-link to="/active">Active</router-link></li>
    <li role="presentation"><router-link to="/clear">Clear</router-link></li>
  </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style>
.nav {
  margin-bottom: 20px;
}
</style>
