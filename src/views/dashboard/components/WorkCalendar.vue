<template>
  <div>
    <el-row type="flex" justify="end" :gutter="10">
      <el-col :span="6">
        <el-select
          v-model="year"
          size="mini"
          style="width: 100%"
          @change="handleChange"
        >
          <el-option
            v-for="(item, index) in 11"
            :key="index"
            :value="year - 6 + item"
          >
            {{ year - 6 + item }}
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select
          v-model="month"
          size="mini"
          style="width: 100%"
          @change="handleChange"
        >
          <el-option v-for="(item, index) in 12" :key="index" :value="item">
            {{ item }}
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-calendar ref="calendar" v-model="value">
        <template #dateCell="scope">
          <span>{{ scope.date.getDate() }}</span>
          <div
            v-if="scope.date.getDay() === 0 || scope.date.getDay() === 6"
            class="rest"
          >
            休
          </div>
        </template>
      </el-calendar>
    </el-row>
  </div>
</template>

<script>
export default {
  filters: {},
  components: {},
  data () {
    return {
      month: (new Date()).getMonth() + 1,
      year: (new Date()).getFullYear(),
      value: new Date()
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    var that = this // 把外面的this对应的对象存储起来
    this.$refs.calendar.$el.addEventListener('click', function () {
      // 这里不能用this属性,因为this指向是DOM属性,而不是当前组件实例对象
      that.month = new Date(that.$refs.calendar.realSelectedDay).getMonth() + 1
    })
  },
  methods: {
    handleChange () {
      var str = this.year + '-' + this.month
      console.log(str)
      this.value = new Date(str)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-calendar__header {
  display: none;
}
::v-deep .el-calendar__body {
  padding: 0;
}
::v-deep .el-calendar-table td {
  border: none;
  text-align: center;
}
::v-deep .el-calendar-table tr td:first-child {
  border: none;
}
::v-deep .el-calendar-table tr:first-child td {
  border: none;
}
.rest {
  border-radius: 50%;
  background-color: orange;
  color: #fff;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  display: inline-block;
}
</style>
