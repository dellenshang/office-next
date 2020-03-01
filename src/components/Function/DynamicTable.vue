<template>
    <div>
      <Table :columns="columns1" :data="data1" ref="tabel">
        <template v-for="(item, i) of arr" slot-scope="{ row }" :slot="item">
          <Input v-model="row[item]" @on-blur="bb(row)" :key="i"/>
        </template>
        <template slot-scope="{ row }" slot="address">
          <Button @click="ff()" ref="btn">{{ row.address }}</Button>
        </template>
      </Table>
      <Button @click="as">asdasd</Button>
      <Button @click="as1">ddddd</Button>
    </div>
</template>
<style lang="scss" scoped>
/deep/.ivu-table-fixed, .ivu-table-fixed-right {
  top: -8px;
}
</style>
<script>
export default {
  name: 'DynamicTable',
  data() {
    return {
      index: 0,
      a: {
        renderHeader: (h, params) => {
          return (
            <Input
              style="width:100%"
              propsValue={this.xixi[params.index - 1]}
              on-on-blur={this.handleEnter.bind(this, params)}
            ></Input>
          )
        }
      },
      xixi: [],
      columns1: [
        {
          title: '勤务年数',
          key: 'age',
          fixed: 'left',
          width:80,
        },
        {
          renderHeader: (h, params) => {
            return (
              <Input
                style="width:100%"
                propsValue={this.xixi[params.index - 1]}
                on-on-blur={this.handleEnter.bind(this, params)}
              ></Input>
            )
          },
          width:80,
          slot: 'address'
        }
      ],
      arr: [],
      data1: [
        {
          name: 'John Brown',
          age: '勤务日数',
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }
      ]
    }
  },
  methods: {
    as() {
      // 增加一列
      const sa = { ...this.a, slot: `v${++this.index}` }
      this.arr.push(`v${this.index}`)
      this.columns1.splice(-1, 0, sa)
      this.xixi.push('')
      this.columns1[this.columns1.length - 2].fixed = ''
      this.columns1[this.columns1.length - 1].fixed = this.arr.length > 5 ? 'right' : ''
      this.data1 = this.data1.map(e => {
        return { ...e, [`v${this.index}`]: '' }
      })
    },
    ff() {
      // 单击从而减少一行
      this.columns1.splice(-2, 1)
      this.xixi.splice(-2, 1)
      this.arr.pop()
      this.data1 = this.data1.map(e => {
        delete e[`v${this.index}`]
        return e
      })
      this.index--
      console.log(this.xixi)
    },
    bb(r) {
      const i = this.data1.findIndex((e, i) => i === r._index)
      this.data1[i] = r
    },
    as1() {
      // 增加一行
      let obj = this.data1[this.data1.length - 1]
      console.log(this.data1)
      Object.keys(obj).forEach(key => (obj[key] = ''))
      this.data1.push(obj)
    },
    handleEnter(p, e) {
      console.log(p.index)
      this.xixi[p.index - 1] = e.target.value
    }
  }
}
</script>
