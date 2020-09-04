<template>
  <div>
    <item v-for="item in renderList" :id="item.id" :title="item.title" :status="item.status"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Item from '@/components/Item.vue';

@Component({
  components: {
    Item,
  },
})
export default class ItemList extends Vue {
  public data: any[] = [
    {id: 0, title: 'test', status: 'active'},
    {id: 1, title: 'test1', status: 'active'},
    {id: 2, title: 'test2', status: 'clear'},
  ];

  public renderList: any[] = this.data;

  @Watch('$route.params.status')
  public routeUpdate(newValue: string) {
    console.log(newValue)
    if (!newValue) {
      this.renderList = this.data;
    } else if (newValue === 'active' || newValue === 'clear') {
      this.renderList = this.data.slice().filter((item: any) => {
        return item.status === newValue;
      });
    }
  }
}
</script>

<style scoped>

</style>
