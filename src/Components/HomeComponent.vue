<template>
  <div class="home">
    <h1>
      <span class="highlight">ยินดีต้อนรับ</span> สู่กิจกรรมที่นักเรียนสนใจ
    </h1>
    <p class="subtitle">
      🌟 ค้นหากิจกรรมที่ใช่ และ <span class="passion">เติมเต็มความฝันของคุณ!</span> 🌟
    </p>
    <VisitorCounter />

    <!-- ปุ่มเมนูทั้งหมดจัดเรียงแบบ grid -->
    <div class="menu-grid">
      <router-link to="/info" class="menu-btn blue">
        <i class="fas fa-info-circle"></i>
        ข้อมูลกิจกรรม
      </router-link>
      <router-link to="/register" class="menu-btn orange">
        <i class="fas fa-edit"></i>
        สมัครเข้าร่วมกิจกรรม
      </router-link>
      <router-link to="/contact" class="menu-btn green">
        <i class="fas fa-phone"></i>
        ติดต่อสอบถาม
      </router-link>
      <button class="menu-btn gray" @click="alert('Coming soon!')">
        <i class="fas fa-star"></i>
        กิจกรรมแนะนำ
      </button>
      <button class="menu-btn purple" @click="alert('Coming soon!')">
        <i class="fas fa-calendar-alt"></i>
        ปฏิทินกิจกรรม
      </button>
      <button class="menu-btn pink" @click="alert('Coming soon!')">
        <i class="fas fa-heart"></i>
        กิจกรรมที่ชอบ
      </button>
      <router-link to="/images" class="menu-btn violet">
        <i class="fas fa-images"></i>
        ภาพกิจกรรม
      </router-link>
    </div>

    <!-- ลบส่วนภาพกิจกรรมที่ผ่านมาออกตามคำขอ -->

    <div class="activity-illustration">
      <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/people-2029367_1280.png" alt="กิจกรรม" />
    </div>
  </div>
</template>

<script setup lang="ts">
import VisitorCounter from '../Components/VisitorCounter.vue'
const alert = (msg: string) => window.alert(msg)
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.home {
  text-align: center;
  margin-top: 50px;
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

/* ปุ่มเมนูแบบ grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin: 32px 0 0 0;
  justify-items: center;
}

.menu-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 180px;
  justify-content: center;
  padding: 14px 0;
  border-radius: 18px;
  font-size: 1.08rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 12px #b3c6ff22;
  transition: background 0.18s, transform 0.15s;
  text-decoration: none;
  color: #fff;
  background: #4f8cff;
  margin: 0;
}
.menu-btn i {
  font-size: 1.2em;
}
.menu-btn.blue { background: linear-gradient(90deg, #4f8cff 60%, #6ec1e4 100%);}
.menu-btn.orange { background: linear-gradient(90deg, #ffb347 60%, #ff7e5f 100%);}
.menu-btn.green { background: linear-gradient(90deg, #43e97b 60%, #38f9d7 100%);}
.menu-btn.gray { background: linear-gradient(90deg, #bdbdbd 60%, #757f9a 100%);}
.menu-btn.purple { background: linear-gradient(90deg, #a18cd1 60%, #fbc2eb 100%);}
.menu-btn.pink { background: linear-gradient(90deg, #f7971e 60%, #ffd200 100%);}
.menu-btn.violet { background: linear-gradient(90deg, #a18cd1 60%, #fbc2eb 100%);}
.menu-btn:hover {
  transform: translateY(-3px) scale(1.04);
  filter: brightness(1.08);
}

.activity-illustration {
  margin-top: 32px;
}
.activity-illustration img {
  width: 120px;
  filter: drop-shadow(0 4px 18px #b3c6ff55);
}
</style>