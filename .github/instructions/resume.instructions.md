---
applyTo: "resumes/*.yaml"
description: "How to author per-company/per-role resume override YAML files."
---

# Authoring resume overrides

This repo renders a single resume from YAML data via [app.js](../../app.js). The base data lives in [resume.yaml](../../resume.yaml). Files in [resumes/](../../resumes/) are per-route **overrides** merged on top of the base at runtime.

## How overrides are loaded

- The URL hash `#/<slug>` fetches `resumes/<slug>.yaml` and deep-merges it onto `resume.yaml`.
- `<slug>` must match `[A-Za-z0-9_-]+`. The filename (minus `.yaml`) **is** the slug.
- If the file is missing, the base resume renders and a toast warns the user — never assume the override loaded; check the slug.
- See `getOverrideName`, `loadResume`, `mergeTree` in [app.js](../../app.js) for the exact behavior.

## Merge semantics (critical)

Implemented by `mergeTree` / `mergeGeneric` / `mergeCollection`:

- **Plain objects** deep-merge recursively.
- **Arrays and scalars** in the override **replace** the base value wholesale.
- **`null` in the override means "keep base"** — omit a field to inherit; do not set it to `null` intending to clear it.
- **Collections** (see schema below) merge by `key`:
  - `ordering`, `enabled`, `disabled` in the override **replace** the base versions when present.
  - Elements present in both deep-merge by `key`. New keys are appended.
  - Visibility per element: shown iff `enabled.has(key) || !disabled.has(key)`.

## Collection sites

Declared in `COLLECTION_SCHEMA` in [app.js](../../app.js). Each is shaped as:

```yaml
some_collection:
  ordering: [k1, k2]   # optional — explicit display order
  enabled:  [k3]       # optional — wins ties against disabled
  disabled: [k2]       # optional — hide by key
  elements:
    - key: k1
      ...
```

Collection sites and their default key source:

| Site                                | Key from   |
| ----------------------------------- | ---------- |
| `experience`                        | `company`  |
| `experience[].positions`            | `title`    |
| `experience[].positions[].projects` | `name`     |
| `projects`                          | `name`     |
| `education`                         | `degree`   |
| `achievements`                      | `title`    |
| `skills`                            | `category` |

Always include an explicit `key:` on elements — it must match the slugified base key exactly to merge (e.g. `Sr. Software Engineer` → `sr-software-engineer`). When in doubt, copy the `key:` from the base.

## Idioms

**Hide a few items without restating the list** — use `disabled:` with an empty `elements: []`:

```yaml
projects:
  elements: []
  disabled:
    - crypton
    - intent-aware-lookahead-for-language-modeling
```

**Replace a section wholesale** — list every element you want shown under `elements:` (arrays replace):

```yaml
skills:
  elements:
    - key: machine-learning
      category: "Machine Learning"
      items: [...]
  disabled:
    - ai-ml-robotics-and-experimentation # hide leftover base categories
    - programming-languages
```

When replacing wholesale, also `disabled:` any base keys you didn't restate — otherwise they remain visible via the merge.

**Reorder sections** with `order_by`:

```yaml
order_by:
  - projects
  - experience
  - education
  - achievements
  - skills
```

**Light-touch tailoring** (the most common override): change only `mission_statement`, `skills_highlight`, and `projects_config.title`. Note: `personal.title` is **not rendered** by the current app.js — the renderer uses only `personal.name`, `.location`, `.email`, `.phone`, and `.social`. Setting `personal.title` in an override has no visible effect and should be omitted. Leave `experience` and project descriptions alone unless the JD requires reframing. See [resumes/shield-ai.yaml](../../resumes/shield-ai.yaml) and [resumes/google.yaml](../../resumes/google.yaml) for minimal examples.

**Deep reframing** (project descriptions, experience trimming): see [resumes/rtx-ai-ml-algos.yaml](../../resumes/rtx-ai-ml-algos.yaml) and [resumes/capital-one.yaml](../../resumes/capital-one.yaml).

