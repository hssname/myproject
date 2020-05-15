<template>
  <div class="chart_room overflow bg-white">
    <div class="room flex flex-s-b margin-15 bg_white_f8f9fb" :style="{height: `${winHeight * 0.94}px`}">
      <div class="flex-5">
        <p class="text-center color-00 bg-white padding-b-10">{{`群聊（${onlineManlist.length}）`}}</p>
        <div class="margin-t-10">
          <div v-for="(item,index) in newsList" :key="index">
            <div class="flex flex-c"><span
              class="text-center font-12 padding-lr-5 padding-tb-2 border_radius_5 bg_white_e7e7e8 color-99">{{formatFriendTime(item.sendDate)}}</span>
            </div>
            <div class="flex" :class="isSelf(item)?'flex-h-end':''">
              <img :src="item.headUrl" v-if="!isSelf(item)"
                   class="width_35px height_35px margin-r-10 margin-t-5"/>
              <div class="flex-v flex    ">
                <div class="flex" :class="isSelf(item)?'flex-h-end text-right':''">
                  <!--  是自己   私信放前面-->
                  <template v-if="+item.isPersonalMsg===1&&isSelf(item)">
                    <span
                      class="font-12  bg_yellow_ec6439   font-5 border_radius_2 padding-tb-2  text-center padding-lr-5 color-white margin-r-10">{{item.messageBody.isRecive?'回复私信':'私信'}}</span>
                  </template>
                  <p class="font-14 color-66 margin-r-10" v-if="notNull(getLittleTitle(item))">
                    {{getLittleTitle(item)}}</p>
                  <p class="font-14  color-33 ">{{item.sendMemName}}</p>
                  <template v-if="+item.isPersonalMsg===1&&!isSelf(item)">
                    <span
                      class=" font-12 bg_yellow_ec6439 font-5   border_radius_2 padding-tb-2  text-center padding-lr-5 color-white margin-l-10">{{item.messageBody.isRecive?'回复私信':'私信'}}</span>
                    <img src="@/assets/images/reply.png" class="width_20px width_20px margin-l-10"
                         @click="replayMsg(item)">
                  </template>

                </div>
                <span class="font-12  color-99" :class="isSelf(item)?'text-right':''"
                      v-if="+item.isPersonalMsg===1">
                                {{item.messageBody.isRecive?'回复私信:':'私信:'}}{{item.messageBody.sendPeopleName}}</span>
                <div class="flex">
                  <div v-if="item.sendMemIdentityId=== loginUserInfo.identityId" class="flex-1"></div>
                  <!-- 为了上div宽度自适应-->
                  <div class="margin-t-10"
                       :class="item.sendMemIdentityId === loginUserInfo.identityId?'box_right':'box_left'"
                  >
                    <!--messageType===1 文字消息 ************************************************************************************* -->
                    <div v-if="+item.messageType===1" class="font-14 color-33">
                      {{item.messageBody.content?item.messageBody.content:item.messageBody.value}}
                    </div>

                    <!--messageType===2 图片 ************************************************************************************* -->
                    <div class="flex-wrap" v-if="+item.messageType===2">
                      <template v-if="notNull(item.messageBody.value)">
                        <img v-for="img in item.messageBody.value "
                             :key="img"
                             class="width_150px margin-l-10"
                             :src="img"/>
                      </template>
                      <img v-else
                           class="width_150px"
                           :src="item.messageBody"/>
                    </div>

                    <!--messageType===3 语音 ************************************************************************************* -->
                    <div v-if="+item.messageType===3">
                      <img v-if="isSelf(item)"
                           :src="item.isPlaySoundimg?require('@/assets/images/ic_playing_right.gif'):require('@/assets/images/ic_sound_right.png')"
                           @click="playSound(item,msgIndex)">
                      <img v-else
                           :src="item.isPlaySoundimg?require('@/assets/images/ic_playing_left.gif'):require('@/assets/images/ic_sound_left.png')"
                           @click="playSound(item,msgIndex)">
                    </div>
                    <!--messageType===4 视频 ************************************************************************************* -->
                    <div class="flex flex-v-c" v-if="+item.messageType===4"
                         @click="windowopen(notNull(item.messageBody.value)?item.messageBody.value:item.messageBody,item.id)">
                      <img src="@/assets/images/video_box.png" width="30" height="30">
                      <div class="flex flex-v margin-l-20">
                        <p class="font-14 color-blue_108ee9"> 查看视频详情</p>
                        <p class="font-5 color-99 margin-t-5">建议使用WIFI情况下观看</p>
                      </div>
                    </div>
                    <!--messageType===5 地图 ************************************************************************************* -->
                    <div class="flex flex-v" v-if="+item.messageType===5" @click="openLocation(item)">
                      <span class="font-12 text-left">{{item.messageBody.address}}</span>
                      <el-image class="width_150px margin-t-5"
                                :src="item.messageBody.src">
                      </el-image>
                    </div>
                    <!--messageType===6  证据 ************************************************************************************* -->
                    <div class="flex flex-v flex-v-c " v-if="+item.messageType===6"
                    >
                      <div class="flex flex-v-c  width100 "
                           :class="showSpitLine(fileIndex,item.messageBody.files)?' margin-t-10 padding-t-10  border_top_1':''"
                           @click="!file.hasFile?preViewIm(file.imgs):showSeeFileDetailDialo(file.imgs,item)"
                           v-for="(file,fileIndex) in item.messageBody.files" :key="fileIndex">
                        <img v-if="file.hasFile"
                             class="width_25px height_30px"
                             :src="require('@/assets/images/pdf@2x.png')"/>
                        <img v-else class="width_25px height_25px" ref="el_im6"
                             :src="require('@/assets/images/icon-img.png')"
                        />
                        <div class="flex flex-v margin-l-20 ">
                          <p class="font-14 color-blue_108ee9">查看{{file.tip}}详情</p>
                          <p class="font-5 color-99 margin-t-5">
                            {{file.hasFile?'建议使用WIFI情况下查看':'多张图片可左右滑动'}}</p>
                        </div>
                      </div>
                    </div>


                    <!--messageType===7 质证类型 messageType===18  释明回复 ***  messageType===19 调解回复  ************************************************************************************* -->
                    <div v-if="+item.messageType===7||+item.messageType===18||+item.messageType===19">
                      <p class="font-14 color-66"> {{item.messageBody.title}}</p>
                      <!--质证中包含图片-->
                      <!--<div class="margin-t-10" v-if="notNull(item.messageBody.content)">
                        <img
                          v-viewer
                          class="width_150px"
                          v-for="img in  item.messageBody.content"
                          :preview-src-list="item.messageBody.content"
                          :src="img">
                        </img>
                      </div>-->
                      <p class="font-14 color-00 margin-t-10"> {{item.messageBody.info}}</p>
                    </div>

                    <!--messageType===8 文书类型   ************************************************************************************* -->

                    <div class="flex flex-v " v-if="+item.messageType===8">
                      <!--  送达回证-->
                      <div v-if="item.messageBody.backUrl" class="flex flex-v-c"
                           @click="windowopen(item.messageBody.backUrl,item.id)">
                        <img class="width_25px height_30px"
                             src="@/assets/images/pdf@2x.png">
                        <p class="font-14  margin-lr-15 color-blue_108ee9 width_120px">送达回证</p>
                        <p class="font-14 border-left_1_gray  padding-l-10 color-blue_108ee9">查看</p>
                      </div>
                      <div class="flex flex-v-c padding-tb-8 "
                           :class="fileIndex!==0?' border_top_1 ':''"
                           v-for="(file,fileIndex) in item.messageBody.files" :key="fileIndex">
                        <img v-if="file.fileList&&file.fileList.length>0"
                             class="width_25px height_25px"
                             src="@/assets/images/pdf@2x.png">
                        <img v-if="file.imgs&&file.imgs.length>0"
                             class="width_25px height_25px"
                             ref="el_im8"
                             :src="require('@/assets/images/icon_slice1.png')"
                             @click="preViewIm(file.imgs)"/>
                        <p class="font-14 margin-lr-15 color-blue_108ee9 width_120px"
                           v-if="notNull(file.fileList)">{{file.fileList[0].name}}</p>
                        <p class="font-14 margin-lr-15 color-blue_108ee9 width_120px"
                           v-else>{{file.types[0].typename == '其他' ?file.types[0].title :
                          file.types[0].typename}}</p>
                        <p class="font-14 border-left_1_gray  padding-l-10 color-blue_108ee9"
                           @click="!notNull(file.fileList)?preViewIm(file.imgs):windowopen(file.fileList[0].Location,item.id)">
                          查看</p>

                      </div>
                    </div>

                    <!--messageType===10   文件 ************************************************************************************* -->
                    <div v-if="+item.messageType===10">
                      <div class="flex flex-v-c"
                           v-for="(file,fileIndex) in item.messageBody.value" :key="fileIndex">
                        <div class="flex flex-v-c" :class="fileIndex!==0?'margin-tb-10 border_top_1':''"
                             @click="windowopen(file.Location,item.id)">
                          <img
                            class="width_25px height_30px"
                            :src="require('@/assets/images/pdf@2x.png')"/>
                          <div class="flex flex-v">
                            <p class="font-14 margin-lr-15 color-blue_108ee9 width_120px line4">
                              {{file.name}}</p>
                            <p class="font-5 color-99 margin-t-5">建议使用WIFI情况下查看</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--messageType===16   文书 messageType===17  调解协议 ************************************************************************************* -->
                    <div class="flex flex-v-c" v-if="+item.messageType===16||+item.messageType===17">
                      <div class="flex flex-v-c padding-tb-8"
                           @click="!item.messageBody.hasFile?preViewIm(item.messageBody.content):showSeeFileDetailDialo(item.messageBody.content,item)">
                        <img v-if="item.messageBody.hasFile"
                             class="width_25px height_25px"
                             src="@/assets/images/pdf@2x.png">
                        <img v-else
                             class="width_25px height_25px"
                             ref="el_im8"
                             :src="require('@/assets/images/icon_slice1.png')"
                        />
                        <div class="flex flex-v  ">
                          <p class="font-14 margin-lr-15 color-blue_108ee9 width_120px">
                            {{item.messageBody.title?item.messageBody.title:'谈话笔录图片'}}</p>
                          <p class="font-5 color-99 margin-t-5">
                            {{item.messageBody.hasFile?'建议使用WIFI情况下查看':'多张图片可左右滑动'}}</p>
                        </div>
                        <p class="font-14 border-left_1_gray  padding-l-10 color-blue_108ee9">
                          {{+item.messageType===16?'查看笔录':'查看文件'}}</p>
                      </div>
                    </div>


                    <!--messageType===2018 多方视频 ************************************************************************************* -->
                    <!-- <div class="flex" v-if="+item.messageType===2018" @click="goMultipartyVideo">
                       <img src="@/assets/images/law.png">
                       <div class="flex flex-v  margin-l-10 flex-h-c">
                         <p class="font-14">邀请人员进行多方视频</p>
                         <p class="font-14 text-left ">
                           参与人员：{{item.messageBody.sendPeopleName.join(',')}}</p>
                       </div>
                     </div>-->

                    <!--messageType===2019 庭审会议 ************************************************************************************* -->
                    <!-- <div class="flex flex-v" v-if="+item.messageType===2019" @click="getmeeting(item)">
                       <div class="flex">
                         <img src="@/assets/images/ic_meeting.png" class="width_25px height_25px">
                         <p class="font-14 color-00 margin-l-10"> {{item.messageBody.meetingType ==
                           '0'?'庭审会议':'调解会议'}}</p>
                         <p class="font-14  margin-l-10 flex-1 text-right"
                            :class="+item.meetingStatus===2?'color-99':'color-blue_108ee9'">
                           {{+item.meetingStatus!==2?'立即进入':'已结束'}}</p>
                       </div>
                       <p class="font-15 font-blod border_top_1 margin-t-10 padding-t-8">预约时间<span
                         class="font-14 color-66 margin-l-10">{{item.messageBody.meetingTime}}</span>
                       </p>
                       <p class="font-14 color-66 margin-t-5 text-left">
                         {{item.messageBody.content}}</p>
                     </div>-->

                    <!--messageType===2020  庭审会议那边传过来的文书 ************************************************************************************* -->
                    <!-- <div class="flex flex-v-c" v-if="+item.messageType===2020">
                       <div class="flex flex-v-c padding-tb-8"
                            @click="windowopen(item.messageBody.content[0],item.id)">
                         <img
                           class="width_25px height_25px"
                           src="@/assets/images/pdf@2x.png">
                         <p class="font-14 margin-lr-15 color-blue_108ee9 width_120px line4">
                           {{item.messageBody.fileType}}</p>
                         <p class="font-14 border-left_1_gray  padding-l-10 color-blue_108ee9">查看</p>
                       </div>
                     </div>-->
                  </div>
                  <div v-if="item.sendMemIdentityId!= loginUserInfo.identityId" class="flex-1"></div>
                  <!-- 为了上div宽度自适应-->
                </div>
              </div>
              <img :src="item.headUrl" v-if="isSelf(item)"
                   class="width_35px height_35px margin-l-10 margin-t-5"/>
            </div>
          </div>
        </div>
        <div class="margin-t-10 margin-l-10" @click="recStart" style="cursor: pointer">录音</div>
      </div>
      <div class="flex-2 border-left_1_gray padding-lr-10 bg-white">
        <div class="border_bottom_1 padding-b-10">
          <img src="@/assets/images/ic_in_man.png" width="20" height="20">
          <span class="color-00 padding-l-10">到庭情况</span>
        </div>
        <div class="onlineManlist" v-for="(item,index) in onlineManlist" :key="index">
          <div class="margin-t-10" :class="item.state === 'Online' ? 'color-blue_108ee9': 'opacity0_3 color-99'">
            <img :src="item.headUrl" :alt="item.headUrl" width="35px" height="35px"/>
            <span class="padding-l-8">{{item.positionName}}</span>
            <span class="padding-l-8">[{{item.state === 'Online' ? '在线': '离线'}}]</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Recorder from 'recorder-core'
  import 'recorder-core/src/engine/mp3'
  import 'recorder-core/src/engine/mp3-engine'
  const audioContext = new (window.AudioContext || window.webk)
  // import BaseInput from '../baseComponents/BaseInput/BaseInput'
  import { friendTime, isNotNull } from '../util/util'

  export default {
    name: 'chatRoom',
    // components: { BaseInput },
    data () {
      return {
        loginUserInfo: {
          identityId: '513030199411243122',
        },
        onlineManlist: [
          {
            positionName: '仲裁员',
            isEnter: true,
            identityId: '513030199411243122',
            ident: '1',
            headUrl: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/%E4%BB%B2%E8%A3%81%E5%91%98.png',
            name: '郭秀竹',
            shuttedUinStatus: true,
            state: 'Online',
            type: '11',
            isEnterDate: '2020-05-08 11:21:53',
          },
          {
            positionName: '被申请人',
            isEnter: true,
            identityId: '412727198910245457',
            ident: '0',
            headUrl: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/%E8%A2%AB%E7%94%B3%E8%AF%B7%E4%BA%BA.png',
            name: '豆亚南',
            shuttedUinStatus: true,
            state: 'Offline',
            type: '3',
            isEnterDate: '2020-05-08 13:34:26',
          },
          {
            positionName: '申请人委托代理人',
            isEnter: true,
            identityId: '141025198704260026',
            ident: '0',
            headUrl: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/%E7%94%B3%E8%AF%B7%E4%BA%BA%E4%BB%A3.png',
            name: '宋欣芳',
            shuttedUinStatus: true,
            state: 'Offline',
            type: '7',
            isEnterDate: '2020-05-08 15:41:23',
          }
        ],//当事人人员集合  type<10
        newsList: [
          {
            id: '5eb8acc428d9f0000cdb2d2c',
            caseId: '48536587-fa80-4eba-9447-218e3f938fa1',
            sendMemOpenid: 'o-c7U5DQ4kABz6ujE7YnZcVlYH3g',
            sendMemName: '郭秀竹',
            sendMemRole: '11',
            roleName: '仲裁员',
            juris: [{
              openid: 'o-c7U5AYAxBEjeOhq2CkDGotjN1g',
              type: '7',
              name: '宋欣芳',
              superName: '北京百度',
              superOpenid: 'null',
              setIdentAddCaseId: null,
              identityId: '141025198704260026',
            }, {
              openid: 'o-c7U5L1XtOMS4rAobkqVgda8tpQ',
              type: '3',
              name: '豆亚南',
              superName: null,
              superOpenid: null,
              setIdentAddCaseId: null,
              identityId: '412727198910245457',
            }],
            messageType: '6',
            messageBody: {
              messagePostMem: '吴琼',
              messagePostIdentity: ['210304198801281613'],
              files: [
                {
                  title: '证据',
                  tip: '证据',
                  types: '身份证明',
                  imgs: [
                    {
                      Location: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/files/cf6d74bcce374f97bc684c0467edcd29.jpg',
                      name: '4.jpg'
                    }
                  ],
                  hasFile: false,
                }
              ],
              arrChecked: [
                {
                  id: 71192,
                  name: '吴琼',
                  type: 1,
                  identityId: '210304198801281613',
                  identityType: 1,
                  positionName: '被申请人',
                  position: 3,
                  sequence: 'a4e5c5e79d7d43e4b39b839efc5c08dc',
                  caseId: 751908,
                  phoneId: '15998060431',
                  openid: 'o-c7U5PGLGnvOLqAr2Cno2hDcrRo',
                  agent: [],
                }
              ],
              identityIds: ['141025198704260026', '412727198910245457', '210304198801281613', '410882199205195522'],
              sendMemIdentityId: '513030199411243122',
              sendDate: '2020-05-11 09:39:16',
              date: null,
              questionIdent: '1',
              headUrl: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/%E4%BB%B2%E8%A3%81%E5%91%98.png',
              questionType: null,
              isPersonalMsg: 0,
              shouldReload: false,
              groupId: '2516417820368044042',
              receivers: '',
              status: true,
              readIds: ['513030199411243122'],
              readMemModels: [{
                name: '郭秀竹',
                identityId: '513030199411243122',
                type: '11',
                readDate: '2020-05-11 09:39:16'
              }],
              source: 1,
              meetingId: null,
              pcRoomId: null,
              meetingStatus: null,
              evidenceName: null,
              evidenceType: '证据清单',
            },
            identityIds: ['141025198704260026', '412727198910245457', '210304198801281613', '410882199205195522'],
            sendMemIdentityId: '513030199411243122',
            sendDate: '2020-05-11 09:39:16',
            date: null,
            questionIdent: '1',
            headUrl: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/%E4%BB%B2%E8%A3%81%E5%91%98.png',
            questionType: null,
            isPersonalMsg: 0,
            shouldReload: false,
            groupId: '2516417820368044042',
            receivers: '',
            status: true,
            readIds: ['513030199411243122'],
            readMemModels: [{
              name: '郭秀竹',
              identityId: '513030199411243122',
              type: '11',
              readDate: '2020-05-11 09:39:16'
            }],
            source: 1,
            meetingId: null,
            pcRoomId: null,
            meetingStatus: null,
            evidenceName: null,
            evidenceType: '证据清单',
          },
          {
            id: '5eb8acc428d9f0000cdb2d2c',
            caseId: '48536587-fa80-4eba-9447-218e3f938fa1',
            sendMemOpenid: 'o-c7U5DQ4kABz6ujE7YnZcVlYH3g',
            sendMemName: '郭秀竹',
            sendMemRole: '11',
            roleName: '仲裁员',
            juris: [{
              openid: 'o-c7U5AYAxBEjeOhq2CkDGotjN1g',
              type: '7',
              name: '宋欣芳',
              superName: '北京百度',
              superOpenid: 'null',
              setIdentAddCaseId: null,
              identityId: '141025198704260026',
            }, {
              openid: 'o-c7U5L1XtOMS4rAobkqVgda8tpQ',
              type: '3',
              name: '豆亚南',
              superName: null,
              superOpenid: null,
              setIdentAddCaseId: null,
              identityId: '412727198910245457',
            }],
            messageType: '6',
            messageBody: {
              messagePostMem: '吴琼',
              messagePostIdentity: ['210304198801281613'],
              files: [
                {
                  title: '证据',
                  tip: '证据',
                  types: '身份证明',
                  imgs: [
                    {
                      Location: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/files/cf6d74bcce374f97bc684c0467edcd29.jpg',
                      name: '4.jpg'
                    }
                  ],
                  hasFile: false,
                }
              ],
              arrChecked: [
                {
                  id: 71192,
                  name: '吴琼',
                  type: 1,
                  identityId: '210304198801281613',
                  identityType: 1,
                  positionName: '被申请人',
                  position: 3,
                  sequence: 'a4e5c5e79d7d43e4b39b839efc5c08dc',
                  caseId: 751908,
                  phoneId: '15998060431',
                  openid: 'o-c7U5PGLGnvOLqAr2Cno2hDcrRo',
                  agent: [],
                }
              ],
              identityIds: ['141025198704260026', '412727198910245457', '210304198801281613', '410882199205195522'],
              sendMemIdentityId: '513030199411243133',
              sendDate: '2020-05-11 09:39:16',
              date: null,
              questionIdent: '1',
              headUrl: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/%E4%BB%B2%E8%A3%81%E5%91%98.png',
              questionType: null,
              isPersonalMsg: 0,
              shouldReload: false,
              groupId: '2516417820368044042',
              receivers: '',
              status: true,
              readIds: ['513030199411243133'],
              readMemModels: [{
                name: '郭秀竹',
                identityId: '513030199411243133',
                type: '11',
                readDate: '2020-05-11 09:39:16'
              }],
              source: 1,
              meetingId: null,
              pcRoomId: null,
              meetingStatus: null,
              evidenceName: null,
              evidenceType: '证据清单',
            },
            identityIds: ['141025198704260026', '412727198910245457', '210304198801281613', '410882199205195522'],
            sendMemIdentityId: '513030199411243133',
            sendDate: '2020-05-11 09:39:16',
            date: null,
            questionIdent: '1',
            headUrl: 'https://szwzc-1255516392.cos.ap-chengdu.myqcloud.com/%E4%BB%B2%E8%A3%81%E5%91%98.png',
            questionType: null,
            isPersonalMsg: 0,
            shouldReload: false,
            groupId: '2516417820368044042',
            receivers: '',
            status: true,
            readIds: ['513030199411243133'],
            readMemModels: [{
              name: '郭秀竹',
              identityId: '513030199411243133',
              type: '11',
              readDate: '2020-05-11 09:39:16'
            }],
            source: 1,
            meetingId: null,
            pcRoomId: null,
            meetingStatus: null,
            evidenceName: null,
            evidenceType: '证据清单',
          }
        ],
        rec: 0,
        isRecording: false,
        blob: null,
        sendWord: '22',
        winHeight: window.innerHeight,
      }
    },
    methods: {
      // 开始录音
      recStart () {
        this.rec = Recorder({
          type: 'mp3',
          bitRate: 16,
          sampleRate: 16000,
          onProcess: (buffers, powerLevel, duration, sampleRate) => {

          }
        })
        this.rec.open(() => {
          if (this.rec) {
            this.rec.start()
          }
        }, (msg, isUserNotAllow) => {
          //用户拒绝未授权或不支持
          console.log((isUserNotAllow ? 'UserNotAllow，' : '') + '无法录音:' + msg)
        })
      },
      // 结束录音
      recStop () {
        this.rec.stop((blob, duration) => {
          console.log(blob, (window.URL).createObjectURL(blob), '时长:' + duration + 'ms')
          this.rec.close()//释放录音资源，当然可以不释放，后面可以连续调用start；但不释放时系统或浏览器会一直提示在录音，最佳操作是录完就close掉
          this.rec = null
        })
      },
      formatFriendTime (item) {
        return friendTime(item)
      },
      //是本人
      isSelf (item) {
        return item.sendMemIdentityId === this.loginUserInfo.identityId
      },
      notNull (obj) {
        return isNotNull(obj)
      },
      getLittleTitle (item) {
        if (+item.messageType === 6) {
          return '提交' + item.messageBody.messagePostMem + '的' + (item.messageBody.files[item.messageBody.files.length - 1].type ? item.messageBody.files[item.messageBody.files.length - 1].type : '证据清单') + (isNotNull(item.messageBody.page) ? (item.messageBody.page + '份') : '')
        } else if (+item.messageType === 16) {
          return '提交笔录'
        } else if (+item.messageType === 17) return '提交调解协议'
      },
      replayMsg (item) {
        // 回复私信
      },
      windowopen (url, id) {
        window.open(url)
        // this.updateRead(id)
      },
      preViewIm () {
      },
      //是否显示分割线
      showSpitLine (fileIndex, files) {
        var showspit = false
        files.filter(item => item.imgs.length > 0).forEach((f, index) => {
          if (files[fileIndex] === f && index > 0) showspit = true
        })
        return showspit
      },

      showSeeFileDetailDialo (imgs, item) {
        if (imgs[0] instanceof Object) { //这种集合 {Location :'图片地址 ', name:'文件名'
          this.SeeFileDetailList = imgs
        } else { //纯文件地址
          this.SeeFileDetailList = imgs.map((item, index) => {  //组合一个对象  在组件中用
            return {
              Location: item,
              name: '材料' + (index + 1)
            }
          })
        }
        // this.$refs.seeFileDetailDialog.openDialog()
        // this.updateRead(item.id)
      }
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          that.winHeight = window.innerHeight
        })()
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
