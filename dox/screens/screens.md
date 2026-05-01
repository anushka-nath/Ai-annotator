
<!-- Design System -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AI-Assisted Human-in-the-Loop Annotation Platform</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary-fixed": "#00174b",
                    "outline-variant": "#c3c6d7",
                    "on-tertiary": "#ffffff",
                    "on-secondary-fixed-variant": "#38485d",
                    "on-error-container": "#93000a",
                    "surface-container-low": "#f3f3fe",
                    "inverse-on-surface": "#f0f0fb",
                    "primary-container": "#2563eb",
                    "error": "#ba1a1a",
                    "surface-variant": "#e1e2ed",
                    "secondary-fixed": "#d3e4fe",
                    "on-tertiary-fixed": "#360f00",
                    "on-primary-container": "#eeefff",
                    "on-background": "#191b23",
                    "secondary-fixed-dim": "#b7c8e1",
                    "on-tertiary-fixed-variant": "#7d2d00",
                    "primary-fixed": "#dbe1ff",
                    "outline": "#737686",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed-variant": "#003ea8",
                    "secondary": "#505f76",
                    "surface-tint": "#0053db",
                    "on-secondary-container": "#54647a",
                    "secondary-container": "#d0e1fb",
                    "primary": "#004ac6",
                    "surface-container": "#ededf9",
                    "surface-bright": "#faf8ff",
                    "surface-container-lowest": "#ffffff",
                    "on-secondary-fixed": "#0b1c30",
                    "tertiary-fixed-dim": "#ffb596",
                    "inverse-surface": "#2e3039",
                    "on-surface": "#191b23",
                    "tertiary-container": "#bc4800",
                    "background": "#faf8ff",
                    "inverse-primary": "#b4c5ff",
                    "surface-container-high": "#e7e7f3",
                    "on-surface-variant": "#434655",
                    "surface": "#faf8ff",
                    "error-container": "#ffdad6",
                    "surface-container-highest": "#e1e2ed",
                    "surface-dim": "#d9d9e5",
                    "on-primary": "#ffffff",
                    "tertiary-fixed": "#ffdbcd",
                    "on-tertiary-container": "#ffede6",
                    "tertiary": "#943700",
                    "on-error": "#ffffff",
                    "primary-fixed-dim": "#b4c5ff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "lg": "24px",
                    "md": "16px",
                    "xl": "32px",
                    "gutter": "24px",
                    "margin": "32px",
                    "unit": "8px",
                    "sm": "8px",
                    "xs": "4px"
            },
            "fontFamily": {
                    "h1": ["Inter"],
                    "label-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "body-sm": ["Inter"],
                    "h3": ["Inter"],
                    "h2": ["Inter"]
            },
            "fontSize": {
                    "h1": ["36px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "label-md": ["14px", {"lineHeight": "1", "fontWeight": "600"}],
                    "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "h3": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "h2": ["30px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}]
            }
          }
        }
      }
    </script>
</head>
<body class="bg-background text-on-background antialiased font-body-md selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="bg-white dark:bg-slate-900 font-sans text-sm font-medium tracking-tight docked full-width top-0 border-b border-b border-gray-200 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-6 h-16 max-w-full mx-auto sticky top-0 z-50">
<div class="flex items-center gap-6">
<span class="text-xl font-bold text-slate-900 dark:text-white">AnnotateAI</span>
<div class="hidden md:flex gap-1">
<a class="px-3 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out" href="#">Dashboard</a>
<a class="px-3 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out" href="#">Projects</a>
<a class="px-3 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out" href="#">Datasets</a>
<a class="px-3 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out" href="#">Team</a>
</div>
</div>
<div class="flex items-center gap-4">
<div class="relative hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
<input class="pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-md text-sm focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 w-48 text-slate-900 dark:text-slate-100 transition-all" placeholder="Search..." type="text"/>
</div>
<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
                New Project
            </button>
<div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
<button class="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button class="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-[20px]">help</span>
</button>
</div>
<div class="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ml-2 border border-slate-300 dark:border-slate-600">
<img alt="User profile" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuJXTVCdXSYFwZ3C5UWJChur6azCUvB1o0DXxY7x0lw56u55yg5swuhr9XOmnCghkEZPN4jjzGMqaCk9shpOUAUsnbzjBLqhBsnDcJVxOLPLt4SE0L5mYejbq12e2n0u6oHTAlZunaZ34XAjCPvswogo-3Wr_MNDtE0U3-1nTxVTDNliMNlNAZ3J4WSlPq82v_8oSsRrMq3MT9OzPcFVlHO_zLQRnnnDA7Ei2TzhQFMG2_e3SW0sKpRtCL-UnPw2oy9ScTs07T3Tw"/>
</div>
</div>
</nav>
<main class="w-full flex flex-col min-h-screen">
<!-- Hero Section -->
<section class="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-[1280px] mx-auto w-full flex flex-col items-center text-center">
<div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-container-high via-background to-background opacity-50"></div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-surface-variant text-label-sm text-secondary mb-8">
<span class="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
<span>Introducing Batch v2.4</span>
</div>
<h1 class="font-h1 text-h1 text-on-surface max-w-4xl mb-6">
                AI-Assisted Human-in-the-Loop Annotation Platform
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
                Scale your AI development with multi-modal annotation and seamless review workflows. Precision labeling backed by industrial-grade reliability.
            </p>
<div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button class="bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-DEFAULT font-label-md text-label-md shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] transition-all">
                    Start Annotating
                </button>
<button class="bg-transparent border border-outline hover:bg-surface-container-low text-on-surface px-6 py-3 rounded-DEFAULT font-label-md text-label-md transition-all">
                    View Dashboard
                </button>
</div>
</section>
<!-- Features Bento Grid -->
<section class="py-16 px-6 max-w-[1280px] mx-auto w-full">
<div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
<!-- Card 1 -->
<div class="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] flex flex-col gap-4">
<div class="h-12 w-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[24px]">category</span>
</div>
<h3 class="font-h3 text-h3 text-on-surface">Multi-modal annotation</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Support for images, video, text, and 3D sensor data. Build comprehensive datasets across multiple modalities in a single interface.
                    </p>
</div>
<!-- Card 2 -->
<div class="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] flex flex-col gap-4">
<div class="h-12 w-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[24px]">model_training</span>
</div>
<h3 class="font-h3 text-h3 text-on-surface">AI-assisted labeling</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Accelerate throughput with auto-segmentation, bounding box suggestions, and pre-labeling models that learn from your corrections.
                    </p>
</div>
<!-- Card 3 -->
<div class="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1)] flex flex-col gap-4">
<div class="h-12 w-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<h3 class="font-h3 text-h3 text-on-surface">Review pipeline</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Multi-stage quality assurance workflows with consensus scoring, automated error detection, and detailed auditor feedback loops.
                    </p>
</div>
</div>
</section>
<!-- Mock Dashboard UI Preview -->
<section class="py-16 px-6 max-w-[1280px] mx-auto w-full">
<div class="rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] overflow-hidden flex flex-col md:flex-row h-[600px]">
<!-- Mock Sidebar -->
<div class="w-64 border-r border-surface-variant bg-surface-container-low hidden md:flex flex-col p-4 gap-4">
<div class="flex items-center gap-3 px-2 py-3 mb-4 border-b border-surface-variant">
<div class="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                            P
                        </div>
