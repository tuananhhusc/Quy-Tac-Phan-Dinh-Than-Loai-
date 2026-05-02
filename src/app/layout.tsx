import type { Metadata } from "next";
import { EB_Garamond, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title:
    "Quy Tắc Phân Định Thần Loại — Nghiên Cứu Chuyên Sâu Thần Học Công Giáo",
  description:
    "Báo cáo nghiên cứu chuyên sâu về Quy Tắc Phân Định Thần Loại trong Thần Học Công Giáo và Cấu Trúc Linh Đạo Dòng Tên. Phân tích toàn diện về nguồn gốc lịch sử, nền tảng Kinh Thánh, và các quy tắc phân định của Thánh I-nhã Loyola.",
  keywords: [
    "Phân Định Thần Loại",
    "Discernment of Spirits",
    "Thánh I-nhã Loyola",
    "Ignatius of Loyola",
    "Linh Thao",
    "Spiritual Exercises",
    "Dòng Tên",
    "Society of Jesus",
    "Thần Học Công Giáo",
    "Catholic Theology",
    "Ignatian Spirituality",
  ],
  authors: [{ name: "Nghiên Cứu Thần Học" }],
  openGraph: {
    title: "Quy Tắc Phân Định Thần Loại — Nghiên Cứu Chuyên Sâu",
    description:
      "Báo cáo nghiên cứu chuyên sâu về Quy Tắc Phân Định Thần Loại trong Thần Học Công Giáo và Cấu Trúc Linh Đạo Dòng Tên.",
    type: "article",
    locale: "vi_VN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quy Tắc Phân Định Thần Loại",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quy Tắc Phân Định Thần Loại — Nghiên Cứu Chuyên Sâu Thần Học Công Giáo",
    description: "Báo cáo nghiên cứu chuyên sâu về Quy Tắc Phân Định Thần Loại trong Thần Học Công Giáo và Cấu Trúc Linh Đạo Dòng Tên.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { AppProvider } from "../components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "AcademicArticle",
    headline: "Quy Tắc Phân Định Thần Loại Trong Thần Học Công Giáo Và Cấu Trúc Linh Đạo Dòng Tên",
    description: "Báo cáo nghiên cứu chuyên sâu về nguồn gốc, nền tảng Kinh Thánh và các quy tắc phân định của Thánh I-nhã Loyola.",
    author: {
      "@type": "Organization",
      name: "Nghiên Cứu Thần Học"
    },
    genre: "Theology"
  };

  return (
    <html
      lang="vi"
      className={`${ebGaramond.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
