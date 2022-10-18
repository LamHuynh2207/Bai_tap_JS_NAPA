# Bai_tap_JS_NAPA👋

<h1>1. Phân biệt settimeout và setinterval</h1>

- Hàm setTimeout() dùng để thiết lập một khoảng thời gian nào đó sẽ thực hiện một nhiệm vụ nào đó và nó chỉ thực hiện đúng một lần.

  Cú pháp: setTimeout(function, time)
  
  Trong đó:
  
    + function: là nội dung cần thực hiện, đây là một hàm
    + time: là khoảng thời gian bao nhiêu (tính bằng mili giây) thì function đó sẽ thực hiện
    
  Một ví dụ đơn giản cho method này:
  
  ```sh
  <input type="button" name="sayHello" value="Wait for my Hello!"
  onclick="setTimeout('alert(\'Hello!\')', 4000)"/>
  ```
  
  Khi bạn click button "Wait for my Hello", method setTimeout sẽ được gọi. Biểu thức mà bạn muốn thực hiện sẽ được thực thi sau 4000 mili giây hay là 4 giây.
  
  Điểm lưu ý ở đây là setTimeout() sẽ không dừng việc thực thi các lệnh tiếp theo trong thời gian chờ. Nó chỉ lập lịch cho đoạn mã JavaScript được chỉ định sẽ thực   thi vào thời điểm được thiết lập trước đó. Sau khi gọi hàm setTimeout(), các lệnh tiếp tục chạy bình thường với timer chạy ở chế độ nền.
  
- Hàm setInterval() có cú pháp và chức năng giống như hàm setTimeout(), tuy nhiên với hàm setInterval() thì số lần thực hiện là mãi mãi.
Xem xét ví dụ sau:

  ```sh
    var myVar = setInterval(myTimer, 5000);
    function myTimer() {
      alert("Hello world!");
    }
  ``` 
  
  Với đoạn mã JavaScript trên cứ sau 5s sẽ xuất hiện hộp thoại hiển thị thông báo "Hello world!". Trên đây là ví dụ đơn giản về sử dụng hàm setInterval().
  
  Như vậy sự khác nhau giữa hàm setTimeout() và setInterval() là đối với hàm setTimeout() thì số lần thực hiện là 1 lần và đối với setInterval() thì số lần thực       hiện sẽ là mãi mãi cho tới khi bạn sử dụng hàm clearInterval() để can thiệp vào. Vì vậy, nếu thời gian cần chính xác, thường xuyên hoặc một cái gì đó cần phải       được thực hiện lặp lại sau những khoảng thời gian nhất định thì bạn nên sử dụng setInterval().
  
<h1>2. Phân biệt callback, promise, await async</h1>

<h2>Callback</h2>

- Callback có thể hiểu là một hàm được truyền vào hàm khác như một tham số. Khi ta gọi một tác vụ bất đồng bộ để thực hiện một hành động dài, sau khi hành động đó được thực hiện xong, có kết quả, thì hàm callback sẽ được gọi.

Ví dụ như hàm setTimeout() trong JS:

  ```sh
  setTimeout(() => console.log("Tick"), 500);
  ```
 
Hàm setTimeout gọi một tác vụ dài là "dừng 0.5s", sau khi hành động dài được thực hiện (đã dừng 0.5s) thì hàm callback là () => console.log("Tick") sẽ được thực hiện là in ra "

- Callback hell: callback là cách tiếp cận khá đơn giản khi xử lý bất đồng bộ, tuy nhiên hướng tiếp cận này sẽ gặp phải vấn đề là nếu các callback được gọi liên tục lồng nhau thì sẽ gặp phải hiện tượng callback hell như sau:
 
  <p align="center">
    <img width="320" alt="image" src="https://user-images.githubusercontent.com/89515609/196026001-f9f4cd59-aee1-4959-86c9-001c39c7ac89.png">
  </p>

  Hàm verifyUser thực hiện các tác vụ là xác thực user, lấy role của user  đó và ghi lại thời gian truy cập của user. Ta có thể thấy nếu việc thực hiện các callback   liên tục thì code chúng ta sẽ  có dạng như sau gây cho việc đọc code rất khó khăn
 
  Và để khắc phục nhược điểm của callback hell, chúng ta sẽ đi qua 2 hướng tiếp cận khác để xử lý bất đồng bộ đó là Promise và Async/Await
  
