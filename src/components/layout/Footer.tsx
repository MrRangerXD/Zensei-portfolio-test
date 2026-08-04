"use client";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-black py-20 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-emerald-500 font-mono text-sm uppercase tracking-widest mb-4">Navigation</h3>
          <ul className="space-y-2 text-neutral-400">
            <li><a href="#work" className="hover:text-emerald-500 transition-colors">Work</a></li>
            <li><a href="#about" className="hover:text-emerald-500 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Connect</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-emerald-500 font-mono text-sm uppercase tracking-widest mb-4">Social</h3>
          <ul className="space-y-2 text-neutral-400">
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">LinkedIn</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-emerald-500 font-mono text-sm uppercase tracking-widest mb-4">Contact</h3>
          <p className="text-neutral-400">
            Available for strategic partnerships and innovative collaborations.
          </p>
        </div>
      </div>
      
      <div className="border-t border-neutral-800 pt-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-neutral-600 font-mono text-xs">© 2024 Zensei. All rights reserved.</p>
        <p className="text-neutral-600 font-mono text-xs mt-4 md:mt-0">Crafted with precision and vision</p>
      </div>
    </footer>
  );
};
