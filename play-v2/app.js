const FALLBACK = {
  P01:{name:"林序",age:32,facts:{current_city:"深圳",education:"硕士",occupation:"互联网公司业务负责人",income_band:"50–70 万/年",housing:"租房，暂无自有住房",family_background:"父母在外地，经济独立",children_intent:"open",smoking:"no",drinking:"social",mobility:"medium"}},
  P02:{name:"周宁",age:31,facts:{current_city:"深圳",education:"本科",occupation:"国企项目经理",income_band:"25–35 万/年",housing:"自有一套小户型，有房贷",family_background:"父母同城，来往较多",children_intent:"open",smoking:"no",drinking:"rare",mobility:"low"}},
  P03:{name:"许澈",age:30,facts:{current_city:"深圳",education:"本科",occupation:"创业公司联合创始人",income_band:"收入波动较大",housing:"租房，短期不打算买房",family_background:"父母在外地，生活独立",children_intent:"open",smoking:"no",drinking:"social",mobility:"high"}},
  P04:{name:"沈知",age:31,facts:{current_city:"深圳",education:"本科",occupation:"软件工程师",income_band:"30–40 万/年",housing:"暂无自有住房，有稳定储蓄",family_background:"父母在外地，不依赖家庭支持",children_intent:"open",smoking:"no",drinking:"rare",mobility:"low"}}
};

