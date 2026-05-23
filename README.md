# Resume - Single Page Web App

A clean, modern, data-driven resume built as a single-page web application. Features automatic dark/light mode switching and a completely different print layout inspired by LaTeX documents.

## Features

- **Data-Driven**: All content comes from a YAML file (`resume.yaml`)
- **Dual Design Systems**:
  - **Screen**: Modern SAAS app aesthetic with clean lines
  - **Print**: Professional LaTeX-inspired document layout
- **Dark/Light Mode**: Automatically matches system preference
- **Responsive**: Optimized for desktop and mobile
- **GitHub Pages Ready**: Deploy instantly to GitHub Pages

## Getting Started

### 1. Edit Your Resume Data

Open `resume.yaml` and replace the placeholder content with your own information. The YAML file is structured to capture:

- Personal details (name, contact info, etc.)
- Mission statement
- Experience (companies, roles, promotions, dates)
- Projects (with highlights, technologies, metrics)
- Education (degrees, institutions, honors)
- Achievements (awards, publications, certifications)
- Skills (organized by category)

### 2. Preview Locally

To view your resume locally, you'll need a local web server (browsers block loading local YAML files for security reasons).

**Option 1: Python**
```bash
python -m http.server 8000
```

**Option 2: Node.js (npx)**
```bash
npx serve
```

**Option 3: VS Code Live Server Extension**
- Install the "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

Then open `http://localhost:8000` (or the appropriate port) in your browser.

### 3. Deploy to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select your main branch
4. Click Save
5. Your resume will be available at `https://yourusername.github.io/repository-name/`

## File Structure

```
.
├── index.html       # HTML structure
├── styles.css       # Screen styles (with dark/light mode)
├── print.css        # Print styles (LaTeX-inspired)
├── app.js           # JavaScript to load and render YAML data
├── resume.yaml      # Your base resume data (edit this!)
├── resumes/         # Per-role override YAML files (optional)
│   └── palantir.yaml
└── README.md        # This file
```

## Per-Role Overrides

You can tailor the resume for specific roles without forking the base data. Drop
a YAML file into `resumes/<slug>.yaml`, then visit `#/<slug>` (e.g.
`https://your.site/#/palantir`) to render the merged result.

Merge semantics:

- Plain objects merge recursively with the base.
- Arrays of scalars (and scalar values) in the override **fully replace** the
  base value.
- `null` (or omitting a key) means "keep the base value".
- **Arrays of objects** (experience, projects, education, achievements,
  skills, plus nested `positions` and per-position `projects`) use the
  **ResumeCollection** shape and merge by `key`. See below.

If the override file is missing or fails to parse, the page falls back to the
base resume and shows a notification.

### ResumeCollection: keyed, mergeable arrays-of-objects

Every array-of-objects in the resume data uses this uniform shape:

```yaml
projects:
  ordering:          # optional — explicit display order of keys
    - projectA
    - projectB
    - projectC
  disabled:          # optional — keys to hide
    - projectB
  enabled:           # optional — keys to force-show (wins over `disabled`)
    - projectC
  elements:          # required — the actual entries
    - key: projectA
      name: Project A
      ...
    - key: projectB
      name: Project B
      ...
```

- `key` (auto-derived from a kebab-cased identifying field if omitted —
  `company` for experience, `title` for positions, `name` for projects,
  `degree` for education, `title` for achievements, `category` for skills).
- An entry is rendered iff `key in enabled` OR `key not in disabled`.

#### Per-entry overrides (the whole point)

Patch a single entry by key — no need to restate the rest of the array:

```yaml
# resumes/acme.yaml
experience:
  elements:
    - key: zeal-it-consultants
      positions:
        elements:
          - key: associate-partner
            summary: "Custom Acme-flavored summary for this role."
```

The override deep-merges into the matching base element. Unmentioned base
entries are preserved as-is.

#### Visibility overrides

To hide or surface entries without touching their payloads, list keys
under the collection's `disabled` / `enabled`:

```yaml
experience:
  disabled: [clickmotive-inc, ericsson-inc]

projects:
  enabled: [crypton]            # surfaces a base-disabled project
```

#### Reordering

```yaml
projects:
  ordering: [vision-based-sim-to-real-manipulation-pipeline, crypton]
```

Listed keys appear first in the given order; unlisted keys follow in their
base insertion order.

#### Merge rules for collections

- Override `elements[]` merges into base by `key` (deep-merge per element).
  New keys are appended.
- Override `ordering`, `disabled`, and `enabled` **replace** the base
  lists when present (so an override can wipe a base `disabled` list by
  setting its own, including an empty one).

## Customization

### Colors and Styling

Edit the CSS custom properties in `styles.css` to customize colors:

```css
:root {
  --color-accent: #0366d6;  /* Primary accent color */
  --color-bg: #ffffff;      /* Background color */
  /* ... more variables */
}
```

### Print Layout

The print styles in `print.css` use a serif font and compact layout optimized for printing. Test the print layout with:
- Browser Print Preview (Cmd/Ctrl + P)
- Print to PDF

### Adding/Removing Sections

Sections with no data are automatically hidden. To add custom sections:
1. Add the section to `index.html`
2. Add corresponding data to `resume.yaml`
3. Add a render function in `app.js`

## Tips

- **Keep it concise**: Employers typically scan resumes in 6-10 seconds
- **Use metrics**: Quantify achievements where possible
- **Update regularly**: Keep your YAML file current
- **Test print layout**: Always preview before printing/exporting to PDF
- **Optimize for ATS**: Use clear section headings and standard job titles

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## License

Feel free to use this template for your own resume!
