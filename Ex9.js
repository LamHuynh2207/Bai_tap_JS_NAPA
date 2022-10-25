/**
 * promise.all chỉ trả về khi tất cả đều thành công, chỉ cần 1 sự kiện
 * thất bại sẽ kết thúc luôn, nếu có 1 sự kiện thất bại còn các sự kiện 
 * khác thành công nhưng muốn nhận đầy đủ kết quả thì làm thế nào?
 * 
 * Có 3 sự kiện bất đồng bộ không biết thời gian hoàn thành
 * giả sử có 2 sự kiện thành công, 1 sự kiện thất bại
 * 
 * làm thế nào để thực thi 3 sự kiện này cùng 1 lúc, kết quả nhận được sẽ trả
 * về array chứa 3 kết quả thành công và thất bại
 * 
 * Chú ý: chỉ được sử dụng API promise.All kết hợp thêm với logic
 */

/**
Trong trường hợp này thay vì sử dụng Promise.all thì ta sẽ sử dụng Promise.allSettled

Phương thức trả về Promise luôn được resolve khi tất cả các mảng promise trả về ở 
trạng thái settled (kể cả là thành công hay thất bại), vì vậy sẽ không rơi vào case bị 
reject. Để phân biệt các giá trị trả về của từng promise thành công hay thất bại, kết 
quả của resolve sẽ trả về một array các object theo cấu trúc như sau:

Fulfilled promise trả về{status: 'fulfilled', value}

Rejected promise trả về {status: 'rejected', reason}
*/

//Ví dụ:

const allRejectedPromises = [
    Promise.reject('🍏 #1'),
    Promise.reject('🍏 #2'),
    Promise.reject('🍏 #3'),
  ]
  
  Promise.allSettled(allRejectedPromises)
    .then(badApples => 
      console.log(`We can't sell any of these apples...`, badApples))
    .catch(error => console.error('This should never occur'))
  
  const promisesWithoutReject = [
    Promise.resolve('🍎 #1'),
    '🍎 #2',
    new Promise((resolve, reject) => setTimeout(resolve, 100, '🍎 #3'))
  ]
  
  Promise.allSettled(promisesWithoutReject)
    .then(apples => console.log(`We can sell all these good apples`, apples.map(_=>_.value)))
  
  const promisesWithOneReject = [
    Promise.resolve('🍎 #1'),
    new Promise((_, reject) => setTimeout(reject, 10, '🍏 #2')),
    '🍎 #3',
    new Promise((_, reject) => setTimeout(reject, 100, '🍏 #4'))
  ]
  
  Promise.allSettled(promisesWithOneReject)
    .then(apples => {
      const badApples = apples.filter(apple => apple.status === 'rejected').map(_ => _.reason)
      const goodApples = apples.filter(apple => apple.status === 'fulfilled').map(_ => _.value)
  
      console.log(`Let's throw out`, badApples, `and sell the rest`, goodApples)
    })
  