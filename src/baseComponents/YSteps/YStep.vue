<!--作者：黄少梅-->
<template>
    <div class="steps">
        <p class="tit">审批进度</p>
        <div class="step-cell" v-for="(item,index) in option.list" :key="index">
            <div class="step-cell_img">
                <img class="img" :src="index === (option.isEnd ? option.active: option.active - 1) ? inactiveIcon : activeIcon" alt="" />
                 <div :class="index === (option.isEnd ? option.active: option.active - 1) ? 'inactive' : 'active'"></div>
            </div>
            <div class="step-cell_body">
                <div class="stepCo">
                    <div class="body-top stepL">
                        <h3 class="title">{{item.value}}</h3>
                        <p class="p" v-for="(it, i) in item.text" :key="i">{{it}}</p>
                    </div>
                    <div class="stepR" v-if="item.label">
                        <y-button :label="item.label"
                                  :option="item.option"
                                  @input="input(item)"
                        >
                        </y-button>
                    </div>
                </div>
            </div>
        </div>
        <y-title
                @event="goDetail"
                label="查看明细"
                borderArrow="top"
                :showIcon="true"
                v-if="option.showDetail === false">
        </y-title>
    </div>
</template>

<script>
    /**
     * @Description: 步骤条
     * @param isEnd，流程是否结束，active 激活步数，inactiveIcon：未激活图标 activeIcon激活图标
     * @param list 相关信息栏，Array数据类型，需要是一个对象集合, 步骤条集合
     * @author shaomei Huang
     * @date 2020/2/24
     */
    import YButton from "../YButton/YButton";
    import YTitle from '../YTitle/YTitle'
    export default {
        name: "YStep",
        components: {YButton, YTitle},
        props: {
            option: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            input (item) {
                this.$emit('input', item)
            },
            goDetail (){
                const query = {
                    type: 'feedback', // 黄少梅修改
                    name: 'YMemberList',
                    option: this.option
                };
                this.$emit('input', query)
            }
        },
        data(){
            return {
                activeIcon: require('@/assets/images/active-icon.png'), // 激活图标
                inactiveIcon:  require('@/assets/images/inactive-icon.png'), // 未激活图标
                /*option: {
                    active: 2,
                    list:[
                        {
                            value: 'ces',
                            text: ['张三', '2019/20/23 02:05:08'], // 循环p标签
                            label: '132123',
                            option: {
                                size: 'medium',
                                className: 'primary',
                                padding: '5px 0',
                            },
                        },
                        {
                            value: 'ces',
                            text: ['张三', '2019/20/23 02:05:08'], // 循环p标签
                            label: '132123',
                            option: {
                                size: 'medium',
                                className: 'primary',
                                padding: '5px 0',
                            },
                        },
                        {
                            value: 'ces',
                            text: ['张三', '2019/20/23 02:05:08'], // 循环p标签
                            label: '132123',
                            option: {
                                size: 'medium',
                                className: 'primary',
                                padding: '5px 0',
                            },
                        },
                    ]
                }*/
            }
        },
    }
</script>

<style scoped lang="scss">
    .steps{
        background-color: #fff;
        margin: 0 10px;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        .tit{
            line-height: 2.5;
            border-bottom: 1px solid rgb(241, 244, 247);
            padding: 0 10px;
        }
        .step-cell{
            display: flex;
            padding: 5px 10px;
            &:nth-last-of-type(1) {
                align-items: center;
                .inactive {
                    height: 70px !important;
                    top: -70px !important;
                }
            }
            .step-cell_img{
                width: 15px;
                position: relative;
                img {
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    z-index: 1 !important;
                }
            }
            .step-cell_body{
                padding-left: 10px;
                flex: 1;
                font-size: 14px;
                .stepCo{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .stepL{
                        flex: 7;
                        word-wrap: break-word;
                    }
                    .stepR{
                        flex: 3;
                        word-wrap: break-word;
                        margin-right: 20px;
                    }
                }
            }
        }
        .step-cell+.step-cell {
            padding-top: 20px;
            font-size: 14px;
            .step-cell_img {
                div {
                    position: absolute;
                    border-left: 1px dashed #1989fa;
                    height: 60px;
                    width: 2px;
                    left: 50%;
                    top: -100%;
                    z-index: 0;
                }
                .active:nth-last-of-type(1){
                    height: 60px !important;
                    top: -60px !important;
                    padding: 20px 0;
                }
                .inactive:last-child{
                    border-left: 1px dashed #d2d2d2;
                }
            }
        }
    }

</style>
