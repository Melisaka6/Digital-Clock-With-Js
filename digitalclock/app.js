function updateClock() { 
var currentDate = new Date(); //Date fonksiyonunu kullanmak için 
var hours = currentDate.getHours(); //saati alıyoruz
var minutes = currentDate.getMinutes(); //dakikayı alıyoruz
var seconds = currentDate.getSeconds(); //saniyeyi

document.getElementById("hour").textContent = hours;  
document.getElementById("minute").textContent = minutes;
document.getElementById("second").textContent = seconds;
}

// İlk olarak saat bilgisini güncelle
updateClock();

// Her saniyede bir saat bilgisini güncelle
setInterval(updateClock, 1000); //1000 milisaniye


/* 
setInterval, JavaScript içinde zamanlayıcı (timer) oluşturmak için kullanılan bir yöntemdir.
 Belirli bir işlemin belirli bir aralıkla yinelenmesini sağlar.
setInterval(func, delay);
 */