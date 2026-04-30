// Utility Functions
const notify = (() => {
  const mobileQueue = [];
  let mobileActive = false;
  const isMobile = () => window.matchMedia("(max-width: 640px)").matches;

  // Mobile: show one notification at a time; start next only after current dismisses.
  const showMobile = (message, timeout, onClick) => {
    mobileActive = true;
    const container = document.getElementById("notifications");
    const el = document.createElement("div");
    el.className = "notification";
    el.textContent = message;

    const dismiss = (immediate) => {
      const dur = immediate ? 150 : 280;
      el.style.transition = `opacity ${dur}ms ease, transform ${dur}ms ease`;
      el.style.opacity = "0";
      el.style.transform = "translateY(12px) scale(0.88)";
      setTimeout(() => {
        el.remove();
        mobileActive = false;
        if (mobileQueue.length) {
          const next = mobileQueue.shift();
          showMobile(next.message, next.timeout, next.onClick);
        }
      }, dur);
    };

    el.addEventListener("click", () => {
      if (onClick) onClick();
      dismiss(true);
    });
    container.appendChild(el);
    setTimeout(() => dismiss(false), timeout);
  };

  // Desktop: original stacking behaviour.
  const showDesktop = (message, timeout, onClick) => {
    const container = document.getElementById("notifications");
    const el = document.createElement("div");
    el.className = "notification";
    el.textContent = message;

    const dismiss = (immediate) => {
      const fadeDuration = immediate ? 150 : 1000;
      el.style.transition = `opacity ${fadeDuration}ms ease`;
      el.style.opacity = "0";
      setTimeout(() => {
        el.style.transition =
          "max-height 0.3s ease, margin-bottom 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease";
        el.style.maxHeight = "0";
        el.style.marginBottom = "0";
        el.style.paddingTop = "0";
        el.style.paddingBottom = "0";
        setTimeout(() => el.remove(), 300);
      }, fadeDuration);
    };

    el.addEventListener("click", () => {
      if (onClick) onClick();
      dismiss(true);
    });
    container.appendChild(el);
    setTimeout(() => dismiss(false), timeout);
  };

  return (message, timeout = 3000, onClick = null) => {
    if (isMobile()) {
      if (mobileActive) {
        mobileQueue.push({ message, timeout, onClick });
      } else {
        showMobile(message, timeout, onClick);
      }
    } else {
      showDesktop(message, timeout, onClick);
    }
  };
})();

// Utility Functions
const formatDate = (dateString) => {
  if (!dateString) return "Present";
  // Handle both YYYY and YYYY-MM formats
  const parts = dateString.split("-");
  if (parts.length === 1) {
    // Year only (e.g., "2020")
    return parts[0];
  } else {
    // YYYY-MM format - show month and year
    const [year, month] = parts.map(Number);
    const date = new Date(year, month - 1); // month is 0-indexed in Date constructor
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  }
};

const formatDateRange = (start, end) => {
  return `${formatDate(start)} – ${formatDate(end)}`;
};

const createElement = (tag, className, content = "") => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.textContent = content;
  return element;
};

// Creates a <li> for a highlight entry.
// If highlight is a string, renders it as plain text.
// If highlight is an array, renders the first element in <strong> followed by the rest as plain text.
const createHighlightLi = (highlight) => {
  const li = document.createElement("li");
  if (Array.isArray(highlight)) {
    const [header, ...rest] = highlight;
    const strong = document.createElement("strong");
    strong.textContent = header;
    li.appendChild(strong);
    if (rest.length > 0) {
      li.appendChild(document.createTextNode(" " + rest.join(" ")));
    }
  } else {
    li.textContent = highlight;
  }
  return li;
};

const createLink = (url, text) => {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = text || url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
};

// Modal Functions
const showModal = (message) => {
  return new Promise((resolve) => {
    const modal = document.getElementById("confirmation-modal");
    const modalMessage = document.getElementById("modal-message");
    const modalYes = document.getElementById("modal-yes");
    const modalNo = document.getElementById("modal-no");

    modalMessage.textContent = message;
    modal.classList.add("show");

    const handleYes = () => {
      modal.classList.remove("show");
      modalYes.removeEventListener("click", handleYes);
      modalNo.removeEventListener("click", handleNo);
      document.removeEventListener("keydown", handleEscape);
      resolve(true);
    };

    const handleNo = () => {
      modal.classList.remove("show");
      modalYes.removeEventListener("click", handleYes);
      modalNo.removeEventListener("click", handleNo);
      document.removeEventListener("keydown", handleEscape);
      resolve(false);
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleNo();
      }
    };

    modalYes.addEventListener("click", handleYes);
    modalNo.addEventListener("click", handleNo);
    document.addEventListener("keydown", handleEscape);
  });
};

// Brand SVG paths (viewBox 0 0 24 24) sourced from Simple Icons (simpleicons.org)
const brandSvgPaths = {
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
};

// Build a project source-link button. Uses brand SVG for known hosts, falls
// back to a generic Material Symbol icon. Includes a print-only URL label.
const createProjectLinkBtn = (url) => {
  const btn = document.createElement("a");
  btn.className = "project-link-btn";
  btn.href = url;
  btn.target = "_blank";
  btn.rel = "noopener noreferrer";
  btn.setAttribute("aria-label", "View source");

  const isGitHub = url.includes("github.com");
  if (isGitHub) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("contact-brand-icon");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", brandSvgPaths.github);
    svg.appendChild(path);
    btn.appendChild(svg);
  } else {
    btn.appendChild(createElement("span", "material-symbols-outlined", "code"));
  }

  // Print-only: show the URL text next to the icon
  const printUrl = createElement("span", "project-link-print-url", url);
  btn.appendChild(printUrl);

  return btn;
};

