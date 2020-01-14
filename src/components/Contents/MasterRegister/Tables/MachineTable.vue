<template>
  <Table border :columns="columns" :data="data" :loading="loading">
    <template slot-scope="{ row }" slot="serialNo">
      <span>{{ row.serialNo }}</span>
    </template>

    <template slot-scope="{ row, index }" slot="setPlace">
      <Input
        type="text"
        v-model="row.setPlace"
        @on-blur="handleCheck($event.target.value, row, data[index].setPlace)"
      />
    </template>

    <template v-if="fixProMode" slot-scope="{ row }" slot="check">
      <Checkbox @click.native="show($event, row)"></Checkbox>
    </template>
  </Table>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MachineTable',
  data() {
    return {
      columns: [
        {
          title: '端末番号',
          slot: 'serialNo',
          key: 'serialNo',
          width: 100,
          align: 'center'
        },
        {
          title: '設置場所メモ',
          slot: 'setPlace',
          key: 'setPlace',
          align: 'center'
        },
        {
          title: '対象',
          width: 65,
          align: 'center',
          slot: 'check'
        }
      ],
      fetchSign: false,
      value: [],
      data: [
    {
      serialNo: "T1901P0210",
      setPlace: "大森E館",
      updateUserId: 1,
      updateDateTime: "2019-06-01 00:00:00"
    },
    {
      serialNo: "T1901P0296",
      setPlace: "大森B館",
      updateUserId: 3,
      updateDateTime: "2019-07-16 11:51:37"
    },
    {
      serialNo: "T1901P0295",
      setPlace: "京都支社",
      updateUserId: 3,
      updateDateTime: "2019-07-16 14:15:22"
    },
    {
      serialNo: "T1901P0293",
      setPlace: "ナバルビル",
      updateUserId: 3,
      updateDateTime: "2019-07-16 17:13:24"
    },
    {
      serialNo: "T1901P0294",
      setPlace: "札幌支社",
      updateUserId: 3,
      updateDateTime: "2019-07-17 10:05:45"
    },
    {
      serialNo: "T1901P0297",
      setPlace: "仙台支社",
      updateUserId: 3,
      updateDateTime: "2019-07-17 10:38:15"
    },
    {
      serialNo: "T1901P0211",
      setPlace: "大阪支社",
      updateUserId: 1,
      updateDateTime: "2019-12-13 17:02:31"
    },
    {
      serialNo: "T123456789",
      setPlace: "北海道",
      updateUserId: 138,
      updateDateTime: "2020-01-14 10:05:46"
    }
  ],
      fixProMode: true
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
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    handleCheck(e, row, old) {
      if (e === '') {
        const id = row.serialNo
        return this.$Modal.warning({
          title: `端末番号 ${id}`,
          content: '設置場所を入れてください。'
        })
      }

      if (e !== old) {
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
