<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '64px 16px 0', overflow: 'initial' }">
          <div>
            <a-row :gutter="16">
              <a-col :span="6">
                <a-card :bordered="false" style="height: 200px">
                  <span class="sellhead">总销售额</span><br>
                  <span class="totalsell">￥126,560</span><br>
                  <span>周同比</span>&nbsp;&nbsp;<span>12%</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>日环比</span>&nbsp;&nbsp;<span>11%</span>
                  <a-divider />
                  <span class="sellhead">日销售额</span>&nbsp;&nbsp;<span class="sellhead">￥12,423</span>
                </a-card>
              </a-col>
              <a-col :span="6">
                <a-card :bordered="false" style="height: 200px">
                  <span class="sellhead">入住总人数</span><br>
                  <span class="totalsell">8,846</span><br>
                  <div id="main1" style="height: 70%;width: 100%"></div>
                  <span class="sellhead">日入住人数</span>&nbsp;&nbsp;<span class="sellhead">1,234</span>
                </a-card>
              </a-col>
              <a-col :span="6">
                <a-card :bordered="false"  style="height: 200px">
                  <span class="sellhead">热销房型</span><br>
                  <span class="totalsell">标准间</span><br>
                  <div id="main2" style="height: 70%;width: 100%"></div>
                  <span class="sellhead">占有比</span>&nbsp;&nbsp;<span class="sellhead">60%</span>
                </a-card>
              </a-col>
              <a-col :span="6">
                <a-card :bordered="false"  style="height: 200px">
                  <span class="sellhead">房间占用率</span><br>
                  <span class="totalsell">78%</span><br>
                  <div id="main3" style="height: 70%;width: 100%"></div>
                  <span>周同比</span>&nbsp;&nbsp;<span>12%</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>日环比</span>&nbsp;&nbsp;<span>11%</span>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </a-layout-content>
        <a-layout-content :style="{ margin: '16px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center',height:'450px' }">
            <span class="medium-head">本年销售额/旅客量</span>
            <a-range-picker @change="onChange" :style="{float:'right'}"/>
            <br>
            <div id="main4" style="height: 90%;width: 100%" align="center"></div>
          </div>
        </a-layout-content>
        <a-layout-content :style="{ margin: '16px 16px 0', overflow: 'initial'}">
          <div>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-card :bordered="false">
                  <span class="medium-head">热门服务</span>
                  <br><br>
                  <a-table
                    :columns="columns_table"
                    :rowKey="record => record.id"
                    :dataSource="table_data"
                    :pagination="pagination"
                    :loading="loading"
                    @change="handleTableChange"
                    :style="{height:'350px'}"
                  >
                  </a-table>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card :bordered="false">
                  <span class="medium-head">销售额类别占比</span>
                  <div id="main5" style="height: 430px;width: 500px" align="center"></div>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </a-layout-content>
        <a-layout-content :style="{ margin: '16px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center',height:'450px' }">
            <span class="medium-head">本年客流量</span>
            <div id="main6" style="height: 90%;width: 100%;" align="center"></div>
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
  const table_data = [
    {
      rank:'1',
      service_type:'送餐',
      users:'2234',
      increase:'58%'

    },
    {
      rank:'2',
      service_type:'设备保修',
      users:'2404',
      increase:'128%'
    },
    {
      rank:'3',
      service_type:'客房打扫',
      users:'1231',
      increase:'3%'
    },
    {
      rank:'4',
      service_type:'叫早服务',
      users:'1021',
      increase:'58%'
    },
    {
      rank:'5',
      service_type:'大巴预定',
      users:'800',
      increase:'58%'
    },
  ];
  const columns_table = [
    {
      title: '排名',
      dataIndex: 'rank',
      width: '25%',
    },
    {
      title: '服务类型',
      dataIndex: 'service_type',
      width: '25%',
    },
    {
      title: '用户数',
      dataIndex: 'users',
      sorter:true,
      width: '25%',
    },
    {
      title: '周涨幅',
      dataIndex: 'increase',
      sorter:true,
      width: '25%',
    },
  ];
  export default {
    components: {
      MainMenu
    },
    data() {
      return {
        table_data,
        pagination: {},
        loading: false,
        columns_table,
      };
    },

    methods:{
      callback(key) {
        console.log(key);
      },

      onChange(date, dateString) {
        console.log(date, dateString);
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

      initCharts1(){
        var echarts = require('echarts');
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'));
        // 绘制图表
        myChart.setOption({
          color:['#c495ed'],
          title: {
            // text: 'ECharts 入门示例'
          },

          tooltip: {},
          xAxis: {
            data: ['2018-9-10', '2018-9-11', '2018-9-12', '2018-9-13', '2018-9-14', '2018-9-15','2018-9-16','2018-9-17'],
            show:false
          },
          yAxis: {show:false,},
          series: [{
            type: 'line',
            smooth:true,
            data: [34, 20, 18, 10, 18, 20,10,15],
            areaStyle: {}
          }],
          grid:{
            right:'15%',
            left:'15%',
            top: '15%',   // 与容器顶部的距离
            bottom: '15%', // 与容器底部的距离
          },
        });
      },

      initCharts2(){
        var echarts = require('echarts');
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main2'));
        // 绘制图表
        myChart.setOption({
          color:['#6495ED'],
          title: {
            // text: 'ECharts 入门示例'
          },

          tooltip: {},
          xAxis: {
            data: ['2018-9-10', '2018-9-11', '2018-9-12', '2018-9-13', '2018-9-14', '2018-9-15','2018-9-16','2018-9-17'],
            show:false
          },
          yAxis: {show:false,},
          series: [{
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20,10,15],
            barGap:'100%',
            barCategory:'200%',
          }],
          grid:{
            right:'15%',
            left:'15%',
            top: '15%',   // 与容器顶部的距离
            bottom: '15%', // 与容器底部的距离
          },
        });
      },

      initCharts3(){
        var echarts = require('echarts');
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main3'));
        // 绘制图表
        myChart.setOption({
          color:['#ffca18','#f9ff5a'],
          title: {
            // text: 'ECharts 入门示例'
          },

          tooltip: {},
          xAxis: {
            type:'value',
            show:false
          },
          yAxis: {
            show:false,
            type:'category'
          },
          legend:{
            data:['占用','非占用'],
            show:false
          },
          series: [
            {
              type: 'bar',
              name:'占用',
              data: [78],
              // stack: '总量',
              barMaxWidth: 15, // 柱条的最大宽度，不设时自适应
              // 图形上的文本标签
              label: {
                show: true,
                position: 'inside'
              },
            },
            {
              type: 'bar',
              name:'非占用',
              data: [22],
              // stack: '总量',
              barMaxWidth: 15, // 柱条的最大宽度，不设时自适应
              // 图形上的文本标签
              label: {
                show: true,
                position: 'inside'
              },
            },
          ],
          grid:{
            right:'15%',
            left:'15%',
            top: '15%',   // 与容器顶部的距离
            bottom: '15%', // 与容器底部的距离
          },
        });
      },

      initCharts4(){
        var echarts = require('echarts');
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main4'));
        // 绘制图表
        myChart.setOption({
          color:['#5e98ed','#4138ed'],
          title: {
            // text: 'ECharts 入门示例'
          },

          tooltip: {},
          xAxis: {
            data: ['一月', '二月', '三月', '四月', '五月', '六月','七月','八月','九月','十月','十一月','十二月'],
            splitNumber:10,
            axisTick:{
              show:false,
              alignWithLabel: true
            }
          },
          legend:{
            data:['销售额','旅客量']
          },
          yAxis: [
            {
              name:'销售额',
              type:'value',
              min:0,
              max:1200,
              interval:200,
              show:true,
              axisTick:{
                show:false,
                alignWithLabel: true
              }
            },
            {
              name:'旅客量',
              type:'value',
              min:0,
              max:1200,
              interval:200,
              show:true,
              axisTick:{
                show:false,
                alignWithLabel: true
              }
            },
          ],
          series: [
            {
              type: 'bar',
              data: [100,400, 500, 700, 600, 400,500,800,1000,1200,600,500],
              barGap:'100%',
              barCategoryGap:'40%'
            },
            {
              type: 'line',
              data: [100, 400, 800, 700, 800, 400,1200,700, 600, 400,500,800],
              barGap:'100%',
              barCategoryGap:'40%'
            },
          ],
          grid:{
            right:'15%',
            left:'15%',
            top: '15%',   // 与容器顶部的距离
            bottom: '15%', // 与容器底部的距离
          },

        });
      },

      initCharts5(){
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('main5'));
        // 绘制图表
        myChart.setOption({
          title : {
            x:'center',//x轴方向对齐方式
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            data: ['标准间','单人间','大床房','三人间','商务间','豪华间'],
            orient: 'vertical',
            top: 'center',
            icon: 'circle',
            show:true,
            itemGap: 20,
            right: 0,
            top:160,
            textStyle:  {
              color: "#fff",
              fontWeight: 'normal',
              fontFamily: '宋体',
              rich: {
                a: {
                  width: 100,
                },
                b: {
                  width: 20,
                  align: 'right'
                },
              },
            },
          },
          series : [
            {
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'标准间'},
                {value:310, name:'单人间'},
                {value:234, name:'大床房'},
                {value:135, name:'三人间'},
                {value:1548, name:'商务间'},
                {value:1548, name:'豪华间'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ],
        })
      },

      initCharts6(){
        var echarts = require('echarts');
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main6'));
        // 绘制图表
        myChart.setOption({
          color:['#5e98ed'],
          title: {
            // text: 'ECharts 入门示例'
          },

          tooltip: {},
          xAxis: {
            data: ['一月', '二月', '三月', '四月', '五月', '六月','七月','八月','九月','十月','十一月','十二月'],
            splitNumber:10,
            axisTick:{
              show:false,
              alignWithLabel: true
            }
          },
          legend:{
            data:['客流量']
          },
          yAxis: [
            {
              name:'客流量',
              type:'value',
              min:0,
              max:1200,
              interval:200,
              show:true,
              axisTick:{
                show:false,
                alignWithLabel: true
              }
            },

          ],
          series: [
            {
              type: 'line',
              data: [100, 400, 800, 700, 800, 400,1200,700, 600, 400,500,800],
              barGap:'100%',
              barCategoryGap:'40%'
            },
          ],
          grid:{
            right:'15%',
            left:'15%',
            top: '15%',   // 与容器顶部的距离
            bottom: '15%', // 与容器底部的距离
          },

        });
      }

    },
    mounted() {
      this.initCharts1()
      this.initCharts2()
      this.initCharts3()
      this.initCharts4()
      this.initCharts5()
      this.initCharts6()
    }

  }

</script>



<style>
.sellhead{
  font-weight: lighter;
}
.totalsell{
  font-size: 20px;
}

.medium-head{
  font-size:20px;
  float:left;
}

</style>
