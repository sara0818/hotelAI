<template>
    <a-layout id="components-layout-demo-fixed-sider">
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
            <div class="logo">
                <span class="name">HOTEL-AI</span>
            </div>
            <!--:defaultSelectedKeys="['sub1-1']" :defaultOpenKeys="['sub1']"-->
            <a-menu theme="dark" mode="inline">
              <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="video-camera" /><span>监控管理</span></span>
                <a-menu-item key="sub4-1" @click="gotolobbyMonitor">大厅监控</a-menu-item>
                <a-menu-item key="sub4-2" @click="gotoelevatorMonitor">电梯监控</a-menu-item>
                <a-menu-item key="sub4-3" @click="gotorestaurantMonitor">餐厅监控</a-menu-item>
                <a-menu-item key="sub4-4" @click="gotofitnessMonitor">健身房监控</a-menu-item>
                <a-menu-item key="sub4-5" @click="gotoparkingMonitor">停车场监控</a-menu-item>
                <a-sub-menu key="sub4-6" title="楼层监控">
                  <a-menu-item key="sub4-6-1" @click="gotofirstFloorMonitor">一层</a-menu-item>
                  <a-menu-item key="sub4-6-2" @click="gotosecondFloorMonitor">二层</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="compass" /><span>数据分析</span></span>
                    <a-menu-item key="sub1-1" @click="gotomonitor">监控台</a-menu-item>
                    <a-sub-menu key="sub1-2" title="分析台">
                        <a-menu-item key="sub1-2-1" @click="gotoRoomAnalysis">客房数据分析</a-menu-item>
                        <a-menu-item key="sub1-2-2"@click="gotoRestaurantAnalysis">餐厅数据分析</a-menu-item>
                        <a-menu-item key="sub1-2-3" @click="gotoGoodsAnalysis">物资数据分析</a-menu-item>
                        <a-menu-item key="sub1-2-4" @click="gotoFitnessAnalysis">健身房数据分析</a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="edit" /><span>订单/服务查询</span></span>
                    <!--<a-menu-item key="sub2-1" @click="gotoRegister">客房登记</a-menu-item>-->
                    <!--<a-menu-item key="sub2-2" @click="gotoroomService">客房服务</a-menu-item>-->
                    <!--<a-menu-item key="sub2-3" @click="gotofitnessService">健身房服务</a-menu-item>-->
                    <!--<a-menu-item key="sub2-4" @click="gotoeatingService">餐厅服务</a-menu-item>-->
                    <a-menu-item key="sub2-1" @click="gotoOrderQuery">历史订单查询</a-menu-item>
                    <a-menu-item key="sub2-2" @click="gotoServiceQuery">客户服务查询</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="3" @click="gotoEvaluate()">
                    <a-icon type="table" />
                    <span>客户评价</span>
                </a-menu-item>
                <a-menu-item key="5" @click="gotoEmpCheck">
                    <a-icon type="form" />
                    <span>签到管理</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout-header :style="{ overflow: 'auto', height: '48px', width:'100%',position: 'fixed', left:'200px',background: '#fff' }">
            <a-col :span="19">
                <a-button icon="bars" style="bottom: 8px;border: none"></a-button>
            </a-col>
            <a-col :span="5">
                <a-button icon="search" style="bottom: 8px;border: none"></a-button>
                <a-button icon="bell" style="bottom: 8px;border: none"></a-button>
                <a-avatar style="backgroundColor:#4f99ff;bottom: 10px" icon="user" />
            </a-col>
        </a-layout-header>
    </a-layout>
</template>

<script>
    export default {
        props: {
        },
        methods: {
            onCollapse(collapsed, type) {
                console.log(collapsed, type);
            },
            onBreakpoint(broken) {
                console.log(broken);
            },
            // gotoRegister(){
            //     this.$router.replace('/user_service/register')
            // },
            // gotoroomService(){
            //     this.$router.replace('/user_service/roomService')
            // },
            // gotofitnessService(){
            //     this.$router.replace('/user_service/fitnessService')
            // },
            // gotoeatingService(){
            //     this.$router.replace('/user_service/eatingService')
            // },
            gotoOrderQuery(){
              this.$router.replace('/user_service/orderQuery')
            },
            gotoServiceQuery(){
              this.$router.replace('/user_service/serviceQuery')
            },
            gotomonitor(){
                this.$router.replace('/data_analysis/monitor')
            },
            gotoRoomAnalysis(){
                this.$router.replace('/data_analysis/roomAnalysis')
            },
            gotoRestaurantAnalysis(){
                this.$router.replace('/data_analysis/restaurantAnalysis')
            },
            gotoGoodsAnalysis(){
                this.$router.replace('/data_analysis/goodsAnalysis')
            },
            gotoFitnessAnalysis(){
                this.$router.replace('/data_analysis/fitnessAnalysis')
            },
            gotoEvaluate(){
                this.$router.replace('/evaluate')
            },
            gotoEmpCheck(){
                this.$router.replace('/empCheck')
            },
            gotolobbyMonitor(){
              this.$router.replace('/monitor/lobbyMonitor')
            },
            gotoelevatorMonitor(){
              this.$router.replace('/monitor/elevatorMonitor')
            },
            gotorestaurantMonitor(){
              this.$router.replace('/monitor/restaurantMonitor')
            },
            gotofitnessMonitor(){
              this.$router.replace('/monitor/fitnessMonitor')
            },
            gotoparkingMonitor(){
              this.$router.replace('/monitor/parkingMonitor')
            },
            gotofirstFloorMonitor(){
              this.$router.replace('/monitor/firstFloorMonitor')
            },
            gotosecondFloorMonitor(){
              this.$router.replace('/monitor/secondFloorMonitor')
            },

        },
    };
</script>

<style>
    #components-layout-demo-fixed-sider .logo {
        height: 48px;
        background: #000442;
        color: white;
    }
    .name{
        font-size: 20px;
        margin-left: 50px;
        line-height: 48px;

    }
    span{
        font-size: 12px;
    }


</style>


