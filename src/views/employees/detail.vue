<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane label="登录账户设置" name="first">
          <!-- {{ $route.parims.id }}
          <br />
          {{ id }} -->
          <el-form
            ref="userInfoRef"
            style="width: 400px; margin-left: 200px; margin-top: 50px"
            :model="userInfo"
            :rules="userInfoRules"
            label-width="80px"
          >
            <el-form-item prop="username" label="用户名">
              <el-input v-model="userInfo.username"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input v-model="userInfo.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="save">更新</el-button>
              <el-button type="info">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="个人详情" name="second">
          <UserInfo :id="id"></UserInfo>
        </el-tab-pane>
        <el-tab-pane label="岗位信息" name="third">
          <JonInfo></JonInfo>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import JonInfo from './components/JobInfo.vue'
import UserInfo from './components/UserInfo.vue'
import { saveEmployee } from '@/api/employee'
import { getUserDetailById } from '@/api/user'
export default {
  filters: {},
  components: {
    UserInfo,
    JonInfo
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      activeName: 'first',
      userInfo: {
        username: '',
        password: ''
      },
      userInfoRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getUserDetailById()
  },
  methods: {
    async getUserDetailById () {
      const res = await getUserDetailById(this.id)
      console.log(res)
      res.password = null
      this.userInfo = res
    },
    // 二次校验
    save () {
      this.$refs.userInfoRef.validate(async valid => {
        if (!valid) return this.$message.error('表单数据校验失败')
        const res = await saveEmployee(this.id, this.userInfo)
        console.log(res)
        this.$message.success('更新成功')
      })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
