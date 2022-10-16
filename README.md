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
  
