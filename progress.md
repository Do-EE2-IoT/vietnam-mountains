# Progress — Vietnam Above The Clouds

## 2026-09-12

- Đã đọc và sử dụng `readme.md` làm đặc tả chính.
- Đã bổ sung yêu cầu `About Me` vào README ở lượt trước.
- Đã tạo cấu trúc thư mục static:
  - `index.html`
  - `css/style.css`
  - `css/responsive.css`
  - `css/animations.css`
  - `js/main.js`
  - `js/analytics.js`
  - `assets/images/...`
  - `assets/icons/favicon.svg`
- Đã dựng website single-page bằng HTML/CSS/JavaScript thuần, không framework, không build step.
- Đã triển khai các section chính:
  - Navigation sticky + mobile menu
  - Hero Fansipan
  - Introduction
  - Mountain Selector
  - 5 Mountain Stories
  - Altitude Comparison
  - Find Your Mountain Quiz
  - Explore Detail Tabs
  - Closing Journey
  - About Me
  - Footer
- Đã tạo placeholder WebP nội bộ đúng tên file để thay ảnh thật sau.
- Đã thêm GA4 placeholder `G-XXXXXXXXXX` và helper custom events trong `js/analytics.js`.
- Đã thêm accessibility cơ bản: semantic HTML, alt text, focus visible, button/link đúng vai trò, reduced motion.
- Đã sửa selector mặc định để lựa chọn “Biển mây” chỉ highlight Tà Chì Nhù và Lảo Thẩn.
- Đã sửa `analytics.js` để custom events tự dùng `window.gtag`; sau này chỉ cần thay Measurement ID trong HTML.
- Đã chạy kiểm tra:
  - `node --check js/main.js`
  - `node --check js/analytics.js`
  - kiểm tra đủ 16 ảnh placeholder
  - kiểm tra các asset trong HTML đều tồn tại
  - chạy local server bằng `python3 -m http.server 8000`
  - kiểm tra HTTP 200 cho trang và ảnh hero
  - server log ghi nhận HTML, CSS, JS, favicon và ảnh chính được tải thành công
- Chưa thể kiểm tra bằng browser tự động vì môi trường không có Chromium/Firefox/Playwright.
- Local server đang chạy tại `http://127.0.0.1:8000/`.

## Cập nhật theo feedback nút “Khám phá”

- Đã bổ sung vào `readme.md` yêu cầu: nút **Khám phá** phải mở vùng chi tiết, không được chỉ trỏ về chính section.
- Đã thêm detail panel cho từng núi trong `index.html`.
- Mỗi detail panel hiện có:
  - phần “Vì sao đáng đến?”
  - mô tả trải nghiệm đặc trưng
  - 3 bullet thông tin nổi bật
  - ảnh chi tiết / vị trí ảnh
  - slot video 10-30 giây để thêm sau
  - placeholder quote/review, kèm ghi chú chỉ thêm khi có nguồn xác minh
- Đã thêm CSS cho detail panel và responsive mobile.
- Đã thêm JS để nút “Khám phá” mở/đóng panel, cập nhật `aria-expanded` và scroll tới vùng chi tiết.
- Đã kiểm tra lại:
  - `node --check js/main.js`
  - `node --check js/analytics.js`
  - local server vẫn trả HTTP 200
  - các asset thật trong `src/href` đều tồn tại
- Các đường dẫn `assets/videos/...mp4` hiện chỉ là slot nội dung để thêm video sau, chưa phải file bắt buộc ở bản này.

## Cập nhật theo feedback bỏ Gallery và nâng cấp tab Khám phá

- Đã bỏ section **Gallery / Moments Above The Clouds** khỏi navigation và `index.html`.
- Đã chuyển nút **Khám phá** sang mở một explore tab riêng dạng overlay toàn màn hình.
- Explore tab có hiệu ứng chuyển cảnh nhẹ, nút **Quay lại hành trình**, hỗ trợ browser Back và ESC.
- Vùng video trong explore tab đã được làm lớn và nổi bật, không còn cơ chế phóng to / thu nhỏ.
- Đã tra thông tin và mở rộng nội dung đặc biệt cho từng núi:
  - Fansipan: Nóc nhà Đông Dương, Hoàng Liên Sơn, cáp treo Fansipan Legend.
  - Yên Tử: Chùa Đồng 1.068 m, Thiền phái Trúc Lâm, di sản UNESCO 2025.
  - Tà Chì Nhù: đỉnh 2.979 m, nóc nhà Trạm Tấu/Yên Bái, hoa Chi Pâu, mùa săn mây.
  - Ky Quan San: 3.046 m, Bạch Mộc Lương Tử, bình minh Núi Muối, cung trekking thử thách.
  - Lảo Thẩn: nóc nhà Y Tý, khoảng 2.860-2.862 m, cung vừa sức cho săn mây/camping.
- Đã thêm nguồn tham khảo trực tiếp trong từng explore tab.
- Đã cập nhật GA helper từ `gallery_open` sang `explore_detail_open`.
- Đã kiểm tra lại sau thay đổi:
  - `node --check js/main.js`
  - `node --check js/analytics.js`
  - không còn `Gallery`, `gallery`, `lightbox`, `MOMENTS`, `gallery_open` trong UI code
  - các asset thật trong `src/href` đều tồn tại
  - local server vẫn trả HTTP 200

## Cập nhật màu tổng thể

- Đã đổi palette từ xanh đen tối sang xanh đồi núi sáng hơn:
  - nền chính `#153327`
  - nền xanh `#1F4A35`
  - surface `#2C5A43`
  - text phụ sáng hơn `#D4DED2`
  - accent gold sáng hơn `#F0C96C`
- Đã giảm độ tối overlay hero/closing/explore tab để ảnh và nội dung thoáng hơn.
- Đã làm card, quiz, altitude chart và mobile menu sáng hơn.
- Đã cập nhật lại mục màu trong `readme.md`.
