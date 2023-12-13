<template>
  <div>
    <!--导航菜单-->
    <div class="nav-container">
      <!--logo-->
      <div class="logo">xx控制台</div>

      <!--菜单-->
      <div class="menu-container">
        <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="onUpdate" />
      </div>

      <!--操作按钮-->
      <div class="control-container">
        <!--铃铛-->
        <div class="control-item control-item-small">
          <div class="control-wrap">
            <n-icon size="20">
              <iconBell />
            </n-icon>
            <n-badge :value="10" class="bell-wrap" />
          </div>
        </div>

        <!--设置-->
        <div class="control-item control-item-small">
          <div class="control-wrap">
            <n-icon size="20">
              <iconSetting />
            </n-icon>
          </div>
        </div>

        <n-dropdown :options="options" placement="bottom-start" trigger="hover" @select="handleSelect">
          <div class="control-item control-item-user">
            <div class="control-wrap">
              <n-icon size="22">
                <iconUserCircle />
              </n-icon>
              <span>张三</span>
            </div>
          </div>
        </n-dropdown>
      </div>
    </div>

    <!--显示的内容-->
    <div class="layout-main-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { h, ref } from 'vue';
import { NIcon, useMessage } from 'naive-ui';
import iconUser from '@/components/svg/user.vue';
import iconUserCircle from '@/components/svg/userCircle.vue';
import iconHome from '@/components/svg/home.vue';
import iconSetting from '@/components/svg/setting.vue';
import iconBell from '@/components/svg/bell.vue';
import iconRank from '@/components/svg/rank.vue';
import { useDialog } from 'naive-ui';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const activeKey = ref('1');
const menuOptions = ref([
  {
    label: '学习社区',
    key: '1',
    show: true,
    icon: renderIcon(iconHome),
  },
  {
    label: '排行榜',
    key: '2',
    show: true,
    icon: renderIcon(iconRank),
  },
  {
    label: '用户中心',
    key: '3',
    show: true,
    icon: renderIcon(iconUser),
  },
]);
function onUpdate(key, item) {
  console.log(key, item);
}

const options = ref([
  {
    label: '用户中心',
    key: '1',
  },
  {
    label: '退出登录',
    key: '2',
  },
]);
const dialog = useDialog();
const message = useMessage();
function handleSelect(key) {
  if (key === '1') {
    message.info('用户中心');
  } else if (key === '2') {
    dialog.success({
      title: '提示',
      content: '您确定要退出登录吗？',
      positiveText: '确认',
      onPositiveClick: () => {},
    });
  }
}
</script>

<style scoped lang="scss">
$nav-height: 56px;

.layout-main-container {
  min-height: calc(100vh - $nav-height);
  background-color: rgba(246, 249, 248);
}
.nav-container {
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px #00152914;
  color: rgba(51, 54, 57);
  height: $nav-height;

  .logo {
    cursor: pointer;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    color: var(--primary-color);
  }

  .menu-container {
    flex: 1;
    //border: 1px solid;
  }

  .control-container {
    display: flex;
    justify-content: flex-end;
    height: 100%;

    .control-item-small {
      width: 40px;
    }

    .control-item-user {
      padding-left: 12px;
      padding-right: 12px;
    }

    .control-item {
      height: 100%;
      cursor: pointer;

      &:hover {
        background-color: rgba(246, 246, 246, 1);
      }

      .control-wrap {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        span {
          font-weight: 500;
          font-size: 16px;
          padding-left: 8px;
        }

        // 铃铛
        .bell-wrap {
          position: absolute;
          top: 10px;
          right: -10px;
          color: #f5222d;
        }
      }
    }
  }
}
</style>
