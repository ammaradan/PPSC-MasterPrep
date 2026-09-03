// PPSC MasterPrep - Monetization & 1-Device Bound License Security Engine

const PPSC_AUTH = {
  SECRET_SALT: "PPSC_MASTERPREP_PRO_2026_SECURE_DEVICE_SALT_KEY",
  FREE_TIER_LIMIT: 20,
  ADMIN_PIN: "PPSC2026Adan26627",

  state: {
    isPro: false,
    userEmail: "",
    licenseKey: "",
    deviceId: ""
  },

  init() {
    this.initDeviceId();
    this.loadLicense();
    this.updateUI();
  },

  initDeviceId() {
    let dId = localStorage.getItem('ppsc_device_id');
    if (!dId) {
      const rand = Math.floor(1000 + Math.random() * 9000);
      const hex = Math.random().toString(36).substring(2, 5).toUpperCase();
      dId = `DEV-${rand}-${hex}`;
      localStorage.setItem('ppsc_device_id', dId);
    }
    this.state.deviceId = dId;
  },

  // Hash function for license signature
  hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36).toUpperCase();
  },

  // Generate deterministic license key strictly bound to (Email + Device ID)
  generateKeyForDevice(email, deviceId) {
    if (!email || !deviceId) return "";
    const cleanEmail = email.toLowerCase().trim();
    const cleanDev = deviceId.toUpperCase().trim();
    const part1 = this.hashString(cleanEmail + cleanDev + this.SECRET_SALT).padStart(4, '0').substring(0, 4);
    const part2 = this.hashString(this.SECRET_SALT + cleanDev + cleanEmail).padStart(4, '0').substring(0, 4);
    const part3 = this.hashString(cleanDev + cleanEmail.length + this.SECRET_SALT).padStart(4, '0').substring(0, 4);
    return `PPSC-PRO-${part1}-${part2}-${part3}`;
  },

  // Verify if a key matches the student's email AND current device
  verifyKey(email, key, deviceId = null) {
    if (!email || !key) return false;
    const currentDev = deviceId || this.state.deviceId;
    const expected = this.generateKeyForDevice(email, currentDev);
    return expected.trim().toUpperCase() === key.trim().toUpperCase();
  },

  // Activate license on THIS device
  activateLicense(email, key) {
    const cleanEmail = email.toLowerCase().trim();
    const cleanKey = key.trim().toUpperCase();

    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      return { success: false, message: "Please enter a valid Gmail address." };
    }

    if (!this.verifyKey(cleanEmail, cleanKey, this.state.deviceId)) {
      return { 
        success: false, 
        message: "❌ Invalid Key or Key Locked to Another Device. Each license is valid for 1 device only." 
      };
    }

    const licenseData = {
      email: cleanEmail,
      key: cleanKey,
      deviceId: this.state.deviceId,
      activatedAt: new Date().toISOString()
    };

    localStorage.setItem('ppsc_pro_license', JSON.stringify(licenseData));
    this.state.isPro = true;
    this.state.userEmail = cleanEmail;
    this.state.licenseKey = cleanKey;

    this.updateUI();
    return { 
      success: true, 
      message: `🎉 Success! PPSC MasterPrep Pro has been unlocked for ${cleanEmail} on this device!` 
    };
  },

  loadLicense() {
    try {
      const raw = localStorage.getItem('ppsc_pro_license');
      if (raw) {
        const data = JSON.parse(raw);
        if (data.email && data.key && data.deviceId === this.state.deviceId && this.verifyKey(data.email, data.key, this.state.deviceId)) {
          this.state.isPro = true;
          this.state.userEmail = data.email;
          this.state.licenseKey = data.key;
        }
      }
    } catch(e) {
      this.state.isPro = false;
    }
  },

  updateUI() {
    const headerChip = document.getElementById('proStatusChip');
    if (headerChip) {
      if (this.state.isPro) {
        headerChip.innerHTML = `
          <div style="display: flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); padding: 5px 12px; border-radius: 50px; color: #10B981; font-size: 0.8rem; font-weight: 700;">
            <i class="fa-solid fa-crown" style="color: #F59E0B;"></i>
            <span>PRO MEMBER</span>
            <span style="font-size: 0.72rem; opacity: 0.8; max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">(${this.state.userEmail})</span>
          </div>
        `;
      } else {
        headerChip.innerHTML = `
          <button class="btn btn-warning" style="padding: 5px 12px; font-size: 0.8rem; font-weight: 700; border-radius: 50px; box-shadow: 0 0 15px rgba(245, 158, 11, 0.3);" onclick="PPSC_AUTH.openPaywallModal('general')">
            <i class="fa-solid fa-gem" style="color: #fff;"></i> Buy Pro (Rs. 1,299)
          </button>
        `;
      }
    }

    // Update Device ID in Paywall modal
    const devDisplay = document.getElementById('studentDeviceIdDisplay');
    if (devDisplay) devDisplay.textContent = this.state.deviceId;

    // Update WhatsApp link with prefilled Device ID
    const waBtn = document.getElementById('whatsappPayBtn');
    if (waBtn) {
      const waText = encodeURIComponent(`Hello Ammar! I have sent Rs.1299 for PPSC MasterPrep Pro Access.\nMy Gmail: \nMy Device ID: ${this.state.deviceId}`);
      waBtn.href = `https://wa.me/923414442225?text=${waText}`;
    }
  },

  copyDeviceId() {
    navigator.clipboard.writeText(this.state.deviceId).then(() => {
      if (typeof App !== 'undefined') App.showToast(`Device ID (${this.state.deviceId}) copied!`, 'success');
    });
  },

  checkAccess(actionType = 'general') {
    if (this.state.isPro) return true;
    this.openPaywallModal(actionType);
    return false;
  },

  openPaywallModal(context = '') {
    this.updateUI();
    const modal = document.getElementById('paywallModal');
    const alertBox = document.getElementById('paywallContextAlert');
    
    let msg = "To get full access to all 3,600+ MCQs, 245 Solved Past Papers, and 100-MCQ Mock Simulators, please buy the Pro version.";
    if (context === 'bank') {
      msg = "🔒 <strong>Question Bank Locked in Demo:</strong> To browse and search all 3,600+ solved questions, please buy the Pro version.";
    } else if (context === 'past-papers') {
      msg = "🔒 <strong>Past Papers Locked in Demo:</strong> To launch and practice any of the 245 solved past papers, please buy the Pro version.";
    } else if (context === 'flashcards') {
      msg = "🔒 <strong>Flashcards Locked in Demo:</strong> To access all revision flashcards, please buy the Pro version.";
    } else if (context === 'export') {
      msg = "🔒 <strong>Export Locked:</strong> Downloading the complete Question Bank is reserved for Pro members.";
    } else if (context === 'exam-limit') {
      msg = "🔒 <strong>Full 100-MCQ Exam Locked:</strong> The free demo provides 20 sample MCQs. To take the full 100-MCQ mock test, please buy the Pro version.";
    }

    if (alertBox) {
      alertBox.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: var(--warning); margin-right: 6px;"></i> ${msg}`;
    }

    if (modal) modal.classList.add('active');
  },

  closePaywallModal() {
    const modal = document.getElementById('paywallModal');
    if (modal) modal.classList.remove('active');
  },

  // Owner Admin Generator Tool
  openAdminGenerator() {
    const pin = prompt("Enter Master Admin PIN to generate 1-Device license keys:");
    if (pin === this.ADMIN_PIN) {
      const email = prompt("Enter Student Gmail address:");
      if (!email || !email.includes('@')) {
        alert("Invalid email format.");
        return;
      }
      const deviceId = prompt(`Enter Student Device ID (e.g. ${this.state.deviceId}) received from student WhatsApp:`);
      if (!deviceId || !deviceId.startsWith("DEV-")) {
        alert("Invalid Device ID format. Must start with DEV-");
        return;
      }

      const key = this.generateKeyForDevice(email, deviceId);
      prompt(`Generated 1-Device Locked Key for ${email} (${deviceId}):\n\n(Copy and send to student)`, key);
    } else if (pin !== null) {
      alert("Incorrect Admin PIN.");
    }
  }
};

// Initialize on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    PPSC_AUTH.init();
  });
}
