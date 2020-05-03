<template :style="{background:'../assets/background.png'}">
  <div :style="{color:'#f0f2f5'}" align="center" >
    <div align="center">
      <br><br>
      <h1  class="animated bounce"><a-icon type="crown" theme="twoTone"/><b>  AI   HOTEL  </b></h1>
      <br>
      <h2 :style="{color:'#959595'}"><b>请微笑面对摄像头</b></h2>
      <br>
      <div class="videos" ref="videos">
        <video  id="video" class="vio" autoplay="autoplay" v-show="video_show"></video>
        <canvas id="canvas" width="400" height="300" v-show="canvas_show"></canvas>
      </div>
    </div>
    <br>
    <div>
      <a-button type="primary" @click="click_2()">面部识别登录</a-button>
      <a-button type="primary" @click="click()">账号密码登录</a-button>
      <a-button type="link" @click="click_1">还没账号？点此注册</a-button>
    </div>
  </div>
</template>



<script>
  import "../../api/api";
  var trans

  export default {
    props:{
      isOpen : true,
      modalVisible: Boolean
    },
    data() {
      return {
        video_show : true,
        canvas_show : false,
        url : '',
        loading : true,
      };
    },
    mounted() {
      this.camera_options()
    },
    methods:{
      click() {
        this.$router.push({path: `/LogIn/loginWithPsw`})
      },
      click_1() {
        this.$router.push({path: `/LogIn/Register`})
      },

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
          console.info(trans);
        }, 1000);

      },
      click_2(){
        //传递base64
        console.info(this.$loginUrl)
        this.$axios({
          url:this.$loginUrl,
          method:'get',
          credentials: "include",
          data:{
            face:trans
          }
        }).then(res => {
          alert(res.data.msg)
          console.log(res.data.msg)
          if(res.data.state==200){
            this.$router.push({path: `/`})
          }
        })
      }
    }
  }
</script>
<style scoped>
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


