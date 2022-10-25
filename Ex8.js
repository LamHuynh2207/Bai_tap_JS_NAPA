
//Phân biệt setImmediate vs process.nextTick

const a = () => { console.log('a') }
const b = () => { console.log('b') }

const main = () => {
    setImmediate(b);
    process.nextTick(a)
}

main()
//a
//b
//vì sao a lại gọi trước b
//Thêm: Tìm hiểu thêm lỗi Zalgo khi lập trình với 

/*
Tìm hiểu phương thức process.nextTick(): Bất cứ khi nào một hàng đợi hoạt động mới được khởi tạo, chúng ta có 
thể coi nó như một dấu tích mới. Phương thức process.nextTick() thêm hàm gọi lại vào đầu hàng đợi sự kiện tiếp theo. 
Cần lưu ý rằng, khi bắt đầu chương trình, phương thức process.nextTick() được gọi lần đầu tiên trước khi vòng lặp sự kiện được xử lý.

Cú pháp:
process.nextTick(callback);

Tìm hiểu phương thức setImmediate(): Bất cứ khi nào chúng ta gọi phương thức setImmediate(), hàm gọi lại của nó 
được đặt trong giai đoạn kiểm tra của hàng đợi sự kiện tiếp theo. Có một chi tiết nhỏ cần được lưu ý ở đây là phương 
thức setImmediate() được gọi trong giai đoạn thăm dò và các hàm gọi lại của nó được gọi trong giai đoạn kiểm tra.

Cú pháp:
setImmediate(callback);
*/

// Ví dụ: 

setImmediate(function A() {
	console.log("1st immediate");
});

setImmediate(function B() {
	console.log("2nd immediate");
});

process.nextTick(function C() {
	console.log("1st process");
});

process.nextTick(function D() {
	console.log("2nd process");
});

// First event queue ends here
console.log("program started");

/*
Trong hàng đợi sự kiện đầu tiên, chỉ "program started" được in.
Hàng đợi sự kiện thứ hai được bắt đầu và hàm C tức là gọi lại của phương thức process.nextTick() 
được đặt ở đầu hàng đợi sự kiện. C được thực thi và hàng đợi kết thúc.
Hàng đợi sự kiện trước đó kết thúc và hàng đợi sự kiện thứ ba được khởi tạo bằng lệnh gọi lại D. 
Sau đó, hàm gọi lại A của phương thức setImmdeiate () được đặt ở vị trí tiếp theo là B.
*/

/*
setImmdeiate() method đặt callback function của nó vào mục check của event loop. Nghĩa là
setImmdeiate() được gọi ở connections(poll) phase và call backfunction được invoke ở phần check
Vì thế khi chạy chương trình ở đầu bài process.nextTick(a) sẽ chạy đầu tiên trước event loop và in ra a trước
sau đó vào event loop đến phase poll thì setImmediate được gọi và callback function sẽ được thực hiện ở check phase
do đó b được in sau a.
*/

/*
Lỗi Zalgo xảy ra khi lập trình viên trộn lẫn synchronous call back với asynchronous call back trong control flow : if then else hoặc loop. 
Việc này khiến cho ứng dụng Node.js cực kỳ khó dự đoán thứ tự thực thi code. Đôi khi main thread bị chặn lại (block) để chạy synchronous call back , 
đôi khi thì không bị block và asynchronous call back được trả về sau đó. Minh họa luôn nhé:
*/

//Có lỗi Zalgo
function getData(useCache, callback) {
    var fun = " Hello World";
    if (useCache) {
        callback('cached data' + fun); //gọi synchronous call back
    } else {
        setTimeout(function(){  //Sử dụng setTimeout để giả lập một tác vụ dài, không blocking
            callback('loaded data' + fun);
        }, 1000);

    }
}

console.log("Do task A");
getData(true, function(data){  //thử thay đổi tham số true bằng false!
    processData(data);
});
console.log("Do task C");

function processData(data) {
    console.log('processData', data);
}

//Sửa lỗi Zalgo bằng process.nextTick
function getData(useCache, callback) {
    var fun = " Hello World";
    if (useCache) {
        process.nextTick(function(){
            callback('cached data' + fun);
        });
    } else {
        setTimeout(function(){
            callback('loaded data' + fun);
        }, 1000);

    }
}

console.log("Do task A");
getData(true, function(data){
    processData(data);
});
console.log("Do task C");

function processData(data) {
    console.log('processData', data);
}
