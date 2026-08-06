// Firearms Catalog Database
const DEFAULT_FIREARMS_DATABASE = [
    {
        id: "glock19",
        name: "GLOCK 19 GEN 5",
        category: "handgun",
        origin: "Austria",
        manufacturer: "Glock Ges.m.b.H.",
        basePrice: 539,
        baseWeight: 1.88, // lbs
        caliber: "9x19mm Parabellum",
        action: "Safe Action (Striker Fired)",
        barrelLength: "4.02 inches",
        capacity: "15 Rounds (Standard)",
        description: "The global benchmark for compact striker-fired handguns. Highly regarded for its reliability, simple manual of arms, and massive aftermarket accessory ecosystem.",
        resources: [
            { label: "Glock Official site", url: "https://us.glock.com/en/pistols/g19" },
            { label: "IMFDB Glock page", url: "https://www.imfdb.org/wiki/Glock" }
        ],
        accessories: {
            optics: [
                { name: "Trijicon RMR Type 2", price: 499, weight: 0.07, selected: false },
                { name: "Holosun 507C X2", price: 309, weight: 0.09, selected: false }
            ],
            muzzle: [
                { name: "Agency Arms Compensator", price: 100, weight: 0.05, selected: false }
            ],
            illumination: [
                { name: "Streamlight TLR-7A", price: 140, weight: 0.15, selected: false },
                { name: "Surefire X300 Ultra", price: 320, weight: 0.25, selected: false }
            ]
        }
    },
    {
        id: "sigp320",
        name: "SIG SAUER P320 M18",
        category: "handgun",
        origin: "United States / Germany",
        manufacturer: "Sig Sauer",
        basePrice: 679,
        baseWeight: 1.63, // lbs
        caliber: "9x19mm Parabellum",
        action: "Striker Fired",
        barrelLength: "3.9 inches",
        capacity: "17 / 21 Rounds",
        description: "The official compact sidearm of the US Armed Forces. Features an innovative modular chassis system allowing the serialised fire control unit to swap grips and slide assemblies easily.",
        resources: [
            { label: "Sig Sauer Official", url: "https://www.sigsauer.com/" },
            { label: "Wikipedia: Sig Sauer P320", url: "https://en.wikipedia.org/wiki/SIG_Sauer_P320" }
        ],
        accessories: {
            optics: [
                { name: "Sig Sauer Romeo1 Pro", price: 399, weight: 0.06, selected: false },
                { name: "Leupold DeltaPoint Pro", price: 449, weight: 0.12, selected: false }
            ],
            illumination: [
                { name: "Streamlight TLR-1 HL", price: 155, weight: 0.26, selected: false }
            ]
        }
    },
    {
        id: "colt1911",
        name: "COLT 1911 CLASSIC",
        category: "handgun",
        origin: "United States",
        manufacturer: "Colt's Manufacturing Company",
        basePrice: 899,
        baseWeight: 2.44, // lbs
        caliber: ".45 ACP",
        action: "Single-Action Semi-Automatic",
        barrelLength: "5.0 inches",
        capacity: "7+1 Rounds",
        description: "Designed by John Moses Browning, this legendary single-action pistol served as the standard sidearm of the United States Armed Forces for over seven decades.",
        resources: [
            { label: "Colt's Manufacturing", url: "https://www.colt.com/" },
            { label: "IMFDB M1911 series", url: "https://www.imfdb.org/wiki/M1911_pistol_series" }
        ],
        accessories: {
            grips: [
                { name: "VZ G10 Tactical Grips", price: 65, weight: 0.08, selected: false },
                { name: "Pachmayr Signature Grips", price: 38, weight: 0.15, selected: false }
            ]
        }
    },
    {
        id: "smithwesson686",
        name: "SMITH & WESSON MODEL 686",
        category: "handgun",
        subcategory: "revolver",
        origin: "United States",
        manufacturer: "Smith & Wesson",
        basePrice: 949,
        baseWeight: 2.56,
        caliber: ".357 Magnum",
        action: "Double Action / Single Action",
        ignition: "Centerfire",
        operation: "Revolver Cylinder",
        barrelLength: "4.0 inches",
        capacity: "6 Rounds",
        description: "An iconic L-frame revolver chambered in .357 Magnum. Renowned for its robust stainless steel construction, smooth double-action trigger, and superb accuracy.",
        resources: [
            { label: "Smith & Wesson Model 686 Wikipedia", url: "https://en.wikipedia.org/wiki/Smith_%26_Wesson_Model_686" }
        ],
        accessories: {
            grips: [
                { name: "Hogue Rubber Monogrip", price: 28, weight: 0.12, selected: false },
                { name: "Altamont Wood Target Grips", price: 75, weight: 0.18, selected: false }
            ]
        }
    },
    {
        id: "ddm4v7",
        name: "DANIEL DEFENSE DDM4V7",
        category: "rifle",
        origin: "United States",
        manufacturer: "Daniel Defense",
        basePrice: 1978,
        baseWeight: 6.20, // lbs
        caliber: "5.56x45mm NATO / .223 Rem",
        action: "Direct Impingement Semi-Automatic",
        barrelLength: "16.0 inches",
        capacity: "30 Rounds",
        description: "A premium AR-15 platform rifle featuring a cold hammer-forged barrel, free-floating M-LOK handguard, and strict quality control standards for professional users.",
        resources: [
            { label: "Daniel Defense DDM4V7 Official", url: "https://danieldefense.com/ddm4-v7.html" },
            { label: "Pew Science Suppressor Metrics", url: "https://pewscience.com/" }
        ],
        accessories: {
            optics: [
                { name: "EOTech EXPS3 Holographic", price: 725, weight: 0.70, selected: false },
                { name: "Vortex Razor Gen II LPVO 1-6x", price: 1399, weight: 1.34, selected: false }
            ],
            muzzle: [
                { name: "Surefire SOCOM556-RC2 Suppressor", price: 1099, weight: 1.06, selected: false }
            ],
            illumination: [
                { name: "Cloud Defensive REIN 3.0", price: 399, weight: 0.45, selected: false }
            ],
            grips: [
                { name: "Magpul RVG Vertical Grip", price: 27, weight: 0.14, selected: false }
            ]
        }
    },
    {
        id: "rem700",
        name: "REMINGTON 700 SPS TACTICAL",
        category: "rifle",
        origin: "United States",
        manufacturer: "Remington Arms",
        basePrice: 849,
        baseWeight: 7.50, // lbs
        caliber: ".308 Winchester / 6.5 Creedmoor",
        action: "Bolt Action",
        barrelLength: "20.0 inches",
        capacity: "4 Rounds (Internal Magazine)",
        description: "One of the most popular bolt-action receiver platforms in history. Highly customisable and extensively used as the base configuration for military sniper systems.",
        resources: [
            { label: "Remington Official", url: "https://www.remington.com/" },
            { label: "IMFDB Remington 700 page", url: "https://www.imfdb.org/wiki/Remington_Model_700" }
        ],
        accessories: {
            optics: [
                { name: "Nightforce NXS 5.5-22x56", price: 1950, weight: 2.00, selected: false },
                { name: "Vortex Viper PST Gen II 5-25x", price: 999, weight: 1.95, selected: false }
            ],
            bipod: [
                { name: "Harris Bipod HBRMS", price: 120, weight: 0.81, selected: false }
            ],
            muzzle: [
                { name: "Surefire SOCOM762 Suppressor", price: 1199, weight: 1.20, selected: false }
            ]
        }
    },
    {
        id: "ak47",
        name: "ZASTAVA ARMS ZPAP M70 (AK)",
        category: "rifle",
        origin: "Serbia / Soviet Union",
        manufacturer: "Zastava Arms",
        basePrice: 999,
        baseWeight: 7.90, // lbs
        caliber: "7.62x39mm",
        action: "Long-Stroke Gas Piston Semi-Auto",
        barrelLength: "16.3 inches",
        capacity: "30 Rounds",
        description: "A semi-automatic Kalashnikov variant manufactured with a bulged trunnion and a thick receiver. Legendary reliability with chambering in the hard-hitting 7.62x39mm caliber.",
        resources: [
            { label: "Zastava Arms USA", url: "https://zastavaarmsusa.com/" },
            { label: "IMFDB Kalashnikov page", url: "https://www.imfdb.org/wiki/Kalashnikov_rifle_series" }
        ],
        accessories: {
            optics: [
                { name: "Primary Arms SLx 3x Microprism", price: 319, weight: 0.50, selected: false }
            ],
            mounts: [
                { name: "Midwest Industries Scope Mount", price: 149, weight: 0.38, selected: false }
            ]
        }
    },
    {
        id: "mossberg590",
        name: "MOSSBERG 590A1 TACTICAL",
        category: "shotgun",
        origin: "United States",
        manufacturer: "O.F. Mossberg & Sons",
        basePrice: 729,
        baseWeight: 7.00, // lbs
        caliber: "12 Gauge",
        action: "Pump Action",
        barrelLength: "18.5 inches",
        capacity: "6+1 Rounds",
        description: "Built to Mil-Spec standards. Features a heavy-walled barrel, metal trigger guard and safety, dual extractors, and twin action bars for unwavering tactical reliability.",
        resources: [
            { label: "Mossberg Official site", url: "https://www.mossberg.com/" },
            { label: "IMFDB Mossberg 500 series", url: "https://www.imfdb.org/wiki/Mossberg_500_rifle_series" }
        ],
        accessories: {
            grips: [
                { name: "Magpul SGA Stock (Shotgun)", price: 109, weight: 0.40, selected: false }
            ],
            illumination: [
                { name: "Surefire DSF-500/590 Forend Light", price: 399, weight: 0.60, selected: false }
            ],
            carrier: [
                { name: "Mesa Tactical SideSaddle (6 Shell)", price: 85, weight: 0.30, selected: false }
            ]
        }
    },
    {
        id: "benellim4",
        name: "BENELLI M4 TACTICAL",
        category: "shotgun",
        origin: "Italy",
        manufacturer: "Benelli Armi SpA",
        basePrice: 2099,
        baseWeight: 7.80, // lbs
        caliber: "12 Gauge",
        action: "ARGO (Auto-Regulating Gas-Operated) Semi-Auto",
        barrelLength: "18.5 inches",
        capacity: "5+1 Rounds (Upgradeable to 7)",
        description: "The primary combat shotgun of the US Marine Corps. Employs the Auto-Regulating Gas-Operated (ARGO) dual-piston system, designed to handle varied combat loads cleanly and reliably.",
        resources: [
            { label: "Benelli USA Official", url: "https://www.benelliusa.com/" },
            { label: "Wikipedia: Benelli M4", url: "https://en.wikipedia.org/wiki/Benelli_M4" }
        ],
        accessories: {
            optics: [
                { name: "Trijicon SRO", price: 569, weight: 0.10, selected: false }
            ],
            magTube: [
                { name: "Freedom Fighter 7rd Mag Tube", price: 80, weight: 0.20, selected: false }
            ],
            illumination: [
                { name: "IOM mount with Streamlight TLR-1", price: 210, weight: 0.35, selected: false }
            ]
        }
    },
    {
        id: "czscorpion",
        name: "CZ SCORPION EVO 3 S1",
        category: "pcc",
        origin: "Czech Republic",
        manufacturer: "Česká zbrojovka",
        basePrice: 949,
        baseWeight: 5.00, // lbs
        caliber: "9x19mm Parabellum",
        action: "Blowback Semi-Automatic",
        barrelLength: "7.72 inches",
        capacity: "20 / 30 Rounds",
        description: "A compact pistol-caliber carbine (PCC) derived from the CZ military submachine gun design. Renowned for its light weight, ergonomics, and popularity as an SBR host.",
        resources: [
            { label: "CZ-USA Scorpion series", url: "https://cz-usa.com/" },
            { label: "IMFDB CZ Scorpion page", url: "https://www.imfdb.org/wiki/CZ_Scorpion_Evo_3" }
        ],
        accessories: {
            optics: [
                { name: "Aimpoint Micro T-2", price: 870, weight: 0.19, selected: false },
                { name: "Holosun HS510C", price: 309, weight: 0.49, selected: false }
            ],
            stocks: [
                { name: "SB Tactical EVO Folding Brace", price: 199, weight: 0.60, selected: false }
            ],
            muzzle: [
                { name: "Dead Air Wolfman Suppressor", price: 899, weight: 0.75, selected: false }
            ]
        }
    },
    {
        id: "sigmpx",
        name: "SIG SAUER MPX K",
        category: "pcc",
        origin: "United States / Germany",
        manufacturer: "Sig Sauer",
        basePrice: 2199,
        baseWeight: 4.60, // lbs
        caliber: "9x19mm Parabellum",
        action: "Short-Stroke Gas Piston Bolt System",
        barrelLength: "4.5 inches",
        capacity: "30 Rounds",
        description: "A state-of-the-art closed-bolt submachine gun / PCC configuration utilizing Sig's signature short-stroke gas piston system to significantly reduce recoil and blowback.",
        resources: [
            { label: "Sig MPX K official listing", url: "https://www.sigsauer.com/sig-mpx-k.html" },
            { label: "IMFDB Sig MPX entry", url: "https://www.imfdb.org/wiki/SIG-Sauer_MPX" }
        ],
        accessories: {
            optics: [
                { name: "Sig Sauer Romeo4XT-Pro", price: 599, weight: 0.40, selected: false }
            ],
            muzzle: [
                { name: "CGS Mod9 Suppressor", price: 685, weight: 0.62, selected: false }
            ]
        }
    }
];