const CONTENT = {
  P01:{
    tone:"career",
    friend:"工作是真的忙，不过做事很有交代。",
    probes:[
      {
        id:"P01_WORK_TIME",
        time:"周五 19:18",
        label:"下班后见面",
        lines:[
          {speaker:"林序",text:"抱歉，刚才那个会拖了十几分钟。"},
          {speaker:"林序",text:"我已经尽量把晚上空出来了，但这种临时会偶尔还是会有。你会很介意这种吗？"}
        ],
        choices:[
          {text:"偶尔可以，但别经常临时改。",reply:"明白。我也不喜欢让别人一直等，能提前说我会提前说。",signal:"对工作侵入可接受，但需要可预测"},
          {text:"我会比较介意，约好的时间就是约好的。",reply:"那我们这点可能要磨合。我工作确实会有突发情况。",signal:"对工作侵入容忍低"},
          {text:"没事，我自己也经常加班。",reply:"那你应该懂这种状态。不过我也不想两个人最后都只剩工作。",signal:"当前对高事业投入接受度较高"}
        ]
      },
      {
        id:"P01_WEEKEND_TIME",
        time:"周五 19:36",
        label:"时间怎么用",
        lines:[
          {speaker:"林序",text:"我周六上午一般跑步，下午有时候会处理工作。周日我会尽量留半天给自己。"},
          {speaker:"林序",text:"你周末更喜欢两个人一起，还是各自安排？"}
        ],
        choices:[
          {text:"我会希望大部分时间一起。",reply:"那我们可能不太一样。我需要有一部分时间完全自己安排。",signal:"共同时间需求较高"},
          {text:"各自有事，固定留点时间一起就好。",reply:"这个跟我挺像。提前留出来，我反而比较容易做到。",signal:"接受独立时间 + 固定共同时间"},
          {text:"我也很需要自己的时间。",reply:"那这点我们应该比较省事，不需要什么都绑在一起。",signal:"自主空间需求较高"}
        ]
      },
      {
        id:"P01_HOUSING_FUTURE",
        time:"周五 20:02",
        label:"房子和钱",
        lines:[
          {speaker:"林序",text:"朋友应该跟你说过，我现在是租房。"},
          {speaker:"林序",text:"我短期没准备买，现金我更想留在投资和职业选择上。你会介意吗？"}
        ],
        choices:[
          {text:"我会，结婚前有房对我挺重要。",reply:"那这个得说清楚。我至少这两年不会为了结婚立刻买房。",signal:"住房可能是硬条件"},
          {text:"我更看两个人以后怎么规划。",reply:"我也是。买不买不是原则问题，但现金流和计划我会算得比较清楚。",signal:"住房可谈，重视共同规划"},
          {text:"我不太在意有没有房。",reply:"那压力会小很多。我更想保留选择，不想为了一个节点把钱全压进去。",signal:"住房当前不是主要门槛"}
        ]
      }
    ]
  },
  P02:{
    tone:"home",
    friend:"人很稳，日子过得比较细，周末基本不加班。",
    probes:[
      {
        id:"P02_HOME_FAMILY",
        time:"周日 12:15",
        label:"周末怎么过",
        lines:[
          {speaker:"周宁",text:"我周六一般买菜、运动，周日中午会回我爸妈那边吃饭。"},
          {speaker:"周宁",text:"你会喜欢这种比较固定的周末吗？"}
        ],
        choices:[
          {text:"挺喜欢，规律一点很舒服。",reply:"那我们这点挺像。我不太喜欢周末临时被工作打散。",signal:"偏好稳定共同生活"},
          {text:"可以，但我不想每周都固定去父母家。",reply:"这个能理解。现在是我自己回得多，结婚以后肯定要两个人商量。",signal:"重视家庭边界"},
          {text:"我会觉得有点太固定。",reply:"那我们节奏可能差得比较大。我确实喜欢把生活安排得稳一点。",signal:"偏好更高变化与自主"}
        ]
      },
      {
        id:"P02_HOUSING",
        time:"周日 12:42",
        label:"住哪里",
        lines:[
          {speaker:"周宁",text:"我现在自己有套小房子，还在还贷。"},
          {speaker:"周宁",text:"真结婚的话，够住就先住，不够再换。你会更希望一步到位吗？"}
        ],
        choices:[
          {text:"我会希望婚前把房子问题定下来。",reply:"可以谈，但我不太想为了面子一下把杠杆拉得很高。",signal:"住房确定性需求较高"},
          {text:"能住就行，后面一起换。",reply:"这个跟我想法差不多。先把现金流留得舒服一点。",signal:"接受渐进住房安排"},
          {text:"我更关心房子写谁、贷款谁承担。",reply:"这个很实际。我觉得出资、产权和还贷都应该提前讲清楚。",signal:"重视住房公平与规则"}
        ]
      },
      {
        id:"P02_MONEY_STYLE",
        time:"周日 13:05",
        label:"钱怎么花",
        lines:[
          {speaker:"周宁",text:"我每个月会固定存一部分，剩下的才拿来花。"},
          {speaker:"周宁",text:"你是先存后花，还是觉得赚了就应该多享受一点？"}
        ],
        choices:[
          {text:"我也会固定存钱。",reply:"那这点应该挺省心，至少不会一个拼命存、一个拼命花。",signal:"储蓄倾向相近"},
          {text:"我愿意为体验多花一点。",reply:"可以，我不是不能花，只是大额支出我会想清楚。",signal:"体验消费更高"},
          {text:"看阶段，没必要固定一种方式。",reply:"也有道理。我只是自己比较需要一个底。",signal:"金钱风格偏弹性"}
        ]
      }
    ]
  },
  P03:{
    tone:"free",
    friend:"很有意思，朋友很多，花钱和时间都比较随性。",
    probes:[
      {
        id:"P03_TRAVEL_SPEND_SOCIAL",
        time:"周五 19:12",
        label:"旅行",
        lines:[
          {speaker:"许澈",text:"我上次去东京只订了第一晚酒店，后面都是当天看心情。"},
          {speaker:"许澈",text:"你喜欢这种，还是会提前把路线都排好？"}
        ],
        choices:[
          {text:"我也喜欢到了再说。",reply:"那我们这点挺像。很多最好玩的都是临时遇到的。",signal:"旅行与计划方式相似"},
          {text:"我会把酒店和大概路线先定好。",reply:"那我们这点不太一样。我临时改计划挺多的。",signal:"计划性存在差异"},
          {text:"我会很怕计划全乱。",reply:"那跟我出去可能会累。我真的经常临时换地方。",signal:"对低可预测性容忍低"}
        ]
      },
      {
        id:"P03_SPENDING",
        time:"周五 19:38",
        label:"消费",
        lines:[
          {speaker:"许澈",text:"这家有个套餐我一直想试，人均一千二左右。"},
          {speaker:"许澈",text:"我会愿意为吃、旅行、演出这种东西花钱。你会觉得太贵吗？"}
        ],
        choices:[
          {text:"喜欢的话偶尔花一次没问题。",reply:"对，我也是这种。平时不一定奢侈，但想体验的我不太省。",signal:"接受体验型高消费"},
          {text:"我会觉得没必要，吃饭不用花这么多。",reply:"那我们消费观可能差挺多。我在体验上确实比较舍得。",signal:"消费观存在明显差异"},
          {text:"得看收入和整体预算。",reply:"合理。我收入波动大，所以我也不是每个月都这样花。",signal:"重视消费与现金流匹配"}
        ]
      },
      {
        id:"P03_SOCIAL",
        time:"周五 20:06",
        label:"朋友",
        lines:[
          {speaker:"许澈",text:"我朋友刚发消息，他们就在附近。"},
          {speaker:"许澈",text:"你要愿意的话他们过来坐一会儿；你想今天就我们两个，我就直接回掉。"}
        ],
        choices:[
          {text:"来吧，人多也挺热闹。",reply:"行，我跟他们说一声。你应该不会缺局。",signal:"接受高社交密度"},
          {text:"我更想今天就我们两个。",reply:"好，那不叫。他们什么时候都能见。",signal:"重视两人专属时间"},
          {text:"我不太喜欢约会中途临时加人。",reply:"明白。那以后这种我会先问，不会直接把人叫来。",signal:"重视社交边界与计划性"}
        ]
      }
    ]
  },
  P04:{
    tone:"growth",
    friend:"慢热，当前条件不算突出，但一直在往上走。",
    probes:[
      {
        id:"P04_GROWTH_AUTONOMY",
        time:"周六 15:16",
        label:"现在和以后",
        lines:[
          {speaker:"沈知",text:"我现在收入算正常，不是特别高。最近在准备转一个新方向。"},
          {speaker:"沈知",text:"如果转过去，前一年可能涨得不多，甚至更忙。你会更看重现在稳定，还是以后空间？"}
        ],
        choices:[
          {text:"我会更看重现在已经做到什么。",reply:"能理解。那我现在可能不会是特别有优势的那种。",signal:"当前现实条件权重较高"},
          {text:"只要方向靠谱，我可以看未来。",reply:"这跟我想法比较像。我不想为了短期数字停在原地。",signal:"接受延迟收益换成长"},
          {text:"成长可以，但我会有现实底线。",reply:"这个我认同。不能只谈梦想，至少生活不能一直靠别人托着。",signal:"成长与现实安全都重要"}
        ]
      },
      {
        id:"P04_HOUSING",
        time:"周六 15:43",
        label:"房子",
        lines:[
          {speaker:"沈知",text:"我现在没房，也不太想让父母帮我出首付。"},
          {speaker:"沈知",text:"可能会晚几年买。这个你会介意吗？"}
        ],
        choices:[
          {text:"会，我会希望结婚前有比较确定的住房。",reply:"那这个差异挺实际。我短期确实不会马上买。",signal:"住房确定性较高"},
          {text:"我能接受两个人以后一起解决。",reply:"我也是这个想法。我更希望按两个人的收入和城市计划来。",signal:"接受共同建设住房"},
          {text:"我不一定要买房。",reply:"那选择会多一点。我也不觉得房子本身就是关系的证明。",signal:"住房不是当前硬门槛"}
        ]
      },
      {
        id:"P04_INDEPENDENT_TIME",
        time:"周六 16:04",
        label:"自己的时间",
        lines:[
          {speaker:"沈知",text:"我一周大概有三晚会学习或者运动。"},
          {speaker:"沈知",text:"就算谈恋爱，我也想保留这部分。你会觉得太多吗？"}
        ],
        choices:[
          {text:"三晚有点多，我会想要更多共同时间。",reply:"那我们可能得重新分。我可以调整，但不会全放掉。",signal:"共同时间需求较高"},
          {text:"可以，固定留出两个人的时间就行。",reply:"这跟我挺像。各自有事，但别变成只剩各自。",signal:"接受独立时间 + 固定共同时间"},
          {text:"我也很需要自己的时间。",reply:"那应该比较轻松，不用每天都靠在一起证明关系。",signal:"自主空间需求较高"}
        ]
      }
    ]
  }
};

