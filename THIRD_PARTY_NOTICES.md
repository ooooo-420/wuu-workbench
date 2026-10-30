# Provenance and integration
本仓库三个 skill 与配套脚本由 wuu 需求驱动、AI 辅助重新实现。以下开源项目用于方法与实现比较，未整包复制、未执行安装脚本、未将其源码改名为原创。其许可证信息保留在这里供核对；若未来复制源码，须另行保留对应版权与许可证全文。
- [SankaiAI/ats-optimized-resume-agent-skill](https://github.com/SankaiAI/ats-optimized-resume-agent-skill/tree/153209b510e6ca168ab50a6b0d4f19e380979d73)（MIT）：阅读 Python validation/rendering 实现。采用内容/渲染分离与错误/提醒区分，重新实现文本校验；不照搬禁止 assisted/supported 的规则。
- [ARPeeketi/claude-resume-kit](https://github.com/ARPeeketi/claude-resume-kit/tree/69930e9de21d5595f9b8c9427adc9c51a9fcbc0e)（MIT）：阅读 critique 与 critical_rules。采用多阅读视角，不采纳面试概率、固定字数及 LaTeX 专属约束。
- [jackwener/llm-wiki](https://github.com/jackwener/llm-wiki/tree/cd5466678341885fa29ca9e27fa9604c2e9c11c5)（Apache-2.0）：阅读 ingest/lint 工作流。采用不可变来源、冲突并存、日志与分层维护，不要求安装其 CLI。
- [LoreJob/screener](https://github.com/LoreJob/screener/tree/2da1e9828aa5f41a8dd2bdb29c14b406f4d229cb)（MIT）：阅读 finance-banking。参考领域关注点，不采纳无 JD 支持的学校/机构声誉否决或模型硬门槛。
- [Karpathy LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)：架构启发，未复制原文全文。
以上不是招聘效果背书。私有知识库、本人简历、公司材料与模型凭据不在公开仓库。