## Creating an override from a job description

When asked to "create a resume override" (or "target this JD") with a job description attached, follow this workflow in order. Do not skip to writing YAML until step 3 is complete.

### Step 1 — Extract every JD requirement

Read the full JD. List every discrete requirement, responsibility, and preference, grouped by section (e.g., Responsibilities: ML & Data Science / Generative AI / MLOps / Real-Time; Qualifications: required / nice-to-have). Do this internally before opening any resume file.

### Step 2 — Audit each requirement against `resume.yaml`

For each JD item, search `resume.yaml` for matching evidence. Record:

- **Source** (company, project, or education entry) and the **exact line(s)** that back the claim.
- Whether the evidence is **production**, **research/academic**, or **personal project** — because these must be labeled honestly in the final text (see quality bar below).
- **Recency** — flag any source that ended before 2020. Pre-2020 experience may appear as supporting or historical context but must not be the primary or leading claim for any bullet. The candidate cannot be expected to defend pre-2020 technical details in a live interview beyond what is written on the resume.
- **Depth and defensibility** — check for `# DEPTH WARNING:` comments on any project or experience entry in `resume.yaml`. These flag sources where the candidate's engagement was shallow (e.g., short-term, exploratory, vibe-coded, or never production). Such sources may be used as supporting evidence only, never as headline claims. If a source carries a depth warning and is the _only_ evidence for a JD requirement, either omit the bullet or frame it explicitly as personal/exploratory work so the candidate isn't put in the position of defending implementation details they don't fully own.
- **Minimal projects** — entries with `minimal: true` in `resume.yaml` are lightweight coursework items (homework, short assignments). They may appear as secondary supporting context only (e.g., "…also applied in coursework"), never as the primary or leading evidence for a `qualifications` bullet. If a minimal project is the _only_ evidence for a JD requirement, treat that requirement as unbacked and omit the bullet.
- Whether the JD item has **no backing** — these are omitted from `qualifications`, never fabricated.

Do not assert anything in the override that is not found verbatim or by direct logical inference in `resume.yaml`. When in doubt, omit.

**Annotating weak sources in `resume.yaml`:** When a project or experience entry has known defensibility limitations (short duration, exploratory/vibe-coded, never production, or too old to recall in depth), add a `# DEPTH WARNING:` comment immediately before the entry's `- key:` line. Include: duration, nature of work, what the candidate can and cannot defend, and the instruction "Do NOT over-index on this in qualifications." Example:

```yaml
# DEPTH WARNING: ~1-month personal side project; exploratory / vibe-coded; never production.
# Demonstrates X concept on paper but shallow implementation depth.
# Do NOT over-index in qualifications — use as supporting evidence only.
- key: some-project
```

### Step 3 — Map JD items to `qualifications` bullets

Each `qualifications` bullet must:

1. **Map to one or more specific JD requirements** (stated in a `# JD:` comment above the bullet).
2. **Cite its source** in a `# Source:` comment that names the company/project and, where possible, quotes the exact base resume text. If the claim is from multiple sources, list each.
3. **Omit** any JD item with no backing — record why with a `# NOTE: not claimed — not present in base resume` comment so the omission is explicit and auditable.

```yaml
qualifications:
  items:
    # JD: Build and maintain LLM-powered features and services
    # JD: Integrate LLMs with APIs and internal tools using structured function calling
    # Source: Crypton (personal project) — "12-tool composable registry...uniform invocation surface"
    #         (resume.yaml, exact text); REST + WebSocket API integration
    - "LLM-powered features and function calling: ..."

    # JD: Develop RAG pipelines using embeddings and vector databases
    # NOTE: not claimed — no RAG, embeddings, or vector DB work present in base resume
```

### Step 4 — Write the remaining override fields

With the audit complete, write `mission_statement`, `skills_highlight`, `projects_config.title`, and any project/experience reframes. Do not set `personal.title` — it is not rendered by app.js. Apply the quality bar below.

