# Repository Guidelines

## 项目结构与模块组织

本仓库用于维护可复用的 Codex 视觉提示词 Skills。核心技能位于 `skills/punk-cover/` 和 `skills/punk-avatar/`，每个技能都包含自己的完整运行资源。

- `README.md`：说明安装方式、使用示例和提示词输出约定。
- `skills/{skill-id}/SKILL.md`：技能的主要行为规范和工作流，是最重要的修改入口。
- `skills/{skill-id}/agents/openai.yaml`：面向 Agent 的配置文件。
- `skills/{skill-id}/references/`：风格目录和最终提示词组装骨架。
- `skills/{skill-id}/styles/{style-id}/META.md`：风格元数据、适用范围和推荐依据。
- `skills/{skill-id}/styles/{style-id}/STYLE.md`：可复用视觉风格正文。
- `skills/{skill-id}/scripts/`：该技能的轻量验证脚本。
- `screenshots/`：风格示例图。
- 运行时生成的 `punk-assets/` 仅包含提示词文本，属于本地产物，不应作为核心源码维护。

## 构建、测试与开发命令

本仓库没有包管理器、构建步骤或自动化测试命令。修改后建议用轻量检查确认结构和格式：

```sh
rg --files
node skills/punk-cover/scripts/validate-punk-cover.mjs
node skills/punk-avatar/scripts/validate-punk-avatar.mjs
git diff --check
```

使用 `rg` 检查风格名称、Style ID、`META.md` / `STYLE.md` 路径和 README 引用是否保持一致。

## 编码风格与命名约定

Markdown 内容应简洁、直接、可执行。行为规则优先使用清晰标题和短列表表达。已有中文用户文案应保持中文，除非本次修改明确调整产品表达。

风格目录使用小写 kebab-case，例如 `skills/punk-cover/styles/business-magazine-front-page/`。技能目录同样使用小写加连字符，例如 `skills/punk-cover/`。YAML 文件使用两个空格缩进。

## 测试指南

当前以人工验证为主。修改技能行为后，至少用两类输入做 dry run：一类只提供文章内容，另一类同时指定平台和风格。重点确认：

- 缺少平台或风格时，会停在确认步骤；
- 最终提示词只填充一个选定模板，并内嵌其具体视觉规则，不引用风格名称、Style ID 或资源路径；
- 长文章会被摘要化，不会原样写入元数据；
- 只保存并返回提示词文本，不调用图像生成工具或保存图片；
- 输出路径遵循 `punk-assets/punk-cover/{slug}/prompts/...`。

新增风格时，需要同步更新对应技能内的 `styles/{style-id}/META.md`、`styles/{style-id}/STYLE.md`、风格目录、`references/style-catalog.md` 和验证脚本中的风格数量。

## Commit 与 Pull Request 规范

近期提交信息使用简短中文摘要，例如 `新增 Punk 封面生成技能`、`完善技能仓库说明文档`。提交应聚焦单一逻辑变更，信息保持简洁、可读。

PR 应包含变更目的、涉及路径、已完成的人工验证。若修改 README 图片表或风格示例，需要附截图或说明视觉变化。若调整 `SKILL.md` 的确认流程、输出规则或模板填充规则，应在 PR 描述中明确标注。