let FIREARMS_DATABASE = JSON.parse(localStorage.getItem("armory_db_firearms")) || DEFAULT_FIREARMS_DATABASE;

// Sync any missing default platforms from the static code database
let databaseUpdated = false;
DEFAULT_FIREARMS_DATABASE.forEach(defaultGun => {
    if (!FIREARMS_DATABASE.some(gun => gun.id === defaultGun.id)) {
        FIREARMS_DATABASE.push(defaultGun);
        databaseUpdated = true;
    }
});
if (databaseUpdated) {
    localStorage.setItem("armory_db_firearms", JSON.stringify(FIREARMS_DATABASE));
}

function saveFirearmsDatabase() {
    localStorage.setItem("armory_db_firearms", JSON.stringify(FIREARMS_DATABASE));
}

// App State
let activeFirearm = null;
let currentFilters = {
    search: "",
    category: "all",
    sort: "name-asc"
};
let activeSubcategory = "all";

// DOM Elements
const catalogGrid = document.getElementById("catalog-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort-select");
const statsCount = document.getElementById("stats-count");

// Modal DOM Elements
const detailsModal = document.getElementById("details-modal");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalCategoryBadge = document.getElementById("modal-category-badge");
const specCaliber = document.getElementById("spec-caliber");
const specAction = document.getElementById("spec-action");
const specIgnition = document.getElementById("spec-ignition");
const specOperation = document.getElementById("spec-operation");
const specBarrel = document.getElementById("spec-barrel");
const specCapacity = document.getElementById("spec-capacity");
const specWeight = document.getElementById("spec-weight");
const specOrigin = document.getElementById("spec-origin");
const modalLinks = document.getElementById("modal-links");
const accessoryGroupsContainer = document.getElementById("accessory-groups-container");

