function changeBackground() {
  // اختاري لون عشوائي من القائمة
  const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;

  // عرض رسالة
  const msg = document.getElementById("msg");
  msg.textContent = " 🎉تم تغيير اللون" ;
}