# Quy Tắc Phân Định Thần Loại — Nghiên Cứu Chuyên Sâu Thần Học

Báo cáo nghiên cứu thần học chuyên sâu về **Quy Tắc Phân Định Thần Loại trong Thần Học Công Giáo và Cấu Trúc Linh Đạo Dòng Tên**. Ứng dụng này được phát triển như một nền tảng đọc học thuật trực tuyến cao cấp, tích hợp các công cụ hỗ trợ đọc thông minh, tối ưu trải nghiệm người dùng trên mọi thiết bị.

---

## 🌟 Tính Năng Nổi Bật

### 1. Trải Nghiệm Đọc Học Thuật Tối Ưu
- **Hệ thống điều khiển giao diện**: Tùy chỉnh kích thước chữ (`A- / A+`), chế độ đọc chống mỏi mắt (`Light / Sepia / Dark`), và **Chế độ tập trung (Focus Mode)** giúp ẩn đi các thanh điều hướng để tập trung hoàn toàn vào nội dung.
- **Mục lục Động (Smart TOC)**: Theo dõi tiến trình đọc theo thời gian thực (Scrollspy) và hỗ trợ thanh trượt ngăn kéo (Mobile Drawer) mượt mà trên di động.
- **Hộp thoại Chú thích Thông minh (Interactive Footnotes)**: Xem thông tin trích dẫn/tài liệu tham khảo ngay tại chỗ bằng tính năng hover trên máy tính và trượt lên dạng **Bottom Sheet** trên di động.

### 2. Công Cụ Phản Tỉnh Thiêng Liêng (Ignatian Self-Reflection Tool)
- Bài trắc nghiệm tự vấn nội tâm trực quan giúp độc giả nhận diện trạng thái tâm hồn hiện tại (**An Ủi** hoặc **Sầu Khổ**) theo tinh thần Linh Thao của Thánh I-nhã Loyola.

### 3. Tối Ưu Hóa Kỹ Thuật (SEO & Performance)
- **Dữ liệu cấu trúc (JSON-LD Schema)**: Sử dụng cấu trúc `AcademicArticle` giúp các máy tìm kiếm (Google Scholar, Google Search) hiểu rõ cấu trúc bài nghiên cứu.
- **OpenGraph & Twitter Cards**: Tối ưu hiển thị ảnh bìa, tiêu đề và mô tả chi tiết khi chia sẻ link lên các mạng xã hội.
- **Khóa tràn lề ngang**: Đảm bảo không bị layout shift hay khoảng trắng thừa trên các thiết bị di động nhỏ nhất.

---

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server-Side Rendering)
- **Styling**: Tailwind CSS v4 & CSS Variables cho Custom Themes
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API & LocalStorage Persistence

---

## 🚀 Hướng Dẫn Cài Đặt Và Sử Dụng

### 1. Cài đặt các thư viện phụ thuộc:
```bash
npm install
```

### 2. Chạy môi trường phát triển (Development):
```bash
npm run dev
```
Truy cập ứng dụng tại [http://localhost:3000](http://localhost:3000).

### 3. Build sản phẩm (Production):
```bash
npm run build
```

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
├── src
│   ├── app
│   │   ├── globals.css      # Các biến CSS và cấu hình Theme
│   │   ├── layout.tsx       # Metadata, Fonts, SEO & App Providers
│   │   └── page.tsx         # Trang chính (Hero Section & Nội dung bài viết)
│   ├── components
│   │   ├── Header.tsx       # Thanh điều hướng và công cụ Settings
│   │   ├── TableOfContents.tsx  # Mục lục Desktop & Mobile Drawer
│   │   ├── ArticleHelpers.tsx   # Tiện ích chú thích popup & divider
│   │   ├── ReflectionTool.tsx   # Công cụ trắc nghiệm phản tỉnh
│   │   └── ArticlePart*.tsx # Các phần nội dung nghiên cứu chi tiết
│   └── data
│       └── references.ts    # Dữ liệu trích dẫn tài liệu tham khảo
```

---

## 📄 Bản Quyền & Giấy Phép

Dự án này được thiết kế nhằm phục vụ mục đích nghiên cứu học thuật, giáo dục thần học Công giáo. Mọi chia sẻ vui lòng ghi rõ nguồn trích dẫn.
