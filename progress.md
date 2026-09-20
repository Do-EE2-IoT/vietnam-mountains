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
- Đã bỏ phần nguồn tham khảo trực tiếp và quote/review placeholder khỏi explore tab để UI gọn hơn.
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

## Cập nhật màu chủ đạo và hero typography

- Đã đổi màu nền chủ đạo theo yêu cầu sang `#9C2007`.
- Đã cập nhật các biến màu liên quan:
  - `--bg-dark: #9C2007`
  - `--bg-green: #B43B14`
  - `--surface: #7F260F`
  - `--text-muted: #F0D9C8`
- Đã đổi overlay hero/explore tab/closing/footer/mobile menu theo tone đỏ nâu mới.
- Đã sửa hero headline để không ép uppercase quá lớn.
- Đã chuyển câu “5 đỉnh núi...” thành quote:
  - “5 đỉnh núi, 5 tính cách, 1 hành trình chạm mây.”
- Đã style quote bằng font heading, border accent và line-height chặt hơn để trình bày đẹp hơn.
- Đã kiểm tra lại:
  - `node --check js/main.js`
  - `node --check js/analytics.js`
  - local server mới trả HTTP 200 tại `http://127.0.0.1:8000/`

## Cập nhật phân tách section

- Giữ màu nền chủ đạo `#9C2007`.
- Đã thêm các màu band phụ cùng tone đỏ nâu để các section không bị hòa thành một mảng:
  - `--band-a`
  - `--band-b`
  - `--band-c`
  - `--band-d`
- Đã tăng độ rõ của separator line bằng `--section-line`.
- Đã thêm đường phân tách gradient ở đầu các section/story/closing.
- Đã làm card, data-list, quiz fieldset và altitude chart nổi hơn bằng background sáng hơn, border rõ hơn và shadow nhẹ.

## Cập nhật hiển thị đường dẫn ảnh

- Đã thêm label đường dẫn ảnh trực tiếp trên các vùng ảnh chính:
  - Hero: `assets/images/hero/hero.jpg`
  - Fansipan story: `assets/images/fansipan/fansipan-01.jpg`
  - Yên Tử story: `assets/images/yen-tu/yen-tu-01.jpg`
  - Tà Chì Nhù story: `assets/images/ta-chi-nhu/ta-chi-nhu-01.jpg`
  - Ky Quan San story: `assets/images/ky-quan-san/ky-quan-san-01.jpg`
  - Lảo Thẩn story: `assets/images/lao-than/lao-than-01.jpg`
  - Closing: `assets/images/fansipan/fansipan-03.jpg`
- Các ảnh chi tiết trong explore tab vẫn giữ caption đường dẫn riêng.
- Đã thêm CSS `.image-path` và figcaption overlay để nhìn rõ đường dẫn ảnh mà không phá layout.
- Đã cập nhật Fansipan story sang ảnh JPG thật: `assets/images/fansipan/fansipan-01.jpg`.
- Đã cập nhật các ảnh section chính sang JPG khi đã có file thật:
  - `assets/images/yen-tu/yen-tu-01.jpg`
  - `assets/images/ta-chi-nhu/ta-chi-nhu-01.jpg`
  - `assets/images/ky-quan-san/ky-quan-san-01.jpg`
  - `assets/images/lao-than/lao-than-01.jpg`
- Các ảnh chưa có JPG tương ứng vẫn giữ WebP placeholder để tránh vỡ giao diện.
- Đã cập nhật ảnh closing sang JPG thật: `assets/images/fansipan/fansipan-03.jpg`.

## Cập nhật video Fansipan

- Đã nhúng video Fansipan vào explore tab:
  - `assets/videos/fansipan.mp4`
- Video slot vẫn hiển thị rõ đường dẫn `assets/videos/fansipan.mp4` trong UI để dễ biết file đang dùng.
- Video dùng `muted`, `loop`, `playsinline`, `controls`, `preload="metadata"`.

## Bổ sung nội dung từ `info.md`

- Đã đọc và chọn lọc nội dung từ `info.md` để bổ sung vào các explore tab.
- Fansipan: thêm fact độ cao đo lại 3.147,3 m, hệ sinh thái Hoàng Liên, khí hậu núi cao, nguồn gốc tên Hủa Xi Pan và câu chuyện từ trekking sang cáp treo.
- Yên Tử: thêm câu chuyện Trần Nhân Tông, Thiền phái Trúc Lâm, di sản UNESCO 2025, quần thể di tích liên vùng và hành trình hành hương qua rừng/chùa/tháp.
- Tà Chì Nhù: thêm “đại dương trên mây”, hoa Chi Pâu nghĩa “không biết”, cung trekking khó, nắng gió, đàn ngựa và nhiều tên gọi địa phương.
- Ky Quan San: thêm tên Bạch Mộc Lương Tử, top núi cao Việt Nam, Núi Muối, mùa đông băng giá, hai hướng tiếp cận Lào Cai/Lai Châu.
- Lảo Thẩn: thêm “nóc nhà Y Tý”, săn mây/bình minh, cung phù hợp người mới hơn, hoa đỗ quyên, văn hóa Y Tý/Hà Nhì và ghi chú độ cao dao động theo nguồn.