// Builder Price/Weight elements
const baseWeightVal = document.getElementById("base-weight-val");
const accWeightVal = document.getElementById("acc-weight-val");
const totalWeightVal = document.getElementById("total-weight-val");
const basePriceVal = document.getElementById("base-price-val");
const accPriceVal = document.getElementById("acc-price-val");
const totalPriceVal = document.getElementById("total-price-val");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    // Initialize theme
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }

    statsCount.textContent = FIREARMS_DATABASE.length;
    renderCatalog();
    setupEventListeners();
});

// Setup DOM Event Listeners
function setupEventListeners() {
    // Theme Switcher Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    // Search input
    searchInput.addEventListener("input", (e) => {
        currentFilters.search = e.target.value.toLowerCase().trim();
        renderCatalog();
    });

    // Category filters
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilters.category = btn.getAttribute("data-category");

            // Show handgun subcategory toolbar if handgun is active
            const handgunSubToolbar = document.getElementById("handgun-subcategory-toolbar");
            if (handgunSubToolbar) {
                if (currentFilters.category === "handgun") {
                    handgunSubToolbar.style.display = "block";
                } else {
                    handgunSubToolbar.style.display = "none";
                }
            }
            // Reset handgun subcategory filter
            activeSubcategory = "all";
            const subBtns = document.querySelectorAll(".subfilter-btn");
            subBtns.forEach(b => {
                if (b.getAttribute("data-subcategory") === "all") {
                    b.classList.add("active");
                } else {
                    b.classList.remove("active");
                }
            });

            renderCatalog();
        });
    });

    // Handgun subcategory filters
    const subBtns = document.querySelectorAll(".subfilter-btn");
    subBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            subBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeSubcategory = btn.getAttribute("data-subcategory");
            renderCatalog();
        });
    });

    // Sorting select
    sortSelect.addEventListener("change", (e) => {
        currentFilters.sort = e.target.value;
        renderCatalog();
    });
}

// Render catalog based on filters
function renderCatalog() {
    let filteredList = FIREARMS_DATABASE.filter(gun => {
        // Search filter
        const matchesSearch = gun.name.toLowerCase().includes(currentFilters.search) || 
                              gun.caliber.toLowerCase().includes(currentFilters.search) ||
                              gun.origin.toLowerCase().includes(currentFilters.search) ||
                              gun.manufacturer.toLowerCase().includes(currentFilters.search);
        
        // Category filter
        const matchesCategory = currentFilters.category === "all" || 
                                (currentFilters.category === "contributions" 
                                    ? (gun.owner === (currentUser ? currentUser.username : "")) 
                                    : (gun.category === currentFilters.category));
        
        // Subcategory filter (handgun pistols vs revolvers)
        let matchesSubcategory = true;
        if (currentFilters.category === "handgun" && activeSubcategory !== "all") {
            const sub = gun.subcategory || "pistol"; // Default to pistol for compatibility
            matchesSubcategory = (sub === activeSubcategory);
        }
        
        return matchesSearch && matchesCategory && matchesSubcategory;
    });

    // Sorting
    filteredList.sort((a, b) => {
        switch (currentFilters.sort) {
            case "name-asc":
                return a.name.localeCompare(b.name);
            case "price-asc":
                return a.basePrice - b.basePrice;
            case "price-desc":
                return b.basePrice - a.basePrice;
            case "weight-asc":
                return a.baseWeight - b.baseWeight;
            default:
                return 0;
        }
    });

    // In case no firearms found
    if (filteredList.length === 0) {
        catalogGrid.innerHTML = `
            <div class="empty-state">
                <i data-lucide="alert-octagon" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <p>NO PLATFORMS MATCHING ENTERED PARAMETERS FOUND.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    // Render cards
    catalogGrid.innerHTML = filteredList.map(gun => `
        <div class="firearm-card" onclick="openDetails('${gun.id}')">
            <div class="card-header">
                <span class="card-cat">${gun.category.toUpperCase()}</span>
                <span class="card-origin">${gun.origin.toUpperCase()}</span>
            </div>
            <div class="card-title-section">
                <h3>${gun.name}</h3>
                <p class="card-desc">${gun.description}</p>
            </div>
            <div class="card-specs-preview">
                <div class="spec-preview-item">
                    <span class="spec-preview-label">CALIBER</span>
                    <span class="spec-preview-val">${gun.caliber}</span>
                </div>
                <div class="spec-preview-item">
                    <span class="spec-preview-label">WEIGHT</span>
                    <span class="spec-preview-val">${gun.baseWeight} lbs</span>
                </div>
            </div>
            <div class="card-footer">
                <div class="price-tag">
                    <span>ESTIMATED MSRP</span>
                    <span class="price-val">$${gun.basePrice.toLocaleString()}</span>
                </div>
                <button class="view-details-btn">
                    SPEC SHEET <i data-lucide="chevron-right" style="width: 14px; height: 14px;"></i>
                </button>
            </div>
        </div>
    `).join("");

    // Render Lucide icons on newly inserted HTML
    lucide.createIcons();
}

// Open Details Modal
function openDetails(firearmId) {
    // Clone target firearm object to track active accessory selections locally
    const original = FIREARMS_DATABASE.find(g => g.id === firearmId);
    if (!original) return;
    
    // Create deep copy
    activeFirearm = JSON.parse(JSON.stringify(original));
    
    // Set static UI fields
    modalTitle.textContent = activeFirearm.name;
    modalSubtitle.textContent = activeFirearm.description;
    modalCategoryBadge.textContent = activeFirearm.category.toUpperCase();
    
    // Update Wikipedia style Infobox Title
    const infoboxTitle = document.getElementById("infobox-title");
    if (infoboxTitle) {
        infoboxTitle.textContent = activeFirearm.name;
    }
    
    specCaliber.textContent = activeFirearm.caliber;
    specAction.textContent = activeFirearm.action;
    
    // Set Ignition & Operation fields (with fallbacks for default platforms)
    if (specIgnition) {
        specIgnition.textContent = activeFirearm.ignition || (activeFirearm.caliber.includes(".22 LR") ? "Rimfire" : "Centerfire");
    }
    if (specOperation) {
        let defaultOp = "Short Recoil";
        if (activeFirearm.category === "rifle") {
            defaultOp = activeFirearm.id === "ddm4v7" ? "Direct Impingement" : (activeFirearm.id === "rem700" ? "Bolt Action" : "Gas Piston");
        } else if (activeFirearm.category === "shotgun") {
            defaultOp = activeFirearm.id === "mossberg590" ? "Pump Action" : "Auto-Regulating Gas-Operated (ARGO)";
        } else if (activeFirearm.category === "pcc") {
            defaultOp = activeFirearm.id === "sigmpx" ? "Short-Stroke Gas Piston" : "Blowback";
        }
        specOperation.textContent = activeFirearm.operation || defaultOp;
    }

    specBarrel.textContent = activeFirearm.barrelLength;
    specCapacity.textContent = activeFirearm.capacity;
    specWeight.textContent = `${activeFirearm.baseWeight} lbs`;
    specOrigin.textContent = activeFirearm.origin;
    
    // Set Reference Links
    modalLinks.innerHTML = activeFirearm.resources.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="ref-link">
            <span>${link.label}</span>
            <i data-lucide="arrow-up-right" style="width: 14px; height: 14px;"></i>
        </a>
    `).join("");
    
    // Generate Accessory Builders
    renderAccessorySelectors();
    updateBuilderTotals();
    
    // Toggle delete button visibility based on if this is a custom-contributed article
    const deleteBtn = document.getElementById("delete-article-btn");
    if (deleteBtn) {
        if (typeof resetDeleteButton === "function") resetDeleteButton();
        const isOwner = activeFirearm.owner === (currentUser ? currentUser.username : "");
        if (activeFirearm.id.startsWith("custom_") && isOwner) {
            deleteBtn.style.display = "flex";
        } else {
            deleteBtn.style.display = "none";
        }
    }
    
    // Open modal
    detailsModal.classList.add("active");
    lucide.createIcons();
}

