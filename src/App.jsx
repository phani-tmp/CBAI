import React from 'react';
import {
  Map,
  Bot,
  Github,
  Award,
  Briefcase,
  Mic,
  ChevronRight,
  PlayCircle,
  Code2,
  BookOpen,
  Users,
  Video,
  CheckCircle2,
  Search
} from 'lucide-react';

/* --- CUSTOM COMPOSITE ICONS (To mimic the "Photos" in your design) --- */

const IconRoadmap = () => (
  <div className="relative w-16 h-16">
    <div className="absolute inset-0 bg-blue-100 rounded-2xl flex items-center justify-center">
      <Map className="w-8 h-8 text-blue-600" />
    </div>
    <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-lg shadow-sm border border-blue-50">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    </div>
  </div>
);

const IconTutor = () => (
  <div className="relative w-16 h-16">
    <div className="absolute top-0 right-0 w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center z-10">
      <Bot className="w-6 h-6 text-indigo-600" />
    </div>
    <div className="absolute bottom-0 left-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
      <BookOpen className="w-5 h-5 text-indigo-400" />
    </div>
  </div>
);

const IconProjects = () => (
  <div className="relative w-16 h-16">
    <div className="absolute inset-0 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
      <Code2 className="w-8 h-8 text-slate-700" />
    </div>
    <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-100">
      <Github className="w-5 h-5 text-slate-900" />
    </div>
  </div>
);

const IconSkillSeq = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
      <Award className="w-8 h-8 text-sky-600" />
    </div>
    <div className="absolute top-0 right-0">
      <CheckCircle2 className="w-5 h-5 text-green-500 fill-white" />
    </div>
  </div>
);

const IconMarketplace = () => (
  <div className="relative w-16 h-16">
    <div className="absolute inset-0 bg-emerald-50 rounded-2xl flex items-center justify-center">
      <Users className="w-8 h-8 text-emerald-600" />
    </div>
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-emerald-700 shadow-sm border border-emerald-100">
      HIRED
    </div>
  </div>
);

const IconInterview = () => (
  <div className="relative w-16 h-16">
    <div className="w-full h-full bg-orange-50 rounded-2xl flex items-center justify-center">
      <div className="relative">
        <Mic className="w-8 h-8 text-orange-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
      </div>
    </div>
  </div>
);