<div>
<div class="font-label-md text-label-md text-on-surface">Image Segmentation</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">Batch v2.4</div>
</div>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-container text-on-primary-container">
<span class="material-symbols-outlined text-[20px]">dashboard</span>
<span class="font-label-md text-label-md">Overview</span>
</div>
<div class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined text-[20px]">list_alt</span>
<span class="font-label-md text-label-md">Tasks</span>
</div>
<div class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined text-[20px]">label</span>
<span class="font-label-md text-label-md">Labels</span>
</div>
<div class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined text-[20px]">insights</span>
<span class="font-label-md text-label-md">Analytics</span>
</div>
</div>
</div>
<!-- Mock Main Content -->
<div class="flex-1 bg-surface p-6 flex flex-col gap-6 overflow-hidden">
<div class="flex justify-between items-center">
<h2 class="font-h2 text-h2 text-on-surface">Overview</h2>
<button class="bg-primary text-on-primary px-4 py-2 rounded-DEFAULT font-label-md text-label-md">
                            Submit Batch
                        </button>
</div>
<!-- Metrics Row -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div class="p-4 rounded-lg border border-surface-variant bg-surface-container-lowest">
<div class="font-label-sm text-label-sm text-on-surface-variant mb-1">Total Tasks</div>
<div class="font-h3 text-h3 text-on-surface">12,450</div>
<div class="font-label-sm text-label-sm text-primary mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">trending_up</span> +5.2%
                            </div>
</div>
<div class="p-4 rounded-lg border border-surface-variant bg-surface-container-lowest">
<div class="font-label-sm text-label-sm text-on-surface-variant mb-1">Completion Rate</div>
<div class="font-h3 text-h3 text-on-surface">84.2%</div>
<div class="w-full h-1.5 bg-surface-variant rounded-full mt-3 overflow-hidden">
<div class="w-[84%] h-full bg-primary rounded-full"></div>
</div>
</div>
<div class="p-4 rounded-lg border border-surface-variant bg-surface-container-lowest">
<div class="font-label-sm text-label-sm text-on-surface-variant mb-1">Consensus Score</div>
<div class="font-h3 text-h3 text-on-surface">0.92</div>
<div class="font-label-sm text-label-sm text-on-surface-variant mt-2 flex items-center gap-1">
                                Target: 0.95
                            </div>
</div>
</div>
<!-- Chart Area Placeholder -->
<div class="flex-1 rounded-lg border border-surface-variant bg-surface-container-lowest p-4 flex flex-col relative overflow-hidden">
<div class="font-label-md text-label-md text-on-surface mb-4">Throughput (Last 7 Days)</div>
<!-- Decorative Chart -->
<div class="flex-1 flex items-end gap-2 px-2 pb-6 pt-10">
<div class="w-full bg-primary/20 rounded-t-sm" style="height: 40%"></div>
<div class="w-full bg-primary/40 rounded-t-sm" style="height: 55%"></div>
<div class="w-full bg-primary/30 rounded-t-sm" style="height: 35%"></div>
<div class="w-full bg-primary/60 rounded-t-sm" style="height: 70%"></div>
<div class="w-full bg-primary/50 rounded-t-sm" style="height: 60%"></div>
<div class="w-full bg-primary/80 rounded-t-sm" style="height: 85%"></div>
<div class="w-full bg-primary rounded-t-sm" style="height: 100%"></div>
</div>
<!-- X Axis Labels -->
<div class="absolute bottom-2 left-4 right-4 flex justify-between text-label-sm text-on-surface-variant px-2">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-white dark:bg-slate-950 font-sans text-xs text-slate-500 full-width py-8 border-t border-t border-gray-100 dark:border-slate-900 mt-auto">
<div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div class="font-bold text-slate-400">
                AnnotateAI
            </div>
<div class="flex flex-wrap justify-center gap-6">
<a class="text-slate-400 hover:text-slate-600 hover:text-blue-500 transition-colors" href="#">Privacy Policy</a>
<a class="text-slate-400 hover:text-slate-600 hover:text-blue-500 transition-colors" href="#">Terms of Service</a>
<a class="text-slate-400 hover:text-slate-600 hover:text-blue-500 transition-colors" href="#">API Docs</a>
<a class="text-slate-400 hover:text-slate-600 hover:text-blue-500 transition-colors" href="#">Contact Support</a>
</div>
<div class="text-center md:text-right">
                © 2024 AnnotateAI Systems Inc. Industrial Grade Reliability.
            </div>
</div>
</footer>
</body></html>

