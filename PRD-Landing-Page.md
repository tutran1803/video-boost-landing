# Product Requirements Document (PRD)
## Landing Page Tuyển Dụng Video CV

### 1. OVERVIEW
Trang landing page hướng dẫn người dùng tạo video CV để tăng cơ hội ứng tuyển việc làm. Trang web tập trung vào việc giải thích lợi ích của video CV và hướng dẫn chi tiết cách thực hiện.

---

## 2. SECTIONS BREAKDOWN

### 2.1 HERO SECTION
**Mục đích:** Thu hút người dùng và truyền tải value proposition chính

**Components:**
- **Hero Image:** Ảnh chuyên nghiệp về việc tạo video CV
- **Main Headline:** "Tăng cơ hội ứng tuyển x2 với video 30s"
- **Sub-headline:** "CÓ GÌ HẤP DẪN?"
- **Value Props Grid:** 3 lợi ích chính
  - Hồ sơ nổi bật (icon: Files)
  - Được ưu tiên xem trước (icon: TrendingUp)  
  - Được đánh giá cao (icon: UserCheck)
- **CTA Buttons:**
  - Primary: "Thử tạo video nhé" (variant: hero)
  - Secondary: "Ứng tuyển ngay" (variant: outline)
- **Trust Message:** Thông báo bảo mật video

**Layout:**
- Desktop: Grid 3 cột cho value props
- Mobile: Stack vertical, từng value prop trong card riêng
- Responsive với padding và spacing khác nhau

**Styling:**
- Background: Gradient from background to secondary
- Cards có border và background white/50
- Primary color cho highlights

---

### 2.2 VIDEO TEMPLATES SECTION
**Mục đích:** Cung cấp inspiration và social proof thông qua video examples

**Components:**
- **Section Header:** "Cảm hứng từ những video CV xuất sắc"
- **Video Cards:** 3 templates
  - Nhân viên kinh doanh (có video thật)
  - Chăm sóc khách hàng (placeholder image)
  - Telesales (placeholder image)
- **Video Player:** Embedded Google Drive video với autoplay
- **Success Stats:** Metrics cho từng template
  - Số NTD liên hệ
  - Thời gian có việc
  - Mức lương đạt được
- **Bottom CTA:** "Bắt đầu tạo video ngay"

**Interactions:**
- Click vào image → play video trong iframe
- Video tự động play với autoplay=1
- Mobile: Carousel với dots navigation

**Technical:**
- `playingVideo` state để track video đang play
- Embla carousel cho mobile version
- Google Drive embed URLs

---

### 2.3 STEPS & TIPS SECTION  
**Mục đích:** Hướng dẫn chi tiết cách thực hiện

**Components:**
- **Tab Navigation:** 2 tabs
  - "Các bước thực hiện" 
  - "Mẹo quay video"
- **Steps Content:** 4 bước chính
  - Bước 1: Nhấn vào phần ứng tuyển
  - Bước 2: Chọn vào mục quay video
  - Bước 3: Quay video theo hướng dẫn
  - Bước 4: Gửi video ứng tuyển
- **Tips Content:** 3 categories
  - Ánh sáng (Sun icon)
  - Góc quay (Camera icon)
  - Kỹ thuật (Zap icon)

**Layout:**
- Desktop: Grid layout (4 cols for steps, 3 cols for tips)
- Mobile: Carousel với dots navigation
- Each card có image/icon + title + description

**Data Structure:**
```javascript
stepsData = [
  {
    title: string,
    description: string, 
    imageUrl: string
  }
]

tipsData = [
  {
    title: string,
    icon: LucideIcon,
    tips: string[]
  }
]
```

---

### 2.4 JOBS SECTION
**Mục đích:** Hiển thị cơ hội việc làm từ đối tác

**Components:**
- **Section Header:** "Những công việc phù hợp với bạn"
- **Job Cards:** 3 job listings
  - Partner badge "🔥 Đối Tác"
  - Company logo
  - Job title
  - Company name
  - Salary range
  - Location
  - Time posted
  - Contact count
