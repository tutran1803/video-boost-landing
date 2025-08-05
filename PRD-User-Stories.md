# Product Requirements Document (PRD)
## Video CV Landing Page - User Stories & Requirements

### PROJECT OVERVIEW
A landing page that educates job seekers about creating video CVs to improve their hiring chances and guides them through the process.

---

## EPIC 1: HERO SECTION

### User Story 1.1: Value Proposition Display
**As a** job seeker visiting the landing page  
**I want to** immediately understand the benefits of creating a video CV  
**So that** I can decide if this solution is valuable for my job search

**Acceptance Criteria:**
- [ ] Hero section displays main headline "Increase your application chances x2 with a 30-second video"
- [ ] Three key benefits are prominently displayed with icons:
  - Outstanding resume (Files icon)
  - Priority viewing (TrendingUp icon) 
  - High evaluation (UserCheck icon)
- [ ] Professional hero image showcases video CV creation
- [ ] Benefits are presented in a grid layout on desktop
- [ ] Benefits are stacked vertically in cards on mobile
- [ ] Visual hierarchy guides user attention to main message

### User Story 1.2: Call-to-Action Access
**As a** motivated job seeker  
**I want to** easily access the main actions from the hero section  
**So that** I can quickly start creating my video CV or apply for jobs

**Acceptance Criteria:**
- [ ] Primary CTA button "Try creating video now" with hero variant styling
- [ ] Secondary CTA button "Apply now" with outline variant
- [ ] Buttons are responsive (full width on mobile, auto width on desktop)
- [ ] Secondary button opens external job listings in new tab
- [ ] Trust message about video security is displayed below CTAs

### User Story 1.3: Trust & Security Assurance  
**As a** privacy-conscious job seeker  
**I want to** understand how my video data will be protected  
**So that** I feel confident sharing personal video content

**Acceptance Criteria:**
- [ ] Security message states "Your video is 100% secure"
- [ ] Explains that only verified recruiters can view videos
- [ ] Confirms no public data sharing
- [ ] Message is prominently displayed and styled for emphasis

---

## EPIC 2: VIDEO TEMPLATES SECTION

### User Story 2.1: Inspiration Through Examples
**As a** job seeker unsure about video CV content  
**I want to** see successful video CV examples  
**So that** I can understand what makes an effective video CV

**Acceptance Criteria:**
- [ ] Section header "Inspiration from outstanding video CVs" is displayed
- [ ] Three template cards are shown with different job roles:
  - Sales Representative (with actual embedded video)
  - Customer Service (with placeholder image)
  - Telesales (with placeholder image)
- [ ] Each template shows success metrics:
  - Number of recruiter contacts
  - Time to get hired
  - Salary achieved
- [ ] Templates are displayed in grid layout on desktop
- [ ] Templates use carousel with dots navigation on mobile

### User Story 2.2: Video Playback Experience
**As a** user interested in a video example  
**I want to** play the video with a single click  
**So that** I can quickly view the content without friction

**Acceptance Criteria:**
- [ ] Clicking on video thumbnail immediately starts playback
- [ ] Video plays in embedded iframe player
- [ ] Autoplay is enabled for seamless experience
- [ ] Video player supports fullscreen mode
- [ ] Player has encrypted media permissions
- [ ] Google Drive video URLs are properly formatted with autoplay parameter

### User Story 2.3: Mobile Video Browsing
**As a** mobile user browsing video templates  
**I want to** easily navigate between different examples  
**So that** I can explore all options on my device

**Acceptance Criteria:**
- [ ] Carousel shows 85% width cards with left padding
- [ ] Smooth horizontal scrolling with touch gestures
- [ ] Dots indicator shows current position
- [ ] Clicking dots navigates to specific template
- [ ] Active dot has extended width and primary color
- [ ] Inactive dots are gray and circular

---

## EPIC 3: INSTRUCTIONAL CONTENT

### User Story 3.1: Step-by-Step Guidance
**As a** first-time video CV creator  
**I want to** see clear step-by-step instructions  
**So that** I know exactly how to create and submit my video

**Acceptance Criteria:**
- [ ] Tab navigation with "Implementation Steps" and "Video Tips"
- [ ] Four clear steps with screenshots:
  - Step 1: Click on application section
  - Step 2: Select video recording option
  - Step 3: Record video following guidelines
  - Step 4: Submit video application
- [ ] Each step has title, description, and visual guide
- [ ] Steps are displayed in 4-column grid on desktop
- [ ] Steps use carousel with dots navigation on mobile
- [ ] Screenshots are from actual application interface

### User Story 3.2: Professional Video Tips
**As a** job seeker wanting to create quality videos  
**I want to** access professional filming tips  
**So that** my video CV looks polished and professional

**Acceptance Criteria:**
- [ ] Three tip categories with distinct icons:
  - Lighting (Sun icon) - natural light, avoid backlighting, use LED if dark
  - Camera Angle (Camera icon) - eye level or slightly higher, keep steady, nice background
  - Technique (Zap icon) - speak slowly and clearly, natural smile, 30-60 seconds duration
- [ ] Each category displays as card with icon, title, and bullet points
- [ ] Tips are practical and actionable
- [ ] Layout adapts to 3-column grid on desktop, carousel on mobile
- [ ] Check circle icons prefix each tip bullet point

### User Story 3.3: Content Navigation
**As a** user consuming instructional content  
**I want to** easily switch between steps and tips  
**So that** I can access the information most relevant to my current need

