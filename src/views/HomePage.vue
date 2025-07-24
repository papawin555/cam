<template>
  <div class="home">
    <!-- Navbar -->
    <nav class="navbar">
      <span class="navbar-title">กิจกรรมนักเรียน</span>
      <div class="navbar-menu">
        <router-link to="/info" class="navbar-btn blue">
          <i class="fas fa-info-circle"></i> ข้อมูลกิจกรรม
        </router-link>
        <router-link to="/register" class="navbar-btn orange">
          <i class="fas fa-edit"></i> สมัครเข้าร่วมกิจกรรม
        </router-link>
        <router-link to="/contact" class="navbar-btn green">
          <i class="fas fa-phone"></i> ติดต่อสอบถาม
        </router-link>
        <button class="navbar-btn gray" @click="alert('Coming soon!')">
          <i class="fas fa-star"></i> กิจกรรมแนะนำ
        </button>
        <button class="navbar-btn purple" @click="alert('Coming soon!')">
          <i class="fas fa-calendar-alt"></i> ปฏิทินกิจกรรม
        </button>
        <button class="navbar-btn pink" @click="alert('Coming soon!')">
          <i class="fas fa-heart"></i> กิจกรรมที่ชอบ
        </button>
        <router-link to="/users" class="navbar-btn white">
          รายชื่อผู้ใช้
        </router-link>
      </div>
    </nav>

    <!-- ส่วนอื่นๆ -->
    <h1>
      <span class="highlight">ยินดีต้อนรับ</span> สู่กิจกรรมที่นักเรียนสนใจ
    </h1>
    <p class="subtitle">
      🌟 ค้นหากิจกรรมที่ใช่ และ <span class="passion">เติมเต็มความฝันของคุณ!</span> 🌟
    </p>
    <VisitorCounter />
    <div class="activity-illustration">
      <img src="..." alt="กิจกรรม" />
    </div>
  </div>
</template>

<script setup lang="ts">
import VisitorCounter from '../Components/VisitorCounter.vue'
const alert = (msg: string) => window.alert(msg)
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.navbar {
  display: flex;
  align-items: center;
  background: #ffffff;
  color: #4f8cff;
  padding: 16px 32px;
  border-radius: 18px 18px 0 0;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px #e0eafc55;
}
.navbar-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 24px;
  white-space: nowrap;
}
.navbar-menu {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 0; /* ปล่อย gap เป็น 0 เพื่อให้กระจายเท่าๆ กัน */
  margin: 0 24px;
}
.navbar-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: #4f8cff;
  transition: background 0.18s, color 0.18s, transform 0.15s;
}
.navbar-btn.blue { background: linear-gradient(90deg, #4f8cff 60%, #6ec1e4 100%);}
.navbar-btn.orange { background: linear-gradient(90deg, #ffb347 60%, #ff7e5f 100%);}
.navbar-btn.green { background: linear-gradient(90deg, #43e97b 60%, #38f9d7 100%);}
.navbar-btn.gray { background: linear-gradient(90deg, #bdbdbd 60%, #757f9a 100%);}
.navbar-btn.purple { background: linear-gradient(90deg, #a18cd1 60%, #fbc2eb 100%);}
.navbar-btn.pink { background: linear-gradient(90deg, #f7971e 60%, #ffd200 100%);}
.navbar-btn.violet { background: linear-gradient(90deg, #a18cd1 60%, #fbc2eb 100%);}
.navbar-btn.white {
  background: #fff;
  color: #4f8cff;
  border: 2px solid #4f8cff;
}
.navbar-btn:hover {
  transform: translateY(-2px) scale(1.04);
  filter: brightness(1.08);
  color: #2563eb;
}

.home {
  text-align: center;
  margin-top: 20px;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  min-height: 80vh;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  padding: 40px 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: bold;
  letter-spacing: 1px;
}

.highlight {
  color: #4f8cff;
  text-shadow: 1px 2px 8px #b3c6ff;
}

.subtitle {
  font-size: 1.2rem;
}

.passion {
  color: #ff7e5f;
  font-weight: bold;
}

.activity-illustration {
  margin-top: 32px;
}
.activity-illustration img {
  width: 120px;
  filter: drop-shadow(0 4px 18px #b3c6ff55);
}
</style>