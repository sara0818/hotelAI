<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
    </div>
    <div>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '64px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center',height:'800px' }">
            <div>
              <a-tabs defaultActiveKey="1" @change="callback" align="left">
                <a-tab-pane tab="已预定" key="1" forceRender>
                  <a-table
                    :columns="columnsReserve"
                    :rowKey="record => record.login.uuid"
                    :dataSource="data"
                    :pagination="pagination"
                    :loading="loading"
                    @change="handleTableChange"
                  >
                  </a-table>
                </a-tab-pane>
                <a-tab-pane tab="已退房" key="2">
                  <a-table
                    :columns="columnsCheckout"
                    :rowKey="record => record.login.uuid"
                    :dataSource="data"
                    :pagination="pagination"
                    :loading="loading"
                    @change="handleTableChange"
                  >
                  </a-table>
                </a-tab-pane>
                <a-tab-pane tab="已入住" key="3">
                  <a-table
                    :columns="columnsCheckin"
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
  const columnsCheckin = [
    {
      title: '序号',
      dataIndex: 'num',
      sorter: true,
      width: '15%',
    },
    {
      title: '房型',
      dataIndex: 'room_size',
      width: '15%',
    },
    {
      title: '入住人数',
      dataIndex: 'people_num',
      width: '15%',
    },
    {
      title: '入住时间',
      dataIndex: 'checkin_time',
    },

  ];
  const columnsCheckout = [
    {
      title: '序号',
      dataIndex: 'num',
      sorter: true,
      width: '15%',
    },
    {
      title: '房型',
      dataIndex: 'room_size',
      width: '15%',
    },
    {
      title: '评价状态',
      dataIndex: 'evaluate',
      width: '15%',
    },
    {
      title: '入住时间',
      dataIndex: 'checkin_time',
    },

  ];
  const columnsReserve = [
    {
      title: '序号',
      dataIndex: 'num',
      sorter: true,
      width: '15%',
    },
    {
      title: '房型',
      dataIndex: 'room_size',
      width: '15%',
    },
    {
      title: '房间号',
      dataIndex: 'people_num',
      width: '15%',
    },
    {
      title: '入住时间',
      dataIndex: 'checkin_time',
    },
  ];
  export default {
    components: {
      MainMenu
    },

    data() {
      return {
        data: [],
        pagination: {},
        loading: false,
        columnsCheckin,
        columnsCheckout,
        columnsReserve
      };
    },
    methods: {
      callback(key) {
        console.log(key);
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

</style>