<h2>Promise</h2>  
 
- Promise là khái niệm xuất hiện ở ES2015 hay ES6 dùng để xử lý bất đồng bộ tương tự callback nhưng giúp ta tránh được hiện tượng callback hell ở trên. Promise dùng để xử lý bất đồng bộ của một tác vụ.

Một promise có 3 trạng thái:

    + Pending: Trạng thái khởi tạo của một promise khi bắt đầu tác vụ bất đồng bộ
    + Fulfilled: Tác vụ kết thúc, tác vụ thực hiện thành công và trả về giá trị
    + Rejected: Tác vụ kết thúc, tác vụ thực hiện thất bại, trả về Error object
  
Để tạo ra một promise ta dùng keyword new và kèm với nó là 2 hàm callback "resolve" và "reject" để xử lý kết quả trả về cũng như lỗi:

  <p align="center">
  <img width="291" alt="image" src="https://user-images.githubusercontent.com/89515609/196026057-e33d1faa-bdef-4f33-80b7-96fe72433b6d.png">
  </p>

Sử dụng promise bằng cách sử dụng hàm "then" và "catch"

   <p align="center">
   <img width="319" alt="image" src="https://user-images.githubusercontent.com/89515609/196026367-05e995b5-d2af-4d6a-9546-8659d72a8c0b.png">
   </p>
   
<h2>Asyn/Await</h2>

Asyn/await là bước tiến hoá tiếp theo trong việc xử lý bất đồng bộ trong JS, được giới thiệu trong ES2017.

Async function là hàm trả về một promise. Nếu hàm trả về giá trị thì promise sẽ resolve với giá trị đó, nếu hàm async trả về lỗi thì promise sẽ reject. Ta xét ví dụ sau:

  <p align="center">
  <img width="307" alt="image" src="https://user-images.githubusercontent.com/89515609/196026496-34c806f1-4e6b-4ed4-862f-e195ce7f3f96.png">
  </p>
  
  và
  
  <p align="center">
  <img width="289" alt="image" src="https://user-images.githubusercontent.com/89515609/196026560-e559ad8d-de3a-4941-bdf1-7ee9c5f4cad8.png">
  </p>

  Await là từ khoá được sử dụng bên trong hàm async để đảm bảo tất cả các promise bên trong async function trở nên đồng bộ.
  
<h1>3. Callback hell là gì?</h1>

Như ta đã biết, hàm callback được thực thi bên trong 1 hàm khác, nếu ta tiếp tục có hàm callback bên trong một callback khác thì thế nào? Vòng lặp vô tận “callback bên trong callback bên trong callback … ” sẽ có khả năng xảy ra. Điều này được gọi là callback hell – địa ngục callback, ta sẽ rất hay gặp vấn đề này trong khi xử lí các lệnh bất đồng bộ, kiểu như:

  ```sh
  p_client.open(function(err, p_client) {
     p_client.dropDatabase(function(err, done) {
        p_client.createCollection('test_custom_key', function(err, collection) {
           collection.insert({'a':1}, function(err, docs) {
              // ...
              // và nhiều callback nữa
           });
        });
     });
  });
  ```
  
  Khi callback hell xuất hiện, logic xử lí của chương trình sẽ trở nên cực kì phức tạp và khó nắm bắt, khi có lỗi xảy ra ta rất khó để debug cũng như giải quyết.

  Bên cạnh đó, callback hell cũng làm cho tính thẩm mĩ của code giảm đi đáng kể, khó đọc, khó maintain.
  
<h1>4. Promise hell là gì?</h1>

Tuy nói Promise giúp tổ chức code, và tránh callback hell, nhưng nếu viết code không rõ ràng thì anh em vẫn rơi vào Promise Hell. Do đó lúc nào chúng ta cũng phải cleancode.

Promise Hell

  ```sh
  muon_sach_thu_vien()
      .then(function(sach){
        return muon_sach(sach)
          .then(function(sach_da_muon){
            return doc_sach(sach_da_muon)
              .then(function(){
                return tra_sach();
              })
          })
      })
  ```

Viết lại thành Cleancode

