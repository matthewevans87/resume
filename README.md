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
- Arrays and scalars in the override **fully replace** the base value (so to
  tweak one item in a list, restate the whole list).
- `null` (or omitting a key) means "keep the base value".

If the override file is missing or fails to parse, the page falls back to the
base resume and shows a notification.

### Hiding entries with `disable:`

Because arrays replace wholesale, hiding a single project (or job, skill
category, etc.) without the `disable:` directive would force you to restate
the entire list in the override. Instead, list the entries to hide by name
under a top-level `disable:` block:

```yaml
disable:
  projects:
    - "Neural Networks Independent Study"
  experience:
    - "Ericsson, Inc."
```

After the deep-merge, matching entries have `enabled: false` set on them
(which existing render filters already drop). Supported sections and the
field used to identify entries:

| Section        | Match field                  |
| -------------- | ---------------------------- |
| `projects`     | `name`                       |
| `experience`   | `company`                    |
| `education`    | `"<institution> — <degree>"` |
| `achievements` | `title`                      |
| `skills`       | `category`                   |

Names that don't match log a `console.warn` (so typos surface in DevTools
without breaking the page).

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
