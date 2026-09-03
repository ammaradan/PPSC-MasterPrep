// PPSC MasterPrep - Monetization & Device-Locked License Security Engine

const PPSC_AUTH = {
  SECRET_SALT: "PPSC_MASTERPREP_PRO_2026_HARDWARE_LOCK_SALT",
  FREE_TIER_LIMIT: 10,
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

    // Auto-open Welcome Buy Pro modal on first visit for non-pro users
    if (!this.state.isPro) {
      setTimeout(() => {
        this.openPaywallModal('welcome');
      }, 700);
    }
  },

  initDeviceId() {
    let dId = localStorage.getItem('ppsc_device_id');
    if (!dId) {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const devType = isMobile ? 'MOB' : 'PC';
      const rand = Math.floor(1000 + Math.random() * 9000);
      dId = `${devType}-${rand}`;
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

  // Generate deterministic license key strictly bound to (Email + Device Code)
  generateKeyForDevice(email, deviceId) {
    if (!email || !deviceId) return "";
    const cleanEmail = email.toLowerCase().trim();
    const cleanDev = deviceId.toUpperCase().trim();
    const part1 = this.hashString(cleanEmail + cleanDev + this.SECRET_SALT).padStart(4, '0').substring(0, 4);
    const part2 = this.hashString(this.SECRET_SALT + cleanDev + cleanEmail).padStart(4, '0').substring(0, 4);
    const part3 = this.hashString(cleanDev + cleanEmail.length + this.SECRET_SALT).padStart(4, '0').substring(0, 4);
    return `PPSC-PRO-${part1}-${part2}-${part3}`;
  },

  // Verify key against student Gmail AND current device
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
        message: "❌ Invalid License Key or Key Locked to Another Device. Each license is locked to authorized devices only." 
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
          <div style="display: flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); padding: 6px 14px; border-radius: 50px; color: #10B981; font-size: 0.82rem; font-weight: 700;">
            <i class="fa-solid fa-crown" style="color: #F59E0B;"></i>
            <span>PRO MEMBER</span>
            <span style="font-size: 0.72rem; opacity: 0.8; max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">(${this.state.userEmail})</span>
          </div>
        `;
      } else {
        headerChip.innerHTML = `
          <button class="btn-buy-pro-glow" onclick="PPSC_AUTH.openPaywallModal('header')">
            <i class="fa-solid fa-crown" style="color: #FCD34D;"></i>
            <span>BUY PRO (Rs. 1,299)</span>
          </button>
        `;
      }
    }

    // Update Device Code display in Paywall modal
    const devDisplay = document.getElementById('studentDeviceIdDisplay');
    if (devDisplay) devDisplay.textContent = this.state.deviceId;

    // Update WhatsApp link with prefilled Device Code
    const waBtn = document.getElementById('whatsappPayBtn');
    if (waBtn) {
      const waText = encodeURIComponent(`Hello Ammar! I have sent Rs.1299 payment for PPSC MasterPrep Pro Access (2 Devices: Mobile + Laptop).\nMy Gmail: \nDevice Code: ${this.state.deviceId}`);
      waBtn.href = `https://wa.me/923414442225?text=${waText}`;
    }
  },

  copyDeviceId() {
    navigator.clipboard.writeText(this.state.deviceId).then(() => {
      if (typeof App !== 'undefined') App.showToast(`Device Code (${this.state.deviceId}) copied!`, 'success');
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
    if (context === 'welcome') {
      msg = "👋 <strong>Welcome to PPSC MasterPrep!</strong> Get full lifetime access for <strong>2 Devices (1 Mobile + 1 Laptop)</strong> for just Rs. 1,299. You can close this popup to try the 10-MCQ demo.";
    } else if (context === 'bank') {
      msg = "🔒 <strong>Question Bank Locked in Demo:</strong> To browse and search all 3,600+ solved questions, please buy the Pro version.";
    } else if (context === 'past-papers') {
      msg = "🔒 <strong>Past Papers Locked in Demo:</strong> To launch and practice any of the 245 solved past papers, please buy the Pro version.";
    } else if (context === 'flashcards') {
      msg = "🔒 <strong>Flashcards Locked in Demo:</strong> To access all revision flashcards, please buy the Pro version.";
    } else if (context === 'export') {
      msg = "🔒 <strong>Export Locked:</strong> Downloading the complete Question Bank is reserved for Pro members.";
    } else if (context === 'exam-limit') {
      msg = "🔒 <strong>Full 100-MCQ Exam Locked:</strong> The free demo provides 10 sample MCQs. To take full 100-MCQ mock tests, please buy the Pro version.";
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

  // Owner Admin Generator Tool (Generates Device-Bound Keys)
  openAdminGenerator() {
    const pin = prompt("Enter Master Admin PIN to generate device-locked license keys:");
    if (pin === this.ADMIN_PIN) {
      const email = prompt("Enter Student Gmail address:");
      if (!email || !email.includes('@')) {
        alert("Invalid email format.");
        return;
      }
      const deviceId = prompt(`Enter Student Device Code (e.g. ${this.state.deviceId}) received on WhatsApp:`);
      if (!deviceId) {
        alert("Device code is required for device locking.");
        return;
      }

      const key = this.generateKeyForDevice(email, deviceId);
      prompt(`Generated Device-Locked Key for ${email} (${deviceId.toUpperCase()}):\n\n(Copy and send to student on WhatsApp)`, key);
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
