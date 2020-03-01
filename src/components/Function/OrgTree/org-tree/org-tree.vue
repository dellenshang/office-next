<template>
  <div class="org-tree" :class="{ horizontal, collapsable }">
    <org-tree-node
      :data="dataCloned"
      :props="props"
      :horizontal="horizontal"
      :label-width="labelWidth"
      :collapsable="collapsable"
      :node-render="nodeRender"
      :button-render="buttonRender"
      :label-class-name="labelClassName"
      @on-expand="handleExpand"
      @on-node-click="handleNodeClick"
      v-bind="$listeners"
    ></org-tree-node>
  </div>
</template>

<script>
import render from './node'
export default {
  name: 'VOrgTree',
  components: {
    OrgTreeNode: {
      render,
      functional: true
    }
  },
  props: {
    data: {
      type: [Object, Array],
      required: true
    },
    props: {
      type: Object,
      default: () => ({
        id: 'deptId',
        label: 'name',
        expand: 'expand',
        children: 'children'
      })
    },
    horizontal: Boolean,
    collapsable: Boolean,
    nodeRender: Function,
    buttonRender: Function,
    labelWidth: [String, Number],
    labelClassName: [Function, String],
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      flatData: {},
      dataCloned: {}
    }
  },
  watch: {
    data: {
      handler(newData) {
        // 数据更新时，先存到dataCloned中
        this._handleData(newData)
        // 遍历每个树状节点，判断它在flatData的状态，之前有那么现在还有
        // 可以理解为数据更新后重置树的状态
        this._mapData(this.dataCloned, item => {
          const { expand } = this.flatData[item[this.prop_id]] || {}
          if (expand) this.$set(item, this.prop_expand, true)
        })
        this._toggleExpand(this.dataCloned, this.expandAll)
      },
      // immediate: true,
      deep: true
    },
    expandAll(status) {
      this._toggleExpand(this.dataCloned, status)
    }
  },
  computed: {
    prop_id() {
      return this.props.id
    },
    prop_label() {
      return this.props.label
    },
    prop_expand() {
      return this.props.expand
    },
    prop_children() {
      return this.props.children
    }
  },
  methods: {
    _handleData(data) {
      this._cloneData(data)
    },
    _cloneData(newData) {
      this.dataCloned = this.utils.deepClone(newData)
    },
    _setFlatData(data) {
      this.flatData[data[this.prop_id]] = data
    },
    /**
     * @description 工具方法，用于遍历树状数据的每个节点， fn为在该节点做的操作，其有一个参数即当前节点数据
     */
    _mapData(data, fn) {
      fn(data)
      const children = data[this.prop_children]
      if (children) {
        children.forEach(child => {
          this._mapData(child, fn)
        })
      }
    },
    /**
     * @description 用来便利所有节点数据，将树状数据扁平化存放到flatData，用于数据更新后展开状态的恢复
     */
    _updateExpandStatus() {
      this._mapData(this.dataCloned, this._setFlatData)
    },
    collapse(list) {
      let _this = this
      list.forEach(child => {
        if (child[this.prop_expand]) {
          child[this.prop_expand] = false
        }
        const children = child[this.prop_children]
        children && _this.collapse(children)
      })
    },
    handleExpand(data) {
      if (this.prop_expand in data) {
        data[this.prop_expand] = !data[this.prop_expand]
        const children = data[this.prop_children]
        if (!data[this.prop_expand] && children) {
          this.collapse(children)
        }
      } else {
        this.$set(data, this.prop_expand, true)
      }
      this.$emit('on-expand', data, data[this.prop_expand])
      this._updateExpandStatus()
    },
    _toggleExpand(data, status) {
      let _this = this
      if (Array.isArray(data)) {
        data.forEach(item => {
          _this.$set(item, this.prop_expand, status)
          const children = item[this.prop_children]
          if (children) {
            _this._toggleExpand(children, status)
          }
        })
      } else {
        _this.$set(data, this.prop_expand, status)
        const children = data[this.prop_children]
        if (children) {
          _this._toggleExpand(children, status)
        }
      }
    },
    handleNodeClick(e, data) {
      this.$emit('on-node-click', e, data, () => {
        console.log('xxx')
        // this.handleExpand(data)
      })
    },
    toggleExpand() {
      this._toggleExpand(this.dataCloned, this.expandAll)
      this._updateExpandStatus()
    }
  },
  mounted() {
    this._handleData(this.data)
    this._updateExpandStatus()
    this._toggleExpand(this.dataCloned, this.expandAll)
  }
}
</script>

