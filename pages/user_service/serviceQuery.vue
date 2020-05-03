<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
    </div>
    <div>
      <a-layout :style="{ marginLeft: '200px',top:'60px'}">
        <a-layout-content :style="{ margin: '16px 16px', overflow: 'initial' }">
          <div :style="{ padding: '40px', background: '#fff', textAlign: 'center',height:'50px' }">
            <span style="font-size: 15px;float: left">任务列表</span>
            <a-input-search placeholder="请输入" style="width: 200px;float: right;margin-left: 15px" @search="onSearch" />
          </div>
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center',height:'800px' }">
            <a-tabs
              defaultActiveKey="wait"
              :tabPosition="mode"
              :style="{ height: '750px'}"
              @prevClick="callback"
              @nextClick="callback"
            >
              <a-tab-pane tab="等待中" key="wait">
                <a-table
                  :columns="columnswait"
                  :rowKey="record => record.id"
                  :dataSource="data1"
                  :pagination="pagination"
                  :loading="loading"
                  @change="handleTableChange"
                  @click="searchWait()"
                >
                  <span slot="action" slot-scope="text,record">
                     <a-button-group>
                        <a-button type="primary" @click="click_1(record.id)">完成 </a-button>
                     </a-button-group>
                  </span>
                </a-table>
              </a-tab-pane>
              <a-tab-pane tab="已完成" key="finish">
                <a-table
                  :columns="columnsfinish"
                  :rowKey="record => record.id"
                  :dataSource="data2"
                  :pagination="pagination"
                  :loading="loading"
                  @change="handleTableChange"
                  @click="searchFinish()"
                >
                </a-table>
              </a-tab-pane>
            </a-tabs>
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
  const columnswait = [
    {
      title: 'id',
      dataIndex: 'id',
      width: '10%',
    },
    {
      title: 'orderId',
      dataIndex: 'orderId',
      width: '10%',
    },
    {
      title: 'roomNum',
      dataIndex: 'roomNum',
      width: '10%',
    },
    {
      title: 'serviceType',
      dataIndex: 'serviceType',
      width: '15%',
    },
    {
      title: 'requirement',
      dataIndex: 'requirement',
    },
    {
      title: 'other',
      dataIndex: 'other',
      width: '25%'
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      width: '10%',
      key:'action',
      scopedSlots: { customRender: 'action' }
    },
  ];


  const columnsfinish = [
    {
      title: 'id',
      dataIndex: 'id',
      width: '10%',
    },
    {
      title: 'orderId',
      dataIndex: 'orderId',
      width: '10%',
    },
    {
      title: 'roomNum',
      dataIndex: 'roomNum',
      width: '10%',
    },
    {
      title: 'serviceType',
      dataIndex: 'serviceType',
      width: '15%',
    },
    {
      title: 'requirement',
      dataIndex: 'requirement',
    },
    {
      title: 'endTime',
      dataIndex: 'endTime',
      width: '15%'
    },
    {
      title: 'other',
      dataIndex: 'other',
      width: '25%'
    },


  ];



  export default {
    components: {
      MainMenu
    },
    mounted(){
      this.searchWait();
      this.searchFinish();
    },

    data() {
      return {
        mode:'left',
        columnsfinish,
        columnswait,
        data1: [],
        data2:[],
        pagination: {},
        loading: false,
      };
    },
    methods: {
      onSearch(value) {
        console.log(value);
      },
      callback(val) {
        console.log(val);
      },
      handleTableChange(pagination, filters, sorter) {
        console.log(pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },

      click_1(value){
        console.log("111"+value)
        this.$axios({
          url:this.$finishService+'?id='+value,
          method:'get',
          credentials: "include",
          transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data:{
            state:0
          }
        }).then(res => {
          // alert(res.data.msg)
          console.log(res.data.msg)
          if(res.data.state==200){
            this.data1=res.data.data.services
          }
        })
        location.reload()
      },

      searchWait(){
        this.$axios({
          url:this.$searchService+'?state=0',
          method:'get',
          credentials: "include",
          transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data:{
            state:0
          }
        }).then(res => {
          // alert(res.data.msg)
          console.log(res.data.msg)
          if(res.data.state==200){
            this.data1=res.data.data.services
          }
        })
      },

      searchFinish(){
        this.$axios({
          url:this.$searchService+'?state=1',
          method:'get',
          credentials: "include",
          transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data:{

          }
        }).then(res => {
          console.log(res.data.msg)
          if(res.data.state==200){
            //this.$router.push({path: `/`})
            console.log(res.data.data)
            this.data2=res.data.data.services
          }
        })
      },


    },

  }
</script>

<style>
  .task{
    width:30%
  }

  .span_1{
    font-size: 20px;
    font-weight: bold;
  }


</style>