// Close Modal
function closeModal() {
    detailsModal.classList.remove("active");
    activeFirearm = null;
}

// Render Accessory Builder Options
function renderAccessorySelectors() {
    const categories = Object.keys(activeFirearm.accessories);
    
    if (categories.length === 0) {
        accessoryGroupsContainer.innerHTML = `
            <p class="text-secondary" style="font-size: 0.8rem;">No custom accessories currently indexed for this platform.</p>
        `;
        return;
    }
    
    accessoryGroupsContainer.innerHTML = categories.map(cat => {
        const title = cat.toUpperCase();
        const options = activeFirearm.accessories[cat];
        
        const optionHTML = options.map((opt, idx) => `
            <div class="acc-option ${opt.selected ? 'selected' : ''}" onclick="toggleAccessory('${cat}', ${idx})">
                <div class="acc-option-left">
                    <span class="acc-checkbox"></span>
                    <span>${opt.name}</span>
                </div>
                <span class="acc-price-weight">
                    +$${opt.price} | +${opt.weight} lbs
                </span>
            </div>
        `).join("");
        
        return `
            <div class="acc-group">
                <div class="acc-group-title">${title} ATTACHMENT</div>
                <div class="acc-options">
                    ${optionHTML}
                </div>
            </div>
        `;
    }).join("");
}

// Toggle accessory option
window.toggleAccessory = function(cat, idx) {
    const list = activeFirearm.accessories[cat];
    // If the category contains multiple items (e.g. optics), selecting one deselects others
    if (cat === "optics") {
        list.forEach((opt, index) => {
            if (index !== idx) opt.selected = false;
        });
    }
    
    list[idx].selected = !list[idx].selected;
    
    renderAccessorySelectors();
    updateBuilderTotals();
};

// Calculate and render pricing/weight changes
function updateBuilderTotals() {
    if (!activeFirearm) return;
    
    let addedWeight = 0;
    let addedCost = 0;
    
    Object.keys(activeFirearm.accessories).forEach(cat => {
        activeFirearm.accessories[cat].forEach(opt => {
            if (opt.selected) {
                addedWeight += opt.weight;
                addedCost += opt.price;
            }
        });
    });
    
    const combinedWeight = activeFirearm.baseWeight + addedWeight;
    const combinedPrice = activeFirearm.basePrice + addedCost;
    
    baseWeightVal.textContent = `${activeFirearm.baseWeight.toFixed(2)} lbs`;
    accWeightVal.textContent = `+${addedWeight.toFixed(2)} lbs`;
    totalWeightVal.textContent = `${combinedWeight.toFixed(2)} lbs`;
    
    basePriceVal.textContent = `$${activeFirearm.basePrice.toLocaleString()}`;
    accPriceVal.textContent = `+$${addedCost.toLocaleString()}`;
    totalPriceVal.textContent = `$${combinedPrice.toLocaleString()}`;
}

// Attach closeModal function globally so backdrop click can reference it
window.closeModal = closeModal;
window.openDetails = openDetails;

// Autocomplete dictionary for popular firearms
const FIREARM_AUTOCOMPLETE_DICTIONARY = [
    { name: "Glock 17", category: "handgun", subcategory: "pistol", origin: "Austria", manufacturer: "Glock Ges.m.b.H.", price: 499, weight: 1.65, caliber: "9x19mm Parabellum", action: "Safe Action (Striker Fired)", barrel: "4.49 inches", capacity: "17 Rounds" },
    { name: "Glock 19", category: "handgun", subcategory: "pistol", origin: "Austria", manufacturer: "Glock Ges.m.b.H.", price: 539, weight: 1.88, caliber: "9x19mm Parabellum", action: "Safe Action (Striker Fired)", barrel: "4.02 inches", capacity: "15 Rounds" },
    { name: "Colt 1911", category: "handgun", subcategory: "pistol", origin: "United States", manufacturer: "Colt's Manufacturing", price: 899, weight: 2.44, caliber: ".45 ACP", action: "Single-Action Semi-Automatic", barrel: "5.0 inches", capacity: "7+1 Rounds" },
    { name: "Beretta 92FS", category: "handgun", subcategory: "pistol", origin: "Italy", manufacturer: "Beretta SpA", price: 675, weight: 2.15, caliber: "9x19mm Parabellum", action: "Double/Single Action", barrel: "4.9 inches", capacity: "15 Rounds" },
    { name: "Sig Sauer P226", category: "handgun", subcategory: "pistol", origin: "Germany / Switzerland", manufacturer: "Sig Sauer", price: 999, weight: 2.12, caliber: "9x19mm Parabellum", action: "Double/Single Action", barrel: "4.4 inches", capacity: "15 Rounds" },
    { name: "Desert Eagle", category: "handgun", subcategory: "pistol", origin: "Israel / USA", manufacturer: "Magnum Research", price: 1650, weight: 4.4, caliber: ".50 AE", action: "Gas-Operated Semi-Auto", barrel: "6.0 inches", capacity: "7 Rounds" },
    { name: "Smith & Wesson 686", category: "handgun", subcategory: "revolver", origin: "United States", manufacturer: "Smith & Wesson", price: 949, weight: 2.56, caliber: ".357 Magnum", action: "Double Action / Single Action", barrel: "4.0 inches", capacity: "6 Rounds" },
    { name: "AR-15", category: "rifle", origin: "United States", manufacturer: "Various Manufacturers", price: 950, weight: 6.5, caliber: "5.56x45mm NATO", action: "Direct Impingement", barrel: "16.0 inches", capacity: "30 Rounds" },
    { name: "M4A1", category: "rifle", origin: "United States", manufacturer: "Colt's Manufacturing", price: 1299, weight: 6.36, caliber: "5.56x45mm NATO", action: "Direct Impingement", barrel: "14.5 inches", capacity: "30 Rounds" },
    { name: "AK-47", category: "rifle", origin: "Soviet Union", manufacturer: "Izhmash / Zastava", price: 850, weight: 7.9, caliber: "7.62x39mm", action: "Gas-Operated", barrel: "16.3 inches", capacity: "30 Rounds" },
    { name: "M1 Garand", category: "rifle", origin: "United States", manufacturer: "Springfield Armory", price: 1450, weight: 9.5, caliber: ".30-06 Springfield", action: "Gas-Operated Bolt", barrel: "24.0 inches", capacity: "8 Rounds" },
    { name: "Remington 870", category: "shotgun", origin: "United States", manufacturer: "Remington Arms", price: 429, weight: 7.0, caliber: "12 Gauge", action: "Pump Action", barrel: "18.5 inches", capacity: "6+1 Rounds" },
    { name: "Mossberg 590", category: "shotgun", origin: "United States", manufacturer: "Mossberg & Sons", price: 729, weight: 7.0, caliber: "12 Gauge", action: "Pump Action", barrel: "18.5 inches", capacity: "6+1 Rounds" },
    { name: "Benelli M4", category: "shotgun", origin: "Italy", manufacturer: "Benelli SpA", price: 2099, weight: 7.8, caliber: "12 Gauge", action: "Semi-Automatic (ARGO)", barrel: "18.5 inches", capacity: "5+1 Rounds" },
    { name: "MP5", category: "pcc", origin: "Germany", manufacturer: "Heckler & Koch", price: 2899, weight: 5.5, caliber: "9x19mm Parabellum", action: "Roller-Delayed Blowback", barrel: "8.9 inches", capacity: "30 Rounds" },
    { name: "CZ Scorpion", category: "pcc", origin: "Czech Republic", manufacturer: "Ceska Zbrojovka", price: 949, weight: 5.0, caliber: "9x19mm Parabellum", action: "Blowback Semi-Auto", barrel: "7.72 inches", capacity: "20 / 30 Rounds" }
];