<!-- Landing Page -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AnnotateAI - Login / Role Selection</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#00174b",
                        "outline-variant": "#c3c6d7",
                        "on-tertiary": "#ffffff",
                        "on-secondary-fixed-variant": "#38485d",
                        "on-error-container": "#93000a",
                        "surface-container-low": "#f3f3fe",
                        "inverse-on-surface": "#f0f0fb",
                        "primary-container": "#2563eb",
                        "error": "#ba1a1a",
                        "surface-variant": "#e1e2ed",
                        "secondary-fixed": "#d3e4fe",
                        "on-tertiary-fixed": "#360f00",
                        "on-primary-container": "#eeefff",
                        "on-background": "#191b23",
                        "secondary-fixed-dim": "#b7c8e1",
                        "on-tertiary-fixed-variant": "#7d2d00",
                        "primary-fixed": "#dbe1ff",
                        "outline": "#737686",
                        "on-secondary": "#ffffff",
                        "on-primary-fixed-variant": "#003ea8",
                        "secondary": "#505f76",
                        "surface-tint": "#0053db",
                        "on-secondary-container": "#54647a",
                        "secondary-container": "#d0e1fb",
                        "primary": "#004ac6",
                        "surface-container": "#ededf9",
                        "surface-bright": "#faf8ff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed": "#0b1c30",
                        "tertiary-fixed-dim": "#ffb596",
                        "inverse-surface": "#2e3039",
                        "on-surface": "#191b23",
                        "tertiary-container": "#bc4800",
                        "background": "#faf8ff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-high": "#e7e7f3",
                        "on-surface-variant": "#434655",
                        "surface": "#faf8ff",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#e1e2ed",
                        "surface-dim": "#d9d9e5",
                        "on-primary": "#ffffff",
                        "tertiary-fixed": "#ffdbcd",
                        "on-tertiary-container": "#ffede6",
                        "tertiary": "#943700",
                        "on-error": "#ffffff",
                        "primary-fixed-dim": "#b4c5ff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "lg": "24px",
                        "md": "16px",
                        "xl": "32px",
                        "gutter": "24px",
                        "margin": "32px",
                        "unit": "8px",
                        "sm": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "h1": ["Inter"],
                        "label-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "body-sm": ["Inter"],
                        "h3": ["Inter"],
                        "h2": ["Inter"]
                    },
                    "fontSize": {
                        "h1": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "1", "fontWeight": "600" }],
                        "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "body-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "h3": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
                        "h2": ["30px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-surface-container-low min-h-screen flex items-center justify-center p-md font-body-md text-on-surface">
<div class="bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-outline-variant w-full max-w-md p-xl flex flex-col gap-lg">
<div class="text-center">
<h1 class="font-h2 text-h2 text-on-surface mb-xs">AnnotateAI</h1>
<p class="font-body-sm text-body-sm text-on-surface-variant">Sign in to your workspace</p>
</div>
<div class="flex flex-col gap-unit">
<label class="font-label-md text-label-md text-on-surface-variant" for="username">Username</label>
<input class="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md text-on-surface placeholder-outline" id="username" placeholder="Enter your username" type="text"/>
</div>
<div class="flex flex-col gap-unit">
<span class="font-label-md text-label-md text-on-surface-variant">Select Role</span>
<div class="grid grid-cols-2 gap-md">
<button class="group relative flex flex-col items-center justify-center p-md rounded-lg border border-outline-variant bg-surface hover:border-primary hover:bg-surface-container transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-lowest" type="button">
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors duration-200 mb-xs" style="font-size: 32px;">edit</span>
<span class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors duration-200">Annotator</span>
<div class="absolute inset-0 border-2 border-transparent group-focus:border-primary rounded-lg pointer-events-none"></div>
</button>
<button class="group relative flex flex-col items-center justify-center p-md rounded-lg border border-outline-variant bg-surface hover:border-primary hover:bg-surface-container transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-lowest" type="button">
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors duration-200 mb-xs" style="font-size: 32px;">fact_check</span>
<span class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors duration-200">Reviewer</span>
<div class="absolute inset-0 border-2 border-transparent group-focus:border-primary rounded-lg pointer-events-none"></div>
</button>
</div>
</div>
<button class="w-full bg-primary text-on-primary py-sm px-md rounded-lg font-label-md text-label-md hover:bg-primary-fixed-variant transition-colors duration-200 shadow-sm mt-sm" type="button">
            Enter Platform
        </button>
</div>
</body></html>

<!-- Login / Role Selection -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Annotator Workspace - AnnotateAI</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#00174b",
                        "outline-variant": "#c3c6d7",
                        "on-tertiary": "#ffffff",
                        "on-secondary-fixed-variant": "#38485d",
                        "on-error-container": "#93000a",
                        "surface-container-low": "#f3f3fe",
                        "inverse-on-surface": "#f0f0fb",
                        "primary-container": "#2563eb",
                        "error": "#ba1a1a",
                        "surface-variant": "#e1e2ed",
                        "secondary-fixed": "#d3e4fe",
                        "on-tertiary-fixed": "#360f00",
                        "on-primary-container": "#eeefff",
                        "on-background": "#191b23",
                        "secondary-fixed-dim": "#b7c8e1",
                        "on-tertiary-fixed-variant": "#7d2d00",
                        "primary-fixed": "#dbe1ff",
                        "outline": "#737686",
                        "on-secondary": "#ffffff",
                        "on-primary-fixed-variant": "#003ea8",
                        "secondary": "#505f76",
                        "surface-tint": "#0053db",
                        "on-secondary-container": "#54647a",
                        "secondary-container": "#d0e1fb",
                        "primary": "#004ac6",
                        "surface-container": "#ededf9",
                        "surface-bright": "#faf8ff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed": "#0b1c30",
                        "tertiary-fixed-dim": "#ffb596",
                        "inverse-surface": "#2e3039",
                        "on-surface": "#191b23",
                        "tertiary-container": "#bc4800",
                        "background": "#faf8ff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-high": "#e7e7f3",
                        "on-surface-variant": "#434655",
                        "surface": "#faf8ff",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#e1e2ed",
                        "surface-dim": "#d9d9e5",
                        "on-primary": "#ffffff",
                        "tertiary-fixed": "#ffdbcd",
                        "on-tertiary-container": "#ffede6",
                        "tertiary": "#943700",
                        "on-error": "#ffffff",
                        "primary-fixed-dim": "#b4c5ff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "lg": "24px",
                        "md": "16px",
                        "xl": "32px",
                        "gutter": "24px",
                        "margin": "32px",
                        "unit": "8px",
                        "sm": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "h1": ["Inter"],
                        "label-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "body-sm": ["Inter"],
                        "h3": ["Inter"],
                        "h2": ["Inter"]
                    },
                    "fontSize": {
                        "h1": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "1", "fontWeight": "600" }],
                        "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "body-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "h3": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
                        "h2": ["30px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md text-body-md h-screen w-screen overflow-hidden flex">
<!-- SideNavBar (Shared Component) -->
<nav class="flex flex-col h-full py-4 border-r bg-slate-50 dark:bg-slate-950 h-screen w-64 border-r border-r border-gray-200 dark:border-slate-800 flex-shrink-0 z-10">
<!-- Header -->
<div class="px-6 mb-8 flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg">
<img alt="Project Icon" class="w-full h-full object-cover rounded-lg" data-alt="A stylized, minimalist 3D geometric icon representing artificial intelligence and data structuring, rendered in corporate blues and crisp whites. Professional, clean lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7uz5txPKHJJIcHJjA_MFfezS-cYwqq-P0xzTF_AwoJg-wBd6ietDB44bK3qObsXAlE9nd8if_dD2x5qRsIYuPFZzKXxplx9W-1S6NL8ix_ZHja1pkouev6ynEq-DbWjMiEMRzRf2taWbs7z9x-nL6GbA2WDtmD8pQ2vICkCYGB0Ic4qsmyKr2StzNpsj0jKqqMn2P5uz8SAr9TnI8jVruUYtaZUj7HZ09RbHR1Tr9fHOblhb9FrIDeSZrbPYBxOnly8MiCK54sE0"/>
</div>
<div>
<h2 class="font-label-md text-label-md text-on-background font-semibold truncate">Image Segmentation</h2>
<p class="font-label-sm text-label-sm text-on-surface-variant truncate mt-1">Batch v2.4</p>
</div>
</div>
<!-- Navigation Links -->
<div class="flex-1 px-4 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear group" href="#">
<span class="material-symbols-outlined text-xl group-hover:text-primary">dashboard</span>
<span class="font-sans text-xs font-semibold uppercase tracking-wider">Overview</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 duration-150 ease-linear group" href="#">
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">list_alt</span>
<span class="font-sans text-xs font-semibold uppercase tracking-wider">Tasks</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear group" href="#">
<span class="material-symbols-outlined text-xl group-hover:text-primary">label</span>
<span class="font-sans text-xs font-semibold uppercase tracking-wider">Labels</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear group" href="#">
<span class="material-symbols-outlined text-xl group-hover:text-primary">insights</span>
<span class="font-sans text-xs font-semibold uppercase tracking-wider">Analytics</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear group" href="#">
<span class="material-symbols-outlined text-xl group-hover:text-primary">settings</span>
<span class="font-sans text-xs font-semibold uppercase tracking-wider">Settings</span>
</a>
</div>
<!-- CTA -->
<div class="px-6 mb-6">
<button class="w-full py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-sm">Submit Batch</button>
</div>
<!-- Footer Links -->
<div class="px-4 border-t border-gray-200 dark:border-slate-800 pt-4 space-y-1">
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear group" href="#">
<span class="material-symbols-outlined text-lg group-hover:text-primary">menu_book</span>
<span class="font-sans text-xs font-semibold uppercase tracking-wider">Documentation</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear group" href="#">
<span class="material-symbols-outlined text-lg group-hover:text-primary">contact_support</span>
<span class="font-sans text-xs font-semibold uppercase tracking-wider">Support</span>
</a>
</div>
</nav>
<!-- Main Content Area -->
<div class="flex-1 flex overflow-hidden">
<!-- Left Sidebar: Task List -->
<div class="w-80 bg-surface border-r border-outline-variant flex flex-col z-0">
<div class="p-4 border-b border-outline-variant">
<h3 class="font-h3 text-h3 text-on-surface mb-2">Queue</h3>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-lg font-body-sm text-body-sm focus:ring-2 focus:ring-primary text-on-surface placeholder-on-surface-variant" placeholder="Search tasks..." type="text"/>
</div>
</div>
<div class="flex-1 overflow-y-auto p-4 space-y-2">
<!-- Task Item 1 (Active) -->
<div class="p-3 bg-primary-container/10 border border-primary-container rounded-lg cursor-pointer shadow-sm relative overflow-hidden">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div class="flex justify-between items-start mb-2 pl-2">
<span class="font-label-md text-label-md text-on-surface font-semibold">IMG_0942.jpg</span>
<span class="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm text-[10px]">In Progress</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant pl-2 truncate">Urban intersection daytime</p>
</div>
<!-- Task Item 2 -->
<div class="p-3 bg-surface-container-lowest border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors shadow-sm">
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-on-surface">IMG_0943.jpg</span>
<span class="px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm text-[10px]">To Do</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant truncate">Highway overpass dusk</p>
</div>
<!-- Task Item 3 -->
<div class="p-3 bg-surface-container-lowest border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors shadow-sm">
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-on-surface">IMG_0944.jpg</span>
<span class="px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm text-[10px]">To Do</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant truncate">Residential street rain</p>
</div>
<!-- Task Item 4 -->
<div class="p-3 bg-surface-container-lowest border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors shadow-sm opacity-60">
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-on-surface line-through">IMG_0941.jpg</span>
<span class="px-2 py-0.5 bg-green-100 text-green-800 rounded-full font-label-sm text-label-sm text-[10px]">Complete</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant truncate">Pedestrian crossing</p>
</div>
</div>
</div>
<!-- Right Panel: Main Workspace -->
<div class="flex-1 flex flex-col bg-surface-container-lowest relative">
<!-- Top Action Bar -->
<div class="h-14 border-b border-outline-variant bg-surface px-6 flex items-center justify-between">
<div class="flex items-center gap-4">
<button class="p-2 hover:bg-surface-container-high rounded-md text-on-surface-variant transition-colors" title="Zoom In">
<span class="material-symbols-outlined">zoom_in</span>
</button>
<button class="p-2 hover:bg-surface-container-high rounded-md text-on-surface-variant transition-colors" title="Zoom Out">
<span class="material-symbols-outlined">zoom_out</span>
</button>
<button class="p-2 hover:bg-surface-container-high rounded-md text-on-surface-variant transition-colors" title="Pan">
<span class="material-symbols-outlined">pan_tool</span>
</button>
<div class="w-px h-6 bg-outline-variant mx-2"></div>
<button class="p-2 bg-primary-container/10 text-primary rounded-md transition-colors flex items-center gap-2" title="Polygon Tool">
<span class="material-symbols-outlined text-sm">polyline</span>
<span class="font-label-sm text-label-sm">Draw</span>
</button>
</div>
<div class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span class="material-symbols-outlined text-sm">visibility</span>
<span>Opacity: 80%</span>
</div>
</div>
<!-- Workspace Canvas -->
<div class="flex-1 bg-[#E5E7EB] relative overflow-hidden flex items-center justify-center p-8">
<!-- Main Image Container -->
<div class="relative w-full max-w-4xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg overflow-hidden bg-white border border-outline-variant">
<img alt="Annotation Target" class="w-full h-auto block" data-alt="A high-resolution photograph of a busy city intersection during the day, featuring multiple cars, pedestrians waiting at crosswalks, and traffic lights. The image is clear and well-lit, suitable for computer vision training. Professional corporate lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWdpl-KmoVYNUd9JT7zl1o_7j5KQLafTHWGhJK2kcLVar1uT5i7-yChmpHqcsTf5R39jq7C8g5KeNeCM-ZJFgIZPQtJQ4BXxqvdjPx9YOaATN88kW5NZzQMbd7pkEKHY1KXwV0llJ2jj5ehnk9aq_EjmJztFdSF_krYDqh4De6CXdm5_68P1m063OTjEoLpHslc76XXLXZiEd4BrZ8X5dLiQaMwVWG23JwgeTqR9qRropIi1qC7whjFKn8FAwT64DV6n0gY3SA_vk"/>
<!-- SVG Overlay for Annotations -->
<svg class="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 1200 800">
<!-- Example Polygon (Car) -->
<polygon fill="rgba(37, 99, 235, 0.3)" points="450,400 550,380 600,420 580,500 420,480" stroke="#2563EB" stroke-linejoin="round" stroke-width="3"></polygon>
<circle class="pointer-events-auto cursor-pointer hover:r-6 transition-all" cx="580" cy="500" fill="white" r="5" stroke="#2563EB" stroke-width="2"></circle>
<circle class="pointer-events-auto cursor-pointer" cx="420" cy="480" fill="white" r="5" stroke="#2563EB" stroke-width="2"></circle>
<circle class="pointer-events-auto cursor-pointer" cx="450" cy="400" fill="white" r="5" stroke="#2563EB" stroke-width="2"></circle>
<!-- Crosshair Tool Indicator -->
<line stroke="rgba(0,0,0,0.3)" stroke-dasharray="4" stroke-width="1" x1="0" x2="1200" y1="450" y2="450"></line>
<line stroke="rgba(0,0,0,0.3)" stroke-dasharray="4" stroke-width="1" x1="500" x2="500" y1="0" y2="800"></line>
</svg>
</div>
<!-- Floating AI Suggestion Box (Level 2 Elevation) -->
<div class="absolute right-8 top-8 w-72 bg-surface rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-outline-variant overflow-hidden z-20">
<div class="bg-surface-container p-3 border-b border-outline-variant flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-sm">auto_awesome</span>
<span class="font-label-md text-label-md text-on-surface">AI Suggestion</span>
</div>
<div class="p-4 space-y-4">
<div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-1">Recommended Label:</p>
<p class="font-h3 text-h3 text-on-surface">Car</p>
</div>
<div>
<div class="flex justify-between items-center mb-1">
<span class="font-label-sm text-label-sm text-on-surface-variant">Confidence</span>
<span class="font-label-sm text-label-sm text-primary">89%</span>
</div>
<div class="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full" style="width: 89%"></div>
</div>
</div>
<div class="flex gap-2 pt-2">
<button class="flex-1 py-1.5 border border-outline-variant rounded bg-surface text-on-surface hover:bg-surface-container-low transition-colors font-label-sm text-label-sm">Reject</button>
<button class="flex-1 py-1.5 bg-primary text-on-primary rounded hover:bg-on-primary-fixed-variant transition-colors font-label-sm text-label-sm shadow-sm">Accept</button>
</div>
</div>
</div>
</div>
<!-- Bottom Control Panel -->
<div class="bg-surface border-t border-outline-variant p-6 flex flex-col gap-6 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<div>
<h4 class="font-label-md text-label-md text-on-surface mb-3">Select Label Category</h4>
<div class="flex flex-wrap gap-3">
<label class="relative cursor-pointer">
<input checked="" class="peer sr-only" name="label_cat" type="radio"/>
<div class="px-4 py-2 rounded-full border border-primary-container bg-primary-container text-on-primary-container font-label-sm text-label-sm transition-all peer-checked:ring-2 peer-checked:ring-primary peer-checked:ring-offset-2 flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-500"></div>
                                Car
                            </div>
</label>
<label class="relative cursor-pointer">
<input class="peer sr-only" name="label_cat" type="radio"/>
<div class="px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm transition-all peer-checked:ring-2 peer-checked:ring-primary peer-checked:ring-offset-2 peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-green-500"></div>
                                Pedestrian
                            </div>
</label>
<label class="relative cursor-pointer">
<input class="peer sr-only" name="label_cat" type="radio"/>
<div class="px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm transition-all peer-checked:ring-2 peer-checked:ring-primary peer-checked:ring-offset-2 peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-orange-500"></div>
                                Cyclist
                            </div>
</label>
<label class="relative cursor-pointer">
<input class="peer sr-only" name="label_cat" type="radio"/>
<div class="px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm transition-all peer-checked:ring-2 peer-checked:ring-primary peer-checked:ring-offset-2 peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-red-500"></div>
                                Traffic Light
                            </div>
</label>
</div>
</div>
<div class="flex justify-between items-center border-t border-outline-variant pt-4 mt-auto">
<div class="text-on-surface-variant font-body-sm text-body-sm">
                        Objects annotated: <strong class="text-on-surface">1</strong> / 12 expected
                    </div>
<div class="flex gap-4">
<button class="px-6 py-3 border border-outline-variant rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors">Skip Image</button>
<button class="px-8 py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-[0_4px_6px_-1px_rgba(37,99,235,0.3)] flex items-center gap-2">
<span class="material-symbols-outlined text-sm">check_circle</span>
                            Submit Annotation
                        </button>
</div>
</div>
</div>
</div>
</div>
</body></html>

<!-- Annotator Workspace -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AnnotateAI - Reviewer Workspace</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary-fixed": "#00174b",
                    "outline-variant": "#c3c6d7",
                    "on-tertiary": "#ffffff",
                    "on-secondary-fixed-variant": "#38485d",
                    "on-error-container": "#93000a",
                    "surface-container-low": "#f3f3fe",
                    "inverse-on-surface": "#f0f0fb",
                    "primary-container": "#2563eb",
                    "error": "#ba1a1a",
                    "surface-variant": "#e1e2ed",
                    "secondary-fixed": "#d3e4fe",
                    "on-tertiary-fixed": "#360f00",
                    "on-primary-container": "#eeefff",
                    "on-background": "#191b23",
                    "secondary-fixed-dim": "#b7c8e1",
                    "on-tertiary-fixed-variant": "#7d2d00",
                    "primary-fixed": "#dbe1ff",
                    "outline": "#737686",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed-variant": "#003ea8",
                    "secondary": "#505f76",
                    "surface-tint": "#0053db",
                    "on-secondary-container": "#54647a",
                    "secondary-container": "#d0e1fb",
                    "primary": "#004ac6",
                    "surface-container": "#ededf9",
                    "surface-bright": "#faf8ff",
                    "surface-container-lowest": "#ffffff",
                    "on-secondary-fixed": "#0b1c30",
                    "tertiary-fixed-dim": "#ffb596",
                    "inverse-surface": "#2e3039",
                    "on-surface": "#191b23",
                    "tertiary-container": "#bc4800",
                    "background": "#faf8ff",
                    "inverse-primary": "#b4c5ff",
                    "surface-container-high": "#e7e7f3",
                    "on-surface-variant": "#434655",
                    "surface": "#faf8ff",
                    "error-container": "#ffdad6",
                    "surface-container-highest": "#e1e2ed",
                    "surface-dim": "#d9d9e5",
                    "on-primary": "#ffffff",
                    "tertiary-fixed": "#ffdbcd",
                    "on-tertiary-container": "#ffede6",
                    "tertiary": "#943700",
                    "on-error": "#ffffff",
                    "primary-fixed-dim": "#b4c5ff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "lg": "24px",
                    "md": "16px",
                    "xl": "32px",
                    "gutter": "24px",
                    "margin": "32px",
                    "unit": "8px",
                    "sm": "8px",
                    "xs": "4px"
            },
            "fontFamily": {
                    "h1": ["Inter"],
                    "label-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "body-sm": ["Inter"],
                    "h3": ["Inter"],
                    "h2": ["Inter"]
            },
            "fontSize": {
                    "h1": ["36px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "label-md": ["14px", {"lineHeight": "1", "fontWeight": "600"}],
                    "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "h3": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "h2": ["30px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}]
            }
          }
        }
      }
    </script>
