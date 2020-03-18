<template>
  <div class='home'>
    <d-player ref="player" :options="options"></d-player>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        options: {
          theme: '#b7daff',  // 风格颜色，例如播放条，音量条的颜色
          loop: false,  // 是否自动循环
          lang: 'zh-cn',  // 语言，'en', 'zh-cn', 'zh-tw'
          screenshot: true, 
          hotkey: true,  // 是否支持热键，调节音量，播放，暂停等
          volume: 0.7, // 初始化音量
          logo: '../../../assets/action.png',  // 在视频左脚上打一个logo
          video: {
            url: '../../../assets/x.mp4', // 播放视频的路径
            quality: [  // 设置多个质量的视频
              {
                name: 'HD',
                url: '../../../assets/x.mp4',
                type: 'auto',  // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
              },
              {
                name: 'SD',
                url: '../../../assets/x.mp4',
                type: 'auto',
              }
            ],
            defaultQuality: 0,  // 默认是HD
            pic: '',  // 视频封面图片
          },
          subtitle: {
            url: 'http://www.baidu.com',
            fontSize: '20px',
            bottom: '40px',
          },
          highlight: [
            {
              text: '10M',
              time: 600,
            },
            {
              text: '20M',
              time: 1200,
            },
          ],
        }
      }
    }
  }
</script>
<style scoped>
  .home {
    width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
</style>