```sh
muon_sach_thu_vien()
    .then(muon_sach)
    .then(doc_sach)
    .catch(console.error.bind(console));
```

<h1>5. Phân biệt let vs const? Trường hợp object thì như thế nào?</h1>
 
 Trong JavaScript có 2 loại scope: function-scope và block-scope.
 
 Function-scope
 
  ```sh
   function myFn() {
    var foo = 'peekaboo!';

    console.log(foo); // 'peekaboo!'
  }

  console.log(foo); // ReferenceError: foo is not defined
  ```
  
  Nếu sử dụng var thì phạm vi trong các biến sẽ có bị giới hạn trong function. Khi bạn gọi các biến này ở ngoài function sẽ nhận được thông báo lỗi như trên
  
  Block-scope
  
  ```sh
    if (true) {
    var foo = 'peekaboo!';
    let bar = 'i see u';
    const baz = 'baby blue!';

    console.log(foo); // 'peekaboo!';
    console.log(bar); // 'i see u';
    console.log(baz); // 'baby blue!';
  }

  console.log(foo); // 'peekaboo!';
  console.log(bar); // ReferenceError: bar is not defined
  console.log(baz); // ReferenceError: baz is not defined
  ```
  
  foo không bị giới hạn bởi if-statement block. Tuy nhiên bar và baz thì bị giới hạn bởi block

Đó chính là sự khác biệt giữa let, const và var

Một block là đoạn code nằm trong dấu {} trong JavaScript.

- let cũng có thể thay đổi giá trị của biến nhưng cú pháp nó nghiêm ngặt hơn 

- Từ khóa const là viết tắt của từ constant. Nó cũng giống như let, nhưng tuy nhiên là const không thể reasign giá trị

Nói chung, nếu bạn cần tạo một biến, sử dụng const. Tuy nhiên, nếu bạn biết hoặc nghĩ rằng bạn sẽ cần gán lại nó (vòng lặp for, câu lệnh chuyển đổi, hoán đổi thuật toán) hãy sử dụng let.
  
<h2>Object</h2>

Object trong JavaScript là một khái niệm trừu tượng dùng để biểu diễn một vật thể (cụ thể). Trong đó, các thuộc tính dùng để miêu tả đặc điểm, tính chất của đối tượng. Ví dụ mình cần tạo ra một đối tượng Car. Cách 1: Sử dụng từ khóa new Object() <code>var Car = new Object();</code> Cách 2: Sử dụng từ khóa {} <code>var Car = {};</code>

Mỗi đối tượng sẽ có các thuộc tính và phương thức.

<h3>Thuộc tính</h3>

Thuộc tính là những đặc điểm (có thể hiểu là biến) cần lưu trữ trong một đối tượng. Ví dụ với đối tượng Car thì có một số thuộc tính sau:

+ Type
+ Model
+ Color

Lúc này ta có thể khai báo bằng ba cách.

Cách 1: Sử dụng từ khóa new Object()

  ```sh
  // Khởi tạo
  var Car = new Object();
  ```
  
  ```sh
  // Thêm thuộc tính
  Car.type = '';
  Car.model = '';
  Car.color = '';
  ```

Cách 2: Sử dụng từ khóa {} và thêm thuộc tính ngay lúc khai báo

  ```sh
  // Khởi tạo
  var Car = {
      type : "",
      model : "",
      color : ""
  };
  ```

Cách 3: Sử dụng từ khóa {} và thêm thuộc tính sau đó

  ```sh
  // Khởi tạo
  var Car = {};
  ```
  
  ```sh
  // Thêm thuộc tính
  Car.type = '';
  Car.model = '';
  Car.color = '';
  ```
  
Trong ba cách trên thì mình khuyến khích các bạn nên sử dụng cách thứ hai bởi vì nó mạch lạc và dễ quản lý code hơn.

<h3>Phương thức</h3>

Phương thức là những hành động (có thể hiểu là hàm) của đối tượng. Ví dụ trong đối tượng Car thì mình cần hai phương thức là:

addCar() deleteCar() Lúc này ta sẽ có ba cách khai báo tương tự như cách khai báo thuộc tính.

