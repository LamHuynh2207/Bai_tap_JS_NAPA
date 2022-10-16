# Bai_tap_JS_NAPA
1. Phân biệt settimeout và setinterval
- Hàm setTimeout() dùng để thiết lập một khoảng thời gian nào đó sẽ thực hiện một nhiệm vụ nào đó và nó chỉ thực hiện đúng một lần.
  Cú pháp: setTimeout(function, time)
  Trong đó:
    + function: là nội dung cần thực hiện, đây là một hàm
    + time: là khoảng thời gian bao nhiêu (tính bằng mili giây) thì function đó sẽ thực hiện
  Một ví dụ đơn giản cho method này:
  <input type="button" name="sayHello" value="Wait for my Hello!"
  onclick="setTimeout('alert(\'Hello!\')', 4000)"/>
  Khi bạn click button "Wait for my Hello", method setTimeout sẽ được gọi. Biểu thức mà bạn muốn thực hiện sẽ được thực thi sau 4000 mili giây hay là 4 giây.
  Điểm lưu ý ở đây là setTimeout() sẽ không dừng việc thực thi các lệnh tiếp theo trong thời gian chờ. Nó chỉ lập lịch cho đoạn mã JavaScript được chỉ định sẽ thực thi   vào thời điểm được thiết lập trước đó. Sau khi gọi hàm setTimeout(), các lệnh tiếp tục chạy bình thường với timer chạy ở chế độ nền.
  
- Hàm setInterval() có cú pháp và chức năng giống như hàm setTimeout(), tuy nhiên với hàm setInterval() thì số lần thực hiện là mãi mãi.
Xem xét ví dụ sau:
  var myVar = setInterval(myTimer, 5000);
  function myTimer() {
    alert("Hello world!");
  }
  Với đoạn mã JavaScript trên cứ sau 5s sẽ xuất hiện hộp thoại hiển thị thông báo "Hello world!". Trên đây là ví dụ đơn giản về sử dụng hàm setInterval().
  
  Như vậy sự khác nhau giữa hàm setTimeout() và setInterval() là đối với hàm setTimeout() thì số lần thực hiện là 1 lần và đối với setInterval() thì số lần thực hiện sẽ là mãi mãi cho tới khi bạn sử dụng hàm clearInterval() để can thiệp vào. Vì vậy, nếu thời gian cần chính xác, thường xuyên hoặc một cái gì đó cần phải được thực hiện lặp lại sau những khoảng thời gian nhất định thì bạn nên sử dụng setInterval().
  
2. Phân biệt callback, promise, await async
- Callback có thể hiểu là một hàm được truyền vào hàm khác như một tham số. Khi ta gọi một tác vụ bất đồng bộ để thực hiện một hành động dài, sau khi hành động đó được thực hiện xong, có kết quả, thì hàm callback sẽ được gọi.
Ví dụ như hàm setTimeout() trong JS:
setTimeout(() => console.log("Tick"), 500);
Hàm setTimeout gọi một tác vụ dài là "dừng 0.5s", sau khi hành động dài được thực hiện (đã dừng 0.5s) thì hàm callback là () => console.log("Tick") sẽ được thực hiện là in ra "
 + Callback hell: callback là cách tiếp cận khá đơn giản khi xử lý bất đồng bộ, tuy nhiên hướng tiếp cận này sẽ gặp phải vấn đề là nếu các callback được gọi liên tục lồng nhau thì sẽ gặp phải hiện tượng callback hell như sau:
 const verifyUser = function(username, password, callback){ dataBase.verifyUser(username, password, (error, userInfo) => { if (error) { callback(error) }else{ dataBase.getRoles(username, (error, roles) => { if (error){ callback(error) }else { dataBase.logAccess(username, (error) => { if (error){ callback(error); }else{ callback(null, userInfo, roles); } }) } }) } }) };
 Hàm verifyUser thực hiện các tác vụ là xác thực user, lấy role của user  đó và ghi lại thời gian truy cập của user. Ta có thể thấy nếu việc thực hiện các callback liên tục thì code chúng ta sẽ  có dạng như sau gây cho việc đọc code rất khó khăn
 Và để khắc phục nhược điểm của callback hell, chúng ta sẽ đi qua 2 hướng tiếp cận khác để xử lý bất đồng bộ đó là Promise và Async/Await
- Promise là khái niệm xuất hiện ở ES2015 hay ES6 dùng để xử lý bất đồng bộ tương tự callback nhưng giúp ta tránh được hiện tượng callback hell ở trên. Promise dùng để xử lý bất đồng bộ của một tác vụ.
Một promise có 3 trạng thái:
  + Pending: Trạng thái khởi tạo của một promise khi bắt đầu tác vụ bất đồng bộ
  + Fulfilled: Tác vụ kết thúc, tác vụ thực hiện thành công và trả về giá trị
  + Rejected: Tác vụ kết thúc, tác vụ thực hiện thất bại, trả về Error object
Để tạo ra một promise ta dùng keyword new và kèm với nó là 2 hàm callback "resolve" và "reject" để xử lý kết quả trả về cũng như lỗi:
const condition = true; const promise = new Promise((resolve, reject) => { if(condition){ const returnData = "success" resolve(returnData) } else { reject(new Error("Failed")) } })
