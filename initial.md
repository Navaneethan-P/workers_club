# Requirements
## Summary
LANKOR Community is a premium SaaS platform for talent discovery, student profiling, and team-building. It connects students, developers, and HRs by enabling students to showcase skills, projects, and experience while allowing recruiters to discover talent. The platform features an admin approval workflow, team-up system, project verification, and real-time email notifications. Founded by Navaneethan P, it aims to be the go-to network for students to get hired and build collaborative teams.

## Use cases
- Landing & Navigation
  1) User visits landing page with hero section, founder showcase, and featured students
  2) User browses role showcase grid (Frontend, Backend, AI/ML, etc.)
  3) User toggles between dark/light mode via navbar
  4) User navigates to Browse, Community, About, or Admin sections
  5) User contacts founder via WhatsApp, Email, or LinkedIn from dedicated section

- Student Registration & Profile Building
  1) User clicks "Register Free" and enters phone/email for OTP login
  2) User completes multi-step onboarding: basic details, photo, education, location
  3) User selects multiple roles, skill levels, and primary role
  4) User adds GitHub, LinkedIn, portfolio links, and uploads resume (PDF)
  5) User adds experience timeline and project placeholders
  6) System sends auto-email notification to admin about new registration
  7) Admin reviews and approves user from Admin Panel
  8) User receives approval and profile becomes visible in Browse directory

- Browse & Discover Talent
  1) User navigates to Browse page with 3-column student profile grid
  2) User applies filters: role, skills, college, location, verified status, GitHub active, rating, team-up availability
  3) User views student profile card: photo, name, role, skill tags, college, rating, verified badge
  4) User clicks "View Profile" to see detailed profile with projects, experience, skills, and reviews
  5) User clicks "Team Up" button to send collaboration request with message and optional project link
  6) System sends email notification to admin about team-up request
  7) Target student receives request in Team-Up Dashboard and can accept/reject

- Admin Panel & Verification Workflow
  1) Admin logs in and accesses Admin Panel sidebar
  2) Admin reviews pending user approvals: name, college, role, resume
  3) Admin approves or rejects users, triggering email notification
  4) Admin reviews project verification requests: title, owner, description, GitHub link
  5) Admin approves or rejects projects, triggering email notification
  6) Admin views analytics dashboard: total users, verified users, active projects, popular roles, team-ups, city distribution
  7) Admin reviews abuse reports and can ban users
  8) All admin actions trigger email notifications to navaneethan2005.official@gmail.com

## Plan
### Landing & Navigation
1. [x] Create global navigation bar with LANKOR logo, links (Landing, Browse, Community, About, Admin), user avatar dropdown (Profile, Settings, Logout), and dark/light mode toggle
2. [x] Build landing page hero section with title, subtext, "Register Free" and "Browse Students" buttons
3. [x] Create CEO & Founder section with Navaneethan P's profile photo, description, and social buttons (LinkedIn, WhatsApp, Email)
4. [x] Build "How It Works" section with 3-step cards (Register → Build Profile → Get Hired/Team Up)
5. [x] Create role showcase grid with 8 role cards (Frontend, Backend, Database, DevOps, Cybersecurity, AI/ML, Mobile, Full Stack)
6. [x] Add featured students section with sample student cards
7. [x] Build footer with contact email, WhatsApp, LinkedIn, and copyright
8. [x] Create dedicated "Contact Founder" page with Navaneethan P's photo, WhatsApp, Email, LinkedIn buttons
9. [x] Implement dark/light mode toggle functionality across all pages

### Student Registration & Profile Building
1. [x] Create OTP login modal with phone/email input and "Send OTP" button
2. [x] Build multi-step registration form: Step 1 - Basic Details (full name, photo upload, gender, city, state, education, email, phone)
3. [x] Build Step 2 - Skills & Roles (multi-select roles, skill-level slider, primary role selection)
4. [x] Build Step 3 - Social Links (GitHub, LinkedIn, portfolio, resume upload with PDF preview)
5. [x] Build Step 4 - Experience (timeline entries with add/remove functionality)
6. [x] Build Step 5 - Projects (placeholder message: "Will display after admin verification")
7. [x] Build Step 6 - Final Review (summary of all entered data with edit buttons)
8. [x] Implement auto-email notification to navaneethan2005.official@gmail.com on new registration
9. [] Create user profile page with header section (large photo, name, role, rating, verified badge, college, Team Up/Contact/Resume/GitHub/LinkedIn buttons)
10. [] Build profile sections: About, Skills (color-coded chips), Projects (title, description, tech stack, links, team members, verified badge, reviews), Experience (timeline)
11. [] Create Settings page for users to update profile, resume, skills, and social links

### Browse & Discover Talent
1. [x] Build Browse page with 3-column responsive grid for student profile cards
2. [x] Create filter sidebar with: role, skills, college, location, verified only toggle, GitHub active, rating slider, team-up available toggle
3. [x] Design student profile card: photo, name, primary role, skill tags, college, rating, verified badge, "View Profile" button
4. [x] Implement filter logic to update student grid in real-time
5. [x] Add empty states with illustrations when no students match filters
6. [x] Create "Team Up" modal with message input, optional project link, and send button
7. [x] Implement team-up request functionality with toast confirmation
8. [x] Send auto-email notification to admin when team-up request is created

### Admin Panel & Verification Workflow
1. [] Create admin panel layout with responsive sidebar: User Approvals, Project Verification, Users List, Projects List, Reports Dashboard, Team-Up Abuse Reports
2. [] Build User Approvals table with columns: name, college, role, resume (download link), approve/reject buttons
3. [] Implement user approval/rejection functionality with email notification trigger
4. [] Build Project Verification table with columns: title, owner, description, GitHub link, approve/reject buttons
5. [] Implement project approval/rejection functionality with email notification trigger
6. [] Create Analytics Dashboard with charts: total users, verified users, active projects, popular roles, team-ups formed, city distribution
7. [] Build Users List table with search, filter, and user ban toggle
8. [] Build Projects List table with search and filter functionality
9. [] Create Team-Up Dashboard for users: incoming requests, outgoing requests, accepted teams tabs with accept/reject actions
10. [] Implement email notification triggers for all admin actions and user reports
11. [] Add Reports Dashboard for flagged users/projects with admin action buttons
12. [] Create toast messages and error states for all admin actions

### Polish & Advanced Features
1. [] Implement smooth page transitions and micro-animations
2. [] Add breadcrumb navigation across all pages
3. [] Create empty states with illustrations for all lists and grids
4. [] Add error states with retry buttons for failed actions
5. [] Implement toast notification system for all user actions
6. [] Add "Flag user/report" button on profile pages with report modal
7. [] Create email notification placeholders showing "This action sends a mail notification to admin"
8. [] Test responsive design across mobile, tablet, and desktop
9. [] Add loading skeletons for all data-heavy pages
10. [] Implement search functionality on Browse page with debouncing

