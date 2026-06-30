import React from 'react'

export default function App() {
  const handleCheckin = () => {
    alert('เช็คอินเรียบร้อย 🎉')
  }

  return (
    <div className="app">
      <header>
        <h1>Sales Check-in</h1>
        <p>ยินดีต้อนรับสู่ระบบเช็คอินฝ่ายขาย</p>
      </header>
      <main>
        <button className="checkin" onClick={handleCheckin}>เช็คอิน</button>
      </main>
    </div>
  )
}
