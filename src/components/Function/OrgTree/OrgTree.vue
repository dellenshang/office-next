<template>
  <orgTree
    v-if="data"
    :data="data"
    :horizontal="horizontal"
    :node-render="nodeRender"
    :expand-all="expand"
    @on-node-click="handleNodeClick"
    collapsable
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import orgTree from './org-tree/org-tree'
export default {
  name: 'OrgTree',
  components: {
    orgTree
  },
  props: {
    expand: {
      type: Boolean,
      default: true
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    typeCode: {
      type: [String, Number],
      default: 99
    }
  },
  data() {
    return {
      // flag是更新的some递归停止的信号
      flag: false
    }
  },
  computed: {
    ...mapState(['dept']),
    data() {
      return this.dept.list
    }
  },
  methods: {
    ...mapMutations(['setDept_List']),
    handleNodeClick() {
      console.log('nurenre')
      this.flag = false
    },
    nodeRender(h, data) {
      return (
        <Poptip trigger="focus" title="">
          <Input
            class={['custom-org-node', 'no-shadow', data.children && data.children.length ? 'has-children-label' : '']}
            maxlength={40}
            propsValue={data.name}
            on-on-enter={this.handleEnter.bind(this, data)}
            on-on-blur={this.handleEnter.bind(this, data)}
          />
          {data.isAdd ? (
            ''
          ) : (
            <div class={'admin-warp'} onClick={this.openModal.bind(this, data)}>
              {!data.approveAgentList ||
              this.typeCode === 99 ||
              data.approveAgentList.findIndex(e => e.typeCode === this.typeCode) < 0 ? (
                <p class={['admin', 'work']}>{data.leaderId ? `${data.leaderCode} ${data.leaderName}` : '＋ 所属長'}</p>
              ) : (
                <p class={['admin', 'rest']}>{this.handleApprovalConfirmer(data, this)}</p>
              )}
            </div>
          )}
          <div class={'operateBtn'} slot="content">
            {!data.isAdd && data.deptId !== 1 ? (
              <a onClick={this.handleDelete.bind(this, data)}>{this.$t('master.dept.delete')}</a>
            ) : (
              ''
            )}
            {!data.isAdd ? <a onClick={this.handleAdd.bind(this, data)}>{this.$t('master.dept.add')}</a> : <a>保存</a>}
            <div />
          </div>
        </Poptip>
      )
    },
    handleAdd(data, e) {
      e.stopPropagation()
      this.flag = false
      this.setDept_List({
        deptId: data.deptId,
        context: this,
        arr: this.dept.list,
        isleaf: false,
        isAdd: true
      })
    },
    handleEnter(data, e) {
      e.stopPropagation()
      this.setDept_List({
        deptId: data.deptId,
        context: this,
        arr: this.dept.list,
        name: e.target.value,
        isleaf: false
      })
      if (data.name === e.target.value || e.target.value.length < 2) return
      if (data.isAdd) {
        this.$emit('add', { ...data, name: e.target.value })
      } else {
        this.$emit('update', { ...data, name: e.target.value })
      }
    },
    openModal(data, e) {
      e.stopPropagation()
      this.$emit('confirmer', data)
    },
    handleDelete(data, e) {
      e.stopPropagation()
      this.$emit('delete', data)
    },
    handleApprovalConfirmer(data, context) {
      let name = ''
      data.approveAgentList.some(e => {
        if (e.typeCode === context.typeCode) {
          name = `${e.approvalCode} ${e.approvalName}`
          return true
        }
      })
      console.log(name)
      return name
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.operateBtn {
  @include flex-row('center');
  a {
    flex: 1;
    font-size: 15px;
    &:nth-child(2n) {
      margin-left: 10px;
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 15px;
        right: 74px;
        height: 22px;
        width: 1px;
        transform: scaleX(0.3);
        background-color: rgba(102, 102, 102, 0.478);
      }
    }
  }
}
/deep/ .org-tree-node-label-inner {
  padding: 0;
}
/deep/.custom-org-node .ivu-input {
  border: none !important;
}

/deep/.admin-warp {
  .admin {
    white-space: nowrap;
    transition: transform 0.2s;
    cursor: pointer;
    &.work {
      color: $theme-blue;
      background-color: aliceblue;
    }
    &.rest {
      color: $red;
      background-color: $light-pink;
      opacity: 0.8;
      left: 75%;
      top: 71%;
    }
  }
  &:hover {
    animation: rotate 1s ease infinite alternate;
  }
}
</style>
