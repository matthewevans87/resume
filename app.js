// Utility Functions
const notify = (message, timeout = 3000, onClick = null) => {
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

  const socialIcons = { linkedin: "work", x: "chat", github: "code" };
  if (personal.social) {
    Object.entries(personal.social).forEach(([platform, info]) => {
      if (info.enabled === false) return;
      contactItems.push({
        text: platform.charAt(0).toUpperCase() + platform.slice(1),
        printText: info.print_enabled === false ? null : info.handle,
        printHidden: info.print_enabled === false,
        icon: socialIcons[platform] || "link",
        link: info.url,
      });
    });
  }

  contactItems.forEach((item) => {
    // Skip if no data
    if (!item.text && !item.link) return;
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

    // Add icon
    const icon = createElement("span", "material-symbols-outlined");
    icon.textContent = item.icon;
    wrapper.appendChild(icon);

    // Add text (social items get separate screen/print spans)
    if (item.printText) {
      const screenSpan = createElement("span", "contact-screen-text", item.text);
      const printSpan = createElement("span", "contact-print-text", item.printText);
      wrapper.appendChild(screenSpan);
      wrapper.appendChild(printSpan);
    } else {
      const textSpan = createElement("span", "", item.text);
      wrapper.appendChild(textSpan);
    }

    contactInfo.appendChild(wrapper);
  });

  // Mission Statement
  document.getElementById("mission-statement").textContent = data.mission_statement;

  const taglineEl = document.getElementById("tagline");
  if (data.tagline) {
    taglineEl.textContent = data.tagline;
    taglineEl.style.display = "";
  } else {
    taglineEl.style.display = "none";
  }
};

const renderExperience = (experiences) => {
  const timeline = document.getElementById("experience-timeline");
  timeline.innerHTML = "";

  // Companies to collapse by default (Cisco and prior)
  const collapsedCompanies = ["Cisco Systems, Inc.", "Clickmotive, Inc.", "Ericsson, Inc."];

  // Filter enabled companies
  const enabledExperiences = experiences.filter((exp) => exp.enabled !== false);

  enabledExperiences.forEach((exp) => {
    const expItem = createElement("div", "experience-item");
    const isCollapsed = collapsedCompanies.includes(exp.company);

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
          const li = createElement("li", "", highlight);
          highlights.appendChild(li);
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

          const projectsContainer = createElement("div", "position-projects-container collapsed");

          enabledProjects.forEach((project) => {
            const projectItem = createElement("div", "company-project-item");
            projectItem.id = "proj-" + slugify(project.name);

            // Project Header
            const projHeader = createElement("div", "project-header");
            const projNameWrapper = createElement("div", "project-name-wrapper");
            const projName = createElement("div", "project-name", project.name);
            projNameWrapper.appendChild(projName);
            if (project.url) {
              const linkBtn = document.createElement("a");
              linkBtn.className = "project-link-btn";
              linkBtn.href = project.url;
              linkBtn.target = "_blank";
              linkBtn.rel = "noopener noreferrer";
              linkBtn.setAttribute("aria-label", "View source");
              linkBtn.appendChild(createElement("span", "material-symbols-outlined", "code"));
              projNameWrapper.appendChild(linkBtn);
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
                const li = createElement("li", "", highlight);
                highlights.appendChild(li);
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

const renderProjects = (projects) => {
  const projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";

  // Filter enabled projects and group by type
  const enabledProjects = projects.filter((p) => p.enabled !== false);
  const personalProjects = enabledProjects.filter((p) => p.type === "personal");
  const academicProjects = enabledProjects.filter((p) => p.type === "academic");

  const renderProjectGroup = (groupProjects, title) => {
    if (groupProjects.length === 0) return;

    const groupHeader = createElement("h3", "project-group-header", title);
    projectsList.appendChild(groupHeader);

    groupProjects.forEach((project) => {
      const projectItem = createElement("div", "project-item");
      projectItem.id = "proj-" + slugify(project.name);

      // Project Header
      const header = createElement("div", "project-header");

      const nameWrapper = createElement("div", "project-name-wrapper");
      const name = createElement("div", "project-name", project.name);
      nameWrapper.appendChild(name);
      if (project.url) {
        const linkBtn = document.createElement("a");
        linkBtn.className = "project-link-btn";
        linkBtn.href = project.url;
        linkBtn.target = "_blank";
        linkBtn.rel = "noopener noreferrer";
        linkBtn.setAttribute("aria-label", "View source");
        linkBtn.appendChild(createElement("span", "material-symbols-outlined", "code"));
        nameWrapper.appendChild(linkBtn);
      }

      const dateRange = createElement(
        "div",
        "date-range",
        formatDateRange(project.start_date, project.end_date),
      );

      header.appendChild(nameWrapper);
      header.appendChild(dateRange);
      projectItem.appendChild(header);

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
          const li = createElement("li", "", highlight);
          highlights.appendChild(li);
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

      projectsList.appendChild(projectItem);
    });
  };

  renderProjectGroup(academicProjects, "Academic Projects");
  renderProjectGroup(personalProjects, "Personal Projects");
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

      const coursesDiv = createElement("div", "technologies");
      edu.courses.forEach((course) => {
        const tag = createElement("span", "tech-tag", course);
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
    el.addEventListener("mouseenter", (e) => showTip(e, text));
    el.addEventListener("mousemove", moveTip);
    el.addEventListener("mouseleave", hideTip);
  };

  // Band row with overlaid project dots
  const makeBandRowWithDots = (groups, bandClass, dotClass) => {
    const row = createElement("div", "ctv-row");
    groups.forEach(({ band, projects }) => {
      const bandEl = createElement("div", `ctv-band ${bandClass}`);
      bandEl.style.left = toPct(band.start);
      bandEl.style.width = toWidthPct(band.start, band.end);
      attachTip(bandEl, band.label);
      row.appendChild(bandEl);
      const count = projects.length;
      projects.forEach((proj, i) => {
        const x = band.start + ((band.end - band.start) * (i + 1)) / (count + 1);
        const el = createElement("div", `ctv-dot ${dotClass} ctv-dot-link`);
        el.style.left = toPct(x);
        el.addEventListener("click", () => navigateToProject(proj.id));
        attachTip(el, proj.label);
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
      projRow.appendChild(el);
    });
    chart.appendChild(projRow);
  }

  // Year axis
  const axis = createElement("div", "ctv-axis");
  const tickStart = Math.ceil(drawMin + 0.5);
  const tickEnd = Math.floor(drawMax - 0.5);
  for (let y = tickStart; y <= tickEnd; y++) {
    const tick = createElement("div", "ctv-tick");
    tick.style.left = toPct(y);
    tick.appendChild(createElement("div", "ctv-tick-line"));
    tick.appendChild(createElement("div", "ctv-tick-label", String(y)));
    axis.appendChild(tick);
  }
  chart.appendChild(axis);

  container.appendChild(chart);
  window.addEventListener("scroll", hideTip, { passive: true });
};

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
    renderProjects(data.projects);
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
};

// Load and parse YAML
const loadResume = async () => {
  try {
    const response = await fetch("resume.yaml");
    const yamlText = await response.text();
    const data = jsyaml.load(yamlText);
    renderResume(data);
    notify("This page prints nicely. Give it a try!", 5000, () => window.print());
  } catch (error) {
    console.error("Error loading resume:", error);
    document.getElementById("resume").innerHTML =
      '<div class="loading">Error loading resume data. Please check the console for details.</div>';
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", loadResume);
