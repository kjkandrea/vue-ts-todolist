<template>
  <div class="form-group">
    <input type="text"
           class="form-control"
           v-model="title"
           @keyup.enter="addItem"
           placeholder="할일을 입력하세요">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState([
        'todoList',
    ]),
    lastId(): number {
      return this.todoList[this.todoList.length - 1].id;
    },
  },
})
export default class ItemInput extends Vue {
  public title: string = '';

  public addItem($event: Event) {
    this.$store.commit('addItem', {
      id: this.lastId + 1,
      title: this.title,
      status: 'active',
    });

    $event.target.value = '';
  }
}
</script>
