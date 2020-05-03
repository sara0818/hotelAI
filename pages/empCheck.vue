<template>
    <div class="container">
        <div>
            <main-menu></main-menu>
            <a-layout :style="{ marginLeft: '200px',top:'15px'}">
                <a-layout-content :style="{ margin: '64px 16px 0', overflow: 'initial' }">
                    <div :style="{ padding: '24px', background: '#fff'}">
                        <div>
                            <span style="margin-left: 14%;color: #a5a5a5">应到人数</span>
                            <a-divider style="margin-left: 13%" type="vertical" />
                            <span style="margin-left: 13%;color: #a5a5a5">实到人数</span>
                            <a-divider style="margin-left: 13%" type="vertical" />
                            <span style="margin-left: 13%;color: #a5a5a5">缺勤人数</span>
                        </div>
                        <div>
                            <span style="margin-left: 14%;font-size: 23px">20人</span>
                            <span style="margin-left: 28%;font-size: 23px">18人</span>
                            <span style="margin-left: 28%;font-size: 23px">2人</span>
                        </div>
                    </div>
                    <div :style="{ padding: '24px' ,background: '#fff' ,marginTop: '24px'}">
                        <a-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
                            <a-radio-button value="check">已签到</a-radio-button>
                            <a-radio-button value="absent">缺勤</a-radio-button>
                        </a-radio-group>
                        <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
                        <a-list v-if="mode=='check'" itemLayout="vertical" size="large" :pagination="pagination" :dataSource="checkData">
                            <a-list-item slot="renderItem" slot-scope="item, index">
                                <div style="margin-top: 2%">
                                    <a-avatar slot="avatar" :src="item.avatar" />
                                    <span style="font-size: 15px;margin-left: 5%">{{item.name}}</span>
                                    <span style="font-size: 15px;margin-left: 5%">{{item.wID}}</span>
                                    <span style="font-size: 15px;margin-left: 10%">{{item.position}}</span>
                                    <span style="font-size: 15px;float: right;margin-right: 5%">{{item.content}}</span>
                                    <span style="font-size: 15px;float: right;margin-right: 10%">{{item.time}}</span>
                                </div>
                            </a-list-item>
                        </a-list>
                        <a-list v-if="mode=='absent'" itemLayout="vertical" size="large" :pagination="pagination" :dataSource="absentData">
                            <a-list-item slot="renderItem" slot-scope="item, index">
                                <div style="margin-top: 2%">
                                    <a-avatar slot="avatar" :src="item.avatar" />
                                    <span style="font-size: 15px;margin-left: 5%">{{item.name}}</span>
                                    <span style="font-size: 15px;margin-left: 5%">{{item.wID}}</span>
                                    <span style="font-size: 15px;margin-left: 10%">{{item.position}}</span>
                                    <span style="font-size: 15px;float: right;margin-right: 5%">{{item.content}}</span>
                                    <span style="font-size: 15px;float: right;margin-right: 10%">{{item.time}}</span>
                                </div>
                            </a-list-item>
                        </a-list>
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
    import MainMenu from "../components/mainMenu/mainMenu";
    import "../api/api";
    const checkData = [];
    const absentData = [];
    for (let i = 0; i < 23; i++) {
        checkData.push({
            name: `姓名 ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            wID:
                '工号：1234567',
            position:
                '工位：餐厅',
            time:
                '2020年2月7日08:30:11',
            content:
                '准时',
        });
        absentData.push({
            name: `姓名 ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            wID:
                '工号：1234567',
            position:
                '工位：餐厅',
            time:
                '2020年2月7日',
            content:
                '缺勤',
        });
    }
    export default {
        components: {MainMenu},
        data() {
            return {
                checkData,
                absentData,
                mode: 'check',
                pagination: {
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                },
            };
        },
        methods:{
            onSearch(value) {
                console.log(value);
            },
        }
    }
</script>

<style>

</style>
