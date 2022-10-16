# Bai_tap_JS_NAPA
1. Phân biệt settimeout và setinterval
- Hàm setTimeout() dùng để thiết lập một khoảng thời gian nào đó sẽ thực hiện một nhiệm vụ nào đó và nó chỉ thực hiện đúng một lần.
  Cú pháp: setTimeout(function, time)
  Trong đó:
    + function: là nội dung cần thực hiện, đây là một hàm
    + time: là khoảng thời gian bao nhiêu (tính bằng mili giây) thì function đó sẽ thực hiện
- Hàm setInterval() có cú pháp và chức năng giống như hàm setTimeout(), tuy nhiên với hàm setInterval() thì số lần thực hiện là mãi mãi.
Như vậy sự khác nhau giữa hàm setTimeout() và setInterval() là đối với hàm setTimeout() thì số lần thực hiện là 1 lần và đối với setInterval() thì số lần thực hiện sẽ là mãi mãi cho tới khi bạn sử dụng hàm clearInterval() để can thiệp vào.