const state={candidateId:null,nodeIndex:0,replyIndex:null,records:{},screen:"roster"};

function byId(id){return document.getElementById(id);}
function candidate(){return profiles[state.candidateId];}
function content(){return CONTENT[state.candidateId];}
function safe(v,fallback){return v==null||v===""?fallback:v;}

let profiles=FALLBACK;

async function loadProfiles(){
  try{
    const res=await fetch("../spec/v0/candidates.json");
    if(!res.ok)throw new Error("bad response");
    const json=await res.json();
    const merged={};
    json.candidates.filter(function(x){return ["P01","P02","P03","P04"].includes(x.id);}).forEach(function(x){
      merged[x.id]={name:x.presentation.name,age:x.presentation.age,facts:Object.assign({},FALLBACK[x.id].facts,x.facts||{})};
    });
    if(Object.keys(merged).length===4)profiles=merged;
  }catch(e){
    profiles=FALLBACK;
  }
}

function factRows(p){
  const f=p.facts||{};
  return [
    ["城市",safe(f.current_city,"同城")],
    ["学历",safe(f.education,"未填写")],
    ["工作",safe(f.occupation,"未填写")],
    ["收入",safe(f.income_band,"未填写")],
    ["住房",safe(f.housing,"未填写")]
  ];
}

