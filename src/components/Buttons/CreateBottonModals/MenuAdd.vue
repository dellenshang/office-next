<template>
  <div>
    <Form ref="localValue" :model="localValue" :rules="ruleValidate" :label-width="120">
          <Tabs v-model="localValue.type">
        <TabPane label="目录" name="0" icon="ios-list-box">
            <FormItem label="目录名称" prop="name" style="width:95%">
            <Input v-model="localValue.name" placeholder="目录名称" :maxlength="4"/>
          </FormItem>
          <FormItem label="上级菜单" prop="parentId" style="width:95%">
            <Cascader v-model="parentArray" :data="casMenu" :render-format="handleCascaderView" change-on-select transfer></Cascader>
          </FormItem>
          <FormItem label="排序号">
             <InputNumber style="width:93.5%" :max="4" :min="0" v-model="localValue.orderNum"  placeholder="排序号" :editable="false"/>
          </FormItem>
          <FormItem label="目录图标" style="width:95%">
            <Input v-model="localValue.icon" placeholder="目录图标" :maxlength="15"></Input>
          </FormItem>
        </TabPane>
        <TabPane label="菜单" name="1" icon="ios-menu">
          <FormItem label="菜单名称" prop="name" style="width:95%">
            <Input v-model="localValue.name" placeholder="目录名称" :maxlength="4"/>
          </FormItem>
          <FormItem label="上级菜单" prop="parentId" style="width:95%">
            <Cascader v-model="parentArray" :data="casMenu" :render-format="handleCascaderView" change-on-select></Cascader>
          </FormItem>
          <FormItem label="菜单路由" style="width:95%">
            <Input v-model="localValue.url" placeholder="菜单图标" :maxlength="40"></Input>
          </FormItem>
          <FormItem label="菜单图标" style="width:95%">
            <Input v-model="localValue.icon" placeholder="菜单图标" :maxlength="15"></Input>
          </FormItem>
          <FormItem label="排序号">
             <InputNumber style="width:93.5%" :max="4" :min="0" v-model="localValue.orderNum"  placeholder="排序号" :editable="false"/>
          </FormItem>
        </TabPane>
        <TabPane label="按钮" name="2" icon="ios-radio-button-on">
          <FormItem label="按钮名称" prop="name" style="width:95%">
            <Input v-model="localValue.name" placeholder="按钮名称" :maxlength="4"/>
          </FormItem>
          <FormItem label="上级菜单" prop="parentId" style="width:95%">
            <Cascader v-model="parentArray" :data="casMenu" :render-format="handleCascaderView" change-on-select></Cascader>
          </FormItem>
          <FormItem label="授权标识" style="width:95%">
            <Input v-model="localValue.perms" placeholder="菜单图标" :maxlength="40"></Input>
          </FormItem>
        </TabPane>
    </Tabs>
    </Form>
    <div class="my-footer">
      <Button type="text" @click="cancel">キャンセル</Button>
      <Button class="my-add" type="success" size="large" @click="add('localValue')">追加</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-footer {
  text-align: right;
  margin-top: 0.3rem;
  margin-bottom: -0.3rem;
  font-size: 2rem;
}
.my-add {
  margin-left: 0.5rem;
}
.radio-fix {
  width: 95%;
  padding: 5px 5px 6px 5px;
  border: 1px solid $input-border-grey;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MenuAdd',
  components: {},
  data: function() {
    return {
      localValue: {
        name: '',
        parentId: '',
        type: '0',
        icon: '',
        url: '',
        perms: '',
        orderNum: null
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: '名称を入力してください',
            trigger: 'blur'
          }
        ],
        parentId: [
          {
            required: true,
            message: '上级菜单を選択してください',
            trigger: 'blur'
          }
        ]
      },
      parentArray: []
    }
  },
  computed: {
    ...mapState(['auth']),
    casMenu() {
      return this.auth.casMenu
    }
  },
  methods: {
    add(name) {
      // this.$refs[name].validate(valid => {
      //   if (valid) {
      //     this.$emit('add')
      //   }
      // })
      // console.log(this.$refs.tree.getCheckedNodes())
      // console.log(this.$refs.tree.getSelectedNodes())
      // this.localValue = {...this.localValue,
      //   parentId:this.parentArray[this.parentArray.length - 1],
      //   type:parseInt(this.localValue.type)
      //   }
      this.localValue.parentId = this.parentArray[this.parentArray.length - 1]
      this.localValue.type = parseInt(this.localValue.type)
      this.$emit('add')
    },
    cancel() {
      this.$emit('cancel')
    },
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    }
  }
}
</script>
