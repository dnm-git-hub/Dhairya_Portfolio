# 🚀 Personal Portfolio Website

A production-ready, full-stack portfolio web application built from scratch to showcase my end-to-end backend engineering skills. 

Rather than relying on static templates or basic local databases, I architected this project to handle real-world deployment challenges, including cloud media routing, static file optimization, and production-grade database management.

🔗 **Live Demo:** https://dhairya-portfolio.onrender.com/

---

## 🏗️ The Tech Stack

* **Backend Framework:** Python 3, Django 5
* **Production Database:** PostgreSQL 
* **Media Storage:** Cloudinary API 
* **Static File Management:** WhiteNoise 
* **Frontend:** Custom HTML, CSS, and Vanilla JavaScript
* **Hosting & CI/CD:** Render (Automated deployments linked to the main GitHub branch)

---

## ⚙️ How It Was Made: Engineering Highlights

When building this project, I focused strictly on backend best practices and separation of concerns from local development straight through to production:

* **Persistent Cloud Storage:** Modern cloud hosting platforms (like Render) use ephemeral file systems that wipe local data on every deploy. To solve this, I bypassed the local disk and integrated the **Cloudinary API** using Django’s custom storage backends. All dynamic media (project screenshots, dynamically updated resumes) are securely intercepted and routed to a persistent third-party cloud.
* **Production Database Migration:** I upgraded the architecture from Django's default local SQLite database to a fully managed **PostgreSQL** database. This ensures strict ACID compliance and allows the portfolio's data models (Projects, Skills, Experience) to scale securely.
* **Optimized Static Asset Delivery:** Instead of relying on a bulky external CDN for basic assets, I configured **WhiteNoise** middleware to compress, cache, and serve static files (CSS, JS, PDF resumes) directly from the application layer, significantly improving load times.
* **Automated CI/CD Pipeline:** The live server is directly linked to this GitHub repository. Any code pushed to the main branch triggers an automated build process that installs dependencies, runs database migrations, collects static files, and deploys the new version with zero downtime.
* **Dynamic Admin Control:** Fully customized the built-in Django Admin dashboard to allow seamless content updates. I can add new portfolio projects, update my skills, or swap out my resume document entirely through the UI without ever needing to push new code.

---

## 👨‍💻 Let's Connect

**DHAIRYA NARESH MAISHERI**
* Email: dnm091298@gmail.com