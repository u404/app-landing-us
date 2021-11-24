<script>
import env from "@sc/lib-env"

import axios from "@sc/lib-axios"

import url from "url"

const QUERY = url.parse(window.location.href, true).query

const maps = {
  "5ced086dca87a802c508b472": "5d1b3e9123389f2b5a4a5b5a",
  "5cecf925959d696bf070cbf8": "5d1b3e75f94548720dc7471b",
  "5cecf858548b7a5459c300c2": "5d1b3e5823389f2b5a4a5b52"
}
export default {

  mounted() {
    // if (env.os.android) {
    //   this.rediectDownload()
    // }
    document.title = this.$i18n._("下载移动电影院")
    this.sendReport({
      start: "download.pv",
      event: "2",
      end: "0"
    })
  },

  data() {
    return {
      clicked: false,
      WeiBo: env.browser.WeiBo
    }
  },

  methods: {
    rediectDownload() {
      if (this.clicked) return false
      let link = this.$i18n._("iosLink")
      let end = "appstore"
      if (!env.os.ios) {
        if (QUERY.uriDownload) {
          link = QUERY.uriDownload
          const parseDUrl = url.parse(link, true)
          if (parseDUrl.query.release_id) {
            parseDUrl.query.release_id = maps[parseDUrl.query.release_id] || parseDUrl.query.release_id
            delete parseDUrl.search
            link = parseDUrl.format()
          }
          end = "uri"
        } else {
          link = this.getApk(QUERY.pid)
          end = "apk"
        }
        //  else if (env.browser.WeChat) {
        //   link = "http://a.app.qq.com/o/simple.jsp?pkgname=cn.android.mingzhi.motv"
        //   end = "yyb"
        // }
      }
      this.clicked = true
      this.sendReport({
        start: "download.btn",
        event: "1",
        platform: env.os.ios ? 1 : 2,
        end
      }).then(() => {
        this.clicked = false
        window.location.href = link
      })
    },

    getApk(pid = "uknown") {
      const apks = {}
      return apks[pid] || this.$i18n._("androidLink")
    },

    sendReport(data) {
      return axios.post("/statistics/addData", {
        data: JSON.stringify([{
          type: "download",
          source: QUERY.pid || "",
          ...data
        }])
      }, {
        timeout: 1000
      }).catch(e => { })
    }

  }

}
</script>

<template>
  <div class="download">
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

.download {
  height: 100%;
  padding-top: rem(32);
  overflow: hidden;

  .guide {
    margin: 0 auto;
    width: rem(300);
    height: 100%;
    padding-top: rem(352);

    background-size: 100% auto;
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
}
</style>
