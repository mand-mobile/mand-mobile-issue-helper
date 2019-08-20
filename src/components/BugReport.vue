<template>
  <el-form
    class="md-ih-form"
    label-position="top"
    ref="form"
    :model="attrs"
    :show-message="false"
    :validate-on-rule-change="false"
    status-icon
    @submit.native.prevent
  >
    <div class="md-ih-form-item">
      <el-form-item :label="`${this.project} ${$t('version')}`" prop="version" required>
        <el-input v-model="attrs.version" maxlength="10" placeholder="2.4.1"></el-input>
        <p class="md-ih-form-item-tips">npm ls {{ this.project }}</p>
      </el-form-item>
      <el-form-item :label="`${libVersionLabel} ${$t('versionLib')}`" prop="versionLib" required>
        <el-input v-model="attrs.versionLib" maxlength="10" placeholder="2.6.1"></el-input>
      </el-form-item>
    </div>
    <div class="md-ih-form-item">
      <el-form-item :label="$t('versionBrowser')" prop="versionBrowser" required>
        <el-input v-model="attrs.versionBrowser" maxlength="30" placeholder="iphone x/safari"></el-input>
      </el-form-item>
      <el-form-item :label="$t('versionNode')">
        <el-input v-model="attrs.versionNode" maxlength="30" placeholder="node 10.0.1/npm 3.5.1"></el-input>
        <p class="md-ih-form-item-tips">{{ $t('versionNodeTips') }}</p>
      </el-form-item>
    </div>
    <div class="md-ih-form-item">
      <el-form-item :label="$t('recurring')">
        <el-input v-model="attrs.recurring" maxlength="100" placeholder="https://codesandbox.io/s/mand-mobile-quick-start-ckqbz"></el-input>
        <p class="md-ih-form-item-tips" v-html="$t('recurringTips')"></p>
      </el-form-item>
    </div>
    <div class="md-ih-form-item">
      <el-form-item :label="$t('steps')" prop="steps" required>
        <el-input type="textarea" v-model="attrs.steps" maxlength="200" rows="3"></el-input>
      </el-form-item>
    </div>
    <div class="md-ih-form-item">
      <el-form-item :label="$t('expected')" prop="expected" required>
        <el-input type="textarea" v-model="attrs.expected" maxlength="200" rows="3"></el-input>
      </el-form-item>
    </div>
    <div class="md-ih-form-item">
      <el-form-item :label="$t('actual')" prop="actual" required>
        <el-input type="textarea" v-model="attrs.actual" maxlength="200" rows="3"></el-input>
      </el-form-item>
    </div>
    <div class="md-ih-form-item">
      <el-form-item :label="$t('extra')">
        <el-input type="textarea" v-model="attrs.extra" maxlength="200" rows="3"></el-input>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import { generate } from '../helpers'

export default {
  props: {
    project: {
      default: ''
    }
  },
  data () {
    return {
      attrs: {},
    }
  },
  computed: {
    libVersionLabel () {
      switch (this.project) {
        case 'mand-mobile':
          return 'Vue'
        case 'mand-mobile-rn':
          return 'React Native'
        default:
          return ''
      }
    }
  },
  methods: {
    generate () {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate(valid => {
          if (valid) {
            // eslint-disable-next-line
            const {
              version,
              versionLib,
              versionBrowser,
              versionNode,
              recurring,
              steps,
              expected,
              actual,
              extra
            } = this.attrs
            resolve(generate(`
#### Mand Mobile Version
${version}            

#### ${this.libVersionLabel} Version
${versionLib}       

#### Model / OS & Browser Info
${versionBrowser}       

${versionNode ? `#### Node Version, Package Management Tool

${versionNode}` : ``}

${recurring ? `#### Recurring Links
${recurring}` : ``}

#### Recurring Steps
${steps}

#### Expectant Behaviors
${expected}

#### Actual Behaviors
${actual}

${extra ? `---\n${extra}` : ''}
  `.trim()
))
          } else {
            reject()
          }
        })
      })
    }
  },
}
</script>

