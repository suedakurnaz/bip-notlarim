# BiP Notlarım · Konsept prototip

> **BiP Night 2026 · Taş Kağıt Makas**  
> BiP'teki "Kendime mesaj" sohbetini not, liste ve hatırlatıcı alanına çeviren tasarım önerisi.

### 🔗 Canlı demo: **https://suedakurnaz.github.io/bip-notlarim/**

> [!NOTE]
> Bu bir konsept prototiptir. Turkcell'in ya da BiP'in resmî uygulaması değildir. Uygulamadan mesaj gönderilmez, notlar yalnızca kullanıldığı cihazda saklanır.

---

## Fikir

"Kendime mesaj" sohbeti çoğu kullanıcıda zaten bir not defteri gibi kullanılıyor — ama akış dağınık, arama zor, hiçbir şey hatırlatmıyor. Bu prototip o sohbeti olduğu yerde bırakıp üstüne not, liste ve hatırlatıcı yetenekleri ekliyor. Kişi ve grup profil sayfaları da yeniden tasarlandı.

## Neler var

- **Notlarım** — "Kendime mesaj" sohbetinin not defterine dönüşmüş hâli
- **Listeler** — bir notu uzun basıp listeye çevirme, maddeleri işaretleme
- **Hatırlatıcılar** — "yarın 9'da…" gibi yazınca otomatik hatırlatıcı önerisi
- **Sesli not** — mikrofona basılı tutup kaydetme, metne çevirme
- **Sabitleme, arşiv ve koleksiyonlar** — notları düzenli tutmak için
- **Profil sayfaları** — kişi ve grup profillerinin yeni tasarımı

## Telefonda denemek

Prototip bir PWA; telefonda ana ekrana eklenince tam ekran uygulama gibi açılır.

| Cihaz | Adımlar |
| --- | --- |
| **iPhone** | Linki **Safari**'de aç → Paylaş → **Ana Ekrana Ekle** |
| **Android** | Linki **Chrome**'da aç → ⋮ → **Ana ekrana ekle** (ya da *Uygulamayı yükle*) |

Bilgisayarda da açılır; en doğru görünüm için tarayıcının cihaz önizleme modunu kullanabilirsiniz.

## Bu depo

Depo derlenmiş dosyaları içerir ve **GitHub Pages** ile yayınlanır (`main` dalı, kök klasör).

```
index.html                 # uygulama girişi
app.*.js / app.*.css       # derlenmiş uygulama
manifest.webmanifest       # PWA tanımı
sw.js                      # service worker (çevrimdışı çalışma)
icons/ · fonts/            # ikonlar ve yazı tipleri
```

## Ekip

**Taş Kağıt Makas** — BiP Night 2026
