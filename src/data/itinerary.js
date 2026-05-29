// 旅行方案数据
// Plan A: 天气好 - 经典路线
// Plan B: 下雨备选 - 室内/避雨
// Plan C: 时间充足 - 含三亚

const createDay = (day, date, overrides = {}) => ({
  day,
  date,
  ...overrides,
});

export const plans = {
  A: {
    id: 'A',
    name: 'Plan A · 经典自驾',
    subtitle: '适合好天气，沿海+山区全体验',
    icon: '☀️',
    color: '#0ea5e9',
    description: '经典海南东线+中线自驾路线，从海口出发，经万宁沿海公路到五指山雨林，覆盖海滩、冲浪、爬山、漂流，体验最丰富的海南。',
    days: [
      createDay(1, '6月9日', {
        location: '海口',
        region: '海口市区',
        spots: [
          { name: '骑楼老街', type: '文化', desc: '百年南洋风情建筑群，拍照超出片', time: '2-3小时' },
          { name: '云洞图书馆', type: '打卡', desc: '海边网红图书馆，日落时分最美', time: '1-2小时' },
          { name: '假日海滩', type: '海滩', desc: '市区最近的海滩，傍晚散步绝佳', time: '1-2小时' },
        ],
        foods: [
          { name: '糟粕醋', desc: '海南特色酸汤，开胃必试' },
          { name: '老爸茶', desc: '海口人的下午茶文化' },
          { name: '清补凉', desc: '椰奶底料，消暑神器' },
        ],
        stay: { area: '骑楼老街/海甸岛', reason: '交通方便，靠近美食，有停车场' },
        drive: { from: '出发地', to: '海口', distance: '—', time: '抵达日' },
        weather: { type: 'sunny', temp: '32°C / 26°C', note: '海口6月炎热，注意防晒补水', icon: '☀️' },
        tips: '建议下午到达，傍晚逛骑楼老街，晚上去南门夜市。海口市区停车位紧张，建议酒店停好车后打车出行。',
      }),
      createDay(2, '6月10日', {
        location: '海口',
        region: '海口及周边',
        spots: [
          { name: '雷琼火山公园', type: '自然', desc: '万年火山遗迹，登高看海口全景', time: '3-4小时' },
          { name: '海南省博物馆', type: '文化', desc: '了解海南历史文化，室内避暑好去处', time: '2小时' },
          { name: '南门夜市', type: '美食', desc: '海口最大夜市，晚上才热闹', time: '2小时' },
        ],
        foods: [
          { name: '海南粉', desc: '细滑米粉配卤汁，海口人早餐首选' },
          { name: '椰子鸡火锅', desc: '椰青做汤底，清甜鲜美' },
          { name: '陵水酸粉', desc: '酸辣开胃，夜市必吃' },
        ],
        stay: { area: '骑楼老街/海甸岛', reason: '连续住2晚，不用换酒店' },
        drive: { from: '海口', to: '海口', distance: '市内30km', time: '市内短途' },
        weather: { type: 'sunny', temp: '33°C / 27°C', note: '火山公园暴晒，带足水和防晒', icon: '☀️' },
        tips: '上午去火山公园避开烈日，中午博物馆吹空调，晚上夜市吃到撑。火山公园门票约60元。',
      }),
      createDay(3, '6月11日', {
        location: '海口 → 万宁',
        region: '东线沿海公路',
        spots: [
          { name: '文昌东郊椰林', type: '自然', desc: '万亩椰林，航拍圣地', time: '1-2小时' },
          { name: '博鳌亚洲论坛', type: '打卡', desc: '顺路打卡，建筑很大气', time: '1小时' },
          { name: '神州半岛', type: '海滩', desc: '万宁最美海湾之一', time: '2-3小时' },
        ],
        foods: [
          { name: '文昌鸡', desc: '海南四大名菜之首，椰林旁吃最正宗' },
          { name: '万宁东山羊', desc: '肉质鲜嫩，白切蘸酱' },
        ],
        stay: { area: '神州半岛/石梅湾', reason: '海景民宿，停车方便，早起看日出' },
        drive: { from: '海口', to: '万宁', distance: '约170km', time: '约2.5小时（高速）' },
        weather: { type: 'sunny', temp: '31°C / 26°C', note: '沿海公路风景好，但注意横风', icon: '☀️' },
        tips: '今天以驾驶+沿途打卡为主，不用赶。海南高速免费但油费略高。东郊椰林有停车场，航拍需注意禁飞区。',
      }),
      createDay(4, '6月12日', {
        location: '万宁',
        region: '日月湾 & 石梅湾',
        spots: [
          { name: '日月湾', type: '冲浪', desc: '中国冲浪胜地，新手也能体验', time: '半天' },
          { name: '石梅湾', type: '海滩', desc: '人少海清，《非诚勿扰2》取景地', time: '2-3小时' },
          { name: '最美沿海公路', type: '自驾', desc: '日月湾到石梅湾的沿海公路，超美', time: '沿途' },
        ],
        foods: [
          { name: '海鲜大排档', desc: '石梅湾附近渔村，现捞现做' },
          { name: '椰子鸡', desc: '万宁本地椰子鸡，汤底更甜' },
          { name: '清补凉', desc: '冲浪后来一碗，透心凉' },
        ],
        stay: { area: '日月湾冲浪民宿', reason: '年轻人聚集地，氛围超好' },
        drive: { from: '神州半岛', to: '日月湾', distance: '约30km', time: '约40分钟' },
        weather: { type: 'sunny', temp: '30°C / 25°C', note: '海边紫外线极强，冲浪注意安全', icon: '☀️' },
        tips: '日月湾冲浪体验课约300-500元/人。新手选长板，教练一带一。不会游泳也可以体验，水很浅。',
      }),
      createDay(5, '6月13日', {
        location: '万宁 → 五指山',
        region: '中线进山',
        spots: [
          { name: '兴隆热带植物园', type: '自然', desc: '热带植物王国，咖啡可可园区', time: '2小时' },
          { name: '五指山沿途风景', type: '自驾', desc: '中线山路风景壮丽，云雾缭绕', time: '沿途' },
        ],
        foods: [
          { name: '兴隆咖啡', desc: '中国最好咖啡产地之一' },
          { name: '五指山野菜', desc: '山中野菜，清炒就很好吃' },
          { name: '黎苗竹筒饭', desc: '少数民族传统美食' },
        ],
        stay: { area: '五指山市区/水满乡', reason: '靠近景区，方便第二天爬山' },
        drive: { from: '万宁', to: '五指山', distance: '约120km', time: '约2.5小时（山路）' },
        weather: { type: 'cloudy', temp: '28°C / 22°C', note: '进山后温度下降，带薄外套', icon: '⛅' },
        tips: '中线山路弯道多，新手慢开。兴隆植物园门票约50元。晚上山里凉爽，终于不用开空调了。',
      }),
      createDay(6, '6月14日', {
        location: '五指山',
        region: '五指山热带雨林',
        spots: [
          { name: '五指山热带雨林', type: '徒步', desc: '海南最高峰，热带雨林徒步', time: '全天' },
          { name: '五指山漂流', type: '户外', desc: '海南最刺激的峡谷漂流', time: '2小时' },
        ],
        foods: [
          { name: '五脚猪', desc: '五指山特产，皮厚肉香' },
          { name: '山兰酒', desc: '黎族传统米酒，微甜' },
          { name: '竹筒饭', desc: '竹子清香渗入米饭' },
        ],
        stay: { area: '五指山市区/水满乡', reason: '连住2晚，不用搬行李' },
        drive: { from: '—', to: '—', distance: '景区内短途', time: '—' },
        weather: { type: 'rain', temp: '26°C / 20°C', note: '山区多阵雨，带雨衣和防滑鞋', icon: '🌧️' },
        tips: '雨林徒步选A线约4小时，B线约2小时。漂流需提前预约，含装备约200元/人。山上信号可能不好。',
      }),
      createDay(7, '6月15日', {
        location: '五指山 → 海口',
        region: '返程',
        spots: [
          { name: '牙胡梯田', type: '自然', desc: '海南最美梯田，6月正是水稻绿油油的季节', time: '1-2小时' },
          { name: '屯昌梦幻香山', type: '休闲', desc: '香草园，顺路放松', time: '1小时' },
        ],
        foods: [
          { name: '定安牛肉', desc: '定安仙沟牛肉，现宰现卖' },
          { name: '海南粉', desc: '回来再吃一碗' },
        ],
        stay: { area: '海口美兰机场附近', reason: '方便第二天离开，有免费接送机' },
        drive: { from: '五指山', to: '海口', distance: '约220km', time: '约3.5小时（高速+山路）' },
        weather: { type: 'cloudy', temp: '30°C / 25°C', note: '返程天气多变，注意路面湿滑', icon: '⛅' },
        tips: '今天是返程日。五指山回海口走中线高速（海三高速），路况不错。牙胡梯田免费，6月稻田正绿，拍照绝美。',
      }),
      createDay(8, '6月16日', {
        location: '海口',
        region: '自由探索',
        spots: [
          { name: '冯小刚电影公社', type: '打卡', desc: '民国风情街，适合拍照', time: '2-3小时' },
          { name: '白沙门公园', type: '休闲', desc: '海口北部海边公园', time: '1-2小时' },
        ],
        foods: [
          { name: '老爸茶', desc: '离开前再体验一次海口慢生活' },
          { name: '各种热带水果', desc: '芒果、荔枝、龙眼、菠萝蜜' },
        ],
        stay: { area: '海口市区', reason: '最后一晚，选喜欢的区域' },
        drive: { from: '—', to: '—', distance: '市内', time: '—' },
        weather: { type: 'sunny', temp: '32°C / 27°C', note: '海口依旧炎热', icon: '☀️' },
        tips: '自由探索日，可以去之前没去的地方。买点海南特产：椰子糖、咖啡、胡椒。水果去南北水果市场买最便宜。',
      }),
      createDay(9, '6月17日', {
        location: '海口',
        region: '休闲收尾',
        spots: [
          { name: '万绿园', type: '休闲', desc: '海口最大城市公园，适合晨跑散步', time: '1-2小时' },
          { name: '海大南门夜市', type: '美食', desc: '学生价美食聚集地', time: '2小时' },
        ],
        foods: [
          { name: '糟粕醋火锅', desc: '走之前必须吃一顿正式的' },
          { name: '芒果肠粉', desc: '甜品界天花板' },
        ],
        stay: { area: '海口市区', reason: '最后一晚' },
        drive: { from: '—', to: '—', distance: '市内', time: '—' },
        weather: { type: 'sunny', temp: '33°C / 27°C', note: '最后一天注意休息', icon: '☀️' },
        tips: '整理行李，买伴手礼。海南特产推荐：春光椰子糖、兴隆咖啡、胡椒粒、黄灯笼辣椒酱。',
      }),
      createDay(10, '6月18日', {
        location: '海口 → 返程',
        region: '再见海南',
        spots: [],
        foods: [{ name: '机场最后一碗海南粉', desc: '带着海南味道回家' }],
        stay: { area: '—', reason: '回家啦' },
        drive: { from: '海口', to: '出发地', distance: '—', time: '返程日' },
        weather: { type: 'sunny', temp: '32°C / 27°C', note: '海南，下次见', icon: '👋' },
        tips: '海口美兰机场离市区约25分钟车程。机场内有免税店，可以最后逛逛。还车前记得加满油。',
      }),
    ],
  },

  B: {
    id: 'B',
    name: 'Plan B · 雨天备选',
    subtitle: '下雨不愁，室内+温泉+美食之旅',
    icon: '🌧️',
    color: '#6366f1',
    description: '专门为雨天设计，减少户外徒步和海滩时间，增加博物馆、美食探店、温泉体验和室内活动。同样的快乐，不同的玩法。',
    days: [
      createDay(1, '6月9日', {
        location: '海口',
        region: '海口市区（雨天版）',
        spots: [
          { name: '海南省博物馆', type: '室内', desc: '深度了解海南历史文化，雨天最佳', time: '3小时' },
          { name: '骑楼老街（有遮雨廊）', type: '文化', desc: '骑楼下不怕雨，慢慢逛', time: '2小时' },
          { name: '海口日月广场', type: '室内', desc: '大型商场+免税体验店', time: '2-3小时' },
        ],
        foods: [
          { name: '糟粕醋火锅', desc: '下雨天吃火锅，完美' },
          { name: '老爸茶', desc: '坐茶店看雨，海口人的日常' },
        ],
        stay: { area: '骑楼老街/国贸商圈', reason: '室内活动多，交通方便' },
        drive: { from: '出发地', to: '海口', distance: '—', time: '抵达日' },
        weather: { type: 'rain', temp: '29°C / 25°C', note: '雨天室内游，带折叠伞', icon: '🌧️' },
        tips: '雨天版海口一样精彩！博物馆免费，骑楼老街的骑楼就是天然雨棚。晚上去日月广场逛免税店。',
      }),
      createDay(2, '6月10日', {
        location: '海口',
        region: '火山口+温泉',
        spots: [
          { name: '雷琼火山公园', type: '自然', desc: '如果雨不大可以上，雨后空气超好', time: '2-3小时' },
          { name: '观澜湖温泉', type: '温泉', desc: '海口最大温泉度假区，下雨泡温泉一绝', time: '半天' },
        ],
        foods: [
          { name: '椰子鸡火锅', desc: '继续火锅路线' },
          { name: '海南粉', desc: '海口名小吃' },
        ],
        stay: { area: '观澜湖度假区', reason: '泡完温泉直接回房' },
        drive: { from: '海口', to: '观澜湖', distance: '约20km', time: '约30分钟' },
        weather: { type: 'rain', temp: '28°C / 24°C', note: '下雨天泡温泉，别有一番风味', icon: '🌧️' },
        tips: '观澜湖温泉有室内外池，下雨天室外人也少。火山公园雨后路滑，注意安全。',
      }),
      createDay(3, '6月11日', {
        location: '海口 → 琼海',
        region: '博鳌+潭门渔港',
        spots: [
          { name: '博鳌亚洲论坛', type: '打卡', desc: '大会址参观（室内）', time: '1.5小时' },
          { name: '潭门渔港', type: '美食', desc: '海南最大渔港，海鲜便宜新鲜', time: '2小时' },
          { name: '博鳌海的故事', type: '休闲', desc: '海边酒吧街，雨天也有味道', time: '1-2小时' },
        ],
        foods: [
          { name: '潭门海鲜', desc: '渔港直供，价格是三亚一半' },
          { name: '加积鸭', desc: '琼海特产，白切最佳' },
        ],
        stay: { area: '博鳌镇/琼海市区', reason: '博鳌住宿性价比高' },
        drive: { from: '海口', to: '琼海博鳌', distance: '约120km', time: '约1.5小时' },
        weather: { type: 'rain', temp: '29°C / 25°C', note: '沿海可能有风雨，开车注意', icon: '🌧️' },
        tips: '博鳌论坛会场室内参观不受雨影响。潭门渔港吃海鲜性价比极高。琼海住宿比海口万宁都便宜。',
      }),
      createDay(4, '6月12日', {
        location: '琼海 → 万宁',
        region: '万宁雨天慢游',
        spots: [
          { name: '兴隆热带植物园', type: '室内/半室外', desc: '有棚顶区，看热带植物', time: '2小时' },
          { name: '兴隆咖啡谷', type: '室内', desc: '品咖啡，了解咖啡制作', time: '1-2小时' },
          { name: '万宁首创奥特莱斯', type: '购物', desc: '雨天逛街好去处', time: '2-3小时' },
        ],
        foods: [
          { name: '兴隆咖啡+糕点', desc: '海南最佳下午茶' },
          { name: '万宁东山羊火锅', desc: '雨天吃羊肉火锅' },
        ],
        stay: { area: '兴隆/石梅湾', reason: '兴隆温泉酒店选择多' },
        drive: { from: '琼海', to: '万宁', distance: '约60km', time: '约50分钟' },
        weather: { type: 'rain', temp: '28°C / 24°C', note: '下雨天泡兴隆温泉', icon: '🌧️' },
        tips: '兴隆是华侨农场，咖啡文化浓厚。植物园内有很多棚顶，不是完全露天。奥特莱斯品牌折扣还不错。',
      }),
      createDay(5, '6月13日', {
        location: '万宁',
        region: '雨中海湾别样美',
        spots: [
          { name: '石梅湾（观景台）', type: '观景', desc: '雨天看海别有味道，风浪壮观', time: '1小时' },
          { name: '万宁日月湾冲浪博物馆', type: '室内', desc: '了解冲浪文化，有咖啡馆', time: '1-2小时' },
          { name: '石梅湾威斯汀大堂吧', type: '休闲', desc: '海景大堂喝下午茶', time: '2小时' },
        ],
        foods: [
          { name: '万宁后安粉', desc: '热汤粉，雨天暖身' },
          { name: '和乐蟹', desc: '海南四大名菜之一' },
        ],
        stay: { area: '石梅湾', reason: '海边酒店，雨天躺着看海' },
        drive: { from: '兴隆', to: '石梅湾', distance: '约15km', time: '约20分钟' },
        weather: { type: 'rain', temp: '28°C / 24°C', note: '雨中海景，不一样的美', icon: '🌧️' },
        tips: '不要因为下雨就不去海边！雨中海景非常壮观。威斯汀大堂对外开放，一杯咖啡坐一下午看海。',
      }),
      createDay(6, '6月14日', {
        location: '万宁 → 保亭',
        region: '温泉疗愈',
        spots: [
          { name: '七仙岭温泉', type: '温泉', desc: '海南最好的天然温泉之一', time: '半天' },
          { name: '槟榔谷黎苗文化区', type: '文化', desc: '有室内展馆', time: '2-3小时' },
        ],
        foods: [
          { name: '黎族簸箕餐', desc: '竹编簸箕上菜，仪式感满满' },
          { name: '山兰酒', desc: '黎族米酒，温润暖身' },
        ],
        stay: { area: '七仙岭温泉度假区', reason: '温泉入户的酒店很多' },
        drive: { from: '万宁', to: '保亭', distance: '约100km', time: '约1.5小时' },
        weather: { type: 'rain', temp: '27°C / 22°C', note: '山区雨天气温低，泡温泉正好', icon: '🌧️' },
        tips: '七仙岭温泉是海南最好的温泉，很多酒店房间直接引入温泉水。槟榔谷室内展馆了解黎苗文化。',
      }),
      createDay(7, '6月15日', {
        location: '保亭 → 五指山',
        region: '雨林雨季',
        spots: [
          { name: '五指山民族博物馆', type: '室内', desc: '了解黎族苗族文化', time: '2小时' },
          { name: '五指山雨林（短线）', type: '户外', desc: '如果雨停，走短线路', time: '2小时' },
        ],
        foods: [
          { name: '五指山小黄牛', desc: '本地特色牛肉' },
          { name: '树仔菜', desc: '五指山特有野菜' },
        ],
        stay: { area: '五指山市区', reason: '设施齐全' },
        drive: { from: '保亭', to: '五指山', distance: '约80km', time: '约1.5小时' },
        weather: { type: 'rain', temp: '26°C / 21°C', note: '山区持续下雨，注意安全', icon: '🌧️' },
        tips: '如果雨太大，五指山漂流会关闭，但雨林短线还是可以走。民族博物馆值得一看。',
      }),
      createDay(8, '6月16日', {
        location: '五指山 → 海口',
        region: '返程+购物',
        spots: [
          { name: '海口观澜湖新城', type: '购物', desc: '大型商业体，室内活动', time: '3小时' },
          { name: '海口南北水果市场', type: '购物', desc: '买热带水果带回家', time: '1-2小时' },
        ],
        foods: [
          { name: '椰子鸡', desc: '再吃一顿' },
          { name: '芒果肠粉', desc: '甜品收尾' },
        ],
        stay: { area: '海口市区', reason: '回来休整' },
        drive: { from: '五指山', to: '海口', distance: '约220km', time: '约3.5小时' },
        weather: { type: 'cloudy', temp: '29°C / 25°C', note: '天气好转中', icon: '⛅' },
        tips: '返程日主要是开车+购物。南北水果市场是海口最大水果批发市场，价格实惠可邮寄。',
      }),
      createDay(9, '6月17日', {
        location: '海口',
        region: '收尾自由日',
        spots: [
          { name: '云洞图书馆', type: '室内', desc: '如果之前没去，补上', time: '2小时' },
          { name: '冯小刚电影公社', type: '室内/半室外', desc: '民国风情街', time: '2-3小时' },
        ],
        foods: [
          { name: '糟粕醋海鲜火锅', desc: '最后的大餐' },
          { name: '各种小吃', desc: '南门夜市扫荡' },
        ],
        stay: { area: '海口市区', reason: '最后一晚' },
        drive: { from: '—', to: '—', distance: '市内', time: '—' },
        weather: { type: 'cloudy', temp: '30°C / 26°C', note: '天气转好', icon: '⛅' },
        tips: '补上之前因为下雨错过的地方。买伴手礼，打包水果。晚上一定要去南门夜市。',
      }),
      createDay(10, '6月18日', {
        location: '海口 → 返程',
        region: '再见海南',
        spots: [],
        foods: [{ name: '最后一顿清补凉', desc: '带着甜蜜回家' }],
        stay: { area: '—', reason: '回家' },
        drive: { from: '海口', to: '出发地', distance: '—', time: '返程日' },
        weather: { type: 'sunny', temp: '31°C / 26°C', note: '走的时候天晴了，下次再来', icon: '☀️' },
        tips: '离开前去机场免税店逛逛。留一点遗憾，下次才有理由再来海南。',
      }),
    ],
  },

  C: {
    id: 'C',
    name: 'Plan C · 加三亚',
    subtitle: '时间充裕，拿下三亚经典',
    icon: '🏖️',
    color: '#f59e0b',
    description: '在Plan A基础上延伸三亚，增加2-3天三亚行程。适合时间充裕、想一次性玩遍海南的朋友。蜈支洲岛、海棠湾免税店都安排上。',
    days: [
      // Days 1-5 same as Plan A (海口+万宁)
      //...plans.A.days.slice(0, 5),
      createDay(6, '6月14日', {
        location: '五指山 → 三亚',
        region: '南下三亚',
        spots: [
          { name: '五指山雨林（上午）', type: '徒步', desc: '半天速览五指山', time: '3小时' },
          { name: '海棠湾（傍晚）', type: '海滩', desc: '三亚最清净的海湾', time: '傍晚' },
        ],
        foods: [
          { name: '五指山竹筒饭（午餐）', desc: '上山前吃饱' },
          { name: '三亚海鲜（晚餐）', desc: '第一市场/春园海鲜广场' },
        ],
        stay: { area: '海棠湾/亚龙湾', reason: '高端度假酒店聚集' },
        drive: { from: '五指山', to: '三亚海棠湾', distance: '约120km', time: '约2小时（山路+高速）' },
        weather: { type: 'sunny', temp: '31°C / 26°C', note: '三亚比五指山热很多', icon: '☀️' },
        tips: '上午速刷五指山，下午开往三亚。海棠湾酒店性价比比亚龙湾高。晚上去第一市场吃海鲜注意砍价。',
      }),
      createDay(7, '6月15日', {
        location: '三亚',
        region: '蜈支洲岛',
        spots: [
          { name: '蜈支洲岛', type: '海岛', desc: '中国马尔代夫，潜水圣地', time: '全天' },
        ],
        foods: [
          { name: '岛上自助餐', desc: '蜈支洲岛珊瑚酒店自助' },
          { name: '三亚椰子饭', desc: '晚上回市区吃' },
        ],
        stay: { area: '海棠湾/亚龙湾', reason: '连住2晚' },
        drive: { from: '海棠湾', to: '蜈支洲岛码头', distance: '约15km', time: '约20分钟' },
        weather: { type: 'sunny', temp: '32°C / 27°C', note: '海岛暴晒，防晒霜涂满', icon: '☀️' },
        tips: '蜈支洲岛门票+船票约150元，潜水约400-800元。早点去，下午4点末班船。岛上物价贵，自带零食和水。',
      }),
      createDay(8, '6月16日', {
        location: '三亚',
        region: '免税店+亚龙湾',
        spots: [
          { name: '海棠湾免税店', type: '购物', desc: '全球最大单体免税店', time: '3-4小时' },
          { name: '亚龙湾', type: '海滩', desc: '天下第一湾，沙质最好', time: '2小时' },
          { name: '亚龙湾热带天堂', type: '自然', desc: '《非诚勿扰2》网红吊桥', time: '2-3小时' },
        ],
        foods: [
          { name: '三亚抱罗粉', desc: '三亚特色米粉' },
          { name: '海鲜加工', desc: '第一市场买海鲜旁边加工' },
        ],
        stay: { area: '三亚湾/大东海', reason: '离市区近，方便吃喝' },
        drive: { from: '海棠湾', to: '亚龙湾', distance: '约30km', time: '约30分钟' },
        weather: { type: 'sunny', temp: '32°C / 27°C', note: '三亚比海口热2-3度', icon: '☀️' },
        tips: '免税店购物需要离岛机票/船票。每人每年10万额度。亚龙湾沙质确实好，但人也多。',
      }),
      createDay(9, '6月17日', {
        location: '三亚 → 海口',
        region: '东线高速返程',
        spots: [
          { name: '陵水清水湾', type: '海滩', desc: '会唱歌的沙滩，人少景美', time: '1-2小时' },
          { name: '分界洲岛（可选）', type: '海岛', desc: '如果蜈支洲没玩够', time: '半天' },
        ],
        foods: [
          { name: '陵水酸粉', desc: '路过陵水必吃' },
          { name: '万宁后安粉', desc: '路过万宁再吃一碗' },
        ],
        stay: { area: '海口美兰机场附近', reason: '方便第二天离开' },
        drive: { from: '三亚', to: '海口', distance: '约300km', time: '约3.5小时（高速）' },
        weather: { type: 'sunny', temp: '31°C / 26°C', note: '东线高速一路海景', icon: '☀️' },
        tips: '三亚到海口走东线高速，一路沿海。陵水清水湾值得停一下，沙质不输亚龙湾但人少很多。',
      }),
      createDay(10, '6月18日', {
        location: '海口 → 返程',
        region: '再见海南',
        spots: [],
        foods: [{ name: '最后一碗海南粉', desc: '带着海南味道回家' }],
        stay: { area: '—', reason: '回家啦' },
        drive: { from: '海口', to: '出发地', distance: '—', time: '返程日' },
        weather: { type: 'sunny', temp: '32°C / 27°C', note: '海南，下次见', icon: '👋' },
        tips: '行程结束！三亚加了3天，总共玩了海南东线+中线+三亚，非常完整。记得在免税店提前下单机场提货。',
      }),
    ],
  },
};

// 城市路线坐标（用于地图展示）
export const routeCoordinates = {
  haikou: { lat: 20.02, lng: 110.35, name: '海口', label: '起点' },
  wenchang: { lat: 19.62, lng: 110.75, name: '文昌', label: '途经' },
  qionghai: { lat: 19.25, lng: 110.46, name: '琼海', label: '途经' },
  wanning: { lat: 18.80, lng: 110.39, name: '万宁', label: '核心站' },
  wuzhishan: { lat: 18.78, lng: 109.52, name: '五指山', label: '核心站' },
  sanya: { lat: 18.25, lng: 109.50, name: '三亚', label: '可选' },
};

export const routeLines = {
  A: ['haikou', 'wenchang', 'qionghai', 'wanning', 'wuzhishan', 'haikou'],
  B: ['haikou', 'qionghai', 'wanning', 'wuzhishan', 'haikou'],
  C: ['haikou', 'wenchang', 'qionghai', 'wanning', 'wuzhishan', 'sanya', 'haikou'],
};
