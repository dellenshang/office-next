<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-departmentr colored"></Icon>{{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <!-- 三个按钮 -->
          <!-- <i-switch v-model="horizontal">
            <span slot="open">水平</span>
            <span slot="close">垂直</span>
          </i-switch> -->
          <i-switch v-model="expand">
            <span slot="open">展開</span>
            <span slot="close">閉め</span>
          </i-switch>
          <Button
            @click.native="download"
            type="warning"
            ghost
            size="large"
            :loading="deptLoading"
            icon="ios-cloud-download-outline"
          >情報出力</Button>
          <RefreshBotton @refresh="onRefresh"/>
        </div>
      </div>
    </div>
    <div class="searchwrap">
      <span class="label">所属</span>
      <Cascader v-model="searchLevel" class="mr10" style="width: 200px;" :data="data" :render-format="handleCascaderView" filterable change-on-select @on-visible-change="handleSearch"></Cascader>
    </div>
    <div class="content_body">
      <OrgTree @add="onAdd" @delete="onDelete" @update="onUpdate" @confirmer="onConfirmer" :expand="expand" :horizontal="horizontal"/>
    </div>
    <Modal v-model="modal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>注意</span>
      </p>
      <div style="text-align:center">
        <h3>{{`${deleteValue.name}`}}</h3>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="loading" @click="del">删除</Button>
      </div>
    </Modal>
  </Content>
</template>

<style lang="scss" scoped>
/deep/.ivu-switch {
  margin: 5px 15px 0 0;
  width: 68px;
  height: 28px;
  .ivu-switch-inner {
    line-height: 27px;
    font-size: 1.2rem;
  }
  &:after {
    top: 2px;
    left: -2px;
    width: 22px;
    height: 22px;
  }
  &.ivu-switch-checked:after {
    left: 46px;
    top: 2px;
  }
}
/deep/.ivu-input {
  font-size:12px
}
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
import { mapState } from 'vuex'
const { mapActions } = createNamespacedHelpers('department')
import OrgTree from '../../Function/OrgTree/OrgTree'
import { Debounce } from '@/api/utils'
import Buttons from '../../Buttons'
export default {
  name: 'DepartmentRegister',
  components: {
    OrgTree,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      modal: false,
      deleteValue: {},
      loading: false,
      deptLoading: false,
      searchLevel: [],
      expand: true,
      horizontal: true,
      fetchfix: true
    }
  },
  computed: {
    ...mapState(['dept']),
    data() {
      return this.dept.searchList
    }
  },
  created() {
    // this.Action_Dept_Get()
  },
  activated() {
    if (this.fetchfix) {
      return this.fetchfix = false
    }
    // this.Action_Dept_Get()
  },
  methods: {
    ...mapActions([
      'Action_Dept_Get',
      'Action_Dept_Add',
      'Action_Dept_Update',
      'Action_Dept_Delete',
      'Action_Dept_Init'
    ]),
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    },
    onAdd(value) {
      value.deptId = null
      this.Action_Dept_Add({ context: this, value: [value] })
    },
    onUpdate(value) {
      this.Action_Dept_Update({ context: this, value: [value] })
    },
    onDelete(value) {
      this.modal = true
      this.deleteValue = value
    },
    del() {
      this.Action_Dept_Delete({
        context: this,
        value: [this.deleteValue.deptId]
      })
    },
    onRefresh() {
      this.Action_Dept_Init().then(() => {
        this.$Message.success('再表示完了')
        this.searchLevel = []
      })
    },
    onConfirmer: Debounce(function(value) {
      console.log(value)
    }),
    handleSearch(visibleStatus) {
      if (!visibleStatus) {
        this.$nextTick(()=>{
          const id = this.searchLevel[this.searchLevel.length - 1]
          this.Action_Dept_Get({ id })
        })
      }
    },
    async download() {
      try {
        this.deptLoading = true
        await this.api.output('depy', { isOutput: false })
        window.open(`${this.domain}/io/dept/list?isOutput=true`, '_blank')
      } catch (e) {
      } finally {
        this.deptLoading = false
      }
    }
  }
}
</script>
