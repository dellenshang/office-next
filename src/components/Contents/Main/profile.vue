<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-profile colored"></Icon>個人情報変更
          </h1>
        </div>
      </div>
    </div>
    <div class="content_body">
      <Table :columns="columns1" :data="data1" ref="tabel">
        <template v-for="(item,i) of arr" slot-scope="{ row }" :slot="item">
          <Input v-model="row[item]" @on-blur="bb(row)" />
        </template>
        <template slot-scope="{ row }" slot="address">
          <button @click="ff()" ref="btn">{{row.address}}</button>
        </template>
      </Table>
      <Button @click="as">asdasd</Button>
      <Button @click="as1">ddddd</Button>
    </div>
  </Content>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  data() {
    return {
      index: 0,
      a: {
        renderHeader: (h, params) => {
          let vm = (
            <Input
              style="width:100%"
              propsValue={this.xixi[params.index - 1]}
              on-on-blur={this.handleEnter.bind(this, params)}
            ></Input>
          )
          return vm
        }
      },
      xixi: [],
      columns1: [
        {
          title: 'Age',
          key: 'age'
        },
        {
          renderHeader: (h, params) => {
            let vm = (
              <Input
                style="width:100%"
                propsValue={this.xixi[params.index - 1]}
                on-on-blur={this.handleEnter.bind(this, params)}
              ></Input>
            )
            return vm
          },
          slot: 'address'
        }
      ],
      arr: [],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    as() {
      const sa = { ...this.a, slot: `v${++this.index}` }
      this.arr.push(`v${this.index}`)
      this.columns1.splice(-1, 0, sa)
      this.xixi.push('')
      this.data1 = this.data1.map(e => {
        return { ...e, [`v${this.index}`]: '' }
      })
    },
    ff(r) {
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
