# AI Comic 研究归档

这里完整保留原 Darcy-Jin/ai-comic 仓库在 2026-09-25 合并前的 5 份研究文档。

这些文件负责：

> **保留当时为什么会形成 AI Comic 方向。**

当前正式运行不要从这些文件重新拼答案。

现在的入口是：

- [Content 总入口](../../content/README.md)
- [AI Comic](../../content/ai-comic/README.md)
- [AI 漫画内容模型](../../content/ai-comic/content-model.md)
- [人物模型](../../models/person-model.md)

原始研究文件：

1. [01-project-direction.md](01-project-direction.md)
2. [02-content-research-framework.md](02-content-research-framework.md)
3. [03-ai-comic-research-round-1.md](03-ai-comic-research-round-1.md)
4. [04-ai-comic-research-complete-plan.md](04-ai-comic-research-complete-plan.md)
5. [05-research-final-model.md](05-research-final-model.md)

> 状态：Historical / Reference。  
> 后续不在这里维护新的正式人物知识或内容规则。


---

## 2026-09-26｜当前内容空间研究

原 5 份文件继续是历史研究。

当前新一轮内容规划研究单独保存在：

- [12｜人物 / 标签 / 特点内容空间研究](12-person-label-feature-space-research.md)
- `person-label-space/`
  - Source Registry
  - Raw Corpus
  - Raw → View Mapping
  - Canonical Feature Registry
  - Coverage / Conflict
- `scene-space/`
  - Source Registry
  - Raw Corpus
  - Raw → View Mapping
  - Canonical Scene Registry
  - Coverage / Conflict
- `need-fit-space/`
  - Source Registry
  - Raw Corpus
  - Raw → View Mapping
  - Canonical Need/Fit Registry
  - Coverage / Conflict
- [Combination Space v0.1](combination-space-v0.1.md)
- `candidate-combinations-v0.1.csv`：第一轮组合，保留失败证据
- `candidate-combinations-v0.2.csv`：修正语义 / 时间约束后的候选池
- `topic-priority-audit-v0.1.csv`：30 个 Priority Candidate 的审计记录

这轮研究的正式晋升结果：

- [AI 漫画内容地图 v0.2](../../content/ai-comic/content-map-v0.2.md)
- [Priority Set v0.1](../../content/ai-comic/topic-priority-set-v0.1.md)

当前状态：

> **研究模型已晋升到 AI Comic 内容规划层，等待用 3～5 个真实 Content Brief / Episode Script 做生产验证。**

Raw Corpus 与研究过程继续留在 Research，不复制到正式内容入口。
