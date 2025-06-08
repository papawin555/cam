<template>
  <div class="contact">
    <h1>ติดต่อเรา</h1>
    <p class="desc">
      หากมีข้อสงสัยหรือข้อเสนอแนะเกี่ยวกับกิจกรรม สามารถติดต่อทีมงานได้ตามช่องทางด้านล่างนี้ค่ะ
    </p>
    <div class="contact-card">
      <div class="contact-item">
        <span class="icon">📧</span>
        <span>อีเมล: <a href="mailto:activity@school.ac.th">activity@school.ac.th</a></span>
      </div>
      <div class="contact-item">
        <span class="icon">📞</span>
        <span>โทรศัพท์: <a href="tel:021234567">02-123-4567</a></span>
      </div>
      <div class="contact-item">
        <span class="icon">🌐</span>
        <span>เว็บไซต์: <a href="https://school.ac.th" target="_blank">school.ac.th</a></span>
      </div>
      <div class="contact-item">
        <span class="icon">📍</span>
        <span>ที่อยู่: 123 ถนนโรงเรียน เขตการศึกษา กรุงเทพฯ</span>
      </div>
    </div>
    <div class="contact-illustration">
      <img src="https://cdn.pixabay.com/photo/2017/01/10/19/05/phone-1962124_1280.png" alt="ติดต่อ" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
};
</script>

<style scoped>
.contact {
  padding: 32px 20px 20px 20px;
  background: linear-gradient(120deg, #e0eafc 60%, #f9f9f9 100%);
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

.desc {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 24px;
}

.contact-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px #e0eafc55;
  padding: 24px 10px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.contact-item {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #333;
  gap: 10px;
  transition: background 0.2s, transform 0.2s;
  border-radius: 8px;
  padding: 8px 12px;
}

.contact-item:hover {
  background: linear-gradient(90deg, #e0eafc 0%, #fff 100%);
  transform: scale(1.03);
}

.icon {
  font-size: 1.5rem;
  color: #4f8cff;
}

a {
  color: #ff7e5f;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #38b6ff;
  text-decoration: underline;
}

.contact-illustration {
  margin-top: 28px;
}

.contact-illustration img {
  max-width: 180px;
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