let activeSuggestionTemplate = null;

// DOM Elements for creation
const createModal = document.getElementById("create-modal");
const contributeBtn = document.getElementById("contribute-btn");
const createArticleForm = document.getElementById("create-article-form");

const formName = document.getElementById("form-name");
const formCategory = document.getElementById("form-category");
const formSubcategoryRow = document.getElementById("form-subcategory-row");
const formSubcategory = document.getElementById("form-subcategory");
const formOrigin = document.getElementById("form-origin");
const formManufacturer = document.getElementById("form-manufacturer");
const formPrice = document.getElementById("form-price");
const formWeight = document.getElementById("form-weight");
const formCaliberSelect = document.getElementById("form-caliber-select");
const formCaliberCustom = document.getElementById("form-caliber-custom");
const formActionSelect = document.getElementById("form-action-select");
const formActionCustom = document.getElementById("form-action-custom");
const formIgnitionSelect = document.getElementById("form-ignition-select");
const formOperationSelect = document.getElementById("form-operation-select");
const formOperationCustom = document.getElementById("form-operation-custom");
const formWikiLink = document.getElementById("form-wiki-link");
const addedSourcesList = document.getElementById("added-sources-list");
const sourceLabel = document.getElementById("source-label");
const sourceUrl = document.getElementById("source-url");
const formBarrel = document.getElementById("form-barrel");
const formCapacity = document.getElementById("form-capacity");
const formDescription = document.getElementById("form-description");

const suggestPriceBox = document.getElementById("suggest-price-box");
const suggestWeightBox = document.getElementById("suggest-weight-box");
const priceCommentBubble = document.getElementById("price-comment-bubble");

// Setup Contribution Event Listeners
if (contributeBtn) {
    contributeBtn.addEventListener("click", () => {
        if (createModal) {
            createArticleForm.reset();
            activeSuggestionTemplate = null;
            hideAllSuggestions();
            if (typeof handleFormCategoryChange === "function") {
                handleFormCategoryChange();
            }
            createModal.classList.add("active");
            // Set stats count
            statsCount.textContent = FIREARMS_DATABASE.length;
        }
    });
}

function closeCreateModal() {
    if (createModal) {
        createModal.classList.remove("active");
        createArticleForm.reset();
        activeSuggestionTemplate = null;
        hideAllSuggestions();
        if (priceCommentBubble) priceCommentBubble.style.display = "none";
        if (formCaliberCustom) formCaliberCustom.style.display = "none";
        if (formActionCustom) formActionCustom.style.display = "none";
        if (formOperationCustom) formOperationCustom.style.display = "none";
        if (formSubcategoryRow) formSubcategoryRow.style.display = "none";
        activeSourcesList = [];
        if (typeof renderAddedSourcesList === "function") renderAddedSourcesList();
    }
}

// Add close function to window
window.closeCreateModal = closeCreateModal;

