<!DOCTYPE html>
<html lang="zh">
	<head>
        <meta charset="utf-8">
        <title>Web书签</title>
        <button>切换用户</button>
        <base target="_blank"/>                                          <!--超链接在新窗口中打开-->
        <link rel="stylesheet" href="styles/Web标签样式.css">            <!--链接样式表-->
        <script src="scripts/main.js" defer></script>                    <!--链接JS-->
	</head>
	<body>
        <!--容器-->
        <div id="container">
            <!--页眉-->
            <div id="header">
                <h1></h1>
            </div>
            <!--导航栏-->
            <div id="navbar"></div>
            <!--主体-->
            <div id="main">
                <!--菜单-->
                <div id="menu"></div>
                <!--内容-->
                <div id="content">
                    <div class="code">
                        <h2>一、编程乐园</h2>
                        <table id="code">
                            <tr>
                                <td>教程</td>
                                <td><a href="https://blog.csdn.net/weixin_49486457/article/details/123439229?spm=1001.2014.3001.5502">C++STL总结</a></td>
                                <td><a href="https://www.runoob.com">菜鸟教程</a></td>
                                <td><a href="https://www.w3school.com.cn/index.html">W3school</a></td>
                                <td><a href="https://www.bilibili.com/">哔哩哔哩(B站)</a></td>
                                <td><a href="https://www.icourse163.org/">中国大学MOOC(慕课)</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>刷题</td>
                                <td><a href="https://pintia.cn/">PAT</a></td>
                                <td><a href="https://sustoj.com/">SustOJ</a></td>
                                <td><a href="https://www.nowcoder.com/">牛客网</a></td>
                                <td><a href="https://leetcode-cn.com/">LeetCode</a></td>
                                <td><a href="https://www.python123.io/">Python123</a></td>
                                <td><a href="https://www.acwing.com/activity/content/11/">Acwing算法基础</a></td>
                                <td><a href="https://www.lanqiao.cn/cup/?sort=students_count&category_id=3&tags=2021">蓝桥杯历年真题</a>&nbsp;<a href="https://blog.csdn.net/kiwi_berrys/article/details/111186204?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164945373116782248579939%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=164945373116782248579939&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-111186204.142^v7^pc_search_result_control_group,157^v4^control&utm_term=%E8%93%9D%E6%A1%A5%E6%9D%AF%E5%8E%86%E5%B9%B4%E7%9C%9F%E9%A2%98&spm=1018.2226.3001.4187">真题解析</a></td>
                            </tr>
                            <tr>
                                <td>论坛</td>
                                <td><a href="https://www.csdn.net/">CSDN</a></td>
                                <td><a href="https://github.com/">GitHub</a></td>
                                <td><a href="https://developer.aliyun.com/">阿里云开发者社区</a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>工具</td>
                                <td><a href="https://algorithm-visualizer.org/">Algorithm Visualizer</a></td>
                                <td><a href="https://mail.sust.edu.cn/">SUST邮箱</a>&nbsp;<a href="https://mail.qq.com/cgi-bin/loginpage?s=session_timeout&from=&r=7d1d86999366daa473f02a7cb9d8299f&tiptype=LOGIN_ERR_COOKIE_FORBIDDEN">QQ邮箱</a></td>
                                <td><a href="https://cloud.tencent.com/">腾讯云</a></td>
                                <td><a href="https://www.jiumodiary.com/">鸠摩搜索</a>&nbsp;<a href="http://library.sust.edu.cn/engine2/general/more?appId=511177&websiteId=39169&wfwfid=22858&pageId=48536&typeId=2994322&currentBranch=0">陕科大中文数据库</a></td>
                                <td><a href="https://www.wjx.cn/newwjx/manage/myquestionnaires.aspx">问卷星</a></td>
                                <td><a href="http://www.pdfdo.com/pdf-merge.aspx">PDF转换器</a></td>
                                <td><a href="https://www.woodo.cn/">吾道幻灯片</a>&nbsp;<a href="https://www.canva.cn/">canva可画</a></td>
                            </tr>
                            <tr>
                                <td>408课程</td>
                                <td><a href="https://www.icourse163.org/course/ZJU-200001?from=searchPage">C语言程序设计</a>&nbsp;<a href="https://www.icourse163.org/course/ZJU-200001?from=searchPage">C语言程序设计进阶</a></td>
                                <td><a href="https://www.bilibili.com/video/BV1nJ411V7bd?from=search&seid=18049147943734494410&spm_id_from=333.337.0.0">王卓数据结构</a>&nbsp;<a href="https://www.bilibili.com/video/BV1H4411N7oD?from=search&seid=5747550739695107443&spm_id_from=333.337.0.0">陈越数据结构</a></td>
                                <td><a href="https://www.icourse163.org/course/NUDT-17003?from=searchPage">计算机基础</a></td>
                                <td><a href="https://www.bilibili.com/video/BV1c4411d7jb?from=search&seid=4193645312032724296&spm_id_from=333.337.0.0">计算机网络</a></td>
                                <td><a href="https://www.icourse163.org/course/HIT-309001?from=searchPage">计组(上)</a>&nbsp;<a href="https://www.icourse163.org/course/HIT-1001527001?from=searchPage">计组(下)</a></td>
                                <td><a href="https://www.bilibili.com/video/BV1DE411u7WL?spm_id_from=333.999.0.0">SQL</a></td>
                                <td><a href="https://www.bilibili.com/video/BV1d4411v7u7?spm_id_from=333.999.0.0">哈工大操作系统</a>&nbsp;<a href="https://www.bilibili.com/video/BV1uW411f72n?spm_id_from=333.999.0.0">清华大学操作系统</a></td>
                            </tr>
                            <tr>
                                <td>基础学科</td>
                                <td><a href="https://www.bilibili.com/video/BV1Eb411u7Fw">宋浩高数</a></td>
                                <td><a href="https://www.bilibili.com/video/BV1UW411k7Jv?spm_id_from=333.999.0.0">宋浩微积分</a></td>
                                <td><a href="https://www.bilibili.com/video/BV1aW411Q7x1?spm_id_from=333.999.0.0">宋浩线代</a></td>
                                <td><a href="https://www.bilibili.com/video/BV1ot411y7mU?spm_id_from=333.999.0.0">宋浩概统</a></td>
                                <td><a href="https://www.bilibili.com/video/BV1qW411H7UX?from=search&seid=16373638661368530479&spm_id_from=333.337.0.0">马文蔚大物</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div class="pleasure">
                        <h2>二、宝藏网站</h2>
                        <h3>1.信息类</h3>
                        <p><a href="http://www.sust.edu.cn/">陕西科技大学</a>&nbsp;&nbsp;&nbsp;陕科大官网，及时了解本校相关资讯</p>
                        <p><a href="http://bkjw.sust.edu.cn/eams/home.action">陕西科技大学教务处</a>&nbsp;&nbsp;&nbsp;陕科大教务处官网，及时了解本校教学信息资讯</p>
                        <p><a href="https://yz.chsi.com.cn/">中国研究生招生信息网</a>&nbsp;&nbsp;&nbsp;为考研同学提供一手资讯</p>
                        <p><a href="https://gr.xidian.edu.cn/">西安电子科技大学研究生院</a>&nbsp;&nbsp;&nbsp;<a href="https://cs.xidian.edu.cn/index.htm">西安电子科技大学计算机科学与技术学院</a>&nbsp;&nbsp;&nbsp;为想要考取西电的同学提供考研信息</p>
                        <h3>2.竞赛类</h3>
                        <p><a href="http://www.cmathc.cn/">全国大学生数学竞赛</a>&nbsp;&nbsp;&nbsp;配备历年数竞真题，为同学们提供一手数竞信息</p>
                        <p><a href="http://www.mcm.edu.cn/">全国大学生数学建模竞赛</a>&nbsp;&nbsp;&nbsp;配备历年数学建模真题，为同学们提供一手数学建模信息</p>
                        <p><a href="http://ds.5cy.com/">创新创业大赛</a>&nbsp;&nbsp;&nbsp;全国高校竞赛排行榜第一名！</p>
                        <p><a href="https://www.acm.org/">ACM国际大学生程序设计大赛</a>&nbsp;&nbsp;&nbsp;最高级别程序设计大赛，提供赛事信息</p>
                    </div>
                    <div class="new">
                        <h2>三、就业信息</h2>
                        <h3>1.行业信息动态</h3>
                        <p><a href="https://www.36kr.com/">36kr</a>&nbsp;&nbsp;&nbsp资讯信息全面，更新快</p>
                        <p><a href="https://www.huxiu.com/">虎嗅网</a>&nbsp;&nbsp;&nbsp;获取商业资讯并进行交流的方式</p>
                        <p><a href="https://www.cyzone.cn/">创业邦</a>&nbsp;&nbsp;&nbsp;提供各种创业类最新资讯和实用知识手册</p>
                        <p><a href="https://www.leiphone.com/">雷锋网</a>&nbsp;&nbsp;&nbsp;客观敏锐地记录移动互联网的每一天</p>
                        <p><a href="https://www.meihua.info/">梅花网</a>&nbsp;&nbsp;&nbsp;聚焦于为企业市场营销部门提供各类信息情报服务</p>
                        <p><a href="https://www.tmtpost.com/">钛媒体</a>&nbsp;&nbsp;&nbsp;为用户提供最有价值、最富远见、也最具人性的商业科技内容</p>
                        <p><a href="https://www.iresearch.cn/">艾瑞网</a>&nbsp;&nbsp;&nbsp;基于相关领域研究成果，融合更多行业资源，为业内人士提供产业资讯、数据、报告、专家观点、行业数据库等服务</p>
                        <h3>2.数据分析报告</h3>
                        <p><a href="http://data.xiguaji.com/">西瓜数据</a>&nbsp;&nbsp;&nbsp;提供新媒体流量监测及精准营销服务</p>
                        <p><a href="https://www.analysys.cn/">易观智库</a>&nbsp;&nbsp;&nbsp;以海量数字用户资产及算法模型为核心的大数据分析工具</p>
                        <p><a href="https://www.itjuzi.com">IT橘子</a>&nbsp;&nbsp;&nbsp;通过信息和数据的生产、聚合、挖掘、加工、处理，节约时间和金钱、提高效率</p>
                        <p><a href="https://index.baidu.com/v2/index.html#/">百度指数</a>&nbsp;&nbsp;&nbsp;百度指数是以百度海量网民行为数据为基础的数据分享平台，是当前互联网乃至整个数据时代最重要的统计分析平台之一</p>
                        <h3>3.面试题库</h3>
                        <p><a href="https://examcoo.com/">考试酷</a>&nbsp;&nbsp;&nbsp;配有公共题库，具有超多考试真题，求职必备</p>
                    </div>
                    <div class="debate">
                        <h2>四、辩论赛</h2>
                        <p>(此部分为个人推荐)<br /></p>
                        <h3>1.简介</h3>
                        <p>你是否词汇量缺乏，你是否逻辑表达能力弱，你是否缺乏深度思考的习惯？那就快来看看以下辩论赛吧，将给你带来巨大的思维转变</p>
                        <h3>2.2001国际大专辩论赛</h3>
                        <p><a href="https://www.bilibili.com/video/BV19x411w76e?from=search&seid=12805439807804401749&spm_id_from=333.337.0.0">《钱是/不是万恶之源》</a>&nbsp;&nbsp;&nbsp;</p>
                        <p><a href="https://www.bilibili.com/video/BV1wt411v7c5?from=search&seid=14514021313423325748&spm_id_from=333.337.0.0">《以成败论英雄》</a>&nbsp;&nbsp;&nbsp;</p>
                        <h3>3.2017国际华语辩论邀请赛</h3>
                        <p><a href="https://www.bilibili.com/video/BV1HW411a76f?p=2">《宿命论可悲/不可悲》</a>&nbsp;&nbsp;&nbsp;</p>
                        <h3>4.2019华语辩坛老友赛</h3>
                        <p><a href="https://www.bilibili.com/video/BV1z7411w7YR?from=search&seid=1069452885533131010&spm_id_from=333.337.0.0">《被误解是/不是表达者的宿命》</a>&nbsp;&nbsp;&nbsp;</p>
                        <h3>5.2020国际华语辩论邀请赛</h3>
                        <p><a href="https://www.bilibili.com/video/BV1uo4y1f7Ba?from=search&seid=12086306595284804353&spm_id_from=333.337.0.0">《内卷是个真/假问题》</a>&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div class="sust">
                        <img id="1" src="images/1.jpg">
                        <img src="images/2.jpg">
                        <img src="images/3.jpg">
                        <img src="images/4.jpg">
                        <img src="images/5.jpg">
                        <img src="images/6.jpg">
                    </div>
                </div>
                <!--边栏-->
                <div id="sidebar"></div>
            </div>
            <!--页尾-->
            <div id="footer"></div>
        </div>
	</body>
</html>