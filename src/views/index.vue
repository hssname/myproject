<template>
  <div class="config_component">
    <component
      :key="index"
      style="margin-bottom: 10px"
      @input="e => events(e, item)"
      :value="item.value"
      v-bind:is="item.name"
      :disabled="item.disabled"
      :rule="item.options.rule"
      :text="item.options.text"
      v-model="options[item.key]"
      :label="item.options.label"
      :option="item.options.option"
      v-for="(item, index) in config"
      :iconOption="item.options.iconOption"
    >
    </component>
    <y-checkbox style="margin-bottom: 10px" @selected="selected" :option="{key: 'id'}" :label="searchList"></y-checkbox>
    <y-tree style="margin-bottom: 10px" :data="list" @toggle="toggle" v-model="checkList"></y-tree>
    <y-button label="按钮" @input="checkLogin" :option="{className: 'primary'}"/>
  </div>
</template>

<script>
  import YInput from '../baseComponents/YInput/YInput'
  import YButton from '../baseComponents/YButton/YButton'
  import YSwitch from '../baseComponents/YSwitch/YSwitch'
  import YRadio from '../baseComponents/YRadio/YRadio'
  import YTextSwitch from '../baseComponents/YTextSwitch/YTextSwitch'
  import YTextarea from '../baseComponents/YTextarea/YTextarea'
  import YCheckbox from '../baseComponents/YCheckbox/YCheckbox'
  import YCalendar from '../baseComponents/YCalendar/YCalendar'
  import YSelector from '../baseComponents/YSelector/YSelector'
  import YMemberList from '../baseComponents/YMemberList/YMemberList'
  import YAnnex from '../baseComponents/YAnnex/YAnnex'
  import YAnnexe from '../baseComponents/YAnnexe/YAnnexe'
  import YTree from '../baseComponents/YTree/YTree'
  import YStep from '../baseComponents/YSteps/YStep'
  export default {
    name: 'index',
    components: {
      YInput,
      YButton,
      YSwitch,
      YRadio,
      YTextSwitch,
      YTextarea,
      YCheckbox,
      YCalendar,
      YSelector,
      YMemberList,
      YAnnex,
      YAnnexe,
      YTree,
      YStep
    },
    data () {
      return {
        options: {},
        checkResult: null,
        list: [],
        checkList: [],
        searchList: [],
        config: [
          {
            name: 'YInput',
            key: 'text',
            value: '还好',
            options: {
              label: '姓名',
              rule: {
                required: true,
                ruleName: 'email',
                validate: [{
                  required: '',
                  msg: '请输入邮箱'
                }, {
                  Mail: '',
                  msg: '请输入正确的邮箱地址'
                }]
              },
              option: {
                textAlign: 'right',
                placeholder: '输入名字'
              }
            }
          },
          {
            name: 'YInput',
            key: 'age',
            options: {
              label: '年龄',
              iconOption: {
                className: 'icon-dizhi'
              },
              option: {
                textAlign: 'right',
                placeholder: '输入名字'
              }
            }
          },
          {
            name: 'YSwitch',
            disabled: true,
            key: 'OffNo1',
            value: 0,
            options: {
              label: '开关',
              option: {
                off: 0,
                no: 1,
                radius: true
              }
            }
          },
          {
            name: 'YSwitch',
            key: 'OffNo2',
            options: {
              label: '开关',
              option: {
                radius: false
              }
            }
          },
          {
            name: 'YRadio',
            disabled: true,
            key: 'radio1',
            value: 1,
            options: {
              label: '单选',
              option: {
                off: 0,
                no: 1,
                radius: true
              }
            }
          },
          {
            name: 'YRadio',
            key: 'radio',
            options: {
              label: '单选',
              option: {
                radius: false
              }
            }
          },
          {
            name: 'YTextSwitch',
            key: 'OffNo3',
            options: {
              label: '开关',
              option: {
                radius: false,
                list: [
                  {
                    id: '1',
                    text: '部门负责人审批',
                  },
                  {
                    id: '2',
                    text: '出警登记',
                  },
                  {
                    id: '3',
                    text: '司法警察大队负责人审批',
                  },
                ]
              }
            }
          },
          {
            name: 'YTextarea',
            key: 'textarea1',
            value: 'dddddddd',
            options: {
              label: {
                label: '说明',
                text: '领导意见'
              },
              option: {
                placeholder: '说明'
              }
            }
          },
          {
            name: 'YTextarea',
            key: 'textarea',
            options: {
              option: {
                placeholder: '说明'
              }
            }
          },
          {
            name: 'YCheckbox',
            key: 'checkbox',
            options: {
              label: [{
                id: 1,
                name: '张三',
                imgUrl: ''
              }, {
                id: 2,
                name: '李四',
                imgUrl: ''
              }],
              option: {
                key: 'id'
              }
            }
          },
          {
            name: 'YCalendar',
            key: 'calendar',
            options: {
              label: '',
              option: {
                type: ''
              }
            }
          },
          {
            name: 'YSelector',
            key: 'selector',
            value: {
              hour: 22,
              minute: 33,
              second: 33
            },
            options: {
              label: '时分秒',
              option: {
                type: 'time'
              }
            }
          },
          {
            name: 'YSelector',
            key: 'nation',
            value: {
              nation: '民族'
            },
            options: {
              label: '选择民族',
              option: {
                type: 'nation'
              }
            }
          },
          {
            name: 'YSelector',
            key: 'time',
            value: {
              start: {
                hour: 11,
                minute: 33,
                second: 33
              },
              end: {
                hour: 22,
                minute: 33,
                second: 33
              }
            },
            options: {
              label: '选择区间时间',
              option: {
                sign: ':',
                list: {
                  hour: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                  minute: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                  second: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                },
                type: 'time',
                isBefore: true,
                isSelectionPeriod: true // 开启区间选择
              }
            }
          },
          {
            name: 'YSelector',
            key: 'date2',
            options: {
              label: '日期区间',
              option: {
                type: 'date',
                isBefore: true,
                isSelectionPeriod: true // 开启区间选择
              }
            }
          },
          {
            name: 'YSelector',
            key: 'date3',
            options: {
              label: '选择日期',
              option: {
                type: 'date',
                isBefore: true,
                isSelectionPeriod: false // 开启区间选择
              }
            }
          },
          {
            name: 'YSelector',
            key: 'sum',
            value: {
              sum: 3
            },
            options: {
              label: '自定义select',
              option: {
                list: {
                  sum: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                }
              }
            }
          },
          {
            name: 'YMemberList',
            key: 'member',
            options: {
              label: {
                label: '选择成员',
                text: '选择3人'
              },
              option: {
                showDetail: false, // 查看明细
                isEdit: false, // 编辑状态
                list: [
                  {
                    imgUrl: '',
                    name: '张三'
                  },
                  {
                    imgUrl: '',
                    name: '张三'
                  },
                  {
                    imgUrl: '',
                    name: '张三'
                  },
                  {
                    imgUrl: '',
                    name: '张三'
                  },
                  {
                    imgUrl: '',
                    name: '张三'
                  },
                  {
                    imgUrl: '',
                    name: '张三'
                  },
                  {
                    imgUrl: '',
                    name: '张三'
                  }
                ]
              }
            }
          },
          {
            name: 'YAnnex',
            key: 'annex',
            options: {
              label: {
                label: '申请人',
                showIcon: false
              },
              option: {
                showDetail: false,
                list: [{
                  imgUrl: '',
                  name: '张三',
                  date: '2019/12/24 18:18:00'
                }, {
                  imgUrl: '',
                  name: '张三',
                  date: '2019/12/24 18:18:00'
                }]
              }
            }
          },
          {
            name: 'YAnnexe',
            key: 'annexe',
            options: {
              label: {
                label: '附件',
                text: '共3人'
              },
              option: {
                list: [{
                  name: 'dddddd.png',
                  date: '2020/3/24 20:02:33',
                  imgUrl: require('@/assets/images/people.png')
                }, {
                  name: 'dddddd.pdf',
                  date: '2020/3/24 20:02:33',
                }]
              }
            }
          },
          {
            name: 'YStep',
            key: 'step',
            options: {
              option: {
                active: 2, // 当前激活步骤
                isEnd: false,
                isShow: false,
                list: [
                  {
                    value: 'ces',
                    text: ['张三', '2019/20/23 02:05:08'], // 循环p标签
                    label: '已同意',
                    option: {
                      size: 'medium',
                      className: 'primary',
                      padding: '5px 0',
                    },
                  },
                  {
                    value: 'ces',
                    text: ['张三', '2019/20/23 02:05:08'], // 循环p标签
                    label: '待审批',
                    option: {
                      size: 'medium',
                      className: 'primary',
                      padding: '5px 0',
                    },
                  },
                ]
              }
            },
          },
        ]
      }
    },
    methods: {
      setData () {
        this.config.forEach(item => {
          if (item.name === 'YButton') return
          this.$set(this.options, item.key, item.value)
        })
      },
      async getData (id) {
        const { data } = await this.$Request(`/api/judge/leadershipApproval/listDept?parentId=${id}`, {
          methods: 'post'
        })
        const deptList = data.deptList.map(item => ({ ...item, branch: true, request: false, open: false, children: [] }))
        const judgeList = data.judgeList.map(item => ({ ...item, checked: false, branch: false }))
        if (id) return { deptList, judgeList };
        this.list.push(...deptList, ...judgeList)

        this.input()
      },
      async input () {
        const value = '苏';
        if (!value) return
        const { data } = await this.$Request('api/judge/leadershipApproval/listCommonUser', {
          methods: 'post',
          query: {
            userName: value
          }
        })
        this.searchList = data.map(item => ({
          name: item.fullname,
          imgUrl: item.avator,
          id: item.id,
          username: item.fullname,
        }))
      },
      async toggle (item) {
        const { deptList, judgeList } = await this.getData(item.deptId)
        item.children.push(...deptList, ...judgeList);
      },

      selected (val) {
        val.forEach(id => {
          const index = this.checkList.findIndex(item => item.id == id)
          const searchIndex = this.searchList.find(item => item.id == id)
          if (index === -1) {
            this.checkList.push(searchIndex)
          }
        })
      },
      events () {
      },
      checkLogin () {
      },
    },
    created () {
      this.setData()
      this.getData(0);
    },
    mounted () {
      // this.$YToast({message: '33333', time: 3000})
    }
  }
</script>

<style lang="scss" scoped>
  .config_component {
    padding-top: 10px;
    background-color: #f7f7f9;
  }
</style>