Cách 1: Sử dụng từ khóa new Object()

  ```sh
  // Khởi tạo
  var Car = new Object();
  ```
  
  ```sh
  // Thêm phương thức
  Car.addCar = function(){
    console.log("This function add car");
  };
  ```
  
  ```sh
  Car.deleteCar = function(){
      console.log("This function delete car");
  };
  ```
  
Cách 2: Sử dụng từ khóa {} và thêm phương thức ngay lúc khai báo

  ```sh
  // Khởi tạo
  var Car = {
      addCar : function(){
          console.log("This function add car");
      },
      deleteCar : function(){
          console.log("This function delete car");
      }
  };
  ```
  
Cách 3: Sử dụng từ khóa {} và thêm phương thức sau đó

  ```sh
  // Khởi tạo
  var Car = {};
  ```
  
  ```sh
  // Thêm phương thức
  Car.addCar = function(){
     console.log("This function add car");
  };
  ```
  
  ```sh
  Car.deleteCar = function(){
      console.log("This function delete car");
  };
  ```
  
Mình thì hay dùng cách thứ 2 vì thấy cách này viết rất rõ ràng, mạch lạc.

<h1>6. Sự khác nhau giữa forEach, filter, map, every, some, reduce, for</h6>

<h2>forEach</h2>

+ Phương thức forEach() gọi một hàm cho mỗi phần tử trong một mảng.
+ Phương thức forEach() không được thực thi cho các phần tử trống.

Ví dụ:

Gọi một hàm cho mỗi phần tử trong trái cây:

```sh
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
```

<h2>filter</h2>

+ Phương thức filter() tạo một mảng mới chứa đầy các phần tử vượt qua bài kiểm tra do một hàm cung cấp.
+ Phương thức filter() không thực thi chức năng cho các phần tử trống.
+ Phương thức filter() không thay đổi mảng ban đầu.

Ví dụ:

Trả về một mảng tất cả các giá trị trong độ tuổi [] từ 18 trở lên:

```sh
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
```

<h2>map</h2>

+ map() tạo một mảng mới từ việc gọi một hàm cho mọi phần tử của mảng.
+ map() gọi một hàm một lần cho mỗi phần tử trong một mảng.
+ map() không thực thi chức năng cho các phần tử trống.
+ map() không thay đổi mảng ban đầu.

Các ví dụ: 

Trả về một mảng mới với căn bậc hai của tất cả các giá trị phần tử:

```sh
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
```

Nhân tất cả các giá trị trong một mảng với 10:

```
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
```

<h2>every</h2>

+ Phương thức every() thực thi một hàm cho mỗi phần tử mảng.
+ Phương thức every() trả về true nếu hàm trả về true cho tất cả các phần tử.
+ Phương thức every() trả về false nếu hàm trả về false cho một phần tử.
+ Phương thức every() không thực thi chức năng cho các phần tử trống.
+ Phương thức every() không thay đổi mảng ban đầu.

Ví dụ:

Kiểm tra xem tất cả các giá trị trong độ tuổi [] trên 18 tuổi chưa:

```sh
const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}
```

<h2>some</h2>

+ Phương thức some() kiểm tra xem có bất kỳ phần tử mảng nào vượt qua kiểm tra hay không (được cung cấp dưới dạng một hàm gọi lại).
+ Phương thức some() thực thi hàm gọi lại một lần cho mỗi phần tử mảng.
+ Phương thức some() trả về true (và dừng) nếu hàm trả về truecho một trong các phần tử của mảng.
+ Phương thức some() trả về false nếu hàm trả về false cho tất cả các phần tử của mảng.
+ Phương thức some() không thực thi hàm cho các phần tử mảng trống.
+ Phương thức some() không thay đổi mảng ban đầu.

Ví dụ:

Kiểm tra xem có giá trị nào trên 18 không:

```sh
const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
```

<h2>reduce</h2>

+ Phương thức reduce() này thực thi một hàm rút gọn cho phần tử mảng.
+ Phương thức reduce() trả về một giá trị duy nhất: kết quả tích lũy của hàm.
+ Phương thức reduce() không thực thi hàm cho các phần tử mảng trống.
+ Phương thức reduce() không thay đổi mảng ban đầu.

Các ví dụ:

Trừ tất cả các số trong một mảng:

```sh
const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
```

Làm tròn tất cả các số và hiển thị tổng:

