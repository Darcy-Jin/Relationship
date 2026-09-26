# Single-person Character Style｜Darcy A real execution v1

> Date: 2026-09-26  
> Status: Blocked at Provider  
> Experiment: `single-person-character-style-experiment-v1`

## Goal

Run the first valid single-person Character Style candidate:

~~~text
Darcy
DARCY-SRC-005
→ Exact Controlled Edit
→ Style A
~~~

Style A:

> Identity-safe 轻手绘都市漫画

## Preflight

~~~text
DARCY-SRC-005
→ canonical_ready

Asset Resolver
→ READY

Executable Asset Handle
→ available

Exact Target Binding Runtime
→ ready

Expected Output
→ single
~~~

## Actual execution

The request was routed through the controlled Visual Identity Runtime:

~~~text
DARCY-SRC-005
↓
Supabase private Storage
↓
visual-identity-edit
↓
POST /v1/images/edits
↓
OpenAI Image API
~~~

The request reached OpenAI and returned:

~~~text
HTTP 429
code = credit_balance_exhausted
type = insufficient_quota
~~~

OpenAI request id:

> `req_73c91ada69294f8596c3ee48f6b71ac4`

No image candidate was produced.

## Interpretation

This run proves that the former blocker is closed:

> **Exact Asset Binding is no longer the problem.**

The current blocker is only:

> **Provider billing / credits.**

Do not change:

- Identity Profile;
- Asset Resolver;
- Style A definition;
- Exact target asset;
- Runtime routing.

Do not fall back to free generation.

## Next

~~~text
Provider ready
↓
retry Darcy Style A from DARCY-SRC-005
↓
Identity + Control Variable Gate
↓
then B / C
~~~
