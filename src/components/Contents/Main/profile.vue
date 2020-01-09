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
      <Card title="パスワード変更" class="card">
        <Form :label-width="150" ref="localValue" :model="localValue" :rules="ruleValidate">
          <FormItem label="社員名">
            <Input :value="userInfoText" readonly></Input>
          </FormItem>
          <FormItem label="旧パスワード" prop="oldPassword">
            <Input
              ref="oldPassword"
              v-model="localValue.oldPassword"
              type="password"
              placeholder="旧パスワード"
            ></Input>
          </FormItem>
          <FormItem label="新パスワード" prop="newPassword">
            <Input v-model="localValue.newPassword" type="password" placeholder="新パスワード"></Input>
          </FormItem>
          <FormItem label="新パスワード (確認)" prop="repeatPassword">
            <Input v-model="localValue.repeatPassword" type="password" placeholder="新パスワード (確認)"></Input>
          </FormItem>
        </Form>
        <Button style="margin-top: 24px" type="primary" long @click="onUpdate" icon="md-create">保存</Button>
      </Card>
      <Card title="カスタマイズ" class="card second">
        <Divider size="small" orientation="left">表の枠線の濃さ</Divider>
        <Slider
          class="slider"
          v-model="colorC"
          @on-change="handleCurColor"
          @on-input="handleColorC"
        ></Slider>
        <div class="table-border" ref="p" />
        <Divider size="small" orientation="left">メインラベルの色</Divider>
        <Row>
          <Col span="5">
            バック：
            <ColorPicker
              :value="labelBGC"
              @on-active-change="handleReactiveLabelBackgroudColor"
              @on-open-change="setLabelBackgroudColor"
              :colors="recommendBGC"
            />
          </Col>
          <Col span="5">
            文字：
            <ColorPicker
              :value="labelColor"
              @on-active-change="handleReactiveLabelColor"
              @on-open-change="setLabelColor"
              :colors="recommendColors"
            />
          </Col>
          <Col span="12" offset="1">
            <div class="label-custom" ref="label">ラベル</div>
          </Col>
        </Row>
        <Button class="btn" type="primary" long @click="customize" icon="md-create">保存</Button>
        <Button
          style="margin-top:5px"
          type="primary"
          ghost
          long
          @click="resetCustomize"
          icon="md-refresh"
        >リセット</Button>
      </Card>
      <Card title="個人情報" class="card second">
        <Form
          :label-width="150"
          ref="personalInfoValue"
          :model="personalInfoValue"
          :rules="personalValidate"
        >
          <FormItem label="氏名" prop="realName">
            <Input v-model="personalInfoValue.realName" placeholder="氏名" />
          </FormItem>
          <FormItem label="年齢">
            <InputNumber :max="200" :min="0" style="width:100%" v-model="personalInfoValue.age" />
          </FormItem>
          <FormItem label="性別">
            <RadioGroup v-model="personalInfoValue.gender" class="radio-fix">
              <Radio :label="0">
                <span>未知</span>
              </Radio>
              <Radio :label="1">
                <span>男</span>
              </Radio>
              <Radio :label="2">
                <span>女</span>
              </Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="メール" prop="email">
            <Input v-model="personalInfoValue.email" placeholder="メールアドレス" />
          </FormItem>
          <FormItem label="生年月日">
            <DatePicker
              type="date"
              format="yyyy-MM-dd"
              :value="personalInfoValue.birthDate"
              @on-change="personalInfoValue.birthDate = $event"
              placeholder="生年月日"
              style="width:100%"
            ></DatePicker>
          </FormItem>
          <FormItem label="入社年月日" prop="hireDate" placeholder="入社年月日">
            <DatePicker
              type="date"
              format="yyyy-MM-dd"
              :value="personalInfoValue.hireDate"
              @on-change="personalInfoValue.hireDate = $event"
              placeholder="入社年月日"
              style="width:100%"
            ></DatePicker>
          </FormItem>
        </Form>
        <Button class="btn" type="primary" long @click="updatePersonalInfo" icon="md-create">保存</Button>
      </Card>
    </div>
  </Content>
</template>
<style lang="scss" scoped>
// 备用颜色
// background: $form-bg-grey;
.content_body {
  display: flex;
  align-items: flex-start;
}

