<template>
  <div class="register-page">
    <h1>สมัครเข้าร่วมกิจกรรม</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">ชื่อ-นามสกุล:</label>
        <input type="text" id="name" v-model="formData.name" required placeholder="กรอกชื่อ-นามสกุลของคุณ" />
      </div>
      <div class="form-group">
        <label for="email">อีเมล:</label>
        <input type="email" id="email" v-model="formData.email" required placeholder="example@email.com" />
      </div>
      <div class="form-group">
        <label for="activity">เลือกกิจกรรม:</label>
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
.register-page {
  max-width: 420px;
  margin: 36px auto 0 auto;
  padding: 32px 24px 24px 24px;
  border-radius: 18px;
  background: linear-gradient(120deg, #e0eafc 60%, #f9f9f9 100%);
  box-shadow: 0 4px 24px rgba(79, 140, 255, 0.12);
  text-align: center;
  position: relative;
  overflow: hidden;
}

h1 {
  color: #4f8cff;
  font-size: 2rem;
  margin-bottom: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 2px 8px #b3c6ff33;
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
}

input,
select {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #b3c6ff;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.2s, box-shadow 0.2s;
  background: #fff;
  outline: none;
}

input:focus,
select:focus {
  border: 1.5px solid #4f8cff;
  box-shadow: 0 0 8px #4f8cff33;
}

.register-btn {
  padding: 12px 0;
  background: linear-gradient(90deg, #4f8cff 0%, #38b6ff 100%);
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 2px 8px rgba(79, 140, 255, 0.12);
  transition: background 0.3s, transform 0.2s;
}

.register-btn:hover {
  background: linear-gradient(90deg, #38b6ff 0%, #4f8cff 100%);
  transform: scale(1.04);
}

.success-message {
  margin-top: 18px;
  color: #28a745;
  background: #e6ffe6;
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
  max-width: 220px;
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