**Set `expanded` and `projects_expanded` on experience entries.** These are two independent flags with different scope:

- `expanded: true` — shows the role's **position highlights** (the bullet points under the position). Controls whether the candidate's written highlights for that job are visible.
- `projects_expanded: true` — shows the role's **sub-projects list** (the individual named deliverables nested under the position). Independent of `expanded`; a role can have expanded highlights but collapsed projects, or vice versa.

As part of every override, explicitly set both flags for any role where the base value doesn't match what this JD needs. Leave all other entries at their base value by omitting them. Add a brief inline comment for each decision. Example:

```yaml
experience:
  elements:
    - key: independent-consultant
      expanded: false # ERP work — not relevant to this DS role
    - key: zeal-it-consultants
      expanded: true # event-driven ETL + real-time monitoring — directly relevant
      projects_expanded: true # individual client projects (McKesson, Alight) add supporting detail
    - key: clean-harbors-inc
      expanded: false # pre-2020, recency rule; omit highlights
    # hks-inc, cisco-systems-inc, etc. — already collapsed in base, no change needed
```

Recency rule applies here too: prefer expanding roles from 2020 or later. Expanding a pre-2020 role is acceptable only when its highlights are uniquely relevant to the JD **and** the candidate can defend the details in an interview.

### Step 5 — Self-check before finalizing

Before finishing, re-read every `qualifications` bullet and ask:

- Can I point to a specific line in `resume.yaml` for every factual claim in this sentence?
- Does the framing match the depth of the underlying evidence (production vs. research vs. personal project)?
- Have I used any interpretive gloss that goes beyond what the base actually says? If yes, revert to the exact base text or remove the claim.

**Redundancy pass** — after the defensibility check, make a dedicated pass across the full `qualifications` block looking for cross-bullet overlap:

1. **Read the label of every bullet.** If two labels name the same concept (e.g., both mention "agentic" or "function calling"), one of them is redundant.
2. **Scan for repeated nouns and project references.** If the same project (e.g., Crypton, sim-to-real) appears as a primary example in more than one bullet, ask whether the evidence truly serves two distinct JD requirements or whether the bullets are duplicating each other.
3. **Check paragraph-level reuse.** If a bullet contains a phrase that is a summary of the bullet that immediately follows it, strip the summary and let the dedicated bullet carry the full claim.
4. **Merge or delete, don't just trim.** If two bullets cover overlapping JD requirements with the same evidence, merge them into one bullet covering both requirements, or drop the weaker one. Thinning text within a redundant bullet still leaves the redundancy — merging removes it.
5. **One project-name mention per JD topic is sufficient.** A parenthetical like `(Crypton, personal project)` or `(sim-to-real project)` in the dedicated bullet is the canonical anchor; other bullets should not re-introduce the same project unless the claim is genuinely distinct.

---

## Authoring conventions

- **Header comment** every override with: target company/role, route slug, and a numbered list of what changed vs. base. The existing overrides all follow this pattern — match it.
- **Don't invent claims.** Only assert strengths backed by base resume content. If the JD asks for something not in the base, either leave it out or anchor it on a real bullet (see Capital One's commentary in [resumes/capital-one.yaml](../../resumes/capital-one.yaml)). Common failure modes: claiming "deployed models in production" when experience is research-only; claiming specific techniques (e.g., hallucination detection, RAG, LoRA) that appear in the JD but not in `resume.yaml`; adding interpretive narrative about what a system "catches" or "prevents" beyond what the base text actually says.
- **Mission statement** is an array of paragraphs (`- "..."`) — keep voice consistent with base.
- **`skills_highlight.items`** is a 4–6 item headline strip; choose phrases that map directly to JD vocabulary. Set `skills_highlight: { disabled: true }` in an override to hide it — typically paired with a `qualifications` block, which subsumes its scan-anchor purpose with JD-anchored proof points.
- **`qualifications.items`** is an optional bullet-list **section** rendered above the timeline that maps **1:1 to the JD's requirements**. Use it when a JD lists discrete required qualifications and you want a scannable proof-strip at the top of the resume. Each item is a `"Label: value"` string (the label before the first `:` auto-bolds) or `{ label, value }`. Only assert claims backed by base resume content. Example:

  ```yaml
  qualifications:
    title: "Qualifications" # optional; becomes the section <h2> (defaults to "Qualifications")
    items:
      - "Programming: C# (15 yrs), Python (5 yrs), TypeScript (10 yrs)"
      - "Cloud: AWS (8 yrs), Azure (6 yrs)"
      - "ML: PyTorch, RL (PPO), evaluation harnesses, ablations"
  ```

  Order items to match the JD's requirement order. The section sits in a fixed position (above the career timeline) and is **not** affected by `order_by`. Omit the section entirely (don't set to `null`) to inherit the base.

