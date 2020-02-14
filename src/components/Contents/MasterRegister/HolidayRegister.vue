<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1><Icon type="i-holidayr colored"></Icon>祝日登録</h1>
        </div>
        <div class="btnbox">
          <!-- 三个按钮 -->
          <CreateBotton v-auth="['add']" @add="onAdd" name="HolidayAdd" />
          <UpdateBotton v-auth="['update']" @update="onUpdate" />
          <DeleteBotton v-auth="['delete']" @remove="onRemove" />
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
      <div class="searchwrap">
        <span class="label">年</span>
        <Select v-model="selectedYear" @on-change="changeYear()">
          <Option
            v-for="(item, index) of yearList"
            :value="item"
            :key="index"
            >{{ item }}</Option
          >
        </Select>
        <div style="flex:1"></div>
      </div>
    </div>
    <div class="content_body">
      <HolidayTable ref="tableData" />
    </div>
  </Content>
</template>

<style lang="scss" scoped></style>

<script>
import { Debounce } from '@/api/utils'
import { mapState, mapMutations, mapActions } from 'vuex'
import HolidayTable from './Tables/HolidayTable'
import Buttons from '../../Buttons'
export default {
  name: 'HolidayRegister',
  components: {
    HolidayTable,
    DeleteBotton: Buttons.DeleteBotton,
    UpdateBotton: Buttons.UpdateBotton,
    RefreshBotton: Buttons.RefreshBotton,
    CreateBotton: Buttons.CreateBotton
  },
  data: function() {
    return {
      value: {
        holidayDate: '',
        memo: '',
        lawOrSetVacationFlg: ''
      },
      forReset: false
    }
  },
  created: function() {
    // this.getData()
  },
  computed: {
    ...mapState(['holidayList', 'currentYear']),
    yearList: function() {
      // 这里暂考虑和原系统一致
      let fromYear = new Date().getFullYear() - 10
      let arrYears = []
      for (let i = 0; i <= 11; fromYear++) {
        arrYears.push(fromYear)
        i++
      }

      return arrYears
    },
    selectedYear: {
      get() {
        return this.currentYear
      },
      set(value) {
        this.updateCurrentYear(value)
      }
    }
  },
  methods: {
    ...mapMutations(['updateCurrentYear']),
    ...mapActions([
      'Action_Holiday_Get',
      'Action_Holiday_Add',
      'Action_Holiday_Update',
      'Action_Holiday_Delete'
    ]),
    getData() {
      this.Action_Holiday_Get(this.currentYear)
    },
    onAdd() {
      const add = this.getcha.nearChildren(this, 'HolidayAdd').localValue
      this.forReset = !this.forReset
      if (add) {
        this.Action_Holiday_Add([add]).then(() =>
          this.$Message.success('追加完了')
        )
      }
    },
    async onRemove() {
      // 日付フォーマット変換
      const selectedID = this.$refs.tableData.value.map(e => e.id)
      const minDate = Math.min(...selectedID)
        .toString()
        .replace(
          /(^[0-9]{4})([0-9]{2})([0-9]{2}$)/g,
          (match, $1, $2, $3) => `${$1}-${$2}-${$3}`
        )
      if (selectedID.length !== 0) {
        if (new Date(minDate) < new Date()) {
          this.$Modal.confirm({
            title: '注意',
            content: `<h3>過去の日が指定されています。
          <br>平日→祝日に変更、または祝日を削除しようとしている過去の日に、
          <br>出勤されている人がいる場合、休日出勤の扱いなどは自動的に
          <br>変更されませんのでご注意ください。
          <br>削除します。よろしいですか？</h3>`,
            onOk: () => {
              return this.Action_Holiday_Delete(selectedID).then(() =>
                this.$Message.success('削除完了')
              )
            }
          })
          return
        }
        return this.Action_Holiday_Delete(selectedID).then(() =>
          this.$Message.success('削除完了')
        )
      }
      return this.$Modal.warning({
        title: '注意',
        content: '選択した項目がないので、削除できませんでした。'
      })
    },
    async onUpdate() {
      const selectedObject = this.$refs.tableData.value
      if (selectedObject.length !== 0) {
        return this.Action_Holiday_Update(selectedObject).then(() =>
          this.$Message.success('更新完了')
        )
      }
      return this.$Modal.warning({
        title: '注意',
        content: '修正した項目がないので、保存できませんでした。'
      })
    },
    onRefresh() {
      this.Action_Holiday_Get(this.currentYear).then(() => {
        this.$Modal.success({ title: '再表示成功しました。' })
      })
    },
    changeYear() {
      this.Action_Holiday_Get(this.currentYear)
    }
  }
}
</script>
