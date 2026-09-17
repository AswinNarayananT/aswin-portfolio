# Aswin Narayanan T — Developer Portfolio

A modern, high-performance developer portfolio built with **React 19** + **Tailwind CSS v4** + **Vite**. Showcasing my expertise as a **Python Developer**, **Software Developer**, **Full Stack Developer**, and **Backend Developer**.

🔗 **Live Repository:** [github.com/AswinNarayananT/aswin-portfolio](https://github.com/AswinNarayananT/aswin-portfolio)

---

## 👨‍💻 About Me

I'm **Aswin Narayanan T** — a Software Developer with specialized expertise in **Python, Django, Django REST Framework, FastAPI, Flask**, and full-stack **React**. I'm proficient in building scalable REST APIs, real-time WebSocket applications, asynchronous task pipelines with Celery/Redis, and deploying on **AWS EC2** with Nginx.

- 📧 **Email:** aswinmalamakkavu@gmail.com
- 📞 **Phone:** +91 70343 27569
- 💼 **LinkedIn:** [linkedin.com/in/aswin-nt](https://linkedin.com/in/aswin-nt)
- 🐙 **GitHub:** [github.com/AswinNarayananT](https://github.com/AswinNarayananT)
- 📍 **Location:** Kerala, India

---

## 🚀 Tech Stack

### Core & Backend
`Python` `OOPS` `Django` `DRF` `FastAPI` `Flask` `REST APIs`

### Databases & In-Memory
`PostgreSQL` `MongoDB` `Redis`

### Frontend
`React.js` `JavaScript` `TypeScript` `Redux Toolkit` `Tailwind CSS` `HTML5` `CSS3` `Bootstrap`

### Cloud, DevOps & Tools
`AWS EC2` `Nginx` `Gunicorn` `Celery` `WebSocket` `Git` `Stripe` `Razorpay` `ZegoCloud` `Vercel`

---

## 📁 Featured Projects

### 🎫 FindMySeat — Real-Time Event Ticketing Platform
> High-concurrency ticketing system with atomic Redis seat locking & PostgreSQL ACID transactions.

- Custom 2D interactive venue seat builder in React
- Redis distributed seat locking (TTL) to eliminate race conditions
- PostgreSQL schema with ACID transaction isolation

| Repo | Link |
|------|------|
| Frontend | [github.com/AswinNarayananT/findmyseat-frontend](https://github.com/AswinNarayananT/findmyseat-frontend) |
| Backend | [github.com/AswinNarayananT/findmyseat-backend](https://github.com/AswinNarayananT/findmyseat-backend) |

**Stack:** React.js · Redis · PostgreSQL · Python · REST APIs · Tailwind CSS

---

### 🤝 Team Sync — Collaborative Project Management Suite
> Real-time task management with WebSockets, Celery async queues, Stripe billing & AWS EC2 deployment.

- RESTful APIs with Django REST Framework (DRF)
- Live WebSocket channels for real-time project updates
- Celery/Redis worker pool for background tasks & notifications
- Stripe webhook integration for recurring subscriptions
- Deployed on AWS EC2 behind Nginx reverse proxy + Gunicorn WSGI

| Repo | Link |
|------|------|
| Frontend | [github.com/AswinNarayananT/Teamsync-frontend](https://github.com/AswinNarayananT/Teamsync-frontend) |
| Backend | [github.com/AswinNarayananT/Teamsync-backend](https://github.com/AswinNarayananT/Teamsync-backend) |

**Stack:** Django REST Framework · WebSockets · Celery · Redis · Stripe · AWS EC2 · Nginx · React.js

---

### 👓 OpticOasis — Eyewear E-Commerce Platform
> Full-featured e-commerce built with Django MVT, Razorpay payments, and OTP authentication.

- Django Model-View-Template (MVT) architecture
- Phone/email OTP verification for user accounts
- Razorpay payment gateway with transaction verification
- Admin dashboard for inventory, sales analytics & order management

| Repo | Link |
|------|------|
| GitHub | [github.com/AswinNarayananT/OpticOasis-ecommerse-webapp](https://github.com/AswinNarayananT/OpticOasis-ecommerse-webapp) |

**Stack:** Django MVT · Python · Razorpay · PostgreSQL · OTP Auth · Bootstrap

---

### 📝 BlogBox — High-Performance Content Management Engine
> Async CMS powered by FastAPI with Cloudinary CDN media pipeline and JWT authentication.

- Ultra-fast async REST endpoints (FastAPI + Pydantic)
- JWT bearer token authentication with RBAC
- Cloudinary SDK for automatic media optimization & CDN storage
- Auto-generated Swagger UI / Redoc API documentation

| Repo | Link |
|------|------|
| Frontend | [github.com/AswinNarayananT/BlogBox-frontend](https://github.com/AswinNarayananT/BlogBox-frontend) |
| Backend | [github.com/AswinNarayananT/BlogBox-backend](https://github.com/AswinNarayananT/BlogBox-backend) |

**Stack:** FastAPI · Python · Cloudinary · JWT Auth · PostgreSQL · React.js

---

## 🎓 Education & Certifications

| Program | Institution | Period |
|---------|-------------|--------|
| Full Stack Web Development | Brototype | 2024 – Present |
| Advanced Python Training | ATEES Industrial Training | Aug 2022 – Apr 2023 |
| B.Sc. Mathematics | University of Calicut | 2019 – 2022 |

📜 [View Advanced Python Certificate](https://drive.google.com/file/d/12Di2RWwoxkoRl2hxr04SxjrUXhmBwHqF/view?usp=sharing)

---

## 🏗️ Portfolio Architecture Highlights

| Pattern | Tech Used | Project |
|---------|-----------|---------|
| Race Condition Mitigation | Redis Distributed Locks (Redlock) | FindMySeat |
| Async Task Queues | Celery + Redis Broker | Team Sync |
| Real-Time Communication | Django Channels & WebSockets | Team Sync |
| Cloud Hosting & Reverse Proxy | AWS EC2 + Nginx + Gunicorn | Team Sync |

---

## 🛠️ Running Locally

```bash
# Clone the repository
git clone https://github.com/AswinNarayananT/aswin-portfolio.git
cd aswin-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

---

## 📂 Project Structure

```
demo/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive sticky navbar with active section detection
│   │   ├── Hero.jsx                # Hero section with interactive backend terminal
│   │   ├── StatsBanner.jsx         # Key strength highlight cards
│   │   ├── Skills.jsx              # Filterable skill pills grouped by category
│   │   ├── ArchitectureSpotlight.jsx  # Backend engineering decisions deep-dive
│   │   ├── Projects.jsx            # Projects grid with interactive schematics & GitHub links
│   │   ├── EducationCertifications.jsx  # Education & ATEES certificate
│   │   ├── Contact.jsx             # Contact form + direct email/phone links
│   │   ├── Footer.jsx              # Footer with navigation & social links
│   │   ├── Toast.jsx               # Toast notification component
│   │   └── Icons.jsx               # Custom SVG icon components (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js        # Centralized resume & project data
│   ├── App.jsx                     # Root layout, section assembly & toast state
│   ├── main.jsx                    # React DOM entry point
│   └── index.css                   # Tailwind v4 global styles, scrollbar, glow utilities
├── index.html                      # HTML template with meta tags & Google Fonts
├── vite.config.js                  # Vite + @tailwindcss/vite plugin config
└── package.json
```

---

## 🎨 Design System

- **Background:** `#020617` (Deep navy)
- **Primary Accent:** Indigo (`indigo-400` / `indigo-600`)
- **Secondary Accent:** Emerald (`emerald-400` / `emerald-500`)
- **Tertiary Accent:** Sky Blue (`sky-400`)
- **Typography:** Plus Jakarta Sans (UI) + JetBrains Mono (code/terminal)
- **Effects:** Glassmorphism cards, ambient radial gradients, smooth scroll, micro-animations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <strong>Aswin Narayanan T</strong> · Kerala, India
</p>
