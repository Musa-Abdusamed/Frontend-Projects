# 🎨 Color Palette Picker

A simple and interactive **React Color Palette Picker** that allows users to select colors, preview them dynamically, and manage their selection. This project was built to practice React fundamentals including **components, props, state management, event handling, conditional rendering, and list rendering with `.map()`**.

![Project Preview](./src/assets/preview.png)

---

## 🚀 Live Demo

🔗 Add your deployed link here

---

## 📌 Project Overview

The **Color Palette Picker** is a mini React application where users can:

- Select a color from a palette of buttons
- View a live preview of the selected color
- See the selected color name
- Identify the active selected button
- Reset the selection back to the default state

---

## ✨ Features

✅ Built with React + Vite  
✅ Dynamic color rendering using `.map()`  
✅ State management using `useState`  
✅ Reusable components  
✅ Props-based data flow  
✅ Conditional rendering  
✅ Active button highlighting  
✅ Live color preview  
✅ Reset functionality  
✅ Responsive and clean UI design  

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Building the user interface |
| Vite | Development environment |
| JavaScript (ES6+) | Application logic |
| CSS3 | Styling and layout |
| JSX | React component structure |

---

## 📂 Project Structure

```
Color-Palette-Picker/
│
├── src/
│   │
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── ColorButton.jsx
│   │   └── ColorPreview.jsx
│   │
│   ├── assets/
│   │   └── preview.png
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

## 🧩 Components Explanation

### 🎨 ColorButton.jsx

A reusable button component that:

- Receives color data through props
- Handles click events
- Shows active styling when selected

Props:

```jsx
color
onClick
isSelected
```

---

### 🖼️ ColorPreview.jsx

Displays:

- Selected color preview box
- Current selected color name

Receives:

```jsx
color
```

---

### 📦 Card.jsx

A layout component that uses:

```jsx
props.children
```

to wrap the application content inside a styled card.

---

## 🧠 React Concepts Practiced

### useState

Used to store the currently selected color:

```jsx
const [selectedColor, setSelectedColor] = useState("");
```

---

### Props

Data is passed between components:

Example:

```jsx
<ColorButton
 color={color}
 isSelected={selectedColor === color}
/>
```

---

### Array Rendering

Colors are stored in an array and displayed dynamically:

```jsx
colors.map((color)=>(
   <ColorButton />
))
```

---

### Conditional Rendering

The application displays:

- Color preview when a color is selected
- "No color selected yet" when nothing is selected

---

## ⚙️ Installation and Setup

Clone the repository:

```bash
git clone YOUR_REPOSITORY_LINK
```

Go into the project:

```bash
cd Color-Palette-Picker
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🎯 Future Improvements

Possible improvements:

- Add custom HEX color input
- Add color copying functionality
- Add color history
- Add dark mode
- Save favorite colors
- Add more color palettes

---

## 👨‍💻 Author

**Musa Abdusamed**

GitHub:
🔗 https://github.com/Musa-Abdusamed

---

⭐ If you like this project, consider giving it a star!
