import { MessageCircle } from 'lucide-react';

export function ChatFab() {
  return (
    <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 z-50">
      <MessageCircle className="w-7 h-7 text-white" strokeWidth={1.5} />
    </button>
  );
}