<style lang="css" scoped>
.org-tree-container {
  display: inline-block;
  padding: 15px;
  background-color: #fff;
}
.org-tree {
  display: table;
  text-align: center;
}
.org-tree:after,
.org-tree:before {
  content: '';
  display: table;
  pointer-events: none;
}
.org-tree:after {
  clear: both;
  pointer-events: none;
}
.org-tree-node,
.org-tree-node-children {
  position: relative;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
}
.org-tree-node-children:after,
.org-tree-node-children:before,
.org-tree-node:after,
.org-tree-node:before {
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  pointer-events: none;
}
.org-tree-node-label {
  position: relative;
  display: inline-block;
}
.org-tree-node-label .org-tree-node-label-inner {
  text-align: center;
  border: 1px solid rgb(220, 222, 226);
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}
.org-tree-button-wrapper {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  z-index: 10;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.org-tree-button-wrapper > * {
  position: absolute;
  top: 50%;
  left: 50%;
}
.org-tree-button-wrapper .org-tree-node-btn {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  -webkit-transform: translate(-50%, 9px);
  transform: translate(-50%, 9px);
}
.org-tree-button-wrapper .org-tree-node-btn:hover {
  background-color: #e7e8e9;
  -webkit-transform: translate(-50%, 9px) scale(1.15);
  transform: translate(-50%, 9px) scale(1.15);
}
.org-tree-button-wrapper .org-tree-node-btn:after,
.org-tree-button-wrapper .org-tree-node-btn:before {
  content: '';
  position: absolute;
  pointer-events: none;
}
.org-tree-button-wrapper .org-tree-node-btn:before {
  top: 50%;
  left: 4px;
  right: 4px;
  height: 0;
  border-top: 1px solid #ccc;
}
.org-tree-button-wrapper .org-tree-node-btn:after {
  top: 4px;
  left: 50%;
  bottom: 4px;
  width: 0;
  border-left: 1px solid #ccc;
  pointer-events: none;
}
.org-tree-button-wrapper .org-tree-node-btn.expanded:after {
  border: none;
  pointer-events: none;
}
.org-tree-node {
  padding-top: 20px;
  display: table-cell;
  vertical-align: top;
}
.org-tree-node.collapsed,
.org-tree-node.is-leaf {
  padding-left: 10px;
  padding-right: 10px;
}
.org-tree-node:after,
.org-tree-node:before {
  pointer-events: none;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 19px;
}
.org-tree-node:after {
  left: 50%;
  border-left: 1px solid #ddd;
  pointer-events: none;
}
.org-tree-node:not(:first-child):before,
.org-tree-node:not(:last-child):after {
  border-top: 1px solid #ddd;
  pointer-events: none;
}
.collapsable .org-tree-node.collapsed {
  padding-bottom: 30px;
}
.collapsable .org-tree-node.collapsed .org-tree-node-label:after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 50%;
  height: 20px;
  border-right: 1px solid #ddd;
  pointer-events: none;
}
.org-tree > .org-tree-node {
  padding-top: 0;
}
.org-tree > .org-tree-node:after {
  border-left: 0;
  pointer-events: none;
}
.org-tree-node-children {
  padding-top: 20px;
  display: table;
}
.org-tree-node-children:before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 20px;
  border-left: 1px solid #ddd;
}
.org-tree-node-children:after {
  content: '';
  display: table;
  clear: both;
  pointer-events: none;
}
.horizontal .org-tree-node {
  display: table-cell;
  float: none;
  padding-top: 0;
  padding-left: 20px;
}
.horizontal .org-tree-node.collapsed,
.horizontal .org-tree-node.is-leaf {
  padding-top: 10px;
  padding-bottom: 10px;
}
.horizontal .org-tree-node:after,
.horizontal .org-tree-node:before {
  width: 19px;
  height: 50%;
  pointer-events: none;
}
.horizontal .org-tree-node:after {
  top: 50%;
  left: 0;
  border-left: 0;
  pointer-events: none;
}
.horizontal .org-tree-node:only-child:before {
  top: 1px;
  border-bottom: 1px solid #ddd;
}
.horizontal .org-tree-node:not(:first-child):before,
.horizontal .org-tree-node:not(:last-child):after {
  border-top: 0;
  border-left: 1px solid #ddd;
  pointer-events: none;
}
.horizontal .org-tree-node:not(:only-child):after {
  border-top: 1px solid #ddd;
  pointer-events: none;
}
.horizontal .org-tree-node .org-tree-node-inner {
  display: table;
}
.horizontal .org-tree-node-label {
  display: table-cell;
  vertical-align: middle;
}
.horizontal.collapsable .org-tree-node.collapsed {
  padding-right: 30px;
}
.horizontal.collapsable .org-tree-node.collapsed .org-tree-node-label:after {
  top: 0;
  left: 100%;
  width: 20px;
  height: 50%;
  border-right: 0;
  border-bottom: 0.625em solid #ddd;
  pointer-events: none;
}
.horizontal .org-tree-button-wrapper {
  position: absolute;
  top: 50%;
  left: 100%;
  width: 0;
  height: 0;
  z-index: 10;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.horizontal .org-tree-button-wrapper > * {
  position: absolute;
  top: 50%;
  left: 50%;
}
.horizontal .org-tree-button-wrapper .org-tree-node-btn {
  display: inline-block;
  -webkit-transform: translate(9px, -50%);
  transform: translate(9px, -50%);
}
.horizontal > .org-tree-node:only-child:before {
  border-bottom: 0;
}
.horizontal .org-tree-node-children {
  display: table-cell;
  padding-top: 0;
  padding-left: 20px;
}
.horizontal .org-tree-node-children:before {
  top: 50%;
  left: 0;
  width: 20px;
  height: 0;
  border-left: 0;
  border-top: 1px solid #ddd;
}
.horizontal .org-tree-node-children:after {
  display: none;
}
.horizontal .org-tree-node-children > .org-tree-node {
  display: block;
}
</style>
