<template>
  <div align="center">
    <br><br><br>
    <p :style="{color:'#1890ff',fontSize:'25px' }"><b>登录</b></p>
    <br>
    <div class="divForm">
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout_1.labelCol"
          :wrapper-col="formItemLayout_1.wrapperCol"
          label="用户名："
        >
          <a-input
            v-decorator="[
          'id',
          { rules: [{ required: true, message: '请输入你的用户名' }] },
        ]"
            placeholder="请输入你的用户名"
          />
        </a-form-item>

        <a-form-item
          :label-col="formItemLayout_1.labelCol"
          :wrapper-col="formItemLayout_1.wrapperCol"
          label="密码"
        >
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入你的密码' }] },
        ]"
            placeholder="请输入你的密码"
          />
        </a-form-item>
        <a-button type="primary" @click="submit()">确认</a-button>&nbsp;&nbsp;&nbsp;&nbsp;
        <a-button type="primary" @click="click()">返回</a-button>

      </a-form>
    </div>
    <br><br>
    <a-layout-footer :style="{ textAlign: 'center'}">
      HOTEL-AI ©2018 Created by 软件工程队
    </a-layout-footer>
  </div>
</template>

<script>
  import "../../api/api";
  var trans = ''

  const formItemLayout_1 = {
    labelCol: { span: 8 },
    wrapperCol: { span: 4 },
  };
  const formItemLayout_2 = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };

  const formTailLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  export default {
    name: "loginWithPsw",
    data() {
      return {
        formItemLayout_1,
        formItemLayout_2,
        formTailLayout,
        //有了这句话才能从表单拉取数据
        form: this.$form.createForm(this, { name: 'dynamic_rule' }),
        password:'',
        id:'',
      };
    },
    methods: {
      click(){
        this.$router.push({path: `/LogIn/logIn`})
      },

      submit(){
        let listV = this.form.getFieldsValue();
        if(listV.id==''){
          this.$message.error("请填写用户名")
        }else if(listV.password==''){
          this.$message.error(("请填写密码"))
        }else{
          this.$axios({
            url:this.$loginUrl+"?id=" + listV.id+"&password="+listV.password,
            method:'get',
            credentials: "include",
            // data:{
            //   id:listV.id,
            //   password:this.$md5(listV.password+this.$salt),
            // },

            transformRequest: [function (data) {
              let ret = '';
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(res => {
            if(res.data.state==200){
              this.$router.push({path: `/monitor/lobbyMonitor`})
            }else{
              alert(res.data.msg)
            }
          })
        }


      },


    }
  };
</script>

<style scoped>

  .divForm {
    text-align: center; /*(让div中的内容居中)*/
    top: 50%;
    left: 50%;
    margin-top: 30px;
    margin-left: 250px;
  }


</style>
