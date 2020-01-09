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
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
      <div class="searchwrap">
        <span class="label">キーワード</span>
        <Input
          @on-search="getData"
          class="mar like-select"
          v-model="opts.keyword"
          search
          enter-button
        />
        <span class="place-holder"></span>
      </div>
    </div>
    <div class="content_body">
    <div class="table-top">
      <Row :gutter="16">
        <Col span="24" class="text-right">
          <Page
            :total="pageValue.amount"
            :current="pageValue.curPage"
            show-total
            show-sizer
            :page-size="pageValue.curSize"
            :page-size-opts="pageValue.list"
            @on-change="pageChange"
            @on-page-size-change="sizeChange" ref="Page"/>
        </Col>
      </Row>
    </div>
    <el-table :data="data" row-key="auditId" border stripe v-loading="loading" empty-text="データなし">
      <el-table-column prop="username" label="用户名" width="100" align="center"></el-table-column>
      <el-table-column prop="operation" label="操作" width="100" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" width="100" align="center">
        <template slot-scope="scope">
          <Button type="success" ghost v-if="scope.row.status">OK</Button>
          <Button type="error" ghost v-else>Bad</Button>
        </template>
      </el-table-column>
      <el-table-column prop="ip" label="IP" width="120" align="center"></el-table-column>
      <el-table-column prop="userAgent" label="终端"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180" align="center"></el-table-column>
    </el-table>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
.place-holder {
  flex: 1;
}
/deep/.like-select {
  width: 15%;
  top: 0;
  .ivu-input-group-append {
    background: $table-head !important;
    border: none;
    &:hover {
      background: $theme-blue !important;
    }
  }
}
</style>

<script>
import Buttons from '../../Buttons'
export default {
  name: 'ErrorLog',
  components: {
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      loading: false,
      searchLevel: [],
      data: [],
      pageValue: {
        amount: 0,
        curPage: 1,
        list: [20, 30, 50, 100],
        curSize: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      },
      opts: {
        order: 'desc',
        page: null,
        keyword: null,
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20,
      },
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        this.loading = true
        const { data } = await this.api.log('login', this.opts)
        this.data = data.list
        this.pageValue.amount = data.totalCount
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    onRefresh() {
      this.opts.page = null
      this.pageValue.curPage = 1
      this.getData()
      this.$Message.success('再表示完了')
    },
    pageChange(e) {
      this.opts.page = e
      this.pageValue.curPage = e
      this.getData()
    },
    sizeChange(e) {
      this.opts.limit = e
      this.pageValue.curSize = val
      this.utils.setStorage('SO_userSettings', { pageSize: e })
      this.getData()
    },
  }
}
</script>