```sh
const numbers = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}
```

<h2>for</h2>

Câu lệnh for tạo một vòng lặp với 3 biểu thức tùy chọn:

```sh
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

Biểu thức 1 được thực hiện (một lần) trước khi khối mã thực thi.

Biểu thức 2 xác định điều kiện để thực thi khối mã.

Biểu thức 3 được thực hiện (mọi lúc) sau khi khối mã đã được thực thi.

Ví dụ:

```sh
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```
Từ ví dụ trên, có thể thấy:

Biểu thức 1 đặt một biến trước khi vòng lặp bắt đầu (cho i = 0).

Biểu thức 2 xác định điều kiện để chạy vòng lặp (i phải nhỏ hơn 5).

Biểu thức 3 tăng một giá trị (i++) mỗi khi khối mã trong vòng lặp được thực thi.

<h1>7. Các phương pháp clone object?</h1>

<h2>1. Sử dụng Spread</h2>

```sh
const food = { corn: '🌽', bacon: '🥓' };

const cloneFood = { ...food };

console.log(cloneFood); 
// { corn: '🌽', bacon: '🥓' }
```

Sử dụng Spread sẽ giúp ta clone Obj. Lưu ý khi sử dụng nó bạn có thể cần phải compile cùng với Babel

<h2>2. Sử dụng Object.assign</h2>

```sh
const food = { corn: '🌽', bacon: '🥓' };

const cloneFood = Object.assign({}, food);

console.log(cloneFood);
// { corn: '🌽', bacon: '🥓' }
```

Ngoài IE huyền thoại thì Object.assign support hầu như đầy đủ, Object.assign nằm trong bản phát hành chính thức và ta có thể dùng nó để clone 1 Obj nhanh chóng.

<h2>3. Sử dụng JSON</h2>

```sh
const food = { corn: '🌽', bacon: '🥓' };

const cloneFood = JSON.parse(JSON.stringify(food))

console.log(cloneFood); 
// { corn: '🌽', bacon: '🥓' }
```

<h1>8. Phân biệt giá trị và địa chỉ của biến?</h1>

Biến dùng để lưu trữ giá trị các dữ liệu, hay các đối tượng. Giá trị của biến tùy bạn thay đổi trong quá trình chương trình làm việc để đáp ứng yêu cầu riêng của bạn.

Trong JavaScript có hai kiểu khai báo biến là let và var.

+ Biến cục bộ (local variable): Biến này chỉ có hiệu lực trong hàm (khối lệnh) nó khai báo (sang bài hàm mình sẽ nói rõ hơn), khi ra khỏi hàm nó sẽ hết hiệu lực.
+ Biến toàn cục (global variable): Biến có hiệu lực toàn bộ code, có thể truy cập ở bất kỳ đâu. Biến này không khai báo trong hàm mà khai báo bên ngoài.

+ Khi ta khai báo biến, biến sẽ được lưu trong ram, nơi lưu trữ đó có địa chỉ của biến đó, và địa chỉ của biến sẽ lưu thông tin của biến.
+ Đối với kiểu dữ liệu nguyên thủy, khi ta chỉnh sửa thông tin ở biến đó ta sẽ truy cập tới địa chỉ là số thông tin ban đầu và cập nhật lại giá trị mới.
+ Đối với kiểu dữ liệu tham chiếu, khi tạo biến, địa chỉ của biến đó chỉ sẽ có giá trị là undefined, khi biến được gán giá trị, giá trị đó sẽ được lưu ở một địa chỉ khác và biến sẽ lưu lại địa chỉ của giá trị.

<h1>9. Javascript có bao nhiêu kiểu dữ liệu?</h1>

JavaScript có 8 kiểu dữ liệu cơ bản, trong đó, có 7 kiểu dữ liệu nguyên thủy (boolean, null, undefined, number, BigInt, string, symbol) và 1 kiểu dữ liệu dạng tham chiếu (object).

+ Kiểu dữ liệu nguyên thủy: là kiểu dữ liệu mà giá trị không thể thay đổi được. Đây là kiểu dữ liệu ứng với "level thấp nhất" của ngôn ngữ lập trình.

+ Kiểu dữ liệu tham chiếu (object): là tập hợp của các thuộc tính (key) và giá trị (value). Mà số lượng các key có thể thay đổi, giá trị ứng với key cũng có thể thay đổi. Do đó, giá trị của kiểu dữ liệu tham chiếu có thể thay đổi được.

<h2>Kiểu dữ liệu boolean (kiểu logic)</h2>

Boolean là kiểu dữ liệu logic chỉ bao gồm hai giá trị là true (đúng, chính xác) và false (sai, không chính xác), ví dụ:

```sh
let isWebLoaded = true; // => Trang web đã được tải xong
console.log(isWebLoaded); // true