// Render Functions
const renderHeader = (data) => {
  const personal = data.personal;

  // Name
  document.getElementById("full-name").textContent = personal.name;
  document.title = `${personal.name} - Resume`;

  // Contact Info
  const contactInfo = document.getElementById("contact-info");
  contactInfo.innerHTML = "";

  const contactItems = [
    {
      text: personal.location,
      icon: "location_on",
      link: "https://www.google.com/maps/search/?api=1&query=Richardson,+TX",
    },
    {
      text: personal.email,
      icon: "email",
      link: `mailto:${personal.email}`,
      confirm: "Actually send me an email?",
    },
    {
      text: personal.phone,
      icon: "phone",
      link: `tel:${personal.phone}`,
      confirm: "Actually call me?",
    },
  ];

  // Brand SVG paths (viewBox 0 0 24 24) sourced from Simple Icons (simpleicons.org)
  // (brandSvgPaths is now defined at module scope above)
  const socialIcons = {};
  if (personal.social) {
    Object.entries(personal.social).forEach(([platform, info]) => {
      if (info.enabled === false) return;
      contactItems.push({
        tooltip: platform.charAt(0).toUpperCase() + platform.slice(1),
        printText: info.print_enabled === false ? null : info.handle,
        printHidden: info.print_enabled === false,
        icon: socialIcons[platform] || "link",
        svgPath: brandSvgPaths[platform] || null,
        link: info.url,
      });
    });
  }

  contactItems.forEach((item) => {
    // Skip if no data
    if (!item.text && !item.link && !item.svgPath) return;
    if (
      item.link &&
      !item.link.startsWith("http") &&
      !item.link.startsWith("mailto") &&
      !item.link.startsWith("tel")
    )
      return;

    // Create wrapper - use <a> if there's a link, otherwise <span>
    let wrapper;
    if (item.link) {
      if (item.confirm) {
        // For items that need confirmation, use a button styled as a link
        wrapper = document.createElement("button");
        wrapper.type = "button";
        wrapper.addEventListener("click", async (e) => {
          e.preventDefault();
          const confirmed = await showModal(item.confirm);
          if (confirmed) {
            window.location.href = item.link;
          }
        });
      } else {
        wrapper = document.createElement("a");
        wrapper.href = item.link;
        wrapper.target = "_blank";
        wrapper.rel = "noopener noreferrer";
      }
    } else {
      wrapper = document.createElement("span");
    }
    wrapper.className = "contact-item";
    if (item.printHidden) wrapper.classList.add("contact-print-hidden");

    // Add icon - use inline SVG for brand icons, Material Symbols for everything else
    if (item.svgPath) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");
      svg.classList.add("contact-brand-icon");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", item.svgPath);
      svg.appendChild(path);
      wrapper.appendChild(svg);
    } else {
      const icon = createElement("span", "material-symbols-outlined");
      icon.textContent = item.icon;
      wrapper.appendChild(icon);
    }

    // Add title attribute for tooltip when labels are hidden (small screens)
    if (item.tooltip || item.text) wrapper.title = item.tooltip || item.text;

    // Add text (social items get separate screen/print spans)
    if ("printText" in item) {
      // Social item: icon-only on screen, handle shown in print
      if (item.text) {
        const screenSpan = createElement("span", "contact-screen-text", item.text);
        wrapper.appendChild(screenSpan);
      }
      if (item.printText) {
        const printSpan = createElement("span", "contact-print-text", item.printText);
        wrapper.appendChild(printSpan);
      }
    } else {
      const textSpan = createElement("span", "contact-label", item.text);
      wrapper.appendChild(textSpan);
    }

    contactInfo.appendChild(wrapper);
  });

  // Mission Statement
  const missionEl = document.getElementById("mission-statement");
  const missionStatements = Array.isArray(data.mission_statement)
    ? data.mission_statement
    : [data.mission_statement];
  missionStatements.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    missionEl.appendChild(p);
  });

  // Skills Highlight
  const skillsHighlightEl = document.getElementById("skills-highlight");
  const sh = data.skills_highlight;
  if (sh && sh.items && sh.items.length > 0) {
    skillsHighlightEl.innerHTML = "";
    const labelEl = createElement("div", "skills-highlight-label");
    if (sh.title) {
      labelEl.appendChild(createElement("span", "skills-highlight-title", sh.title));
      labelEl.appendChild(createElement("span", "skills-highlight-colon", ":"));
    }
    skillsHighlightEl.appendChild(labelEl);
    const listEl = createElement("div", "skills-highlight-items");
    sh.items.forEach((item, i) => {
      if (i > 0) {
        listEl.appendChild(createElement("span", "skills-highlight-dot", "·"));
      }
      listEl.appendChild(createElement("span", "skills-highlight-item", item));
    });
    skillsHighlightEl.appendChild(listEl);
    skillsHighlightEl.style.display = "";
  } else {
    skillsHighlightEl.style.display = "none";
  }

  const taglineEl = document.getElementById("tagline");
  if (data.tagline && data.enable_tagline !== false) {
    taglineEl.textContent = data.tagline;
    taglineEl.style.display = "";
  } else {
    taglineEl.style.display = "none";
  }
};

