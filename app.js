// Firearms Catalog Database
const FIREARMS_DATABASE = [
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

// App State
let activeFirearm = null;
let currentFilters = {
    search: "",
    category: "all",
    sort: "name-asc"
};

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
    statsCount.textContent = FIREARMS_DATABASE.length;
    renderCatalog();
    setupEventListeners();
});

// Setup DOM Event Listeners
function setupEventListeners() {
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
        const matchesCategory = currentFilters.category === "all" || gun.category === currentFilters.category;
        
        return matchesSearch && matchesCategory;
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
    
    specCaliber.textContent = activeFirearm.caliber;
    specAction.textContent = activeFirearm.action;
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
