<template>
  <div class="home">
    <h1>
      <span class="highlight">กิจกรรมนักเรียนสนใจ</span>
    </h1>
    <p class="subtitle">
      ยินดีต้อนรับสู่แพลตฟอร์มกิจกรรมสำหรับนักเรียน! ที่นี่คุณจะได้พบกับกิจกรรมหลากหลายที่ตอบโจทย์ทุกความสนใจของคุณ
    </p>
    <div class="section-title">กิจกรรมที่เปิดรับสมัคร</div>
    <div class="activity-list">
      <div class="activity-item pink">
        <i class="fas fa-palette"></i>
        ชมรมศิลปะ
      </div>
      <div class="activity-item purple">
        <i class="fas fa-flask"></i>
        งานประกวดวิทยาศาสตร์
      </div>
      <div class="activity-item blue">
        <i class="fas fa-futbol"></i>
        ทีมกีฬา
      </div>
      <div class="activity-item green">
        <i class="fas fa-music"></i>
        วงดนตรี
      </div>
      <div class="activity-item yellow">
        <i class="fas fa-theater-masks"></i>
        ชมรมการแสดง
      </div>
    </div>
    <div class="join-text">
      มาร่วมค้นหาความชอบและสร้างมิตรภาพใหม่ ๆ ไปด้วยกันนะคะ!
    </div>
    <div class="activity-illustration">
      <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/people-2029367_1280.png" alt="กิจกรรม" />
    </div>
  </div>
</template>

<script setup lang="ts">
// ไม่ต้องใช้ VisitorCounter ในหน้านี้
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.home {
  max-width: 540px;
  margin: 40px auto;
  background: linear-gradient(135deg, #e3eefd 0%, #f5f8fd 100%);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.12);
  padding: 36px 28px 28px 28px;
  text-align: center;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 1px;
}

.highlight {
  color: #4f8cff;
  text-shadow: 1px 2px 8px #b3c6ff;
}

.subtitle {
  font-size: 1.08rem;
  color: #2d3a4a;
  margin-bottom: 18px;
}

.section-title {
  color: #ff7e5f;
  font-size: 1.18rem;
  font-weight: bold;
  margin-bottom: 18px;
  margin-top: 8px;
  letter-spacing: 1px;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: flex-start;
  background: #f8fafc;
  border-radius: 14px;
  padding: 14px 18px;
  font-size: 1.08rem;
  font-weight: 600;
  box-shadow: 0 2px 8px #b3c6ff22;
  transition: transform 0.15s, box-shadow 0.15s;
  cursor: pointer;
  color: #2d3a4a;
  border-left: 8px solid #4f8cff;
}
.activity-item i {
  font-size: 1.4em;
  min-width: 32px;
  text-align: center;
}
.activity-item.pink {
  border-left-color: #ff7e5f;
  background: linear-gradient(90deg, #ffe0e9 0%, #ffd6e0 100%);
}
.activity-item.purple {
  border-left-color: #a18cd1;
  background: linear-gradient(90deg, #e0c3fc 0%, #fbc2eb 100%);
}
.activity-item.blue {
  border-left-color: #4f8cff;
  background: linear-gradient(90deg, #e3eefd 0%, #c3cfe2 100%);
}
.activity-item.green {
  border-left-color: #43e97b;
  background: linear-gradient(90deg, #e0ffe0 0%, #d0f5e0 100%);
}
.activity-item.yellow {
  border-left-color: #ffd200;
  background: linear-gradient(90deg, #fffde0 0%, #fff6d0 100%);
}
.activity-item:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 4px 16px #4f8cff22;
}

.join-text {
  margin-top: 10px;
  font-size: 1.02rem;
  color: #2563eb;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.activity-illustration {
  margin-top: 18px;
}
.activity-illustration img {
  width: 80px;
  filter: drop-shadow(0 4px 18px #b3c6ff55);
}
</style>