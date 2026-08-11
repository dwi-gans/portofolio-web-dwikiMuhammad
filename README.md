# Portofolio — Muhammad Dwiki Wicaksono

Website portofolio statis (HTML/CSS/JS murni, tanpa framework) yang siap
di-deploy ke Vercel.

## Isi folder

```
index.html   → struktur halaman
styles.css   → semua styling & desain
script.js    → data proyek, kontak, dan interaksi (menu mobile, animasi scroll)
cv.pdf       → file CV yang bisa diunduh lewat tombol "Unduh CV"
vercel.json  → pengaturan kecil untuk Vercel (URL bersih)
assets/      → taruh gambar/screenshot proyek di sini
```

## Cara deploy ke Vercel

**Opsi A — lewat GitHub (disarankan)**
1. Buat repository baru di GitHub, lalu upload semua file di folder ini (pertahankan strukturnya).
2. Buka [vercel.com](https://vercel.com) → **Add New → Project**.
3. Pilih repository tadi → Framework Preset pilih **Other** → klik **Deploy**.
4. Selesai — Vercel akan memberi URL seperti `nama-kamu.vercel.app`.

**Opsi B — lewat Vercel CLI (lebih cepat, tanpa GitHub)**
```bash
npm i -g vercel
cd nama-folder-ini
vercel
```
Ikuti instruksi di terminal, lalu `vercel --prod` untuk deploy ke domain final.

## Cara menambah/mengedit proyek

Buka `script.js`, cari bagian paling atas bernama `PROJECTS`. Setiap proyek
adalah satu objek `{ ... }` di dalam array tersebut. Untuk menambah proyek
baru, **cukup salin (copy-paste) satu objek yang sudah ada**, lalu ganti isinya —
tidak perlu menyentuh `index.html` sama sekali, kartu proyek akan otomatis
muncul di halaman.

Setiap proyek punya field:
- `title` — nama proyek
- `period` — rentang waktu, contoh `"Jul 2025 – Mei 2026"`
- `category` — label singkat di kartu, contoh `"Web App"`, `"Machine Learning"`
- `description` — 1–2 kalimat ringkas
- `tech` — array teknologi, contoh `["React", "Node.js"]`
- `highlight` — pencapaian/skor (opsional), contoh `"94.17% akurasi"`. Kosongkan `""` jika tidak ada.
- `image` — path ke screenshot, contoh `"assets/proyek-1.jpg"`. Kosongkan `""` untuk memakai placeholder otomatis.
- `links.demo` / `links.repo` — URL demo & kode sumber. Kosongkan `""` jika belum ada — tombolnya otomatis berubah jadi "segera hadir" dan tidak bisa diklik.

Untuk menambah gambar: taruh file di folder `assets/` (contoh: `assets/proyek-cnn.jpg`),
lalu isi field `image` dengan path itu.

## Mengganti data lain

- **Kontak & sosial media**: masih di `script.js`, cari `CONTACT` dan `SOCIAL_LINKS`
  di bagian atas. Isi `SOCIAL_LINKS.github` / `.linkedin` dengan URL profilmu —
  ikonnya otomatis muncul di bagian kontak. Kalau dikosongkan, ikon tidak ditampilkan.
- **CV**: ganti file `cv.pdf` dengan CV terbaru (nama file harus tetap `cv.pdf`,
  atau ubah juga link `href="cv.pdf"` di `index.html` bagian hero).
- **Teks ringkasan, keahlian, pengalaman, pendidikan**: langsung edit teksnya di `index.html`.

## Catatan desain

Warna, tipografi, dan motif "bracket corner" (sudut siku di foto/kartu, terinspirasi
dari tampilan deteksi objek — merujuk ke proyek skripsi CNN) semuanya diatur di
`styles.css` lewat CSS variables di bagian paling atas file (`:root`), jadi mudah
disesuaikan jika suatu saat ingin mengubah warna aksen.