</head>
<body class="bg-background text-on-surface font-body-md h-screen overflow-hidden flex flex-col">
<!-- TopNavBar -->
<nav class="bg-white dark:bg-slate-900 font-sans text-sm font-medium tracking-tight docked full-width top-0 border-b border-gray-200 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-6 h-16 max-w-full mx-auto sticky top-0 z-50">
<div class="flex items-center gap-6">
<div class="text-xl font-bold text-slate-900 dark:text-white">AnnotateAI</div>
<!-- search_bar: on_left -->
<div class="relative hidden md:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
<input class="pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-blue-500" placeholder="Search..." type="text"/>
</div>
</div>
<div class="hidden md:flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out px-3 py-2 rounded-md" href="#">Dashboard</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out px-3 py-2 rounded-md" href="#">Projects</a>
<a class="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2 duration-200 ease-in-out" href="#">Datasets</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out px-3 py-2 rounded-md" href="#">Team</a>
</div>
<div class="flex items-center gap-4">
<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">New Project</button>
<button class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
<span class="material-symbols-outlined">help</span>
</button>
<img alt="User profile" class="w-8 h-8 rounded-full border border-gray-200" data-alt="A small, circular profile picture of a professional user, styled within a clean, modern UI context, reflecting an industrial-grade, precise application design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6iHyd1XDfTuX98bqcHjNPQs746o_NIucdn-BezIEs7iUSqmfHQvQMONokxNPMmneMr-1y5ePUaFBH7mFnhTn1gBR6JGhPbn9FijtIo1ZlrLsYKWFAktBeRA3TOf4f-Em53xJuISQzK1s4imrbNk_VoiP__a3011KVZGh6JmoQ0f_sbwuL3f5hNFBFgZ9v5QMsUbCmUSrn4mSgl4E2mWq41jBEErPeW1upRe3W14Up-ifcdqnOCK1qWm09aBSXs05cLvQkXrEji7o"/>
</div>
</nav>
<div class="flex flex-1 overflow-hidden">
<!-- SideNavBar -->
<aside class="bg-slate-50 dark:bg-slate-950 font-sans text-xs font-semibold uppercase tracking-wider h-screen w-64 border-r border-gray-200 dark:border-slate-800 flat no shadows flex flex-col h-full py-4 border-r bg-slate-50 dark:bg-slate-950">
<div class="px-6 mb-6 flex flex-col gap-2">
<div class="flex items-center gap-3">
<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
<span class="material-symbols-outlined text-[20px]">category</span>
</div>
<div>
<h2 class="font-bold text-slate-900 dark:text-white capitalize text-sm">Image Segmentation</h2>
<span class="text-slate-500 normal-case">Batch v2.4</span>
</div>
</div>
</div>
<nav class="flex-1 px-3 space-y-1">
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear flex items-center gap-3 px-3 py-2 rounded-md" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Overview</span>
</a>
<a class="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 flex items-center gap-3 px-3 py-2 rounded-md" href="#">
<span class="material-symbols-outlined">list_alt</span>
<span>Tasks</span>
</a>
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear flex items-center gap-3 px-3 py-2 rounded-md" href="#">
<span class="material-symbols-outlined">label</span>
<span>Labels</span>
</a>
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear flex items-center gap-3 px-3 py-2 rounded-md" href="#">
<span class="material-symbols-outlined">insights</span>
<span>Analytics</span>
</a>
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-transform duration-150 ease-linear flex items-center gap-3 px-3 py-2 rounded-md" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
<div class="px-6 mt-auto space-y-4">
<button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg normal-case font-medium text-sm transition-colors">Submit Batch</button>
<div class="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-slate-800">
<a class="text-slate-500 hover:text-slate-700 flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-[16px]">menu_book</span>
<span>Documentation</span>
</a>
<a class="text-slate-500 hover:text-slate-700 flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-[16px]">contact_support</span>
<span>Support</span>
</a>
</div>
</div>
</aside>
<!-- Main Workspace Area -->
<main class="flex-1 flex flex-col bg-surface-container-lowest overflow-hidden">
<!-- Review Queue Panel (Left split) -->
<div class="flex flex-1 overflow-hidden">
<div class="w-80 border-r border-surface-variant bg-surface flex flex-col">
<div class="p-md border-b border-surface-variant flex justify-between items-center">
<h3 class="font-h3 text-h3 text-on-surface">Review Queue</h3>
<span class="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-2 py-1 rounded-full">12 Pending</span>
</div>
<div class="flex-1 overflow-y-auto p-sm space-y-sm">
<!-- Queue Item Active -->
<div class="bg-surface-container-high rounded-lg p-md border border-outline-variant cursor-pointer relative shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)]">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-on-surface">IMG_8923.jpg</span>
<span class="text-xs font-medium text-secondary">2m ago</span>
</div>
<div class="flex items-center gap-2 mb-2">
<span class="bg-green-100 text-green-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Submitted</span>
<span class="text-body-sm text-on-surface-variant font-body-sm">Annotator: Sarah J.</span>
</div>
<div class="flex items-center gap-1 text-secondary">
<span class="material-symbols-outlined text-[14px]">label</span>
<span class="text-[12px]">Pedestrian, Vehicle</span>
</div>
</div>
<!-- Queue Item Inactive -->
<div class="bg-surface-container-lowest hover:bg-surface-container-low rounded-lg p-md border border-surface-variant cursor-pointer transition-colors">
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-on-surface">IMG_8924.jpg</span>
<span class="text-xs font-medium text-secondary">15m ago</span>
</div>
<div class="flex items-center gap-2 mb-2">
<span class="bg-green-100 text-green-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Submitted</span>
<span class="text-body-sm text-on-surface-variant font-body-sm">Annotator: Mike T.</span>
</div>
<div class="flex items-center gap-1 text-secondary">
<span class="material-symbols-outlined text-[14px]">label</span>
<span class="text-[12px]">Traffic Light</span>
</div>
</div>
<!-- Queue Item Inactive -->
<div class="bg-surface-container-lowest hover:bg-surface-container-low rounded-lg p-md border border-surface-variant cursor-pointer transition-colors">
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-on-surface">IMG_8925.jpg</span>
<span class="text-xs font-medium text-secondary">1h ago</span>
</div>
<div class="flex items-center gap-2 mb-2">
<span class="bg-green-100 text-green-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Submitted</span>
<span class="text-body-sm text-on-surface-variant font-body-sm">Annotator: Sarah J.</span>
</div>
<div class="flex items-center gap-1 text-secondary">
<span class="material-symbols-outlined text-[14px]">label</span>
<span class="text-[12px]">Pedestrian</span>
</div>
</div>
</div>
</div>
<!-- Canvas and Details Split -->
<div class="flex-1 flex flex-col">
<!-- Image Canvas -->
<div class="flex-1 bg-surface-variant relative p-lg overflow-hidden flex items-center justify-center">
<div class="absolute top-4 right-4 bg-surface-container-highest rounded-lg p-1 shadow-sm flex gap-1 z-10 border border-outline-variant">
<button class="p-1.5 hover:bg-surface-dim rounded text-on-surface-variant"><span class="material-symbols-outlined text-[20px]">zoom_in</span></button>
<button class="p-1.5 hover:bg-surface-dim rounded text-on-surface-variant"><span class="material-symbols-outlined text-[20px]">zoom_out</span></button>
<div class="w-px bg-outline-variant my-1 mx-1"></div>
<button class="p-1.5 hover:bg-surface-dim rounded text-on-surface-variant"><span class="material-symbols-outlined text-[20px]">fit_screen</span></button>
</div>
<!-- The Annotated Image container -->
<div class="relative max-w-full max-h-full rounded-lg shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] overflow-hidden border border-outline-variant">
<img alt="Task Content" class="max-w-full max-h-full object-contain block" data-alt="A high-resolution urban street scene showing pedestrians walking across a crosswalk on a sunny day. The image is framed within a modern, technical UI workspace, intended for data annotation and review, reflecting a clean, industrial design aesthetic with a light mode color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRpGzgzEOM86K9XpoZtNVsWkGIMo2qgl3SUTSYyEQIdRBCc2sBaV37-yWzeqU9x5DRBDIgABGDShjoMUSHF1gCk04De1mJffP7gDFEXF3mV4MaHrNa_r8Nr7Rfe-oOkC5-1G9uGZeATqxQ9FkW9YagN0YvrD2l1nPxVieKM-8u3v7uAZtvvGb8qTT5I3sqe_DhQ-d2ztJQvmzNW36-0hyo6O8nJ624vucFQ-WupsbmEP8AMaN1EseE03EbuJtbPFN5RkQjyNMWk3U"/>
<!-- Bounding Box Annotation -->
<div class="absolute border-2 border-primary bg-primary/10" style="top: 30%; left: 40%; width: 15%; height: 50%;">
<div class="absolute -top-6 left-[-2px] bg-primary text-on-primary text-[10px] px-1.5 py-0.5 rounded-t font-semibold flex items-center gap-1 whitespace-nowrap">
<span>Pedestrian</span>
<span class="opacity-80 font-normal">94%</span>
</div>
<!-- Resize handles -->
<div class="absolute top-0 left-0 w-2 h-2 bg-white border border-primary -translate-x-1/2 -translate-y-1/2"></div>
<div class="absolute top-0 right-0 w-2 h-2 bg-white border border-primary translate-x-1/2 -translate-y-1/2"></div>
<div class="absolute bottom-0 left-0 w-2 h-2 bg-white border border-primary -translate-x-1/2 translate-y-1/2"></div>
<div class="absolute bottom-0 right-0 w-2 h-2 bg-white border border-primary translate-x-1/2 translate-y-1/2"></div>
</div>
</div>
</div>
<!-- Details & Actions Panel (Bottom) -->
<div class="h-64 bg-surface border-t border-surface-variant p-lg flex gap-lg">
<!-- Details -->
<div class="flex-1 bg-surface-container-lowest rounded-xl border border-surface-variant p-md shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] flex flex-col">
<h4 class="font-label-md text-label-md text-on-surface mb-4 border-b border-surface-variant pb-2">Annotation Details</h4>
<div class="grid grid-cols-2 gap-x-8 gap-y-4 flex-1">
<div>
<span class="text-body-sm font-body-sm text-secondary block mb-1">Label</span>
<span class="font-label-md text-label-md text-on-surface bg-surface-container px-2 py-1 rounded inline-block">Pedestrian</span>
</div>
<div>
<span class="text-body-sm font-body-sm text-secondary block mb-1">Confidence</span>
<div class="flex items-center gap-2">
<span class="font-label-md text-label-md text-on-surface">94%</span>
<div class="h-1.5 w-24 bg-surface-variant rounded-full overflow-hidden">
<div class="h-full bg-primary" style="width: 94%"></div>
</div>
</div>
</div>
<div>
<span class="text-body-sm font-body-sm text-secondary block mb-1">Annotator</span>
<div class="flex items-center gap-2">
<div class="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-[10px] font-bold">SJ</div>
<span class="font-label-md text-label-md text-on-surface">Sarah J.</span>
</div>
</div>
<div>
<span class="text-body-sm font-body-sm text-secondary block mb-1">Time Spent</span>
<span class="font-label-md text-label-md text-on-surface">01:42</span>
</div>
</div>
</div>
<!-- Actions -->
<div class="w-80 flex flex-col gap-4">
<button class="flex-1 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] flex items-center justify-center gap-3 transition-all hover:shadow-md border border-[#14532d]/20">
<span class="material-symbols-outlined text-[28px]">check_circle</span>
<span class="font-h3 text-h3">Approve</span>
</button>
<button class="flex-1 bg-surface-container-lowest hover:bg-error-container text-error rounded-xl shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] border border-error/30 flex items-center justify-center gap-3 transition-all hover:shadow-md">
<span class="material-symbols-outlined text-[28px]">cancel</span>
<span class="font-h3 text-h3">Reject</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
</body></html>

