import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border-light bg-parchment-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-gold/50 to-gold" />
          <div 
            className="text-gold-dark text-lg tracking-[0.2em] font-bold"
            style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif" }}
          >
            I H S
          </div>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-gold/50 to-gold" />
        </div>

        <div className="text-center space-y-4">
          <p
            className="text-lg md:text-xl text-burgundy/90 font-medium italic tracking-wide"
            style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif" }}
          >
            &ldquo;Ad Maiorem Dei Gloriam&rdquo;
          </p>
          <p
            className="text-xs text-text-muted"
            style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}
          >
            — Để Vinh Danh Thiên Chúa Hơn —
          </p>

          <div className="pt-4 flex items-center justify-center gap-1.5 text-xs text-text-muted">
            <span style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}>
              Nghiên cứu được thực hiện với
            </span>
            <Heart
              size={12}
              className="text-burgundy fill-burgundy"
            />
            <span style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}>
              trong truyền thống Linh Đạo I-nhã
            </span>
          </div>


        </div>
      </div>
    </footer>
  );
}