export default function CareerBuildAI() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                CareerBuild<span className="text-blue-600">AI</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Roadmap</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Interview Prep</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Skills</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-[15px] font-semibold text-slate-600 hover:text-slate-900">Sign In</button>
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-[15px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Text */}
          <div className="text-left">
            <h1 className="text-5xl md:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Your Career, <br />
              <span className="text-slate-900">Intelligently Built.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Personalized roadmaps, mock interviews, project portfolios, and verifiable skills—all in one AI-powered platform to land your dream job.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
              Create My Free Roadmap
            </button>
          </div>

          {/* Right Side: The Graph Route Visualization */}
          <div className="relative h-[400px] w-full hidden lg:block select-none">

            {/* The Curved SVG Path (The "Graph") */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Dashed background path */}
              <path d="M 50 250 C 150 250, 150 150, 250 150 C 350 150, 350 200, 450 100 L 550 50"
                stroke="#E2E8F0" strokeWidth="3" strokeDasharray="6 6" />
              {/* Gradient overlay path (optional) */}
              <path d="M 50 250 C 150 250, 150 150, 250 150 C 350 150, 350 200, 450 100 L 550 50"
                stroke="url(#gradient-line)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Nodes positioned on the curve */}

            {/* 1. Roadmap (Start) */}
            <div className="absolute left-[30px] top-[220px] flex flex-col items-center gap-2 hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-white rounded-full shadow-lg border-2 border-blue-100 flex items-center justify-center z-10">
                <Map className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-xs font-bold text-slate-600 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">Roadmap</span>
            </div>

            {/* 2. Tutor (Mid-High) */}
            <div className="absolute left-[180px] top-[120px] flex flex-col items-center gap-2 hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-white rounded-full shadow-lg border-2 border-indigo-100 flex items-center justify-center z-10">
                <Bot className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-xs font-bold text-slate-600 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">AI Tutor</span>
            </div>

            {/* 3. Projects (Mid) */}
            <div className="absolute left-[290px] top-[160px] flex flex-col items-center gap-2 hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-white rounded-full shadow-lg border-2 border-slate-200 flex items-center justify-center z-10">
                <div className="flex">
                  <Code2 className="w-4 h-4 text-slate-700" />
                  <Github className="w-4 h-4 text-slate-900 -ml-1" />
                </div>
              </div>
              <span className="text-xs font-bold text-slate-600 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">Projects</span>
            </div>

            {/* 4. SkillSeq (High) */}
            <div className="absolute right-[120px] top-[70px] flex flex-col items-center gap-2 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white rounded-full shadow-xl border-4 border-sky-50 flex items-center justify-center z-20">
                <Award className="w-8 h-8 text-sky-500" />
                <div className="absolute top-0 right-0 bg-white rounded-full"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
              </div>
              <span className="text-xs font-bold text-slate-900 bg-white shadow-sm px-2 py-1 rounded-md">SkillSeq</span>
            </div>

            {/* 5. Job (End) */}
            <div className="absolute right-[10px] top-[20px] flex flex-col items-center gap-2 hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-emerald-500 rounded-full shadow-lg border-4 border-emerald-100 flex items-center justify-center z-10">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-slate-900">Job Offer</span>
            </div>

          </div>
        </div>

        {/* --- 6 GRID CARDS SECTION (Matching "Exact Photos") --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

          {/* Card 1: Roadmap & Tutor */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
            <IconRoadmap />
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Personalized Roadmaps</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                AI analyzes your profile and market trends to craft a step-by-step learning journey.
              </p>
            </div>
          </div>

          {/* Card 2: Learning Resources */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
            <div className="relative w-16 h-16">
              <div className="bg-rose-50 w-full h-full rounded-2xl flex items-center justify-center">
                <PlayCircle className="w-8 h-8 text-rose-500" />
              </div>
              <div className="absolute -top-2 -right-2 bg-white p-1 shadow-sm rounded-lg border border-slate-100">
                <BookOpen className="w-4 h-4 text-slate-400" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Curated Learning</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Access top-tier tutorials, courses, and documentation directly integrated into your roadmap.
              </p>
            </div>
          </div>

          {/* Card 3: GitHub Projects */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
            <IconProjects />
            <div>
              <h3 className="font-bold text-slate-900 text-lg">GitHub Integrated</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Build real-world experience. Connect your GitHub and showcase industry-relevant projects.
              </p>
            </div>
          </div>

          {/* Card 4: SkillSeq Badge */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
            <IconSkillSeq />
            <div>
              <h3 className="font-bold text-slate-900 text-lg">SkillSeq Verification</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Earn digital badges and certificates for completed projects that employers can verify instantly.
              </p>
            </div>
          </div>

          {/* Card 5: Talent Marketplace */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
            <IconMarketplace />
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Talent Marketplace</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Handshake directly with top companies. Your verified profile puts you ahead of the queue.
              </p>
            </div>
          </div>

          {/* Card 6: AI Interviews */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
            <IconInterview />
            <div>
              <h3 className="font-bold text-slate-900 text-lg">AI Mock Interviews</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Practice with our AI interviewer. Receive real-time feedback on your answers and tone.
              </p>
            </div>
          </div>

        </div>

        {/* How It Works Steps */}
        <div className="mt-24 text-center">
          <h4 className="text-xl font-bold text-slate-900 mb-10">How It Works</h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-sm font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-500" /> 1. Assess Your Goals
            </div>
            <div className="hidden md:block text-slate-300">→</div>
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-blue-500" /> 2. Follow Your Path
            </div>
            <div className="hidden md:block text-slate-300">→</div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-500" /> 3. Showcase Value
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-10 text-center border border-slate-100">
          <p className="text-lg text-slate-600 mb-6">Ready to accelerate your career? Start building your future today.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20">
            Get Started
          </button>
        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-8 mt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div>© 2024 CareerBuildAI. All rights reserved.</div>
      </footer>
    </div>
  );
}