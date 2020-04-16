<template>
    <transition name="fade">
        <li class="item" v-if="item">
            <div v-if="item.branch" class="branch" @click="nodeClick(item)">
                    <span>{{ item.dossierName }}</span>
                    <span style="font-size: 28px;" class="iconfont icon" :class="[item.open ? 'icon-jiantou_up': 'icon-jiantou_down']"></span>
            </div>
            <div v-else class="member" @click="selectItem(item)">
                <div class="content">
                    <img :src="item.avator || imgUrl" alt="">
                    <span>{{item.fileName}}</span>
                </div>
                <span class="iconfont icon-arrow-right icon"></span>
            </div>
            <tree-list v-show="item.open" v-for="(child, index) in item.children" :key="index" :item="child" @nodeClick="outClick" @selectItem="outSelectItem"></tree-list>
        </li>
    </transition>
</template>

<script>
    export default {
        name: 'TreeList',
        props: {
            item: {
                type: [Object, Array]
            }
        },
        data () {
            return {
                open: false,
                imgUrl: require('@/assets/images/word@2x.png')
            }
        },
        methods: {
            nodeClick (item) {
                item.open = !item.open;
                if (item.request) return;
                item.request = true;
                this.$emit('nodeClick', item);
            },
            selectItem(item){
                console.log(item, '选中的')
            },
            outClick (item) {
                this.$emit('nodeClick', item);
            },
            outSelectItem (item) {
                this.$emit('selectItem', item);
            }
        }
    }
</script>

<style lang="scss" scoped>
    fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .item {
        padding-left: 15px;
        list-style: none;
        background-color: #fff;
        .branch {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 10px;
            border-bottom: 1px solid #f7f7f9;
        }
        .member {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #f7f7f9;
            .checkbox {
                position: relative;
                display: block;
                height: 18px;
                width: 18px;
            }
            input[type="checkbox"] {
                display: none;
            }
            input[type="checkbox"] + .checkbox:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                border-radius: 50%;
                border: 1px solid #c1c7d0;
            }
            input[type="checkbox"]:checked + .checkbox:before {
                content: '';
                display: block;
                position: absolute;
                z-index: 333;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                border-radius: 50%;
                border: 1px solid #409eff;
                background-color: #409eff;
            }
            .content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 10px;
                text-align: center;
                img {
                    display: block;
                    margin: 0 auto 5px;
                    width: 30px;
                    height: 30px;
                    /*border-radius: 50%;*/
                }
                span{
                    display: block;
                    margin-left: 15px;
                }
            }
        }
    }
</style>