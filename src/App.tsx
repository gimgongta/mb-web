// src/App.tsx
import { Link, Routes, Route } from 'react-router-dom'


function Home() {
return (
<div>
<h1>WebView App</h1>
<p>React Native WebView로 띄울 정적 사이트</p>
<nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link>
</nav>
</div>
)
}


function About() {
return <div>About Page</div>
}


export default function App() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
)
}