let isProgramRunning = false; // Chương trình đang không chạy
console.log(isProgramRunning); // false
```

<h2>Kiểu dữ liệu null</h2>

Kiểu dữ liệu null là một kiểu dữ liệu đặc biệt, chỉ bao gồm một giá trị là null, ví dụ:

```sh
let language = null;
console.log(language); // null
```

Trong ví dụ trên, biến language được hiểu là không biết giá trị hoặc không có giá trị.

<h2>Kiểu dữ liệu undefined</h2>

Cũng tương tự như null, undefined là một kiểu dữ liệu đặc biệt trong JavaScript, chỉ bao gồm một giá trị undefined, ví dụ:

```sh
let language = undefined;
console.log(language); // undefined
```

Kiểu dữ liệu undefined có nghĩa là giá trị chưa được gán.

<h2>Kiểu dữ liệu number</h2>

Kiểu dữ liệu number là kiểu dữ liệu dạng số (tương tự trong toán học). Number trong JavaScript không có cú pháp gì đặc biệt. Bạn chỉ cần viết số ra.

JavaScript có hai loại số là: số nguyên và số thực.

```sh
let n1 = 66; // số nguyên dương
let n2 = -66; // số nguyên âm
let n3 = 3.14; // số thực dương
let n4 = -3.14; // số thực âm
let n5 = 2e3; // => 2*10^3 = 2000
let n6 = 2e-3; // => 2*10^(-3) = 0.002
let n7 = 0xff; // số dạng hexa (hệ cơ số 16): 15*16 + 15 = 255
let n8 = 067; // số dạng octa (hệ cơ số 8): 6*8 + 7 = 55
let n9 = 0b11; // số dạng nhị phân (hệ cơ số 2): 1*2 + 1 = 3
```

<h2>Kiểu dữ liệu BigInt</h2>

Trong JavaScript, kiểu dữ liệu number không thể biểu diễn một số nguyên lớn hơn (253-1) (bằng 9007199254740991) và nhỏ hơn -(253-1).

Với hầu hết các trường hợp, việc sử dụng kiểu dữ liệu number là quá đủ. Nhưng đôi khi, bạn vẫn cần biểu diễn và tính toán với những số nguyên cực kỳ lớn. Do đó, kiểu dữ liệu BigInt ra đời nhằm giải quyết vấn đề này.

Để biểu diễn số nguyên với kiểu BigInt, bạn chỉ cần thêm chữ cái n ở phía sau, ví dụ:

```sh
const reallyBigNumber = 12345678987654321012345678987654321n;
console.log(reallyBigNumber); // 12345678987654321012345678987654321n
```

<h2>Kiểu dữ liệu string</h2>

String là kiểu dữ liệu dùng để biểu diễn chữ, văn bản, đoạn văn bản,...

Có ba cách để biểu diễn string trong JavaScript:

Dùng dấu nháy đơn (')
Dùng dấu nháy kép (")
Dùng dấu "backtick" (`)

Ví dụ:

```sh
const msg1 = 'Đây là string dùng dấu nháy đơn';
const msg2 = "Đây là string dùng dấu nháy kép";
const msg3 = `Đây là string dùng dấu backtick`;
```

Dấu nháy đơn và dấu nháy kép là hoàn toàn giống nhau.

<h2>Kiểu dữ liệu symbol</h2>

Symbol là một kiểu dữ liệu nguyên thủy dùng để tạo ra các giá trị duy nhất (unique value) và bất biến (immutable). Symbol thường được dùng làm key cho kiểu dữ liệu object sau đây.

<h2>Kiểu dữ liệu object</h2>

Object là kiểu dữ liệu tham chiếu. Có thể hiểu object là một tập hợp gồm các cặp key - value (khóa - giá trị).

