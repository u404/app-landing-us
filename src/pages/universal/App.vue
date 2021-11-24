
<script>
import env from "@sc/lib-env"

import url from "url"

const QUERY = url.parse(window.location.href, true).query

export default {

  data() {
    return {
      inWeixin: env.browser.WeChat,
      inSafari: env.browser.safari,

      WeiBo: env.browser.WeiBo
    }
  },

  mounted() {
    console.log(this.$i18n._("iosLink"))
    document.title = this.$i18n._("前往移动电影院")
    if (!this.inWeixin) {
      setTimeout(() => {
        this.rediectDownload()
      })
    }
  },

  methods: {
    rediectDownload() {
      window.location.href = QUERY.uriDownload || this.$i18n._("iosLink")
    }

  }

}
</script>

<template>
  <div class="universal" v-if="inWeixin">
    <div class="top-guide" :style="`background: url(${$i18n._('topGuideBj')}) no-repeat top center/contain `">· {{$i18n._('已安装移动电影院')}}：</div>
    <div
      class="bottom-guide"
    >
      · {{$i18n._('未安装移动电影院')}}：
      <div
        class="bottom-guide-hot-area"
        @click="rediectDownload"
        :style="`background: url(${$i18n._('bottomGuideHotArea')}) no-repeat top center/100% auto `"
      ></div>
    </div>
  </div>
  <div class="download" v-else>
    <div
      class="guide"
      :style="`background: url(${$i18n._('guideBj')}) no-repeat top center/100% auto `"
    >
      <div class="button" @click.stop="rediectDownload">{{$i18n._('立即下载')}}</div>
    </div>

    <div class="weibo" v-if="WeiBo">
      <div class="share"></div>
      <div class="op"></div>
      <div class="step1"></div>
      <div class="step2"></div>
      <div class="step3"></div>
      <div class="logo"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/common/style/mixins.scss";

.universal {
  overflow: hidden;
  padding-top: rem(5);
  font-size: rem(16);
  line-height: rem(22);

  .top-guide {
    margin: 0 auto;
    width: rem(343);
    height: rem(211);
    padding: rem(29) rem(5) 0;
    // background: url(https://g.smartcinema.com.cn/images/038dd423c30c4779b60ed79eed299a6c-686-422.png)
    //   rem(5) center no-repeat;
    // background-size: contain;
    border-bottom: 1px solid #666;
  }

  .bottom-guide {
    margin: 0 auto;
    width: rem(343);
    padding: rem(18) rem(5) 0;
    .bottom-guide-hot-area {
      margin: rem(20) auto 0;
      width: rem(289);
      height: rem(300);
      // background: url(https://g.smartcinema.com.cn/images/a63ecd09d1a0458bb5194541f9f3aaab-578-600.png)
      //   center no-repeat;
      // background-size: contain;
    }
  }
}

.download {
  height: 100%;
  padding-top: rem(32);
  overflow: hidden;

  .guide {
    margin: 0 auto;
    width: rem(300);
    height: 100%;
    padding-top: rem(352);
  }

  .button {
    margin: 0 auto;
    width: rem(164);
    height: rem(40);
    background: url(../../assets/btn-bg.png) no-repeat center center;
    background-size: 100% 100%;
    text-align: center;
    line-height: rem(40);
    font-size: rem(14);
    font-weight: bold;
    color: #594b34;

    &:active {
      opacity: 0.8;
    }
  }

  .tip {
    text-align: center;
    position: fixed;
    bottom: getRem(50);
    left: 0;
    right: 0;
    font-size: getRem(24);
    color: #9b9b9b;
    white-space: nowrap;
  }
}

.weibo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("https://g.smartcinema.com.cn/images/af1fa54ba68543b6b47553daf45a92f5-750-1624.png")
    no-repeat 0 0/100% 100%;
  padding-top: rem(60);
  .share {
    position: absolute;
    right: rem(16);
    top: rem(15);
    width: rem(80);
    height: rem(167);
    background: url("https://g.smartcinema.com.cn/images/1b2c89210ea24055bda52a1c4fbcb9da-158-330.png")
      no-repeat 0 0/100% 100%;
  }
  .op {
    margin: 0 auto rem(57);
    width: rem(132);
    height: rem(29);
    background: url("https://g.smartcinema.com.cn/images/26b93697de674b3aa108ac2136933f0b-264-58.png")
      no-repeat 0 0/100% 100%;
  }
  .step1 {
    margin: 0 auto rem(43);
    width: rem(204);
    height: rem(68);
    background: url("https://g.smartcinema.com.cn/images/0d74430e93794ffa902613b084f14666-404-128.png")
      no-repeat 0 0/100% 100%;
  }
  .step2 {
    margin: 0 auto rem(43);
    width: rem(221);
    height: rem(63);
    background: url("https://g.smartcinema.com.cn/images/440a1f36827b40b68db0c714d05d7d92-438-126.png")
      no-repeat 0 0/100% 100%;
  }
  .step3 {
    margin: 0 auto rem(70);
    width: rem(237);
    height: rem(102);
    background: url("https://g.smartcinema.com.cn/images/756c617f3e9946fd97d9c7a9ef0996ed-472-190.png")
      no-repeat 0 0/100% 100%;
  }
  .logo {
    margin: 0 auto;
    width: rem(96);
    height: rem(57);
    background: url("https://g.smartcinema.com.cn/images/ec28828cc43a4ae2ae629ce19b859f01-192-114.png")
      no-repeat 0 0/100% 100%;
  }
}
</style>
