import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Network,
  Play,
  Users,
  Mail,
  Linkedin,
  Phone,
  Plus,
  BarChart3,
  ShoppingCart,
  Activity,
  AlertCircle,
  Check,
  RefreshCw,
  Zap,
  Search,
  Bot,
  Package,
  FileText,
  TrendingUp,
  PieChart,
  Truck,
  RotateCcw,
  ScanLine,
  Terminal,
  ChevronRight,
  Settings,
  Bell,
  Home,
  FileBox,
  CreditCard,
  Building2,
  Video,
  Target,
  BarChart4,
  Send,
  ShieldCheck,
  Server,
  Sparkles,
  Rocket,
  Award,
  Star,
  Heart,
  Code2,
  Briefcase,
  GraduationCap
} from 'lucide-react';

/**
 * Atlas IntelliTek - Strategic Landing Page
 * REDESIGNED: Odoo-Style Vibrant & Playful Aesthetic
 * Colors: Violet/Blue/Sky/Cyan gradients - Subtle & Easy on Eyes
 */

/* -------------------------------------------------------------------------- */
/* CUSTOM STYLES (Injected for animations)                                     */
/* -------------------------------------------------------------------------- */

const customStyles = `
  /* Google Fonts Import */
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Shadows+Into+Light+Two&display=swap');

  /* Apply fonts globally */
  body {
    font-family: 'Shadows Into Light Two', cursive, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, .font-heading {
    font-family: 'Caveat', cursive, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-30px) scale(1.05); }
  }

  @keyframes blob {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
  }

  @keyframes scan {
    0% { transform: translateY(0); }
    100% { transform: translateY(220px); }
  }

  @keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes slide-up {
    0% { transform: translateY(60px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes fadeInScale {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #8b5cf6; }
  }

  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-marquee {
    animation: marquee 25s linear infinite;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }

  .animate-blob {
    animation: blob 7s ease-in-out infinite;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .animate-bounce-in {
    animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
  }

  .animate-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  .animate-fade-in-scale {
    animation: fadeInScale 0.8s ease-out forwards;
  }

  .animate-fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-fade-in-up-delay-1 {
    animation-delay: 0.2s;
  }

  .animate-fade-in-up-delay-2 {
    animation-delay: 0.4s;
  }

  .animate-fade-in-up-delay-3 {
    animation-delay: 0.6s;
  }

  .hero-text-reveal {
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: 0.3s;
  }

  .hero-text-line-1 { animation-delay: 0.1s; }
  .hero-text-line-2 { animation-delay: 0.3s; }
  .hero-text-line-3 { animation-delay: 0.5s; }

  .gradient-text {
    background: linear-gradient(135deg, #8b5cf6 0%, #0ea5e9 50%, #06b6d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-text-warm {
    background: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .squircle {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #8b5cf6, #0ea5e9);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #7c3aed, #0284c7);
  }
`;

/* -------------------------------------------------------------------------- */
/* SUBCOMPONENTS                                                               */
/* -------------------------------------------------------------------------- */

