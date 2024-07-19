# Notes

- tailwind classname tidak bisa dimodif secara dinamis (contoh : btn-${color}). harus masukan ke safelist dulu pada tailwind.config.json
- Alignment pada FC Text hanya berfungsi jika isBlocked = true 
- kelas "grid-flow-col" khusus diperlukan kalau pakai grid-rows


# Layout

## Grid 
- Horizontal => grid-col
- Vertical => grid-row

- child = > GridCell
- misal grid horizontal (col), pada childnya diatur tinggi sekian, maka teman child 1 barisnya tinginya sama semua, begitupun sebaliknya di vertikal
- kalau direction horizontal (col), maka di Alignment berdasarkan vertikal / baris"nya

## Flex
- w-1 => 0.25 rem => 24px

