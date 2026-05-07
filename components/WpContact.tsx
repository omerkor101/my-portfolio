"use client";

export default function WpContact() {

    return (
        <a
            href="https://wa.me/905050762193"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group"
        >
            <span className="text-sm font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
                Merhaba Ömer, bir projem var!
            </span>
            <span className="text-xl">💬</span>
        </a>
    );
}