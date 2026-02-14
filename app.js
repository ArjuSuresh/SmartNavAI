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
        // Auto switch page
        if (active) {
            setPage('emergency');
        } else {
            setPage('home'); // Redirect to home when verified safe
        }
    }

    // Components
    const Navbar = () => `
        <nav class="navbar glass-panel">
            <div class="container nav-content">
                <div class="nav-logo" onclick="app.setPage('home')" style="cursor:pointer">
                    <i data-lucide="navigation" class="text-primary"></i>
                    <span>SafeNav</span>
                </div>
                <div class="nav-links">
                    <a class="nav-link ${state.currentPage === 'home' ? 'active' : ''}" onclick="app.setPage('home')">Home</a>
                    <a class="nav-link ${state.currentPage === 'navigation' ? 'active' : ''}" onclick="app.setPage('navigation')">Navigation</a>
                    <a class="nav-link ${state.currentPage === 'about' ? 'active' : ''}" onclick="app.setPage('about')">About</a>
                    ${state.isEmergency
            ? `<button class="btn btn-danger" onclick="app.setEmergency(false)">Reset Alert</button>`
            : `<button class="btn btn-danger" onclick="app.setEmergency(true)">Simulate Alert</button>`
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
                            <i data-lucide="navigation"></i> SafeNav
                        </h3>
                        <p class="text-muted" style="max-width: 300px;">
                            Next-generation indoor navigation ensuring safety through real-time crowd analytics and hazard detection.
                        </p>
                    </div>
                    <div>
                        <h4 style="margin-bottom: 1rem;">Project</h4>
                        <p class="text-muted">Dept of AI (2023-2027)</p>
                        <p class="text-muted">Spring 2026</p>
                    </div>
                </div>
                <div style="margin-top: 3rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
                    © 2026 Smart Indoor Safety Navigation System. Academic Prototype.
                </div>
            </div>
        </footer>
    `;

    // ------------------- PAGES -------------------

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
                
                <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); opacity: 1; z-index: 0;">
                    <svg width="480" height="480" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
                        <style>
                            .map-panel { transition: fill 0.5s ease, fill-opacity 0.5s ease, stroke 0.5s ease; cursor: crosshair; }
                            svg:hover .map-panel { fill: url(#route-grad) !important; fill-opacity: 0.25 !important; stroke: #10b981; }
                        </style>
                        <defs>
                            <linearGradient id="route-grad" x1="50" y1="300" x2="350" y2="100" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stop-color="#3b82f6" />
                                <stop offset="100%" stop-color="#10b981" />
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        <g class="map-group">
                            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-15; 0,0" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                            <g opacity="0.4" transform="translate(0, 0)">
                                <path class="map-panel" d="M40 90 L140 120 L140 370 L40 340 Z" fill="#1e293b" stroke="#334155" stroke-width="1"><animate attributeName="fill-opacity" values="0.4;0.6;0.4" dur="5s" repeatCount="indefinite" /></path>
                                <path class="map-panel" d="M140 120 L240 90 L240 340 L140 370 Z" fill="#0f172a" stroke="#334155" stroke-width="1"><animate attributeName="fill-opacity" values="0.6;0.4;0.6" dur="5s" repeatCount="indefinite" /></path>
                                <path class="map-panel" d="M240 90 L360 120 L360 370 L240 340 Z" fill="#1e293b" stroke="#334155" stroke-width="1"><animate attributeName="fill-opacity" values="0.4;0.6;0.4" dur="5s" repeatCount="indefinite" /></path>
                                <path d="M140 120 L140 370 M240 90 L240 340" stroke="#334155" stroke-width="1" />
                            </g>
                            <path d="M 80 300 L 220 300 C 260 300 260 240 220 240 L 140 240 C 100 240 100 180 140 180 L 320 180" stroke="rgba(255,255,255,0.05)" stroke-width="8" stroke-linecap="round" fill="none" />
                            <path d="M 80 300 L 220 300 C 260 300 260 240 220 240 L 140 240 C 100 240 100 180 140 180 L 320 180" stroke="url(#route-grad)" stroke-width="4" stroke-linecap="round" fill="none" stroke-dasharray="20 40" filter="url(#glow)"><animate attributeName="stroke-dashoffset" from="600" to="0" dur="40s" repeatCount="indefinite" /></path>
                            <g transform="translate(80, 300)"><circle r="12" fill="#3b82f6" fill-opacity="0.2"><animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" /></circle><circle r="6" fill="#3b82f6" stroke="#0f172a" stroke-width="2" /></g>
                            <g transform="translate(220, 300)"><circle r="6" fill="#1e293b" stroke="#64748b" stroke-width="2" /><circle r="2" fill="#94a3b8" /></g>
                            <g transform="translate(140, 240)"><circle r="6" fill="#1e293b" stroke="#64748b" stroke-width="2" /><circle r="2" fill="#94a3b8" /></g>
                            <g transform="translate(240, 180)"><circle r="6" fill="#1e293b" stroke="#64748b" stroke-width="2" /><circle r="2" fill="#94a3b8" /></g>
                            <g transform="translate(320, 180)"><circle r="4" fill="#10b981" /><line x1="0" y1="0" x2="0" y2="-45" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" /><path d="M 0 -45 L 35 -30 L 0 -15 Z" fill="#10b981" stroke="#059669" stroke-width="1" stroke-linejoin="round"><animate attributeName="d" values="M 0 -45 L 35 -30 L 0 -15 Z; M 0 -45 L 32 -32 L 0 -15 Z; M 0 -45 L 35 -30 L 0 -15 Z" dur="5s" repeatCount="indefinite" /></path><circle cx="0" cy="-45" r="3" fill="white" opacity="0.3"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" /></circle></g>
                        </g>
                    </svg>
                </div>
            </section>

            <section class="grid-3 animate-enter stagger-1" style="padding-bottom: 4rem;">
                <!-- Cards Omitted for brevity, using same logic as previous -->
                <div class="card">
                     <div style="background: rgba(59, 130, 246, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--primary); margin-bottom: 1.5rem;"><i data-lucide="route"></i></div>
                     <h3>AI Route Optimization</h3>
                     <p class="text-muted" style="margin-top: 0.5rem;">Advanced A* algorithms calculate the fastest path.</p>
                </div>
                <div class="card">
                    <div style="background: rgba(16, 185, 129, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--secondary); margin-bottom: 1.5rem;"><i data-lucide="users"></i></div>
                    <h3>Crowd-Aware</h3>
                    <p class="text-muted" style="margin-top: 0.5rem;">Real-time density monitoring via BLE beacons.</p>
                </div>
                <div class="card">
                    <div style="background: rgba(239, 68, 68, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--danger); margin-bottom: 1.5rem;"><i data-lucide="alert-triangle"></i></div>
                    <h3>Emergency Protocol</h3>
                    <p class="text-muted" style="margin-top: 0.5rem;">Instant hazard detection triggers automated evacuation.</p>
                </div>
            </section>
        </div>
    `;

    const AboutPage = () => `
        <div class="container animate-enter" style="padding-top: 6rem; padding-bottom: 4rem;">
            <!-- Header Section -->
            <div style="text-align: center; margin: 3rem 0 4rem;">
                <h1 style="margin-bottom: 1rem; font-size: 2.5rem;">
                    About <span class="text-gradient">SafeNav</span>
                </h1>
                <p class="text-muted" style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
                    Redefining indoor navigation with intelligent safety protocols and real-time guidance.
                </p>
            </div>

            <!-- About The Platform & Why It Exists -->
            <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                <div class="card">
                    <div style="margin-bottom: 1.5rem; color: var(--primary);">
                        <i data-lucide="info" size="32"></i>
                    </div>
                    <h2 style="margin-bottom: 1rem;">About The Platform</h2>
                    <p class="text-muted">
                        SafeNav is an intelligent indoor navigation website designed to prioritize user safety. 
                        It integrates crowd awareness and emergency guidance to ensure secure movement within complex buildings.
                    </p>
                </div>
                <div class="card">
                    <div style="margin-bottom: 1.5rem; color: var(--secondary);">
                        <i data-lucide="help-circle" size="32"></i>
                    </div>
                    <h2 style="margin-bottom: 1rem;">Why This System Exists</h2>
                    <p class="text-muted">
                        Large indoor spaces can be confusing and unsafe, especially during emergencies. 
                        Our system solves this by offering clear, real-time navigation that adapts to changing conditions.
                    </p>
                </div>
            </section>

            <!-- What The System Offers -->
            <section style="margin-bottom: 4rem;">
                <h2 style="text-align: center; margin-bottom: 2rem;">What The System Offers</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                    <div class="card" style="text-align: center;">
                        <i data-lucide="navigation" class="text-primary" style="margin-bottom: 1rem;" size="24"></i>
                        <h3 style="font-size: 1.25rem;">Indoor Navigation</h3>
                        <p class="text-muted" style="font-size: 0.9rem;">Seamless guidance through complex corridors and rooms.</p>
                    </div>
                    <div class="card" style="text-align: center;">
                        <i data-lucide="users" class="text-secondary" style="margin-bottom: 1rem;" size="24"></i>
                        <h3 style="font-size: 1.25rem;">Crowd Awareness</h3>
                        <p class="text-muted" style="font-size: 0.9rem;">Real-time density monitoring to avoid congestion.</p>
                    </div>
                    <div class="card" style="text-align: center;">
                        <i data-lucide="zap" style="color: #f59e0b; margin-bottom: 1rem;" size="24"></i>
                        <h3 style="font-size: 1.25rem;">Smart Routing</h3>
                        <p class="text-muted" style="font-size: 0.9rem;">Intelligent path selection based on efficiency and safety.</p>
                    </div>
                    <div class="card" style="text-align: center;">
                        <i data-lucide="siren" class="text-danger" style="margin-bottom: 1rem;" size="24"></i>
                        <h3 style="font-size: 1.25rem;">Emergency Guide</h3>
                        <p class="text-muted" style="font-size: 0.9rem;">Immediate evacuation routes during hazard alerts.</p>
                    </div>
                </div>
            </section>

            <!-- How It Helps & Where To Use -->
            <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                <div class="card">
                    <h3 style="margin-bottom: 1rem;">How It Helps Users</h3>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
                        <li style="display: flex; gap: 0.75rem; align-items: start;">
                            <i data-lucide="check-circle" class="text-secondary" size="20" style="margin-top: 2px;"></i>
                            <span class="text-muted">Navigate efficiently without getting lost in large buildings.</span>
                        </li>
                        <li style="display: flex; gap: 0.75rem; align-items: start;">
                            <i data-lucide="check-circle" class="text-secondary" size="20" style="margin-top: 2px;"></i>
                            <span class="text-muted">Avoid crowded areas for a faster and safer journey.</span>
                        </li>
                        <li style="display: flex; gap: 0.75rem; align-items: start;">
                            <i data-lucide="check-circle" class="text-secondary" size="20" style="margin-top: 2px;"></i>
                            <span class="text-muted">Receive instant, clear instructions during emergencies.</span>
                        </li>
                    </ul>
                </div>
                 <div class="card">
                    <h3 style="margin-bottom: 1rem;">Where It Can Be Used</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                        <span style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 2rem; border: 1px solid var(--border);">Hospitals</span>
                        <span style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 2rem; border: 1px solid var(--border);">Universities</span>
                        <span style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 2rem; border: 1px solid var(--border);">Shopping Malls</span>
                        <span style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 2rem; border: 1px solid var(--border);">Airports</span>
                        <span style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 2rem; border: 1px solid var(--border);">Corporate Offices</span>
                    </div>
                </div>
            </section>

             <!-- Safety First Design -->
            <section style="background: var(--bg-surface); border-radius: 1rem; padding: 2rem; border: 1px solid var(--primary-glow); margin-bottom: 4rem;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <i data-lucide="shield-check" class="text-primary" size="32"></i>
                    <h2 style="margin: 0;">Safety-First Design</h2>
                </div>
                <p class="text-muted" style="max-width: 800px;">
                    Unlike traditional maps, SafeNav prioritizes your well-being. We analyze environmental data to recommend routes that are not just short, but safe. 
                    In emergencies, the system overrides standard paths to guide you away from hazards.
                </p>
            </section>

            <!-- Disclaimer -->
            <section style="text-align: center; opacity: 0.7;">
                <p class="text-muted" style="font-size: 0.875rem; border-top: 1px solid var(--border); padding-top: 2rem; display: inline-block;">
                    <strong>Disclaimer:</strong> This website is an academic prototype developed for demonstration and learning purposes.
                </p>
            </section>
        </div>
    `;

    // ------------------- DATA & NAVIGATION -------------------

    // Location Database
    const locations = {
        "Thermal Engineering Lab II": { x: 110, y: 70, entry: { x: 190, y: 70 } },
        "Machine Tools Lab II": { x: 110, y: 170, entry: { x: 190, y: 170 } },
        "Mech Faculty Room": { x: 110, y: 310, entry: { x: 190, y: 310 } },
        "Left Stairs": { x: 130, y: 445, entry: { x: 190, y: 445 } }, // Aligned to 445
        "Mech HOD": { x: 140, y: 520, entry: { x: 190, y: 520 } },

        // Center Block
        "Lecture Hall (A)": { x: 280, y: 70, entry: { x: 190, y: 70 } },
        "Lecture Hall (B)": { x: 280, y: 170, entry: { x: 190, y: 170 } },
        "Faculty Center": { x: 260, y: 340, entry: { x: 260, y: 280 } },
        "Girls Toilet": { x: 10, y: 395, entry: { x: 190, y: 395 } }, // Aligned to 395
        "Boys Toilet (Center)": { x: 330, y: 400, entry: { x: 190, y: 400 } }, // Aligned to 400
        "Right Stairs": { x: 260, y: 445, entry: { x: 190, y: 445 } }, // Aligned to 445
        "AI HOD": { x: 260, y: 520, entry: { x: 190, y: 520 } },

        // Right Block
        "Boys Toilet (North)": { x: 410, y: 90, entry: { x: 460, y: 90 } }, // Aligned to 90
        "Lecture Hall (C)": { x: 560, y: 90, entry: { x: 460, y: 90 } },
        "Lecture Hall (D)": { x: 560, y: 250, entry: { x: 460, y: 250 } },
        "Stairs (East)": { x: 560, y: 360, entry: { x: 460, y: 360 } },
        "Faculty Room (Right)": { x: 560, y: 450, entry: { x: 460, y: 450 } }
    };

    const NavigationPage = () => {
        // Dynamic Options
        const options = Object.keys(locations).sort().map(loc => `<option value="${loc}">${loc}</option>`).join('');

        return `
        <div class="container animate-enter">
            <div class="nav-layout">
                <aside class="sidebar">
                    <div>
                        <h2 style="margin-bottom: 0.5rem">Current Route</h2>
                        <p class="text-muted">Select your destination to begin.</p>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Current Location (Dept / Zone)</label>
                        <select class="form-select" id="start-select">
                            <option value="" disabled selected>Select Starting Point...</option>
                            ${options}
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Destination</label>
                        <select class="form-select" id="dest-select">
                            <option value="" disabled selected>Select Destination...</option>
                            ${options}
                        </select>
                    </div>

                    <div class="card" style="padding: 1rem; border-color: var(--secondary);">
                        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Crowd Density</h4>
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--secondary);"></span>
                            <span>Low (Optimal Flow)</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; opacity: 0.5;">
                            <span style="width: 8px; height: 8px; border-radius: 50%; background: #f59e0b;"></span>
                            <span>Medium (Moderate)</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; opacity: 0.5;">
                            <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--danger);"></span>
                            <span>High (Congested)</span>
                        </div>
                    </div>

                    <button class="btn btn-primary" style="width: 100%; margin-top: auto;" onclick="app.calculateRoute()">
                        Get Optimal Route
                    </button>
                </aside>

                <main class="map-container">
                    <div style="position:absolute; inset: 0; background-image: radial-gradient(var(--border) 1px, transparent 1px); background-size: 30px 30px; opacity: 0.2;"></div>
                    
                    <svg width="100%" height="100%" viewBox="0 0 800 600" style="background: transparent;">
                        <defs>
                            <marker id="arrow-optimal" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                                <polygon points="0 0, 6 2, 0 4" fill="#3b82f6" />
                            </marker>
                        </defs>
                        
                        <text x="400" y="30" fill="var(--text-main)" font-size="16" font-weight="bold" text-anchor="middle" style="text-transform: uppercase; letter-spacing: 1px;">Sri Abhinava Vidyatirtha Block</text>

                        <g id="map-content" transform="translate(115, 85) scale(0.9)">
                            <g stroke="#64748b" stroke-width="20" fill="none" stroke-linecap="round" opacity="0.6">
                                 <path d="M190 40 L190 520" /> <!-- Spine L -->
                                 <path d="M460 40 L460 500" /> <!-- Spine R -->
                                 <path d="M170 280 L460 280" /> <!-- Bridge -->
                                 <path d="M190 520 L260 520" /> <!-- Bottom Bridge -->
                                 <path d="M170 445 L220 445" /> <!-- Stair Connector -->
                                 <path d="M170 310 L190 310" /> <!-- Mech Faculty Room Connector -->
                                 <path d="M170 70 L220 70" /> 
                                 <path d="M170 170 L220 170" /> 
                                 <path d="M260 280 L260 300" /> 
                                 <path d="M190 400 L320 400" stroke-linecap="butt" /> 
                                 <path d="M190 395 L20 395" stroke-linecap="butt" /> 
                                 <path d="M460 90 L420 90" stroke-linecap="butt" /> 
                                 <path d="M460 90 L490 90" /> 
                                 <path d="M460 250 L490 250" /> 
                                 <path d="M460 360 L490 360" /> 
                                 <path d="M460 455 L490 455" /> 
                                 <path d="M190 520 L140 520" /> 
                            </g>
                            
                            <g stroke="#334155" stroke-width="1" font-weight="bold" font-size="10" fill-opacity="0.9">
                                <g fill="#38bdf8">
                                    <rect x="20" y="20" width="150" height="100" rx="4" />
                                    <text x="95" y="65" fill="#0f172a" text-anchor="middle" stroke="none">Thermal Engineering</text>
                                    <text x="95" y="80" fill="#0f172a" text-anchor="middle" stroke="none">Lab II</text>
                                    <rect x="20" y="130" width="150" height="100" rx="4" />
                                    <text x="95" y="180" fill="#0f172a" text-anchor="middle" stroke="none">Machine Tools Lab II</text>
                                </g>
                                <g fill="#facc15">
                                    <rect x="220" y="20" width="120" height="100" rx="4" />
                                    <text x="280" y="70" fill="#0f172a" text-anchor="middle" stroke="none">Lecture Hall A</text>
                                    <rect x="220" y="130" width="120" height="100" rx="4" />
                                    <text x="280" y="180" fill="#0f172a" text-anchor="middle" stroke="none">Lecture Hall B</text>
                                    <rect x="490" y="20" width="140" height="140" rx="4" />
                                    <text x="560" y="90" fill="#0f172a" text-anchor="middle" stroke="none">Lecture Hall C</text>
                                    <rect x="490" y="180" width="140" height="140" rx="4" /> 
                                    <text x="560" y="250" fill="#0f172a" text-anchor="middle" stroke="none">Lecture Hall D</text>
                                </g>
                                <g fill="#4ade80">
                                    <rect x="20" y="240" width="150" height="140" rx="4" />
                                    <text x="95" y="310" fill="#0f172a" text-anchor="middle" stroke="none">Mech Faculty Room</text>
                                    <rect x="220" y="300" width="80" height="80" rx="4" />
                                    <text x="260" y="340" fill="#0f172a" text-anchor="middle" stroke="none">Faculty Center</text>
                                    <rect x="490" y="420" width="140" height="70" rx="4" />
                                    <text x="560" y="455" fill="#0f172a" text-anchor="middle" stroke="none">Faculty Room</text>
                                </g>
                                <g fill="#f87171">
                                    <rect x="100" y="490" width="80" height="60" rx="4" />
                                    <text x="140" y="520" fill="#0f172a" text-anchor="middle" stroke="none">Mech HOD</text>
                                    <rect x="220" y="490" width="80" height="60" rx="4" />
                                    <text x="260" y="520" fill="#0f172a" text-anchor="middle" stroke="none">AI HOD</text>
                                </g>
                                <g fill="#c084fc">
                                    <rect x="90" y="420" width="80" height="50" rx="4" />
                                    <text x="130" y="450" fill="#0f172a" text-anchor="middle" stroke="none">Left Stairs</text>
                                    <rect x="220" y="420" width="80" height="50" rx="4" />
                                    <text x="260" y="450" fill="#0f172a" text-anchor="middle" stroke="none">Right Stairs</text>
                                    <rect x="490" y="330" width="140" height="60" rx="4" />
                                    <text x="560" y="360" fill="#0f172a" text-anchor="middle" stroke="none">Stairs</text>
                                </g>
                                <g fill="#fb923c">
                                    <rect x="0" y="300" width="20" height="150" rx="2" />
                                    <text x="10" y="375" fill="#0f172a" font-size="8" text-anchor="middle" transform="rotate(-90 10 375)" stroke="none">Girls Toilet</text>
                                    <rect x="320" y="300" width="20" height="150" rx="2" />
                                    <text x="330" y="375" fill="#0f172a" font-size="8" text-anchor="middle" transform="rotate(-90 330 375)" stroke="none">Boys Toilet</text>
                                    <rect x="400" y="20" width="20" height="150" rx="2" />
                                    <text x="410" y="95" fill="#0f172a" font-size="8" text-anchor="middle" transform="rotate(-90 410 95)" stroke="none">Boys Toilet</text>
                                </g>
                            </g>
                            
                            <path id="dynamic-route-path" d="" stroke="#2563eb" stroke-width="5" fill="none" stroke-dasharray="8 4" marker-end="url(#arrow-optimal)">
                                 <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" repeatCount="indefinite" />
                            </path>
                        </g>

                    </svg>
                    
                    <div class="overlay-badge">
                        <i data-lucide="wifi" size="14"></i> Live Positioning
                    </div>
                </main>
            </div>
        </div>
        `;
    };

    const EmergencyPage = () => `
        <div class="container animate-enter emergency-layout">
            <div class="emergency-banner">
                <h1 class="text-danger" style="font-size: 3rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 1rem;">
                    <i data-lucide="siren" size="48"></i>
                    EMERGENCY ALERT
                </h1>
                <h3 style="color: white; margin-bottom: 1rem;">HAZARD DETECTED: FIRE ALARM (ZONE C Central)</h3>
                <p style="font-size: 1.25rem;">Do not use elevators. Follow the illuminated path to the nearest safe exit.</p>
            </div>

            <div class="grid-3" style="margin-top: 2rem;">
                <div class="card" style="border-color: var(--primary);">
                    <h3><i data-lucide="door-open" class="text-primary"></i> Safe Exit Path</h3>
                    <p class="text-muted">Calculated via South Corridor</p>
                    <div style="font-size: 2rem; font-weight: bold; margin-top: 1rem;">120m</div>
                </div>
                
                <div class="card" style="border-color: var(--danger);">
                    <h3><i data-lucide="flame" class="text-danger"></i> Hazard Zone</h3>
                    <p class="text-muted">Avoid Central Crossing (Zone C)</p>
                    <div style="color: var(--danger); font-weight: bold; margin-top: 1rem;">HIGH RISK</div>
                </div>
                
                 <button class="btn btn-danger" style="height: 100%; font-size: 1.25rem;" onclick="app.setEmergency(false)">
                    <i data-lucide="check-circle"></i> Mark Safe / Reset
                </button>
            </div>
            
            <div class="map-container" style="margin-top: 2rem; height: 500px; border-color: var(--danger);">
                 <svg width="100%" height="100%" viewBox="0 0 800 600" style="background: rgba(20, 0, 0, 0.3);">
                    <defs>
                        <marker id="arrow-escape" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                        </marker>
                        <radialGradient id="fire-grad">
                            <stop offset="0%" stop-color="#ef4444" />
                            <stop offset="80%" stop-color="transparent" />
                        </radialGradient>
                    </defs>
                    <g stroke="var(--border)" stroke-width="40" fill="none" stroke-linecap="square">
                        <path d="M50 300 L750 300" />
                        <path d="M80 300 L80 500 L740 500 L740 300" />
                        <rect x="20" y="260" width="80" height="80" stroke="none" fill="var(--bg-surface)" />
                        <rect x="700" y="260" width="80" height="80" stroke="none" fill="#10b981" opacity="0.2" />
                    </g>
                    <g transform="translate(400, 300)">
                        <circle r="80" fill="url(#fire-grad)" opacity="0.4"><animate attributeName="r" values="80;100;80" dur="1.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" /></circle>
                        <circle r="50" fill="url(#fire-grad)" opacity="0.6"><animate attributeName="r" values="50;60;50" dur="1s" repeatCount="indefinite" /></circle>
                        <g transform="translate(-25, -30)">
                            <path d="M25 55 C 10 55, 5 35, 10 25 C 15 15, 25 0, 25 0 C 25 0, 35 15, 40 25 C 45 35, 40 55, 25 55 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"><animate attributeName="d" values="M25 55 C 10 55, 5 35, 10 25 C 15 15, 25 0, 25 0 C 25 0, 35 15, 40 25 C 45 35, 40 55, 25 55 Z; M25 55 C 8 55, 8 38, 12 28 C 18 18, 25 5, 25 5 C 25 5, 32 18, 38 28 C 42 38, 42 55, 25 55 Z; M25 55 C 10 55, 5 35, 10 25 C 15 15, 25 0, 25 0 C 25 0, 35 15, 40 25 C 45 35, 40 55, 25 55 Z" dur="0.8s" repeatCount="indefinite" /></path>
                            <path d="M25 50 C 18 50, 15 40, 18 35 C 20 28, 25 15, 25 15 C 25 15, 30 28, 32 35 C 35 40, 32 50, 25 50 Z" fill="#f59e0b"><animate attributeName="d" values="M25 50 C 18 50, 15 40, 18 35 C 20 28, 25 15, 25 15 C 25 15, 30 28, 32 35 C 35 40, 32 50, 25 50 Z; M25 50 C 16 50, 16 42, 19 37 C 22 30, 25 18, 25 18 C 25 18, 28 30, 31 37 C 34 42, 34 50, 25 50 Z; M25 50 C 18 50, 15 40, 18 35 C 20 28, 25 15, 25 15 C 25 15, 30 28, 32 35 C 35 40, 32 50, 25 50 Z" dur="0.8s" repeatCount="indefinite" begin="0.1s" /></path>
                            <path d="M25 45 C 22 45, 20 40, 22 35 C 25 30, 25 30, 25 30 C 25 30, 25 30, 25 30 C 25 30, 25 30, 28 35 C 30 40, 28 45, 25 45 Z" fill="#fff"><animate attributeName="y" values="0;-2;0" dur="0.5s" repeatCount="indefinite" /></path>
                        </g>
                        <text x="0" y="45" fill="#ef4444" font-weight="bold" font-size="12" text-anchor="middle">FIRE HAZARD</text>
                    </g>
                    <g transform="translate(60, 300)"><circle r="12" fill="#3b82f6" stroke="white" stroke-width="2" /><text x="0" y="30" fill="white" font-weight="bold" text-anchor="middle">YOU</text></g>
                    <g transform="translate(740, 300)"><text x="0" y="5" fill="white" font-weight="bold" font-size="14" text-anchor="middle">EXIT</text></g>
                    <path d="M100 300 L320 300" stroke="#ef4444" stroke-width="4" stroke-dasharray="5 5" opacity="0.5" marker-end="url(#arrow-escape)" />
                    <line x1="330" y1="290" x2="350" y2="310" stroke="#ef4444" stroke-width="4" />
                    <line x1="350" y1="290" x2="330" y2="310" stroke="#ef4444" stroke-width="4" />
                    <path id="escape-route" d="M80 300 L80 500 L740 500 L740 340" stroke="#10b981" stroke-width="6" fill="none" class="path-optimal" marker-end="url(#arrow-escape)"><animate attributeName="stroke-dasharray" values="10,10; 0,0" dur="1s" repeatCount="indefinite" /></path>
                    <path d="M80 300 L80 500 L740 500 L740 340" stroke="white" stroke-width="2" fill="none" stroke-dasharray="20 40" stroke-opacity="0.8"><animate attributeName="stroke-dashoffset" from="600" to="0" dur="2s" repeatCount="indefinite" /></path>
                    <text x="400" y="550" fill="#10b981" font-weight="bold" font-size="14" text-anchor="middle">✓ SAFE EVACUATION ROUTE</text>
                </svg>
            </div>
        </div>
    `;

    // ------------------- LOGIC -------------------

    function calculateRoute() {
        const startVal = document.getElementById('start-select').value;
        const destVal = document.getElementById('dest-select').value;
        const pathEl = document.getElementById('dynamic-route-path');

        if (!startVal || !destVal || !locations[startVal] || !locations[destVal]) {
            return;
        }

        const start = locations[startVal];
        const dest = locations[destVal];

        // Start at the specific room center
        let d = `M ${start.x} ${start.y}`;
        // Connect to the corridor network
        d += ` L ${start.entry.x} ${start.entry.y}`;

        const bridgeY = 280;

        // Logic:
        // If entries are close in X (e.g. same spine), move direct.
        const sameColumn = Math.abs(start.entry.x - dest.entry.x) < 50;

        if (sameColumn) {
            d += ` L ${dest.entry.x} ${dest.entry.y}`;
        } else {
            // Move to Bridge Level
            if (start.entry.y !== bridgeY) d += ` L ${start.entry.x} ${bridgeY}`;
            // Move Across Bridge to Dest X
            d += ` L ${dest.entry.x} ${bridgeY}`;
            // Move to Dest Y
            d += ` L ${dest.entry.x} ${dest.entry.y}`;
        }

        // Final segment into the destination room
        d += ` L ${dest.x} ${dest.y}`;

        pathEl.setAttribute('d', d);
        pathEl.style.opacity = "1";
    }

    // Main Render Function (Defined LAST to ensure all pages are available)
    function render() {
        const root = document.getElementById('root');

        let content = Navbar();

        if (state.currentPage === 'home') content += HomePage();
        else if (state.currentPage === 'navigation') content += NavigationPage();
        else if (state.currentPage === 'emergency') content += EmergencyPage();
        else if (state.currentPage === 'about') content += AboutPage();

        content += Footer();

        root.innerHTML = content;

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Global App API
    window.app = {
        setPage,
        render,
        toggleEmergency: () => setEmergency(!state.isEmergency),
        setEmergency,
        calculateRoute
    };

    // Initialization
    document.addEventListener('DOMContentLoaded', () => {
        render();
    });
})();
