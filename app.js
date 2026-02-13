(function () {
    // State Management
    const state = {
        currentPage: 'home',
        destination: 'lab-301',
        isEmergency: false,
        hazardType: null
    };

    // Utils
    function setPage(page) {
        state.currentPage = page;
        render();
        window.scrollTo(0, 0);
    }

    function setEmergency(active, type = 'Fire') {
        state.isEmergency = active;
        state.hazardType = active ? type : null;
        // Auto switch to emergency page if triggered
        if (active) {
            setPage('emergency');
        } else {
            render(); // Re-render to update badges/nav
        }
    }

    // Components
    const Navbar = () => `
        <nav class="navbar glass-panel">
            <div class="container nav-content">
                <div class="nav-logo" onclick="app.setPage('home')" style="cursor:pointer">
                    <i data-lucide="shield-check" class="text-primary"></i>
                    <span>SafeNav AI</span>
                </div>
                <div class="nav-links">
                    <a class="nav-link ${state.currentPage === 'home' ? 'active' : ''}" onclick="app.setPage('home')">Home</a>
                    <a class="nav-link ${state.currentPage === 'navigation' ? 'active' : ''}" onclick="app.setPage('navigation')">Navigation</a>
                    <a class="nav-link ${state.currentPage === 'about' ? 'active' : ''}" onclick="app.setPage('about')">About</a>
                    ${state.isEmergency
            ? `<a class="btn btn-danger btn-sm" onclick="app.setPage('emergency')">EMERGENCY ACTIVE</a>`
            : `<button class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;" onclick="app.toggleEmergency()">Simulate Alert</button>`
        }
                </div>
            </div>
        </nav>
    `;

    const Footer = () => `
        <footer style="padding: 4rem 0; border-top: 1px solid var(--border); margin-top: 4rem;">
            <div class="container">
                <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 2rem;">
                    <div>
                        <h3 style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                            <i data-lucide="shield"></i> SafeNav AI
                        </h3>
                        <p class="text-muted" style="max-width: 300px;">
                            Next-generation indoor navigation ensuring safety through real-time crowd analytics and hazard detection.
                        </p>
                    </div>
                    <div>
                        <h4 style="margin-bottom: 1rem;">Project</h4>
                        <p class="text-muted">Eng. Dept Project</p>
                        <p class="text-muted">Spring 2026</p>
                    </div>
                </div>
                <div style="margin-top: 3rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
                    © 2026 Smart Indoor Safety Navigation System. Academic Prototype.
                </div>
            </div>
        </footer>
    `;

    // Pages
    const HomePage = () => `
        <div class="container animate-enter">
            <section class="hero">
                <div class="hero-content">
                    <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; padding: 0.5rem 1rem; background: rgba(59, 130, 246, 0.1); border-radius: 2rem; color: var(--primary);">
                        <i data-lucide="sparkles" size="16"></i>
                        <span style="font-size: 0.875rem; font-weight: 500;">Next Gen Indoor Safety</span>
                    </div>
                    <h1 class="hero-title">
                        Navigate Indoors with <br />
                        <span class="text-gradient">Intelligent Safety</span>
                    </h1>
                    <p class="hero-subtitle">
                        Real-time pathfinding optimized for crowd density and emergency hazards. 
                        Get where you need to go, safely.
                    </p>
                    <div class="hero-actions">
                        <button class="btn btn-primary" onclick="app.setPage('navigation')">
                            Start Navigation
                            <i data-lucide="arrow-right"></i>
                        </button>
                        <button class="btn btn-secondary" onclick="app.setPage('about')">
                            Learn More
                        </button>
                    </div>
                </div>
                
                <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); opacity: 0.5; z-index: -1;">
                    <!-- Abstract decorative element -->
                    <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#3B82F6" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.8,32.2C59.4,42.9,47.9,51.4,35.9,58.3C23.9,65.2,11.4,70.5,-1.8,73.6C-15,76.7,-27.1,77.6,-38.3,71.8C-49.5,66,-59.8,53.5,-68.6,39.9C-77.4,26.3,-84.7,11.6,-83.4,-2.5C-82.1,-16.6,-72.1,-30.1,-61.1,-41.8C-50.1,-53.5,-38.1,-63.4,-25.1,-71.4C-12.1,-79.4,1.9,-85.5,15.6,-83.2L44.7,-76.4Z" transform="translate(100 100) scale(1.1)" style="filter: blur(80px); opacity: 0.4;" />
                    </svg>
                </div>
            </section>

            <section class="grid-3 animate-enter stagger-1" style="padding-bottom: 4rem;">
                <div class="card">
                    <div style="background: rgba(59, 130, 246, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--primary); margin-bottom: 1.5rem;">
                        <i data-lucide="route"></i>
                    </div>
                    <h3>AI Route Optimization</h3>
                    <p class="text-muted" style="margin-top: 0.5rem;">
                        Advanced A* algorithms calculate the fastest path while avoiding congestion nodes dynamically.
                    </p>
                </div>
                
                <div class="card">
                    <div style="background: rgba(16, 185, 129, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--secondary); margin-bottom: 1.5rem;">
                        <i data-lucide="users"></i>
                    </div>
                    <h3>Crowd-Aware</h3>
                    <p class="text-muted" style="margin-top: 0.5rem;">
                        Real-time density monitoring via BLE beacons adjusts routes to keep flow smooth.
                    </p>
                </div>
                
                <div class="card">
                    <div style="background: rgba(239, 68, 68, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--danger); margin-bottom: 1.5rem;">
                        <i data-lucide="alert-triangle"></i>
                    </div>
                    <h3>Emergency Protocol</h3>
                    <p class="text-muted" style="margin-top: 0.5rem;">
                        Instant hazard detection triggers automated evacuation routing to the nearest safe exit.
                    </p>
                </div>
            </section>
        </div>
    `;

    const NavigationPage = () => `
        <div class="container animate-enter">
            <div class="nav-layout">
                <aside class="sidebar">
                    <div>
                        <h2 style="margin-bottom: 0.5rem">Current Route</h2>
                        <p class="text-muted">Select your destination to begin.</p>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Current Location</label>
                        <div style="padding: 0.75rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="navigation" size="16" class="text-primary"></i>
                            <span>Main Entrance Lobby</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Destination</label>
                        <select class="form-select" id="dest-select">
                            <option value="lab-301">Engineering Lab 301</option>
                            <option value="conf-a">Conference Hall A</option>
                            <option value="lib-2">Library Level 2</option>
                            <option value="cafe">Cafeteria</option>
                        </select>
                    </div>

                    <div class="card" style="padding: 1rem; border-color: var(--secondary);">
                        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Crowd Density</h4>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--secondary);"></span>
                            Low (Optimal Flow)
                        </div>
                    </div>

                    <button class="btn btn-primary" style="width: 100%; margin-top: auto;" onclick="alert('Calculating optimal route...')">
                        Get Optimal Route
                    </button>
                </aside>

                <main class="map-container">
                    <div style="position:absolute; inset: 0; background-image: radial-gradient(var(--border) 1px, transparent 1px); background-size: 30px 30px; opacity: 0.2;"></div>
                    
                    <!-- Simple SVG Map -->
                    <svg width="100%" height="100%" viewBox="0 0 800 600" style="opacity: 0.8;">
                        <!-- Corridors -->
                        <path d="M100 500 L100 100 L700 100 L700 500" fill="none" stroke="var(--border)" stroke-width="40" />
                        <path d="M100 300 L700 300" fill="none" stroke="var(--border)" stroke-width="40" />
                        
                        <!-- Rooms -->
                        <rect x="50" y="50" width="100" height="100" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="2" />
                        <text x="100" y="100" fill="white" font-size="12" text-anchor="middle">Lobby</text>
                        
                        <rect x="650" y="50" width="100" height="100" fill="var(--bg-surface)" stroke="var(--border)" />
                        <text x="700" y="100" fill="white" font-size="12" text-anchor="middle">Lab 301</text>

                        <rect x="650" y="450" width="100" height="100" fill="var(--bg-surface)" stroke="var(--border)" />
                        <text x="700" y="500" fill="white" font-size="12" text-anchor="middle">Exit</text>

                        <!-- Route Line (Hidden by default, shown for effect) -->
                        <path d="M100 120 L680 120" stroke="var(--primary)" stroke-width="4" stroke-dasharray="10 10" fill="none">
                            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                        </path>
                    </svg>

                    <div class="overlay-badge">
                        <i data-lucide="wifi" size="14"></i> Live Positioning
                    </div>
                </main>
            </div>
        </div>
    `;

    const EmergencyPage = () => `
        <div class="container animate-enter emergency-layout">
            <div class="emergency-banner">
                <h1 class="text-danger" style="font-size: 3rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 1rem;">
                    <i data-lucide="siren" size="48"></i>
                    EMERGENCY ALERT
                </h1>
                <h3 style="color: white; margin-bottom: 1rem;">HAZARD DETECTED: FIRE ALARM (ZONE B South)</h3>
                <p style="font-size: 1.25rem;">Do not use elevators. Follow the illuminated path to the nearest safe exit.</p>
            </div>

            <div class="grid-3" style="margin-top: 2rem;">
                <div class="card" style="border-color: var(--primary);">
                    <h3><i data-lucide="door-open" class="text-primary"></i> Safe Exit Path</h3>
                    <p class="text-muted">Calculated via North Corridor</p>
                    <div style="font-size: 2rem; font-weight: bold; margin-top: 1rem;">120m</div>
                </div>
                
                <div class="card" style="border-color: var(--danger);">
                    <h3><i data-lucide="flame" class="text-danger"></i> Hazard Zone</h3>
                    <p class="text-muted">Avoid Zone B (Labs)</p>
                    <div style="color: var(--danger); font-weight: bold; margin-top: 1rem;">HIGH RISK</div>
                </div>
                
                 <button class="btn btn-danger" style="height: 100%; font-size: 1.25rem;" onclick="app.setEmergency(false)">
                    <i data-lucide="check-circle"></i> Mark Safe / Reset
                </button>
            </div>
            
            <div class="map-container" style="margin-top: 2rem; height: 400px; border-color: var(--danger);">
                 <svg width="100%" height="100%" viewBox="0 0 800 600">
                    <!-- Simple Floorplan -->
                    <rect x="100" y="100" width="600" height="400" fill="none" stroke="var(--border)" stroke-width="4" />
                    <!-- Hazard -->
                    <circle cx="600" cy="200" r="50" fill="rgba(239,68,68,0.3)">
                        <animate attributeName="r" values="50;70;50" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="600" y="200" fill="#ef4444" text-anchor="middle" font-weight="bold">FIRE</text>
                    
                    <!-- Safe Path -->
                    <path d="M200 400 L200 200 L500 200" stroke="#10b981" stroke-width="6" fill="none" stroke-dasharray="10 10" />
                    <circle cx="200" cy="400" r="10" fill="#3b82f6" />
                    <text x="200" y="430" fill="white" text-anchor="middle">You</text>
                </svg>
            </div>
        </div>
    `;

    const AboutPage = () => `
        <div class="container animate-enter" style="padding-top: 4rem;">
            <h1 style="margin-bottom: 2rem;">About the System</h1>
            
            <div class="card" style="margin-bottom: 2rem;">
                <h2>Problem Statement</h2>
                <p class="text-muted" style="margin-top: 1rem;">
                    In large indoor complexes like universities and malls, GPS is unreliable. During emergencies, 
                    static exit signs fail to account for dynamic hazards (e.g., fire blocking an exit) or 
                    crowd stampedes. This system solves that using real-time data.
                </p>
            </div>

            <h2>Technology Stack</h2>
            <div class="grid-3" style="margin-top: 1.5rem;">
                <div class="card">
                    <h3>Hardware</h3>
                    <ul style="margin-top: 1rem; padding-left: 1rem; color: var(--text-muted); line-height: 2;">
                        <li>BLE Beacons (ESP32)</li>
                        <li>Wi-Fi Positioning</li>
                        <li>Environmental Sensors</li>
                    </ul>
                </div>
                
                 <div class="card">
                    <h3>AI / Algorithms</h3>
                    <ul style="margin-top: 1rem; padding-left: 1rem; color: var(--text-muted); line-height: 2;">
                        <li>Random Forest (Risk Prediction)</li>
                        <li>A* Pathfinding</li>
                        <li>Crowd Density Heatmaps</li>
                    </ul>
                </div>
                
                 <div class="card">
                    <h3>Frontend</h3>
                    <ul style="margin-top: 1rem; padding-left: 1rem; color: var(--text-muted); line-height: 2;">
                        <li>Responsive Web App</li>
                        <li>Real-time Visualization</li>
                        <li>Emergency Alert System</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Main Render Function
    function render() {
        const root = document.getElementById('root');

        let content = Navbar();

        if (state.currentPage === 'home') content += HomePage();
        else if (state.currentPage === 'navigation') content += NavigationPage();
        else if (state.currentPage === 'emergency') content += EmergencyPage();
        else if (state.currentPage === 'about') content += AboutPage();

        content += Footer();

        root.innerHTML = content;

        // Re-initialize icons
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Global App API for HTML interactions
    window.app = {
        setPage,
        render,
        toggleEmergency: () => setEmergency(!state.isEmergency),
        setEmergency
    };

    // Initial Render
    document.addEventListener('DOMContentLoaded', () => {
        render();
    });
})();
