<template>
  <div class="contact">
    <h1><span class="highlight">ติดต่อเรา</span></h1>
    <p class="desc">
      หากมีข้อสงสัยหรือข้อเสนอแนะเกี่ยวกับกิจกรรม สามารถติดต่อทีมงานได้ตามช่องทางด้านล่างนี้ค่ะ
    </p>
    <div class="contact-card">
      <div class="contact-item email">
        <span class="icon"><i class="fas fa-envelope"></i></span>
        <span>อีเมล: <a href="mailto:activity@school.ac.th">activity@school.ac.th</a></span>
      </div>
      <div class="contact-item phone">
        <span class="icon"><i class="fas fa-phone-alt"></i></span>
        <span>โทรศัพท์: <a href="tel:021234567">02-123-4567</a></span>
      </div>
      <div class="contact-item web">
        <span class="icon"><i class="fas fa-globe"></i></span>
        <span>เว็บไซต์: <a href="https://school.ac.th" target="_blank">school.ac.th</a></span>
      </div>
      <div class="contact-item address">
        <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.contact {
  padding: 32px 20px 20px 20px;
  background: linear-gradient(120deg, #e3eefd 60%, #f5f8fd 100%);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(79, 140, 255, 0.12);
  max-width: 540px;
  margin: 40px auto;
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

.highlight {
  background: linear-gradient(90deg, #4f8cff 60%, #6ec1e4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.desc {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 24px;
}

.contact-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px #e0eafc55;
  padding: 24px 10px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: stretch;
}

.contact-item {
  display: flex;
  align-items: center;
  font-size: 1.08rem;
  color: #333;
  gap: 14px;
  transition: background 0.2s, transform 0.2s;
  border-radius: 10px;
  padding: 12px 18px;
  box-shadow: 0 2px 8px #b3c6ff11;
  background: linear-gradient(90deg, #f5f8fd 0%, #e3eefd 100%);
  font-weight: 500;
}

.contact-item.email .icon { color: #4f8cff; }
.contact-item.phone .icon { color: #ff7e5f; }
.contact-item.web .icon { color: #43e97b; }
.contact-item.address .icon { color: #ffd200; }

.contact-item:hover {
  background: linear-gradient(90deg, #e0eafc 0%, #fff 100%);
  transform: scale(1.03);
  box-shadow: 0 4px 16px #4f8cff22;
}

.icon {
  font-size: 1.5rem;
  min-width: 32px;
  text-align: center;
  transition: color 0.2s;
}

a {
  color: #4f8cff;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 600;
}

.contact-item.phone a { color: #ff7e5f; }
.contact-item.web a { color: #43e97b; }
.contact-item.address a { color: #ffd200; }

a:hover {
  color: #2563eb;
  text-decoration: underline;
}

.contact-illustration {
  margin-top: 28px;
}

.contact-illustration img {
  max-width: 120px;
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