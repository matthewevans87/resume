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

**Light-touch tailoring** (the most common override): change only `personal.title`, `mission_statement`, `skills_highlight`, and `projects_config.title`. Leave `experience` and project descriptions alone unless the JD requires reframing. See [resumes/shield-ai.yaml](../../resumes/shield-ai.yaml) and [resumes/google.yaml](../../resumes/google.yaml) for minimal examples.

**Deep reframing** (project descriptions, experience trimming): see [resumes/rtx-ai-ml-algos.yaml](../../resumes/rtx-ai-ml-algos.yaml) and [resumes/capital-one.yaml](../../resumes/capital-one.yaml).

## Authoring conventions

- **Header comment** every override with: target company/role, route slug, and a numbered list of what changed vs. base. The existing overrides all follow this pattern — match it.
- **Don't invent claims.** Only assert strengths backed by base resume content. If the JD asks for something not in the base, either leave it out or anchor it on a real bullet (see Capital One's commentary in [resumes/capital-one.yaml](../../resumes/capital-one.yaml)).
- **Mission statement** is an array of paragraphs (`- "..."`) — keep voice consistent with base.
- **`skills_highlight.items`** is a 4–6 item headline strip; choose phrases that map directly to JD vocabulary.
- **Don't duplicate base content** unless you're changing it. Inheritance is the point.
- **Don't add `null` fields** to "clear" something — that's a no-op. To hide an element, use `disabled:`. To clear a string, set it to `""` (see Google's `location_url: ""`).
- **Don't edit base files** ([resume.yaml](../../resume.yaml), [app.js](../../app.js), schema) when the task is just adding an override.

## Verifying

Open `index.html#/<slug>` in a browser. Check the console for merge warnings and the toast for missing-override errors. The base resume should render unchanged at `index.html` (no hash).