const renderExperience = (experiences) => {
  const timeline = document.getElementById("experience-timeline");
  timeline.innerHTML = "";

  const isMobileView = window.matchMedia("(max-width: 640px)").matches;

  // Filter enabled companies
  const enabledExperiences = experiences.filter((exp) => exp.enabled !== false);

  enabledExperiences.forEach((exp) => {
    const expItem = createElement("div", "experience-item");
    const isCollapsed = isMobileView || exp.expanded === false;

    // Calculate company date range from positions
    const positions = exp.positions || [];
    const startDates = positions.map((p) => p.start_date).filter(Boolean);
    const endDates = positions.map((p) => p.end_date).filter(Boolean);
    const companyStartDate = startDates.length > 0 ? startDates.sort()[0] : null;
    const companyEndDate = endDates.length > 0 ? endDates.sort().reverse()[0] : null;

    // Company Header
    const companyHeader = createElement("div", "company-header");

    const companyName = exp.company_url
      ? createLink(exp.company_url, exp.company)
      : createElement("div", "company-name", exp.company);
    companyName.className = "company-name";

    const dateRange = createElement(
      "div",
      "date-range",
      formatDateRange(companyStartDate, companyEndDate),
    );

    const nameLoc = createElement("div", "company-name-loc");
    nameLoc.appendChild(companyName);
    if (exp.location) {
      const location = createElement("div", "company-location", exp.location);
      nameLoc.appendChild(location);
    }

    // Most recent position title shown when company is collapsed
    const mostRecentPosition = positions
      .slice()
      .sort((a, b) => (b.start_date || "").localeCompare(a.start_date || ""))[0];
    if (mostRecentPosition) {
      const collapsedRole = createElement(
        "div",
        "company-collapsed-role",
        mostRecentPosition.title,
      );
      nameLoc.appendChild(collapsedRole);
    }

    companyHeader.appendChild(nameLoc);
    companyHeader.appendChild(dateRange);
    expItem.appendChild(companyHeader);

    // Positions Container (collapsible)
    const positionsContainer = createElement("div", "positions-container");
    if (isCollapsed) {
      positionsContainer.classList.add("collapsed");
    }

    // Positions
    exp.positions.forEach((position) => {
      const posDiv = createElement("div", "position");

      // Position Header
      const posHeader = createElement("div", "position-header");

      const titleWrapper = createElement("div");
      const title = createElement("span", "position-title", position.title);
      titleWrapper.appendChild(title);

      if (position.promotion) {
        const badge = createElement("span", "promotion-badge", "Promotion");
        titleWrapper.appendChild(badge);
      }

      const dateRange = createElement(
        "div",
        "date-range",
        formatDateRange(position.start_date, position.end_date),
      );

      posHeader.appendChild(titleWrapper);
      posHeader.appendChild(dateRange);
      posDiv.appendChild(posHeader);

      // Summary
      if (position.summary) {
        const summary = createElement("div", "position-summary", position.summary.trim());
        posDiv.appendChild(summary);
      }

      // Highlights
      if (position.highlights && position.highlights.length > 0) {
        const highlights = createElement("ul", "highlights");
        position.highlights.forEach((highlight) => {
          highlights.appendChild(createHighlightLi(highlight));
        });
        posDiv.appendChild(highlights);
      }

      // Technologies
      if (position.technologies && position.technologies.length > 0) {
        const techDiv = createElement("div", "technologies");
        position.technologies.forEach((tech) => {
          const tag = createElement("span", "tech-tag", tech);
          techDiv.appendChild(tag);
        });
        posDiv.appendChild(techDiv);
      }

      // Projects (Company Projects)
      if (position.projects && position.projects.length > 0) {
        // Filter enabled projects
        const enabledProjects = position.projects.filter((p) => p.enabled !== false);

        if (enabledProjects.length > 0) {
          const projectsHeader = createElement("div", "position-projects-header");
          projectsHeader.textContent = `Key Projects (${enabledProjects.length})`;
          posDiv.appendChild(projectsHeader);

          const projectsContainerClasses =
            "position-projects-container" + (exp.projects_expanded === false ? " collapsed" : "");
          const projectsContainer = createElement("div", projectsContainerClasses);

          enabledProjects.forEach((project) => {
            const projectItem = createElement("div", "company-project-item");
            projectItem.id = "proj-" + slugify(project.name);

            // Project Header
            const projHeader = createElement("div", "project-header");
            const projNameWrapper = createElement("div", "project-name-wrapper");
            const projName = createElement("div", "project-name", project.name);
            projNameWrapper.appendChild(projName);
            if (project.url) {
              projNameWrapper.appendChild(createProjectLinkBtn(project.url));
            }
            projHeader.appendChild(projNameWrapper);
            const projDate = createElement(
              "div",
              "date-range",
              formatDateRange(project.start_date, project.end_date),
            );
            projHeader.appendChild(projDate);
            projectItem.appendChild(projHeader);

            // Role
            if (project.role) {
              const role = createElement("div", "project-role", project.role);
              projectItem.appendChild(role);
            }

            // Description
            const description = createElement("div", "project-description", project.description);
            projectItem.appendChild(description);

            // Highlights
            if (project.highlights && project.highlights.length > 0) {
              const highlights = createElement("ul", "highlights");
              project.highlights.forEach((highlight) => {
                highlights.appendChild(createHighlightLi(highlight));
              });
              projectItem.appendChild(highlights);
            }

            // Technologies
            if (project.technologies && project.technologies.length > 0) {
              const techDiv = createElement("div", "technologies");
              project.technologies.forEach((tech) => {
                const tag = createElement("span", "tech-tag", tech);
                techDiv.appendChild(tag);
              });
              projectItem.appendChild(techDiv);
            }

            // Metrics
            if (project.metrics && project.metrics.length > 0) {
              const metricsDiv = createElement("div", "project-metrics");
              project.metrics.forEach((metric) => {
                const metricSpan = createElement("span", "metric", metric);
                metricsDiv.appendChild(metricSpan);
              });
              projectItem.appendChild(metricsDiv);
            }

            projectsContainer.appendChild(projectItem);
          });

          posDiv.appendChild(projectsContainer);

          // Toggle projects on header click
          projectsHeader.addEventListener("click", () => {
            projectsContainer.classList.toggle("collapsed");
          });
        }
      }

      positionsContainer.appendChild(posDiv);
    });

    expItem.appendChild(positionsContainer);

    // Toggle functionality
    companyHeader.addEventListener("click", (e) => {
      // Don't toggle if clicking on the company link
      if (e.target.tagName === "A" || e.target.closest("a")) {
        return;
      }

      positionsContainer.classList.toggle("collapsed");
    });

    timeline.appendChild(expItem);
  });
};

