import Header from "../components/Header";
import Footer from "../components/Footer";
import ReadingProgressBar from "../components/ReadingProgressBar";
import TableOfContents from "../components/TableOfContents";
import ArticlePartOne from "../components/ArticlePartOne";
import ArticlePartTwo from "../components/ArticlePartTwo";
import ArticlePartThree from "../components/ArticlePartThree";
import ArticlePartFour from "../components/ArticlePartFour";
import ReflectionTool from "../components/ReflectionTool";
import { Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      <ReadingProgressBar />
      <Header />

      <main className="flex-1">
        {/* Hero / Title Block */}
        <div className="relative overflow-hidden bg-parchment pt-12 pb-10 sm:pt-16 sm:pb-14">
          {/* Subtle Sunburst Radial Gradient */}
          <div className="absolute inset-0 pointer-events-none" 
               style={{ background: "radial-gradient(circle at top center, rgba(197, 179, 88, 0.1) 0%, transparent 60%)" }} 
          />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
            {/* Jesuit AMDG Heading */}
            <div 
              className="text-burgundy/70 font-semibold tracking-[0.4em] text-sm mb-6 uppercase"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif" }}
            >
              A. M. D. G.
            </div>

            {/* Small label */}
            <div className="mb-6 inline-flex flex-wrap justify-center items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 bg-parchment/80 shadow-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-burgundy" />
                <span
                  className="text-xs font-medium tracking-wider uppercase text-text-muted"
                  style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}
                >
                  Báo Cáo Nghiên Cứu Chuyên Sâu
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border-light px-3 py-1.5 bg-parchment/50">
                <Clock size={12} className="text-gold-dark" />
                <span
                  className="text-[11px] font-medium uppercase text-text-muted"
                  style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}
                >
                  ~ 25 phút đọc
                </span>
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-burgundy mb-4"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif" }}
            >
              Quy Tắc Phân Định Thần Loại Trong Thần Học Công Giáo Và Cấu Trúc Linh Đạo Dòng Tên
            </h1>

            {/* Ornamental line - IHS Monogram */}
            <div className="flex items-center justify-center gap-4 mt-8 mb-6">
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-gold/50 to-gold" />
              <div 
                className="text-gold-dark text-xl sm:text-2xl tracking-[0.15em] font-bold flex items-center justify-center relative"
                style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif" }}
              >
                {/* Subtle glowing sunburst behind IHS */}
                <div className="absolute w-12 h-12 bg-gold/20 blur-xl rounded-full"></div>
                I H S
              </div>
              <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-gold/50 to-gold" />
            </div>

            {/* Subtitle */}
            <p
              className="text-sm text-text-muted italic max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-serif), 'EB Garamond', serif" }}
            >
              Phân tích toàn diện về nguồn gốc lịch sử, nền tảng Kinh Thánh,
              cấu trúc quy tắc phân định của Thánh I-nhã Loyola, và thực hành
              trong huấn quyền Giáo hội đương đại.
            </p>
          </div>
        </div>

        {/* Content Area: TOC + Article */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex gap-8 lg:gap-12 relative items-start">
            <TableOfContents />

            {/* Article */}
            <article className="article-prose mx-auto max-w-3xl min-w-0 flex-1">
              <ArticlePartOne />
              <ArticlePartTwo />
              <ArticlePartThree />
              
              {/* Tool phản tỉnh trước phần kết luận/tài liệu tham khảo để không ngắt dòng quá muộn */}
              <ReflectionTool />

              <ArticlePartFour />
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