const FeatureCard = ({ icon, title, description, color = "violet" }) => {
  const colorClasses = {
    violet: "from-violet-500/10 to-sky-500/10 border-violet-200 hover:border-violet-400",
    teal: "from-teal-500/10 to-cyan-500/10 border-teal-200 hover:border-teal-400",
    cyan: "from-cyan-500/10 to-blue-500/10 border-cyan-200 hover:border-cyan-400"
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} p-8 rounded-3xl border-2 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 group hover:scale-105 hover:-translate-y-2`}>
      <div className="mb-6 bg-white w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
    </div>
  );
};

const ContactRow = ({ icon, label, value, link }) => (
  <div className="flex items-center gap-4 group">
    <div className="text-violet-400 group-hover:scale-110 transition-transform">{icon}</div>
    <div className="flex-1">
      <p className="text-xs text-violet-300 font-bold uppercase tracking-wider">{label}</p>
      {link ? (
        <a href={link} className="text-white font-semibold hover:text-violet-300 transition-colors text-lg">{value}</a>
      ) : (
        <p className="text-white font-semibold text-lg">{value}</p>
      )}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* BROWSER MOCKUP COMPONENT                                                    */
/* -------------------------------------------------------------------------- */

const VideoWithOverlay = ({ src, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="relative aspect-video group">
      <div className={`absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent transition-opacity pointer-events-none z-10 flex items-center justify-center ${isPlaying ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
        <div className="w-24 h-24 bg-white/30 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
          <Play size={48} className="fill-white text-white ml-2" />
        </div>
      </div>
      <video
        ref={videoRef}
        controls
        playsInline
        webkit-playsinline="true"
        className="w-full h-full object-cover"
        poster={poster}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const BrowserMockup = ({ children, title = "Astra" }) => (
  <div className="bg-white rounded-3xl shadow-2xl shadow-violet-500/20 overflow-hidden border-2 border-slate-200 hover:shadow-violet-500/30 transition-shadow duration-500">
    {/* Browser Header */}
    <div className="h-12 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-3">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-white rounded-lg px-4 py-1 text-sm text-slate-500 font-medium border border-slate-200 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          {title}.atlasintellitek.com
        </div>
      </div>
    </div>
    {/* Content */}
    <div className="bg-slate-50">
      {children}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* INFINITE MARQUEE COMPONENT                                                  */
/* -------------------------------------------------------------------------- */

const InfiniteMarquee = () => {
  const companies = [
    { name: "LARSEN & TOUBRO", status: "In Discussion", style: "font-black tracking-tighter" },
    { name: "AVANT-GARDE", status: "In Discussion", style: "font-bold tracking-wide" },
    { name: "Watflow", status: "Pilot Interest", style: "font-bold italic font-serif" },
    { name: "LARSEN & TOUBRO", status: "In Discussion", style: "font-black tracking-tighter" },
    { name: "AVANT-GARDE", status: "In Discussion", style: "font-bold tracking-wide" },
    { name: "Watflow", status: "Pilot Interest", style: "font-bold italic font-serif" },
  ];

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-violet-50 via-white to-sky-50 rounded-3xl border border-violet-100">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...companies, ...companies].map((company, i) => (
          <div key={i} className="flex items-center gap-3 mx-12">
            <span className={`text-2xl text-slate-800 ${company.style}`}>{company.name}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-violet-500 to-sky-500 text-white">
              {company.status}
            </span>
          </div>
        ))}
      </div>
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-violet-50 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sky-50 to-transparent pointer-events-none"></div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* GSAP ASTRA DEMO ANIMATION COMPONENT - COMPLETE VERSION                      */
/* -------------------------------------------------------------------------- */

const GsapAstraDemo = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [logs, setLogs] = useState([]);
  const [currentView, setCurrentView] = useState('dashboard');
  const [rowApproved, setRowApproved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Tool icons configuration matching original
  const toolIcons = [
    { icon: 'fa-file-invoice-dollar', color: 'text-green-600', bg: 'bg-white' },
    { icon: 'fa-brands fa-google', color: 'text-blue-500', bg: 'bg-white' },
    { icon: 'fa-brands fa-slack', color: 'text-purple-800', bg: 'bg-white' },
    { icon: 'fa-brands fa-shopify', color: 'text-green-500', bg: 'bg-white' },
    { icon: 'fa-brands fa-jira', color: 'text-blue-600', bg: 'bg-white' },
    { icon: 'fa-brands fa-aws', color: 'text-orange-500', bg: 'bg-white' },
    { icon: 'fa-brands fa-github', color: 'text-gray-700', bg: 'bg-white' },
    { icon: 'fa-brands fa-trello', color: 'text-blue-400', bg: 'bg-white' },
    { icon: 'fa-brands fa-instagram', color: 'text-cyan-500', bg: 'bg-white' },
    { icon: 'fa-brands fa-discord', color: 'text-indigo-600', bg: 'bg-white' },
    { icon: 'fa-database', color: 'text-gray-500', bg: 'bg-white' },
    { icon: 'fa-server', color: 'text-teal-500', bg: 'bg-white' },
  ];

  const addLog = (text, type = 'info') => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [...prev, { text, type, time }]);
  };

  useEffect(() => {
    if (!hasStarted || !containerRef.current) return;

    // Register GSAP plugins
    if (typeof gsap === 'undefined') {
      console.warn('GSAP not loaded');
      return;
    }
    gsap.registerPlugin(TextPlugin, MotionPathPlugin);

    const container = containerRef.current;
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => setIsPlaying(false)
    });
    timelineRef.current = tl;

    // Reset states
    setLogs([]);
    setCurrentView('dashboard');
    setRowApproved(false);
    setShowToast(false);

    // --- SCENE 1: CHAT INTRO ---
    tl.set('.scene-chat', { display: 'flex', opacity: 1 })
      .set('.scene-setup, .scene-dashboard, .scene-outro', { display: 'none', opacity: 0 })
      .to('.user-msg', { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.75)" })
      .to('.typewriter-text', {
        text: "Hey Astra, we are a mid-sized tire manufacturer. Can you create the full ERP system for us?",
        duration: 2.5,
        ease: "none"
      })
      .to('.cursor-blink', { opacity: 0, duration: 0.1 })
      .to('.user-msg', { y: -40, scale: 0.95, duration: 0.6, delay: 0.2 })
      .set('.astra-msg', { display: 'block' })
      .to('.astra-msg', { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.75)" })
      .to(['.user-msg', '.astra-msg'], { opacity: 0, y: -50, duration: 0.5, delay: 1.5, stagger: 0.1 })

    // --- SCENE 2: NEURAL HUB ---
      .set('.scene-chat', { display: 'none' })
      .set('.scene-setup', { display: 'block', opacity: 1 })
      .add("setupStart")
      .to('.astra-core', { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }, "setupStart")

      // Icons animate to circle positions
      .to('.tool-icon', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
        stagger: 0.05
      }, "setupStart+=0.1")

      // Draw connection lines
      .to('.web-line', {
        strokeDashoffset: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out"
      }, "setupStart+=0.5")

      // Particles animate to center
      .to('.particle-dot', {
        attr: { cx: '50%', cy: '50%' },
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.in"
      }, "setupStart+=1.5")

      // Terminal appears and logs start simultaneously
      .to('.log-terminal', { opacity: 1, y: 0, duration: 0.6, ease: "back.out" }, "setupStart+=0.3")
      .call(() => {
        addLog("Initializing core protocols...", 'wait');
        setTimeout(() => addLog("Handshake: QuickBooks OAuth2", 'success'), 500);
        setTimeout(() => addLog("Handshake: Google Workspace", 'success'), 800);
        setTimeout(() => addLog("Building Manufacturing Schema...", 'wait'), 1500);
        setTimeout(() => addLog("Optimizing Supply Chain Graph...", 'wait'), 2200);
        setTimeout(() => addLog("Deploying Dashboard v2.0", 'success'), 3000);
      }, [], "setupStart+=0.3")

      // Scene out
      .to(['.tool-icon', '.web-line', '.log-terminal', '.particle-dot'], { scale: 0, opacity: 0, duration: 0.5, delay: 1.5, stagger: 0.02 })
      .to('.astra-core', { scale: 30, opacity: 0, duration: 0.8, ease: "power2.in" }, "-=0.2")
      .set('.scene-setup', { display: 'none' })

    // --- SCENE 3: DASHBOARD REVEAL ---
      .set('.scene-dashboard', { display: 'flex', opacity: 1 })
      .add("dashStart")
      .to('.sidebar', { x: 0, duration: 1, ease: "power3.out" }, "dashStart")
      .to('.widget', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "dashStart+=0.3")

    // --- SCENE 4: WORKFLOW DEMO ---
      // Cursor enters
      .set(['.cursor-ring', '.cursor-dot'], { left: "110%", top: "110%", opacity: 1 })
      .to(['.cursor-ring', '.cursor-dot'], { left: "18%", top: "28%", duration: 1.2, ease: "power2.inOut" })

      // Hover & click on Approvals nav
      .to('.nav-approvals', { backgroundColor: "rgba(255,255,255,0.8)", scale: 1.02, duration: 0.2 })
      .call(() => {
        // Click ripple effect
        const ripple = container.querySelector('.click-ripple');
        if (ripple) {
          gsap.fromTo(ripple,
            { width: 20, height: 20, opacity: 1 },
            { width: 60, height: 60, opacity: 0, duration: 0.4, ease: "power1.out" }
          );
        }
      })
      .to('.nav-approvals', { backgroundColor: "transparent", scale: 1, duration: 0.2, delay: 0.1 })

      // Switch to approvals view
      .to('.view-dashboard', { opacity: 0, scale: 0.98, duration: 0.4 })
      .call(() => setCurrentView('approvals'))
      .to('.view-approvals', { opacity: 1, scale: 1, duration: 0.5 })

      // Move cursor to table row
      .to(['.cursor-ring', '.cursor-dot'], { left: "55%", top: "38%", duration: 1 })
      .to('.row-po', { backgroundColor: "#f3e8ff", scale: 1.01, duration: 0.2 })
      .call(() => {
        const ripple = container.querySelector('.click-ripple');
        if (ripple) {
          gsap.fromTo(ripple,
            { width: 20, height: 20, opacity: 1 },
            { width: 60, height: 60, opacity: 0, duration: 0.4, ease: "power1.out" }
          );
        }
      })

      // Open modal
      .set('.modal-approval', { display: 'flex', pointerEvents: 'auto' })
      .to('.modal-backdrop', { opacity: 1, duration: 0.3 })
      .to('.modal-content', { opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.8)" })

      // Move cursor to approve button
      .to(['.cursor-ring', '.cursor-dot'], { left: "65%", top: "75%", duration: 1.5, delay: 0.5 })
      .to('.btn-approve', { scale: 0.95, duration: 0.1 })
      .call(() => {
        const ripple = container.querySelector('.click-ripple');
        if (ripple) {
          gsap.fromTo(ripple,
            { width: 20, height: 20, opacity: 1 },
            { width: 60, height: 60, opacity: 0, duration: 0.4, ease: "power1.out" }
          );
        }
      })
      .to('.btn-approve', { scale: 1, duration: 0.1 })

      // Close modal & show success
      .to('.modal-content', { scale: 0.95, opacity: 0, duration: 0.3, delay: 0.2 })
      .to('.modal-backdrop', { opacity: 0, duration: 0.3 })
      .set('.modal-approval', { display: 'none' })
      .call(() => setRowApproved(true))
      .to('.row-po', { backgroundColor: "#f0fdf4", duration: 0.5 })

      // Toast notification
      .call(() => setShowToast(true))
      .to('.toast-success', { y: 20, duration: 0.5, ease: "back.out" })
      .to('.toast-success', { y: -200, duration: 0.5, delay: 2 })
      .call(() => setShowToast(false))

    // --- SCENE 5: OUTRO ---
      .to('.scene-dashboard', { opacity: 0, scale: 1.05, duration: 1, delay: 0.5 })
      .set('.scene-dashboard', { display: 'none' })
      .set('.scene-outro', { display: 'flex', opacity: 1 })
      .set(['.cursor-ring', '.cursor-dot'], { opacity: 0 })

      // Initial outro with logo
      .to('.outro-logo', { scale: 1, duration: 1, ease: "elastic.out(1, 0.6)" })
      .to('.outro-title', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to('.outro-sub', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .to('.outro-teaser', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")

      // Hold for a moment
      .to({}, { duration: 2 })

      // Transition to capabilities
      .to('.outro-intro', { opacity: 0, scale: 0.95, duration: 0.6 })
      .set('.outro-intro', { display: 'none' })
      .set('.outro-capabilities', { display: 'block' });

    // Get all feature items and animate each one: center → zoom → place
    const featureItems = container.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
      const finalX = item.dataset.finalX || '0%';
      const finalY = item.dataset.finalY || '0%';

      // Appear in center and zoom up - SLOWER for readability
      tl.to(item, {
        opacity: 1,
        scale: 1.15,
        duration: 0.5,
        ease: "power2.out"
      })
      // Hold in center so user can read
      .to({}, { duration: 0.4 })
      // Shrink and move to final position
      .to(item, {
        scale: 0.7,
        left: `calc(50% + ${finalX})`,
        top: `calc(50% + ${finalY})`,
        duration: 0.5,
        ease: "power2.inOut"
      });
    });

    // Hold with all items placed
    tl.to({}, { duration: 1.2 })
      .addLabel('spiral');

    // Spiral animation - all items rotate and converge to center simultaneously
    featureItems.forEach((item, index) => {
      const delay = index * 0.03;

      tl.to(item, {
        left: '50%',
        top: '50%',
        scale: 0,
        rotation: 360 + (index * 40),
        opacity: 0,
        duration: 0.7,
        ease: "power3.in"
      }, `spiral+=${delay}`);
    });

    // Final logo reveal after spiral completes
    tl.to('.cap-final', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.6)"
    }, "spiral+=0.5")

    // Hold on final screen
    .to({}, { duration: 2 });

    return () => {
      tl.kill();
    };
  }, [hasStarted]);

  const startAnimation = () => {
    setHasStarted(true);
    setIsPlaying(true);
  };

  const resetToStart = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    setLogs([]);
    setCurrentView('dashboard');
    setRowApproved(false);
    setShowToast(false);
    setHasStarted(false);
    setIsPlaying(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: '562px' }}
    >
      {/* Start Overlay */}
      {!hasStarted && (
        <div className="absolute inset-0 z-[200] flex items-center justify-center bg-white/95 backdrop-blur-sm">
          <button
            onClick={startAnimation}
            className="group flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-sky-50 border border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500"
          >
            <div className="w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Experience Astra</h3>
              <p className="text-slate-500">Watch the autonomous manufacturing ERP in action</p>
            </div>
          </button>
        </div>
      )}

      {/* Return to Start Screen */}
      {hasStarted && !isPlaying && (
        <div className="absolute inset-0 z-[200] flex items-center justify-center bg-white/95 backdrop-blur-sm">
          <button
            onClick={resetToStart}
            className="group flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-sky-50 border border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500"
          >
            <div className="w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Experience Astra</h3>
              <p className="text-slate-500">Watch the autonomous manufacturing ERP in action</p>
            </div>
          </button>
        </div>
      )}

      {/* Ambient Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-200/60 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-80 h-80 bg-blue-200/60 rounded-full blur-[80px] animate-pulse"></div>

      {/* ==================== SCENE 1: CHAT INTRO ==================== */}
      <div className="scene-chat absolute inset-0 flex-col items-center justify-center z-20 hidden">
        {/* User Message */}
        <div className="user-msg bg-white/90 backdrop-blur-xl p-8 rounded-3xl rounded-bl-sm max-w-xl mb-6 opacity-0 translate-y-8 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-white/80">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">YO</div>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">You</span>
          </div>
          <p className="text-slate-800 text-2xl font-medium leading-snug tracking-tight">
            <span className="typewriter-text"></span><span className="cursor-blink inline-block w-1 h-6 bg-purple-500 animate-pulse align-middle"></span>
          </p>
        </div>

        {/* Astra Response */}
        <div className="astra-msg bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-3xl rounded-br-sm max-w-xl ml-auto mr-4 opacity-0 translate-y-8 text-white shadow-[0_20px_40px_-5px_rgba(139,92,246,0.3)] hidden">
          <div className="flex items-center gap-3 mb-3 justify-end">
            <span className="text-xs text-purple-200 font-bold uppercase tracking-widest">Astra AI</span>
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} />
            </div>
          </div>
          <p className="text-xl font-medium leading-relaxed">
            Connecting to your tools now. I'll analyze your workflows and build the complete ERP system in a jiffy. 🚀
          </p>
        </div>
      </div>

      {/* ==================== SCENE 2: NEURAL HUB ==================== */}
      <div className="scene-setup absolute inset-0 z-10 hidden overflow-hidden">
        {/* Connection Web SVG Layer */}
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 1000 562" preserveAspectRatio="xMidYMid meet">
          {toolIcons.map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 180;
            const endX = 500 + Math.cos(angle) * radius;
            const endY = 281 + Math.sin(angle) * radius;
            return (
              <g key={i}>
                <line
                  className="web-line"
                  x1="500"
                  y1="281"
                  x2={endX}
                  y2={endY}
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="300"
                  strokeDashoffset="300"
                  style={{ opacity: 0.5 }}
                />
                <circle
                  className="particle-dot"
                  r="3"
                  fill="#a855f7"
                  cx={endX}
                  cy={endY}
                  opacity="0"
                />
              </g>
            );
          })}
        </svg>

        {/* Astra Core */}
        <div className="astra-core absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center opacity-0 scale-0 z-30">
          <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} />
        </div>

        {/* Tool Icons */}
        {toolIcons.map((tool, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 180;
          const offsetX = Math.cos(angle) * radius;
          const offsetY = Math.sin(angle) * radius;
          return (
            <div
              key={i}
              className="tool-icon absolute left-1/2 top-1/2 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] opacity-0 scale-0 z-[25] border border-slate-100"
              style={{ transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))` }}
            >
              <i className={`${tool.icon.includes('fa-brands') ? tool.icon : `fa-solid ${tool.icon}`} ${tool.color}`}></i>
            </div>
          );
        })}

        {/* Glass Terminal */}
        <div className="log-terminal absolute bottom-10 right-10 w-96 bg-white/70 backdrop-blur-xl rounded-2xl p-5 opacity-0 translate-y-10 z-40 shadow-2xl border border-white/50">
          <div className="flex items-center justify-between mb-3 border-b border-gray-200/50 pb-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Astra Builder</span>
            </div>
            <span className="text-[10px] text-purple-600 font-mono bg-purple-50 px-2 py-0.5 rounded">Running</span>
          </div>
          <div className="font-mono text-[11px] text-slate-600 space-y-2 h-32 overflow-hidden flex flex-col justify-end">
            {logs.map((log, i) => (
              <div key={i} className={`flex items-center gap-2 ${log.type === 'success' ? 'text-green-500' : log.type === 'wait' ? 'text-purple-500' : 'text-slate-500'}`}>
                <span className="opacity-50 text-[10px] font-mono">{log.time}</span>
                {log.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== SCENE 3 & 4: DASHBOARD UI ==================== */}
      <div className="scene-dashboard absolute inset-0 hidden z-10">
        {/* Glass Sidebar */}
        <div className="sidebar w-72 bg-white/70 backdrop-blur-xl border-r border-white/50 h-full flex flex-col p-6 z-20 -translate-x-full">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} />
            </div>
            <span className="font-bold text-2xl text-slate-800 tracking-tight">Astra</span>
          </div>

          <div className="space-y-1">
            <div className="menu-item flex items-center gap-3 p-3.5 rounded-xl text-slate-600 hover:bg-white/60 hover:shadow-sm cursor-pointer transition-all duration-200">
              <i className="fa-solid fa-house w-5 text-slate-400"></i>
              <span className="font-medium">Home</span>
            </div>
            <div className="nav-approvals menu-item flex items-center gap-3 p-3.5 rounded-xl text-slate-600 hover:bg-white/60 hover:shadow-sm cursor-pointer transition-all duration-200">
              <i className="fa-solid fa-clipboard-check w-5 text-slate-400"></i>
              <span className="font-medium">Approvals</span>
              {!rowApproved && <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm shadow-red-200">1</span>}
            </div>
            <div className="menu-item flex items-center gap-3 p-3.5 rounded-xl text-slate-600 hover:bg-white/60 hover:shadow-sm cursor-pointer transition-all duration-200">
              <i className="fa-solid fa-wand-magic-sparkles w-5 text-slate-400"></i>
              <span className="font-medium">Copilot</span>
            </div>
            <div className="menu-item flex items-center gap-3 p-3.5 rounded-xl text-slate-600 hover:bg-white/60 hover:shadow-sm cursor-pointer transition-all duration-200">
              <i className="fa-solid fa-boxes-stacked w-5 text-slate-400"></i>
              <span className="font-medium">Inventory</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-white/60 p-4 rounded-2xl border border-white/50 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Live Activity</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <div className="text-[11px] text-slate-500 leading-snug space-y-1.5">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 text-[10px]"></i> QuickBooks synced
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-cart-shopping text-blue-500 text-[10px]"></i> Shopify: New Order
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-10 overflow-hidden relative">
          {/* VIEW 1: HOME DASHBOARD */}
          <div className={`view-dashboard h-full flex flex-col w-full max-w-5xl mx-auto ${currentView !== 'dashboard' ? 'hidden' : ''}`}>
            <div className="flex justify-between items-center mb-8 widget opacity-0 translate-y-5">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Overview</h1>
                <p className="text-slate-500 font-medium">Tuesday, Oct 24 • Production Floor</p>
              </div>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> System Optimal
                </div>
              </div>
            </div>

            {/* Widgets Grid */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Rubber Stock', value: '42%', hasBar: true, barWidth: '42%' },
                { label: 'Approvals', value: '1', badge: 'Urgent', badgeColor: 'bg-red-50 text-red-500' },
                { label: 'Efficiency', value: '98.2%', valueColor: 'text-green-600', trend: '↑ 2.4% vs last week', trendColor: 'text-green-600' },
                { label: 'Orders', value: '12', hasAvatars: true },
              ].map((widget, i) => (
                <div key={i} className="widget bg-white p-6 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 opacity-0 translate-y-5">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{widget.label}</div>
                  <div className={`text-3xl font-bold ${widget.valueColor || 'text-slate-800'} flex items-center gap-2`}>
                    {widget.value}
                    {widget.badge && (
                      <span className={`text-sm font-bold ${widget.badgeColor} px-2 py-0.5 rounded-full`}>{widget.badge}</span>
                    )}
                  </div>
                  {widget.hasBar && (
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className="bg-slate-800 h-full rounded-full" style={{ width: widget.barWidth }}></div>
                    </div>
                  )}
                  {widget.trend && (
                    <div className={`text-xs ${widget.trendColor} mt-1 font-medium`}>{widget.trend}</div>
                  )}
                  {widget.hasAvatars && (
                    <div className="flex -space-x-2 mt-2">
                      <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Big Chart */}
            <div className="widget flex-1 bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden opacity-0 translate-y-5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800 text-lg">Production Velocity</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-600">Daily</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold text-slate-400">Weekly</span>
                </div>
              </div>
              <div className="flex items-end justify-between h-48 gap-4 px-2">
                {[40, 60, 50, 80, 65, 100, 100].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-t-lg transition-colors ${i === 4 ? 'bg-purple-500' : i < 5 ? `bg-indigo-${100 + i * 100}` : 'bg-slate-100'}`}
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* VIEW 2: APPROVALS LIST */}
          <div className={`view-approvals absolute inset-0 p-10 z-30 w-full max-w-5xl mx-auto mt-4 ${currentView !== 'approvals' ? 'hidden opacity-0' : ''}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-xl">
                <i className="fa-solid fa-signature"></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Approvals Queue</h1>
                {!rowApproved && <p className="text-slate-500 text-sm">1 item requires your attention</p>}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
              <table className="w-full text-sm text-left text-slate-500">
                <thead className="text-xs text-slate-400 uppercase bg-slate-50/50 border-b border-slate-100">
                  <tr>
                    <th className="px-8 py-4 font-bold tracking-wider">Request</th>
                    <th className="px-8 py-4 font-bold tracking-wider">Vendor</th>
                    <th className="px-8 py-4 font-bold tracking-wider">Amount</th>
                    <th className="px-8 py-4 font-bold tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`row-po bg-white border-b border-slate-50 cursor-pointer transition-colors duration-200 ${rowApproved ? 'bg-green-50' : ''}`}>
                    <td className="px-8 py-5">
                      <div className="font-bold text-slate-800">Purchase Order #14542</div>
                      <div className="text-xs text-slate-400 mt-0.5">Requested by Sarah Chen</div>
                    </td>
                    <td className="px-8 py-5 text-slate-700">TechSupply Co.</td>
                    <td className="px-8 py-5 font-bold text-slate-900">$12,450.00</td>
                    <td className="px-8 py-5">
                      {rowApproved ? (
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">Approved</span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200">Pending</span>
                      )}
                    </td>
                  </tr>
                  <tr className="bg-white/50 cursor-pointer">
                    <td className="px-8 py-5 font-medium text-slate-400">Expense Report #882</td>
                    <td className="px-8 py-5 text-slate-400">Internal</td>
                    <td className="px-8 py-5 text-slate-400">$240.00</td>
                    <td className="px-8 py-5">
                      <span className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full">Low Priority</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* APPROVAL MODAL */}
          <div className="modal-approval absolute inset-0 z-50 hidden items-center justify-center pointer-events-none">
            <div className="modal-backdrop absolute inset-0 bg-slate-900/10 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
            <div className="modal-content bg-white w-[550px] rounded-[32px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] overflow-hidden scale-90 opacity-0 transition-all duration-500 relative z-50">
              {/* Header Gradient */}
              <div className="h-32 bg-gradient-to-r from-violet-600 to-indigo-600 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
                <div className="relative z-10 text-white">
                  <div className="bg-white/20 w-fit px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md mb-2">HIGH PRIORITY</div>
                  <h2 className="text-2xl font-bold">Purchase Approval</h2>
                  <p className="text-white/80 text-sm">PO-14542 • TechSupply Co.</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-end mb-6 border-b border-slate-100 pb-6">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Total Amount</p>
                    <p className="text-3xl font-bold text-slate-800">$12,450.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Due Date</p>
                    <p className="text-sm font-bold text-slate-600">Oct 28, 2025</p>
                  </div>
                </div>

                {/* Astra Insight */}
                <div className="bg-violet-50 rounded-2xl p-4 flex gap-4 items-start mb-6">
                  <div className="w-8 h-8 rounded-full bg-violet-200 text-violet-700 flex flex-shrink-0 items-center justify-center text-xs">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-violet-900 mb-1">Astra Insight</p>
                    <p className="text-xs text-violet-700 leading-relaxed">
                      This amount exceeds the $10k auto-approval limit. However, it is within the Q4 Budget for IT Ops. Vendor contract is valid.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-3.5 rounded-xl border border-slate-200 font-bold text-slate-600 text-sm hover:bg-slate-50 transition-colors">Decline</button>
                  <button className="btn-approve flex-[2] py-3.5 rounded-xl bg-violet-600 text-white font-bold text-sm shadow-lg shadow-violet-200 hover:bg-violet-700 hover:scale-[1.02] transition-all duration-200">
                    Approve Request
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notification */}
          <div className={`toast-success absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-slate-800 pl-4 pr-6 py-3 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] flex items-center gap-3 border border-white/50 z-50 ${showToast ? '' : '-translate-y-[200%]'}`}>
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
              <i className="fa-solid fa-check"></i>
            </div>
            <span className="font-bold text-sm">Purchase Order Approved</span>
          </div>
        </div>

        {/* Custom Cursor */}
        <div className="cursor-ring absolute w-5 h-5 border-2 border-violet-500/50 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 opacity-0"></div>
        <div className="cursor-dot absolute w-2 h-2 bg-violet-600 rounded-full pointer-events-none z-[101] -translate-x-1/2 -translate-y-1/2 opacity-0"></div>
        <div className="click-ripple absolute border-2 border-violet-600 rounded-full z-[99] pointer-events-none opacity-0 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* ==================== SCENE 5: OUTRO ==================== */}
      <div className="scene-outro absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-violet-50 z-50 hidden overflow-hidden">

        {/* Initial Outro - Logo & Title */}
        <div className="outro-intro absolute inset-0 flex flex-col items-center justify-center">
          <div className="outro-logo w-32 h-32 flex items-center justify-center mb-6 scale-0">
            <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} />
          </div>
          <h1 className="outro-title text-5xl font-extrabold text-slate-900 mb-3 opacity-0 translate-y-8 tracking-tight">Astra</h1>
          <p className="outro-sub text-xl text-slate-500 mb-6 opacity-0 translate-y-8 font-medium">The Autonomous ERP</p>
          <p className="outro-teaser text-lg text-violet-600 font-semibold opacity-0 translate-y-8">This is just a fraction of what Astra can do...</p>
        </div>

        {/* Capabilities Showcase - Center Zoom & Place Animation */}
        <div className="outro-capabilities absolute inset-0 hidden overflow-hidden">

          {/* Feature items - bigger icons & text, absolutely positioned */}
          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="-38%" data-final-y="-40%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-brain"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Auto-discovers your digital ecosystem</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="30%" data-final-y="-40%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-diagram-project"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Builds Company Knowledge Graph</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="-40%" data-final-y="-24%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Zero-config Finance, CRM, HR & SCM</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="35%" data-final-y="-24%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-comments"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Natural language voice & text copilot</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="-42%" data-final-y="-8%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-industry"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Manufacturing, BOM & MRP</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="38%" data-final-y="-8%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-store"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Retail, D2C & Omnichannel</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="-38%" data-final-y="8%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Professional Services & Billing</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="35%" data-final-y="8%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-clipboard-check"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Quality Control & Compliance</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="-40%" data-final-y="24%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Zero-Trust Security & RBAC</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="38%" data-final-y="24%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-cloud"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">SaaS, Cloud or On-Premise</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="-35%" data-final-y="40%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-robot"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Agentic Workflows & Automation</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="0%" data-final-y="40%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-cyan-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Near-Zero Transition Time</span>
          </div>

          <div className="feature-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-slate-200 opacity-0 scale-0 z-10" data-final-x="35%" data-final-y="40%">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white text-base flex-shrink-0">
              <i className="fa-solid fa-user-check"></i>
            </div>
            <span className="text-slate-800 font-semibold text-sm">Worker-First Design</span>
          </div>

          {/* Final Logo Reveal - hidden initially, appears after spiral */}
          <div className="cap-final absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 scale-50 z-20">
            <div className="w-28 h-28 flex items-center justify-center mb-4">
              <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} />
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Astra</h2>
            <p className="text-slate-500 text-sm">The Autonomous ERP</p>
          </div>

        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* MAIN APP COMPONENT                                                         */
/* -------------------------------------------------------------------------- */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Inject Custom Styles */}
      <style>{customStyles}</style>

      <div className="font-sans text-slate-800 bg-white min-h-screen selection:bg-violet-200 selection:text-violet-900 overflow-x-hidden">

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
              <img src="/Atlas_intellitek_white_symbol_nobg.png" alt="Atlas IntelliTek" className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xl font-extrabold tracking-tight text-slate-900">ATLAS <span className="gradient-text">INTELLITEK</span></span>
              <span className="hidden sm:inline text-slate-400 font-light">|</span>
              <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
              <span className="text-base sm:text-lg font-bold text-slate-700">Astra</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollTo('founders')} className="text-sm font-bold hover:text-violet-600 transition-colors px-3 py-2 rounded-xl hover:bg-violet-50">Founders</button>
              <button onClick={() => scrollTo('demo')} className="text-sm font-bold hover:text-violet-600 transition-colors px-3 py-2 rounded-xl hover:bg-violet-50">Demo</button>
              <button onClick={() => scrollTo('market')} className="text-sm font-bold hover:text-violet-600 transition-colors px-3 py-2 rounded-xl hover:bg-violet-50">Market</button>
              <button onClick={() => scrollTo('product')} className="text-sm font-bold hover:text-violet-600 transition-colors px-3 py-2 rounded-xl hover:bg-violet-50">Astra</button>
              <button
                onClick={() => scrollTo('contact')}
                className="bg-gradient-to-r from-violet-600 to-sky-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:shadow-xl hover:shadow-violet-500/30 transition-all hover:scale-105"
              >
                Request Access
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 hover:bg-violet-50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-4 text-xl font-bold">
              <button onClick={() => scrollTo('founders')} className="text-left py-3 px-4 rounded-2xl hover:bg-violet-50 transition-colors">Founders</button>
              <button onClick={() => scrollTo('demo')} className="text-left py-3 px-4 rounded-2xl hover:bg-violet-50 transition-colors">Demo</button>
              <button onClick={() => scrollTo('market')} className="text-left py-3 px-4 rounded-2xl hover:bg-violet-50 transition-colors">Market</button>
              <button onClick={() => scrollTo('product')} className="text-left py-3 px-4 rounded-2xl hover:bg-violet-50 transition-colors">Astra</button>
              <button onClick={() => scrollTo('contact')} className="bg-gradient-to-r from-violet-600 to-sky-600 text-white py-4 px-6 rounded-2xl text-center">Contact Us</button>
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        <section id="hero" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden min-h-screen flex items-center">
          {/* Floating Blob Backgrounds - Hidden on small mobile, smaller sizes on tablet */}
          <div className="absolute top-20 right-0 sm:right-10 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-gradient-to-br from-violet-400/30 to-sky-400/30 rounded-full blur-3xl animate-blob pointer-events-none"></div>
          <div className="absolute bottom-20 left-0 sm:left-10 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full blur-3xl animate-blob pointer-events-none" style={{animationDelay: '-3s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-gradient-to-br from-cyan-400/20 to-violet-400/20 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>

          <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-10 relative z-10 w-full">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-violet-100 to-sky-100 border border-violet-200 text-violet-700 text-sm font-bold uppercase tracking-wider shadow-lg animate-bounce-in">
                <Sparkles size={18} className="text-violet-500" />
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 animate-pulse"></span>
                Pilot Active
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
                {/* Astra Logo - Smooth fade in animation */}
                <img
                  src="/Nobg_Astra.png"
                  alt="Astra AI"
                  className="w-auto h-[120px] sm:h-[160px] lg:h-[280px] object-contain drop-shadow-2xl animate-fade-in-scale"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] text-center lg:text-left">
                  <span className="hero-text-reveal hero-text-line-1 inline-block">The First</span> <br/>
                  <span className="hero-text-reveal hero-text-line-2 inline-block gradient-text">Autonomous</span> <br/>
                  <span className="hero-text-reveal hero-text-line-3 inline-block">ERP & CRM</span> <br/>
                  <span className="hero-text-reveal hero-text-line-3 inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">for <span className="gradient-text">Manufacturing.</span></span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-fade-in-up-delay-2">
                Built for the shop floor. <span className="font-bold text-slate-900">Astra</span> connects to your machines, learns your production flow, and auto-builds your entire manufacturing ERP.
                <br/><br/>
                <span className="inline-flex items-center gap-2 text-violet-600 font-bold">
                  <Rocket size={20} /> BOM. MRP. Quality. Shop Floor. All automated.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-fade-in-up animate-fade-in-up-delay-3">
                <button
                  onClick={() => scrollTo('contact')}
                  className="bg-gradient-to-r from-violet-600 via-sky-600 to-violet-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 flex items-center justify-center gap-3 hover:scale-105 group"
                >
                  Inquire for Investment <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo('demo')}
                  className="bg-white hover:bg-violet-50 text-slate-800 border-2 border-slate-200 hover:border-violet-300 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Play size={22} className="fill-violet-600 text-violet-600 group-hover:scale-110 transition-transform" /> Watch Demo
                </button>
              </div>

              {/* INFINITE MARQUEE */}
              <div className="pt-16">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted By Manufacturing Leaders</p>
                <InfiniteMarquee />
              </div>
          </div>
        </section>

        {/* FOUNDERS SECTION */}
        <section id="founders" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-violet-50/50 via-white to-sky-50/50 relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-20">
               <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 border border-sky-200 text-sky-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
                  <Users size={16} className="sm:w-[18px] sm:h-[18px]" /> The Powerhouse Duo
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6">Sisters. Engineers. <span className="gradient-text">Builders.</span></h2>
               <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
                 We don't just share a last name; we share a relentless drive to fix broken manufacturing systems. With a zero-ego dynamic and complimentary skills, we move faster than any traditional co-founder match.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-stretch mb-12 sm:mb-20">
               {/* Ackshaya */}
               <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-10 border-2 border-violet-100 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 flex flex-col items-center text-center group hover:-translate-y-2">
                  <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-violet-400 via-sky-400 to-cyan-400 rounded-[1.5rem] sm:rounded-[2rem] mb-6 sm:mb-8 border-4 border-white shadow-2xl overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                     <img src="/Ackshaya.jpeg" alt="Ackshaya Varshini" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2 sm:gap-3 mb-2">
                     Ackshaya Varshini
                     <a href="https://www.linkedin.com/in/ackshaya" target="_blank" rel="noreferrer" className="text-violet-500 hover:text-violet-700 hover:scale-110 transition-all"><Linkedin size={24}/></a>
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 text-white font-bold text-sm mb-6">
                    <Code2 size={16} /> Technical Lead & Co-Founder
                  </div>
                  <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <div className="text-left bg-violet-50 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                           <Award className="text-violet-500" size={18} />
                           <span className="font-bold text-slate-800">Siemens Healthineers</span>
                        </div>
                        <ul className="space-y-1.5 ml-1">
                           <li>• Redesigned <span className="highlight-violet">ARTIS Pheno robot</span></li>
                           <li>• Final design: <span className="highlight">35% shorter</span>, <span className="highlight">25% larger</span> scanning area</li>
                           <li>• <span className="highlight-violet">Fit the machine to the room</span>, not the room to the machine</li>
                        </ul>
                     </div>
                     <div className="text-left bg-sky-50 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                           <Code2 className="text-sky-500" size={18} />
                           <span className="font-bold text-slate-800">100% of Astra's Code</span>
                        </div>
                        <ul className="space-y-1.5 ml-1">
                           <li>• <span className="highlight-sky">Python, FastAPI, LangChain, React, TypeScript</span></li>
                           <li>• Built <span className="highlight">VentraFlow</span> (AI-powered CFD)</li>
                           <li>• Built <span className="highlight">ValveOps</span> (RL agent for water networks)</li>
                           <li>• Built <span className="highlight">Kavach AI</span> (real-time fraud detection)</li>
                        </ul>
                     </div>
                     <div className="text-left bg-emerald-50 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                           <Rocket className="text-emerald-500" size={18} />
                           <span className="font-bold text-slate-800">Credentials</span>
                        </div>
                        <ul className="space-y-1.5 ml-1">
                           <li>• <span className="highlight-emerald">MS Mechanical Engineering</span> - Arizona State</li>
                           <li>• <span className="highlight">Certified Solidworks Expert (CSWE)</span></li>
                           <li>• <span className="highlight-emerald">Top 10 / 4,900</span> - Dassault Systèmes Aakruti</li>
                           <li>• <span className="highlight">Mumbai Hacks 2025</span> finalist</li>
                           <li>• <span className="highlight-emerald">5 research papers</span> - IOP & Springer</li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* Hari */}
               <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-10 border-2 border-sky-100 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 flex flex-col items-center text-center group hover:-translate-y-2">
                  <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-400 rounded-[1.5rem] sm:rounded-[2rem] mb-6 sm:mb-8 border-4 border-white shadow-2xl overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                     <img src="/Dharshini.jpeg" alt="Hari Dharshini" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2 sm:gap-3 mb-2">
                     Hari Dharshini
                     <a href="https://www.linkedin.com/in/hari-dharshini/" target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-700 hover:scale-110 transition-all"><Linkedin size={24}/></a>
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold text-sm mb-6">
                    <Briefcase size={16} /> Business Lead & Co-Founder
                  </div>
                  <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <div className="text-left bg-sky-50 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                           <Star className="text-sky-500" size={18} />
                           <span className="font-bold text-slate-800">The Grading Policy Hack</span>
                        </div>
                        <ul className="space-y-1.5 ml-1">
                           <li>• Guinea pig batch for new economics program</li>
                           <li>• 6-hour lectures, broken grading (90% = B)</li>
                           <li>• <span className="highlight-sky">Emailed Vice Chancellor directly</span>, dept heads CC'd</li>
                           <li>• Got called in. <span className="highlight">Reset the grading scale</span></li>
                        </ul>
                     </div>
                     <div className="text-left bg-cyan-50 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                           <Briefcase className="text-cyan-500" size={18} />
                           <span className="font-bold text-slate-800">Work Experience</span>
                        </div>
                        <ul className="space-y-1.5 ml-1">
                           <li>• <span className="highlight-sky">Ex-Bain & Company</span> analyst</li>
                           <li>• Financial modeling across <span className="highlight">20+ companies</span></li>
                           <li>• Illinois Dept of Labor: <span className="highlight">500+ wage claim cases</span></li>
                           <li>• Built <span className="highlight-sky">data management system</span> for Chicago nonprofit</li>
                        </ul>
                     </div>
                     <div className="text-left bg-emerald-50 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                           <GraduationCap className="text-emerald-500" size={18} />
                           <span className="font-bold text-slate-800">Credentials</span>
                        </div>
                        <ul className="space-y-1.5 ml-1">
                           <li>• <span className="highlight-emerald">UChicago Harris</span> - Public Policy (<span className="highlight">3.72 GPA</span>)</li>
                           <li>• <span className="highlight-emerald">IRM Level 1 & 2</span> certified (UK)</li>
                           <li>• Revived <span className="highlight">7-year defunct</span> economics fest</li>
                           <li>• <span className="highlight-emerald">Kiran Bedi</span> as keynote, 10 sponsors</li>
                           <li>• Pilots with <span className="highlight">L&T</span> and <span className="highlight">Avant-Garde</span></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            {/* Founders Video */}
            <BrowserMockup title="founders-video">
               <VideoWithOverlay
                 src="/Astra_Founders_Atlas_IntelliTek.mp4"
                 poster="/api/placeholder/800/450"
               />
            </BrowserMockup>
            <p className="text-center text-slate-500 text-base mt-6 font-medium">Meet the Founders: A candid intro to our vision for autonomous manufacturing.</p>
          </div>
        </section>

        {/* PRODUCT DEMO - GSAP ANIMATION SECTION */}
        <section id="demo" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-violet-500/20 rounded-full blur-3xl animate-float pointer-events-none"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-80 h-48 sm:h-80 bg-sky-500/20 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
                <Play size={16} className="sm:w-[18px] sm:h-[18px]" /> Product Walkthrough
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">See <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">Astra</span> in Action</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2">
                Watch how Astra autonomously builds a complete manufacturing ERP from a single prompt.
              </p>
            </div>

            {/* Demo - Uniform scale like video resizing */}
            <style>{`
              .demo-scale-wrapper {
                transform-origin: center top;
              }
              @media (max-width: 480px) {
                .demo-scale-wrapper {
                  transform: scale(0.38);
                  margin-bottom: -320px;
                }
              }
              @media (min-width: 481px) and (max-width: 768px) {
                .demo-scale-wrapper {
                  transform: scale(0.5);
                  margin-bottom: -260px;
                }
              }
              @media (min-width: 769px) and (max-width: 1024px) {
                .demo-scale-wrapper {
                  transform: scale(0.75);
                  margin-bottom: -130px;
                }
              }
              @media (min-width: 1025px) {
                .demo-scale-wrapper {
                  transform: scale(1);
                  margin-bottom: 0;
                }
              }
            `}</style>
            <div className="w-full flex justify-center">
              <div className="demo-scale-wrapper">
                <BrowserMockup title="astra-demo">
                  <GsapAstraDemo />
                </BrowserMockup>
              </div>
            </div>
          </div>
        </section>

        {/* OLD PRODUCT DEMO VIDEO SECTION - Commented for future use
        <section id="demo-video" className="py-32 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-float pointer-events-none"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-bold uppercase tracking-wider mb-6">
                <Play size={18} /> Product Walkthrough
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">See <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">Astra</span> in Action</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                A deep dive into how Astra connects your shop floor systems into a unified manufacturing hub.
              </p>
            </div>

            <BrowserMockup title="product-demo">
               <div className="aspect-video">
                  <video
                     controls
                     className="w-full h-full"
                  >
                     <source src="/Astra_video_demo.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
               </div>
            </BrowserMockup>
          </div>
        </section>
        */}

        {/* VALUE PROPOSITION - ORBITAL DESIGN */}
        <section id="product" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-violet-50/30 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-violet-100 to-sky-100 border border-violet-200 text-violet-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
                <Zap size={16} className="sm:w-[18px] sm:h-[18px]" /> Why Astra?
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6 px-2">The Manufacturing <span className="gradient-text">Chaos Ends.</span></h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-2">
                Traditional ERPs force you to adapt your shop floor to their rigid modules.
                <br className="hidden sm:block"/>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-sky-600">Astra adapts to your production reality.</span>
              </p>
            </div>

            {/* MOBILE: Animated Floating Universe with all 18 features */}
            <div className="lg:hidden">
              {/* CSS for animations */}
              <style>{`
                @keyframes float-orbit-1 {
                  0%, 100% { transform: translate(0, 0) rotate(0deg); }
                  25% { transform: translate(10px, -15px) rotate(5deg); }
                  50% { transform: translate(-5px, -25px) rotate(-3deg); }
                  75% { transform: translate(-15px, -10px) rotate(3deg); }
                }
                @keyframes float-orbit-2 {
                  0%, 100% { transform: translate(0, 0) rotate(0deg); }
                  25% { transform: translate(-12px, 10px) rotate(-4deg); }
                  50% { transform: translate(8px, 20px) rotate(5deg); }
                  75% { transform: translate(15px, 5px) rotate(-2deg); }
                }
                @keyframes float-orbit-3 {
                  0%, 100% { transform: translate(0, 0); }
                  33% { transform: translate(15px, -8px); }
                  66% { transform: translate(-10px, 12px); }
                }
                @keyframes pulse-glow {
                  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
                  50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(56, 189, 248, 0.3); }
                }
                @keyframes marquee-left {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                  0% { transform: translateX(-50%); }
                  100% { transform: translateX(0); }
                }
                .animate-float-1 { animation: float-orbit-1 6s ease-in-out infinite; }
                .animate-float-2 { animation: float-orbit-2 7s ease-in-out infinite; }
                .animate-float-3 { animation: float-orbit-3 5s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .marquee-track-left { animation: marquee-left 25s linear infinite; }
                .marquee-track-right { animation: marquee-right 25s linear infinite; }
                .feature-bubble {
                  backdrop-filter: blur(8px);
                  transition: all 0.3s ease;
                }
                .feature-bubble:hover {
                  transform: scale(1.1);
                }
              `}</style>

              {/* Central Astra Hub with Pulse */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-violet-400 to-sky-400 opacity-20 animate-ping"></div>
                  <div className="absolute -inset-2 w-28 h-28 rounded-full border-2 border-violet-300/30 animate-pulse"></div>
                  <div className="absolute -inset-4 w-32 h-32 rounded-full border border-sky-300/20"></div>
                  {/* Main hub */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-violet-600 via-sky-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                    <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-14 h-14 object-contain" />
                  </div>
                </div>
              </div>

              {/* Floating Feature Bubbles - Organized in orbital layers */}
              <div className="relative min-h-[420px] overflow-hidden">
                {/* Inner orbit - Core AI */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float-1">
                  <div className="feature-bubble bg-gradient-to-r from-violet-500/90 to-purple-600/90 px-4 py-2.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-brain text-white text-sm"></i>
                    <span className="text-white text-xs font-bold whitespace-nowrap">Auto-Discovery</span>
                  </div>
                </div>
                <div className="absolute top-8 left-4 animate-float-2" style={{animationDelay: '0.5s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-violet-500/90 to-purple-600/90 px-4 py-2.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-wand-magic-sparkles text-white text-sm"></i>
                    <span className="text-white text-xs font-bold whitespace-nowrap">Auto-Config</span>
                  </div>
                </div>
                <div className="absolute top-8 right-4 animate-float-3" style={{animationDelay: '1s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-violet-500/90 to-purple-600/90 px-4 py-2.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-comments text-white text-sm"></i>
                    <span className="text-white text-xs font-bold whitespace-nowrap">Astra Copilot</span>
                  </div>
                </div>
                <div className="absolute top-20 left-1/2 -translate-x-1/2 animate-float-2" style={{animationDelay: '1.5s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-blue-500/90 to-cyan-600/90 px-4 py-2.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-diagram-project text-white text-sm"></i>
                    <span className="text-white text-xs font-bold whitespace-nowrap">Knowledge Graph</span>
                  </div>
                </div>

                {/* Middle orbit - Industry */}
                <div className="absolute top-32 left-2 animate-float-3" style={{animationDelay: '0.3s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-cyan-500/90 to-blue-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-industry text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Manufacturing</span>
                  </div>
                </div>
                <div className="absolute top-36 right-2 animate-float-1" style={{animationDelay: '0.8s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-indigo-500/90 to-blue-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-store text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Retail & D2C</span>
                  </div>
                </div>
                <div className="absolute top-44 left-8 animate-float-2" style={{animationDelay: '1.3s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-slate-600/90 to-slate-800/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-briefcase text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Pro Services</span>
                  </div>
                </div>
                <div className="absolute top-48 right-6 animate-float-3" style={{animationDelay: '1.8s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-teal-500/90 to-cyan-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-clipboard-check text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Quality Control</span>
                  </div>
                </div>
                <div className="absolute top-56 left-1/2 -translate-x-1/2 animate-float-1" style={{animationDelay: '2.3s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-purple-500/90 to-violet-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-robot text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Agentic Workflows</span>
                  </div>
                </div>
                <div className="absolute top-64 left-4 animate-float-2" style={{animationDelay: '2.8s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-red-500/90 to-orange-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Zero Transition</span>
                  </div>
                </div>

                {/* Outer orbit - Platform & Operations */}
                <div className="absolute top-72 right-4 animate-float-3" style={{animationDelay: '0.2s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-emerald-500/90 to-teal-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-shield-halved text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Zero-Trust</span>
                  </div>
                </div>
                <div className="absolute top-80 left-1/2 -translate-x-1/2 animate-float-1" style={{animationDelay: '0.7s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-cyan-500/90 to-blue-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-cloud text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Cloud / On-Prem</span>
                  </div>
                </div>
                <div className="absolute top-[340px] left-6 animate-float-2" style={{animationDelay: '1.2s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-yellow-500/90 to-orange-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-user-check text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">Worker-First</span>
                  </div>
                </div>
                <div className="absolute top-[340px] right-6 animate-float-3" style={{animationDelay: '1.7s'}}>
                  <div className="feature-bubble bg-gradient-to-r from-violet-500/90 to-purple-600/90 px-3 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <i className="fa-solid fa-lock text-white text-xs"></i>
                    <span className="text-white text-[11px] font-semibold whitespace-nowrap">RBAC & Audit</span>
                  </div>
                </div>
              </div>

              {/* Animated Marquee Strips - Operations features */}
              <div className="mt-4 space-y-3 overflow-hidden">
                {/* Strip 1 - Left scroll */}
                <div className="relative overflow-hidden py-2">
                  <div className="flex gap-4 marquee-track-left" style={{width: 'max-content'}}>
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 rounded-full shadow-md">
                          <i className="fa-solid fa-chart-line text-white text-xs"></i>
                          <span className="text-white text-xs font-bold whitespace-nowrap">BOM & MRP</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-600 px-4 py-2 rounded-full shadow-md">
                          <i className="fa-solid fa-truck text-white text-xs"></i>
                          <span className="text-white text-xs font-bold whitespace-nowrap">3PL & Logistics</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 rounded-full shadow-md">
                          <i className="fa-solid fa-file-invoice-dollar text-white text-xs"></i>
                          <span className="text-white text-xs font-bold whitespace-nowrap">T&M Billing</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-2 rounded-full shadow-md">
                          <i className="fa-solid fa-dollar-sign text-white text-xs"></i>
                          <span className="text-white text-xs font-bold whitespace-nowrap">Revenue Recognition</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strip 2 - Right scroll */}
                <div className="relative overflow-hidden py-2">
                  <div className="flex gap-4 marquee-track-right" style={{width: 'max-content'}}>
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-2 rounded-full shadow-md">
                          <i className="fa-solid fa-brain text-white text-xs"></i>
                          <span className="text-white text-xs font-bold whitespace-nowrap">Auto-Discovery</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 px-4 py-2 rounded-full shadow-md">
                          <i className="fa-solid fa-wand-magic-sparkles text-white text-xs"></i>
                          <span className="text-white text-xs font-bold whitespace-nowrap">Auto-Config</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 px-4 py-2 rounded-full shadow-md">
                          <i className="fa-solid fa-robot text-white text-xs"></i>
                          <span className="text-white text-xs font-bold whitespace-nowrap">Agentic Workflows</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 px-4 py-2 rounded-full shadow-md">
                          <i className="fa-solid fa-bolt text-white text-xs"></i>
                          <span className="text-white text-xs font-bold whitespace-nowrap">Zero Transition</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP: ORBITAL SOLAR SYSTEM DESIGN - ALL CAPABILITIES */}
            <div className="hidden lg:flex relative min-h-[800px] items-center justify-center">

              {/* Orbital Rings */}
              <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] border border-violet-200/50 rounded-full"></div>
              <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-sky-200/40 rounded-full"></div>
              <div className="absolute w-[500px] h-[500px] md:w-[620px] md:h-[620px] border border-cyan-200/30 rounded-full"></div>
              <div className="absolute w-[650px] h-[650px] md:w-[780px] md:h-[780px] border border-slate-200/20 rounded-full"></div>

              {/* Center Hub - Astra */}
              <div className="absolute z-30 w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-violet-600 via-sky-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50">
                <div className="text-center text-white">
                  <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-1 object-contain" />
                  <span className="font-black text-base">ASTRA</span>
                </div>
              </div>

              {/* INNER ORBIT - Core AI Capabilities */}
              {/* Top */}
              <div className="absolute top-[calc(50%-180px)] left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-violet-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm">
                    <i className="fa-solid fa-brain"></i>
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">Auto-Discovery</span>
                </div>
              </div>
              {/* Bottom */}
              <div className="absolute top-[calc(50%+140px)] left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-emerald-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">Auto-Configuration</span>
                </div>
              </div>
              {/* Left */}
              <div className="absolute top-1/2 left-[calc(50%-260px)] -translate-y-1/2 z-20">
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-amber-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm">
                    <i className="fa-solid fa-comments"></i>
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">Astra Copilot</span>
                </div>
              </div>
              {/* Right */}
              <div className="absolute top-1/2 right-[calc(50%-260px)] -translate-y-1/2 z-20">
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-blue-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-sm">
                    <i className="fa-solid fa-diagram-project"></i>
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">Knowledge Graph</span>
                </div>
              </div>

              {/* MIDDLE ORBIT - Industry Verticals */}
              {/* Top Left */}
              <div className="absolute top-[calc(50%-260px)] left-[calc(50%-180px)] z-10">
                <div className="flex items-center gap-2 bg-white/95 px-3 py-2 rounded-full shadow-md border border-cyan-100 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs">
                    <i className="fa-solid fa-industry"></i>
                  </div>
                  <span className="font-medium text-slate-700 text-xs">Manufacturing</span>
                </div>
              </div>
              {/* Top Right */}
              <div className="absolute top-[calc(50%-260px)] right-[calc(50%-180px)] z-10">
                <div className="flex items-center gap-2 bg-white/95 px-3 py-2 rounded-full shadow-md border border-indigo-100 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xs">
                    <i className="fa-solid fa-store"></i>
                  </div>
                  <span className="font-medium text-slate-700 text-xs">Retail & D2C</span>
                </div>
              </div>
              {/* Bottom Left */}
              <div className="absolute top-[calc(50%+220px)] left-[calc(50%-180px)] z-10">
                <div className="flex items-center gap-2 bg-white/95 px-3 py-2 rounded-full shadow-md border border-slate-200 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-xs">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <span className="font-medium text-slate-700 text-xs">Professional Services</span>
                </div>
              </div>
              {/* Bottom Right */}
              <div className="absolute top-[calc(50%+220px)] right-[calc(50%-180px)] z-10">
                <div className="flex items-center gap-2 bg-white/95 px-3 py-2 rounded-full shadow-md border border-teal-100 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-xs">
                    <i className="fa-solid fa-clipboard-check"></i>
                  </div>
                  <span className="font-medium text-slate-700 text-xs">Quality Control</span>
                </div>
              </div>
              {/* Left Middle */}
              <div className="absolute top-[calc(50%-60px)] left-[calc(50%-300px)] z-10">
                <div className="flex items-center gap-2 bg-white/95 px-3 py-2 rounded-full shadow-md border border-purple-100 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-xs">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <span className="font-medium text-slate-700 text-xs">Agentic Workflows</span>
                </div>
              </div>
              {/* Right Middle */}
              <div className="absolute top-[calc(50%+60px)] right-[calc(50%-300px)] z-10">
                <div className="flex items-center gap-2 bg-white/95 px-3 py-2 rounded-full shadow-md border border-red-100 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-cyan-600 flex items-center justify-center text-white text-xs">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <span className="font-medium text-slate-700 text-xs">Near-Zero Transition</span>
                </div>
              </div>

              {/* OUTER ORBIT - Infrastructure & Platform */}
              {/* Top */}
              <div className="absolute top-[calc(50%-340px)] left-1/2 -translate-x-1/2 z-5">
                <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow border border-green-100 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-[10px]">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <span className="font-medium text-slate-600 text-xs">Zero-Trust Security</span>
                </div>
              </div>
              {/* Bottom */}
              <div className="absolute top-[calc(50%+310px)] left-1/2 -translate-x-1/2 z-5">
                <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow border border-cyan-100 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-[10px]">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                  <span className="font-medium text-slate-600 text-xs">SaaS / Cloud / On-Premise</span>
                </div>
              </div>
              {/* Top Left Far */}
              <div className="absolute top-[calc(50%-280px)] left-[calc(50%-320px)] z-5">
                <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow border border-yellow-100 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white text-[10px]">
                    <i className="fa-solid fa-user-check"></i>
                  </div>
                  <span className="font-medium text-slate-600 text-xs">Worker-First</span>
                </div>
              </div>
              {/* Top Right Far */}
              <div className="absolute top-[calc(50%-280px)] right-[calc(50%-320px)] z-5">
                <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow border border-violet-100 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-[10px]">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <span className="font-medium text-slate-600 text-xs">RBAC & Audit</span>
                </div>
              </div>
              {/* Bottom Left Far */}
              <div className="absolute top-[calc(50%+250px)] left-[calc(50%-300px)] z-5">
                <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow border border-sky-100 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center text-white text-[10px]">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <span className="font-medium text-slate-600 text-xs">BOM & MRP</span>
                </div>
              </div>
              {/* Bottom Right Far */}
              <div className="absolute top-[calc(50%+250px)] right-[calc(50%-300px)] z-5">
                <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow border border-emerald-100 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-[10px]">
                    <i className="fa-solid fa-truck"></i>
                  </div>
                  <span className="font-medium text-slate-600 text-xs">3PL & Logistics</span>
                </div>
              </div>
              {/* Left Far */}
              <div className="absolute top-[calc(50%-100px)] left-[calc(50%-380px)] z-5">
                <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow border border-amber-100 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white text-[10px]">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <span className="font-medium text-slate-600 text-xs">T&M Billing</span>
                </div>
              </div>
              {/* Right Far */}
              <div className="absolute top-[calc(50%+100px)] right-[calc(50%-380px)] z-5">
                <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow border border-blue-100 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-red-600 flex items-center justify-center text-white text-[10px]">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <span className="font-medium text-slate-600 text-xs">Revenue Recognition</span>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-50"></div>
              <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-sky-400 rounded-full animate-float-slow opacity-50"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-float opacity-40"></div>
              <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float-slow opacity-40"></div>
            </div>
          </div>
        </section>

        {/* MARKET OPPORTUNITY - HORIZONTAL SCROLL CARDS WITH 3D TILT */}
        <section id="market" className="py-32 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 relative overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>

          {/* Glowing Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/30 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-600/20 rounded-full blur-[120px] animate-float-slow"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-bold uppercase tracking-wider mb-6">
                 <TrendingUp size={18} className="text-emerald-400" /> Why Now?
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-white mb-6">A Massive <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-400">Untapped Opportunity</span></h2>
               <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                 The legacy ERP market is stagnant. The <span className="font-bold text-violet-400">Agentic AI</span> market is exploding.
               </p>
            </div>

            {/* STACKED 3D PERSPECTIVE CARDS */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 perspective-1000">

              {/* Card 1 - Tilted Left */}
              <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:rotate-[-8deg] lg:translate-x-0 z-10 w-full max-w-sm group hover:z-30 transition-all duration-500">
                <div className="bg-gradient-to-br from-violet-600/90 to-purple-700/90 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-500 hover:scale-110 lg:hover:rotate-0 hover:-translate-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                      <Bot size={24} className="text-white" />
                    </div>
                    <span className="text-white/70 font-bold uppercase tracking-wider text-sm">Agentic AI</span>
                  </div>
                  <div className="text-7xl md:text-8xl font-black text-white mb-2 tracking-tight">$93B</div>
                  <div className="text-violet-200 font-bold mb-6">Market by 2032</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    </div>
                    <span className="text-emerald-400 font-black text-lg">44.6%</span>
                  </div>
                  <p className="text-white/60 text-sm">CAGR - Fastest growing software sector</p>
                </div>
              </div>

              {/* Card 2 - Center (Elevated) */}
              <div className="lg:relative z-20 w-full max-w-sm group">
                <div className="bg-gradient-to-br from-sky-600/90 to-cyan-700/90 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-6 lg:-translate-y-8">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-xs font-black text-white uppercase tracking-wider shadow-lg">
                    Our Beachhead
                  </div>
                  <div className="flex items-center gap-3 mb-6 mt-2">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                      <Target size={24} className="text-white" />
                    </div>
                    <span className="text-white/70 font-bold uppercase tracking-wider text-sm">Manufacturing AI</span>
                  </div>
                  <div className="text-7xl md:text-8xl font-black text-white mb-2 tracking-tight">$155B</div>
                  <div className="text-sky-200 font-bold mb-6">Market by 2030</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    </div>
                    <span className="text-emerald-400 font-black text-lg">35.3%</span>
                  </div>
                  <p className="text-white/60 text-sm">CAGR - Industrial firms adopting AI aggressively</p>
                </div>
              </div>

              {/* Card 3 - Tilted Right */}
              <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:rotate-[8deg] lg:translate-x-0 z-10 w-full max-w-sm group hover:z-30 transition-all duration-500">
                <div className="bg-gradient-to-br from-teal-600/90 to-cyan-700/90 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-500 hover:scale-110 lg:hover:rotate-0 hover:-translate-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                      <Globe size={24} className="text-white" />
                    </div>
                    <span className="text-white/70 font-bold uppercase tracking-wider text-sm">Total ERP TAM</span>
                  </div>
                  <div className="text-7xl md:text-8xl font-black text-white mb-2 tracking-tight">$229B</div>
                  <div className="text-teal-200 font-bold mb-6">Market by 2032</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                    </div>
                    <span className="text-amber-400 font-black text-lg">TAM</span>
                  </div>
                  <p className="text-white/60 text-sm">Every legacy ERP is a replacement opportunity</p>
                </div>
              </div>

            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-1">2</div>
                <div className="text-violet-300 font-medium">Pilots Active</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-1">L&T</div>
                <div className="text-sky-300 font-medium">Enterprise Client</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-1">0→1</div>
                <div className="text-teal-300 font-medium">Stage</div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK - LAYERED ARCHITECTURE VISUALIZATION */}
        <section id="technology" className="py-32 bg-white relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-violet-50/30"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
               <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-violet-100 to-sky-100 border border-violet-200 text-violet-700 text-sm font-bold uppercase tracking-wider mb-6">
                 <Cpu size={18} /> Technology
               </div>
               <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Sophisticated <span className="gradient-text">Simplicity.</span></h3>
               <p className="text-xl text-slate-600 leading-relaxed">
                 We've abstracted away the complexity of traditional manufacturing software. Astra is not just a wrapper; it's a new operating system for the factory floor.
               </p>
            </div>

            {/* TERMINAL STYLE ARCHITECTURE STACK */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: Interactive Stacked Layers */}
              <div className="relative">
                {/* Layer 3 - Top (Infrastructure) */}
                <div className="relative z-30 transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer mb-[-20px]">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-3xl rounded-b-lg p-6 shadow-2xl shadow-cyan-500/20 border-2 border-cyan-400">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <ShieldCheck size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl">Enterprise Infrastructure</h4>
                        <p className="text-cyan-100 text-sm">Docker • Kubernetes • Air-Gap Ready</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 2 - Middle (Knowledge Graph) */}
                <div className="relative z-20 transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer mb-[-20px] ml-4">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-6 shadow-2xl shadow-teal-500/20 border-2 border-teal-400">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Network size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl">Knowledge Graph</h4>
                        <p className="text-teal-100 text-sm">Neo4j • Semantic Layer • Context Engine</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 1 - Bottom (Agentic Core) */}
                <div className="relative z-10 transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer ml-8">
                  <div className="bg-gradient-to-r from-violet-600 to-sky-600 rounded-b-3xl rounded-t-lg p-6 shadow-2xl shadow-violet-500/30 border-2 border-violet-400">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Bot size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl">Agentic Core</h4>
                        <p className="text-violet-100 text-sm">LangChain • FastAPI • Autonomous Workflows</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute left-8 top-[60px] w-1 h-[calc(100%-120px)] bg-gradient-to-b from-cyan-400 via-teal-400 to-violet-400 rounded-full opacity-50"></div>
              </div>

              {/* Right: Terminal Code Block */}
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                {/* Terminal Header */}
                <div className="h-12 bg-slate-800 flex items-center px-4 gap-3 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-slate-400 text-sm font-mono ml-4">astra-architecture.yml</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-slate-500"># Astra Tech Stack</div>
                  <br/>
                  <div><span className="text-cyan-400">infrastructure</span><span className="text-slate-400">:</span></div>
                  <div className="pl-4 text-slate-300">runtime: <span className="text-emerald-400">"kubernetes"</span></div>
                  <div className="pl-4 text-slate-300">security: <span className="text-emerald-400">"enterprise-grade"</span></div>
                  <div className="pl-4 text-slate-300">deployment: <span className="text-emerald-400">["cloud", "on-prem"]</span></div>
                  <br/>
                  <div><span className="text-teal-400">knowledge_graph</span><span className="text-slate-400">:</span></div>
                  <div className="pl-4 text-slate-300">database: <span className="text-emerald-400">"neo4j"</span></div>
                  <div className="pl-4 text-slate-300">embeddings: <span className="text-emerald-400">"vector-search"</span></div>
                  <div className="pl-4 text-slate-300">context: <span className="text-emerald-400">"relationship-aware"</span></div>
                  <br/>
                  <div><span className="text-violet-400">agentic_core</span><span className="text-slate-400">:</span></div>
                  <div className="pl-4 text-slate-300">orchestrator: <span className="text-emerald-400">"langchain"</span></div>
                  <div className="pl-4 text-slate-300">api: <span className="text-emerald-400">"fastapi"</span></div>
                  <div className="pl-4 text-slate-300">capabilities: <span className="text-amber-400">[</span></div>
                  <div className="pl-8 text-emerald-400">"plan"<span className="text-slate-400">,</span></div>
                  <div className="pl-8 text-emerald-400">"execute"<span className="text-slate-400">,</span></div>
                  <div className="pl-8 text-emerald-400">"verify"</div>
                  <div className="pl-4 text-amber-400">]</div>
                  <br/>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-slate-400">System initialized successfully</span>
                    <span className="w-2 h-4 bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tech Pills */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {['Python', 'FastAPI', 'LangChain', 'Neo4j', 'Docker', 'Kubernetes', 'React', 'PostgreSQL', 'Redis'].map((tech, i) => (
                <span key={i} className="px-5 py-2 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full text-slate-700 font-bold text-sm border border-slate-200 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 hover:scale-105 transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & DIRECT MESSAGE */}
        <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/20 rounded-full blur-3xl animate-float"></div>
             <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-sky-500/20 rounded-full blur-3xl animate-float-slow"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 sm:mb-8">
              <Heart size={16} className="sm:w-[18px] sm:h-[18px] text-cyan-400" /> Join Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">Invest in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-400">Autonomous Future</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 sm:mb-16 max-w-2xl mx-auto px-2">We are raising a pre-seed round to support our L&T deployment. Looking for strategic partners.</p>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left">
               {/* Contact Info */}
               <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/20 hover:border-violet-400/50 transition-all duration-500">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                    <Phone className="text-violet-400" size={20} /> Founder Direct Line
                  </h3>
                  <div className="space-y-6">
                    <ContactRow icon={<Globe size={22} />} label="Website" value="www.atlasintellitek.com" link="https://www.atlasintellitek.com" />
                    <ContactRow icon={<Mail size={22} />} label="Email" value="admin@atlasintellitek.com" link="mailto:admin@atlasintellitek.com" />
                    <ContactRow icon={<Phone size={22} />} label="Phone" value="+1 (614) 634-2560" />
                    <ContactRow icon={<Building2 size={22} />} label="Headquarters" value="Tempe, AZ (Relocating to SF)" />
                    <ContactRow icon={<Linkedin size={22} />} label="LinkedIn" value="Atlas IntelliTek" link="https://www.linkedin.com/company/atlasintellitek/" />
                  </div>
               </div>

               {/* Direct Message Box */}
               <div className="bg-gradient-to-br from-violet-600/90 to-sky-600/90 backdrop-blur-xl p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/20 shadow-2xl shadow-violet-500/30">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 flex items-center gap-2 sm:gap-3">
                    <Send className="text-white" size={20} /> Send us a Message
                  </h3>
                  <p className="text-violet-200 text-sm sm:text-base mb-6 sm:mb-8">Skip the intro. Send a direct note to the founders.</p>

                  <form className="space-y-5" onSubmit={async (e) => {
                     e.preventDefault();
                     const form = e.target;
                     const submitBtn = form.querySelector('button[type="submit"]');
                     const originalText = submitBtn.innerHTML;

                     // Show loading state
                     submitBtn.disabled = true;
                     submitBtn.innerHTML = '<svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';

                     try {
                        await emailjs.send('service_8vby30q', 'template_n6q0rxx', {
                           from_name: form.name.value,
                           from_email: form.email.value,
                           company: form.company.value || 'Not specified',
                           message: form.message.value
                        });

                        // Success state
                        submitBtn.innerHTML = '<svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Message Sent!';
                        submitBtn.classList.remove('bg-white', 'text-violet-700');
                        submitBtn.classList.add('bg-emerald-500', 'text-white');
                        form.reset();

                        setTimeout(() => {
                           submitBtn.disabled = false;
                           submitBtn.innerHTML = originalText;
                           submitBtn.classList.remove('bg-emerald-500', 'text-white');
                           submitBtn.classList.add('bg-white', 'text-violet-700');
                        }, 3000);

                     } catch (error) {
                        console.error('EmailJS Error:', error);
                        submitBtn.innerHTML = '<svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Failed - Try Again';
                        submitBtn.classList.remove('bg-white', 'text-violet-700');
                        submitBtn.classList.add('bg-red-500', 'text-white');

                        setTimeout(() => {
                           submitBtn.disabled = false;
                           submitBtn.innerHTML = originalText;
                           submitBtn.classList.remove('bg-red-500', 'text-white');
                           submitBtn.classList.add('bg-white', 'text-violet-700');
                        }, 3000);
                     }
                  }}>
                     <div>
                        <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Name</label>
                        <input type="text" name="name" required className="w-full bg-white/20 backdrop-blur border-2 border-white/30 rounded-full px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors text-lg" placeholder="John Doe" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Email</label>
                        <input type="email" name="email" required className="w-full bg-white/20 backdrop-blur border-2 border-white/30 rounded-full px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors text-lg" placeholder="john@vc.firm" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Company</label>
                        <input type="text" name="company" className="w-full bg-white/20 backdrop-blur border-2 border-white/30 rounded-full px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors text-lg" placeholder="Acme Inc. (Optional)" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Message</label>
                        <textarea name="message" required rows="3" className="w-full bg-white/20 backdrop-blur border-2 border-white/30 rounded-3xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors text-lg resize-none" placeholder="Let's chat about..." />
                     </div>
                     <button type="submit" className="w-full bg-white hover:bg-slate-100 text-violet-700 font-black py-5 rounded-full flex items-center justify-center gap-3 transition-all text-lg hover:scale-105 hover:shadow-2xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                        <Send size={22} /> Send to Founders
                     </button>
                  </form>
               </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src="/Atlas_intellitek_white_symbol_nobg.png" alt="Atlas IntelliTek" className="w-8 h-8 object-contain" />
              <span className="font-bold text-white">ATLAS INTELLITEK</span>
              <span className="text-slate-500 font-light">|</span>
              <img src="/Astra_Color_lightmode.png" alt="Astra" className="w-6 h-6 object-contain" />
              <span className="font-semibold text-slate-300">Astra</span>
            </div>
            <p>&copy; 2025 Atlas IntelliTek LLC. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
