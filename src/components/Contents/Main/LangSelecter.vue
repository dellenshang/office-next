<template>
  <div class="layout-lang">
    <Dropdown @on-click="handleLang" trigger="click">
      <a>
        <Avatar style="margin-left:10px;">{{$t("login.lang")}}</Avatar>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem v-for="item of langList" :value="item" :name="item" :key="item">{{ item }}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<style lang="scss" scoped>
.layout-lang {
  position: absolute;
  right: 20px;
  top: 0;
  padding-right: 10px;
  line-height: 50px;
}
</style>

<script>
export default {
  name: 'LangSelecter',
  components: {},
  data: function() {
    return {
      selectedLang: '',
      langList: ['日本語', 'english', '中文']
    }
  },
  computed: {},
  methods: {
    handleLang(lang) {
      if (lang === '日本語') {
        localStorage.setItem('locale', 'ja_jp')
        this.$i18n.locale = 'ja_jp'
      }
      if (lang === 'english') {
        localStorage.setItem('locale', 'en_us')
        this.$i18n.locale = 'en_us'
      }
      if (lang === '中文') {
        localStorage.setItem('locale', 'zh_ch')
        this.$i18n.locale = 'zh_ch'
      }
    }
  }
}
</script>
