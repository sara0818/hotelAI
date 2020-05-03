<template>
    <div class="container">
        <div>
            <main-menu></main-menu>
            <a-layout :style="{ marginLeft: '200px',top:'15px'}">
                <a-layout-content :style="{ margin: '64px 16px 0', overflow: 'initial' }">
                    <div :style="{ padding: '24px', background: '#fff'}">
                        <a-row>
                            <a-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
                                <a-radio-button value="room">
                                    <a-icon type="home" theme="twoTone" />
                                    <span>客房评价</span>
                                </a-radio-button>
                                <a-radio-button value="rest">
                                    <a-icon type="shopping" theme="twoTone" />
                                    <span>餐厅评价</span>
                                </a-radio-button>
                                <a-radio-button value="gym">
                                    <a-icon type="dashboard" theme="twoTone" />
                                    <span>健身房评价</span>
                                </a-radio-button>
                            </a-radio-group>
                        </a-row>
                        <div style="padding: 6px">
                            <span style="color: gold;margin-left: 4%">{{this.scoreList.room}}</span>&nbsp;
                            <span style="color: gold;margin-left: 8%">{{this.scoreList.restaurant}}</span>
                            <span style="color: gold;margin-left: 8%">{{this.scoreList.gym}}</span>
                        </div>
                        <div style="margin-left: 70%;margin-bottom: 5%">
                            <span style="font-size: 30px;font-weight:bold">总评分</span>
                            <span style="font-size: 30px;font-weight:bold;color: gold;margin-left: 8%;font-style: italic">{{this.totalScore}}</span>
                        </div>
                    </div>
                    <div :style="{ padding: '22px' }">
                        <a-row v-if="mode=='room'" v-for="(r, index) in 1" :key="r">
                            <a-col :span="8" v-for="(item,o) in evaluationList" :key="o" style="padding: 5px">
                                <a-card hoverable style="width: 300px">
                                    <a-card-meta :title="item.userId" :description="item.roomEvaluation">
                                        <span style="font-size: 30px;font-weight:bold;color: gold;margin-left: 8%;font-style: italic">{{item.roomScore}}</span>
                                    </a-card-meta>
                                </a-card>
                            </a-col>
                        </a-row>
                        <a-row v-if="mode=='rest'" v-for="(r, index) in 1" :key="r">
                            <a-col :span="8" v-for="(item,o) in evaluationList" :key="o" style="padding: 5px">
                                <a-card hoverable style="width: 300px">
                                    <a-card-meta :title="item.userId" :description="item.restaurantEvaluation">
                                        <span style="font-size: 30px;font-weight:bold;color: gold;margin-left: 8%;font-style: italic">{{item.restaurantScore}}</span>
                                    </a-card-meta>
                                </a-card>
                            </a-col>
                        </a-row>
                        <a-row v-if="mode=='gym'" v-for="(r, index) in 1" :key="r">
                            <a-col :span="8" v-for="(item,o) in evaluationList" :key="o" style="padding: 5px">
                                <a-card hoverable style="width: 300px">
                                    <a-card-meta :title="item.userId" :description="item.gymEvaluation">
                                        <span style="font-size: 30px;font-weight:bold;color: gold;margin-left: 8%;font-style: italic">{{item.gymScore}}</span>
                                    </a-card-meta>
                                </a-card>
                            </a-col>
                        </a-row>
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
    export default {
        components: {
            MainMenu
        },
        data(){
            return{
                mode: 'room',
                evaluationList:[],
                scoreList:[],
                totalScore:''
            }
        },
        mounted(){
            this.getDataList()
        },
        methods:{
            getDataList(){
                this.$axios({
                    url: this.$getAll,
                    method: 'get',
                    data:{
                        page:'0',
                        offset:'99999',
                    },
                }).then(res => {
                    this.evaluationList=res.data;
                    console.info(this.evaluationList);
                })
                this.$axios({
                    url: this.$getAllEvaluation,
                    method: 'get',
                }).then(res => {
                    this.scoreList=res.data;
                    console.info(this.scoreList);
                    this.totalScore=this.scoreList.room+this.scoreList.restaurant+this.scoreList.gym;
                    console.info(this.totalScore);
                })
            }
        }
    }
</script>

<style>

</style>
