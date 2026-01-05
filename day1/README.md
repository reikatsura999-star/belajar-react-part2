1.ini adalah hasil setup react project pakai vite.

2.HTML adalah sebuah kerangka untuk membuat sebuah web sedangkan jsx adalah gabungan antara HTML dan javascript

ada bebrapa pebedaan:

di html pakai kita pakai "class" sedangkan di jsx kita pakai "className"

contoh kode:

`html`
`<button class = "..."></button>`

`jsx`
`<button className = "..."></button>`

3.Virtual DOM adalah salinan tampilan halaman yang dibuat React di memori.Salinan ini bukan tampilan asli di browser, melainkan model / gambaran dari tampilan tersebut.

cara kerjanya yaitu :

data berubah => react membuat virtual dom baru => react membandingan dom lama dan baru => react memperbarui tampilan asli di bagian yg berubah saja

4.spa adalah aplikasi web yg hanya memuat satu halaman html saja  jadi ketika pindah menu tidak mereload halaman lagi

kelebihan:

1. navigasi cepat
2. beban server ringan
3. layarnya terasa smooth

kekurangan:

1. load terasa lama di awal
2. seo tidak otomatis bagus
3. bergantung dengan javascript

sedangkan mpa adalah sebuah aplikasi web yg setiap halaman nya mempunyai htmlnya masing masing dan akan mereload halaman ketika berpindah menu

kelebihan :
1. load lebih cepat
2. seo lebih mudah
3. struktur sederhana
4. tidak bergantung dengan js

kekurangan :

1. navigasi lambat
2. beban server berat
3. pengalaman kurang smooth
4. sulit membuat ui kompleks


