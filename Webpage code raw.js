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
  Server
} from 'lucide-react';

/**
 * Atlas IntelliTek - Strategic Landing Page
 * Target Audience: Strategic Angel Investors
 * Design: Ultra-High-Fidelity "Cinematic" Build Animation v6
 */

/* -------------------------------------------------------------------------- */
/* SUBCOMPONENTS (Defined before App to prevent ReferenceErrors)              */
/* -------------------------------------------------------------------------- */

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-slate-50 hover:bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
    <div className="mb-6 bg-white w-14 h-14 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const TechItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1">
      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  </div>
);

const ContactRow = ({ icon, label, value, link }) => (
  <div className="flex items-center gap-4">
    <div className="text-slate-400">{icon}</div>
    <div className="flex-1">
      <p className="text-xs text-slate-500 font-medium uppercase">{label}</p>
      {link ? (
        <a href={link} className="text-slate-900 font-medium hover:text-blue-600 transition-colors">{value}</a>
      ) : (
        <p className="text-slate-900 font-medium">{value}</p>
      )}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* ASTRA DEMO ANIMATION COMPONENT (CINEMATIC V2)                              */
/* -------------------------------------------------------------------------- */

const AstraDemoAnimation = () => {
  // Stages: 
  // 0: Idle/Start 
  // 1: Typing Command 
  // 2: Analysis/Magnify (Scanning)
  // 3: Connect Tools (Beaming)
  // 4: Build Dashboard (Constructing)
  // 5: Complete
  const [stage, setStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullCommand = "Hey Astra, we are a mid-size tire manufacturer. Can you create the full ERP system for us?";

  const startDemo = () => {
    setStage(1);
    setTypedText("");
  };

  useEffect(() => {
    let timeout;
    
    // Stage 0: Auto-start
    if (stage === 0) {
      timeout = setTimeout(() => {
        startDemo();
      }, 1500);
    }

    // Stage 1: Typing Effect
    if (stage === 1) {
      if (typedText.length < fullCommand.length) {
        const speed = Math.random() * 50 + 30; 
        timeout = setTimeout(() => {
          setTypedText(fullCommand.slice(0, typedText.length + 1));
        }, speed); 
      } else {
        timeout = setTimeout(() => setStage(2), 1000); 
      }
    }

    // Stage 2: Magnify (3s)
    if (stage === 2) {
      timeout = setTimeout(() => setStage(3), 3000);
    }

    // Stage 3: Connect (2.5s)
    if (stage === 3) {
      timeout = setTimeout(() => setStage(4), 2500);
    }

    // Stage 4: Build (3s)
    if (stage === 4) {
      timeout = setTimeout(() => setStage(5), 3000);
    }

    return () => clearTimeout(timeout);
  }, [stage, typedText]);

  return (
    <div className="w-full max-w-4xl aspect-[16/10] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative group transition-all duration-500 hover:shadow-blue-900/10">
      
      {/* Replay Button */}
      {stage === 5 && (
        <div className="absolute inset-0 z-50 bg-slate-900/5 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <button onClick={() => setStage(0)} className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform hover:bg-blue-50">
             <RotateCcw size={18} /> Replay Experience
           </button>
        </div>
      )}

      {/* Header */}
      <div className="h-14 bg-white/90 backdrop-blur-sm border-b border-slate-100 flex items-center justify-between px-6 z-20">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold shadow-md">A</div>
           <span className="font-bold text-slate-800 tracking-tight">Astra Co-Pilot <span className="text-xs text-blue-600 font-mono bg-blue-50 px-1.5 py-0.5 rounded ml-2">BETA 2.0</span></span>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-slate-200 animate-pulse"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative bg-slate-50/50 overflow-hidden flex flex-col">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"></div>

        {/* 1. CHAT INTERFACE (Animates to Top) */}
        <div className={`absolute left-0 right-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-40 
             ${stage >= 2 ? 'top-2 scale-75 opacity-90' : 'top-1/3 -translate-y-1/2 scale-100 opacity-100'}
        `}>
          <div className="max-w-xl mx-auto">
             <div className={`bg-white rounded-2xl shadow-xl border border-slate-200/60 backdrop-blur-xl p-1 flex flex-col gap-2 transition-shadow duration-500 ${stage >= 2 ? 'shadow-md' : 'shadow-2xl'}`}>
                <div className="flex items-start gap-3 p-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/20">
                       <Terminal className="text-blue-400" size={16} />
                    </div>
                    <div className="flex-1 font-mono text-slate-700 text-sm md:text-base leading-relaxed relative">
                       {typedText}
                       {stage === 1 && <span className="inline-block w-2 h-4 bg-blue-600 ml-1 animate-pulse align-middle"></span>}
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="h-1 w-full bg-slate-100 rounded-b-xl overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 ${stage > 1 ? 'w-full' : 'w-0'}`}></div>
                </div>
             </div>
             
             {/* Status Indicators */}
             <div className={`mt-2 flex justify-center gap-6 text-[10px] font-mono font-bold tracking-widest text-slate-400 transition-opacity duration-500 ${stage >= 2 && stage < 5 ? 'opacity-100' : 'opacity-0'}`}>
                <span className={`flex items-center gap-1.5 ${stage === 2 ? 'text-blue-600' : ''}`}>
                    {stage === 2 && <ScanLine size={10} className="animate-spin" />} 
                    ANALYZING
                </span>
                <span className={`flex items-center gap-1.5 ${stage === 3 ? 'text-blue-600' : ''}`}>
                    {stage === 3 && <Network size={10} className="animate-pulse" />}
                    CONNECTING
                </span>
                <span className={`flex items-center gap-1.5 ${stage === 4 ? 'text-blue-600' : ''}`}>
                    {stage === 4 && <LayoutDashboard size={10} />}
                    BUILDING
                </span>
             </div>
          </div>
        </div>

        {/* 2. MAGNIFY / ANALYZE LAYER */}
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ${stage === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
           <div className="relative mt-12"> {/* Added margin top to clear the chat bar */}
              <div className="absolute inset-0 border-[1px] border-blue-500/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              <div className="absolute -inset-8 border-[1px] border-indigo-500/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]"></div>
              
              <div className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)] z-10 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.8)] animate-[scan_2s_linear_infinite]"></div>
                 <Search className="text-slate-800 w-16 h-16" />
              </div>
              <div className="absolute top-48 w-full text-center">
                 <div className="inline-block bg-slate-900/90 text-white text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Detecting Stack...
                 </div>
              </div>
           </div>
        </div>

        {/* 3. CONNECTION LAYER */}
        <div className={`absolute inset-0 pointer-events-none z-10 ${stage === 3 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
           {/* Center Node */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.2)] border border-blue-100 z-20 mt-6">
              <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white">
                 <Bot size={32} />
              </div>
           </div>

           {/* Satellites */}
           {[
             { Icon: Database, color: 'text-green-600', bg: 'bg-green-50', label: 'QuickBooks', pos: 'top-[20%] left-[15%]' },
             { Icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50', label: 'Slack', pos: 'top-[20%] right-[15%]' },
             { Icon: ShoppingCart, color: 'text-emerald-600', bg: 'bg-emerald-50', label: 'Shopify', pos: 'bottom-[15%] left-[20%]' },
             { Icon: Mail, color: 'text-red-600', bg: 'bg-red-50', label: 'Workspace', pos: 'bottom-[15%] right-[20%]' },
           ].map((item, i) => (
             <div key={i} className={`absolute ${item.pos} flex flex-col items-center gap-3 transition-all duration-700 ${stage === 3 ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10'}`}>
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center shadow-lg border border-white`}>
                   <item.Icon className={item.color} size={24} />
                </div>
                <span className="text-[10px] font-bold text-slate-600 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-slate-100">{item.label}</span>
                
                {/* Connecting Line */}
                <svg className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none overflow-visible">
                    <line 
                      x1="50%" y1="50%" 
                      x2={i % 2 === 0 ? "100%" : "0%"} 
                      y2={i < 2 ? "100%" : "0%"} 
                      stroke="#cbd5e1" 
                      strokeWidth="2" 
                      strokeDasharray="4 4" 
                    />
                    <circle r="3" fill="#3b82f6" className="animate-[ping_1s_infinite]">
                       <animateMotion dur="1s" repeatCount="indefinite" path={`M ${i % 2 === 0 ? 150 : -150} ${i < 2 ? 150 : -150} L 0 0`} />
                    </circle>
                </svg>
             </div>
           ))}
        </div>

        {/* 4. DASHBOARD BUILD LAYER */}
        <div className={`absolute inset-0 pt-24 px-6 pb-6 transition-all duration-[1500ms] ease-out ${stage >= 4 ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-105 blur-lg'}`}>
           <div className="h-full grid grid-cols-12 grid-rows-6 gap-3">
              
              {/* Sidebar */}
              <div className="col-span-2 row-span-6 bg-white rounded-lg shadow-sm border border-slate-200 p-3 flex flex-col gap-3 animate-in slide-in-from-left duration-1000 fill-mode-forwards">
                 <div className="h-6 w-6 bg-blue-600 rounded-md mb-2 flex items-center justify-center text-white font-bold text-xs">A</div>
                 <div className="flex flex-col gap-1">
                    {[
                        { icon: Home, label: "Home" },
                        { icon: Activity, label: "Ops" },
                        { icon: CreditCard, label: "Finance" },
                        { icon: Users, label: "HR" },
                        { icon: Settings, label: "Settings" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 transition-colors" style={{animationDelay: `${i*100}ms`}}>
                             <item.icon size={14} className="text-slate-400" />
                             <span className="text-[10px] font-semibold text-slate-600 hidden xl:block">{item.label}</span>
                             <div className="h-2 w-8 bg-slate-100 rounded xl:hidden"></div>
                        </div>
                    ))}
                 </div>
              </div>

              {/* Stats Row */}
              <div className="col-span-10 row-span-2 grid grid-cols-4 gap-3">
                 {[
                   { label: 'Revenue', val: '$4.2M', icon: TrendingUp, color: 'text-green-500', trend: '+12%', sub: 'vs last mo' },
                   { label: 'Production', val: '12k', icon: Package, color: 'text-blue-500', trend: '+5%', sub: 'Units' },
                   { label: 'Pending POs', val: '8', icon: FileText, color: 'text-orange-500', trend: '3 Urg', sub: 'Action Req' },
                   { label: 'Logistics', val: '98%', icon: Truck, color: 'text-purple-500', trend: 'Good', sub: 'On Time' },
                 ].map((stat, i) => (
                   <div key={i} className={`bg-white p-3 rounded-lg shadow-sm border border-slate-200 flex flex-col justify-between animate-in zoom-in duration-700`} style={{animationDelay: `${i*150}ms`}}>
                      <div className="flex justify-between items-start">
                         <div className={`p-1.5 rounded-md bg-slate-50 ${stat.color} bg-opacity-10`}>
                            <stat.icon size={14} className={stat.color} />
                         </div>
                         <span className="text-[9px] font-bold bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full whitespace-nowrap">{stat.trend}</span>
                      </div>
                      <div>
                         <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide truncate block">{stat.label}</span>
                         <div className="text-xl font-bold text-slate-800 mt-0.5">{stat.val}</div>
                         <div className="text-[9px] text-slate-400">{stat.sub}</div>
                      </div>
                   </div>
                 ))}
              </div>

              {/* Main Chart */}
              <div className="col-span-7 row-span-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 flex flex-col">
                 <div className="flex justify-between items-center mb-4">
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">Production Output</h4>
                        <p className="text-[10px] text-slate-400">Shop floor telemetry</p>
                    </div>
                 </div>
                 <div className="flex-1 flex items-end gap-2 w-full px-1">
                     {[40, 60, 45, 70, 85, 60, 75, 50, 65, 80, 90, 70].map((h, i) => (
                        <div key={i} style={{height: `${h}%`}} className="flex-1 bg-blue-50 rounded-t-sm relative group overflow-hidden">
                           <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-sm transition-all duration-[2000ms] ease-out" style={{height: stage >= 4 ? '100%' : '0%', transitionDelay: `${i*50}ms`}}></div>
                        </div>
                     ))}
                 </div>
                 <div className="flex justify-between text-[9px] text-slate-300 mt-2 font-mono">
                     <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span>
                 </div>
              </div>

              {/* Side Feed */}
              <div className="col-span-3 row-span-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col gap-3 animate-in fade-in slide-in-from-right-10 duration-1000 delay-700 overflow-hidden">
                 <div className="flex items-center gap-2 mb-1 border-b border-slate-100 pb-2">
                    <Zap size={12} className="text-amber-500 fill-amber-500" />
                    <h4 className="font-bold text-slate-800 text-xs">Live Agent Feed</h4>
                 </div>
                 {[
                    { text: "PO #921 Approved", sub: "Finance Bot • 2m", color: "bg-green-500" },
                    { text: "Stock Alert: Steel", sub: "Inventory Bot • 5m", color: "bg-red-500" },
                    { text: "New RFQ: L&T", sub: "Sales Bot • 12m", color: "bg-blue-500" }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start group">
                       <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`}></div>
                       <div className="min-w-0">
                          <div className="text-[10px] font-bold text-slate-700 truncate">{item.text}</div>
                          <div className="text-[9px] text-slate-400 truncate">{item.sub}</div>
                       </div>
                    </div>
                 ))}
                 <div className="mt-auto pt-2 border-t border-slate-100 text-center">
                    <span className="text-[9px] font-bold text-blue-600 cursor-pointer hover:underline">View All</span>
                 </div>
              </div>

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

  // Smooth scroll
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">ATLAS <span className="text-blue-600 font-light">INTELLITEK</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('founders')} className="text-sm font-medium hover:text-blue-600 transition-colors">Founders</button>
            <button onClick={() => scrollTo('demo')} className="text-sm font-medium hover:text-blue-600 transition-colors">Demo</button>
            <button onClick={() => scrollTo('market')} className="text-sm font-medium hover:text-blue-600 transition-colors">Market</button>
            <button onClick={() => scrollTo('technology')} className="text-sm font-medium hover:text-blue-600 transition-colors">Technology</button>
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:scale-105"
            >
              Request Access
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-slate-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-slate-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-slate-800"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col gap-6 text-xl font-medium">
            <button onClick={() => scrollTo('founders')}>Founders</button>
            <button onClick={() => scrollTo('demo')}>Demo</button>
            <button onClick={() => scrollTo('market')}>Market</button>
            <button onClick={() => scrollTo('technology')}>Technology</button>
            <button onClick={() => scrollTo('contact')} className="text-blue-600">Contact Us</button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 animate-pulse duration-[5000ms]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Pilot Active
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              The First <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Autonomous</span> <br/>
              ERP & CRM.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Software shouldn't require a PhD to implement. <span className="font-semibold text-slate-900">Astra</span> connects to your existing tools, learns your business graph, and auto-builds your ERP. 
              <br/><br/>
              <span className="italic font-medium text-slate-500">Zero manual setup. Founder-built. Agentic.</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Inquire for Investment <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollTo('demo')}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Play size={20} className="fill-slate-700" /> Watch Demo
              </button>
            </div>

            {/* MARKET VALIDATION - MOVED TO TOP */}
            <div className="pt-12 pb-6 border-b border-slate-100/50">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted By Industry Leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
                <div className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="text-slate-900 font-black text-xl tracking-tighter hover:scale-105 transition-transform duration-300">LARSEN & TOUBRO</div>
                   <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest group-hover:bg-blue-100 transition-colors">In Discussion</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="text-slate-700 font-bold text-xl tracking-wide hover:scale-105 transition-transform duration-300">AVANT-GARDE</div>
                   <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest group-hover:bg-blue-100 transition-colors">In Discussion</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="text-slate-700 font-bold text-xl italic font-serif hover:scale-105 transition-transform duration-300">Watflow</div>
                   <span className="text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">Pilot Interest</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section id="founders" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Users size={12} /> The Powerhouse Duo
             </div>
             <h2 className="text-4xl font-bold text-slate-900 mb-6">Sisters. Engineers. Builders.</h2>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
               We don't just share a last name; we share a relentless drive to fix broken systems. With a zero-ego dynamic and complimentary skills, we move faster than any traditional co-founder match.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
             {/* Ackshaya */}
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mb-6 border-4 border-white shadow-xl overflow-hidden relative">
                   {/* Placeholder - Replace with actual image */}
                   <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500 font-bold text-3xl">AV</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                   Ackshaya Varshini <a href="https://www.linkedin.com/in/ackshaya" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700"><Linkedin size={20}/></a>
                </h3>
                <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide text-sm">Technical Lead & Co-Founder</p>
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed max-w-md">
                   <p>
                      <b>The Hacker:</b> I once re-engineered a massive Siemens medical robot because it wouldn't fit in the operating room. I fit the machine to the room, not the room to the machine.
                   </p>
                   <p>
                      <b>The Builder:</b> I wrote 100% of Astra's codebase (Python, FastAPI, LangChain). I've previously built "VentraFlow" (AI-CFD) and "Kavach AI" (Fraud Detection).
                   </p>
                </div>
             </div>

             {/* Hari */}
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full mb-6 border-4 border-white shadow-xl overflow-hidden relative">
                   {/* Placeholder - Replace with actual image */}
                   <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500 font-bold text-3xl">HD</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                   Hari Dharshini <a href="https://www.linkedin.com/in/hari-dharshini/" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700"><Linkedin size={20}/></a>
                </h3>
                <p className="text-purple-600 font-medium mb-4 uppercase tracking-wide text-sm">Business Lead & Co-Founder</p>
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed max-w-md">
                   <p>
                      <b>The Fixer:</b> When my university's grading system was broken, I didn't just complain—I led a student movement, went straight to the Vice Chancellor, and got the entire policy rewritten.
                   </p>
                   <p>
                      <b>The Strategist:</b> Public Policy at UChicago & Ex-Bain Intern. I ensure Astra solves real problems for real people, securing our pilots with L&T and Avant-Garde.
                   </p>
                </div>
             </div>
          </div>

          {/* Founders Video */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black aspect-video group">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors pointer-events-none z-10 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <Play size={40} className="fill-white text-white ml-2" />
                </div>
             </div>
             <video 
               controls 
               className="w-full h-full object-cover"
               poster="/api/placeholder/800/450"
             >
               <source src="./Astra_Founders_Atlas_IntelliTek.mp4" type="video/mp4" />
               Your browser does not support the video tag.
             </video>
          </div>
          <p className="text-center text-slate-400 text-sm mt-4 italic">Meet the Founders: A candid intro to our vision.</p>
        </div>
      </section>

      {/* INTERACTIVE ANIMATION SECTION */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience the Autonomous Engine</h2>
             <p className="text-slate-600">Watch Astra analyze a request and construct a bespoke ERP in real-time.</p>
          </div>
          <div className="flex justify-center perspective-1000">
             <AstraDemoAnimation />
          </div>
        </div>
      </section>

      {/* PRODUCT DEMO VIDEO SECTION */}
      <section id="demo" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Play size={12} /> Product Walkthrough
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">See Astra in Action</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A deep dive into how Astra connects disparate tools into a unified source of truth.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-black aspect-video">
             <video 
                controls 
                className="w-full h-full"
             >
                <source src="./Astra_video_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
             </video>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section id="product" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Work Mess" is Solved.</h2>
            <p className="text-lg text-slate-600">
              Traditional ERPs (SAP, Oracle) sell you rigid containers you have to manually fill. 
              <br/>
              <span className="text-blue-600 font-bold">Astra builds the container around your actual work.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Network size={32} className="text-blue-600" />}
              title="Auto-Configuration"
              description="Astra connects to Slack, Banks, and Logistics tools to map your 'Company Graph' automatically. No months-long implementation."
            />
            <FeatureCard 
              icon={<MessageSquare size={32} className="text-indigo-600" />}
              title="Natural Language Copilot"
              description="Don't learn menus. Just ask: 'Show me pending invoices over $10k' or 'Create Purchase Order for L&T'."
            />
            <FeatureCard 
              icon={<Layers size={32} className="text-purple-600" />}
              title="Agentic Workflows"
              description="It doesn't just chat. It acts. Astra autonomously handles RFQs, Supply Chain routing, and Compliance checks."
            />
          </div>
        </div>
      </section>

      {/* MARKET OPPORTUNITY SECTION */}
      <section id="market" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
           <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
           <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
               <TrendingUp size={12} /> Why Now?
             </div>
             <h2 className="text-4xl font-bold text-slate-900 mb-4">A Massive Untapped Opportunity</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
               The legacy ERP market is stagnant. The <span className="font-bold text-blue-600">Agentic AI</span> market is exploding. We are perfectly positioned to capture the shift from "System of Record" to "System of Action."
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
             
             {/* Card 1: Agentic AI Growth (The Hook) */}
             <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                   <Bot size={100} className="text-blue-600" />
                </div>
                
                <div className="relative z-10">
                   <div className="mb-6">
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Agentic AI Market</p>
                      <span className="text-5xl lg:text-6xl font-black text-slate-900 block mb-1 tracking-tight">$93.2B</span>
                      <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Forecast by 2032</span>
                   </div>
                   
                   <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-bold mb-6 border border-green-100">
                      <TrendingUp size={16} /> 44.6% CAGR
                   </div>
                   
                   <p className="text-slate-600 text-base leading-relaxed">
                      Agentic AI is the fastest growing sector in software. Companies are moving beyond chat-bots to autonomous agents that <i>do the work</i>.
                   </p>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-100">
                   <p className="text-[11px] font-medium text-slate-400 italic">Source: MarketsandMarkets Forecast 2025-2032</p>
                </div>
             </div>

             {/* Card 2: AI in Manufacturing (The Niche) */}
             <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                   <Target size={100} className="text-purple-600" />
                </div>
                
                <div className="relative z-10">
                   <div className="mb-6">
                      <p className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-3">AI in Manufacturing</p>
                      <span className="text-5xl lg:text-6xl font-black text-slate-900 block mb-1 tracking-tight">$155B</span>
                      <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Forecast by 2030</span>
                   </div>

                   <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-bold mb-6 border border-purple-100">
                      <TrendingUp size={16} /> 35.3% CAGR
                   </div>
                   
                   <p className="text-slate-600 text-base leading-relaxed">
                      Our beachhead market. Industrial firms (like L&T) are aggressively adopting AI to automate supply chains and operations.
                   </p>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-100">
                   <p className="text-[11px] font-medium text-slate-400 italic">Source: Fortune Business Insights 2025</p>
                </div>
             </div>

             {/* Card 3: The ERP TAM (The Ceiling) */}
             <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                   <Globe size={100} className="text-slate-600" />
                </div>
                
                <div className="relative z-10">
                   <div className="mb-6">
                      <p className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-3">Total ERP Market</p>
                      <span className="text-5xl lg:text-6xl font-black text-slate-900 block mb-1 tracking-tight">$229B</span>
                      <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Forecast by 2032</span>
                   </div>

                   <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm font-bold mb-6 border border-slate-200">
                      <BarChart4 size={16} /> Steady Growth
                   </div>
                   
                   <p className="text-slate-600 text-base leading-relaxed">
                      We aren't just creating a new market; we are replacing the old one. Every legacy ERP contract is an opportunity for Astra.
                   </p>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-100">
                   <p className="text-[11px] font-medium text-slate-400 italic">Source: Fortune Business Insights 2025</p>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* TECH STACK - SIMPLIFIED WITHOUT CODE BLOCK */}
      <section id="technology" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
               <Cpu size={12} /> Technology
             </div>
             <h3 className="text-3xl font-bold text-slate-900 mb-6">Sophisticated Simplicity.</h3>
             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
               We've abstracted away the complexity of traditional enterprise software. Astra is not just a wrapper; it's a new operating system for business.
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                   <Bot size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-4">The Agentic Core</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                   Powered by advanced LangChain orchestrators and Python (FastAPI) microservices. Our agents don't just "chat"—they plan, execute, and verify complex multi-step workflows autonomously.
                </p>
             </div>

             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                   <Network size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-4">The Knowledge Graph</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                   A Neo4j-backed semantic layer that maps hidden relationships. Astra understands "Invoice #902" belongs to "Project Alpha" managed by "Sarah," enabling true context-aware automation.
                </p>
             </div>

             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                   <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-4">Enterprise Infrastructure</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                   Fully containerized (Docker/K8s) for security-first environments. Whether deployed in our secure Cloud or air-gapped on-premise for defense clients, Astra scales securely from day one.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* CONTACT & DIRECT MESSAGE */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Invest in the Autonomous Future</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">We are raising a pre-seed round to support our L&T deployment. Looking for strategic partners.</p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
             {/* Contact Info */}
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Founder Direct Line</h3>
                <div className="space-y-6">
                  <ContactRow icon={<Mail size={20} />} label="Email" value="admin@atlasintellitek.com" link="mailto:admin@atlasintellitek.com" />
                  <ContactRow icon={<Phone size={20} />} label="Phone" value="+1 (614) 634-2560" />
                  <ContactRow icon={<Globe size={20} />} label="Headquarters" value="Tempe, AZ (Relocating to SF)" />
                  <ContactRow icon={<Linkedin size={20} />} label="LinkedIn" value="linkedin.com/in/ackshaya" link="https://www.linkedin.com/in/ackshaya" />
                </div>
             </div>

             {/* Direct Message Box */}
             <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800 text-white">
                <h3 className="text-lg font-bold text-white mb-2">Send us a Message</h3>
                <p className="text-slate-400 text-sm mb-6">Skip the intro. Send a direct note to the founders.</p>
                
                <form className="space-y-4" onSubmit={(e) => {
                   e.preventDefault();
                   const name = e.target.name.value;
                   const email = e.target.email.value;
                   const msg = e.target.message.value;
                   const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${msg}`;
                   window.location.href = `mailto:admin@atlasintellitek.com?subject=Strategic Inquiry from ${name}&body=${body}`;
                }}>
                   <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                      <input type="text" name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                      <input type="email" name="email" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@vc.firm" />
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Message</label>
                      <textarea name="message" required rows="3" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Let's chat about..." />
                   </div>
                   <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all mt-2">
                      <Send size={18} /> Send to Founders
                   </button>
                </form>
             </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
          <p>&copy; 2025 Atlas IntelliTek LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0"><span>Privacy Policy</span><span>Terms of Service</span></div>
        </div>
      </footer>
    </div>
  );
};

export default App;