<!-- Reviewer Workspace -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AnnotateAI - Overview</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#00174b",
                        "outline-variant": "#c3c6d7",
                        "on-tertiary": "#ffffff",
                        "on-secondary-fixed-variant": "#38485d",
                        "on-error-container": "#93000a",
                        "surface-container-low": "#f3f3fe",
                        "inverse-on-surface": "#f0f0fb",
                        "primary-container": "#2563eb",
                        "error": "#ba1a1a",
                        "surface-variant": "#e1e2ed",
                        "secondary-fixed": "#d3e4fe",
                        "on-tertiary-fixed": "#360f00",
                        "on-primary-container": "#eeefff",
                        "on-background": "#191b23",
                        "secondary-fixed-dim": "#b7c8e1",
                        "on-tertiary-fixed-variant": "#7d2d00",
                        "primary-fixed": "#dbe1ff",
                        "outline": "#737686",
                        "on-secondary": "#ffffff",
                        "on-primary-fixed-variant": "#003ea8",
                        "secondary": "#505f76",
                        "surface-tint": "#0053db",
                        "on-secondary-container": "#54647a",
                        "secondary-container": "#d0e1fb",
                        "primary": "#004ac6",
                        "surface-container": "#ededf9",
                        "surface-bright": "#faf8ff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed": "#0b1c30",
                        "tertiary-fixed-dim": "#ffb596",
                        "inverse-surface": "#2e3039",
                        "on-surface": "#191b23",
                        "tertiary-container": "#bc4800",
                        "background": "#faf8ff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-high": "#e7e7f3",
                        "on-surface-variant": "#434655",
                        "surface": "#faf8ff",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#e1e2ed",
                        "surface-dim": "#d9d9e5",
                        "on-primary": "#ffffff",
                        "tertiary-fixed": "#ffdbcd",
                        "on-tertiary-container": "#ffede6",
                        "tertiary": "#943700",
                        "on-error": "#ffffff",
                        "primary-fixed-dim": "#b4c5ff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "lg": "24px",
                        "md": "16px",
                        "xl": "32px",
                        "gutter": "24px",
                        "margin": "32px",
                        "unit": "8px",
                        "sm": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "h1": ["Inter"],
                        "label-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "body-sm": ["Inter"],
                        "h3": ["Inter"],
                        "h2": ["Inter"]
                    },
                    "fontSize": {
                        "h1": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "1", "fontWeight": "600" }],
                        "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "body-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "h3": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
                        "h2": ["30px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-background font-body-md text-body-md antialiased overflow-hidden flex h-screen">
<!-- SideNavBar (Shared Component) -->
<nav class="flex flex-col h-full py-4 border-r bg-slate-50 border-r border-gray-200 w-64 shrink-0 justify-between">
<div>
<!-- Header -->
<div class="px-md mb-xl flex items-center gap-sm">
<img alt="Project Icon" class="w-10 h-10 rounded-lg object-cover border border-outline-variant" data-alt="A small, stylized digital icon representing a technical project, featuring abstract geometric nodes connected by thin lines in a sharp, modern vector style. The color palette incorporates vibrant primary blue and stark white, creating a crisp contrast. The overall aesthetic is highly professional, clean, and representative of advanced AI or data processing systems." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJAWY0s6nRouH4wcjyoElivX3y-mu6BsN922t4c8KaT2vv5I6ESB1SedoDPzDGaXM5ulxBO9UIwmhgCZUxqDCRBCoGM3UzonY_PH-3S1qOTA1XDyeWWj16oFqknHpibdyzQoq9XNYZDBrDdOF-aoWDB2tzUQZ8ZSwgKvx_nXvJX-Pdrm1hHCC_5MGWLx6etdyV5Bn_R85B-UfFcG1qZ3c06ggtetzy627VZJcDGClRbuFUX-7v6cUjoOceDreYtHRH_hnw-_-ixG4"/>
<div>
<h2 class="font-label-md text-label-md text-on-surface truncate w-40">Image Segmentation</h2>
<p class="font-label-sm text-label-sm text-on-surface-variant truncate w-40">Batch v2.4</p>
</div>
</div>
<!-- Navigation Links -->
<div class="px-sm space-y-unit flex-1">
<!-- Overview (Active) -->
<a class="flex items-center gap-md px-md py-sm rounded-lg bg-blue-50 text-blue-700 border-r-4 border-blue-600 font-sans text-xs font-semibold uppercase tracking-wider duration-150 ease-linear hover:translate-x-1 transition-transform" href="#">
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">dashboard</span>
<span>Overview</span>
</a>
<!-- Tasks (Inactive) -->
<a class="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:bg-slate-100 font-sans text-xs font-semibold uppercase tracking-wider duration-150 ease-linear hover:translate-x-1 transition-transform" href="#">
<span class="material-symbols-outlined text-[20px]">list_alt</span>
<span>Tasks</span>
</a>
<!-- Labels (Inactive) -->
<a class="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:bg-slate-100 font-sans text-xs font-semibold uppercase tracking-wider duration-150 ease-linear hover:translate-x-1 transition-transform" href="#">
<span class="material-symbols-outlined text-[20px]">label</span>
<span>Labels</span>
</a>
<!-- Analytics (Inactive) -->
<a class="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:bg-slate-100 font-sans text-xs font-semibold uppercase tracking-wider duration-150 ease-linear hover:translate-x-1 transition-transform" href="#">
<span class="material-symbols-outlined text-[20px]">insights</span>
<span>Analytics</span>
</a>
<!-- Settings (Inactive) -->
<a class="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:bg-slate-100 font-sans text-xs font-semibold uppercase tracking-wider duration-150 ease-linear hover:translate-x-1 transition-transform" href="#">
<span class="material-symbols-outlined text-[20px]">settings</span>
<span>Settings</span>
</a>
</div>
</div>
<!-- Footer Actions -->
<div class="px-sm mt-auto space-y-sm">
<button class="w-full bg-primary text-on-primary font-label-md text-label-md py-unit rounded-lg shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] hover:bg-primary-fixed-variant transition-colors duration-150 ease-linear mb-md">
                Submit Batch
            </button>
<div class="border-t border-outline-variant pt-sm space-y-unit">
<a class="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:bg-slate-100 font-sans text-xs font-semibold uppercase tracking-wider duration-150 ease-linear hover:translate-x-1 transition-transform" href="#">
<span class="material-symbols-outlined text-[18px]">menu_book</span>
<span>Documentation</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:bg-slate-100 font-sans text-xs font-semibold uppercase tracking-wider duration-150 ease-linear hover:translate-x-1 transition-transform" href="#">
<span class="material-symbols-outlined text-[18px]">contact_support</span>
<span>Support</span>
</a>
</div>
</div>
</nav>
<!-- Main Content Area -->
<main class="flex-1 overflow-y-auto bg-surface p-xl relative">
<div class="max-w-[1280px] mx-auto space-y-xl">
<!-- Page Header -->
<div class="flex justify-between items-end mb-lg">
<div>
<h1 class="font-h1 text-h1 text-on-surface">Overview</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mt-xs">Real-time metrics for Image Segmentation Batch v2.4.</p>
</div>
<div class="flex gap-md">
<button class="flex items-center gap-xs px-md py-sm rounded-lg border border-outline bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors font-label-md text-label-md shadow-sm">
<span class="material-symbols-outlined text-[18px]">calendar_today</span>
                        Last 7 Days
                    </button>
<button class="flex items-center gap-xs px-md py-sm rounded-lg bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim transition-colors font-label-md text-label-md shadow-sm">
<span class="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
</div>
</div>
<!-- Bento Grid - Metrics Cards (Level 1 Elevation) -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Total Tasks -->
<div class="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] flex flex-col justify-between h-32 relative overflow-hidden group hover:shadow-[0_10px_15px_-3px_rgb(0,0,0,0.1)] transition-shadow duration-300">
<div class="absolute top-0 right-0 p-md opacity-20 group-hover:opacity-40 transition-opacity duration-300">
<span class="material-symbols-outlined text-primary text-[48px]">stack</span>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Tasks</p>
<div class="flex items-baseline gap-sm">
<p class="font-h2 text-h2 text-on-surface">12,450</p>
<span class="flex items-center font-label-sm text-label-sm text-[#16a34a] bg-[#dcfce7] px-xs py-[2px] rounded-full">
<span class="material-symbols-outlined text-[14px]">trending_up</span> +12%
                        </span>
</div>
</div>
<!-- Completion Rate -->
<div class="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] flex flex-col justify-between h-32 hover:shadow-[0_10px_15px_-3px_rgb(0,0,0,0.1)] transition-shadow duration-300">
<div class="flex justify-between items-start">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Completion Rate</p>
<span class="material-symbols-outlined text-on-surface-variant text-[20px]">check_circle</span>
</div>
<div>
<div class="flex justify-between items-baseline mb-sm">
<p class="font-h2 text-h2 text-on-surface">84.2%</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Target: 95%</p>
</div>
<!-- Progress Bar -->
<div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div class="bg-primary h-1.5 rounded-full" style="width: 84.2%"></div>
</div>
</div>
</div>
<!-- Approval Rate -->
<div class="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] flex flex-col justify-between h-32 hover:shadow-[0_10px_15px_-3px_rgb(0,0,0,0.1)] transition-shadow duration-300 relative overflow-hidden">
<!-- Glassmorphic accent -->
<div class="absolute -right-8 -top-8 w-24 h-24 bg-primary-fixed-dim rounded-full blur-2xl opacity-50 pointer-events-none"></div>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider z-10 relative">Approval Rate</p>
<div class="flex items-baseline gap-sm z-10 relative">
<p class="font-h2 text-h2 text-on-surface">91.0%</p>
<span class="flex items-center font-label-sm text-label-sm text-error bg-error-container px-xs py-[2px] rounded-full">
<span class="material-symbols-outlined text-[14px]">trending_down</span> -2.1%
                        </span>
</div>
</div>
<!-- Average Confidence -->
<div class="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] flex flex-col justify-between h-32 hover:shadow-[0_10px_15px_-3px_rgb(0,0,0,0.1)] transition-shadow duration-300">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Confidence</p>
<div class="flex justify-between items-end">
<p class="font-h2 text-h2 text-on-surface">0.88</p>
<!-- Simulated Sparkline using SVGs and CSS -->
<div class="w-24 h-8 flex items-end gap-[2px] opacity-70">
<div class="w-full bg-primary-container rounded-t-sm" style="height: 40%"></div>
<div class="w-full bg-primary-container rounded-t-sm" style="height: 50%"></div>
<div class="w-full bg-primary-container rounded-t-sm" style="height: 45%"></div>
<div class="w-full bg-primary-container rounded-t-sm" style="height: 60%"></div>
<div class="w-full bg-primary-container rounded-t-sm" style="height: 75%"></div>
<div class="w-full bg-primary-container rounded-t-sm" style="height: 85%"></div>
<div class="w-full bg-primary rounded-t-sm" style="height: 88%"></div>
</div>
</div>
</div>
</div>
<!-- Throughput Chart Area -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] p-xl relative overflow-hidden">
<!-- Header -->
<div class="flex justify-between items-center mb-lg">
<div>
<h3 class="font-h3 text-h3 text-on-surface">Throughput</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-xs">Task completion volume over the last 7 days.</p>
</div>
<div class="flex items-center gap-xs">
<span class="w-3 h-3 rounded-full bg-primary block"></span>
<span class="font-label-sm text-label-sm text-on-surface-variant mr-md">Completed</span>
<span class="w-3 h-3 rounded-full bg-outline-variant block"></span>
<span class="font-label-sm text-label-sm text-on-surface-variant">In Progress</span>
</div>
</div>
<!-- Abstract Chart Representation (Glassmorphic / CSS Based) -->
<div class="h-64 w-full relative flex items-end justify-between px-md pt-lg border-b border-l border-outline-variant">
<!-- Grid Lines -->
<div class="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none opacity-20">
<div class="border-t border-outline border-dashed w-full"></div>
<div class="border-t border-outline border-dashed w-full"></div>
<div class="border-t border-outline border-dashed w-full"></div>
<div class="border-t border-outline border-dashed w-full"></div>
</div>
<!-- Bars -->
<!-- Day 1 -->
<div class="relative w-[10%] flex flex-col justify-end items-center group h-full">
<div class="w-full max-w-[40px] bg-outline-variant/30 rounded-t-sm transition-all duration-300" style="height: 20%;"></div>
<div class="w-full max-w-[40px] bg-primary/80 rounded-t-sm absolute bottom-0 transition-all duration-300 group-hover:bg-primary shadow-sm" style="height: 45%;"></div>
<span class="absolute -bottom-6 font-label-sm text-label-sm text-on-surface-variant">Mon</span>
</div>
<!-- Day 2 -->
<div class="relative w-[10%] flex flex-col justify-end items-center group h-full">
<div class="w-full max-w-[40px] bg-outline-variant/30 rounded-t-sm transition-all duration-300" style="height: 30%;"></div>
<div class="w-full max-w-[40px] bg-primary/80 rounded-t-sm absolute bottom-0 transition-all duration-300 group-hover:bg-primary shadow-sm" style="height: 60%;"></div>
<span class="absolute -bottom-6 font-label-sm text-label-sm text-on-surface-variant">Tue</span>
</div>
<!-- Day 3 -->
<div class="relative w-[10%] flex flex-col justify-end items-center group h-full">
<div class="w-full max-w-[40px] bg-outline-variant/30 rounded-t-sm transition-all duration-300" style="height: 15%;"></div>
<div class="w-full max-w-[40px] bg-primary/80 rounded-t-sm absolute bottom-0 transition-all duration-300 group-hover:bg-primary shadow-sm" style="height: 55%;"></div>
<span class="absolute -bottom-6 font-label-sm text-label-sm text-on-surface-variant">Wed</span>
</div>
<!-- Day 4 -->
<div class="relative w-[10%] flex flex-col justify-end items-center group h-full">
<div class="w-full max-w-[40px] bg-outline-variant/30 rounded-t-sm transition-all duration-300" style="height: 25%;"></div>
<div class="w-full max-w-[40px] bg-primary/80 rounded-t-sm absolute bottom-0 transition-all duration-300 group-hover:bg-primary shadow-sm" style="height: 70%;"></div>
<span class="absolute -bottom-6 font-label-sm text-label-sm text-on-surface-variant">Thu</span>
</div>
<!-- Day 5 (Peak) -->
<div class="relative w-[10%] flex flex-col justify-end items-center group h-full">
<div class="w-full max-w-[40px] bg-outline-variant/30 rounded-t-sm transition-all duration-300" style="height: 10%;"></div>
<div class="w-full max-w-[40px] bg-primary rounded-t-sm absolute bottom-0 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)]" style="height: 90%;"></div>
<!-- Tooltip on peak -->
<div class="absolute -top-10 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-sm py-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            Peak: 2,450 Tasks
                        </div>
