<template>
  <Table
    ref="tableData"
    stripe
    class="big-font-size-table"
    v-loading="loading"
    :columns="columns"
    :data="data"
  >
    <template slot-scope="{ row }" slot="dateList">
      <span>{{ handleApplyDayShow(row.dateList) }}</span>
    </template>

    <template slot-scope="{ row }" slot="empName">
      <span>{{ `${row.code} ${row.empName}` }}</span>
    </template>

    <template slot-scope="{ row }" slot="progressList">
      <ul style="display:flex;justify-content: center">
        <li
          style="margin-right:10px"
          v-for="(item, index) of row.progressList"
          :key="index"
        >
          <span>{{ `${item.name} ` }}</span>
          <span :class="handleApplyMarkShow(item.status)" />
        </li>
      </ul>
    </template>

    <template slot-scope="{ row }" slot="restTypeName">
      <span :class="row.typeId === 1 ? '' : 'description'">{{ row.restTypeName }}</span>
    </template>
  </Table>
</template>

<style lang="scss" scoped>
.apply-status {
  display: inline-block;
  width: 20px;
  height: 20px;
  padding-left: 0.5px;
  box-shadow: 0px 1px 4px 0px $box-shadow;
  border-radius: 50%;
  &.ok {
    color: $theme-blue;
    background-color: $light-blue;
    &:after {
      content: '済';
    }
  }
  &.deny {
    color: $red;
    background-color: $light-pink;
    &:after {
      content: '否';
    }
  }
  &.ing {
    color: $text-green;
    background-color: $table-td-hover;
    &:after {
      content: '申';
    }
  }
}
.description:after {
  content: '有';
  position: relative;
  top: -1px;
  font-weight: normal;
  font-size: 13px;
  color: $theme-blue;
  background-color: $light-blue;
  box-shadow: 0px 1px 2px 0px $box-shadow;
  margin-left: 5px;
  padding: 1px 3px;
  border-radius: 50%;
}
</style>
<script>
export default {
  name: 'ApplyConfirmTable',
  props: {
    data: Array,
    loading: Boolean
  },
  data: function() {
    return {
      columns: [
        {
          title: '申請日時',
          key: 'createTime',
          minWidth: 50,
          maxWidth: 160,
          tooltip: true
        },
        {
          title: '申請者',
          slot: 'empName',
          minWidth: 100,
          maxWidth: 200
        },
        {
          title: '申請内容',
          slot: 'restTypeName',
          tooltip: true,
          minWidth: 105,
          maxWidth: 200
        },
        {
          title: '対象日',
          slot: 'dateList',
          minWidth: 190,
          maxWidth: 200
        },
        {
          title: '承認フロー',
          slot: 'progressList',
          align: 'center',
          minWidth: 254
        },
        {
          title: '申請理由',
          key: 'remark',
          tooltip: true,
          minWidth: 70
        },
        {
          type: 'selection',
          width: 50,
          align: 'center'
        }
      ]
    }
  },
  methods: {
    handleApplyDayShow(e) {
      if (e.length === 1) {
        return e.join('')
      }
      return `${e[0]} ～ ${e[e.length - 1]}`
    },
    handleApplyMarkShow(e) {
      switch (e) {
        case 0:
          return 'apply-status ing'
        case 1:
          return 'apply-status ok'
        case 2:
          return 'apply-status deny'
        case 3:
          return 'apply-status ok'
        default:
          return 'apply-status'
      }
    }
  }
}
</script>