function card(id){
  const p=profiles[id],c=CONTENT[id],r=state.records[id];
  const facts=factRows(p);
  const status=r?'<div class="status">'+r.label+'</div>':"";
  return '<button class="person-card '+c.tone+'" data-person="'+id+'">'+
    status+
    '<div class="avatar"><span>'+p.name.slice(0,1)+'</span></div>'+
    '<div class="person-main"><div class="name-row"><h2>'+p.name+'</h2><span>'+p.age+' 岁</span></div>'+
    '<div class="mini-facts">'+
      facts.slice(1).map(function(x){return '<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>';}).join("")+
    '</div>'+
    '<p class="friend-line">朋友：'+c.friend+'</p></div>'+
  '</button>';
}

function renderRoster(){
  state.screen="roster";
  byId("app").innerHTML=
    '<div class="page"><header><div class="brand">RELATIONSHIP</div><div class="phase">朋友发来 4 个人</div></header>'+
    '<main class="roster"><div class="intro-copy"><h1>你看看。</h1><p>资料里能直接知道的，先直接给你。</p></div>'+
    '<div class="people-grid">'+["P01","P02","P03","P04"].map(card).join("")+'</div></main></div>';
  document.querySelectorAll("[data-person]").forEach(function(btn){
    btn.addEventListener("click",function(){state.candidateId=btn.dataset.person;renderDetail();});
  });
}

function detailField(label,value){
  return '<div class="detail-field"><span>'+label+'</span><strong>'+value+'</strong></div>';
}

function renderDetail(){
  state.screen="detail";
  const p=candidate(),f=p.facts||{},c=content();
  byId("app").innerHTML=
    '<div class="page"><header><button class="text-btn" id="back">← 其他人</button><div class="phase">相亲资料</div></header>'+
    '<main class="detail-wrap"><section class="portrait '+c.tone+'"><div class="avatar big"><span>'+p.name.slice(0,1)+'</span></div><h1>'+p.name+'</h1><p>'+p.age+' 岁 · '+safe(f.current_city,"同城")+'</p></section>'+
    '<section class="details">'+
      detailField("学历",safe(f.education,"未填写"))+
      detailField("工作",safe(f.occupation,"未填写"))+
      detailField("收入",safe(f.income_band,"未填写"))+
      detailField("住房",safe(f.housing,"未填写"))+
      detailField("家庭",safe(f.family_background,"未填写"))+
      detailField("孩子",f.children_intent==="open"?"可以商量":safe(f.children_intent,"未填写"))+
      detailField("烟酒",(f.smoking==="no"?"不抽烟":"吸烟情况未定")+" · "+(f.drinking==="rare"?"很少喝酒":f.drinking==="social"?"社交会喝":"饮酒情况未定"))+
      '<div class="friend-box"><span>朋友说</span><p>'+c.friend+'</p></div>'+
      '<div class="actions"><button class="primary" id="meet">见见他</button></div>'+
    '</section></main></div>';
  byId("back").addEventListener("click",renderRoster);
  byId("meet").addEventListener("click",function(){state.nodeIndex=0;state.replyIndex=null;renderProbe();});
}

