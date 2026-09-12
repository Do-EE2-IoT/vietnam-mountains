# Checklist — Vietnam Above The Clouds

## UI

- [x] Hero có ảnh nền, overlay và CTA rõ.
- [x] Typography dùng Playfair Display + Be Vietnam Pro.
- [x] Màu sắc bám theo README.
- [x] Palette đã chuyển sang xanh đồi núi sáng hơn, bớt cảm giác tối.
- [x] Không dùng framework frontend.
- [x] Có responsive CSS cho desktop, tablet, mobile.
- [x] Có CSS chặn horizontal overflow ở cấp `body`.
- [ ] Kiểm tra visual thực tế trên desktop/mobile bằng browser thủ công.

## Content

- [x] Có đủ 5 núi: Fansipan, Yên Tử, Tà Chì Nhù, Ky Quan San, Lảo Thẩn.
- [x] Mỗi núi có độ cao, vị trí, mô tả, độ khó, mùa đẹp, điểm nhấn.
- [x] Nút “Khám phá” mở explore tab riêng giải thích vì sao từng núi đáng đến.
- [x] Mỗi vùng chi tiết có chỗ đặt ảnh nổi bật.
- [x] Mỗi vùng chi tiết có slot ghi vị trí video 10-30 giây để bổ sung sau.
- [x] Vùng video trong explore tab đủ rộng và nổi bật.
- [x] Nội dung khám phá đã mở rộng bằng thông tin tra cứu từ nguồn tham khảo.
- [x] Có placeholder quote/review và ghi rõ chỉ thêm khi có nguồn xác minh.
- [x] Có About Me: Nguyễn Văn Độ, Linux Software Developer.
- [x] Có vùng `**************` để tự điền thông tin sau.
- [x] Có vùng “Vì sao tôi chọn chủ đề này”.
- [ ] Thay ảnh placeholder bằng ảnh thật nếu muốn nộp bản polish.

## UX / Interaction

- [x] Sticky navigation.
- [x] Mobile menu.
- [x] Smooth scroll.
- [x] Active section indicator.
- [x] Scroll progress.
- [x] Mountain Selector.
- [x] Explore tab cho nút “Khám phá”.
- [x] Nút quay lại trong explore tab.
- [x] Browser Back đóng explore tab.
- [x] Altitude Comparison animation.
- [x] Find Your Mountain quiz.
- [x] Đã bỏ section Gallery / Moments Above The Clouds.
- [x] ESC đóng menu/explore tab.
- [x] Hover/focus state.
- [x] Reduced motion.
- [x] Kiểm tra cú pháp JS bằng `node --check`.
- [ ] Kiểm tra runtime tương tác bằng browser thủ công.

## Analytics

- [x] Có GA4 base code placeholder.
- [x] Có file `js/analytics.js`.
- [x] Website không phụ thuộc GA thật để chạy.
- [x] Có helper event `mountain_view`.
- [x] Có helper event `quiz_start`.
- [x] Có helper event `quiz_result`.
- [x] Có helper event `explore_detail_open`.
- [x] Có helper event `cta_click`.
- [x] Có scroll depth tracking 25/50/75/90.
- [ ] Thay `G-XXXXXXXXXX` bằng Measurement ID thật khi có GA4.

## Performance / Assets

- [x] Không dùng video background.
- [x] Không hotlink ảnh.
- [x] Ảnh dưới màn hình có `loading="lazy"`.
- [x] Hero image có `fetchpriority="high"`.
- [x] Có placeholder WebP đúng tên file trong README.
- [ ] Tối ưu lại ảnh thật sau khi thay placeholder.

## Verification

- [x] Kiểm tra danh sách file bằng `rg --files`.
- [x] Kiểm tra JS bằng `node --check js/main.js` và `node --check js/analytics.js`.
- [x] Kiểm tra không thiếu asset được tham chiếu trong `index.html`.
- [x] Kiểm tra UI code không còn `Gallery`, `gallery`, `lightbox`, `MOMENTS`, `gallery_open`.
- [x] Chạy local server bằng `python3 -m http.server 8000`.
- [x] Kiểm tra HTTP 200 cho `/index.html`.
- [x] Kiểm tra HTTP 200 cho ảnh hero WebP.
- [x] Server log ghi nhận tải thành công HTML, CSS, JS, favicon và các ảnh chính.
- [x] Kiểm tra kích thước ảnh placeholder bằng `ffprobe`.
- [ ] Chưa kiểm tra bằng browser tự động vì môi trường không có Chromium/Firefox/Playwright.
