(function () {
  "use strict";

  const state = {
    search: "",
    activeCategory: "all",
    selectedId: null
  };

  const elements = {
    categoryFilters: document.getElementById("categoryFilters"),
    locationList: document.getElementById("locationList"),
    hotspotLayer: document.getElementById("hotspotLayer"),
    detailsContent: document.getElementById("detailsContent"),
    resultCount: document.getElementById("resultCount"),
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    showAllBtn: document.getElementById("showAllBtn"),
    resetBtn: document.getElementById("resetBtn")
  };

  function init() {
    bindEvents();
    renderCategoryFilters();

    if (mapLocations.length > 0) {
      state.selectedId = mapLocations[0].id;
    }

    render();
  }

  function bindEvents() {
    elements.searchInput.addEventListener("input", function (event) {
      state.search = event.target.value.trim().toLowerCase();
      render();
    });

    elements.clearSearchBtn.addEventListener("click", function () {
      state.search = "";
      elements.searchInput.value = "";
      render();
    });

    elements.showAllBtn.addEventListener("click", function () {
      state.activeCategory = "all";
      render();
    });

    elements.resetBtn.addEventListener("click", function () {
      state.search = "";
      state.activeCategory = "all";
      elements.searchInput.value = "";
      state.selectedId = mapLocations.length ? mapLocations[0].id : null;
      render();
    });
  }

  function render() {
    const filteredLocations = getFilteredLocations();

    if (
      state.selectedId &&
      !filteredLocations.some(function (location) {
        return location.id === state.selectedId;
      })
    ) {
      state.selectedId = filteredLocations.length ? filteredLocations[0].id : null;
    }

    renderCategoryFilters();
    renderLocationList(filteredLocations);
    renderHotspots(filteredLocations);
    renderDetailsPanel(filteredLocations);
    renderResultCount(filteredLocations);
  }

  function getFilteredLocations() {
    return mapLocations.filter(function (location) {
      const matchesCategory =
        state.activeCategory === "all" ||
        location.category === state.activeCategory;

      const combinedText = [
        location.name,
        location.category,
        location.type,
        location.status,
        location.description,
        (location.tags || []).join(" "),
        (location.notes || []).join(" ")
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !state.search || combinedText.includes(state.search);

      return matchesCategory && matchesSearch;
    });
  }

  function renderCategoryFilters() {
    const categories = [{ id: "all", label: "All" }].concat(mapCategories);

    elements.categoryFilters.innerHTML = categories
      .map(function (category) {
        const isActive = state.activeCategory === category.id;
        return `
          <button
            type="button"
            class="filter-chip ${isActive ? "active" : ""}"
            data-category="${category.id}"
          >
            ${category.label}
          </button>
        `;
      })
      .join("");

    const filterButtons = elements.categoryFilters.querySelectorAll("[data-category]");

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        state.activeCategory = button.dataset.category;
        render();
      });
    });
  }

  function renderLocationList(locations) {
    if (!locations.length) {
      elements.locationList.innerHTML = `
        <div class="empty-state">
          No locations match your current search or filter.
        </div>
      `;
      return;
    }

    elements.locationList.innerHTML = locations
      .map(function (location) {
        const isActive = state.selectedId === location.id;
        return `
          <button
            type="button"
            class="location-item ${isActive ? "active" : ""}"
            data-location-id="${location.id}"
          >
            <p class="location-title">${escapeHtml(location.name)}</p>
            <p class="location-meta">
              ${escapeHtml(location.type)} · ${escapeHtml(formatCategory(location.category))}
            </p>
          </button>
        `;
      })
      .join("");

    const locationButtons =
      elements.locationList.querySelectorAll("[data-location-id]");

    locationButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        state.selectedId = button.dataset.locationId;
        render();
      });
    });
  }

  function renderHotspots(locations) {
    elements.hotspotLayer.innerHTML = locations
      .map(function (location) {
        const isActive = state.selectedId === location.id;
        return `
          <button
            type="button"
            class="hotspot hotspot-${location.category} ${isActive ? "active" : ""}"
            data-location-id="${location.id}"
            style="left: ${location.x}%; top: ${location.y}%"
            aria-label="${escapeHtml(location.name)}"
            title="${escapeHtml(location.name)}"
          >
            <span class="hotspot-label">${escapeHtml(location.name)}</span>
          </button>
        `;
      })
      .join("");

    const hotspotButtons =
      elements.hotspotLayer.querySelectorAll("[data-location-id]");

    hotspotButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        state.selectedId = button.dataset.locationId;
        render();
      });
    });
  }

  function renderDetailsPanel(locations) {
    if (!locations.length || !state.selectedId) {
      elements.detailsContent.innerHTML = `
        <p class="placeholder-title">No location selected</p>
        <p class="placeholder-text">
          Try changing your filters or search to see available locations.
        </p>
      `;
      return;
    }

    const selectedLocation = locations.find(function (location) {
      return location.id === state.selectedId;
    });

    if (!selectedLocation) {
      elements.detailsContent.innerHTML = `
        <p class="placeholder-title">No location selected</p>
        <p class="placeholder-text">
          Select a visible hotspot or location from the list.
        </p>
      `;
      return;
    }

    elements.detailsContent.innerHTML = `
      <h2 class="details-title">${escapeHtml(selectedLocation.name)}</h2>

      <div class="details-badges">
        <span class="badge category-${selectedLocation.category}">
          ${escapeHtml(formatCategory(selectedLocation.category))}
        </span>
        <span class="badge">
          ${escapeHtml(selectedLocation.type)}
        </span>
        <span class="badge">
          ${escapeHtml(selectedLocation.status)}
        </span>
      </div>

      <p class="description">${escapeHtml(selectedLocation.description)}</p>

      <div>
        <h3>Notes</h3>
        ${renderNotes(selectedLocation.notes || [])}
      </div>

      <div>
        <h3>Tags</h3>
        ${renderTags(selectedLocation.tags || [])}
      </div>
    `;
  }

  function renderNotes(notes) {
    if (!notes.length) {
      return `<p class="muted-text">No notes added yet.</p>`;
    }

    return `
      <ul class="notes-list">
        ${notes
          .map(function (note) {
            return `<li>${escapeHtml(note)}</li>`;
          })
          .join("")}
      </ul>
    `;
  }

  function renderTags(tags) {
    if (!tags.length) {
      return `<p class="muted-text">No tags added yet.</p>`;
    }

    return `
      <div class="tags-inline">
        ${tags
          .map(function (tag) {
            return `<span class="tag-pill">${escapeHtml(tag)}</span>`;
          })
          .join("")}
      </div>
    `;
  }

  function renderResultCount(locations) {
    const count = locations.length;
    elements.resultCount.textContent = count === 1 ? "1 result" : count + " results";
  }

  function formatCategory(categoryId) {
    const match = mapCategories.find(function (category) {
      return category.id === categoryId;
    });

    return match ? match.label : categoryId;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  init();
})();