## Cập nhật typography chữ nhỏ

- Đã tăng font-size mặc định của body từ 16px lên 17px.
- Đã tăng line-height, font-weight và độ sáng chữ phụ để nội dung nhỏ dễ đọc hơn.
- Đã làm đẹp typography cho:
  - paragraph trong explore tab
  - highlight list
  - data-list
  - selector card
  - intro metrics
  - quiz result
  - about/closing text
- Giữ caption đường dẫn ảnh ở dạng monospace nhỏ vì đây là thông tin kỹ thuật để thay file.
- Đã giảm kích thước headline lớn trong explore tab để ít bị xuống dòng hơn.
- Đã bỏ dấu chấm cuối khỏi các headline explore tab vì đây là đầu đề mục.

## Cập nhật hành vi video khi quay lại

- Khi đóng explore tab bằng nút quay lại, browser Back hoặc ESC, video trong tab sẽ tự `pause()`.
- Video cũng được reset `currentTime = 0` để lần mở sau phát lại từ đầu.
- Khi chuyển từ explore tab này sang tab khác, video ở tab cũ cũng tự dừng và về đầu.

## Cập nhật video Yên Tử

- Đã nhúng video Yên Tử vào explore tab:
  - `assets/videos/yen-tu.mp4`
- Video slot vẫn hiển thị rõ đường dẫn `assets/videos/yen-tu.mp4` trong UI.
- Video dùng cùng cơ chế reset khi back/đóng tab như Fansipan.

## Cập nhật ảnh hero

- Đã đổi ảnh hero sang JPG thật:
  - `assets/images/hero/hero.jpg`
- Đã cập nhật `og:image`, ảnh hero trong HTML và label đường dẫn trên hero.
- Đã cập nhật background fallback của video slot sang `assets/images/hero/hero.jpg`.

## Cập nhật heading bị gãy dòng xấu

- Đã thêm class `.section-title--compact` cho các tiêu đề ngắn:
  - “Bạn đang tìm kiếm điều gì?”
  - “5 đỉnh núi — 5 độ cao”
- Trên desktop/tablet, tiêu đề compact giữ trên một dòng để tránh bị cắt cụt chữ cuối.
- Trên mobile, tiêu đề được phép xuống dòng tự nhiên với cỡ chữ nhỏ hơn để không tràn ngang.
- Đã tăng `max-width` của `.section-heading` từ 720px lên 900px.

## Nâng cấp Altitude Journey

- Đã thay chart cột/card chữ bằng mô hình dãy núi trực quan.
- Mỗi độ cao là một silhouette ngọn núi bằng CSS `clip-path`, cao/thấp theo dữ liệu thực tế.
- Chữ trong khu vực này được giảm xuống còn nhãn nhỏ: tên núi và số mét trên đỉnh.
- Số mét vẫn count-up từ 0 khi section vào viewport.
- Hover vào núi có hiệu ứng nâng nhẹ và highlight.
- Animation dùng CSS + JavaScript thuần, không thêm thư viện.
- Responsive mobile cho phép cuộn ngang nhẹ để giữ hình núi không bị bóp méo.

## Cập nhật ảnh JPG và video thật

- Đã rà soát các file JPG/MP4 mới trong `assets/images` và `assets/videos`.
- Đã thay toàn bộ ảnh chi tiết trong explore tab từ WebP sang JPG thật:
  - `assets/images/fansipan/fansipan-02.jpg`
  - `assets/images/yen-tu/yen-tu-02.jpg`
  - `assets/images/ta-chi-nhu/ta-chi-nhu-02.jpg`
  - `assets/images/ky-quan-san/ky-quan-san-02.jpg`
  - `assets/images/lao-than/lao-than-02.jpg`
- Đã nhúng đủ video thật cho 5 explore tab:
  - `assets/videos/fansipan.mp4`
  - `assets/videos/yen-tu.mp4`
  - `assets/videos/ta-chi-nhu.mp4`
  - `assets/videos/ky-quan-san.mp4`
  - `assets/videos/lao-than.mp4`
- Không còn đường dẫn video placeholder dạng `*-highlight.mp4` trong `index.html`.
- Đã kiểm tra `node --check js/main.js`, `node --check js/analytics.js` và kiểm tra các asset HTML/CSS đang tham chiếu đều tồn tại.