**Acceptance Criteria:**
- [ ] Tab interface clearly distinguishes between "Steps" and "Tips"
- [ ] Active tab has primary color styling and background
- [ ] Inactive tabs have gray text and transparent background
- [ ] Tab switching preserves scroll position where possible
- [ ] Tabs are full width on mobile for easy touch targets

---

## EPIC 4: JOB OPPORTUNITIES

### User Story 4.1: Partner Job Discovery
**As a** job seeker interested in opportunities  
**I want to** see relevant job listings from trusted partners  
**So that** I can apply to positions that accept video CVs

**Acceptance Criteria:**
- [ ] Section header "Jobs that fit you" with descriptive subtitle
- [ ] Three featured job listings with complete information:
  - Job title and description
  - Company name and logo
  - Salary range
  - Location
  - Time posted
  - Number of contacts/applications
- [ ] "🔥 Partner" badge prominently displayed on each listing
- [ ] Company logos are properly sized and displayed

### User Story 4.2: Job Application Flow
**As a** interested job candidate  
**I want to** easily apply to featured positions  
**So that** I can pursue relevant opportunities

**Acceptance Criteria:**
- [ ] Clicking any job card opens application page in new tab
- [ ] Hover effects provide visual feedback on interactive elements
- [ ] Job titles change color on hover to indicate clickability
- [ ] Links direct to actual job postings on vieclamtot.com
- [ ] "View all partner jobs" CTA links to partner job directory

---

## EPIC 5: SUPPORT & CONTACT

### User Story 5.1: Help Access
**As a** user who needs assistance  
**I want to** easily contact support  
**So that** I can get help with video CV creation or technical issues

**Acceptance Criteria:**
- [ ] Support section with "Do you have questions?" heading
- [ ] Professional image of job seeker to build trust
- [ ] Clear description of available support
- [ ] "Contact Zalo Job Search" button with blue styling
- [ ] Section uses blue background to distinguish from other areas
- [ ] Layout is horizontal on desktop, vertical stack on mobile

---

## TECHNICAL REQUIREMENTS

### TR-1: State Management
**Requirement:** Implement proper state management for interactive elements
**Acceptance Criteria:**
- [ ] `playingVideo: number | null` tracks currently playing video
- [ ] `selectedStepIndex: number` tracks active step in carousel
- [ ] `selectedTipIndex: number` tracks active tip in carousel
- [ ] `selectedVideoIndex: number` tracks active video template
- [ ] State updates properly sync with UI indicators

### TR-2: Carousel Implementation
**Requirement:** Implement smooth carousel functionality using Embla Carousel
**Acceptance Criteria:**
- [ ] Embla Carousel React library properly configured
- [ ] Configuration includes: align: 'start', containScroll: 'trimSnaps'
- [ ] Different dragFree settings per section (true for some, false for others)
- [ ] Proper event listeners for scroll position tracking
- [ ] Dots navigation synchronized with carousel position

### TR-3: Responsive Design
**Requirement:** Ensure optimal experience across all device sizes
**Acceptance Criteria:**
- [ ] Breakpoint at 768px (md) for desktop/mobile switching
- [ ] Mobile-first CSS approach
- [ ] Grid layouts on desktop transform to carousels on mobile
- [ ] Touch gestures work properly on mobile carousels
- [ ] Text sizes and spacing adjust appropriately per breakpoint

### TR-4: Performance Optimization
**Requirement:** Optimize loading and rendering performance
**Acceptance Criteria:**
- [ ] Hero image optimized and prioritized for above-the-fold loading
- [ ] Video iframes only load when needed (on click)
- [ ] Lucide React icons are tree-shakeable
- [ ] External job images use CDN for fast loading
- [ ] Proper alt text on all images for accessibility

### TR-5: External Integrations
**Requirement:** Integrate with external services and links
**Acceptance Criteria:**
- [ ] Google Drive video embeds with proper autoplay parameters
- [ ] External job links open in new tabs
- [ ] Partner job directory integration
- [ ] Secure handling of external URLs

---

## ACCESSIBILITY REQUIREMENTS

### AR-1: Screen Reader Support
**Requirement:** Ensure content is accessible to screen readers
**Acceptance Criteria:**
- [ ] All images have descriptive alt text
- [ ] Carousel regions have proper ARIA roles
- [ ] Navigation buttons include screen reader text
- [ ] Heading hierarchy is logical and sequential

### AR-2: Keyboard Navigation
**Requirement:** Support keyboard-only navigation
**Acceptance Criteria:**
- [ ] All interactive elements are focusable via Tab key
- [ ] Focus indicators are clearly visible
- [ ] Tab order follows logical reading sequence
- [ ] Carousel navigation works with keyboard inputs

---

## CONTENT REQUIREMENTS

### CR-1: Messaging Hierarchy
**Requirement:** Establish clear content priority and messaging
**Acceptance Criteria:**
- [ ] Primary message: "Increase application chances x2 with 30-second video"
- [ ] Secondary messaging: Three key benefits with supporting details
- [ ] Supporting content: Examples, instructions, and opportunities
- [ ] Multiple CTAs guide users through conversion funnel

### CR-2: Social Proof Elements
**Requirement:** Include credible social proof throughout the page
**Acceptance Criteria:**
- [ ] Video examples with specific success metrics
- [ ] Real job listings from verified partners
- [ ] Concrete numbers (6 recruiter contacts, hired in 24 hours)
- [ ] Professional imagery and branding