const renderProjects = (projects, config = {}) => {
  const projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";
  const isMobileView = window.matchMedia("(max-width: 640px)").matches;
  const groupByType = config == null || config.group_by_type !== false;

  // Filter enabled projects
  const enabledProjects = projects.filter((p) => p.enabled !== false);

  const renderProjectItem = (project) => {
    const projectItem = createElement("div", "project-item");
    projectItem.id = "proj-" + slugify(project.name);

    // Project Header
    const header = createElement("div", "project-header");

    const nameWrapper = createElement("div", "project-name-wrapper");
    const name = createElement("div", "project-name", project.name);
    nameWrapper.appendChild(name);
    if (project.url) {
      nameWrapper.appendChild(createProjectLinkBtn(project.url));
    }

    const dateRange = createElement(
      "div",
      "date-range",
      formatDateRange(project.start_date, project.end_date),
    );

    header.appendChild(nameWrapper);
    header.appendChild(dateRange);
    projectItem.appendChild(header);

    // Collapsible body
    const body = createElement("div", "project-body");
    if (isMobileView || project.projects_expanded === false) body.classList.add("collapsed");

    // Toggle on header click
    header.addEventListener("click", (e) => {
      if (e.target.closest(".project-link-btn")) return;
      body.classList.toggle("collapsed");
    });

    // Role
    if (project.role) {
      const role = createElement("div", "project-role", project.role);
      body.appendChild(role);
    }

    // Description
    const description = createElement("div", "project-description", project.description);
    body.appendChild(description);

    // Highlights
    if (project.highlights && project.highlights.length > 0) {
      const highlights = createElement("ul", "highlights");
      project.highlights.forEach((highlight) => {
        highlights.appendChild(createHighlightLi(highlight));
      });
      body.appendChild(highlights);
    }

    // Technologies
    if (project.technologies && project.technologies.length > 0) {
      const techDiv = createElement("div", "technologies");
      project.technologies.forEach((tech) => {
        const tag = createElement("span", "tech-tag", tech);
        techDiv.appendChild(tag);
      });
      body.appendChild(techDiv);
    }

    // Metrics
    if (project.metrics && project.metrics.length > 0) {
      const metricsDiv = createElement("div", "project-metrics");
      project.metrics.forEach((metric) => {
        const metricSpan = createElement("span", "metric", metric);
        metricsDiv.appendChild(metricSpan);
      });
      body.appendChild(metricsDiv);
    }

    projectItem.appendChild(body);
    return projectItem;
  };

  if (groupByType) {
    const academicProjects = enabledProjects.filter((p) => p.type === "academic");
    const personalProjects = enabledProjects.filter((p) => p.type === "personal");

    const renderProjectGroup = (groupProjects, title) => {
      if (groupProjects.length === 0) return;
      const groupHeader = createElement("h3", "project-group-header", title);
      projectsList.appendChild(groupHeader);
      groupProjects.forEach((project) => projectsList.appendChild(renderProjectItem(project)));
    };

    renderProjectGroup(academicProjects, "Academic Projects");
    renderProjectGroup(personalProjects, "Personal Projects");
  } else {
    // Sort all projects by start_date descending (most recent first)
    const sorted = [...enabledProjects].sort((a, b) => {
      const aKey = String(a.start_date || "").replace(/-/g, "");
      const bKey = String(b.start_date || "").replace(/-/g, "");
      return bKey.localeCompare(aKey);
    });
    sorted.forEach((project) => projectsList.appendChild(renderProjectItem(project)));
  }
};

const renderEducation = (education) => {
  const educationList = document.getElementById("education-list");
  educationList.innerHTML = "";

  // Filter enabled education items
  const enabledEducation = education.filter((edu) => edu.enabled !== false);

  enabledEducation.forEach((edu) => {
    const eduItem = createElement("div", "education-item");

    // Header
    const header = createElement("div", "education-header");

    const institution = edu.institution_url
      ? createLink(edu.institution_url, edu.institution)
      : createElement("div", "institution-name", edu.institution);
    institution.className = "institution-name";

    const dateRange = createElement(
      "div",
      "date-range",
      formatDateRange(edu.start_date, edu.end_date),
    );

    header.appendChild(institution);
    header.appendChild(dateRange);
    eduItem.appendChild(header);

    // Degree Info
    const degreeInfo = createElement("div", "degree-info");

    const degreeWrapper = createElement("div");
    const degree = createElement("span", "degree", edu.degree);
    degreeWrapper.appendChild(degree);
    degreeWrapper.appendChild(document.createTextNode(" in "));
    const field = createElement("span", "field", edu.field);
    degreeWrapper.appendChild(field);

    if (edu.honors) {
      const honors = createElement("span", "honors", edu.honors);
      degreeWrapper.appendChild(honors);
    }

    degreeInfo.appendChild(degreeWrapper);

    // GPA (on same row as degree)
    if (edu.gpa) {
      const gpa = createElement("div", "gpa", `GPA: ${edu.gpa}`);
      degreeInfo.appendChild(gpa);
    }

    eduItem.appendChild(degreeInfo);

    // Concentration
    if (edu.concentration) {
      const concentration = createElement(
        "div",
        "concentration",
        `Concentration: ${edu.concentration}`,
      );
      eduItem.appendChild(concentration);
    }

    // Location
    if (edu.location) {
      const location = createElement("div", "company-location", edu.location);
      eduItem.appendChild(location);
    }

    // Courses
    if (edu.courses && edu.courses.length > 0) {
      const coursesLabel = createElement("div", "courses-label", "Key Courses:");
      eduItem.appendChild(coursesLabel);

      const coursesDiv = createElement("div", "courses");
      edu.courses.forEach((course) => {
        const tag = createElement("span", "course-tag", course);
        coursesDiv.appendChild(tag);
      });
      eduItem.appendChild(coursesDiv);
    }

    // Highlights
    if (edu.highlights && edu.highlights.length > 0) {
      const highlights = createElement("ul", "highlights");
      edu.highlights.forEach((highlight) => {
        const li = createElement("li", "", highlight);
        highlights.appendChild(li);
      });
      eduItem.appendChild(highlights);
    }

    educationList.appendChild(eduItem);
  });
};

const renderAchievements = (achievements) => {
  const achievementsList = document.getElementById("achievements-list");
  achievementsList.innerHTML = "";

  // Filter enabled achievements
  const enabledAchievements = achievements.filter((a) => a.enabled !== false);

  enabledAchievements.forEach((achievement) => {
    const li = createElement("li", "achievement-item");

    const titleDiv = achievement.url
      ? createLink(achievement.url, achievement.title)
      : createElement("div", "achievement-title", achievement.title);
    titleDiv.className = "achievement-title";
    li.appendChild(titleDiv);

    const issuerDiv = createElement("div", "achievement-issuer");
    issuerDiv.textContent = achievement.issuer;

    if (achievement.date) {
      const dateSpan = createElement("span", "achievement-date", formatDate(achievement.date));
      issuerDiv.appendChild(dateSpan);
    }

    li.appendChild(issuerDiv);

    if (achievement.description) {
      const desc = createElement("div", "achievement-description", achievement.description);
      li.appendChild(desc);
    }

    achievementsList.appendChild(li);
  });
};

const renderSkills = (skills) => {
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";

  skills.forEach((skillCategory) => {
    const categoryDiv = createElement("div", "skill-category");

    const categoryName = createElement("div", "skill-category-name", skillCategory.category);
    categoryDiv.appendChild(categoryName);

    const itemsDiv = createElement("div", "skill-items");
    skillCategory.items.forEach((item) => {
      const itemSpan = createElement("span", "skill-item", item);
      itemsDiv.appendChild(itemSpan);
    });

    categoryDiv.appendChild(itemsDiv);
    skillsList.appendChild(categoryDiv);
  });
};