Trong đó, kiểu dữ liệu của key có thể là string hoặc symbol. Và value ứng với key có thể là bất kỳ kiểu dữ liệu nào.

<h1>10. Làm thế thế nào để kiểm tra Object có empty hay không?</h1>

Để kiểm tra object là empty trong ES6, mình sử dụng phương thức Object.keys(). Phương thức này trả về một mảng chứa tất cả các thuộc tính enumerable của object.

Nếu kết quả trả về là mảng rỗng thì suy ra object đó không chứa thuộc tính enumerable nào.

Ví dụ sử dụng Object.keys():

```sh
const a = {},
  b = { x: 1 },
  c = { m: "a", n: "b" };

console.log(Object.keys(a)); // []
console.log(Object.keys(b)); // ["x"]
console.log(Object.keys(c)); // ["m", "n"]
```

Bây giờ, mình sẽ viết hàm kiểm tra object có empty hay không như sau:

```sh
const isEmpty = (v) => {
  return Object.keys(v).length === 0;
};
```

Kiểm tra lại hàm isEmpty():

```sh
const a = {},
  b = { x: 1 },
  c = { m: "a", n: "b" };

console.log(isEmpty(a)); // true
console.log(isEmpty(b)); // false
console.log(isEmpty(c)); // false
```

Kết quả lần này lại đúng như mong đợi.

<h1>11. Các phương thức để nối 2 mảng?</h1>

+ Phương pháp 1: Nối các phần tử vào một mảng hiện có bằng Array.prototype.push()
+ Phương pháp 2: Nối các phần tử vào một mảng mới bằng Array.prototype.push()
+ Phương pháp 3: Sử dụng prototype concat()
+ Phương pháp 4: Sử dụng toán tử spread (…)

<h1>12. Arrow function là gì? So sánh arrow func vs express func</h1>

Arrow function - còn được gọi là "fat arrow", là cú pháp được mượn từ CoffeeScript (một ngôn ngữ chuyển tiếp), cú pháp này là cách ngắn gọn hơn dùng để viết function. Ở đây sử dụng kí tự =>, trông giống như một mũi tên "béo". Arrow function là một hàm vô danh và nó thay đổi cách this bind đến function. Arrow function làm code của ta trông ngắn gọn hơn, giúp đơn giản hóa function scoping cũng như từ khóa this. Arrow function hoạt động tương tự như Lambdas trong các ngôn ngữ khác như C # hay Python. Bằng cách sử dụng arrow function, chúng ta tránh được việc phải gõ từ khoá function, return và dấu ngoặc nhọn.

Ví dụ:

```sh
let myFunction = (a, b) => a * b;
```

<h2>So sánh arrow func vs express func</h2>

<h3>Giống nhau</h3>

Arrow function và function đều là function.

<h3>Khác nhau cơ bản</h3>

+ Cú pháp

  Arrow function sử dụng kí tự =>:

  ```sh
  let sayHi = () => {
    console.log("Hi");
  }
  sayHi();
  // => Hi
  ```
  
  Function sử dụng từ khoá function:
  
  ```sh
  let sayHi = function() {
    console.log("Hi");
  }
  sayHi();
  // => Hi
  ```
  
+ Arrow function thường ngắn gọn hơn function
+ Arrow function không bind this
+ Arrow function không bind arguments
+ Arrow function không phù hợp làm method cho object
+ Arrow function không thể sử dụng làm hàm constructor
+ Arrow function không có thuộc tính prototype
+ Arrow function không được hoisted

<h1>13. Spread operator dùng để làm gì?</h1>

ES6 cung cấp một toán tử mới gọi là spread operator bao gồm ba dấu chấm (...). Spread operator cho phép bạn trải ra các phần tử của một đối tượng có thể lặp lại, chẳng hạn như một array, map hoặc set.

Spread operator có rất nhiều các chức năng hữu dụng khác giúp code của chúng ta ngắn gọn và dễ nhìn hơn rất nhiều, có thể kể đến như:

+ Copying an array

  Có lẽ đây là một trong những cách sử dụng phổ biến nhất của Spread Operator javascript.

  ```sh
  let arr = [1,2,3,4]
  let copy = [...arr]
  // copy is [ 1, 2, 3, 4 ]
  ```
  
