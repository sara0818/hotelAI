<template>
  <div align="center">
    <br><br><br>
    <p :style="{color:'#1890ff',fontSize:'25px' }"><b>注册</b></p>
    <div align="center">
      <h2 :style="{color:'#959595'}"><b>请微笑面对摄像头</b></h2>
      <br>
      <div style="height: 300px;width:400px; align: center;right: 200px">
        <a-row :gutter="20">
          <a-col :span="24">
            <div class="videos" ref="videos">
              <video  id="video" class="vio" autoplay="autoplay" v-show="video_show"></video>
              <canvas id="canvas" width="400" height="300" v-show="canvas_show"></canvas>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
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
          label="姓名："
        >
          <a-input
            v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入你的姓名' }] },
        ]"
            placeholder="请输入你的姓名"
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
  var trans
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
    name: "register",
    props:{
      isOpen : true,
      modalVisible: Boolean
    },

    mounted() {
      this.camera_options()
    },

    data() {
      return {
        formItemLayout_1,
        formItemLayout_2,
        formTailLayout,
        //有了这句话才能从表单拉取数据
        form: this.$form.createForm(this, { name: 'dynamic_rule' }),
        username:'',
        password:'',
        id:'',
        flag_camera:'true',
        video_show : true,
        canvas_show : false,
        url : '',
        loading : true,
      };
    },
    methods: {

      camera_options(){
        let that = this;
        var constraints = {
          video: {
            width: 400,
            height: 300
          },
        };
        var videos = this.$refs.videos;
        console.info(videos);
        var promise = navigator.mediaDevices.getUserMedia(constraints);
        promise.then((MediaStream) => {
          console.info(MediaStream);
          video.srcObject = MediaStream;
          video.play();
        }).catch((error) => {
          console.info(error);
        });
        /**
         * @desc 倒计时以后进行拍照的操作
         */
        setTimeout(function() {
          let canvas = document.getElementById("canvas");
          console.info(canvas);
          canvas.getContext('2d').drawImage(video, 0, 0, 200, 100);
          console.info(typeof video);
          console.info(canvas.getContext('2d').drawImage(video, 0, 0, 200, 100));
          /**
           * @desc 拿到图片的base64
           * @param canvas base64
           */
          canvas = canvas.toDataURL("image/png");
          trans=canvas.substring(22,);
          // console.info(trans);
        }, 1000);
      },

      click(){
        this.$router.push({path: `/LogIn/logIn`})
      },

      submit(){
        // console.info(trans)
        console.info(this.$registerUrl)
        let listV = this.form.getFieldsValue();
        if(listV.username==''){
          this.$message.error("请填写姓名")
        }else if(listV.password==''){
          this.$message.error(("请设置密码"))
        }else if(listV.id==''){
          this.$message.error(("请设置用户名"))
        }else{
          this.$axios({
            url:this.$registerUrl,
            method:'post',
            credentials: "include",
            data: {
              id: listV.id,
              password: this.$md5(listV.password + this.$salt),
              userName: listV.username,
              face: trans
            },

            transformRequest: [function (data) {
              let ret = '';
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

          }).then(res => {
            alert(res.data.msg)
            console.log(res.data.msg)
            if(res.data.state==200){
              this.$router.push({path: `/LogIn/logIn`})
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

  #video{
    height: 300px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #CCCCCC;
    border-radius: 4px;
  }

</style>
