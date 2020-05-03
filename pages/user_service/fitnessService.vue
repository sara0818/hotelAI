<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
    </div>
    <div>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '64px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
            <div class="task" style="display: inline-block">
              待办任务
              <br>
              <span class="span_1">八个任务</span>
            </div>
            <!--<a-divider type="vertical" />-->
            <div class="task" style="display: inline-block">
              本周任务平均处理时间
              <br>
              <span class="span_1">32分钟</span>
            </div>
            <!--<a-divider type="vertical" />-->
            <div class="task" style="display: inline-block">
              本周任务平均等待时间
              <br>
              <span class="span_1">5分钟</span>
            </div>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout :style="{ marginLeft: '200px'}">
        <a-layout-content :style="{ margin: '16px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center',height:'50px' }">
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
                  :rowKey="record => record.login.uuid"
                  :dataSource="data"
                  :pagination="pagination"
                  :loading="loading"
                  @change="handleTableChange"
                >
                </a-table>
              </a-tab-pane>
              <a-tab-pane tab="已完成" key="finish">
                <a-table
                  :columns="columnsfinish"
                  :rowKey="record => record.login.uuid"
                  :dataSource="data"
                  :pagination="pagination"
                  :loading="loading"
                  @change="handleTableChange"
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
      title: '任务名称',
      dataIndex: 'task_name',
      width: '25%',
    },
    {
      title: '器械编号',
      dataIndex: 'machine_name',
      width: '15%',
    },
    {
      title: '发布时间',
      dataIndex: 'issue_time',
      width: '20%',
    },
    {
      title: '已等待时间',
      dataIndex: 'wait_time',
    },
    {
      title: '操作',
      dataIndex: 'manipulate',
      width: '20%',
    },
  ];

  const columnsfinish = [
    {
      title: '任务名称',
      dataIndex: 'task_name',
      width: '25%',
    },
    {
      title: '器械编号',
      dataIndex: 'machine_name',
      width: '15%',
    },
    {
      title: '发布时间',
      dataIndex: 'issue_time',
      width: '20%',
    },
    {
      title: '完成时间',
      dataIndex: 'wait_time',
    },
  ];

  export default {
    components: {
      MainMenu
    },

    data() {
      return {
        mode:'left',
        columnsfinish,
        columnswait,
        data: [],
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
