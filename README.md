# Javaro ☕🚀

Javaro is a modern **online Java compiler** built with Next.js 15, TailwindCSS, shadcn/ui, and Monaco Editor.  
It allows users to write, compile, and run Java code directly in the browser — with AI-powered features planned.  

---

## ✨ Features
- 🖥️ **Online Java Compiler** with Monaco Editor  
- ⚡ Real-time execution via JDoodle API  
- 🌓 Dark / Light theme toggle (powered by `next-themes`)  
- 📑 **About page** – learn more about Javaro  
- 📬 **Contact page** with styled form (shadcn/ui)  
- 🔝 Responsive **Navbar** and **Footer**  
- 🎨 Polished UI with TailwindCSS + shadcn/ui  

---

## 🛠️ Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/)  
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)  
- [JDoodle API](https://www.jdoodle.com/compiler-api) (for code execution)  
- [next-themes](https://github.com/pacocoursey/next-themes) (dark/light mode)  

---

## 📂 Pages
- `/` → Home page  
- `/compiler` → Java compiler with editor + output console  
- `/about` → About Javaro  
- `/contact` → Contact form  

---

## ⚡ Setup & Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/javaro.git
   cd javaro
2. Install Dependencies
    ```bash
    npm install

3. Create a .env.local file and add your JDoodle API keys

    ``` env
    JDOODLE_CLIENT_ID=your_client_id
    JDOODLE_CLIENT_SECRET=your_client_secret

4. Run the App
    ```bash 
    npm run dev

5. Open Open http://localhost:3000