import { MessageCircle } from 'lucide-react';

export function ChatFab() {
  return (
    <button 
      onClick={() => window.open('https://m.me/LegalChicksPoultryFarm', '_blank')}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#0084FF] hover:bg-[#0074E4] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,132,255,0.4)] transition-all duration-300 hover:scale-110 z-50"
    >
      <MessageCircle className="w-7 h-7 text-white" strokeWidth={1.5} />
    </button>
  );
}
