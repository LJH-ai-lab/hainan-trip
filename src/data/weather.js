// 天气数据与提醒模块

export const weatherAlerts = [
  {
    id: 'w1',
    type: 'warning',
    icon: '🌡️',
    title: '高温预警',
    message: '6月海南白天温度32-35°C，体感温度可达38°C+。紫外线指数极高（11+），请做好防晒准备。',
    tips: [
      '防晒霜SPF50+，每2小时补涂一次',
      '帽子+墨镜+防晒衣三件套',
      '每天至少喝2L水，车里备足矿泉水',
      '尽量避开12:00-15:00户外活动',
      '车内不要放打火机、碳酸饮料',
    ],
    severity: 'high',
  },
  {
    id: 'w2',
    type: 'info',
    icon: '🏖️',
    title: '海边暴晒提醒',
    message: '海边紫外线是城市2-3倍，海风会让你感觉不到热但晒伤正在进行。万宁冲浪和三亚海滩尤其注意。',
    tips: [
      '防水防晒霜是必需品（下水后也要补涂）',
      '穿长袖冲浪衣/防晒衣下水',
      '晒后修复芦荟胶随身带',
      '沙滩伞/天幕很有用',
      '上午10点前和下午4点后的阳光最安全',
    ],
    severity: 'high',
  },
  {
    id: 'w3',
    type: 'rain',
    icon: '🌧️',
    title: '下雨应对方案',
    message: '6月是海南雨季开始，午后阵雨频繁（通常1-2小时就停）。山区（五指山）降雨概率更高。',
    tips: [
      '随时查看天气app的降水雷达图',
      '切换到Plan B（雨天备选方案）',
      '车里备折叠伞和防水鞋套',
      '雨后空气超好，适合拍照',
      '五指山漂流暴雨后会关闭，提前电话确认',
      '雨后山路注意落石和湿滑',
    ],
    severity: 'medium',
  },
  {
    id: 'w4',
    type: 'info',
    icon: '🏔️',
    title: '五指山天气提示',
    message: '五指山海拔较高（1867m），山区温度比海边低5-8°C。天气变化快，一天可能经历晴、雾、雨。',
    tips: [
      '带一件薄外套或防晒衣（山区早晚凉）',
      '穿防滑运动鞋，雨林步道湿滑',
      '雨衣比雨伞实用（户外活动方便）',
      '雾天能见度低，开车减速',
      '山上手机信号可能不好，提前下载离线地图',
    ],
    severity: 'medium',
  },
  {
    id: 'w5',
    type: 'info',
    icon: '🌊',
    title: '台风季前提醒',
    message: '6月开始进入台风季前期。虽然台风高发是7-9月，但6月下旬也有概率。关注天气预报。',
    tips: [
      '出发前一周关注热带气旋预报',
      '如果台风预警，调整行程——山区和海边最危险',
      '台风天不要下海！浪大很危险',
      '下载「海南气象」公众号或app',
      '应急电话：110/120/12345（海南政务服务热线）',
    ],
    severity: 'low',
  },
  {
    id: 'w6',
    type: 'info',
    icon: '🚗',
    title: '自驾天气安全',
    message: '海南6月天气对自驾的影响：强日照导致车内高温，午后暴雨导致路面湿滑，山区有雾。',
    tips: [
      '前挡风玻璃备遮阳板（停车时车内可达60°C+）',
      '雨刮器和轮胎出发前检查好',
      '山区下雨减速，弯道鸣笛',
      '雷雨天不要在高地或大树下停车',
      '保持油箱充足——山区加油站间隔远',
    ],
    severity: 'medium',
  },
];

// 模拟天气数据（实际项目可接入天气API）
export const mockWeather = {
  haikou: { temp: 32, humidity: 75, condition: '晴', icon: '☀️', rainChance: '10%' },
  wanning: { temp: 30, humidity: 78, condition: '多云', icon: '⛅', rainChance: '30%' },
  wuzhishan: { temp: 26, humidity: 85, condition: '阵雨', icon: '🌧️', rainChance: '60%' },
  sanya: { temp: 31, humidity: 72, condition: '晴', icon: '☀️', rainChance: '15%' },
  qionghai: { temp: 30, humidity: 77, condition: '多云', icon: '⛅', rainChance: '25%' },
  wenchang: { temp: 31, humidity: 74, condition: '晴', icon: '☀️', rainChance: '15%' },
};

// 天气应对决策树
export const weatherDecision = {
  sunny: { plan: 'A', message: '天气不错！Plan A走起，享受海滩和户外吧', color: '#f59e0b' },
  cloudy: { plan: 'A', message: '多云适合出行，Plan A没问题', color: '#0ea5e9' },
  lightRain: { plan: 'B', message: '下小雨了，考虑切换到Plan B', color: '#6366f1' },
  heavyRain: { plan: 'B', message: '雨不小，强烈建议Plan B', color: '#6366f1' },
  storm: { plan: 'B', message: '暴风雨预警！室内活动为主，注意安全', color: '#ef4444' },
};
