function timViTriTrongMang(arr: number[], x: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            // Nếu tìm thấy số x trong mảng, trả về vị trí i
            return i;
        }
    }
    // Nếu không tìm thấy, trả về -1
    return -1;
}

// Ví dụ sử dụng hàm
const mang: number[] = [10, 20, 30, 40, 50];
const soCanTim: number = 30;

const viTri: number = timViTriTrongMang(mang, soCanTim);

if (viTri !== -1) {
    console.log(`Số ${soCanTim} được tìm thấy tại vị trí ${viTri}.`);
} else {
    console.log(`Số ${soCanTim} không có trong mảng.`);
}
