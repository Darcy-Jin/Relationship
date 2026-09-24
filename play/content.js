export const encounters = {
  P01: {
    scene: '周六下午 · 城市书店楼下',
    intro: '林序刚结束一场临时会议，手里还拿着电脑包。说话很直接，整个人有种一直往前走的感觉。',
    line: '“这周终于不用出差了。你喝咖啡吗？附近有家店，我只去过一次。”',
    responses: ['“走啊，正好我也想找个地方坐会儿。”','“你周末也这么忙吗？”','“今天有点累，下次吧。”']
  },
  P02: {
    scene: '周日傍晚 · 社区市集',
    intro: '周宁拎着一袋刚买的面包，看见一家卖花的小摊停了下来。说起生活里的小事时很认真。',
    line: '“我周末一般不太安排工作。逛市场、做饭、收拾家，差不多就这些。”',
    responses: ['“听起来挺舒服的。”','“你不会觉得这样有点太固定吗？”','“我周末更喜欢各过各的。”']
  },
  P03: {
    scene: '周五晚上 · 朋友的生日局',
    intro: '许澈是最后到的那个人，也是最快和所有人熟起来的那个。桌上话题换得很快，他总能接上。',
    line: '“我们等会儿可能去江边走走。你要不要一起？不想去也没关系。”',
    responses: ['“走吧，反正还早。”','“你平时都这么多局吗？”','“我还是先回去了。”']
  },
  P04: {
    scene: '下班后 · 健身房楼下',
    intro: '沈知刚练完，坐在便利店外面喝水。话不多，但问问题的时候会认真听你说完。',
    line: '“我最近在学一个新东西，进度有点慢。你下班以后一般怎么恢复状态？”',
    responses: ['“我也会找点自己的事情做。”','“我下班以后只想什么都不干。”','“你平时是不是挺少出去玩的？”']
  }
};

