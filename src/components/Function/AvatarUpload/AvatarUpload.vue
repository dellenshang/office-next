<template>
  <div>
    <Upload
      ref="upload"
      accept=".png, .jpg, .jpeg"
      :show-upload-list="false"
      :max-size="2048"
      :before-upload="handleUpload"
      action="/"
      type="drag"
      style="display: inline-block;width:33vw;">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
      </div>
    </Upload>
    <Modal
      v-model="isShow"
      title="sssss"
      @on-cancel="cancel"
      footer-hide
      :mask-closable="false">
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
          :mode="option.mode"/>
      </div>
      <div
        v-if="previews"
        class="show-preview"
        :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px', 'border-radius': '50%'}">
        <div :style="previews.div">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </div>
      <Button @click="upload">sssss</Button>
    </Modal>
  </div>
</template>
<style lang="scss" scoped>
.crop-area {
  height: 380px;
}
</style>
<script>
import { VueCropper } from 'vue-cropper'

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
        fixedBox: false,
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
    cancel() {
      this.isShow = false
    },
    handleUpload(file) {
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
          await this.api.profile('avatarUpload', {avatar:base64Img})
          this.$Message.success('上传成功')
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
