// PPSC MasterPrep - Monetization & Gmail License Security Engine

const PPSC_AUTH = {
  SECRET_SALT: "PPSC_MASTERPREP_PRO_2026_SECURE_SALT_KEY",
  FREE_TIER_LIMIT: 50,
  ADMIN_PIN: "PPSC2026ADMIN",

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
      dId = 'DEV-' + Math.random().toString(36).substring(2, 10).toUpperCase() + '-' + Date.now().toString(36).toUpperCase();
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

  // Generate deterministic license key for a specific Gmail
  generateKeyForEmail(email) {
    if (!email) return "";
    const cleanEmail = email.toLowerCase().trim();
    const part1 = this.hashString(cleanEmail + this.SECRET_SALT).padStart(4, '0').substring(0, 4);
    const part2 = this.hashString(this.SECRET_SALT + cleanEmail).padStart(4, '0').substring(0, 4);
    const part3 = this.hashString(cleanEmail + cleanEmail.length + this.SECRET_SALT).padStart(4, '0').substring(0, 4);
    return `PPSC-PRO-${part1}-${part2}-${part3}`;
  },

  // Verify if a key matches the student's email
  verifyKey(email, key) {
    if (!email || !key) return false;
    const expected = this.generateKeyForEmail(email);
    return expected.trim().toUpperCase() === key.trim().toUpperCase();
  },

  // Save license
  activateLicense(email, key) {
    const cleanEmail = email.toLowerCase().trim();
    const cleanKey = key.trim().toUpperCase();

    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      return { success: false, message: "Please enter a valid Gmail / Email address." };
    }

    if (!this.verifyKey(cleanEmail, cleanKey)) {
      return { success: false, message: "Invalid License Key for this Gmail address. Please verify with seller." };
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
    return { success: true, message: `Congratulations! PPSC MasterPrep Pro has been successfully activated for ${cleanEmail}!` };
  },

  loadLicense() {
    try {
      const raw = localStorage.getItem('ppsc_pro_license');
      if (raw) {
        const data = JSON.parse(raw);
        if (data.email && data.key && this.verifyKey(data.email, data.key)) {
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
            <span style="font-size: 0.72rem; opacity: 0.8; max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">(${this.state.userEmail})</span>
          </div>
        `;
      } else {
        headerChip.innerHTML = `
          <button class="btn btn-warning" style="padding: 5px 12px; font-size: 0.8rem; font-weight: 700; border-radius: 50px; box-shadow: 0 0 15px rgba(245, 158, 11, 0.3);" onclick="PPSC_AUTH.openPaywallModal()">
            <i class="fa-solid fa-gem" style="color: #fff;"></i> Unlock Pro (Rs. 1,299)
          </button>
        `;
      }
    }
  },

  checkAccess(actionType = 'general') {
    if (this.state.isPro) return true;

    // Show Paywall Modal
    this.openPaywallModal(actionType);
    return false;
  },

  openPaywallModal(context = '') {
    const modal = document.getElementById('paywallModal');
    if (modal) modal.classList.add('active');
  },

  closePaywallModal() {
    const modal = document.getElementById('paywallModal');
    if (modal) modal.classList.remove('active');
  },

  openAdminGenerator() {
    const pin = prompt("Enter Master Admin PIN to generate student license keys:");
    if (pin === this.ADMIN_PIN) {
      const email = prompt("Enter Student Gmail address:");
      if (email && email.includes('@')) {
        const key = this.generateKeyForEmail(email);
        prompt(`Generated License Key for ${email} (Copy and send to student):`, key);
      } else if (email) {
        alert("Invalid email format.");
      }
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