export const dateScenes = {
  P01: [
    {kicker:'第一次约会 · 周六 15:10',title:'咖啡店排队四十分钟',body:'你们到了才发现店里排得很长。林序看了眼时间，又看了看你。',line:'“要不换一家？我不太想把下午都花在排队上。”',choices:[
      {text:'“好，附近随便找一家。”',tags:['TOGETHER_POSITIVE']},{text:'“都来了，再等一会儿吧。”',tags:['PREDICTABLE']},{text:'“那我们边走边聊也行。”',tags:['SPACE_RESPECTED']}
    ]},
    {kicker:'下午 16:20',title:'工作电话还是打了进来',body:'聊到一半，他的手机响了。他看了一眼，没有马上接。',line:'“是客户。应该不会太久，我接一下可以吗？”',choices:[
      {text:'“接吧，没事。”',tags:['RESPONSIVE']},{text:'“可以，但别变成半小时。”',tags:['PREDICTABLE']},{text:'“今天不是说好休息吗？”',tags:['DISTANCE']}
    ]},
    {kicker:'傍晚 18:10',title:'聊到未来的时候',body:'你们沿着街慢慢走。他提到明年可能会有一次很重要的晋升机会。',line:'“如果真有机会，我大概会拼一把。不过我不想把生活过成只剩工作。”',choices:[
      {text:'“我能理解，想要的东西本来就要争取。”',tags:['TOGETHER_POSITIVE']},{text:'“我更在意你最后怎么平衡。”',tags:['RESPONSIVE']},{text:'“我可能不适合太忙的人。”',tags:['DISTANCE']}
    ]}
  ],
  P02: [
    {kicker:'第一次约会 · 周日下午',title:'本来说去吃饭，最后一起逛了超市',body:'周宁路过一家生鲜店，忽然说不如买点东西回去做。',line:'“外面吃也行，不过我做饭还不错。你介意临时改一下吗？”',choices:[
      {text:'“可以啊，我正好想看看你手艺。”',tags:['TOGETHER_POSITIVE']},{text:'“今天还是按原计划吧。”',tags:['PREDICTABLE']},{text:'“你是不是很喜欢两个人一起做所有事？”',tags:['SPACE_RESPECTED']}
    ]},
    {kicker:'傍晚 18:00',title:'厨房里的默契',body:'他一边切菜一边问你要不要帮忙，动作自然得像已经一起生活过很久。',line:'“我其实挺喜欢这种有人一起做饭的感觉。”',choices:[
      {text:'“我也喜欢。”',tags:['TOGETHER_POSITIVE']},{text:'“偶尔可以，但我不想每天都这样。”',tags:['SPACE_RESPECTED']},{text:'“我更喜欢各自做自己的事。”',tags:['DISTANCE']}
    ]},
    {kicker:'晚上 20:30',title:'他问起你的周末',body:'吃完饭后，他很自然地聊起下周。',line:'“下周要不要一起去郊外？我已经看了两条路线。”',choices:[
      {text:'“可以，发我看看。”',tags:['TOGETHER_POSITIVE']},{text:'“我想先留一天给自己。”',tags:['SPACE_RESPECTED']},{text:'“你安排得也太快了吧。”',tags:['PARTIAL_RESPONSE']}
    ]}
  ],
  P03: [
    {kicker:'第一次约会 · 周五晚上',title:'原本两个人，后来又多了三个人',body:'吃到一半，许澈收到朋友消息，对方就在附近。',line:'“他们问要不要一起坐会儿。你不想的话我们就不去。”',choices:[
      {text:'“去啊，人多也挺热闹。”',tags:['TOGETHER_POSITIVE']},{text:'“我更想今天就我们两个。”',tags:['RESPONSIVE']},{text:'“你每次约会都会临时加人吗？”',tags:['PREDICTABLE']}
    ]},
    {kicker:'晚上 21:40',title:'计划说变就变',body:'本来准备去看夜景，朋友又提议去唱歌。许澈明显有点心动。',line:'“你想去就去，不想去我们还是按原来走。”',choices:[
      {text:'“去吧，今天就随性一点。”',tags:['TOGETHER_POSITIVE']},{text:'“我还是想按原来的。”',tags:['PREDICTABLE']},{text:'“我不太喜欢一直变计划。”',tags:['RESPONSIVE']}
    ]},
    {kicker:'深夜 23:10',title:'回家的路上',body:'路上安静下来后，他忽然认真了一点。',line:'“我挺喜欢自己的生活，也不太想因为恋爱就把朋友和兴趣都收掉。”',choices:[
      {text:'“我也是，关系不应该把人变小。”',tags:['SPACE_RESPECTED']},{text:'“我可以接受，但边界要说清楚。”',tags:['PREDICTABLE']},{text:'“我可能会更需要两个人的时间。”',tags:['DISTANCE']}
    ]}
  ],
  P04: [
    {kicker:'第一次约会 · 周六下午',title:'一场很安静的约会',body:'沈知选了一家不太吵的店。没有特别制造话题，但你说什么他都会接着问。',line:'“我其实不太擅长把气氛弄得很热闹。你会觉得无聊吗？”',choices:[
      {text:'“不会，我觉得挺舒服。”',tags:['TOGETHER_POSITIVE']},{text:'“有一点，但我更在意能不能聊得深。”',tags:['RESPONSIVE']},{text:'“我还是更喜欢活跃一点的人。”',tags:['DISTANCE']}
    ]},
    {kicker:'下午 17:00',title:'他提到最近的工作',body:'他说自己现在收入一般，但在准备一个新的方向，可能还需要一两年。',line:'“我知道现在看起来不算特别好，不过我想把这件事做出来。”',choices:[
      {text:'“有方向就挺好，我更看重这个。”',tags:['TOGETHER_POSITIVE']},{text:'“我会在意现实压力，但可以看看。”',tags:['PARTIAL_RESPONSE']},{text:'“我可能更需要现在就稳定一点。”',tags:['DISTANCE']}
    ]},
    {kicker:'傍晚 19:10',title:'临走前的一句话',body:'分别前，他没有安排下一场约会，只说了一句。',line:'“今天我挺开心的。如果你也觉得还不错，我们再约。”',choices:[
      {text:'“好，我也想再见。”',tags:['TOGETHER_POSITIVE']},{text:'“可以，再了解一下。”',tags:['RESPONSIVE']},{text:'“我再想想。”',tags:['DISTANCE']}
    ]}
  ]
};

export const finalLabels = {
  CONTINUE: '我愿意继续',
  CHANGE: '我愿意，但有一件事必须变',
  UNSURE: '我不知道',
  LEAVE: '我想离开'
};

export const encounterReactionMap = {
  WANT: { attraction:3, wouldConsider:true, label:'很想再见' },
  MAYBE: { attraction:2, wouldConsider:true, label:'可以再看看' },
  NO: { attraction:1, wouldConsider:false, label:'没什么感觉' }
};
