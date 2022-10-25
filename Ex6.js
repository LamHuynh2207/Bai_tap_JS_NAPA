// Liệt kê các phương pháp clone object, phân biện shallow clone và deepclone.
// Có phải trường hợp nào cũng nên dùng deep clone không và vì sao?

/*
Chúng ta sẽ có 4 cách chính để clone một Object đó là:

+ Sử dụng Spread,
+ Sử dụng Object.assign(),
+ Phương thức JSON,
+ Sử dụng thư viện bên thứ 3 – Lodash
*/

/*
1. Sử dụng Spread (nhóm Shallow Copy)
Spread là một tính năng rất mạnh mẽ trong ES6 (Một phiên bản của JavaScript được ra mắt vào năm 2015). 
Đây là một cách clone Object rất tiện lợi và được đông đảo lập trình viên sử dụng.
*/

const obj_1 = {
username: "Kim Lam",
getUsername() {
return this.username;
}
};

const obj_2 = {...obj_1};

obj_1.age = 10;

console.log("obj_2", obj_2); // {username: "Kim Lam", getUsername: ƒ}

/*
2. Sử dụng Object.assign() (nhóm Shallow Copy)
Đây được cho là cách xử lý clone object thông dụng của các thư viện và framework. Chúng ta hãy cùng xem một ví dụ dưới đây:
*/

const obj_3 = {
username: "Flora",
info: {
address: "lamhuynh2207@gmail.com"
},
getUsername() {
return this.username;
}
};

const obj_4 = Object.assign({}, obj_3);

obj_3.age = 10;

console.log("obj_4", obj_4); // {username: "Flora", info: {address: "lamhuynh2207@gmail.com"}, getUsername: ƒ}

/*
3. Sử dụng phương thức JSON (nhóm Deep Clone)
Khi sử dụng phương thức JSON để clone object JavaScript, chúng ta sẽ dùng 2 phương thức là parse() và stringify().

parse() được sử dụng khi ta muốn biến một String có format là json thành Object.

stringify() được sử dụng khi ta muốn chuyển một Object sang dạng JSON string.

Hiểu đơn giản, khi sử dụng phương thức này, đầu tiên nó sẽ biến Object thành JSON, sau đó parse sẽ biến đổi lại thành Object. 
Hãy cùng quan sát ví dụ bên dưới:
*/

const obj_5 = {
username: "ahihi",
info: {
address: "https://ahihi12345.com"
},
getUsername() {
return this.username;
}
};

const obj_6 = JSON.parse(JSON.stringify(obj_5));

obj_5.age = 10;

console.log("obj_6", obj_6); // {username: "ahihi", info: {address: "https://ahihi12345.com"}}

/*
4. Sử dụng thư viện bên thứ 3 – Lodash (nhóm Deep Clone)
Deep Clone và Shallow Copy lần lượt là ví dụ bên dưới.
*/

const _ = require("lodash");

const obj_7 = {
username: "lamhuynh",
info: {
address: "https://lamhuynh2207.com"
},
getUsername() {
return this.username;
}
};

const obj_8 = _.cloneDeep(obj_7);
const obj_9 = _.clone(obj_7);

obj_7.age = 10;
obj_7.info.address = "Not found";

console.log("obj_8", obj_8); // {username: "lamhuynh", info: {address: "https://lamhuynh2207.com"}, getUsername: ƒ}
console.log("obj_9", obj_9); // {username: "lamhuynh", info: {address: "Not found"}, getUsername: ƒ} 

/*
Việc sử dụng thư viện sẽ giúp tiết kiệm thời gian và số lượng code phải viết, tuy nhiên có một số trường hợp cũng gặp 
khó khăn khi bị lệ thuộc quá vào thư viện.
*/

/*
Shallow copying và Deep copying 

Shallow copying nhiệm vụ của nó chỉ copy những giá trị nông (theo như trả lời phỏng vấn) nghĩa là nó chỉ sao 
chép các giá trị đối tượng bình thường nhưng các giá trị lồng nhau vẫn sử dụng reference đến một đối tượng ban đầu.

Notes: reference type trong javascript tổng thể có 3 loại: Array, function và object. Chúng ta cùng nhau xem một 
ví dụ shallow copy object js khi sử dụng spread operator
*/

// Ví dụ:

const obj_10 = {a:1,b:2,c:{d:3}};
const shallowClone = {...obj_10};
obj_10.c.d = 34; // chúng ta thay đổi giá trị d của object gốc
console.log(obj_10); // kết quả cho chúng ta thấy {a:1,b:2,c:{d:34}} 
console.log(shallowClone); // nhưng object mà chúng ta clone ra cũng bị thay đổi theo {a:1,b:2,c:{d:34}}

/*
Qua ví dụ chúng ta thấy: Chúng ta thay đổi giá trị d của object gốc d = 34, nhưng object mà chúng ta clone ra 
cũng bị thay đổi theo {a:1,b:2,c:{d:34}}. Vì sao lại như vậy? Đơn giản đó là nó vẫn giữ những giá trị reference 
của object gốc là obj.

Giờ chúng ta qua deep copy. Nếu bạn hiểu shallow copy rồi thì deep copy đơn giản là cũng giống như clone 
shallow nhưng các giá trị reference trong object gốc không thay trong object clone
*/

// Ví dụ về deep clone sử dụng sử dụng JSON.parse() và JSON.stringify()

const obj_11 = {a:1,b:2,c:{d:3}};
const deepClone = JSON.parse(JSON.stringify(obj_11));
console.log(deepClone); // {a:1,b:2,c:3};

// Bây giờ chúng ta cũng tương tự làm như các trên update d = 34, thì chuyện gì xảy ra, xem tiếp

obj_11.c.d = 34;
console.log(obj_11); // {a:1,b:2,c:{d:34}}
console.log(deepClone); // {a:1,b:2,c:{d:3}}

//Ta thấy, khi update d = 34 thì object gốc đã thay đổi nhưng object clone thì không bởi vì nó không phải là 
// reference type của object gốc nữa rồi.

// Tuy nhiên không phải khi nào mình cũng nên dùng deep clone, thứ nhất vì nó phức tạp và object mình clone chỉ cần
// chuyển đến một nơi khác, ngoài ra sử dụng shallow clone có thể giúp đọc dể hiểu và dễ hình dung là đang làm gì với đoạn code của mình hơn.