const slugify = (str) =>
  String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const navigateToProject = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  // Expand position-projects-container if collapsed
  const projContainer = el.closest(".position-projects-container");
  if (projContainer) projContainer.classList.remove("collapsed");
  // Expand positions-container (company) if collapsed
  const posContainer = el.closest(".positions-container");
  if (posContainer) {
    posContainer.classList.remove("collapsed");
  }
  // Wait one frame for layout to settle after expanding
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    // Restart animation cleanly
    el.classList.remove("project-highlight");
    void el.offsetWidth;
    el.classList.add("project-highlight");
    el.addEventListener("animationend", () => el.classList.remove("project-highlight"), {
      once: true,
    });
  });
};

// Main render function
const renderCareerTimeline = (data) => {
  const container = document.getElementById("career-timeline-viz");
  if (!container) return;
  container.innerHTML = "";

  // Remove any lingering tooltip from a previous render
  document.querySelectorAll(".ctv-tooltip").forEach((el) => el.remove());

  const parseDecimalYear = (dateStr) => {
    if (!dateStr) return null;
    const parts = String(dateStr).split("-").map(Number);
    return parts.length >= 2 ? parts[0] + (parts[1] - 1) / 12 : parts[0];
  };

  const experienceBands = [];
  const experienceBandGroups = []; // bands paired with their sorted work projects
  const educationBands = [];
  const educationBandGroups = []; // bands paired with their academic project dots
  const personalProjectDots = [];

  const tl = data.timeline || {};
  const showPositions = !tl.positions || tl.positions.enabled !== false;
  const showEducation = !tl.education || tl.education.enabled !== false;
  const showProjects = !tl.projects || tl.projects.enabled !== false;
  const showWorkProjects = !tl.work_projects || tl.work_projects.enabled !== false;

  (data.experience || [])
    .filter((e) => e.enabled !== false)
    .forEach((exp) => {
      if (!showPositions) return;
      (exp.positions || []).forEach((pos) => {
        const start = parseDecimalYear(pos.start_date);
        const end = parseDecimalYear(pos.end_date) || new Date().getFullYear();
        if (start == null) return;
        const band = { label: `${pos.title} — ${exp.company}`, start, end };
        experienceBands.push(band);
        const projects = showWorkProjects
          ? (pos.projects || [])
              .filter((p) => p.enabled !== false)
              .map((proj) => ({
                label: `${proj.name} (${pos.title} @ ${exp.company})`,
                url: proj.url || null,
                id: "proj-" + slugify(proj.name),
                chronoKey: parseDecimalYear(proj.start_date) ?? 0,
              }))
              .sort((a, b) => a.chronoKey - b.chronoKey)
          : [];
        experienceBandGroups.push({ band, projects });
      });
    });

  (data.education || [])
    .filter((e) => e.enabled !== false && showEducation)
    .forEach((edu) => {
      const start = parseDecimalYear(edu.start_date);
      const end = parseDecimalYear(edu.end_date) || start;
      if (start == null) return;
      const band = {
        label: `${edu.degree}, ${edu.field} — ${edu.institution}`,
        start,
        end,
      };
      educationBands.push(band);
      educationBandGroups.push({ band, projects: [] });
    });

  (data.projects || [])
    .filter((p) => p.enabled !== false && showProjects)
    .forEach((proj) => {
      const start = parseDecimalYear(proj.start_date);
      const end = parseDecimalYear(proj.end_date) || start;
      if (start == null) return;
      const mid = (start + end) / 2;
      const dot = {
        label: proj.name,
        start,
        end,
        mid,
        url: proj.url || null,
        id: "proj-" + slugify(proj.name),
        chronoKey: mid,
      };
      if (proj.type === "academic") {
        const group = educationBandGroups.find((g) => mid >= g.band.start && mid <= g.band.end);
        if (group) {
          group.projects.push(dot);
          return;
        }
      }
      personalProjectDots.push(dot);
    });

  // Sort academic dots within each education band chronologically
  educationBandGroups.forEach((g) => g.projects.sort((a, b) => a.chronoKey - b.chronoKey));

  const allPoints = [
    ...experienceBands.flatMap((b) => [b.start, b.end]),
    ...educationBands.flatMap((b) => [b.start, b.end]),
    ...personalProjectDots.flatMap((d) => [d.start, d.end]),
  ];
  if (!allPoints.length) return;

  // Add half-year padding so edge labels aren't clipped
  const drawMin = Math.floor(Math.min(...allPoints)) - 0.5;
  const drawMax = Math.ceil(Math.max(...allPoints)) + 0.5;
  const drawRange = drawMax - drawMin;

  const toPct = (year) => `${(((year - drawMin) / drawRange) * 100).toFixed(3)}%`;
  const toWidthPct = (s, e) => `${(((e - s) / drawRange) * 100).toFixed(3)}%`;

  // Shared tooltip
  const tooltip = createElement("div", "ctv-tooltip");
  document.body.appendChild(tooltip);

  const showTip = (e, text) => {
    tooltip.textContent = text;
    tooltip.style.display = "block";
    moveTip(e);
  };
  const moveTip = (e) => {
    const x = e.clientX + 14;
    const y = e.clientY - 36;
    tooltip.style.left = Math.min(x, window.innerWidth - tooltip.offsetWidth - 10) + "px";
    tooltip.style.top = Math.max(y, 8) + "px";
  };
  const hideTip = () => {
    tooltip.style.display = "none";
  };
  const attachTip = (el, text) => {
    el.dataset.ctvTip = text; // used by mobile scrub hit-testing
    el.addEventListener("mouseenter", (e) => showTip(e, text));
    el.addEventListener("mousemove", moveTip);
    el.addEventListener("mouseleave", hideTip);
  };

  // Snap points for the scrub needle — collect every notable year position
  const snapYears = new Map(); // year(float) → label
  const addSnap = (year, label) => {
    if (!snapYears.has(year)) snapYears.set(year, label);
  };

  // Band row with overlaid project dots
  const makeBandRowWithDots = (groups, bandClass, dotClass) => {
    const row = createElement("div", "ctv-row");
    groups.forEach(({ band, projects }) => {
      const bandEl = createElement("div", `ctv-band ${bandClass}`);
      bandEl.style.left = toPct(band.start);
      bandEl.style.width = toWidthPct(band.start, band.end);
      attachTip(bandEl, band.label);
      addSnap(band.start, band.label);
      addSnap(band.end, band.label);
      row.appendChild(bandEl);
      const count = projects.length;
      projects.forEach((proj, i) => {
        const x = band.start + ((band.end - band.start) * (i + 1)) / (count + 1);
        const el = createElement("div", `ctv-dot ${dotClass} ctv-dot-link`);
        el.style.left = toPct(x);
        el.addEventListener("click", () => navigateToProject(proj.id));
        attachTip(el, proj.label);
        addSnap(x, proj.label);
        row.appendChild(el);
      });
    });
    return row;
  };

  const makeExperienceRow = (groups) =>
    makeBandRowWithDots(groups, "ctv-band-experience", "ctv-dot-work");

  const chart = createElement("div", "ctv-chart");

  if (educationBandGroups.length)
    chart.appendChild(
      makeBandRowWithDots(educationBandGroups, "ctv-band-education", "ctv-dot-academic"),
    );
  if (experienceBandGroups.length) chart.appendChild(makeExperienceRow(experienceBandGroups));

  // Personal/academic project dots — above the axis
  if (personalProjectDots.length) {
    const projRow = createElement("div", "ctv-row ctv-row-projects");
    personalProjectDots.forEach((dot) => {
      const classes = ["ctv-dot", "ctv-dot-personal", "ctv-dot-link"];
      const el = createElement("div", classes.join(" "));
      el.style.left = toPct(dot.mid);
      el.addEventListener("click", () => navigateToProject(dot.id));
      attachTip(el, dot.label);
      addSnap(dot.mid, dot.label);
      projRow.appendChild(el);
    });
    chart.appendChild(projRow);
  }

  // Year axis
  const axis = createElement("div", "ctv-axis");
  const tickStart = Math.ceil(drawMin + 0.5);
  const tickEnd = Math.floor(drawMax - 0.5);

  // Compute label step so labels never overlap on narrow viewports.
  // ~32px per label is enough for a 4-digit year at 0.625rem with spacing.
  const containerWidth = container.offsetWidth || window.innerWidth || 600;
  const maxLabels = Math.max(2, Math.floor(containerWidth / 32));
  const rawStep = (tickEnd - tickStart) / maxLabels;
  // Round up to the nearest "nice" step: 1, 2, 5, 10
  const niceStep = rawStep <= 1 ? 1 : rawStep <= 2 ? 2 : rawStep <= 5 ? 5 : 10;

  for (let y = tickStart; y <= tickEnd; y++) {
    const tick = createElement("div", "ctv-tick");
    tick.style.left = toPct(y);
    tick.appendChild(createElement("div", "ctv-tick-line"));
    if ((y - tickStart) % niceStep === 0) {
      tick.appendChild(createElement("div", "ctv-tick-label", String(y)));
    }
    axis.appendChild(tick);
  }
  chart.appendChild(axis);

  // ── Mobile scrub label + needle ────────────────────────────────────────────
  const scrubLabel = createElement("div", "ctv-scrub-label");
  const scrubText = createElement("span", "ctv-scrub-text", "\u00a0");
  scrubLabel.appendChild(scrubText);

  const needle = createElement("div", "ctv-scrub-needle");
  chart.appendChild(needle);

  // Sorted snap array for fast nearest-neighbour lookup
  const snapArr = Array.from(snapYears.entries()).sort((a, b) => a[0] - b[0]);
  const nearestSnap = (year) => {
    if (!snapArr.length) return null;
    let lo = 0,
      hi = snapArr.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (snapArr[mid][0] < year) lo = mid + 1;
      else hi = mid;
    }
    // compare lo and lo-1
    if (lo > 0 && Math.abs(snapArr[lo - 1][0] - year) <= Math.abs(snapArr[lo][0] - year))
      return snapArr[lo - 1];
    return snapArr[lo];
  };

  // Hold-and-scrub: horizontal drag = scrub, vertical drag = scroll passthrough
  {
    let touchStartX = 0,
      touchStartY = 0;
    let scrubbing = false,
      scrollDetected = false;

    const showScrub = (text) => {
      scrubText.textContent = text || "\u00a0";
      scrubLabel.classList.add("ctv-scrub-label--active");
    };
    const clearScrub = () => {
      scrubLabel.classList.remove("ctv-scrub-label--active");
      needle.classList.remove("ctv-scrub-needle--active");
      // reset text content after the fade-out transition finishes
      setTimeout(() => {
        if (!scrubLabel.classList.contains("ctv-scrub-label--active")) {
          scrubText.textContent = "\u00a0";
        }
      }, 220);
    };

    const updateNeedle = (clientX) => {
      const rect = chart.getBoundingClientRect();
      const fraction = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const year = drawMin + fraction * drawRange;
      const snap = nearestSnap(year);
      if (!snap) return null;
      needle.style.left = toPct(snap[0]);
      needle.classList.add("ctv-scrub-needle--active");
      return snap[1]; // label
    };

    chart.addEventListener(
      "touchstart",
      (e) => {
        const t = e.touches[0];
        touchStartX = t.clientX;
        touchStartY = t.clientY;
        scrubbing = false;
        scrollDetected = false;
      },
      { passive: true },
    );

    chart.addEventListener(
      "touchmove",
      (e) => {
        if (scrollDetected) return;
        const t = e.touches[0];
        const dx = Math.abs(t.clientX - touchStartX);
        const dy = Math.abs(t.clientY - touchStartY);

        if (!scrubbing) {
          // Commit to scrub on clear horizontal intent
          if (dx > 6 && dx >= dy) {
            scrubbing = true;
          } else if (dy > dx + 4) {
            // Clear vertical intent → let page scroll
            scrollDetected = true;
            clearScrub();
            return;
          } else {
            return; // too early to tell
          }
        }

        // Scrub is active — prevent page scroll, snap needle, update label
        e.preventDefault();
        const snapLabel = updateNeedle(t.clientX);
        if (snapLabel) {
          showScrub(snapLabel);
        } else {
          const hit = document.elementFromPoint(t.clientX, t.clientY);
          const tipEl = hit && hit.closest("[data-ctv-tip]");
          showScrub(tipEl ? tipEl.dataset.ctvTip : "\u00a0");
        }
      },
      { passive: false },
    );

    const onScrubEnd = () => {
      if (scrubbing) clearScrub();
      scrubbing = false;
      scrollDetected = false;
    };
    chart.addEventListener("touchend", onScrubEnd, { passive: true });
    chart.addEventListener("touchcancel", onScrubEnd, { passive: true });

    // ── One-time affordance hint (mobile only) ───────────────────────────────
    // Sweeps the needle through representative snap points so users discover
    // the scrub gesture before ever touching the chart.
    {
      let hintCancelled = false;
      // Any real touch immediately cancels the hint
      chart.addEventListener(
        "touchstart",
        () => {
          hintCancelled = true;
        },
        { once: true, passive: true },
      );

      if (window.matchMedia("(max-width: 640px)").matches && snapArr.length >= 2) {
        const pause = (ms) => new Promise((r) => setTimeout(r, ms));

        // Pick 3 representative snap points spread evenly across the timeline
        const pickCount = Math.min(3, snapArr.length);
        const hintPoints = Array.from(
          { length: pickCount },
          (_, i) => snapArr[Math.round((i * (snapArr.length - 1)) / Math.max(pickCount - 1, 1))],
        ).filter((p, i, arr) => i === 0 || arr[i - 1][0] !== p[0]);

        (async () => {
          await pause(1000);
          if (hintCancelled) return;

          // Step 1 – show the affordance prompt without the needle
          scrubText.textContent = "Swipe to explore \u2194";
          scrubLabel.classList.add("ctv-scrub-label--active");

          await pause(800);
          if (hintCancelled) {
            clearScrub();
            return;
          }

          // Step 2 – sweep needle through the representative snap points
          needle.classList.add("ctv-scrub-needle--hinting");
          for (const [year, label] of hintPoints) {
            if (hintCancelled) break;
            needle.style.left = toPct(year);
            needle.classList.add("ctv-scrub-needle--active");
            scrubText.textContent = label;
            await pause(700);
          }

          await pause(350);
          clearScrub();
          needle.classList.remove("ctv-scrub-needle--hinting");
        })();
      }
    }
    // ─────────────────────────────────────────────────────────────────────────
  }
  // ────────────────────────────────────────────────────────────────────────────

  // Re-render when the container width changes (e.g. phone rotation)
  if (typeof ResizeObserver !== "undefined") {
    let lastWidth = container.offsetWidth;
    const ro = new ResizeObserver(() => {
      const newWidth = container.offsetWidth;
      if (Math.abs(newWidth - lastWidth) > 20) {
        lastWidth = newWidth;
        ro.disconnect();
        renderCareerTimeline(data);
      }
    });
    ro.observe(container);
  }

  container.appendChild(chart);
  chart.appendChild(scrubLabel);
  window.addEventListener("scroll", hideTip, { passive: true });
};

