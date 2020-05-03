<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '64px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
            <div :style="{color:'#f0f2f5'}" align="center" >
              <div align="center">
                <h2 :style="{color:'#959595'}"><b>停车场监控</b></h2>
                <br>
                <div class="videos" ref="videos">
                  <video  id="video" class="vio" autoplay="autoplay" v-show="video_show"></video>
                  <canvas id="canvas" width="800" height="600" v-show="canvas_show"></canvas>
                </div>
              </div>
              <br>
            </div>

          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          HOTEL-AI ©2018 Created by 软件工程队
        </a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>
  import MainMenu from "../../components/mainMenu/mainMenu";
  import "../../api/api";
  export default {
    components: {
      MainMenu
    },
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
    }
  }
</script>
<style scoped>
  #video{
    height: 600px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #CCCCCC;
    border-radius: 4px;
  }
</style>