function renderProbe(){
  state.screen="probe";
  const p=candidate(),c=content(),node=c.probes[state.nodeIndex];
  if(!node){renderDecision();return;}
  const reply=state.replyIndex==null?null:node.choices[state.replyIndex];
  byId("app").innerHTML=
    '<div class="page"><header><button class="text-btn" id="quit">← 结束这次见面</button><div class="phase">'+node.time+'</div></header>'+
    '<main class="conversation">'+
      '<section class="scene-person '+c.tone+'"><div class="avatar big"><span>'+p.name.slice(0,1)+'</span></div><div><h2>'+p.name+'</h2><p>'+node.label+'</p></div></section>'+
      '<section class="dialogue-panel">'+
        '<div class="dialogue-lines">'+node.lines.map(function(line){return '<div class="speech"><span>'+line.speaker+'</span><p>'+line.text+'</p></div>';}).join("")+'</div>'+
        (reply===null?
          '<div class="choice-list">'+node.choices.map(function(ch,i){return '<button class="choice" data-reply="'+i+'">'+ch.text+'</button>';}).join("")+'</div>':
          '<div class="response"><div class="you">你：'+reply.text+'</div><div class="him">'+p.name+'：'+reply.reply+'</div></div>'+
          '<button class="primary next" id="next">'+(state.nodeIndex===c.probes.length-1?"聊到这里":"继续聊")+'</button>'
        )+
      '</section>'+
    '</main></div>';
  byId("quit").addEventListener("click",function(){renderDecision();});
  document.querySelectorAll("[data-reply]").forEach(function(btn){
    btn.addEventListener("click",function(){
      state.replyIndex=Number(btn.dataset.reply);
      const selected=node.choices[state.replyIndex];
      if(!state.records[state.candidateId])state.records[state.candidateId]={events:[]};
      state.records[state.candidateId].events.push({contract_id:node.id,choice_index:state.replyIndex,choice:selected.text,signal:selected.signal});
      renderProbe();
    });
  });
  const next=byId("next");
  if(next)next.addEventListener("click",function(){state.nodeIndex+=1;state.replyIndex=null;renderProbe();});
}

function renderDecision(){
  state.screen="decision";
  const p=candidate(),c=content();
  byId("app").innerHTML=
    '<div class="page"><header><button class="text-btn" id="backToDate">← 再聊聊</button><div class="phase">这次见面</div></header>'+
    '<main class="decision">'+
      '<div class="avatar big '+c.tone+'"><span>'+p.name.slice(0,1)+'</span></div>'+
      '<h1>还想再见'+p.name+'吗？</h1>'+
      '<div class="decision-grid">'+
        '<button class="decision-btn" data-decision="YES"><strong>想再见</strong><span>愿意继续了解</span></button>'+
        '<button class="decision-btn" data-decision="MAYBE"><strong>再看看</strong><span>现在还不确定</span></button>'+
        '<button class="decision-btn" data-decision="NO"><strong>不继续</strong><span>到这里就好</span></button>'+
      '</div>'+
    '</main></div>';
  byId("backToDate").addEventListener("click",function(){state.nodeIndex=Math.max(0,content().probes.length-1);state.replyIndex=null;renderProbe();});
  document.querySelectorAll("[data-decision]").forEach(function(btn){
    btn.addEventListener("click",function(){
      const d=btn.dataset.decision;
      const labels={YES:"想再见",MAYBE:"再看看",NO:"不继续"};
      if(!state.records[state.candidateId])state.records[state.candidateId]={events:[]};
      state.records[state.candidateId].decision=d;
      state.records[state.candidateId].label=labels[d];
      renderRoster();
    });
  });
}

async function init(){
  await loadProfiles();
  renderRoster();
}

init();