// ---------------------------------------------------------------------------
// Section ordering
// ---------------------------------------------------------------------------

// Parse a resume date value into a JS Date. Handles:
//   null / undefined  → null  (caller treats as "ongoing" / today)
//   2024              → 2024-01-01
//   "2024-06"         → 2024-06-01
//   "2025-12-31"      → 2025-12-31
const parseResumeDate = (d) => {
  if (d == null) return null;
  const s = String(d).trim();
  if (/^\d{4}$/.test(s)) return new Date(`${s}-01-01`);
  if (/^\d{4}-\d{2}$/.test(s)) return new Date(`${s}-01`);
  return new Date(s);
};

// Returns the recency Date for a section (used when order_by === "date").
// Primary:   latest end_date (null end_date = ongoing = today)
// Secondary: latest start_date (used only as a tiebreaker)
const getSectionRecencyDate = (sectionKey, data) => {
  const today = new Date();

  const maxDate = (dates) => dates.reduce((best, d) => (!best || (d && d > best) ? d : best), null);

  switch (sectionKey) {
    case "experience": {
      const items = (data.experience || []).filter((e) => e.enabled !== false);
      // If any position is ongoing (end_date null), section is current
      const hasOngoing = items.some((e) => (e.positions || []).some((p) => p.end_date == null));
      if (hasOngoing) return today;
      const ends = items
        .flatMap((e) => (e.positions || []).map((p) => parseResumeDate(p.end_date)))
        .filter(Boolean);
      return (
        maxDate(ends) ||
        maxDate(
          items
            .flatMap((e) => (e.positions || []).map((p) => parseResumeDate(p.start_date)))
            .filter(Boolean),
        )
      );
    }
    case "projects": {
      const items = (data.projects || []).filter((p) => p.enabled !== false);
      const hasOngoing = items.some((p) => p.end_date == null);
      if (hasOngoing) return today;
      const ends = items.map((p) => parseResumeDate(p.end_date)).filter(Boolean);
      return (
        maxDate(ends) || maxDate(items.map((p) => parseResumeDate(p.start_date)).filter(Boolean))
      );
    }
    case "education": {
      const items = (data.education || []).filter((e) => e.enabled !== false);
      const ends = items.map((e) => parseResumeDate(e.end_date)).filter(Boolean);
      return (
        maxDate(ends) || maxDate(items.map((e) => parseResumeDate(e.start_date)).filter(Boolean))
      );
    }
    case "achievements": {
      const items = (data.achievements || []).filter((a) => a.enabled !== false);
      return maxDate(items.map((a) => parseResumeDate(a.date)).filter(Boolean));
    }
    case "skills":
    default:
      return null; // undated — goes last
  }
};

