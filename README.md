# wuu Workbench

吴桓的个人工具与职业证据方法。由本人提出需求、设计使用规则，与AI协作实现并持续迭代。

## 两个工作台

| 项目 | 公开展示 | 项目说明与演示代码 |
| --- | --- | --- |
| 简历工作台 | [打开展示页](https://wuu-resume-workbench-showcase.peachy-horse-6031.chatgpt.site) | [查看项目](projects/resume/) |
| 个人工作台 | [打开展示页](https://wuu-personal-workbench-showcase.peachy-horse-6031.chatgpt.site) | [查看项目](projects/personal/) |

展示页免登录，仅提供合成交互示意，不连接私人工作台，不是完整产品的公开服务。

## 我们的技能

- **[jd-resume-local](skills/jd-resume-local/SKILL.md)** · 岗位定制简历：拆解JD，将真实经历组织为有来源的中英文简历。
- **[career-wiki-curator](skills/career-wiki-curator/SKILL.md)** · 职业作品知识库：从作品保留具体动作、方法、交付物和责任边界。
- **[resume-evidence-audit](skills/resume-evidence-audit/SKILL.md)** · 简历证据审查：检查引用、金融岗位责任边界、文本结构与表述。

主写作技能根据既有JD定制方法与个人使用要求重新设计；Wiki与审稿技能为配套原创整合。保留外部方法出处，不宣称所有底层思想均首次提出。

### 导入方法

下载仓库ZIP，将 skills 下三个完整目录复制到支持 SKILL.md 的宿主技能目录；例如 ~/.agents/skills/。首次使用配置自己的资料与事实，不把合成示例或作者经历当作自己的经历。详细来源见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

原技能仓库：[wuu-career-skills](https://github.com/ooooo-420/wuu-career-skills)。

## 公开范围

公开：展示页代码、项目设计说明、通用skill及合成示例。
不公开：实际简历、联系方式、照片、个人Wiki、实习报告、日程、账户凭据、本机路径及私有服务配置。

## 本地查看

直接打开 projects/resume/index.html 或 projects/personal/index.html；均无需安装依赖。展示页中的交互只操作当前页面的合成内容，不调用模型。