// Autocomplete match lookup on Name typing
if (formName) {
    formName.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            activeSuggestionTemplate = null;
            hideAllSuggestions();
            return;
        }

        // Try to find closest match in our dictionary
        const match = FIREARM_AUTOCOMPLETE_DICTIONARY.find(item => 
            item.name.toLowerCase().includes(query) || 
            query.includes(item.name.toLowerCase())
        );

        if (match) {
            activeSuggestionTemplate = match;
            
            // Auto-populate some metadata fields helper if they are empty
            if (!formCategory.value || formCategory.value === "handgun") {
                formCategory.value = match.category;
                if (match.category === "handgun") {
                    if (formSubcategoryRow) formSubcategoryRow.style.display = "flex";
                    if (formSubcategory) {
                        formSubcategory.value = match.subcategory || "pistol";
                    }
                } else {
                    if (formSubcategoryRow) formSubcategoryRow.style.display = "none";
                }
            }
            if (!formOrigin.value) formOrigin.value = match.origin;
            if (!formManufacturer.value) formManufacturer.value = match.manufacturer;
            if (!formBarrel.value) formBarrel.value = match.barrel;
            if (!formCapacity.value) formCapacity.value = match.capacity;

            // Rebuild the caliber options list dynamically before auto-selecting
            updateCaliberDropdownOptions(formCategory.value, (formCategory.value === "handgun" && formSubcategory) ? formSubcategory.value : "");

            // Auto-select action type in dropdown if possible
            if (formActionSelect) {
                const actionOptions = Array.from(formActionSelect.options).map(o => o.value);
                // Try to find closest match
                let matchedAction = "other";
                if (match.action.toLowerCase().includes("semi-automatic") || match.action.toLowerCase().includes("semi-auto")) {
                    matchedAction = "Semi-Automatic";
                } else if (match.action.toLowerCase().includes("pump")) {
                    matchedAction = "Pump Action";
                } else if (match.action.toLowerCase().includes("bolt")) {
                    matchedAction = "Bolt Action";
                } else if (match.action.toLowerCase().includes("single-action")) {
                    matchedAction = "Single Action";
                } else if (match.action.toLowerCase().includes("double")) {
                    matchedAction = "Double Action";
                } else if (match.action.toLowerCase().includes("binary")) {
                    matchedAction = "Binary Trigger";
                } else if (match.action.toLowerCase().includes("full auto")) {
                    matchedAction = "Full Auto";
                } else if (match.action.toLowerCase().includes("burst")) {
                    matchedAction = "Burst Firing";
                }

                if (actionOptions.includes(matchedAction)) {
                    formActionSelect.value = matchedAction;
                    if (formActionCustom) {
                        formActionCustom.style.display = "none";
                        formActionCustom.value = "";
                    }
                } else {
                    formActionSelect.value = "other";
                    if (formActionCustom) {
                        formActionCustom.value = match.action;
                        formActionCustom.style.display = "block";
                    }
                }
            }

            // Auto-select ignition in dropdown if possible
            if (formIgnitionSelect) {
                if (match.caliber.includes(".22 LR")) {
                    formIgnitionSelect.value = "Rimfire";
                } else {
                    formIgnitionSelect.value = "Centerfire";
                }
            }

            // Auto-select operation system in dropdown if possible
            if (formOperationSelect) {
                const operationOptions = Array.from(formOperationSelect.options).map(o => o.value);
                let guessedOp = "other";
                if (match.action.toLowerCase().includes("direct impingement")) {
                    guessedOp = "Direct Impingement";
                } else if (match.action.toLowerCase().includes("gas piston")) {
                    guessedOp = "Short-Stroke Gas Piston";
                } else if (match.action.toLowerCase().includes("blowback")) {
                    guessedOp = "Blowback";
                } else if (match.action.toLowerCase().includes("roller-delayed")) {
                    guessedOp = "Roller-Delayed Blowback";
                } else if (match.action.toLowerCase().includes("pump")) {
                    guessedOp = "Pump Action";
                } else if (match.action.toLowerCase().includes("bolt")) {
                    guessedOp = "Bolt Action";
                } else if (match.category === "handgun") {
                    guessedOp = "Short Recoil";
                }

                if (operationOptions.includes(guessedOp)) {
                    formOperationSelect.value = guessedOp;
                    if (formOperationCustom) {
                        formOperationCustom.style.display = "none";
                        formOperationCustom.value = "";
                    }
                } else {
                    formOperationSelect.value = "other";
                    if (formOperationCustom) {
                        formOperationCustom.value = guessedOp === "other" ? match.action : guessedOp;
                        formOperationCustom.style.display = "block";
                    }
                }
            }

            // Auto-select cartridge in dropdown if possible
            if (formCaliberSelect) {
                const options = Array.from(formCaliberSelect.options).map(o => o.value);
                if (options.includes(match.caliber)) {
                    formCaliberSelect.value = match.caliber;
                    if (formCaliberCustom) {
                        formCaliberCustom.style.display = "none";
                        formCaliberCustom.value = "";
                    }
                } else {
                    formCaliberSelect.value = "other";
                    if (formCaliberCustom) {
                        formCaliberCustom.value = match.caliber;
                        formCaliberCustom.style.display = "block";
                    }
                }
            }

            // Trigger suggestions updates
            updateSuggestionBoxes();
        } else {
            activeSuggestionTemplate = null;
            hideAllSuggestions();
        }
    });
}

// Input focus/input event listeners to show suggestion box dynamically
if (formPrice) {
    formPrice.addEventListener("focus", () => showSuggestion("price"));
    formPrice.addEventListener("input", () => showSuggestion("price"));
    formPrice.addEventListener("blur", () => setTimeout(() => hideSuggestion("price"), 200));
}
if (formWeight) {
    formWeight.addEventListener("focus", () => showSuggestion("weight"));
    formWeight.addEventListener("input", () => showSuggestion("weight"));
    formWeight.addEventListener("blur", () => setTimeout(() => hideSuggestion("weight"), 200));
}

// Suggestion helpers
function updateSuggestionBoxes() {
    if (!activeSuggestionTemplate) return;

    suggestPriceBox.innerHTML = `
        <div class="suggest-item" onclick="applySuggestion('price', ${activeSuggestionTemplate.price})">
            <i data-lucide="sparkles" class="suggest-item-icon"></i>
            <span>💡 Suggest: $${activeSuggestionTemplate.price} (average for ${activeSuggestionTemplate.name})</span>
        </div>
    `;
    suggestWeightBox.innerHTML = `
        <div class="suggest-item" onclick="applySuggestion('weight', ${activeSuggestionTemplate.weight})">
            <i data-lucide="sparkles" class="suggest-item-icon"></i>
            <span>💡 Suggest: ${activeSuggestionTemplate.weight} lbs (recorded for ${activeSuggestionTemplate.name})</span>
        </div>
    `;
    
    // Refresh icons
    lucide.createIcons();
}

function showSuggestion(type) {
    if (!activeSuggestionTemplate) return;
    
    if (type === "price") {
        suggestPriceBox.classList.add("active");
    } else if (type === "weight") {
        suggestWeightBox.classList.add("active");
    }
}

function hideSuggestion(type) {
    if (type === "price") {
        suggestPriceBox.classList.remove("active");
    } else if (type === "weight") {
        suggestWeightBox.classList.remove("active");
    }
}

function hideAllSuggestions() {
    hideSuggestion("price");
    hideSuggestion("weight");
}

function applySuggestion(type, value) {
    if (type === "price") {
        formPrice.value = value;
        handlePriceInput(); // check if over 3000
    } else if (type === "weight") {
        formWeight.value = value;
    }
    hideSuggestion(type);
}

// Bind to window for HTML event handlers
window.applySuggestion = applySuggestion;

function handleCaliberSelectChange() {
    if (formCaliberSelect) {
        if (formCaliberSelect.value === "other") {
            formCaliberCustom.style.display = "block";
            formCaliberCustom.required = true;
        } else {
            formCaliberCustom.style.display = "none";
            formCaliberCustom.required = false;
            formCaliberCustom.value = "";
        }
    }
}
window.handleCaliberSelectChange = handleCaliberSelectChange;

function handlePriceInput() {
    if (formPrice && priceCommentBubble) {
        const val = parseFloat(formPrice.value);
        if (!isNaN(val) && val > 3000) {
            priceCommentBubble.style.display = "inline-flex";
        } else {
            priceCommentBubble.style.display = "none";
        }
    }
}
window.handlePriceInput = handlePriceInput;