// Reorders (and optionally hides) the five main <section> elements inside
// #resume according to data.order_by.
const applyOrderBy = (data) => {
  const SECTION_IDS = {
    experience: "experience-section",
    projects: "projects-section",
    education: "education-section",
    achievements: "achievements-section",
    skills: "skills-section",
  };

  const orderBy = data.order_by;
  if (!orderBy) return; // no config — keep HTML document order

  let orderedKeys;

  if (orderBy === "date") {
    // Sort all sections by recency descending; undated sections go last.
    orderedKeys = Object.keys(SECTION_IDS).sort((a, b) => {
      const da = getSectionRecencyDate(a, data);
      const db = getSectionRecencyDate(b, data);
      if (!da && !db) return 0;
      if (!da) return 1;
      if (!db) return -1;
      return db - da;
    });
  } else if (Array.isArray(orderBy)) {
    // Explicit ordered list — only the listed sections are shown.
    orderedKeys = orderBy.map((k) => String(k).toLowerCase().trim()).filter((k) => SECTION_IDS[k]);

    // Hide any section not present in the list.
    Object.keys(SECTION_IDS).forEach((k) => {
      if (!orderedKeys.includes(k)) {
        const el = document.getElementById(SECTION_IDS[k]);
        if (el) el.style.display = "none";
      }
    });
  } else {
    return; // unrecognised value — do nothing
  }

  // Re-append sections in the desired order (moves nodes to end in sequence).
  const resume = document.getElementById("resume");
  orderedKeys.forEach((key) => {
    const el = document.getElementById(SECTION_IDS[key]);
    if (el) resume.appendChild(el);
  });
};