.card {
  width: 20vw;
  margin: 10px 0 0 10px;
  &.second {
    width: 33vw;
    .slider {
      display: inline-block;
      width: 40%;
      margin: 30px 30px 30px 0;
    }
    .table-border {
      display: inline-block;
      width: 50%;
      height: 90px;
      border: 1px solid;
      &::before {
        content: '';
        display: inline-block;
        position: relative;
        height: 89px;
        border-right: 1px solid;
        border-color: inherit;
      }
    }
  }
  .btn {
    margin-top: 25px;
  }
}
.label-custom {
  line-height: 32px;
}
.radio-fix {
  display: flex;
  width: 100%;
  padding: 5px 5px 6px 5px;
  border: 1px solid $input-border-grey;
}
</style>
<script>
import { createNamespacedHelpers } from 'vuex'
import { mapMutations } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('user')
import { Throttle, customize } from '@/api/utils'
export default {
  name: 'profile',
  data: function() {
    const passwordConfirm = (rule, value, callback) => {
      if (this.localValue.newPassword !== this.localValue.repeatPassword) {
        return callback(
          new Error(
            '新パスワード(確認)には、新パスワードと同じパスワードを入力してください。'
          )
        )
      }
      callback()
    }
    const emailValidator = (rule, value, callback) => {
      if (!value) return callback()
      if (/^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(value)) {
        return callback()
      }
      return callback(new Error('正しく入力してください。'))
    }
    return {
      localValue: {
        oldPassword: '',
        newPassword: '',
        repeatPassword: ''
      },
      ruleValidate: {
        oldPassword: [
          {
            required: true,
            message: '旧パスワードを入力してください。',
            trigger: 'blur'
          }
        ],
        newPassword: [
          {
            required: true,
            message: '新パスワードを入力してください。',
            trigger: 'blur'
          }
        ],
        repeatPassword: {
          required: true,
          validator: passwordConfirm,
          trigger: 'blur'
        }
      },
      personalValidate: {
        email: [
          {
            required: false,
            validator: emailValidator,
            trigger: 'blur'
          }
        ],
        realName: [
          {
            required: true,
            message: '入力してください。',
            trigger: 'blur'
          }
        ],
        hireDate: {
          required: true,
          message: '選択してください。',
          trigger: 'blur'
        }
      },
      colorC: 10,
      curColor: this.utils.getStorage('customize', 'tableBorderColor') || 230,
      labelColor: this.utils.getStorage('customize', 'labelColor') || '#fff',
      labelBGC: this.utils.getStorage('customize', 'labelBGC') || '#84b2ef',
      recommendColors: ['#FFFFFF', '#FFF300', '#00FF0C'],
      recommendBGC: ['#84b2ef', '#4F8BF3', '#AC6FFA', '#11AC5F', '#D07924']
    }
  },
  mounted() {
    this.$refs.p.style.borderColor = `rgb(${this.curColor},${this.curColor},${this.curColor})`
    this.colorC = 100 - Math.round(this.curColor / 2.55)
    this.$refs.label.style.backgroundColor = this.labelBGC
    this.$refs.label.style.color = this.labelColor
  },
  computed: {
    ...mapState(['userInfo']),
    userInfoText() {
      return this.userInfo.empInfo
        ? `${this.userInfo.empInfo.code} ${this.userInfo.empInfo.realName}`
        : `${this.userInfo.username}`
    },
    personalInfoValue() {
      return this.userInfo.empInfo
        ? this.utils.deepClone(this.userInfo.empInfo)
        : { gender: 0, age: 0 }
    }
  },
  methods: {
    ...mapMutations(['clearRoutes']),
    ...mapActions(['Action_User_Info_Get']),
    onUpdate() {
      this.$refs.localValue.validate(async valid => {
        if (valid) {
          try {
            const { data } = await this.api.system(
              'updateUserPassword',
              this.localValue
            )
            this.$Message.success('更新完了')
            localStorage.removeItem('SO_login')
            this.clearRoutes()
            this.$router.push('/')
          } catch (error) {
            this.localValue.oldPassword = ''
          } finally {
            this.$refs['localValue'].resetFields()
          }
        }
      })
    },
    updatePersonalInfo() {
      this.$refs.personalInfoValue.validate(async valid => {
        if (valid) {
          try {
            this.personalInfoValue.sex = this.personalInfoValue.gender
            await this.api.system(
              'updateUserInfo',
              this.personalInfoValue
            )
            this.$Message.success('更新完了')
          } catch (error) {
          } finally {
            this.Action_User_Info_Get()
            this.$refs['personalInfoValue'].resetFields()
          }
        }
      })
    },
    handleColorC: Throttle(function(e) {
      if (!e) {
        return
      }
      const value = 255 - 255 * (e / 100)
      this.$refs.p.style.borderColor = `rgb(${value},${value},${value})`
    }, 100),
    handleCurColor(e) {
      this.curColor = 255 - 255 * (e / 100)
    },
    handleReactiveLabelBackgroudColor: Throttle(function(e) {
      if (!e) {
        return
      }
      this.$refs.label.style.backgroundColor = e
    }, 100),
    setLabelBackgroudColor(bool) {
      if (!bool) this.labelBGC = this.$refs.label.style.backgroundColor
    },
    handleReactiveLabelColor: Throttle(function(e) {
      if (!e) {
        return
      }
      this.$refs.label.style.color = e
    }, 100),
    setLabelColor(bool) {
      if (!bool) this.labelColor = this.$refs.label.style.color
    },
    customize() {
      this.$Modal.confirm({
        title: '注意',
        content: `<h3>保存してよろしいですか？<h3>`,
        onOk: () => {
          this.utils.setStorage('customize', {
            tableBorderColor: this.curColor,
            labelBGC: this.labelBGC,
            labelColor: this.labelColor
          })
          customize()
          this.$Message.success('更新完了')
        }
      })
    },
    resetCustomize() {
      this.$Modal.confirm({
        title: '注意',
        content: `<h3>リセットしてよろしいですか？<h3>`,
        onOk: () => {
          localStorage.removeItem('customize')
          history.go(0)
        }
      })
    }
  }
}
</script>