// Form Submission handling
function handleCreateArticle(event) {
    event.preventDefault();

    const name = formName.value.trim();
    const category = formCategory.value;
    const subcategory = (category === "handgun") ? formSubcategory.value : "";
    const origin = formOrigin.value.trim() || "Unknown";
    const manufacturer = formManufacturer.value.trim() || "Unknown";
    const price = parseFloat(formPrice.value);
    const weight = parseFloat(formWeight.value);
    let caliber = formCaliberSelect.value;
    if (caliber === "other") {
        caliber = formCaliberCustom.value.trim() || "Other";
    }
    let action = formActionSelect.value;
    if (action === "other") {
        action = formActionCustom.value.trim() || "Other Action";
    }
    const ignition = formIgnitionSelect.value || "Centerfire";
    let operation = formOperationSelect.value;
    if (operation === "other") {
        operation = formOperationCustom.value.trim() || "Other System";
    }
    const barrel = formBarrel.value.trim() || "Standard";
    const capacity = formCapacity.value.trim() || "Standard";
    const description = formDescription.value.trim();

    // Build resources from wikipedia and custom sources
    const resources = [];
    if (formWikiLink && formWikiLink.value.trim()) {
        resources.push({ label: "Wikipedia Article", url: formWikiLink.value.trim() });
    }
    activeSourcesList.forEach(src => {
        resources.push(src);
    });
    if (resources.length === 0) {
        resources.push({ label: "Community Contributed Record", url: "#" });
    }

    // Create unique ID
    const id = "custom_" + name.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Check for duplicates
    if (FIREARMS_DATABASE.some(gun => gun.id === id)) {
        alert("An article with this name already exists.");
        return;
    }

    // Structure new firearm item
    const newFirearm = {
        id: id,
        name: name.toUpperCase(),
        category: category,
        subcategory: subcategory,
        origin: origin,
        manufacturer: manufacturer,
        basePrice: price,
        baseWeight: weight,
        owner: currentUser ? currentUser.username : "anonymous",
        caliber: caliber,
        action: action,
        ignition: ignition,
        operation: operation,
        barrelLength: barrel,
        capacity: capacity,
        description: description,
        resources: resources,
        accessories: {
            optics: [
                { name: "Trijicon RMR Type 2", price: 499, weight: 0.07, selected: false }
            ],
            illumination: [
                { name: "Streamlight TLR-7A", price: 140, weight: 0.15, selected: false }
            ]
        }
    };

    // Insert into database and save
    FIREARMS_DATABASE.push(newFirearm);
    saveFirearmsDatabase();

    // Refresh controls stats and main rendering
    if (statsCount) {
        statsCount.textContent = FIREARMS_DATABASE.length;
    }
    renderCatalog();

    // Close modal
    closeCreateModal();
}

window.handleCreateArticle = handleCreateArticle;

// 3-Step Delete Warning State Machine
let deleteWarningStep = 0;

function resetDeleteButton() {
    deleteWarningStep = 0;
    const deleteBtn = document.getElementById("delete-article-btn");
    if (deleteBtn) {
        deleteBtn.className = "delete-article-btn";
        const btnText = deleteBtn.querySelector("span");
        if (btnText) btnText.textContent = "DELETE ARTICLE";
    }
}

function deleteCurrentArticle() {
    if (!activeFirearm) return;
    
    const deleteBtn = document.getElementById("delete-article-btn");
    const btnText = deleteBtn.querySelector("span");
    
    if (deleteWarningStep === 0) {
        // Step 1: Yellow warning
        deleteWarningStep = 1;
        deleteBtn.className = "delete-article-btn warning-step-1";
        if (btnText) btnText.textContent = "WARNING 1/3: CONFIRM DELETION?";
    } else if (deleteWarningStep === 1) {
        // Step 2: Orange warning
        deleteWarningStep = 2;
        deleteBtn.className = "delete-article-btn warning-step-2";
        if (btnText) btnText.textContent = "CRITICAL 2/3: THIS ACTION IS PERMANENT!";
    } else if (deleteWarningStep === 2) {
        // Step 3: Delete
        const index = FIREARMS_DATABASE.findIndex(g => g.id === activeFirearm.id);
        if (index !== -1) {
            FIREARMS_DATABASE.splice(index, 1);
            saveFirearmsDatabase();
            statsCount.textContent = FIREARMS_DATABASE.length;
            renderCatalog();
            closeModal();
        }
        resetDeleteButton();
    }
}
window.deleteCurrentArticle = deleteCurrentArticle;
window.resetDeleteButton = resetDeleteButton;

// Authentication State
let currentUser = JSON.parse(sessionStorage.getItem("armory_db_user")) || null;
let registeredOperators = JSON.parse(localStorage.getItem("armory_db_operators")) || [];
if (!registeredOperators.some(op => op.username === "human1")) {
    registeredOperators.push({ username: "human1", password: "password" });
    localStorage.setItem("armory_db_operators", JSON.stringify(registeredOperators));
}
let activeAuthTab = "login";

// Auth Elements
const loginModal = document.getElementById("login-modal");
const authBtn = document.getElementById("auth-btn");
const authForm = document.getElementById("auth-form");
const authUsernameInput = document.getElementById("auth-username");
const authPasswordInput = document.getElementById("auth-password");
const authErrorMsg = document.getElementById("auth-error-msg");
const authModalTitle = document.getElementById("auth-modal-title");
const authSubmitBtn = document.getElementById("auth-submit-btn");
const authTabLogin = document.getElementById("auth-tab-login");
const authTabRegister = document.getElementById("auth-tab-register");
const contributionsTabBtn = document.getElementById("contributions-tab-btn");

// Init Auth UI on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    updateAuthUI();
});

// Setup auth listeners
if (authBtn) {
    authBtn.addEventListener("click", () => {
        if (currentUser) {
            // Logout
            currentUser = null;
            sessionStorage.removeItem("armory_db_user");
            updateAuthUI();
            
            // If they were on contributions filter, go back to all
            if (currentFilters.category === "contributions") {
                currentFilters.category = "all";
                const allBtn = Array.from(filterButtons).find(b => b.getAttribute("data-category") === "all");
                if (allBtn) {
                    filterButtons.forEach(b => b.classList.remove("active"));
                    allBtn.classList.add("active");
                }
                renderCatalog();
            }
        } else {
            // Open Sign In
            openLoginModal();
        }
    });
}

function openLoginModal() {
    if (loginModal) {
        if (authForm) authForm.reset();
        if (authErrorMsg) {
            authErrorMsg.style.display = "none";
            authErrorMsg.textContent = "";
        }
        switchAuthTab("login");
        loginModal.classList.add("active");
    }
}

