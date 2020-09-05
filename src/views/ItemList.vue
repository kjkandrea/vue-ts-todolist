<template>
  <div>
    <item v-for="item in renderList" :id="item.id" :title="item.title" :status="item.status"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Item from '@/components/Item.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    Item,
  },
  computed: {
    ...mapGetters([
        'allTodoList',
        'activeTodoList',
        'clearTodoList'
    ])
  }
})
export default class ItemList extends Vue {
  public renderList: any[] = []

  created() {
    this.renderList = this.allTodoList
  }

  @Watch('$route.params.status')
  public routeUpdate(newValue: string) {
    if (!newValue) {
      this.renderList = this.allTodoList;
    } else if (newValue === 'active') {
      this.renderList = this.activeTodoList
    } else if (newValue === 'clear') {
      this.renderList = this.clearTodoList
    }
  }
}
</script>
