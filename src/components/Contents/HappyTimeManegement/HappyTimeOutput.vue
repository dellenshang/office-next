<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1><Icon type="i-profile colored"></Icon>{{ $route.meta.name }}</h1>
        </div>
      </div>
    </div>
    <div class="content_body">
      <Card title="グループ指定" class="card">
        <Alert type="error" v-if="errorInfo" class="error-info mt10">{{
          errorMsg
        }}</Alert>
        <Divider class="mb10" size="small" orientation="left">年度</Divider>
        <Row>
          <Col span="24">
            <DatePicker
              type="year"
              class="mb10 non-border-input"
              style="width: 450px;margin-bottom:20px"
              v-model="localValue.year"
              format="yyyy年度"
              placement="bottom-end"
              placeholder="年度"
              :clearable="false"
              :editable="false"
            ></DatePicker>
          </Col>
        </Row>
        <Divider class="mb10" size="small" orientation="left">有給休暇取得</Divider>
        <Row>
          <Col span="15">
            <Cascader
              v-model="searchLevel"
              class="non-border-input"
              style="margin-bottom:20px"
              :data="data"
              :render-format="handleCascaderView"
              placeholder="グループ"
              filterable
              change-on-select
              @on-visible-change="handleSearch"
            ></Cascader>
          </Col>
          <Col span="8">
            <Button
              type="primary"
              style="width:40%"
              class="mr10"
              ghost
              icon="md-download"
              :loading="deptLoading"
              @click="downLoadByExcel"
            >一覧</Button>
             <Button
              type="primary"
              style="width:40%"
              ghost
              icon="md-download"
              :loading="empolyeeLoading"
              @click="downLoadByPdf"
            >詳細</Button>
          </Col>
        </Row>
      </Card>
    </div>
  </Content>
</template>
<style lang="scss" scoped>
.content_body {
  display: flex;
  align-items: center;
}
.error-info {
  text-align: center;
  font-size: 14px;
  color: $red;
  margin-top: 10px;
  border: $error-border;
}
.label {
  display: inline-block;
  width: 100%;
  line-height: 32px;
  background-color: $form-label;
  color: $white;
}
/deep/ {
  &.ivu-input,
  &.ivu-select-selection {
    border-radius: 0;
  }
  &.non-border-input {
    input, .ivu-cascader-label {
      font-size: 14px;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid $input-border-grey;
      box-shadow: none;
      text-align: center;
      color: $primary;
      font-weight: bold;
      &::placeholder {
        font-weight: normal;
        color: $text-light-grey;
      }
      &:focus {
      border-color: $login-input-border-active;
     }
      &:hover {
      border-color: $login-input-border-active;
     }
    }
    .ivu-select-selection {
      border: none;
      box-shadow: none;
    }
    .ivu-input-suffix,
    .ivu-cascader-arrow,
    .ivu-select-arrow {
      display: none;
    }
  }
}

.card {
  left: 50%;
  width: 800px;
  padding-bottom: 15px;
  transform: translateX(-50%);
  .btn {
    margin-top: 25px;
  }
}
</style>
<script>
import { createNamespacedHelpers } from 'vuex'
import { mapState } from 'vuex'
const { mapActions } = createNamespacedHelpers('department')
import { Debounce } from '@/api/utils'
export default {
  name: 'HappyTimeOutput',
  data: function() {
    return {
      localValue: {
        id: '',
        deptId: '',
        year: new Date()
      },
      searchLevel: [],
      errorInfo: false,
      errorMsg: '',
      deptLoading: false,
      empolyeeLoading: false,
      empolyeeList: []
    }
  },
  created() {
    this.getData()
  },
  computed: {
    ...mapState(['dept']),
    data() {
      return this.dept.searchList
    }
  },
  methods: {
    ...mapActions(['Action_Get_Dept_SearchList']),
    onUpdate() {},
    async getData() {
      const { data } = await this.api.user('view')
      this.empolyeeList = data
    },
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    },
    handleSearch(visibleStatus) {
      if (!visibleStatus) {
        this.$nextTick(() => {
          this.localValue.deptId = this.searchLevel[this.searchLevel.length - 1]
        })
      }
    },
    async downLoadByExcel() {
      if (!this.localValue.deptId) {
        this.errorInfo = true
        return (this.errorMsg = '所属を選んでください。')
      }
      const year = this.utils.formatDate(this.localValue.year, 'YYYY')
      try {
        // 因为是跳出下载的，不能让用户直接看到请求错误的页面
        this.deptLoading = true
        await this.api.output('paidVactionByGroup', {
          deptId: this.localValue.deptId,
          year,
          isOutput: false
        })
        window.open(
          `${this.domain}/io/vacation/apply/list?deptId=${this.localValue.deptId}&year=${year}&isOutput=true`,
          '_blank'
        )
      } catch (e) {
      } finally {
        this.errorInfo = false
        this.deptLoading = false
      }
    },
    async downLoadByPdf() {
      if (!this.localValue.deptId) {
        this.errorInfo = true
        return (this.errorMsg = '所属を選んでください。')
      }
      const year = this.utils.formatDate(this.localValue.year, 'YYYY')
      try {
        this.empolyeeLoading = true
        await this.api.output('paidVactionByEmployee', { deptId: this.localValue.deptId, year, isOutput: false })
        window.open(
          `${this.domain}/io/vacation/apply/user?deptId=${this.localValue.deptId}&year=${year}&isOutput=true`,
          '_blank'
        )
      } catch (e) {
      } finally {
        this.errorInfo = false
        this.empolyeeLoading = false
      }
    }
  }
}
</script>
