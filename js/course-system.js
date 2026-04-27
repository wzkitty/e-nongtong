(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){localStorage.setItem(k,JSON.stringify(v))}};
  function bili(bvid){
    return 'https://player.bilibili.com/player.html?bvid=' + bvid + '&page=1&high_quality=1&danmaku=0&autoplay=0';
  }
  const ONLINE_VIDEOS={
    tractor:{label:'微耕机/拖拉机类农机使用演示',platform:'bilibili',bvid:'BV1QkQAYaEPS',type:'embed',src:bili('BV1QkQAYaEPS'),url:'https://www.bilibili.com/video/BV1QkQAYaEPS/'},
    drone:{label:'大疆农业植保无人机维修培训教程',platform:'bilibili',bvid:'BV1N8411Q7KD',type:'embed',src:bili('BV1N8411Q7KD'),url:'https://www.bilibili.com/video/BV1N8411Q7KD/'},
    combine:{label:'联合收割机操作示范',platform:'bilibili',bvid:'BV1um421u7ew',type:'embed',src:bili('BV1um421u7ew'),url:'https://www.bilibili.com/video/BV1um421u7ew/'},
    spray:{label:'农用农业植保无人机打药机操作',platform:'bilibili',bvid:'BV12rp2znEip',type:'embed',src:bili('BV12rp2znEip'),url:'https://www.bilibili.com/video/BV12rp2znEip/'},
    rice:{label:'高速插秧机2ZG-6A',platform:'bilibili',bvid:'BV1ChCqYbEtu',type:'embed',src:bili('BV1ChCqYbEtu'),url:'https://www.bilibili.com/video/BV1ChCqYbEtu/'},
    corn:{label:'玉米播种覆膜施肥一体机作业',platform:'bilibili',bvid:'BV1kfk3YnEnd',type:'embed',src:bili('BV1kfk3YnEnd'),url:'https://www.bilibili.com/video/BV1kfk3YnEnd/'}
  };
  const DEFAULT_COURSES=[
    {id:'tractor',title:'新型大马力智能拖拉机操作指南',category:'农机使用',level:'中级',teacher:'张工（高级讲师）',duration:'32:15',views:15000,rating:4.9,cover:'./images/h1.png',sourceType:'embed',video:ONLINE_VIDEOS.tractor.src,sourceUrl:ONLINE_VIDEOS.tractor.url,platform:'B站',intro:'本课程直接关联拖拉机操作训练视频，围绕启动前检查、驾驶舱控制、田间行驶、动力输出、安全注意事项等内容展开，适合农机合作社、种植大户与初学操作人员学习。',tags:['农机','拖拉机','安全操作'],chapters:[['课前检查与安全规范','05:20'],['驾驶舱仪表与基础操作','08:45'],['田间作业路线规划','10:30'],['常见故障与保养提醒','07:40']]},
    {id:'drone',title:'植保无人机飞行考证及实操演练',category:'农机使用',level:'初级',teacher:'李教员',duration:'45:00',views:32000,rating:5.0,cover:'./images/c2.png',sourceType:'embed',video:ONLINE_VIDEOS.drone.src,sourceUrl:ONLINE_VIDEOS.drone.url,platform:'B站',intro:'本课程关联农业植保无人机教学视频，从设备检查、药液配置、航线规划、喷洒参数设置到安全飞行规范，帮助学员掌握无人机植保作业流程。',tags:['无人机','植保','航线规划'],chapters:[['植保无人机结构认识','08:00'],['飞行安全与法规要求','10:20'],['航线规划与喷洒设置','15:40'],['实操演练与考证要点','11:00']]},
    {id:'combine',title:'联合收割机驾驶与收获作业流程',category:'农机使用',level:'高级',teacher:'王师傅',duration:'1:15:30',views:18600,rating:4.8,cover:'./images/c3.png',sourceType:'embed',video:ONLINE_VIDEOS.combine.src,sourceUrl:ONLINE_VIDEOS.combine.url,platform:'B站',intro:'课程直接关联联合收割机作业视频，讲解割台、脱粒清选、粮仓卸粮、田间转弯与安全收获流程，适合农忙季节前集中培训。',tags:['收割机','联合收割','收获作业'],chapters:[['割台与输送系统认识','16:20'],['脱粒清选系统操作','20:10'],['田间收获路线与卸粮','18:40'],['安全作业与应急处理','20:20']]},
    {id:'spray',title:'农业植保与田间喷洒作业技术',category:'技术学习',level:'中级',teacher:'赵专家（农科院）',duration:'22:10',views:21000,rating:4.9,cover:'./images/c4.png',sourceType:'embed',video:ONLINE_VIDEOS.spray.src,sourceUrl:ONLINE_VIDEOS.spray.url,platform:'B站',intro:'课程聚焦农业生产中的植保喷洒作业，讲解喷洒时机、作业边界、药液覆盖、风速影响和安全防护，适合田间管理与农技推广场景。',tags:['植保','田间管理','喷洒作业'],chapters:[['作业前田块判断','05:30'],['喷洒参数与覆盖效果','06:40'],['安全防护要求','05:20'],['作业复盘与记录','04:40']]},
    {id:'rice',title:'水稻插秧机操作规范与育秧衔接',category:'技术学习',level:'中级',teacher:'陈教授',duration:'28:45',views:11000,rating:4.7,cover:'',sourceType:'embed',video:ONLINE_VIDEOS.rice.src,sourceUrl:ONLINE_VIDEOS.rice.url,platform:'B站',intro:'课程关联水稻插秧机作业训练视频，讲解育秧衔接、插秧机结构、株距行距设置、田间行走和作业质量检查。',tags:['水稻','插秧机','育秧'],chapters:[['育秧与田块准备','07:20'],['插秧机结构认识','08:40'],['作业参数设置','06:15'],['质量检查与后期田管','06:30']]},
    {id:'corn',title:'玉米播种机调试与田间作业维护',category:'农机使用',level:'初级',teacher:'张工（高级讲师）',duration:'18:20',views:9200,rating:4.6,cover:'./images/c6.png',sourceType:'embed',video:ONLINE_VIDEOS.corn.src,sourceUrl:ONLINE_VIDEOS.corn.url,platform:'B站',intro:'课程围绕播种机维护、种盘检查、播深控制、株距调节和作业后保养展开，帮助学员提升春播作业质量。',tags:['玉米','播种机','参数调试'],chapters:[['设备结构认识','04:20'],['播种参数调试','06:30'],['田间作业规范','05:10'],['维护与保养','02:20']]}
  ];
  function courses(){return DEFAULT_COURSES}
  function byId(id){return courses().find(c=>c.id===id)||courses()[0]}
  function page(){return location.pathname.split('/').pop()||'index.html'}
  function toast(msg){let t=document.createElement('div');t.className='ent-toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.classList.add('show'),10);setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),260)},2200)}
  function fmtViews(v){return v>=10000?(v/10000).toFixed(1)+'w':String(v||0)}
  window.entCourseStore={courses,byId,ONLINE_VIDEOS};
  if(page()==='course.html') initCourseList();
  if(page()==='course-player.html') initPlayer();

  function initCourseList(){
    const wrap=$('#courseList'); if(!wrap)return;
    function render(list=courses()){
      wrap.innerHTML=list.map((c,i)=>`<div class="course-card" data-order="${i+1}" data-date="2026-04-${String(10-i).padStart(2,'0')}" data-views="${c.views||0}" data-rating="${c.rating||5}" onclick="window.location.href='course-player.html?id=${c.id}'"><div class="course-img-wrapper">${c.cover?`<img src="${c.cover}" alt="${c.title}" class="course-img">`:`<div class="course-img placeholder-img"><i class="fa-solid fa-leaf" style="font-size:40px;color:#fff;opacity:.8"></i></div>`}<div class="course-badge ${c.category==='农机使用'?'type-machine':'type-tech'}">${c.category}</div><div class="course-duration">${c.duration}</div><div class="online-video-mark"><i class="fa-solid fa-video"></i> B站可播放视频</div></div><div class="course-info"><div class="course-title">${c.title}</div><div class="course-instructor"><img src="images/avatar.png" alt="avatar"><span>${c.teacher}</span></div><div class="course-meta"><span class="level-tag ${c.level==='高级'?'high':c.level==='初级'?'primary':'middle'}">${c.level}</span><div class="meta-right"><span class="rating"><i class="fa-solid fa-star"></i> ${c.rating}</span><span class="views"><i class="fa-solid fa-play"></i> ${fmtViews(c.views)}</span></div></div></div></div>`).join('');
      const cnt=$('.result-count span'); if(cnt)cnt.textContent=list.length;
    }
    render();
    $$('#sortTabs .sort-tab').forEach(tab=>tab.onclick=()=>{ $$('#sortTabs .sort-tab').forEach(x=>x.classList.remove('active')); tab.classList.add('active'); let list=[...courses()]; const s=tab.dataset.sort; if(s==='views')list.sort((a,b)=>(b.views||0)-(a.views||0)); if(s==='rating')list.sort((a,b)=>(b.rating||0)-(a.rating||0)); if(s==='date')list.reverse(); render(list); });
  }

  function initPlayer(){
    const id=new URLSearchParams(location.search).get('id')||'tractor'; const c=byId(id);
    document.title='“e”农通 - '+c.title;
    setText('pTitle',c.title); setText('pTitleCrumb',c.title); setText('pTeacher',c.teacher); setText('pCategory',c.category); setText('pViews',fmtViews(c.views)); setText('pRating',c.rating); setText('pIntro',c.intro); setText('pLevel',c.level); setText('pDuration',c.duration);
    renderVideo(c); renderLessons(c); renderTabs(); renderComments(c.id); renderRecommendations(c);
    const v=$('#mainVideo'), progKey='progress_'+c.id;
    updateProgress(LS.get(progKey,0));
    if(v){
      $('#playBtn').onclick=()=>{ if(c.sourceType==='embed') return toast('当前为网络嵌入视频，请使用视频窗口内置播放按钮'); if(v.src){ v.paused?v.play():v.pause(); } else toast('当前课程未绑定视频'); };
      v.addEventListener('play',()=>$('#playBtn').innerHTML='<i class="fa-solid fa-pause"></i> 暂停');
      v.addEventListener('pause',()=>$('#playBtn').innerHTML='<i class="fa-solid fa-play"></i> 播放');
      v.addEventListener('timeupdate',()=>{if(v.duration){const p=Math.round(v.currentTime/v.duration*100);LS.set(progKey,p);updateProgress(p)}});
      $('#speedSelect').onchange=e=>{v.playbackRate=parseFloat(e.target.value);toast('倍速已切换为 '+e.target.value+'x')};
    }
    $('#favBtn').onclick=e=>{e.currentTarget.classList.toggle('active');toast(e.currentTarget.classList.contains('active')?'已收藏课程':'已取消收藏')};
    $('#completeBtn').onclick=()=>{LS.set(progKey,100);updateProgress(100);toast('已标记完成')};
    $('#noteText').value=LS.get('note_'+c.id,''); $('#noteSave').onclick=()=>{LS.set('note_'+c.id,$('#noteText').value);toast('学习笔记已保存')};
    $('#commentSend').onclick=()=>{const txt=$('#commentText').value.trim(); if(!txt)return toast('请先输入评论'); const arr=LS.get('comments_'+c.id,[]); arr.unshift({txt,time:new Date().toLocaleString()}); LS.set('comments_'+c.id,arr); $('#commentText').value=''; renderComments(c.id); toast('评论发布成功')};
    const dan=$('#danmuText'); if(dan){ $('#danmuSend').onclick=()=>sendDanmu(dan.value||'这个知识点很实用'); dan.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('#danmuSend').click()}}); }
    setTimeout(()=>sendDanmu('欢迎来到“e”农通农业生产课堂'),800); setTimeout(()=>sendDanmu('课程已直接关联B站农业/农机相关视频'),2600);
  }
  function setText(id,val){const el=$('#'+id); if(el)el.textContent=val??''}
  function renderVideo(c){
    const stage=$('.video-stage'), v=$('#mainVideo'), fallback=$('#videoFallback'); if(!stage)return;
    let iframe=$('#embedFrame'); if(!iframe){iframe=document.createElement('iframe');iframe.id='embedFrame';iframe.className='embed-frame';iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';iframe.allowFullscreen=true;stage.appendChild(iframe)}
    if(c.sourceType==='embed'){
      if(v)v.style.display='none'; iframe.style.display='block'; iframe.src=c.video; if(fallback)fallback.style.display='none';
      let srcLink=$('#videoSourceLink');
      if(!srcLink){srcLink=document.createElement('a');srcLink.id='videoSourceLink';srcLink.className='video-source-link';srcLink.target='_blank';srcLink.rel='noopener'; const tools=$('.player-tools'); if(tools)tools.appendChild(srcLink);}
      if(srcLink){srcLink.href=c.sourceUrl||'#';srcLink.innerHTML='<i class="fa-solid fa-up-right-from-square"></i> B站原视频';}
    }else if(c.video){
      iframe.style.display='none'; if(v){v.style.display='block';v.src=c.video;v.poster=c.cover||'';} if(fallback)fallback.style.display='none';
    }else{
      iframe.style.display='none'; if(v){v.style.display='block';v.removeAttribute('src');v.poster=c.cover||'';} if(fallback){fallback.style.display='flex'; if(c.cover)fallback.style.backgroundImage=`linear-gradient(rgba(16,24,32,.45),rgba(16,24,32,.55)),url('${c.cover}')`;}
    }
  }
  function renderLessons(c){$('#lessonList').innerHTML=c.chapters.map((ch,i)=>`<div class="lesson-item ${i===0?'active':''}" data-i="${i}"><div class="lesson-index">${i+1}</div><div><div class="lesson-name">${ch[0]}</div><div class="lesson-status">${i===0?'正在学习':'未开始'}</div></div><div class="lesson-time">${ch[1]}</div></div>`).join(''); $$('.lesson-item').forEach(item=>item.onclick=()=>{$$('.lesson-item').forEach(x=>x.classList.remove('active'));item.classList.add('active');toast('已切换到：'+$('.lesson-name',item).textContent)});}
  function renderTabs(){$$('.player-tab').forEach(tab=>tab.onclick=()=>{$$('.player-tab').forEach(x=>x.classList.remove('active'));$$('.tab-content').forEach(x=>x.classList.remove('active'));tab.classList.add('active');$('#'+tab.dataset.tab).classList.add('active')});}
  function updateProgress(p){if($('#progressFill'))$('#progressFill').style.width=p+'%'; if($('#progressText'))$('#progressText').textContent=p+'%'}
  function renderComments(id){const arr=LS.get('comments_'+id,[{txt:'视频和课程主题匹配度高，适合农忙前集中培训。',time:'系统推荐评论'},{txt:'建议结合本地农机型号补充操作清单。',time:'系统推荐评论'}]);$('#commentList').innerHTML=arr.map(x=>`<div class="comment-item"><div class="comment-avatar"><i class="fa-solid fa-user"></i></div><div><b>学员</b><p style="margin:5px 0;color:#465249">${x.txt}</p><span style="font-size:12px;color:#8a948e">${x.time}</span></div></div>`).join('')}
  function sendDanmu(text){text=(text||'').trim(); if(!text||!$('#danmuLayer'))return; const el=document.createElement('div'); el.className='danmu-item'; el.textContent=text; el.style.top=(12+Math.random()*70)+'%'; $('#danmuLayer').appendChild(el); setTimeout(()=>el.remove(),8500); if($('#danmuText'))$('#danmuText').value='';}
  function renderRecommendations(c){const box=$('#recommendList'); if(!box)return; const rec=courses().filter(x=>x.id!==c.id).map(x=>({x,score:(x.category===c.category?4:0)+(x.level===c.level?2:0)+(x.tags||[]).filter(t=>(c.tags||[]).includes(t)).length*3+(x.rating||0)})).sort((a,b)=>b.score-a.score).slice(0,4); box.innerHTML=rec.map(({x})=>`<div class="recommend-item" onclick="location.href='course-player.html?id=${x.id}'"><div class="recommend-cover">${x.cover?`<img src="${x.cover}">`:'<i class="fa-solid fa-seedling"></i>'}</div><div><b>${x.title}</b><span>${x.category} · ${x.level} · ${fmtViews(x.views)}播放</span></div></div>`).join('')}
})();
