# Hướng dẫn sử dụng và thuyết minh website

Website: **Vietnam Above The Clouds**  
Chủ đề: **Top 5 đỉnh núi đẹp nhất Việt Nam**

---

## 1. Hướng dẫn dùng web

Website này là website tĩnh, được làm bằng HTML, CSS và JavaScript. Vì vậy sau khi chỉnh sửa nội dung hoặc thay ảnh/video, chỉ cần mở lại file `index.html` bằng trình duyệt là có thể xem kết quả.

### 1.1. Cách mở website

1. Mở thư mục dự án:

```text
/home/do30032003/training/vietnam-mountains
```

2. Mở file:

```text
index.html
```

3. Nếu chỉnh sửa xong mà chưa thấy thay đổi, bấm tải lại trang bằng `Ctrl + R`.

### 1.2. Các file quan trọng

```text
index.html          Nội dung chính của website
css/style.css       Màu sắc, bố cục, giao diện chính
css/responsive.css  Giao diện cho điện thoại/tablet
js/main.js          Tương tác: mở tab khám phá, quiz, hiệu ứng, video
js/analytics.js     Theo dõi sự kiện Google Analytics
assets/images/      Ảnh dùng trong website
assets/videos/      Video dùng trong website
```

Nếu chỉ muốn thay chữ, ảnh, video thì chủ yếu chỉnh `index.html` và thư mục `assets`.

### 1.3. Cách sửa nội dung chữ

Mở `index.html`, tìm đoạn chữ muốn sửa rồi thay trực tiếp.

Ví dụ muốn sửa phần About me, tìm:

```html
<h2>Nhập họ và tên</h2>
<p class="about__role">Người thực hiện dự án</p>
```

Sau đó thay bằng thông tin mới. Với các đoạn mô tả dài, chỉ cần sửa nội dung nằm giữa thẻ `<p>...</p>`.

Lưu ý: không xóa các dấu `<`, `>`, `</p>`, `</h2>` vì đó là cấu trúc HTML.

### 1.4. Cách thay ảnh

Các ảnh đang dùng được khai báo trong `index.html`. Có thể tìm nhanh các đường dẫn dạng:

```text
assets/images/hero/hero.jpg
assets/images/fansipan/fansipan-01.jpg
assets/images/fansipan/fansipan-02.jpg
```

Cách dễ nhất để thay ảnh:

1. Chuẩn bị ảnh mới dạng `.jpg`.
2. Đặt ảnh mới vào đúng thư mục.
3. Đổi tên ảnh mới giống hệt tên file cũ.
4. Mở lại `index.html` hoặc tải lại trang.

Ví dụ muốn thay ảnh chính của Fansipan:

```text
assets/images/fansipan/fansipan-01.jpg
```

Chỉ cần thay file ảnh mới vào đúng vị trí này và giữ nguyên tên `fansipan-01.jpg`.

Danh sách ảnh chính:

```text
assets/images/hero/hero.jpg
assets/images/hero/hero-2.jpg
assets/images/hero/hero-3.jpg
assets/images/fansipan/fansipan-01.jpg
assets/images/fansipan/fansipan-02.jpg
assets/images/fansipan/fansipan-03.jpg
assets/images/yen-tu/yen-tu-01.jpg
assets/images/yen-tu/yen-tu-02.jpg
assets/images/ta-chi-nhu/ta-chi-nhu-01.jpg
assets/images/ta-chi-nhu/ta-chi-nhu-02.jpg
assets/images/ky-quan-san/ky-quan-san-01.jpg
assets/images/ky-quan-san/ky-quan-san-02.jpg
assets/images/lao-than/lao-than-01.jpg
assets/images/lao-than/lao-than-02.jpg
```

### 1.5. Cách thay video

Video nằm trong thư mục:

```text
assets/videos/
```

Danh sách video đang dùng:

```text
assets/videos/fansipan.mp4
assets/videos/yen-tu.mp4
assets/videos/ta-chi-nhu.mp4
assets/videos/ky-quan-san.mp4
assets/videos/lao-than.mp4
```

Cách thay video giống cách thay ảnh: đặt video mới vào đúng thư mục và giữ nguyên tên file `.mp4`.

### 1.6. Cách chỉnh thông tin Google Analytics

Trong `index.html`, tìm:

```text
G-47H53EBP1N
```

Website hiện đã được gắn Measurement ID này. Nếu sau này đổi sang tài khoản Google Analytics khác, chỉ cần thay ID trên bằng Measurement ID mới.

### 1.7. Cách đưa web lên GitHub Pages miễn phí

1. Tạo repository trên GitHub.
2. Upload toàn bộ thư mục dự án lên repository.
3. Vào `Settings` → `Pages`.
4. Chọn branch `main`, folder `/root`.
5. Bấm Save.
6. GitHub sẽ cấp một đường link miễn phí để truy cập website.

Vì đây là website tĩnh nên có thể host trực tiếp bằng GitHub Pages, không cần server riêng.

---

## 2. Trả lời các luận điểm đánh giá

### 2.1. Giao diện và thiết kế web

Website không dùng Google Sites mà được tự xây dựng bằng HTML, CSS và JavaScript. Em chọn cách này để có thể kiểm soát bố cục, hiệu ứng, ảnh, video, màu sắc và các tương tác chi tiết hơn.

Quy trình thực hiện:

1. Lên ý tưởng website theo dạng storytelling: người xem đi từ phần mở đầu, khám phá từng đỉnh núi, so sánh độ cao, làm quiz và đọc phần giới thiệu người thực hiện.
2. Xác định cấu trúc trang: Hero, giới thiệu, bộ lọc trải nghiệm, 5 đỉnh núi, tab khám phá chi tiết, biểu đồ độ cao, quiz, About me và footer.
3. Dùng AI hỗ trợ sinh khung code ban đầu, sau đó tự review lại từng phần: màu sắc, bố cục, chữ bị xuống dòng, ảnh/video, nút bấm, hiệu ứng chuyển cảnh.
4. Nhiều lần chỉnh sửa theo hướng dễ nhìn hơn: đổi màu nền, tăng độ rõ giữa các section, sửa font chữ, thay ảnh thật, thêm video thật, bỏ các phần dư thừa.
5. Tổ chức asset rõ ràng trong `assets/images` và `assets/videos` để dễ thay thế sau này.

Điểm mạnh về thiết kế:

- Có hero lớn dùng ảnh thật, tạo ấn tượng ngay từ đầu.
- Mỗi đỉnh núi có bố cục riêng gồm ảnh, thông tin, nút khám phá và nội dung chi tiết.
- Phần “Khám phá” mở thành một tab riêng có hiệu ứng chuyển cảnh và nút quay lại.
- Biểu đồ độ cao được thiết kế thành hình dãy núi thay vì bảng số liệu khô.
- Website có responsive cho màn hình nhỏ.

### 2.2. Nội dung website

Nội dung website tập trung vào 5 đỉnh núi tiêu biểu của Việt Nam:

- Fansipan
- Yên Tử
- Tà Chì Nhù
- Ky Quan San
- Lảo Thẩn

Mỗi địa điểm không chỉ có tên và ảnh, mà còn có thông tin về độ cao, vị trí, phong cách trải nghiệm, mùa đẹp, độ khó và lý do đáng đến. Phần khám phá chi tiết giúp người xem hiểu mỗi ngọn núi có điểm đặc biệt riêng:

- Fansipan: biểu tượng “Nóc nhà Đông Dương”.
- Yên Tử: giá trị văn hóa, lịch sử và tâm linh.
- Tà Chì Nhù: biển mây và hoa Chi Pâu.
- Ky Quan San: cung trekking thử thách, bình minh Núi Muối.
- Lảo Thẩn: phù hợp người mới, săn mây và cắm trại.

Nội dung được viết theo hướng dễ đọc, không chỉ liệt kê thông tin mà cố gắng giải thích “vì sao nơi đó đáng đến”.

### 2.3. Tối ưu hóa trải nghiệm người dùng

Website được tối ưu để người xem không chỉ đọc mà còn tương tác:

- Thanh điều hướng giúp nhảy nhanh đến từng phần.
- Nút “Khám phá” mở nội dung chi tiết của từng núi.
- Có nút quay lại và hỗ trợ quay lại bằng browser Back.
- Khi rời khỏi tab khám phá, video tự dừng và quay về đầu.
- Ảnh và video được tổ chức trong thư mục `assets` rõ ràng để dễ thay thế.
- Quiz giúp người dùng tìm ngọn núi phù hợp với sở thích.
- Hiệu ứng reveal khi cuộn trang giúp website sinh động hơn.
- Có scroll progress để biết người dùng đang xem đến đâu.
- Layout có responsive cho điện thoại, tablet và desktop.

Điểm nổi bật là website không chỉ là trang thông tin tĩnh, mà có nhiều lớp trải nghiệm: xem ảnh, xem video, mở tab chi tiết, so sánh độ cao và làm quiz.

### 2.4. Tính sáng tạo

Website được thiết kế như một hành trình chạm mây thay vì một bài giới thiệu địa điểm thông thường.

Các yếu tố sáng tạo:

- Chọn chủ đề 5 đỉnh núi và gắn mỗi đỉnh với một “tính cách” riêng.
- Biến dữ liệu độ cao thành hình dãy núi trực quan.
- Dùng ảnh nền và video để tạo cảm giác du lịch thực tế.
- Có phần quiz để cá nhân hóa trải nghiệm người xem.
- Có explore tab riêng cho từng đỉnh, giống như mở một lớp nội dung mới.
- Kết hợp giữa nội dung du lịch, thiết kế web, tương tác và analytics.

Việc dùng AI code không thay thế quá trình làm bài, mà là công cụ hỗ trợ. Em vẫn phải đưa yêu cầu, chọn nội dung, kiểm tra giao diện, sửa từng chi tiết, thay ảnh/video thật, dọn code và chuẩn bị cách trình bày khi nộp bài.

### 2.5. Chỉ số GA

Website đã chuẩn bị sẵn phần Google Analytics 4 trong `index.html` và `js/analytics.js`.

Các chỉ số có thể theo dõi:

- Lượt xem trang.
- Độ sâu cuộn trang.
- Click vào các nút chính.
- Mở tab khám phá của từng đỉnh núi.
- Kết quả quiz người dùng chọn.
- Tương tác với từng nhóm nội dung.

Ý nghĩa khi nộp bài:

- Có thể biết phần nào của website được người xem quan tâm nhất.
- Có thể biết người dùng có cuộn hết trang không.
- Có thể biết nút nào được bấm nhiều.
- Có thể đánh giá nội dung nào hấp dẫn hơn để cải thiện website.

Website hiện đã gắn GA4 với Measurement ID `G-47H53EBP1N`. Nếu host bằng GitHub Pages, website có thể ghi nhận dữ liệu thực tế khi có người truy cập.