+ Concatenate arrays

  Dựa trên ví dụ trước, bạn có thể tạo ra một new array thông qua nhiều array cho trước.

  ```sh
  let arr1 = [1,2,3,4]
  let arr2 = [5,6,7,8]
  let concat = [...arr1, ...arr2]
  // concat is [ 1, 2, 3, 4, 5, 6, 7, 8 ]
  ```

+ Copy an object

  Cũng giống như ví dụ về array ở phần 1 thì object cũng tương tự

  ```sh
  let obj = {a: 1, b: 2, c: 3}
  let copy = {...obj}
  // copy is {a: 1, b: 2, c: 3}
  ```

+ Merge object

  Giờ đây khi Merge object chúng ta sẽ không cần đến sử dụng cách cũ concat(). Mà bạn có thể thực hiện nhanh chóng hơn với spread trong javascript.

  ```sh
  let obj1 = {a: 1, b: 2, c: 3}
  let obj2 = {d: 4, e: 5, f: 6}

  let merge = {...obj1, ...obj2}
  // merge is {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
  ```
  
+ Bonus - An Error!

  Mặc dù thực tế rằng spread operator trải đều hoạt động trên cả array và object, bạn không thể trộn và khớp các loại dữ liệu này với nhau. Như ví dụ dưới đây.
  
  ```sh
  let obj = {a:1, b:2, c:3}
  let copy = [...obj] // this won't work!
  Using Spread Operator in logging
  ```
  
+ Ngoài ra chúng ta có thể sử dụng spread opertor dể loop trong logging.

  ```sh
  let fruits = ['🍈', '🍉', '🍋', '🍌'];
  console.log(...fruits); //🍈 🍉 🍋 🍌
  ```
  
<h1>14. Con trỏ this là gì? Phân biệt call, bind, apply?</h1
  
Trong javascript, chúng ta dùng từ khóa this để đại diện cho một đối tượng (Object). Đối tượng đó là chủ thế của ngữ cảnh, hoặc là chủ thế của code đang được chạy.

Ví dụ:

```sh
var person = {
  firstName: 'Lam',
  lastName: 'Huynh',
  showName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};

//Ở đây this sẽ là object person
person.showName(); //Lam Huynh
```

+ Điều quan trọng nhất cần nhớ : This trả về object gần nhất chứa nó
+ Nếu this đứng 1 mình (tức global, không nằm trong method hay function nào) thì sẽ trả về "window obj"
+ Trong method : This trả về obj chứa method đó
+ Trong function với strict mode : This trả về "undefined"
+ Trong function không phải strict mode: This trả về "window obj"
+ Trong 1 event : This trả về element mà event đó tác động vào.
  
<h2>call</h2>

Gọi hàm và cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy (Comma)

```sh
function.call(thisArg, arg1, arg2, ...)
```

<h2>apply</h2>

Gọi hàm và cho phép bạn truyền vào một object và các đối số thông qua mảng (Array)

```sh
fun.apply(thisArg, [argsArray])
```

<h2>bind</h2>

Trả về một hàm số mới, cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy.

```sh
var newFunction = fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

+  Nhìn chung, hàm call và apply là gần giống nhau. Chúng đều gọi hàm trực tiếp. Chỉ khác ở cách truyền tham số vào (với call thì đối số phân cách bởi dấu phẩy comma và với apply thì đối số cho bởi mảng array)
+  Hàm bind thì hơi khác hơn một chút. Hàm này không gọi hàm trực tiếp mà nó sẽ trả về một hàm mới. Và bạn có thể sử dụng hàm số mới này sau. Về cách truyền tham số vào thì nó giống với hàm call.

<h1>15. Nodejs là single thread hay multiple thread?</h1>

Nodejs vừa là single thread và multiple thread.

Nodejs chạy mã JavaScript trong một luồng duy nhất, có nghĩa là mã của bạn chỉ có thể thực hiện một tác vụ tại một thời điểm. Tuy nhiên, bản thân Nodejs là đa luồng và cung cấp các luồng ẩn thông qua thư viện libuv, nơi xử lý các hoạt động I / O như đọc tệp từ đĩa hoặc các yêu cầu mạng.
