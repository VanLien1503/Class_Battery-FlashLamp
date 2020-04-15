//Khai báo lớp Battery(pin): chú ý Tên Lớp Chữ đầu phải viết hoa
let Battery=function () {
    // đặt lại giá trị năng lượng cho Battery (pin)
    this.setEnergy = function (energy) {
            this.energy=energy;
    };
    // lấy giá trị của tham số truyền vào
    this.getEnergy = function () {
            return this.energy;
    };
    // xét độ tiêu hao của battery(pin)
    this.decreaseEnergy=function () {
        if (this.energy>0){
            this.energy--;
        }
    }
};

//khai báo lớp FlashLamp
let FlashLamp = function () {
    // vì đèn phải có pin mới sử dụng được nên ta xét trạng thái của pin
    this.setBattery=function (battery) {
        this.battery=battery;
    };
    // lấy thông tin về pin ( xét năng lương của battery)
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    //xet trạng thái của đèn:
    this.tunrOn=function () {
        this.status=true;
    };
    this.tunrOff = function () {
        this.status=false;
    };
    //xét đèn sáng
    this.light=function () {
        if (this.status){
            alert("Đèn Sáng")
        }else {
            alert("Đèn Tắt")
        }
    }
};

// Khởi Tạo Đối tượng Battery(pin)
let battery=new Battery();
// truyền năng lượng vào acho pin
battery.getEnergy(parseInt(prompt("Tạo Năng Lượng")));

//khởi tạo Đối tượng Đèn:
let flashLamp=new FlashLamp();
// truyền pin vào đèn
flashLamp.setBattery(battery);
document.write(flashLamp.getBatteryInfo()+"<br>");
flashLamp.light();
document.write("TunrON");
flashLamp.tunrOn();
flashLamp.light();
document.write(flashLamp.getBatteryInfo()+"<br>");
document.write("tunrOFF");
flashLamp.tunrOff();
flashLamp.light();