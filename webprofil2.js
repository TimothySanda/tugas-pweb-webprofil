window.onload = function () {
    alert("👋 Hehehe, makacihh yaa udah mampirr :> ");
  };
  

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let telpon = document.getElementById("telpon").value.trim();
    let bukti = document.getElementById("bukti").files.length;
  
    if (nama === "" || email === "" || telpon === "" || bukti === 0) {
      alert("❌ Semua kolom harus diisi!");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("❌ Format email tidak valid!");
      return;
    }
  
    if (telpon.length < 10) {
      alert("❌ Nomor telepon minimal 10 digit!");
      return;
    }
  
    alert("✅ Form berhasil dikirim!");
    this.submit();
  });
  
  function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  