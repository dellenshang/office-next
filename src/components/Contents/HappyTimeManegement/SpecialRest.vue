<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-emeer colored"></Icon>{{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <CreateBotton v-auth="['add']" @add="onAdd" name="RestTypeAdd"/>
          <UpdateBotton v-auth="['update']" @update="onUpdate"/>
          <DeleteBotton v-auth="['delete']" @remove="onRemove"/>
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
    </div>
    <div class="content_body">
    </div>
  </Content>
</template>

<style lang="scss" scoped>
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('restType')
import { Debounce } from '@/api/utils'
import Buttons from '../../Buttons'
export default {
  name: 'SpecialRest',
  components: {
    CreateBotton: Buttons.CreateBotton,
    DeleteBotton: Buttons.DeleteBotton,
    UpdateBotton: Buttons.UpdateBotton,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      filterName: '',
      loading: false,
    }
  },
  created() {
  },
  computed: {
    ...mapState(['list']),
  },
  methods: {
    ...mapActions([
    ]),
    onAdd() {
    },
    onUpdate() {
    },
    onRemove() {
    },
    onRefresh() {
    }
  }
}
</script>
