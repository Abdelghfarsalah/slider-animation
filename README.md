<div align="center">

<br/>

# 🕷️ Spider-Man Image Slider

### Dynamic background changer built with Next.js 15 & Redux Toolkit

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br/>

</div>

---

## 📌 Overview

A visually immersive **full-screen image slider** featuring Spider-Man wallpapers. Click any thumbnail at the bottom to instantly change the background, or navigate using the arrow controls. All state is managed globally with **Redux Toolkit** — no props drilling, no page reloads.

---

## 🖼️ Preview

| View 1 | View 2 |
|:---:|:---:|
| ![Preview 1](./images/Screenshot-1.png) | ![Preview 2](./images/Screenshot-2.png) |

| View 3 | View 4 |
|:---:|:---:|
| ![Preview 3](./images/Screenshot-4.png) | ![Preview 4](./images/Screenshot-4.png) |

---

## ✨ Features

- 🖼️ **Full-screen background** — active image fills the entire viewport
- 🖱️ **Click-to-change** — click any thumbnail to set it as background instantly
- ⬅️➡️ **Arrow navigation** — prev/next buttons with infinite loop support
- 🔢 **Slide counter** — displays current slide number (e.g. `Slider 01`)
- 🧠 **Redux global state** — background URL & active index stored in one slice
- 🌐 **React Context** — image list injected via `SliderContext` for clean decoupling
- ⚡ **Zero reloads** — all updates are instant, client-side only

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| State Management | Redux Toolkit + React Redux |
| Styling | Tailwind CSS + Custom CSS |
| Language | TypeScript |
| Icons | React Icons (`react-icons`) |

---

## 📁 Project Structure

```
📦 src/app
 ┣ 📂 components
 ┃ ┣ 📂 Home
 ┃ ┃ ┗ 📄 index.tsx          ← Root layout: applies background from Redux
 ┃ ┣ 📂 header
 ┃ ┃ ┗ 📄 index.tsx          ← Nav bar (Home, Blog, Contact, About + Search)
 ┃ ┣ 📂 content
 ┃ ┃ ┗ 📄 index.tsx          ← Slide title, description & arrow controls
 ┃ ┣ 📂 imageslider
 ┃ ┃ ┗ 📄 index.tsx          ← Thumbnail strip at bottom
 ┃ ┗ 📄 style.css            ← Shared component styles
 ┣ 📂 context
 ┃ ┗ 📄 slidercontext.ts     ← React Context holding image path array
 ┣ 📂 features
 ┃ ┗ 📄 sliderchangeslice.ts ← Redux slice: background + index
 ┣ 📄 store.ts               ← Redux store configuration
 ┣ 📄 page.tsx               ← Entry point: Provider + Context + image list
 ┣ 📄 layout.tsx             ← App layout with Geist fonts
 ┗ 📄 globals.css            ← Global styles + Tailwind import

📦 public
 ┗ 📂 images                 ← All wallpaper images live here
     ┣ 🖼️ spiderman-cartoon-chromebook-wallpaper.jpg
     ┣ 🖼️ wp3061378-marvel-infinity-war-wallpapers.jpg
     ┣ 🖼️ wp3802811-iron-spider-man-wallpapers.jpg
     ┗ 📄 ... (8 images total)
```

---

## ⚙️ How It Works

### 1. Image list via React Context

All image paths are defined once in `page.tsx` and passed through `SliderContext`:

```tsx
// app/page.tsx
<SliderContext.Provider value={[
  "/images/spiderman-cartoon-chromebook-wallpaper.jpg",
  "/images/wp3061378-marvel-infinity-war-wallpapers.jpg",
  // ...
]}>
  <Homecontent />
</SliderContext.Provider>
```

### 2. Redux slice manages active state

```ts
// features/sliderchangeslice.ts
initialState: {
  background: "/images/spiderman-cartoon-chromebook-wallpaper.jpg",
  index: 0
}

reducers: {
  changeBackground: (state, action) => {
    state.background = action.payload.background;
    state.index      = action.payload.index;
  }
}
```

### 3. Background applied in Home component

```tsx
// components/Home/index.tsx
const state = useSelector((state) => state.changeBackground);

<div style={{
  backgroundImage: `url(${state.background})`,
  backgroundSize: "cover",
  height: "100vh",
}}>
```

### 4. Arrow navigation with infinite loop

```tsx
// components/content/index.tsx
const prev = index - 1 < 0 ? images.length - 1 : index - 1;
const next = index + 1 >= images.length ? 0 : index + 1;

dispatch(changeBackground({ background: images[prev], index: prev }));
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/slider-animation.git
cd slider-animation

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Adding More Images

1. Drop your `.jpg` / `.png` files into `/public/images/`
2. Add the paths to the array in `app/page.tsx`:

```tsx
<SliderContext.Provider value={[
  "/images/your-new-wallpaper.jpg",  // ← add here
  // ...existing images
]}>
```

No other changes needed — Redux and the slider pick it up automatically.

---

## 📦 Key Dependencies

```json
{
  "next": "^15.x",
  "react": "^19.x",
  "@reduxjs/toolkit": "latest",
  "react-redux": "latest",
  "react-icons": "latest"
}
```

---

<div align="center">

Built with ❤️ &nbsp;·&nbsp; Next.js &nbsp;·&nbsp; Redux Toolkit &nbsp;·&nbsp; TypeScript

</div>
