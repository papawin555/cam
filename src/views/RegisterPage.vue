<template>
  <div class="register-page">
    <h1>
      <span class="highlight">สมัครเข้าร่วมกิจกรรม</span>
    </h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name"><i class="fas fa-user"></i> ชื่อ-นามสกุล:</label>
        <input type="text" id="name" v-model="formData.name" required placeholder="กรอกชื่อ-นามสกุลของคุณ" />
      </div>
      <div class="form-group">
        <label for="email"><i class="fas fa-envelope"></i> อีเมล:</label>
        <input type="email" id="email" v-model="formData.email" required placeholder="example@email.com" />
      </div>
      <div class="form-group">
        <label for="activity"><i class="fas fa-list"></i> เลือกกิจกรรม:</label>
        <select id="activity" v-model="formData.activity" required>
          <option value="" disabled>-- กรุณาเลือกกิจกรรม --</option>
          <option value="sports">⚽ กีฬา</option>
          <option value="music">🎵 ดนตรี</option>
          <option value="art">🎨 ศิลปะ</option>
        </select>
      </div>
      <button type="submit" class="register-btn">
        <span>✨ สมัครเลย! ✨</span>
      </button>
    </form>
    <transition name="fade">
      <div v-if="successMessage" class="success-message">
        <span>✅ {{ successMessage }}</span>
      </div>
    </transition>
    <div class="register-illustration">
      <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/people-1294361_1280.png" alt="กิจกรรม" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        activity: ''
      },
      successMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      this.successMessage = 'สมัครเข้าร่วมกิจกรรมสำเร็จแล้ว ขอบคุณที่เข้าร่วมกับเรา!';
      this.resetForm();
      setTimeout(() => {
        this.successMessage = '';
      }, 3500);
    },
    resetForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.activity = '';
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.register-page {
  max-width: 420px;
  margin: 48px auto 0 auto;
  padding: 36px 28px 28px 28px;
  border-radius: 22px;
  background: linear-gradient(120deg, #e3eefd 60%, #f5f8fd 100%);
  box-shadow: 0 8px 32px rgba(79, 140, 255, 0.14);
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #222;
}

h1 {
  color: #4f8cff;
  font-size: 2.2rem;
  margin-bottom: 18px;
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

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #222;
  margin-bottom: 8px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

label {
  margin-bottom: 6px;
  color: #2563eb;
  font-weight: 500;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

input,
select {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #b3c6ff;
  border-radius: 10px;
  font-size: 1rem;
  transition: border 0.2s, box-shadow 0.2s;
  background: #f8fafc;
  outline: none;
  color: #222;
  box-shadow: 0 2px 8px #b3c6ff11;
}

input::placeholder {
  color: #8bb3ff;
  opacity: 1;
}

input:focus,
select:focus {
  border: 1.5px solid #4f8cff;
  box-shadow: 0 0 8px #4f8cff33;
  color: #222;
}

.register-btn {
  padding: 13px 0;
  background: linear-gradient(90deg, #4f8cff 0%, #38b6ff 100%);
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 2px 12px rgba(79, 140, 255, 0.14);
  transition: background 0.3s, transform 0.2s;
  letter-spacing: 1px;
}

.register-btn:hover {
  background: linear-gradient(90deg, #38b6ff 0%, #4f8cff 100%);
  transform: scale(1.04);
}

.success-message {
  margin-top: 18px;
  color: #28a745;
  background: #ffffff;
  border-radius: 10px;
  padding: 12px 0;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px #b3c6ff33;
  animation: pop 0.5s;
}

@keyframes pop {
  0% { transform: scale(0.7); opacity: 0; }
  80% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.register-illustration {
  margin-top: 32px;
}

.register-illustration img {
  max-width: 180px;
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(79, 140, 255, 0.10);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}
</style>