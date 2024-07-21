# Notes

- tailwind classname tidak bisa dimodif secara dinamis (contoh : btn-${color}). harus masukan ke safelist dulu pada tailwind.config.json

- kelas "grid-flow-col" khusus diperlukan kalau pakai grid-rows

# Table
## Table -> TRow -> TCell
- isTabled on => mengaktifkan kelas table bawaan tailwind/daisyui

# Typography
- isBlocked jadikan true agar menjadi blok (div) dan  Alignment pada FC Text hanya berfungsi jika isBlocked = true 
- ketika textLevel adalah heading (H1-H6) maka atribut bold dan size pada props diabaikan, pake ukuran default mereka

# Layout
- mx-auto itu mencenterkan komponen itu sendiri dari parentnya, karena seakan akan memberi margin yg seimbang di kanan kirinya sehingga ia berada di tengah
- w-1 => 0.25 rem => 24px
- Kelas h-screen dalam Tailwind CSS menetapkan tinggi elemen menjadi 100% dari tinggi viewport. 

## Grid 
- Horizontal => GridColumn
- Vertical => GridRow

- child = > GridCell
- misal GridColumn, pada childnya diatur tinggi sekian, maka teman child 1 barisnya tinginya sama semua, begitupun sebaliknya di GridRow
- kalau GridColumn, maka di Alignment berdasarkan vertikal / baris"nya, bwgitupun sebaliknya

## Flex
- jika child menggunakan pecahan, jika total pecahan basis child lebih dari 1, misal 5/4 tetap akan dibuat 1 baris (FlexRow) nanti disesuaikan lagi lebarnya (FlexRow)
- jika childnya basisnya dimensi jelas bukan rasio, maka akan disesuaikan selebar itu panjang basisnya, dan sisa width/height containernya akan kosong, tidak seperti column yg akan memberi spasi agar width/height terpakai semua
- 
- Flex Column berarti basisnya jadi tinggi
- basis - 0 :   elemen tidak akan mengambil ruang kecuali diberikan nilai flex-grow yang membuatnya tumbuh untuk mengisi ruang yang tersedia dalam container flex.
- basis-auto : i elemen akan mengambil ukuran kontennya atau ukuran yang ditetapkan oleh properti lain seperti width atau height. flex-basis: auto memungkinkan elemen untuk menentukan ukurannya sendiri berdasarkan konten atau properti CSS lainnya.
- basis-full : elemen flex menjadi 100% dari container flex. Ini berarti elemen akan mencoba mengambil seluruh ruang dalam container flex.
- ketika memilih no-wrap, namun overflow tidak ada scroll, maka akan dipaksakan agar muat (basusnya diperkecil)
- wrap maka jika tidak muat misal lebarnya maka sisanya ditaruh baris dibawahnya (Flex Row) 
- no-wrap agar bisa discroll pastikan container overflow auto/scroll. lalu width/height dari container ditentukan dimensi nya, jangan full atau rasio. pake angka jelas. sedangkan untuk childnya boleh pake rasio


