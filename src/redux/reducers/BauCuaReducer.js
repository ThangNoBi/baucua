const storeBauCua = {
  danhSachCuoc: [
    { ma: "cua", hinhAnh: "./imgBauCua/BTBauCua/cua.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./imgBauCua/BTBauCua/ca.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./imgBauCua/BTBauCua/ga.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./imgBauCua/BTBauCua/bau.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./imgBauCua/BTBauCua/tom.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./imgBauCua/BTBauCua/nai.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  ketQuaCuoc: [
    { ma: "cua", hinhAnh: "./imgBauCua/BTBauCua/cua.png" },
    { ma: "ca", hinhAnh: "./imgBauCua/BTBauCua/ca.png" },
    { ma: "ga", hinhAnh: "./imgBauCua/BTBauCua/ga.png" },
  ],
};

export default (state = storeBauCua, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      // console.log(action);
      const dsCuocUpdate = [...state.danhSachCuoc];

      const index = dsCuocUpdate.findIndex(
        (qcuoc) => qcuoc.ma === action.payload.ma
      );
      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            dsCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (dsCuocUpdate[index].diemCuoc > 0) {
            dsCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.danhSachCuoc = dsCuocUpdate;
      return { ...state };
    }

    case "LAC_BAU_CUA": {
      // console.log(action);
      const mangXXUpdate = [];
      //Chạy vòng For 3 lần để lấy ra 3 con xúc xắc ngẫu nhiên
      for (let i = 0; i < 3; i++) {
        let layNgauNhien = Math.floor(Math.random() * 6); //Ngãu nhiên từ 0 -> 5
        const XXNgauNhien = state.danhSachCuoc[layNgauNhien];
        mangXXUpdate.push(XXNgauNhien);
      }
      state.ketQuaCuoc = mangXXUpdate;

      //Xử lý tăng điểm thưởng khi trúng, dùng forEach chỉ duyệt mà ko trả về gì hết, còn map thì sẽ trả về 1 mảng đối tượng
      mangXXUpdate.forEach((item) => {
        let indexDSCuoc = state.danhSachCuoc.findIndex(
          (xucxac) => xucxac.ma === item.ma
        );
        if (indexDSCuoc !== -1) {
          state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
        }
      });

      //Xử lý hoàn tiền
      state.danhSachCuoc.forEach((qc) => {
        let indexXX = mangXXUpdate.findIndex((xx) => xx.ma === qc.ma);
        if (indexXX !== -1) {
          state.tongDiem += qc.diemCuoc;
        }
      });

      //Làm mới lại ô điểm cược khi xốc
      state.danhSachCuoc = state.danhSachCuoc.map((diem) => {
        return { ...diem, diemCuoc: 0 };
      });

      return { ...state };
    }

    //Xử lý trường hợp bấm nút chơi lại, refresh tất cả các ô tiền
    case "CHOI_LAI": {
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((diem) => {
        return { ...diem, diemCuoc: 0 };
      });
      return { ...state };
    }

    default:
      return state;
  }
};