function closeLoginModal() {
    if (loginModal) {
        loginModal.classList.remove("active");
        
        // Reset password visibility toggler
        if (authPasswordInput) {
            authPasswordInput.type = "password";
        }
        const eyeIcon = document.getElementById("password-eye-icon");
        if (eyeIcon) {
            eyeIcon.setAttribute("data-lucide", "eye");
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
}

window.closeLoginModal = closeLoginModal;

function switchAuthTab(tab) {
    activeAuthTab = tab;
    if (tab === "login") {
        if (authTabLogin) authTabLogin.classList.add("active");
        if (authTabRegister) authTabRegister.classList.remove("active");
        if (authModalTitle) authModalTitle.textContent = "Sign In to ArmoryDB";
        if (authSubmitBtn) authSubmitBtn.textContent = "SIGN IN";
    } else {
        if (authTabLogin) authTabLogin.classList.remove("active");
        if (authTabRegister) authTabRegister.classList.add("active");
        if (authModalTitle) authModalTitle.textContent = "Register Human Profile";
        if (authSubmitBtn) authSubmitBtn.textContent = "REGISTER PROFILE";
    }
    if (authErrorMsg) {
        authErrorMsg.style.display = "none";
        authErrorMsg.textContent = "";
    }
}

window.switchAuthTab = switchAuthTab;

function handleAuthSubmit(event) {
    event.preventDefault();
    const username = authUsernameInput.value.trim().toLowerCase();
    const password = authPasswordInput.value;

    if (!username || !password) return;

    if (activeAuthTab === "login") {
        // Authenticate
        const user = registeredOperators.find(op => op.username === username && op.password === password);
        if (user) {
            currentUser = { username: username };
            sessionStorage.setItem("armory_db_user", JSON.stringify(currentUser));
            updateAuthUI();
            closeLoginModal();
        } else {
            showAuthError("Invalid Human Code or password decryption.");
        }
    } else {
        // Register
        if (registeredOperators.some(op => op.username === username)) {
            showAuthError("Human code already registered in global database.");
            return;
        }
        const newOp = { username: username, password: password };
        registeredOperators.push(newOp);
        localStorage.setItem("armory_db_operators", JSON.stringify(registeredOperators));
        
        currentUser = { username: username };
        sessionStorage.setItem("armory_db_user", JSON.stringify(currentUser));
        updateAuthUI();
        closeLoginModal();
    }
}

window.handleAuthSubmit = handleAuthSubmit;

function showAuthError(msg) {
    if (authErrorMsg) {
        authErrorMsg.textContent = msg;
        authErrorMsg.style.display = "block";
    }
}

function updateAuthUI() {
    const authBtnText = document.getElementById("auth-btn-text");
    if (currentUser) {
        if (authBtnText) authBtnText.textContent = `LOGOUT (${currentUser.username.toUpperCase()})`;
        if (contributionsTabBtn) contributionsTabBtn.style.display = "block";
    } else {
        if (authBtnText) authBtnText.textContent = "SIGN IN";
        if (contributionsTabBtn) contributionsTabBtn.style.display = "none";
    }
}

function togglePasswordVisibility() {
    if (!authPasswordInput) return;
    const eyeIcon = document.getElementById("password-eye-icon");
    if (!eyeIcon) return;

    if (authPasswordInput.type === "password") {
        authPasswordInput.type = "text";
        eyeIcon.setAttribute("data-lucide", "eye-off");
    } else {
        authPasswordInput.type = "password";
        eyeIcon.setAttribute("data-lucide", "eye");
    }
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

window.togglePasswordVisibility = togglePasswordVisibility;

// Dynamic sources list builder state
let activeSourcesList = [];

function handleActionSelectChange() {
    if (formActionSelect) {
        if (formActionSelect.value === "other") {
            formActionCustom.style.display = "block";
            formActionCustom.required = true;
        } else {
            formActionCustom.style.display = "none";
            formActionCustom.required = false;
            formActionCustom.value = "";
        }
    }
}
window.handleActionSelectChange = handleActionSelectChange;

function handleOperationSelectChange() {
    if (formOperationSelect) {
        if (formOperationSelect.value === "other") {
            formOperationCustom.style.display = "block";
            formOperationCustom.required = true;
        } else {
            formOperationCustom.style.display = "none";
            formOperationCustom.required = false;
            formOperationCustom.value = "";
        }
    }
}
window.handleOperationSelectChange = handleOperationSelectChange;

function addCustomSource() {
    if (!sourceLabel || !sourceUrl) return;
    const labelVal = sourceLabel.value.trim();
    const urlVal = sourceUrl.value.trim();

    if (!labelVal || !urlVal) {
        alert("Please enter both a source label and a valid URL link.");
        return;
    }

    activeSourcesList.push({ label: labelVal, url: urlVal });
    
    // Clear inputs
    sourceLabel.value = "";
    sourceUrl.value = "";

    renderAddedSourcesList();
}
window.addCustomSource = addCustomSource;

function renderAddedSourcesList() {
    if (!addedSourcesList) return;

    if (activeSourcesList.length === 0) {
        addedSourcesList.innerHTML = `<li style="color: var(--text-muted); border: none; background: transparent;">No additional sources added yet.</li>`;
        return;
    }

    addedSourcesList.innerHTML = activeSourcesList.map((src, index) => `
        <li>
            <a href="${src.url}" target="_blank" rel="noopener noreferrer" style="color: var(--text-link); text-decoration: underline;">${src.label}</a>
            <button type="button" class="remove-source-btn" onclick="removeCustomSource(${index})" aria-label="Remove source">
                <i data-lucide="minus-circle" style="width: 14px; height: 14px;"></i>
            </button>
        </li>
    `).join("");

    if (window.lucide) {
        window.lucide.createIcons();
    }
}
window.renderAddedSourcesList = renderAddedSourcesList;

function removeCustomSource(index) {
    activeSourcesList.splice(index, 1);
    renderAddedSourcesList();
}
window.removeCustomSource = removeCustomSource;

function handleFormCategoryChange() {
    if (!formCategory) return;
    const cat = formCategory.value;
    if (cat === "handgun") {
        if (formSubcategoryRow) formSubcategoryRow.style.display = "flex";
        handleFormSubcategoryChange();
    } else {
        if (formSubcategoryRow) formSubcategoryRow.style.display = "none";
        updateCaliberDropdownOptions(cat, "");
    }
}
window.handleFormCategoryChange = handleFormCategoryChange;

function handleFormSubcategoryChange() {
    if (!formCategory || !formSubcategory) return;
    const cat = formCategory.value;
    const sub = formSubcategory.value;
    updateCaliberDropdownOptions(cat, sub);
}
window.handleFormSubcategoryChange = handleFormSubcategoryChange;

function updateCaliberDropdownOptions(category, subcategory) {
    if (!formCaliberSelect) return;

    let options = [];
    if (category === "handgun") {
        if (subcategory === "revolver") {
            options = [
                { value: ".357 Magnum", label: ".357 Magnum" },
                { value: ".38 Special", label: ".38 Special" },
                { value: ".44 Magnum", label: ".44 Magnum" },
                { value: ".500 S&W Magnum", label: ".500 S&W Magnum" }
            ];
        } else {
            // default to pistol
            options = [
                { value: "9x19mm Parabellum", label: "9x19mm Parabellum" },
                { value: ".45 ACP", label: ".45 ACP" },
                { value: ".50 AE", label: ".50 AE" },
                { value: ".380 ACP", label: ".380 ACP" }
            ];
        }
    } else if (category === "rifle") {
        options = [
            { value: "5.56x45mm NATO", label: "5.56x45mm NATO" },
            { value: "7.62x39mm", label: "7.62x39mm" },
            { value: "7.62x51mm NATO", label: "7.62x51mm NATO" },
            { value: ".308 Winchester", label: ".308 Winchester" },
            { value: ".30-06 Springfield", label: ".30-06 Springfield" },
            { value: ".22 LR", label: ".22 LR" },
            { value: ".50 BMG", label: ".50 BMG" }
        ];
    } else if (category === "shotgun") {
        options = [
            { value: "12 Gauge", label: "12 Gauge" },
            { value: "20 Gauge", label: "20 Gauge" },
            { value: ".410 Bore", label: ".410 Bore" }
        ];
    } else if (category === "pcc") {
        options = [
            { value: "9x19mm Parabellum", label: "9x19mm Parabellum" },
            { value: ".45 ACP", label: ".45 ACP" }
        ];
    }

    let html = `<option value="" disabled selected>Select cartridge...</option>`;
    options.forEach(opt => {
        html += `<option value="${opt.value}">${opt.label}</option>`;
    });
    html += `<option value="other">Other...</option>`;

    formCaliberSelect.innerHTML = html;
    if (formCaliberCustom) {
        formCaliberCustom.style.display = "none";
        formCaliberCustom.value = "";
    }
}
window.updateCaliberDropdownOptions = updateCaliberDropdownOptions;
