<template>
  <div class="home">
    <h1>
      <span class="highlight">ยินดีต้อนรับ</span> สู่กิจกรรมที่นักเรียนสนใจ
    </h1>
    <p class="subtitle">
      🌟 ค้นหากิจกรรมที่ใช่ และ <span class="passion">เติมเต็มความฝันของคุณ!</span> 🌟
    </p>
    <div class="button-group">
      <router-link to="/info" class="btn info-btn">ดูข้อมูลกิจกรรม</router-link>
      <router-link to="/register" class="btn register-btn">สมัครเข้าร่วมกิจกรรม</router-link>
    </div>
    <div class="activity-illustration">
      <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/people-2029367_1280.png" alt="กิจกรรม" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent'
}
</script>

<style scoped>
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
  margin-bottom: 32px;
  color: #444;
}

.passion {
  color: #ff7e5f;
  font-weight: bold;
}

.button-group {
  margin-bottom: 32px;
}

.btn {
  display: inline-block;
  margin: 0 12px;
  padding: 12px 32px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 8px rgba(79, 140, 255, 0.12);
}

.info-btn {
  background: linear-gradient(90deg, #4f8cff 0%, #38b6ff 100%);
  color: #fff;
}

.info-btn:hover {
  background: linear-gradient(90deg, #38b6ff 0%, #4f8cff 100%);
  color: #fff;
}

.register-btn {
  background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
  color: #fff;
}

.register-btn:hover {
  background: linear-gradient(90deg, #feb47b 0%, #ff7e5f 100%);
  color: #fff;
}

.activity-illustration {
  margin-top: 32px;
}

.activity-illustration img {
  max-width: 320px;
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(255, 126, 95, 0.12);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}
</style>