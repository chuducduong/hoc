

      /*
function show_my_name() {
    let my_name = prompt("ban ten gì"); 

   document.getElementById("name_placeholder").innerHTML = "xin chao" + my_name;
}

//đây là hàm tự định nghĩa ra , ở đây khi nhập tên vào ô và nhấn buttton thì kết quả sẽ hiện lên 
dòng chữ ở thẻ p
      */

function show_my_name() {
    let my_name = prompt("ban ten gì"); 
    document.write("xin chao" + my_name); /* những thẻ nào cũng cấp bên trong body thì nó xóa đi */
}