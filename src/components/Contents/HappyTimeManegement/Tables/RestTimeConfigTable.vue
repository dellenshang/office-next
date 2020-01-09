<template>
  <Table border :columns="columns" v-loading="loading" :data="data">
    <template slot-scope="{ row , index }" slot="name">
      <Input
        type="text"
        v-model="row.name"
        :maxlength="30"
        @on-blur="handleBlur($event.target.value, row, data[index].name)"
      />
    </template>

    <template slot-scope="{ row, index }" slot="paid">
      <i-switch v-model="row.paid" @on-change="checkThis(index)" size="large">
        <span slot="open">有休</span>
      </i-switch>
    </template>

    <template slot-scope="{ row, index }" slot="law">
      <i-switch v-model="row.law" @on-change="checkThis(index)" size="large">
        <span slot="open">法定</span>
      </i-switch>
    </template>
    <template v-if="fixProMode" slot-scope="{ row }" slot="check">
      <Checkbox style="transform: translateX(3px)" @click.native="show($event, row)" />
    </template>
  </Table>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'RestTimeConfigTable',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: Array
  },
  data() {
    return {
      fetchSign: false,
      value: [],
      fixProMode: true,
      columns: [
        {
          title: 'ID',
          key: 'restTypeId',
          width: 50,
          align: 'center'
        },
        {
          title: '休暇名称',
          slot: 'name'
        },
        {
          title: '有休フラッグ',
          slot: 'paid',
          width: 120,
          align: 'center'
        },
        {
          title: '法律フラッグ',
          slot: 'law',
          width: 120,
          align: 'center'
        },
        {
          title: '対象',
          align: 'center',
          width: 80,
          slot: 'check'
        }
      ]
    }
  },
  updated: function() {
    this.value = []
  },
  beforeUpdate: function() {
    this.fixProMode = !this.fixProMode
    setTimeout(() => {
      this.fixProMode = !this.fixProMode
    })
  },
  computed: {},
  methods: {
    handleBlur(e, row, old) {
      if (e === '') {
        const id = row.restTypeId
        return this.$Modal.warning({
          title: `ID ${id}`,
          content: '名称を入れてください。'
        })
      }
      if (e.trim() != old) {
        this.checkThis(row._index)
      }
    },
    checkThis(i) {
      const checkBoxs = this.getcha.allChildrens(this, 'Checkbox')
      if (checkBoxs[i].currentValue === false) {
        checkBoxs[i].$el.click()
      }
    },
    show(e, row) {
      const currentId = row._index
      if (e.target.checked) {
        const isExist = this.value.some(e => e._index === currentId)
        if (isExist) {
          return
        }
        this.value.push(row)
      }
      if (e.target.checked === false) {
        this.value = this.value.filter(e => e._index !== currentId)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
