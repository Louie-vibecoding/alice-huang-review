window.REVIEW = {
  updated: '2026-11-09',
  investigations: [
    {title:'美国国会：安全问询',date:'信函 2026-11-04',status:'官方原信已读',type:'direct',body:'众议院外交事务、对华特别委员会和情报委员会的主席要求黄仁勋作联合闭门简报，说明英伟达防范外国间谍活动的安全措施，以及他与 Alice 的往来。信函将敏感技术和信息的访问风险列为关切。',limit:'要求11月18日出席，并在11月11日前接受或提出其他开会日。截止本页资料日期，这些节点尚未到来；原信不是起诉书，也没有写已签发传票。',refs:['congress']},
    {title:'英伟达：董事会调查',date:'公告 2026-11-08',status:'公司公告已读',type:'direct',body:'独立董事组成的委员会在外部独立律师协助下，审查有关CEO可能成为外国情报活动目标的报道。黄仁勋公开表示支持并将合作。',limit:'这是公司内部治理调查。董事会当时表示没有理由相信国家安全或公司秘密受到损害；该立场不是调查完成，也不是对 Alice 身份的认证。',refs:['board','letter']},
    {title:'美国部门：芯片业务',date:'2026-10-29 报道追述',status:'媒体转述，未获案件原档',type:'reported',body:'Anadolu 转述《纽约时报》称，美国自2024年末调查 Megaspeed 涉嫌芯片转移的问题，并称2026年转交司法部。报道焦点是客户公司及先进芯片业务的出口合规。',limit:'团队没有取得该移交文件或本案公开起诉书。不能将“调查 Megaspeed 的芯片业务”直接改成“司法部已起诉黄仁勋”，也不能从这条报道认定走私已经成立。',refs:['aa-oct','nyt-2025']},
    {title:'新加坡：公司调查',date:'声明 2026-10-31',status:'政府声明及附件已读',type:'direct',body:'内政部公布的警方答复确认对 Megaspeed 的调查继续。声明另否认报道所称政府担忧 Alice 的情报关系及曾对其开展这类调查。',limit:'公司调查与个人情报关系调查是不同范围。声明既不能被写成“她已被新加坡证实为间谍”，也不能被扩大为对所有外国调查或指控的否定。',refs:['mha']}
  ],
  roles: [
    {label:'经营与客户关系职能',title:'商业经营者／算力客户代表',score:7,definition:'参与经营一家算力企业，代表其接洽客户、供应商与行业伙伴。',support:'查册报道记录过 Megaspeed 的 managing director 职位；活动原帖和新闻报道呈现了行业交往。证据集中于商业参与。',limit:'活动中称“董事长”不等于登记认证；历史董事文件未由团队亲查。不据此认定当前职务、持续实控或技术研发能力。',change:'历史任免文件、公司授权说明及可核对的具体业务职责。',refs:['st','netthunder','nyt-2025']},
    {label:'资本与交易协调职能',title:'资本／业务中介',score:4,definition:'以投资和商业联系，协调资金、客户与算力项目之间的合作。',support:'和熙名录中的投资职务，加上报道中的跨机构联系，支持“可能承担协调职能”这一解释。',limit:'尚未取得居间合同、授权、佣金或具体撮合交易记录。不能将有人脉或担任高管自动等同为职业掮客、非法中介或从关系获利。',change:'有明确当事方、时间、授权与责任的投融资或业务协调文件。',refs:['amac','nyt-2025']},
    {label:'报道所指角色 · 未独立认定',title:'受招募的情报任务执行者',score:3,definition:'商业角色之外，被情报机构招募，依指令收集或传递信息。这是媒体指控的角色，不是已确认职业。',support:'公开报道援引了解非公开情报及备忘录的人士，提出招募和信息传递指控。这类报道值得认真查证，不能当普通网络猜测忽略。',limit:'底层情报未公开；是否存在具体任务或传递内容及其细节，本组无法独立核实。3分仅为公开材料支持度，绝不是“她有30%概率是间谍”。国会和董事会引用报道，不构成额外两份独立身份证明。',change:'可审查的任务或信息传递材料、正式调查结论，以及能检验相关指控的反方材料。',refs:['aa-nov','aa-oct','congress','board','mha']}
  ],
  scoreNote:'三项现在对应不同工作职能，替代第一版“同一职业主线／完整履历／同名混配”的错误分法。主审给7／4／3；Terra认可前两项为7／4，但认为第三项不宜给个人身份置信分。页面保留这一异议：第三分数只表示公开证据支持程度，不是对个人身份的测量或定罪。没有将不同角色分数归一化，也没有将多名评审的票数当事实。',
  reviews:[{name:'GPT-6 Astra · 主审',scores:['7','4','3（公开证据支持度）']},{name:'GPT-6.1 Terra · 独立反方',scores:['7','4','不提供身份置信分']}],
  evidence:[
    {type:'direct',title:'承认婚内不忠，不等于承认情报指控',body:'英伟达官网公开了黄仁勋11月8日致员工的信。他对婚内不忠道歉，并支持董事会调查。',limit:'公开信没有点名女方，也没有承认泄露秘密。关系事实与信息是否传递，须分别证明。',refs:['letter']},
    {type:'direct',title:'国会明确提出国家安全关切',body:'三位委员会主席的联名信要求黄仁勋解释反间谍措施和与 Alice 的交往。它引用的是公开报道所描述的情报角色。',limit:'它直接证明问询行动和关切存在；不直接证明被引用的身份指控为真。要求到场、接受安排、实际出席是不同阶段。',refs:['congress']},
    {type:'reported',title:'情报招募与备忘录：来源仍是报道',body:'Anadolu 11月9日转述纽时关于一份涉黄仁勋关系的机密备忘录及情报招募的报道；被引用的底层材料没有在本文所获资料中公开。',limit:'读到的是转述正文，不是备忘录原件或监听资料。不能把未回应、商业往来或私人关系当作完成招募、传递情报的证明。',refs:['aa-nov']},
    {type:'limit',title:'中国方面否认相关指控',body:'Anadolu 对纽时报道的转述同时记载中国使馆否认相关指控；该回应须与指控一起呈现。',limit:'这是当事方面的否认立场，既不是独立查明无事，也不能因立场相反而省略。团队未取得使馆该回应的原始全文。',refs:['aa-oct']},
    {type:'limit',title:'新加坡明确否认一项被归给它的说法',body:'内政部声明否认曾作出报道所述的个人情报关系判断或展开此类调查，同时保留对公司的调查。',limit:'附件中记者关于问询、释放的提问不是政府确认。不能将附件提到的其他四人、四家公司案件记到 Alice 名下。',refs:['mha']},
    {type:'direct',title:'职业记录存在，完整履历仍有空白',body:'协会历史表列和熙的黄乐为执行董事；私募数据库另描述媒体、银行和证券经历。',limit:'前一条不为后一条全部背书；当前数据库页也不确定个人任职起止、学历或当下状态。表中日期不能直接用作个人入职日期。',refs:['amac','profile']},
    {type:'limit',title:'早期 X 帖文没有把疑问变成证据',body:'2025年 Byron Wan 的帖子是疑问句；2026年 Culper 帖把聚会、晚餐与业务时点并列。后续再转发，不增加独立验证。',limit:'仅核官方公开嵌入可返回的文字、作者、日期及部分链接跳转，未核图片内容。Culper有做空经济利益；时间相近不是因果证据。',refs:['x-byron','x-culper','culper']},
    {type:'limit',title:'YouTube 的长视频与 Shorts 不能重复计票',body:'已取得的一部长视频自动字幕将职业描述归因纽时和彭博；关联 Shorts 复用同一段。',limit:'自动字幕不是雇主记录，也可能误写人名。另一个B站候选只有元数据、没有可用字幕且未观看，正文不能算作已核证据。',refs:['youtube','shorts','bilibili']}
  ],
  timeline:[
    {date:'2015-09-28',title:'Megaspeed 的前身法人设立',body:'官方开放数据可核设立日及旧名；不是 Alice 个人职业的起点。',refs:['acra']},
    {date:'2023年',title:'业务重组与个人任职变动',body:'记者查册描述 Megaspeed 更名及年内董事任职变化；不是团队持有的历史任免底档。',refs:['st']},
    {date:'2024年6月',title:'台北行业活动的公开记录',body:'NetThunder 帖文将一位参与者标为 Alice Wong、Megaspeed Chairwoman；报道连接到 Alice Huang。',refs:['netthunder','nyt-2025']},
    {date:'2025年10月',title:'芯片业务调查进入新闻报道',body:'纽时调查叙述企业业务与人物联系，同时说明部分早期职业经历未能确认。',refs:['nyt-2025']},
    {date:'2026-10-29 / 31',title:'情报指控与新加坡澄清',body:'媒体提出情报角色指控；随后新加坡声明反驳被归给其政府的有关个人调查说法。',refs:['aa-oct','mha']},
    {date:'2026-11-04',title:'国会发出闭门简报请求',body:'安排要求指向11月18日，11月11日前回复。页面截止时尚不是已举行的听证或简报。',refs:['congress']},
    {date:'2026-11-08',title:'黄仁勋道歉，董事会启动调查',body:'本人公开信与董事会声明是两个文件，分别说明个人承认事项和公司审查范围。',refs:['letter','board']},
    {date:'2026-11-09',title:'本版资料截止',body:'保留未知、分歧和未来节点；尚未把报道指控升级为独立认定。',refs:['aa-nov']}
  ],
  debates:[
    {title:'三个解释，还是三种不同角色？',challenge:'第一版把职业主线、完整履历和同名误认列为三项，回答偏离了不同职业身份的要求。',decision:'改为商业经营、资本/业务协调、被指情报任务三种职能；同名和任职真实性仍留在证据层。'},
    {title:'是否应该给情报身份打分？',challenge:'反方认为公开数值容易被误读成对个人“嫌疑”的客观测量。',decision:'保留反方不提供身份置信分的意见。主审仅评公开证据支持度，分数旁直接写明不足以独立认定和不能换算为概率。'},
    {title:'不同主体的调查能否相互佐证？',challenge:'国会信、公司调查和媒体报道可能共同依赖同一组未公开情报消息。',decision:'区分行动发生与指控真假；不得计作三次独立证实，不把公司调查对象替换为CEO个人刑事案件。'},
    {title:'资料少，是否说明履历虚假？',challenge:'没搜到任职原件、主管不认识、机构未回复，容易被写成履历造假。',decision:'仅标未核实。公开报道的身份连接与任职原件分层；活动头衔、登记职位和实际控制也分开。'}
  ],
  coverage:[
    {platform:'机构与公司原件',scope:'读国会一页原信、英伟达两份公告、新加坡声明及附件；查询ACRA官方企业开放数据，核协会PDF表头和第551行。'},
    {platform:'报纸与通讯社',scope:'读纽时2025报道的可读转载及Anadolu、Reuters报道正文。部分纽时2026原站无法访问；彭博相关内容来自搜索索引的存档段落，未取得底层登记身份文件。转述与原报道不重复计票。'},
    {platform:'X',scope:'5条具体帖通过X官方公开嵌入接口取得可返回文字。Byron 2026长帖有截断；原帖图片未核。浏览器搜索要求登录，电脑控制又因不能确认当前网址停止；没有绕过限制。'},
    {platform:'YouTube / Bilibili',scope:'通读Knawledge长视频和关联Shorts的英文自动字幕。另一个YouTube候选仅元数据；B站候选读取接口元数据，没有字幕且未观看，不声称其正文已经核查。'},
    {platform:'中文自媒体 / Google',scope:'所读中文自媒体主要转述职业简介，未增加雇主原始证明。Google直连本轮不可访问，使用其他网页检索入口；没有进行穷尽检索或声称全平台覆盖。'}
  ],
  sources:[
    {id:'congress',short:'国会原信',title:'美国众议院三委员会主席致黄仁勋联名信',date:'2026-11-04',scope:'官方PDF，一页全文及版面已核；请求闭门简报，不是起诉书。',url:'https://chinaselectcommittee.house.gov/sites/evo-subsites/selectcommitteeontheccp.house.gov/files/evo-media-document/nvidia-letter-pdf.pdf'},
    {id:'board',short:'董事会公告',title:'NVIDIA Board of Directors · 独立调查声明',date:'2026-11-08',scope:'公司官网全文；公司立场与调查安排，不是完成后的结论。',url:'https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors'},
    {id:'letter',short:'黄仁勋公开信',title:'NVIDIA · A Message to Our Company',date:'2026-11-08',scope:'官网全文；承认婚内不忠，未点名女方。',url:'https://nvidianews.nvidia.com/news/a-message-to-our-company'},
    {id:'mha',short:'新加坡声明',title:'新加坡内政部 · 关于华尔街日报文章的澄清',date:'2026-10-31',scope:'全文与附件已读；记者提问和政府答复分别处理。',url:'https://www.mha.gov.sg/media-room/newsroom/clarification-statement-on-wall-street-journals-article/'},
    {id:'aa-oct',short:'Anadolu 10月报道',title:'Anadolu · 对纽时情报指控与芯片调查的转述',date:'2026-10-29',scope:'正文已读；情报结论及移交司法部说法归因纽时，不是本组取得的官方案件材料。',url:'https://www.aa.com.tr/en/americas/us-intelligence-identified-chinese-executive-with-ties-to-nvidia-ceo-as-beijing-asset-report/4105343'},
    {id:'aa-nov',short:'备忘录报道',title:'Anadolu · 对卢比奥监督起草备忘录报道的转述',date:'2026-11-09',scope:'正文已读，来源为纽时报道；未读到机密备忘录或原始情报。',url:'https://www.aa.com.tr/en/americas/rubio-oversaw-classified-memo-alleging-nvidia-ceo-s-ties-to-suspected-chinese-intelligence-operative-report/4116377'},
    {id:'nyt-2025',short:'纽时2025报道',title:'纽约时报调查 · Indian Express 转载',date:'转载 2025-10-12',scope:'读到正文；与纽时属于一篇来源。媒体及私人银行经历未获该文确认。',url:'https://indianexpress.com/article/technology/tech-news-technology/a-mystery-ceo-and-billions-in-sales-is-china-buying-banned-nvidia-chips-10302088/'},
    {id:'st',short:'查册报道',title:'海峡时报 · Megaspeed 公司调查报道',date:'2025-10-10',scope:'读到同篇商业时报转载；个人任期属于记者查册，团队未亲读历史底档。',url:'https://www.straitstimes.com/business/megaspeed-singapore-firm-at-centre-of-us-chip-probe-goes-dark'},
    {id:'netthunder',short:'NetThunder 原帖',title:'NetThunder · COMPUTEX 活动 LinkedIn 帖',date:'2024年6月',scope:'原帖文字可读，写Alice Wong；人物连接另归因报道，未自行人脸识别。',url:'https://www.linkedin.com/posts/netthunder_computex-ai-activity-7204717554206924800-rR8T'},
    {id:'amac',short:'协会名录',title:'中国证券投资基金业协会历史会员名录',date:'历史表；确切编制日未确认',scope:'核第1、10页；第551行。会员机构入会范围不等于个人任职起日。',url:'https://www.amac.org.cn/gyxh/gyxh_hydbdh/201610/P020231126408470950271.pdf'},
    {id:'acra',short:'ACRA 数据',title:'ACRA 官方企业开放数据 · M 字头',date:'页面更新2026-10-14；查询11-09',scope:'按UEN查询得到法人记录；开放字段没有个人历史董事任免或股权变更。',url:'https://data.gov.sg/datasets/d_9af9317c646a1c881bb5591c91817cc6/view'},
    {id:'profile',short:'职业简介',title:'私募排排网 · 黄乐经理档案',date:'简介无可靠首发日期',scope:'原页已读；早期各段任职时间未知，数据库声明不作实质真实性保证。',url:'https://dc.simuwang.com/manager/PL000008LB.html'},
    {id:'bloomberg',short:'彭博调查',title:'Bloomberg · Megaspeed 调查',date:'2025-12-22；2026-01-06修订',scope:'原站元数据及搜索索引存档相关段落；未亲查其引用的身份底档。',url:'https://www.bloomberg.com/news/features/2025-12-22/nvidia-partner-megaspeed-draws-china-chip-smuggling-concerns-in-us'},
    {id:'x-byron',short:'Byron X 旧帖',title:'Byron Wan · 2025年疑问帖',date:'2025-10-10',scope:'X官方oEmbed可返回文字；疑问句，不是情报身份的证明。',url:'https://x.com/Byron_Wan/status/1976487803602206938'},
    {id:'x-culper',short:'Culper X 帖',title:'Culper · 聚会与业务时点帖子',date:'2026-05-13',scope:'X官方oEmbed文字；图片未核。仅并列时点，不能证明因果。',url:'https://x.com/CulperResearch/status/2054624514193928695'},
    {id:'culper',short:'Culper报告',title:'Culper Research · Nvidia 做空报告',date:'2026-05-13',scope:'仅检索可见相关段落及空头利益披露；未完整核读PDF，不采用其匿名员工说法认定实际控制。',url:'https://culperresearch.com/wp-content/uploads/2026/05/Culper_NVDA_5-13-2026.pdf'},
    {id:'youtube',short:'YouTube 长视频',title:'Knawledge · A Spy Behind Jensen Huang?',date:'2026-11-01',scope:'通读英文自动字幕；早期职业段归因媒体，无新增雇主证明。',url:'https://www.youtube.com/watch?v=H0wISVvlg3A'},
    {id:'shorts',short:'相关 Shorts',title:'Knawledge · Who Is Alice Huang?',date:'2026-11-06',scope:'自动字幕与长视频相关段基本重复；同一传播链。',url:'https://www.youtube.com/watch?v=4l0pm3wPu50'},
    {id:'bilibili',short:'B站候选',title:'Bilibili · Alice Huang 是谁（候选视频）',date:'2026-11-08',scope:'仅官方接口元数据；无字幕，未观看，正文不计证据。',url:'https://www.bilibili.com/video/BV1qJ4x6zE7M'}
  ]
};