<span class="absolute -bottom-6 font-label-sm text-label-sm text-on-surface-variant font-bold">Fri</span>
</div>
<!-- Day 6 -->
<div class="relative w-[10%] flex flex-col justify-end items-center group h-full">
<div class="w-full max-w-[40px] bg-outline-variant/30 rounded-t-sm transition-all duration-300" style="height: 35%;"></div>
<div class="w-full max-w-[40px] bg-primary/80 rounded-t-sm absolute bottom-0 transition-all duration-300 group-hover:bg-primary shadow-sm" style="height: 40%;"></div>
<span class="absolute -bottom-6 font-label-sm text-label-sm text-on-surface-variant">Sat</span>
</div>
<!-- Day 7 -->
<div class="relative w-[10%] flex flex-col justify-end items-center group h-full">
<div class="w-full max-w-[40px] bg-outline-variant/30 rounded-t-sm transition-all duration-300" style="height: 40%;"></div>
<div class="w-full max-w-[40px] bg-primary/80 rounded-t-sm absolute bottom-0 transition-all duration-300 group-hover:bg-primary shadow-sm" style="height: 25%;"></div>
<span class="absolute -bottom-6 font-label-sm text-label-sm text-on-surface-variant">Sun</span>
</div>
</div>
<!-- Margin for x-axis labels -->
<div class="h-8 w-full mt-2"></div>
</div>
</div>
</main>
</body></html>

