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
      <el-form-item :label="$t('rationale')" prop="rationale" required>
        <el-input type="textarea" v-model="attrs.rationale" maxlength="200" rows="3"></el-input>
        <p class="md-ih-form-item-tips" v-html="$t('rationaleTips')"></p>
      </el-form-item>
    </div>
    <div class="md-ih-form-item">
      <el-form-item :label="$t('proposal')" prop="proposal" required>
        <el-input type="textarea" v-model="attrs.proposal" maxlength="200" rows="3"></el-input>
        <p class="md-ih-form-item-tips" v-html="$t('proposalTips')"></p>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import { generate } from '../helpers'

export default {
  data () {
    return {
      attrs: {}
    }
  },
  methods: {
    generate () {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate(valid => {
          if (valid) {
            // eslint-disable-next-line
            const { rationale, proposal } = this.attrs
            resolve(generate(`
### What problem does this feature solve?
${rationale}

### What does the proposed API look like?
${proposal}
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
