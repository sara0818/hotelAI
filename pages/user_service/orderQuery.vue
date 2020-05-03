<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
    </div>
    <div>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '64px 16px 0', overflow: 'initial' }">
          <div :style="{ background: '#f0f2f5' }" >
            <div :style="{fontSize:'16px',height:'100px',textAlign:'center',background: '#fff'}">
              <a-row :style="{top:'30px'}">
                <a-col :span="7">已预定</a-col>
                <a-col :span="7">已入住</a-col>
                <a-col :span="7">已退房</a-col>
              </a-row>
              <a-row :style="{fontSize:'17px', top:'30px',color:'#3399ff'}">
                <a-col :span="7"><strong>{{text1}}</strong></a-col>
                <a-col :span="7"><strong>{{text2}}</strong></a-col>
                <a-col :span="7"><strong>{{text3}}</strong></a-col>
              </a-row>
            </div>
            <div :style="{height:'600px',marginTop:'40px',background:'#fff'}" id="app">

              <a-table  :columns="columns" :dataSource="data"  :rowkey="record=>record.id" >
               <span slot="action" >
                 <!--<a-button-group :value="size">-->
              <!--<a-button type="primary" :size="size" @click="click_1()">退房 </a-button>-->
              <!--<a-button type="primary" :size="size" @click="click_2()">续房 </a-button>-->
              <!--</a-button-group>-->
              </span>
              </a-table>

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
  const columns = [
    {
      title: '姓名',
      dataIndex: 'userId',
    },
    {
      title: '入住人数',
      dataIndex: 'amount',
    },
    // {
    //   title: '房型',
    //   dataIndex: 'type',
    //   filters: [{ text: '单人间', value: '单人间' }, { text: '双人间', value: '双人间' }, { text: '大床房', value: '大床房' }],
    // },

    {
      title: '房号',
      dataIndex: 'roomNum',
    },

    {
      title: '退房时间',
      dataIndex: 'timeTo',
    },

    {
      title: '状态',
      dataIndex: 'state',
      // sorter: true,
    },
    // {
    //   title: '操作',
    //   dataIndex: 'operation',
    //   scopedSlots: { customRender: 'action' },
    // }

  ];
  const data=[];

  export default {
    name: "order",
    components: {
      MainMenu
    },
    //表格
    mounted() {
      this.$axios({
        url: 'http://luoma.fun:10010/order/selectAllOrder',
        method: 'get',
        type: 'json',
        credentials: "include",
        transformRequest: [function (data) {
          let ret = '';
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(res => {
        //dataIndex相同，直接赋值就可
        this.data = res.data.data;
        console.log(this.data);

        //数据统计
        for (let i in this.data) {
          if (this.data[i].state == "已预定") {
            this.text1 = this.text1 + 1;
          }
          if (this.data[i].state == "已入住") {
            this.text2 = this.text2 + 1;
          }
          if (this.data[i].state == "已退房") {
            this.text3 = this.text3 + 1;
          }
        }

      });
    },

    data() {
      return {
        size: 'small',
        tabPosition: 'top',
        data,
        columns,
        text1:0,
        text2:0,
        text3:0,
      };
    },
    methods: {

      callback(val) {
        console.log(val);
      },
      onSearch(value) {
        console.log(value);
      },
      // click_1() {
      //   console.log()
      //   this.$router.push({path: `/response/tuifang`})
      // },
      // click_2() {
      //   this.$router.push({path: `/response/xufang`})
      // }
    },
  };
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


