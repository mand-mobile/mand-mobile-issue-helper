<template>
  <div class="md-ih-statement" v-if="$i18n.locale === 'zh'">
    <h2>在开始之前</h2>
    <ul>
      <li>请尝试在文档中寻找答案，并仔细的检查代码</li>
      <li>请尝试在旧issue中寻找是否类似问题已被解决</li>
      <li>请详尽的描述您的问题，更多的有效信息，可以得到更好的帮助</li>
      <li>请尽量用英文，如果能够把问题描述清楚</li>
      <li>强烈推荐阅读<a href="https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html" target="_blank">《如何有效地报告Bug》</a></li>
    </ul>
  </div>
  <div class="md-ih-statement" v-else>
    <h2>Before Start</h2>
    <ul>
      <li>Please try to find the answer in the documentation and check the code carefully.</li>
      <li>Please try to find out if the similar issue has been resolved in the old issue.</li>
      <li>Please describe your problem in detail, more effective information, you can get better help.</li>
      <li>Please try to use English if you can describe the problem clearly.</li>
      <li>It is highly recommended to read <a href="https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html" target="_blank">《How to Effectively Report Bug》</a></li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.md-ih-statement
  padding 20px
  background #F9FAFB
  border-radius 12px
  color #111A34
  h2
    font-size 28px
  ul
    margin-top 32px
    padding-left 20px
    li
      margin-top 10px
      font-size 14px
      color #41485D
      list-style circle
    a
      color #2F86F6
      text-decoration none
</style>