### Qualifications quality bar (high signal, low risk)

- **Assume every line prints verbatim on the resume.** Write for recruiter/hiring-manager reading, not internal notes.
- **Optimize for first read (10-15 seconds).** Lead with role-fit evidence and strongest technical proof before secondary context.
- **One bullet = one distinct claim.** Merge overlapping bullets (for example, ablations + seeded comparison + diagnosis) to reduce redundancy. After drafting, run the explicit redundancy pass described in Step 5 — scanning labels, repeated project references, and paragraph-level summaries that pre-empt the bullet that follows.
- **Prefer concrete evidence over broad adjectives.** Use measurable outcomes, named methods, and specific artifacts; avoid vague claims like "strong in X" unless objectively supported.
- **Avoid over-claiming depth.** If experience is academic/research rather than production, say so explicitly (for example, "reproducible research code" instead of "production ML deployment").
- **Avoid loaded or inflated phrasing.** Minimize biz-speak (for example, "operationalization") and language that may trigger deeper claims than intended.
- **Use conservative stats language unless you want to defend formal statistics.** Prefer "ablation-driven evaluation" and "seeded-run comparisons" over heavy statistical framing unless that depth is truly central.
- **Anchor major claims to a project when helpful.** Add short parenthetical pointers like `(see Vision-Based Sim-to-Real Manipulation Pipeline)` for high-impact claims.
- **Keep project pointers sparse.** Use them for headline claims only; too many parentheticals increase visual noise.
- **Drop low-signal legacy details.** Exclude older or peripheral tools/approaches when they dilute relevance for the target role.
- **Favor recent experience (2020 or later).** Lead every bullet with the strongest, most recent evidence. Pre-2020 work (e.g., Clean Harbors, HKS, Cisco) may appear as brief supporting context — "earlier, at …" — but never as the headline claim. If the only evidence for a JD requirement is pre-2020, either omit the bullet or frame it explicitly as historical ("earlier career" / "prior to 2020") so the candidate isn't put in the position of defending stale technical detail in an interview.
- **Never foreground disqualifier language.** Avoid negative constructions like "no active X" in top qualifications.
- **For sensitive requirements (for example, clearance), use positive eligibility phrasing when true.** Prefer wording like "U.S. citizen; eligible to obtain Top Secret clearance" over defensive caveats.
- **Preserve strict defensibility.** Every qualifications line should be explainable in interview with concrete backing from base resume content.

- **Don't duplicate base content** unless you're changing it. Inheritance is the point.
- **Don't add `null` fields** to "clear" something — that's a no-op. To hide an element, use `disabled:`. To clear a string, set it to `""` (see Google's `location_url: ""`).
- **Don't edit base files** ([resume.yaml](../../resume.yaml), [app.js](../../app.js), schema) when the task is just adding an override.

## Verifying

Open `index.html#/<slug>` in a browser. Check the console for merge warnings and the toast for missing-override errors. The base resume should render unchanged at `index.html` (no hash).