// ---------------------------------------------------------------------------

const renderResume = (data) => {
  renderHeader(data);

  const timelineContainer = document.getElementById("career-timeline-viz");
  if (data.timeline && data.timeline.enabled === false) {
    if (timelineContainer) timelineContainer.style.display = "none";
  } else {
    renderCareerTimeline(data);
  }

  // Check for enabled experiences
  const enabledExperiences =
    data.experience && data.experience.filter((exp) => exp.enabled !== false);
  if (enabledExperiences && enabledExperiences.length > 0) {
    renderExperience(data.experience);
  } else {
    document.getElementById("experience-section").style.display = "none";
  }

  // Check for enabled projects
  const enabledProjects = data.projects && data.projects.filter((p) => p.enabled !== false);
  if (enabledProjects && enabledProjects.length > 0) {
    const projectsTitle = data.projects_config && data.projects_config.title;
    if (projectsTitle) {
      document.querySelector("#projects-section h2").textContent = projectsTitle;
    }
    renderProjects(data.projects, data.projects_config);
  } else {
    document.getElementById("projects-section").style.display = "none";
  }

  // Check for enabled education
  const enabledEducation = data.education && data.education.filter((edu) => edu.enabled !== false);
  if (enabledEducation && enabledEducation.length > 0) {
    renderEducation(data.education);
  } else {
    document.getElementById("education-section").style.display = "none";
  }

  // Check for enabled achievements
  const enabledAchievements =
    data.achievements && data.achievements.filter((a) => a.enabled !== false);
  if (enabledAchievements && enabledAchievements.length > 0) {
    renderAchievements(data.achievements);
  } else {
    document.getElementById("achievements-section").style.display = "none";
  }

  if (data.skills && data.skills.length > 0) {
    renderSkills(data.skills);
  } else {
    document.getElementById("skills-section").style.display = "none";
  }

  applyOrderBy(data);
};

// Deep merge: plain objects merge recursively; arrays and scalars in `override`
// fully replace the base value. `null` in override means "keep base value", so
// authors can omit fields without explicitly nulling them. Missing keys in
// override always keep the base.
const isPlainObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);

const deepMerge = (base, override) => {
  if (override === undefined || override === null) return base;
  if (!isPlainObject(base) || !isPlainObject(override)) return override;
  const out = { ...base };
  for (const key of Object.keys(override)) {
    const ov = override[key];
    if (ov === null) continue; // keep base
    if (!(key in base)) {
      out[key] = ov;
    } else {
      out[key] = deepMerge(base[key], ov);
    }
  }
  return out;
};

// Parse `#/<slug>` from the URL hash. Slug is restricted to safe chars to
// prevent path traversal when constructing the override URL.
const getOverrideName = () => {
  const hash = window.location.hash || "";
  const match = hash.match(/^#\/([A-Za-z0-9_-]+)\/?$/);
  return match ? match[1] : null;
};

const fetchYaml = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const err = new Error(`Failed to fetch ${url}: ${response.status}`);
    err.status = response.status;
    throw err;
  }
  return jsyaml.load(await response.text());
};

let hasShownPrintTip = false;
// Snapshot of the initial #resume markup, captured before the first render.
// Restored before each render so route changes start from a clean slate
// (otherwise sections hidden via display:none, mutated <h2> titles, and
// containers that append rather than replace would accumulate state).
let resumeInitialHtml = null;

// Map of override-`disable:` section name → function returning the
// identifying string for an entry. Used by `applyDisable` to flip
// `enabled: false` on entries listed by name in an override file.
const DISABLE_KEY_FNS = {
  projects: (e) => e && e.name,
  experience: (e) => e && e.company,
  achievements: (e) => e && e.title,
  skills: (e) => e && e.category,
  // Composite key — both base education entries are at UTD, so degree alone
  // also collides; use "Institution — Degree".
  education: (e) => e && `${e.institution} — ${e.degree}`,
};

// Apply the override `disable:` directive in place. For each section listed,
// find entries whose identifying field matches and set `enabled: false`
// (existing render filters already drop disabled entries). Unknown sections
// and unmatched names log a warning instead of failing — typos shouldn't
// silently break a resume, but they shouldn't blow up either. Strips
// `data.disable` so it never reaches a render function.
const applyDisable = (data) => {
  const disable = data && data.disable;
  if (!disable || !isPlainObject(disable)) return;

  for (const [section, names] of Object.entries(disable)) {
    const keyFn = DISABLE_KEY_FNS[section];
    if (!keyFn) {
      console.warn(`disable: unknown section "${section}"`);
      continue;
    }
    if (!Array.isArray(names)) {
      console.warn(`disable.${section}: expected an array of names`);
      continue;
    }
    const entries = data[section];
    if (!Array.isArray(entries)) {
      console.warn(`disable.${section}: no array found in resume data`);
      continue;
    }
    for (const name of names) {
      const matches = entries.filter((e) => keyFn(e) === name);
      if (matches.length === 0) {
        console.warn(`disable.${section}: no entry matched "${name}"`);
        continue;
      }
      matches.forEach((e) => {
        e.enabled = false;
      });
    }
  }

  delete data.disable;
};

// Load and parse YAML, optionally merging a per-route override.
const loadResume = async () => {
  try {
    const resumeEl = document.getElementById("resume");
    if (resumeInitialHtml === null) {
      resumeInitialHtml = resumeEl.innerHTML;
    } else {
      resumeEl.innerHTML = resumeInitialHtml;
    }

    const base = await fetchYaml("resume.yaml");
    let data = base;

    const overrideName = getOverrideName();
    if (overrideName) {
      try {
        const override = await fetchYaml(`resumes/${overrideName}.yaml`);
        data = deepMerge(base, override);
      } catch (overrideError) {
        console.warn(`Override "${overrideName}" failed to load:`, overrideError);
        notify(`Resume variant "${overrideName}" not found — showing default.`, 4000);
      }
    }

    applyDisable(data);
    renderResume(data);

    if (!hasShownPrintTip) {
      hasShownPrintTip = true;
      notify("This page prints nicely. Expand the sections you want and give it a try!", 5000, () =>
        window.print(),
      );
    }
  } catch (error) {
    console.error("Error loading resume:", error);
    document.getElementById("resume").innerHTML =
      '<div class="loading">Error loading resume data. Please check the console for details.</div>';
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", loadResume);
window.addEventListener("hashchange", loadResume);
