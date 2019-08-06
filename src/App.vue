<template>
  <el-container id="app">
    <el-header class="md-ih-header">
      <div class="md-ih-container">
        <section class="md-ih-header_left">
          <img class="md-ih-header-logo" src="https://manhattan.didistatic.com/static/manhattan/mand/docs/mand-logo-black.svg" alt="">
          <span class="md-ih-header-name">Mand Mobile Issue Helper</span>
        </section>
        <section class="md-ih-header_right">
          <div class="md-ih-lang" @click="changeLang">
            {{ lang }}
          </div>
        </section>
      </div>
    </el-header>
    <el-main class="md-ih-main">
      <div class="md-ih-container">
        <statement></statement>
        <el-form
          class="md-ih-form"
          label-position="top"
          ref="form"
          :model="basic"
          :show-message="false"
          :validate-on-rule-change="false"
          status-icon
          @submit.native.prevent
        >
          <div class="md-ih-form-item">
            <el-form-item :label="$t('project')" required prop="project">
              <el-select v-model="basic.project">
                <el-option label="Mand Mobile" value="mand-mobile"></el-option>
                <el-option label="Mand Mobile RN" value="mand-mobile-rn"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('type')" required prop="type">
              <el-radio-group v-model="basic.type">
                <el-radio-button label="bug-report">{{ $t('typeLable0') }}</el-radio-button>
                <el-radio-button label="feature-request">{{ $t('typeLable1') }}</el-radio-button>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="md-ih-form-item">
            <el-form-item :label="$t('title')" required prop="title">
              <el-input v-model="basic.title" maxlength="50"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <keep-alive>
          <component :is="basic.type" ref="content" :project="basic.project"/>
        </keep-alive>
        <div class="md-ih-action">
          <el-button type="primary" round  @click="generate">{{ $t('preview') }}</el-button>
        </div>
      </div>
    </el-main>
    <el-footer class="md-ih-footer">
      Inspired by&nbsp;&nbsp;<a href="https://new-issue.vuejs.org/" target="_blank">Vue Issue Helper</a>
    </el-footer>
    <el-dialog
      class="md-ih-preivew"
      title="预览"
      :visible.sync="isPreviewShow"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :modal="false"
    >
      <div class="md-ih-preivew-markdown markdown-body" v-html="previewContent.html"></div>
      <div class="md-ih-preivew-footer">
        <el-button type="primary" round  @click="create">{{ $t('create') }}</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import Statement from './components/Statement'
import FeatureRequest from './components/FeatureRequest'
import BugReport from './components/BugReport'
import { getQuery, updateQuery } from './helpers'

export default {
  name: 'app',
  components: {
    Statement,
    FeatureRequest,
    BugReport
  },
  data () {
    return {
      basic: {
        project: '',
        title: '',
        type: 'bug-report' // feature-request
      },
      isPreviewShow: false,
      previewContent: ''
    }
  },
  computed: {
    lang () {
      return this.$i18n.locale === 'zh' ? 'English' : '中文'
    }
  },
  watch: {
    'basic.project' (val) {
      updateQuery({ project: val })
    },
  },
  created () {
    this.$set(this.basic, 'project', getQuery().project || 'mand-mobile')
  },
  methods: {
    generate () {
      this.$refs.form.validate(async valid => {
        if (!valid) {
          return
        }
        try {
          this.generated = await this.$refs.content.generate()
          this.previewContent = this.generated
          this.isPreviewShow = true
        } catch (error) {}
      })
    },

    create () {
      const title = `[${this.basic.type}] ${encodeURIComponent(this.basic.title).replace(/%2B/gi, '+')}`
      const body = encodeURIComponent(this.previewContent.markdown).replace(/%2B/gi, '+')
      window.open(`https://github.com/didi/${this.basic.project}/issues/new?title=${title}&body=${body}`)
    },

    changeLang () {
      const lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="stylus">
a
  color #2F86F6
  text-decoration none
.md-ih-container
  max-width 1000px
  margin 0 auto
  padding 0 20px
  box-sizing border-box
.md-ih-header
  border-bottom 1px solid #f0f1f2
  .md-ih-container, .md-ih-header_left, .md-ih-header_right
    display flex
    align-items center
    height 100%
  .md-ih-container
    justify-content space-between
  .md-ih-header-logo
    width 32px
  .md-ih-header-name
    margin-left 15px
    font-family DINPro-Medium, DIN Alternate, "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
  .md-ih-lang
    font-size 14px
    color #2F86F6
    cursor pointer
.md-ih-form
  margin-top 20px
  .md-ih-form-item
    display flex
    .md-ih-form-item-tips
      margin-top 10px
      line-height 1.5
      font-size 14px
      color #858B9C
    .el-form-item
      flex 1
      &:not(:first-child)
        margin-left 3%
      .el-select, .el-radio-group
        width 100%
      .el-radio-group
        display flex
        .el-radio-button
          flex 1
          .el-radio-button__inner
            width 100% !important
      .el-input__inner, .el-textarea__inner
        background #F9FAFB
        border none
        border-radius 2px
        &:focus
          border-bottom solid 2px #111A34 !important
      &.is-error
        .el-input__inner, .el-textarea__inner
          border-bottom solid 2px #FF5257 !important
.md-ih-action
  display flex
  justify-content center
  margin-top 20px
.md-ih-footer
  display flex
  justify-content center
  align-items center
  font-size 14px
  color #858B9C
.md-ih-preivew
  .el-dialog
    border-radius 12px
    box-shadow 0 20px 60px rgba(0,0,0,.1)
  .md-ih-preivew-footer
    display flex
    justify-content center
    margin-top 20px
</style>

