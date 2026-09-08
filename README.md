# Punk Skill

面向 OpenAI Codex 的视觉提示词 Skills。本仓库 fork 自 [adrianpunk/Punk-Skill](https://github.com/adrianpunk/Punk-Skill)，并将各 Skill 重构为可独立安装、资源自包含的目录。

## 安装

把下面这段话发给 OpenAI Codex：

```text
请安装这个仓库里的全部 Skills：https://github.com/HenryQW/Punk-Skill
```

安装后可直接调用：

```text
Use $punk-cover ...
Use $punk-avatar ...
```

也可以单独复制或安装任一 `skills/{skill-id}/` 目录；运行所需的风格、参考文件和验证脚本均包含在目录内。

## Skills

### `punk-cover`

把文章、笔记、推文或主题草稿整理为适配目标平台和选定风格的封面图提示词。

```text
Use $punk-cover to create a WeChat cover prompt in 商业杂志头版 style:

这里粘贴文章内容
```

支持小红书、微信公众号、X / Twitter、Open Graph（`2400 × 1260`）和自定义比例。完整风格列表见 [`skills/punk-cover/references/style-catalog.md`](./skills/punk-cover/references/style-catalog.md)。

### `punk-avatar`

把人物、宠物、物品照片或文字描述整理为头像及衍生视觉提示词。

```text
Use $punk-avatar to create a 像素头像 prompt from this photo.
```

支持头像、宠物肖像、纪念卡和纸艺场景。完整风格列表见 [`skills/punk-avatar/references/style-catalog.md`](./skills/punk-avatar/references/style-catalog.md)。

## 输出

Skills 只生成提示词文本，不调用图像生成工具，也不生成、下载或保存图片。最终提示词会完整内嵌所选风格的具体视觉规则，不引用风格名称、Style ID 或资源路径。提示词默认保存在本地 `.context/`：

```text
.context/
├── {slug}/{style-id}.md
└── {slug}/{style-id}.md
```

多尺寸封面提示词使用 `cover-{ratio-or-size}.md`。

## 致谢与许可

本项目基于 [adrianpunk/Punk-Skill](https://github.com/adrianpunk/Punk-Skill) 。

本仓库采用 [MIT License](./LICENSE)；另有明确授权或声明的第三方素材除外。
