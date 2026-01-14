# Koordinat Tabanlı Resim Yerleştirme Uygulaması

Bu proje, kullanıcının web sayfası üzerinde yaptığı **çift tıklamalardan mouse koordinatlarını alarak**, seçilen resmi bu koordinatlara göre **dinamik olarak sayfaya yerleştiren** bir JavaScript uygulamasıdır.

## 🚀 Proje Özeti

- Sayfanın herhangi bir yerine **çift tıklanarak** koordinat alınır
- Alınan **X ve Y koordinatları** input alanlarında gösterilir
- Kullanıcı bir resim seçer
- **Ekle** butonuna basıldığında, seçilen resim tüm kaydedilen koordinatlara eklenir
- `event.stopPropagation()` kullanılarak buton tıklamalarının koordinat alması engellenmiştir

## 🛠️ Kullanılan Teknolojiler

- HTML5  
- JavaScript (Vanilla JS)  
- DOM Manipülasyonu  
- Event Bubbling ve `stopPropagation()`  

## 📂 Dosya Yapısı
/project-root
│
├── index.html
├── script.js
├── logo_beyaz_500x500.png
├── logo_sade_500x500.png
├── logo_5yildiz_500x500.png
└── README.md

> Resimler doğrudan HTML içindeki `value` alanlarından referans alınmaktadır.

## ⚙️ Çalışma Mantığı

1. Kullanıcı sayfada bir noktaya **çift tıklar**
2. `clientX` ve `clientY` ile koordinatlar alınır
3. Koordinatlar bir diziye `(x, y)` çifti olarak `push()` metodu ile eklenir
4. Kullanıcı bir resim seçer
5. **Ekle** butonuna basıldığında:
   - Seçilen resim
   - Kaydedilen tüm koordinatlara
   - `position: absolute` kullanılarak yerleştirilir

## 🧠 Teknik Detaylar

- Koordinatlar tek bir dizi içinde tutulur:  
  `[x1, y1, x2, y2, ...]`
- Döngü kontrolü `a.length` ile yapılır
- Manuel indis yönetimi yerine `push()` kullanılmıştır
- `getElementById` ile modern DOM erişimi tercih edilmiştir

## 📌 Geliştirme Fikirleri

- Eklenen resimleri silme
- Tek tek koordinat silme
- Sürükle–bırak desteği
- Mobil uyumluluk
- Canvas tabanlı çizim sistemi

## 👤 Geliştirici

**Andersonicman**

Bu proje JavaScript event yönetimi, dizi kullanımı ve DOM manipülasyonu pratiği amacıyla geliştirilmiştir.

## GÜNCELLEME!!!
İnputtan koordinat bilgilerinin alınmasını engellemek için yapma(event) adında bir fonksiyon eklenmiştir.

