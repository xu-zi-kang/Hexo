var posts=["2024/01/11/hello-world/","2024/01/12/Linux相关操作/","2024/01/21/Portainer-docker图形化工具/","2024/01/12/hexo指令/","2024/01/12/hexo报错解决办法/","2024/01/23/【git】生成sshKey密匙/","2024/01/23/黃明志Ft-蒼井空【別人的老婆】/","2024/01/11/面试题总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };