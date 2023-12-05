function demSoChuSo(so: number): number {
    // Chuyển số thành chuỗi để dễ đếm số ký tự
    const chuoiSo: string = Math.abs(so).toString();

    // Sử dụng length để lấy số lượng ký tự
    const soChuSo: number = chuoiSo.length;

    return soChuSo;
}

// Ví dụ sử dụng hàm
const soNhapVao: number = 12345;
const ketQua: number = demSoChuSo(soNhapVao);

console.log(`Số chữ số của ${soNhapVao} là: ${ketQua}`);
