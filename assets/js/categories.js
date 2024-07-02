// Seçenekleri içeren array
const tourismCategories = [
  "Deniz ve Sahil Bölgeleri",
  "Plajlar ve Koylar",
  "Deniz ve Su Sporları",
  "Mavi Yolculuk Rotaları",
  "Tarihi Yerler ve Kalıntılar",
  "Tarihi Kaleler ve Surları",
  "Tarihi Çarşılar ve Alışveriş Merkezleri",
  "Arkeoloji ve Tarih Turları",
  "Doğal Güzellikler",
  "Şelaleler ve Su Kaynakları",
  "Yaylalar ve Kırsal Turizm",
  "Doğa ve Yaban Hayatı Fotoğrafçılığı",
  "Kültür ve Sanat Festivalleri",
  "Müzik Festivalleri ve Konserler",
  "Yerel Festivaller ve Şenlikler",
  "Gastronomi ve Mutfak Atölyeleri",
  "Yemek ve Mutfak Turları",
  "Üzüm Bağları ve Şarap Tadım Turları",
  "Termal ve Sağlık Turizmi",
  "Kaplıca ve Spa Merkezleri",
  "Hayvanat Bahçeleri ve Akvaryumlar",
  "Çocuklar için Eğlence Parkları",
  "Doğa ve Macera Turizmi",
  "Ekstrem Sporlar ve Adrenalin Aktiviteleri",
  "Yaban Hayatı ve Safari Turları",
  "Religiyoz ve Manevi Yerler",
  "Farklı Dinlere Ait İbadet Yerleri",
  "Modern ve Çağdaş Sanat Merkezleri",
  "Sinema ve Tiyatro Salonları",
  "Müzik ve Konser Mekanları",
  "Gösteri ve Performans Sanatları",
];

const selectElement = document.getElementById("kategori");

tourismCategories.forEach((category) => {
  let option = document.createElement("option");
  option.textContent = category;
  option.value = category;
  selectElement.appendChild(option);
});
