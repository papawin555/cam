<template>
  <div class="info">
    <h1>กิจกรรมที่นักเรียนสนใจ</h1>
    <p class="welcome">
      ยินดีต้อนรับสู่แพลตฟอร์มกิจกรรมสำหรับนักเรียน! ที่นี่คุณจะได้พบกับกิจกรรมหลากหลายที่ตอบโจทย์ความสนใจของคุณ
    </p>
    <h2>กิจกรรมที่เปิดรับสมัคร</h2>
    <ul class="activity-list">
      <li>
        <span class="icon">🎨</span> ชมรมศิลปะ
      </li>
      <li>
        <span class="icon">🔬</span> งานประกวดวิทยาศาสตร์
      </li>
      <li>
        <span class="icon">⚽</span> ทีมกีฬา
      </li>
      <li>
        <span class="icon">🎵</span> วงดนตรี
      </li>
      <li>
        <span class="icon">🎭</span> ชมรมการแสดง
      </li>
    </ul>
    <p class="join">
      มาร่วมค้นหาความชอบและสร้างมิตรภาพใหม่ ๆ ไปด้วยกันนะคะ!
    </p>
    <div class="info-illustration">
      <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/people-1294361_1280.png" alt="กิจกรรม" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoComponent',
};
</script>

<style scoped>
.info {
  padding: 32px 20px 20px 20px;
  background: linear-gradient(120deg, #f9f9f9 60%, #e0eafc 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(79, 140, 255, 0.10);
  max-width: 600px;
  margin: 32px auto;
  text-align: center;
  position: relative;
  overflow: hidden;
}

h1 {
  color: #4f8cff;
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 2px 8px #b3c6ff33;
}

.welcome {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 24px;
}

h2 {
  color: #ff7e5f;
  margin: 18px 0 10px 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.activity-list li {
  margin: 10px 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #e0eafc55;
  padding: 10px 0;
  cursor: pointer;
}

.activity-list li:hover {
  transform: scale(1.04) translateY(-2px);
  box-shadow: 0 6px 18px #4f8cff22;
  background: linear-gradient(90deg, #e0eafc 0%, #fff 100%);
}

.icon {
  font-size: 1.5rem;
  margin-right: 12px;
}

.join {
  margin-top: 18px;
  color: #38b6ff;
  font-weight: 500;
  font-size: 1.1rem;
}

.info-illustration {
  margin-top: 28px;
}

.info-illustration img {
  max-width: 260px;
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(79, 140, 255, 0.10);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
</style>