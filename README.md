# CV / Portfolio — Andres F. Valencia F.

This is a template repository for creating a CV/Portfolio page using [Astro](https://astro.build/). It includes a simple layout and styling.

## 🚀 Project Structure

The project structure is as follows:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── projects/
│   │   ├── research/
│   │   ├── slides/
│   │   └── single/
│   │   |   └── contact.mdx
│   │   |   └── publications.mdx
│   │   |   └── slides.mdx
│   │   |   └── projects.mdx
│   │   |   └── research.mdx
│   │   |   └── home.mdx
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## Customize Content

Modify the MDX files in the `src/content/single/` directory to update your CV/Portfolio content. You can also add new projects, research, and slides in their respective directories.



## Adding posters, slides and talks

1. Copy the PDF into `public/posters/` (posters) or `public/slides/` (slides/talks).
2. Create a file in `src/content/presentations/`, e.g. `my-talk-2026.mdx`:

```mdx
---
title: "Title of the poster or talk"
kind: "poster"            # poster | slides | talk
event: "Name of the event"
location: "City, Country"  # optional
date: "Nov 25–29, 2026"
year: 2026
file: "posters/my-poster.pdf"   # path inside public/ (or use `url: "https://..."`)
---

Optional one-paragraph description.
```

Entries appear automatically on the *Posters & Slides* page, newest first. If neither `file` nor `url` is given, the entry is shown without a download button.

## Adding projects and research entries

Add an `.mdx` file to `src/content/projects/` or `src/content/researchs/` following the frontmatter of the existing entries (`title`, `slug`, `year`, optional `tags`).
