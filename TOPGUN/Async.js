function aaaa(xyz){
    console.log(xyz + 234);
}
/// และมี function สำหรับทำอะไรสั่กอย่าง และต้องการ function ส่งค่ากลับไปทำงานต่อ
function test( abc, callback){
    var a = abc + 789;
    callback( a ); // ตรงนี้จะเป็นเหมือนเรียกใช้  aaaa(a);
}
test (234, aaaa ); 









