## Pazarama React Final Project

<hr/>

### Uygulama temelde herkese açık bir başvuru formunun son kullanıcı tarafından doldurulması ve başvuru sonrası verilen takip numarasıyla birlikte başvuru durumu sayfasında incelenmesinden oluşuyor. Ekstra olarak arka tarafta bu başvuruları değerlendirebilecek, düzenleyebilecek bir admin paneli bulunmakta.

# Demo

[Demo Link](https://ekime-final-project.netlify.app)

<hr/>

### Yükleme Adımları

Projenin localde çalıştırılabilmesi için `.env` dosyasını projenin root dizinine eklenmeli ve aşağıdakine benzer şekilde doldurulmalı.

```env
// Your Firebase Config Settings
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_databaseURL=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
REACT_APP_measurementId=
```

Ardından npm install ve npm run start ile localhost:3000 portundan kontrol edilebilir.

### Teknolojiler

- React hooks
- Firebase ( database and auth )
- Router ( react-router )
- Redux ( Reduxjs Toolkit )
- Form management library ( formik )
- Validation library ( yup )
- Unit Test ( jest / enzyme )
- ESLint ve Prettier
- Deploy - Netlify

### Routes / Paths

- /basvuru-olustur (default)

  - Public endpoint.
  - Başvuru formunu herhangi bir kullanıcının doldurmasına imkan verir.
  - Başvuru formunda [Ad, Soyad, Yaş, TC, Başvuru Nedeni, Adres Bilgisi, Fotograf Ekle, Gönder] butonu yer alır.
  - Ekranda başvuru kodu girilebilen bir input ve sorgula butonu vardır.

- /basvuru/{basvuruNo} (Basvuru formu doldurulduktan sonra gelen sayfa)

  - Ekranda bir teşekkür mesajı yer alır ve birlikte başvuru kodu verilir.

- /basvuru/{basvuruNo} (Sorgulama sonrası gelen sayfa)

  - Girilen numaraya ait başvuru varsa ekran bilgileri, son durumu ve verilen cevap(lar) yer alır.
  - Başvuru numarası hatalıysa 404 Not Found hata mesajı çıkar.

- /admin

  - Ekranda kullanıcı giriş formu vardır. (Kolay giriş için u:kodluyoruz, p:bootcamp109)

- /admin/basvurular

  - Başarıli giriş sonrası bekleyen (çözülmemiş/cevaplanmamış) başvuruların listesi yer alır ve basit bilgiler sunar. (Başvuru Kodu, Başvuru Yapan, Tarih)
  - Başvuru listesinde her elemenda başvuruyu görüntüle butonu vardır.

- /admin/basvuru/{basvuruNo}
  - Başvurunun durumu güncellenebilir ve başvuruya cevap yazılabilir.
  - Burada yazılan cevap son kullanıci tarafından basvuru/{basvuruNo} kısmından görüntülenebilmelidir.
