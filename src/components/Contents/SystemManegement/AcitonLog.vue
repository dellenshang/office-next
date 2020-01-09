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
      <el-table-column prop="username" label="用户名" width="100"></el-table-column>
      <el-table-column prop="operation" label="操作" width="200"></el-table-column>
      <el-table-column prop="url" label="请求路径"></el-table-column>
      <el-table-column prop="time" label="耗时(ms)" width="100"></el-table-column>
      <el-table-column prop="ip" label="IP" width="100"></el-table-column>
      <el-table-column prop="message" label="详情" width="100" align="center">
        <template slot-scope="scope">
          <Button type="primary" ghost @click="handleMsg(scope.row)">详情</Button>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180" align="center"></el-table-column>
    </el-table>
    <Drawer :title="drawer.username" :closable="false" v-model="isShow" width="30">
      <div class="label mt10">{{drawer.operation}}</div>
      <div class="label mt10">{{drawer.url}}</div>
      <div class="label mt10">方法</div><strong>{{ drawer.method }}</strong>
      <div class="label mt10">参数</div>
      <textarea cols="75" rows="10" style="font-size:15px">{{ drawer.params }}</textarea>
    </Drawer>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
.place-holder {
  flex: 1;
}
.label {
  line-height: 32px;
  background-color: $form-label;
  color: $white;
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
  name: 'AcitonLog',
  components: {
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      loading: false,
      searchLevel: [],
      data: [],
      isShow: false,
      drawer:{},
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
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        this.loading = true
        const { data } = await this.api.log('operation', this.opts)
        this.data = data.list
        this.pageValue.amount = data.totalCount
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    handleMsg(e) {
      this.isShow = true
      this.drawer = { ...e }
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
      this.pageValue.curSize = e
      this.utils.setStorage('SO_userSettings', { pageSize: e })
      this.getData()
    }
  }
}
</script>
