<template>
  <div class="upload-wrap">
    <Upload
      ref="upload"
      accept=".png, .jpg, .jpeg"
      :show-upload-list="false"
      :max-size="2048"
      :before-upload="handleUpload"
      action="/"
      type="drag"
    >
      <slot></slot>
    </Upload>
    <Modal
      v-model="isShow"
      width="650"
      title="顔写真アップロード"
      @on-cancel="cancel"
      footer-hide
      :mask-closable="false"
      draggable
    >
      <Row>
        <Col span="10">
          <div class="crop-area" v-if="imageUrl">
            <VueCropper
              ref="cropper"
              :img="imageUrl"
              :outputSize="option.size"
              :outputType="option.outputType"
              :info="true"
              :full="option.full"
              :canMove="option.canMove"
              :canMoveBox="option.canMoveBox"
              :fixedBox="option.fixedBox"
              :original="option.original"
              :autoCrop="option.autoCrop"
              :autoCropWidth="option.autoCropWidth"
              :autoCropHeight="option.autoCropHeight"
              :centerBox="option.centerBox"
              :high="option.high"
              :maxImgSize="option.maxImageSize"
              :enlarge="option.enlarge"
              @realTime="realTime"
              :mode="option.mode"
            />
          </div>
        </Col>
        <Col span="12" offset="2">
          <div class="label">プレビュー</div>
          <div
            v-if="previews"
            class="show-preview"
            :style="{
              width: previews.w + 'px',
              height: previews.h + 'px',
              overflow: 'hidden',
              margin: '5px',
              'border-radius': '50%'
            }"
          >
            <div :style="previews.div">
              <img :src="previews.url" :style="previews.img" />
            </div>
          </div>
        </Col>
      </Row>
      <Button class="mtb20" @click="upload" type="primary" long>アップロード</Button>
    </Modal>
  </div>
</template>
<style lang="scss" scoped>
.crop-area {
  display: inline-block;
  width: 320px;
  height: 320px;
}
.show-preview {
  display: inline-block;
}
.label {
  line-height: 32px;
  margin-top: 10px;
  background-color: $form-label;
  color: $white;
  width: 280px;
  position: relative;
  top: -12px;
  left: 25px;
}
.ivu-upload-drag {
  width: 180px;
  height: 180px;
}
</style>
<script>
import { VueCropper } from 'vue-cropper'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
export default {
  name: 'AvatarUpload',
  components: {
    VueCropper
  },
  data() {
    return {
      isShow: false,
      option: {
        size: 1,
        full: false,
        outputType: 'png',
        canMove: true,
        // 是否固定裁剪框尺寸
        fixedBox: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        centerBox: false,
        high: false,
        enlarge: 1,
        mode: 'contain',
        maxImageSize: 2000
      },
      imageUrl: null,
      previews: null
    }
  },
  methods: {
    ...mapActions(['Action_User_Info_Get']),
    cancel() {
      this.isShow = false
    },
    handleUpload(file) {
      // 通过mime type,所有图片都会带有image
      if (file.type.indexOf('image') < 0) {
        this.$Message.error('フォーマットはpng | jpg | jpeg | svgです')
        return false
      }
      const reader = new FileReader()
      reader.onload = e => (this.imageUrl = e.target.result)
      // 将图片转为base64
      reader.readAsDataURL(file)
      // 转化为blob
      // reader.readAsArrayBuffer(file)
      // 返回 false 停止自动上传
      return false
    },
    realTime(data) {
      this.previews = data
    },
    upload() {
      this.$refs.cropper.getCropData(async base64Img => {
        try {
          await this.api.profile('avatarUpload', { avatar: base64Img })
          this.Action_User_Info_Get()
          this.$Message.success('上传成功')
          this.isShow = false
        } catch (e) {
          console.log(e)
        }
      })
    }
  },
  watch: {
    imageUrl(url) {
      if (url) {
        this.isShow = true
        this.cancelTxt = '重新选择图片'
      } else {
        this.isShow = false
        this.cancelTxt = '取消'
      }
    }
  }
}
</script>
