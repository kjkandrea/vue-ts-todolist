<template>
  <div>
    <item v-for="item in renderList" :id="item.id" :title="item.title" :status="item.status" :key="item.id" />
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
        'clearTodoList',
    ]),
  },
})
export default class ItemList extends Vue {
  public renderList: any[] = [];

  public created() {
    this.$store.dispatch('initData');
  }

  public initRenderList(status: 'active'|'clear') {
    if (!status) {
      this.renderList = this.allTodoList;
    } else if (status === 'active') {
      this.renderList = this.activeTodoList;
    } else if (status === 'clear') {
      this.renderList = this.clearTodoList;
    }
  }

  @Watch('$route.params.status')
  public routeUpdate(newValue: 'active'|'clear') {
    this.initRenderList(newValue);
  }

  @Watch('$store.state.todoList', {deep: true})
  public routeUpdate() {
    this.initRenderList(this.$route.params.status);
  }
}
</script>
