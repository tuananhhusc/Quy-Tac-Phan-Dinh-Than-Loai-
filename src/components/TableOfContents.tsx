"use client";

import { useEffect, useState } from "react";
import { List, X } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: "h2" | "h3";
}

const tocItems: TocItem[] = [
  { id: "dan-nhap", text: "Dẫn Nhập", level: "h2" },
  { id: "nen-tang-kinh-thanh", text: "Nền Tảng Kinh Thánh Và Khung Thần Học Hệ Thống", level: "h2" },
  { id: "su-tien-hoa", text: "Từ Origen Đến Evagrius Ponticus", level: "h2" },
  { id: "khung-than-hoc-inha", text: "Khung Thần Học Của Thánh I-nhã Loyola", level: "h2" },
  { id: "quy-tac-tuan-1", text: "Bộ Quy Tắc Phân Định Tuần Thứ Nhất", level: "h2" },
  { id: "huong-di-linh-hon", text: "Xác Định Hướng Đi Căn Bản Của Linh Hồn", level: "h3" },
  { id: "an-ui-sau-kho", text: "An Ủi Và Sầu Khổ Thiêng Liêng", level: "h3" },
  { id: "phan-ung-sau-kho", text: "Nguyên Tắc Phản Ứng Trong Sầu Khổ", level: "h3" },
  { id: "tam-ly-ke-thu", text: "Tâm Lý Học Về Kẻ Thù", level: "h3" },
  { id: "quy-tac-tuan-2", text: "Bộ Quy Tắc Phân Định Tuần Thứ Hai", level: "h2" },
  { id: "nguyen-nhan-an-ui", text: "Nguyên Nhân Học Của Sự An Ủi", level: "h3" },
  { id: "lua-phinh-tinh-vi", text: "Nhận Diện Sự Lừa Phỉnh Tinh Vi", level: "h3" },
  { id: "tac-dong-du-huong", text: "Cách Thức Tác Động Và Dư Hưởng", level: "h3" },
  { id: "tien-trinh-lua-chon", text: "Tiến Trình Lựa Chọn (Election)", level: "h2" },
  { id: "tieu-chuan-nen-tang", text: "Tiêu Chuẩn Nền Tảng", level: "h3" },
  { id: "ba-thoi-ky", text: "Ba Thời Kỳ Của Sự Lựa Chọn", level: "h3" },
  { id: "huan-quyen", text: "Huấn Quyền Đương Đại: Đức Phanxicô", level: "h2" },
  { id: "ket-luan", text: "Kết Luận", level: "h2" },
  { id: "tai-lieu-tham-khao", text: "Tài Liệu Tham Khảo", level: "h2" },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const headings = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const TocContent = () => (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-widest text-text-muted"
            style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif" }}
          >
            Mục Lục
          </h2>
          <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-burgundy to-gold rounded-full" />
        </div>
        <button className="xl:hidden text-text-muted hover:text-burgundy" onClick={() => setIsOpen(false)}>
          <X size={20} />
        </button>
      </div>
      <ul className="space-y-0.5">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`toc-link ${item.level === "h3" ? "toc-link-h3" : ""} ${
                activeId === item.id ? "active" : ""
              }`}
              style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      {/* Desktop TOC */}
      <nav className="toc-sidebar hidden xl:block w-64 flex-shrink-0 sticky top-24 max-h-[calc(100vh-8rem)]" aria-label="Mục lục">
        <TocContent />
      </nav>

      {/* Mobile Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="xl:hidden fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-parchment-dark border border-gold/40 text-burgundy shadow-xl transition-all duration-300 hover:bg-gold-muted active:scale-95"
        aria-label="Mở mục lục"
      >
        <List size={22} />
      </button>

      {/* Mobile Drawer */}
      <div className={`xl:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute bottom-0 left-0 right-0 top-auto sm:top-0 sm:right-auto sm:w-80 bg-parchment border-t sm:border-r border-gold/30 shadow-2xl p-6 transition-transform duration-300 max-h-[85vh] sm:max-h-full overflow-y-auto ${isOpen ? 'translate-y-0 sm:translate-x-0' : 'translate-y-full sm:-translate-x-full sm:translate-y-0'}`}>
          <div className="w-12 h-1 bg-gold/30 rounded-full mx-auto mb-4 sm:hidden" />
          <TocContent />
        </div>
      </div>
    </>
  );
}
