<template>
  <el-header>
      <div class="headerCont">
        <img :src="logo" alt="" class="logo">
        <div class="rightBox">
          <div class="register" @click="registerClick">
            请注册
          </div>
          <div class="login" @click="loginClick">
            登录
          </div>
          <!-- 头像图标 -->
          <div class="userPhotoBox">
            <!-- 头像 -->
            <div class="userPhoto"></div>
            <!-- hover用户信息 -->
            <div class="dropdownGet">
              <div class="dropdownBox">
                <div class="headerBox">
                  <div class="headerPic">
                    <!-- <img :src="prodImg" alt=""> -->
                  </div>
                  <div class="headerTxt">
                    <div class="nameBox">
                      <div class="name">会员昵称</div>
                      <div class="tag">VIP</div>
                    </div>
                    <div class="count">
                      余额：2345
                    </div>
                  </div>
                  
                </div>
                <div class="menus">
                  <div class="menuItem">
                    <img :src="menu_my" alt="">
                    <div class="menuName">
                      个人中心
                    </div>
                  </div>
                  <div class="menuItem">
                    <img :src="menu_order" alt="">
                    <div class="menuName">
                      我的订单
                    </div>
                  </div>
                  <div class="menuItem">
                    <img :src="menu_get" alt="">
                    <div class="menuName">
                      我的收藏
                    </div>
                  </div>
                  <div class="menuItem">
                    <img :src="menu_bag" alt="">
                    <div class="menuName">
                      我的钱包
                    </div>
                  </div>
                </div>
                <div class="dropBtn">切换账号</div>
                <div class="dropBtn">退出登录</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 登录 -->
      <Login ref="LoginRef" @registerOpenClick="registerClick" @forgetClick="forgetClick"/>
      <!-- 注册 -->
      <Register ref="RegisterRef" />
      <!-- 忘记密码 -->
      <Forget ref="ForgetRef" />
    </el-header>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';
import { ElMessage } from 'element-plus'
import logo from '@/assets/logo.svg';
import request from '@/utils/request/index.js';
import prodImg from '@/assets/prodImg.png';

import menu_my from '@/assets/menu_my.png';
import menu_order from '@/assets/menu_order.png';
import menu_get from '@/assets/menu_get.png';
import menu_bag from '@/assets/menu_bag.png';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Forget from '@/views/Forget.vue';
export default {
  name: 'app',
  components: {
    Login,
    Register,
    Forget
  },
  setup() {
    const RegisterRef = ref();
    const LoginRef = ref();
    const ForgetRef = ref();
    
    // 注册
    const registerClick = () => {
      RegisterRef.value.open()
    }
    // 登录
    const loginClick = () => {
      LoginRef.value.open()
    }
    // 忘记密码
    const forgetClick = () => {
      ForgetRef.value.open()
    }

    return {
      RegisterRef,
      LoginRef,
      ForgetRef,
      logo,
      registerClick,
      loginClick,
      forgetClick,
      prodImg,
      menu_my,
      menu_order,
      menu_get,
      menu_bag
    };
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  height: 80px;
  line-height: 80px;
  background: #252526 ;
  max-height: 100vh;
  .headerCont {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .rightBox {
      color: #fff;
      display: flex;
      align-items: center;
      .register {
        cursor: pointer;
      }
      .login {
        margin-left: 20px;
        cursor: pointer;
      }
      .userPhotoBox {
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 1;
        .userPhoto {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #ccc;
          margin-left: 20px;
          cursor: pointer;
        }
        .dropdownGet {
          position: absolute;
          width: 100%;
          height: 6px;
          bottom: -4px;
          left: 0;
          display: none;
          .dropdownBox {
            position: absolute;
            width: 614px;
            border-radius: 14px;
            box-shadow: 0 5px 20px -5px #ccc;
            top: 2px;
            right: 0;
            background: #fff;
            color: #333;
            .headerBox {
              padding: 58px 42px 39px;
              display: flex;
              .headerPic {
                width: 97px;
                height: 97px;
                border-radius: 50%;
                background: #999;
                // img {
                //   width: 100%;
                // }
                
              }
              .headerTxt {
                padding-top: 24px;
                padding-left: 24px;
                div {
                  height: 26px;
                  line-height: 26px;
                }
                .nameBox {
                  font-weight: bold;
                  display: flex;
                  align-items: center;
                  .name {
                    font-size: 20px;
                    padding-right: 10px;
                  }
                  .tag {
                    background: rgba(186, 1, 36, 1);
                    color: #fff;
                    width: 68px;
                    height: 18px;
                    line-height: 18px;
                    border-radius: 9px;
                    text-align: center;
                  }
                }
                .count {
                  font-weight: bold;
                  color: rgba(186, 1, 36, 1);
                }
              }
            }
            .menus {
              display: flex;
              border-top: 1px solid rgba(0,0,0, 0.07);
              line-height: normal;
              justify-content: space-evenly;
              .menuItem {
                text-align: center;
                padding: 40px 0;
                cursor: pointer;
                img {
                  width: 66px;
                }
                .menuName {
                  font-weight: bold;
                  padding-top: 15px;
                  font-size: 16px;
                }
              }
            }
            .dropBtn {
              cursor: pointer;
              height: 40px;
              line-height: 40px;
              text-align: center;
              border-top: 1px solid rgba(0,0,0, 0.07);
              color: rgba(102, 102, 102, 1);
            }
          }
        }
        &:hover {
          .dropdownGet {
            display: block;
          }
          
        }
      }
      
    }
    .logo {
      width: 2rem;
    }
  }
  
}



</style>