- **Bottom CTA:** "Xem tất cả việc làm đối tác"

**Interactions:**
- Click vào job card → mở link external trong tab mới
- Hover effects cho cards

**Data:**
- Static data với real job listings
- External links tới vieclamtot.com

---

### 2.5 SUPPORT SECTION
**Mục đích:** Cung cấp hỗ trợ và contact

**Components:**
- **Support Image:** Professional job seeker photo
- **Heading:** "Bạn có thắc mắc?"
- **Description:** Thông tin về hỗ trợ
- **CTA Button:** "Liên hệ Zalo Việc Làm Tốt"

**Layout:**
- Desktop: Horizontal layout với image bên trái
- Mobile: Vertical stack
- Blue background (#blue-50)

---

## 3. TECHNICAL SPECIFICATIONS

### 3.1 STATE MANAGEMENT
```javascript
- playingVideo: number | null
- selectedStepIndex: number
- selectedTipIndex: number  
- selectedVideoIndex: number
```

### 3.2 CAROUSEL IMPLEMENTATION
- **Library:** Embla Carousel React
- **Configuration:**
  - align: 'start'
  - containScroll: 'trimSnaps'
  - dragFree: true/false (varies by section)
- **Navigation:** Dots indicators với active states

### 3.3 RESPONSIVE DESIGN
- **Breakpoints:** md (768px+)
- **Mobile-first approach**
- **Components:**
  - Desktop: Grid layouts
  - Mobile: Carousel với horizontal scroll

### 3.4 STYLING SYSTEM
- **Framework:** Tailwind CSS
- **Design tokens:** Semantic colors từ design system
- **Components:** shadcn/ui components
- **Cards:** Consistent shadow và hover effects

---

## 4. USER INTERACTIONS

### 4.1 Primary User Flow
1. Land on hero section → understand value prop
2. View video examples → get inspired
3. Learn steps/tips → understand process
4. See job opportunities → get motivated
5. Contact support if needed

### 4.2 Interactive Elements
- **Video playback:** Click to play, autoplay enabled
- **Carousel navigation:** Touch/drag + dots
- **External links:** Job applications, contact
- **Tab switching:** Steps vs Tips content

---

## 5. PERFORMANCE CONSIDERATIONS

### 5.1 Assets
- **Images:** Optimized với proper alt tags
- **Videos:** Lazy load, Google Drive embed
- **Icons:** Lucide React (tree-shakeable)

### 5.2 Loading
- **Hero image:** Above fold, prioritize loading
- **Video iframe:** Load on demand
- **Job images:** External CDN links

---

## 6. ACCESSIBILITY

### 6.1 ARIA Labels
- Carousel regions với proper roles
- Screen reader text cho navigation
- Alt text cho tất cả images

### 6.2 Keyboard Navigation
- Tab navigation support
- Focus indicators
- Accessible buttons

---

## 7. ANALYTICS & TRACKING

### 7.1 Key Metrics
- Video play rates
- CTA click rates  
- Job application conversions
- Support contact rates

### 7.2 Events to Track
- Video plays by template
- Tab switches (steps vs tips)
- External link clicks
- Carousel interactions

---

## 8. CONTENT STRATEGY

### 8.1 Messaging Hierarchy
1. **Primary:** Tăng cơ hội x2 với video 30s
2. **Secondary:** 3 lợi ích chính 
3. **Supporting:** Examples, steps, tips
4. **Action:** Multiple CTAs throughout

### 8.2 Social Proof Elements
- Video examples với success metrics
- Real job listings từ partners
- Specific numbers (6 NTD liên hệ, 24H có việc)

---

## 9. FUTURE ENHANCEMENTS

### 9.1 Potential Features
- Video upload functionality
- User testimonials section
- Blog/resources section
- Multi-language support

### 9.2 A/B Testing Opportunities
- CTA button copy và colors
- Video thumbnail designs
- Value proposition messaging
- Jobs section layout