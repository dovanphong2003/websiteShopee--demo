/* kiến thức trong java-script 
khi hết 1 nội dung nên dùng dấu ;
để tạo 1 biến trong js chúng ta sử dụng var <tên biến>, ví dụ : var iLoveYou
alert : để thông báo, cú pháp : alert ('nội dung cần thông báo, hoặc thể tên biến')
1. số hàm built-in
    1) alert : để hiện lên thông báo, cách dùng : alert ('tên hàm');
    2) console : chứa nhiều hàm bên trong để in ra những dòng thông báo trên tab console trên trình duyệt, cách dùng : console.log(cái bạn muốn in ra).
    3) confirm : để xác nhận, khi dùng confirm sẽ hiện nên thông báo và kèm theo yes no, cách dùng : confirm ('xac nhan ban du tuoi');
    4) prompt :  cũng là để xác nhận, kèm theo yes no và thêm 1 thanh input để nhập gì đó, cách dùng : prompt ('xac nhan...');
    5) set timeout : sẽ là cho 1 nội dung gì đó được chạy sau 1 khoảng thời gian ( tính bằng mini giây)
                    cách dùng :setTimeout( function() {
                            nội dung được chạy, ví dụ : alert ('hello cac ban nho');
                    } , <ghi thời gian > ví dụ : 1000   )
    6) set interval : sẽ là cách 1 khoảng thời gian nào đó lại chạy 1 lần. cú pháp như setTimeout
2. các loại toán tử : 
    1) toán tử số học( + - * / ): ví dụ : var a = 1 + 2 ;
    2) toán tử gán (gán cái gì đó) : ví dụ : var fullName = 'Do Van Phong';
    3) toán tử gán : ví dụ : var a = 1;
                             var b = 2;
            các dấu : == (bằng), > (lớn hơn), < (nhỏ hơn), >= (lớn hơn hoặc bằng)
                        if (a > b ) {
                            alert('Dung');
                        }
    4) toán tử logic(&& ( và ) || ( hoặc ) ) : ví dụ :
                        var a = 1;
                        bar b = 2;
                    if ( a > 0 && b > 0 ) {
                        alert {
                            'a & b lon hon 0'
                        }
                    }
3. đi sâu vào hơn :
    1) toán tử số :
        ** : lũy thừa
        % : chia lây số dư, ví dụ : 10 % 3 = 1
        ++ : tăng 1 giá trị số
        -- : giảm 1 giá trị số
    2) toán tử gán : kết hợp viết tắt khi thực hiện toán tử :
                    ví dụ : a **= b --> nghĩa là : a = a**b. ví dụ a = 3, b = 2 sau khi chạy câu lệnh a sẽ = 9.
        nếu toán tử số thì sẽ thành kết quả, còn toán tử + 2 chữ thì sẽ viết liền nhau, nấu cách : ' ' ;
4. prefix và postfix : tiền tố và hậu tố, tiền tố là tăng giá trị trước khi thực thi toán hạng, hậu tố là tăng giá trị sau khi thực thi toán hạng 
5. kiểu dữ liệu boolean ( đúng hoặc sai : true và false)
6. kiểu dữ liệu trong javascript
    1) kiểu dữ liệu nguyên thủy :
        number : 1,2,3...;
        string : chuôi kí tự, ví dụ : var fullName = 'Do Van Phong' ;
        boolean : true hoặc falsem kiểu boolean thường đi với is, ví dụ : var isSuccess = true ;
        undefined : là khi đặt biến mà không khai báo giá trị, ví dụ : var hello ;
        null : là không có gì, ví dụ : var isNull = null;
        symbol : có tính duy nhất, ví dụ : var id = Symbol('id');
    2) kiểu dữ liệu phức tạp : 
        function : tạo ra hàm và lưu vào vùng nhớ, ví dụ : var myFunction = function() {
            alert('Hi. Xin chao cac ban');
        }, ví dụ ghi như trên thì đoạn code sẽ không được chạy mà phải gọi function ra mới chạy được, gọi : myFunction();
        object type : để luw biến, thông tin
            1) object, ví dụ : var myObject = {
            name: do van phong,
            age: 19
        }; ( nhớ thêm dấu phẩy sau mỗi thông tin lưu trong object, biến cuối cùng không cần phẩy cuối dòng)
            2) Array, ví dụ : var myArray = [
                'Javascript',
                'PHP',
                'Ruby'
            ]; chú ý : array sẽ dùng bằng ngoặc vuông
7. toán tử so sánh phần 2 :
    === : so sánh bằng tuyệt đối ( chuẩn nhất )
    !== : so sánh khác tuyệt đối ( chuẩn nhất )

--học về hàm--
1.hàm
    1) hàm là 1 khối mã, làm 1 việc cụ thể. sẽ thực thi khi hàm được gọi
    2) tạo hàm : function : function <tên hàm>() {

    }
            gọi hàm : <tên hàm>();
            - quy tắc đặt tên hàm và tên biến : có thể chứa chữ cái in hoa, in thường, a-z,chứ được số, dấu gạch dưới _ , dấu đô la $.
                lưu ý: không được đặt số ở đầu tiên.
                ví dụ : function showDialog() {
                    sẽ viết code ở trong này
                }
2. tham số trong hàm
    1) ví dụ về truyền tham số : function Hello(fullName, fullName2) {
        console.log(fullName)
        console.log(fullName2)
    }
    Hello('xin chao cac ban', 'hello everybody');
    2) đối tượng arguments : khi có nhiều biến cần viết thì dùng arguments ( kiểu như mảng )
    ví dụ : function Hello() {
        console.log(argument);
    } Hello('1', '2', '3')
3.giới thiệu vòng for of, ví dụ :
        function Hi() {
        var myString= '';
        for(var Chanika of arguments) {
        myString += `${Chanika} -`;
         }
        console.log(myString)
        }
        Hi('do','van','phong');
            nó sẽ in ra : do - van - phng -
4. return trong hàm : đẻ lưu lại giá trị của người sử dụng, ví dụ khi dùng hàm cofirm :
                                                                var isConfirm = confirm('hello cac ban');
                                                                console.log(isConfirm);
                                                            thì phần console sẽ in giá trị người dùng nhập, yes hoặc no.
        return sẽ trả về giá trị của phép toán hoặc là giá trị của những biến bên phải return, những dòng code sau chữ return sẽ không được thực thi.
        return có thể trả về mảng,
        --kiến thức thêm : hàm toString() để thành chuỗi, ví dụ a = 5, b = 8 : a.toString() + b.toString() = 58
6. các loại hàm function :
        1) declaration function ví dụ : function <tên biến>() {

            } 
        2) expression function ví dụ : var <tên biến> = function() {

            }
                setTimeout(function <tên biến>() {

                });
                                       var myObject = {
                                            myFunction: function() {

                                            }

                                       }
        sự khách nhau giữa 1 và 2 : declaration function sẽ được gọi trước khi nó được định nghĩa, ví dụ :
                                                    helloCoffee();
                                                function helloCoffee() {
                                                        console.log('hello moi nguoi');
                                                } 
        3) Arrow function
---học về chuỗi---
1. chuỗi :
    1) cách tạo chuỗi :
        - 1 dùng cặp nháy đơn hoặc kép, ví dụ : var fullName = 'do van phong' ;
        - 2 dùng new với string, ví dụ : var fullName = new String('do van phong');
            --> nên dùng cách 1, ngắn ngọn và ưu hơn.
    2) cách ghi dấu ' hoặc " vào trong chuỗi: thêm dấu \ trước dấu chấm phẩy, ví dụ : var fullName = 'do \'van'\ phong ';
            còn muốn ghi dấu \ thì ghi \\
    3) cách xem độ dài chuỗi : dùng thuộc tính length, ví dụ : console.log(fullName.length)
    4) template string es6 : dùng để đưa biến vào trong chuỗi, lấy giá trị của biến, cú pháp :${tên biến}
                    var firstName = 'do van';
                    var lastName = 'phong' ;
                    console.log(`toi ten la: ${firstName} ${lastNmae}`) ( lưu ý : sử dụng dấu huyền :  ` đóng mở ngoặc)
2. các thuộc tính trong chuỗi :
    1) length : để đo độ dài kí tự trong chuỗi ( cả dấu cách )
    2) find index : để tìm vị trị 1 kí tự nằm trong 1 chuỗi, cú pháp : indexOf('kí tự muốn tìm trong chuỗi');
            nếu bên trong có nhiều kí tự giống nhau thì phải dùng truyền vào vị trí : indexOf('kí tự muốn tìm trong chuỗi', <tìm kể từ kí tự thứ mấy ? >)
            còn nếu kí tự đó ở cuối cùng trong các chữ kí tự giống nhau thì ghi cú pháp : lastIndexOf
        có 1 cách nữa để tìm là dùng search ( search khác với index là nó không thể tìm từ kí tự nào đó, mà sẽ tìm từ đầu)
    3) cut string : dùng slice(<vị trí bắt đầu chuỗi kí tự muốn cắt> , <vị trí kết thúc chuỗi kí tự muốn cắt>)
                    còn nếu muốn cắt từ đầu đến cuối thi ghi 0, : slice(0)
                        muốn cắt từ phải sang trái thì dùng số âm
    4) replace : dùng để ghi đè, thay thế replace(<'kí tự muốn bị thay thế'>, <'kí tự sẽ thay thế vào'>)
                            nếu muốn ghi đè tất cả kí tự giống kí tự muốn thay thế : cú pháp : replace(/js/g, <kí tự sẽ thay vào>)
    5) chuyển tất cả thành chữ hoa : toUpperCase()
    6) chuyển từ viết hoa thành thường : toLowerCase()
    7) trim : giúp loại bỏ những khoảng trắng ở 2 dầu của thẻ chứa trim
    8) slipt : cắt 1 cái chuỗi thành 1 array ( mảng ), ví dụ :
                    var Language = 'java, php, ruby' ;
                    console.log(Language.slipt(','))
                    nó sẽ cắt ra : ["java", "php", "ruby"]
    9) get a character by index : lấy 1 kí tự từ index ( trái lại với find index) 
                                        charAt(vị trí kí tự muốn lấy) ;
                      
--- một vài lời cơ bản về số ( number ) ---
1. kiểu dữ liệu số :
    Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
    Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
    Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
    Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
    Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
    Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
2. cách khai báo dạng số :
        1) var age = 20;
        2) var age = new Number(9);
            --> nên dùng cách 1.
3. number ( là number )
    1) cách kiểm tra xem biến có phải dạng NaN không : console.log(isNaN(tên biến)) ; 
    2) cách kiểm tra xem là dạng gì : console.log(typeof (tên biến cần kiểm tra))
    2) làm việc với number :
        - 1 : chuyển đổi từ dạng number sang dạng string :(tên hàm dạng number ).toString()
        -2  : làm tròn với số thập phân : (tên hàm).toFixed( * ), chú thích * : muốn để bao nhiêu số thập phân còn lại sau dấy phẩy thì ghi vào trong này 
                                            -- toFixed sẽ là dạng string
---- mảng----
1. mảng ( là 1 object) :
            1 vài lưu ý khi tạo tên mảng : nên thêm s ở cuối để thể hiện là số nhiều, tên cần có ý nghĩa.
    cách tạo mảng : var <tên mảng> = [
            < bên trong là các phần tử > ví dụ bên dưới là 3 phần tử
                    'javascript',
                    'PHP',
                    'Ruby',
                ]
                -- cách kiểm tra xem có phải 1 mảng không : console.log(Array.isArray(<tên biến muốn kiểm tra>));
            2. truy xuất mảng
                - độ dài mảng : vẫn dùng length như String
                - muốn lấy 1 phần tử trong mảng, ví dụ như mảng trên, muốn lấy PHP ra : <tên mảng>[1]
2. làm việc với mảng :
    1) to string : dùng để chuyển kiểu dữ liệu của mảng sang dạng string
                cách dùng : <tên biến mảng>.toString()
    2) join : vẫn giống như to string, nhưng có thể xóa dấu phẩy giữa các chữ bằng cách :
                            <tên biến mảng>.join(' ') --- có thể thêm dấu gạch ngang,... vào bên trong
    3) Pop : xóa đi phần tử cuối mảng và trả về chính phần tử đó, ví dụ : <tên biến mảng>.pop() và trả về phần tử đã xóa.
    4) push : để thêm phần tử vào cuối mảng, ví dụ : < tên biến mảng >.push(' phần tử muốn thêm ', ' phần tử muốn thêm' ,...)
    5) shift : xóa đi 1 phần tử ở đầu mảng và trả về phần tử đó ( có nét giống với pop : cái cuối cái đầu)
    6) unshift : giống push, nhưng unshift là thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới.
    7) splicing : cắt hoặc chèn phần tử mới vào mảng, ví dụ về xóa : <tên biến mảng>.splice(*,**) 
                        chú thích : * : là số thứ tự phần tử mà bạn muốn bắt đầu xóa
                                    **: là bạn muốn xóa mấy phần tử ( bắt đầu từ số thứ tự trên)
                  ví dụ về chèn : <tên biến mảng>.splice(*,**,'< phần tử bạn muốn chèn vào >', có thể thêm vô số )
    8) concat : để nối được mảng , ví dụ : tạo 2 mảng : var hellos = [

                                                        ];

                                                        var hihis = [

                                                        ];
                                                nối 2 mảng hellos và hihis lại với nhau : hellos.concat(hihis) --> 2 mảng được hợp nhất nhưng mảng
                                                                                                                     hellos sẽ là mảng gốc.
    9) slicing : để cắt 1 vài element của mảng, ví dụ : <tên biến mảng>.slice(<vị trí muốn bắt đầu cắt>, < vị trí muốn ngừng cắt>) 
    ---- lưu ý : cắt để giữ lại chứ không phải cắt vứt bỏ ---
----object-----
 1.ví dụ về object :  : var myInfo = {
                        name : 'do van phong',
                        age : 18,
                    };
                    những dòng trên trong ngoặc gọi là key.
                    cách để lấy những key ra : cách 1 : myInfo.<key cần lấy>, ví dụ : myInfo.name
                                               cách 2 : myInfo.[key cần lấy]
                    cách xóa 1 key muốn xóa : delete <tên biến>.<tên key cần xóa>
        1 vài điều cần nhớ :
            function ---> phương thức
            Others ---> thuộc tính
                
2.Object constructor ( xây dựng đối tượng), ví dụ :
                        --- quy ước chung khi dặt tên đối tượng này là chữ đầu viết hoa ---
                    function User(firstName, lastName, avatar) {
                        this.firstName = firstName; : nghĩa là : sau này khi đối tượng khởi tạo từ bản thiết kế này thì sẽ có thuộc tính firstName bằng với thuộc tính firstName khi truyền vào.
                        this.lastName = lastName;
                        this.avatar = avatar;
                    }
                    var author = new User('phong', 'do', 'avatar')
                    author.title = 'hello moi nguoi' ;
3.Object prototype ( đối tượng nguyên mẫu ) : để có thể thêm được 1 thuộc tính ngoài hàm tạo ví dụ : 
                                                                    User.prototype.className = 'F8' ;
                                                                lưu ý : khi muốn xem kiểm tra trên tab nó sẽ nằm ở trong phần proto
        2 và 3 hoạt động giống nhau, nên lựa chọn 2.                                               
4. date : làm về thời gian, ví dụ : var date = new Date();
                                    cách lấy thông tin trong date :
                                     - năm : date.getFullYear();
                                     - tháng : date.getMonth() + 1;
                                     - ngày : getDate();
5. làm việc với math
    - Math.PI : để trả về số PI
    - Math.round() : để làm tròn số
    - Math.abs() : số tuyệt đối
    - Math.ceil() : làm tròn lên trên, ví dụ : 4,0001 --> 5
    - Math.floor() : làm tròn số xuống dưới
    - Math.random() : để tạo số ngẫu nhiên, thường bị lồng ở trong các math khác
                    ví dụ : var random = Math.floor(Math.random() * 100 );
                        if (random < 50 ) {
                        console.log('cường hóa thành công');
    - Math.max(100, 20, 30, 50, 60) --> sẽ in ra 100, tương tự thay max = min 
}
----- lệnh rẽ nhánh-----
1.if - else
2.switch, chú ý ở dưới cùng của switch nên dùng lệnh default : in ra chữ là không tồn tại, không biết,...  ví dụ về switch : var date = 2;
                         switch(date) {
                        case 2:
                            "hello cac ban"; break;
    --- nếu đã biết trước giá trị của phần tử thì nên dùng swtich ---
            nếu phần tử ít hơn 3 case thì nên dùng if-else hoặc nhiều quá thì nên dùng if-else
            khi nào cần so sánh đúng sai thì nên dùng ifel
3. toán tử 3 ngôi, minh họa khi so sánh với if-else :
                var course = {
                    name: 'PHP',
                    coin: 250
                }   
}
  TH1: khi dùng if-else
        if(course.coin >0) {
            console.log(`${course.coin} Coins`);
        }else {
            cosole.log('Mien Phi');
        }
  TH2: khi dùng toán tử 3 ngôi :
        var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien Phi' ;
        console.log(result)

        --- TH1 và TH2 vẫn ra kết quả như nhau
---- vòng lặp -----

1. vòng lặp for : for(var <tên biến> = < 1 số >; điều kiện chạy ; i++ ) {

                        }
         ví dụ : for(var i = 1; i <= 1000 ; i++ ) {

                        }
2. for/in, ví dụ :
            var myInfo = {
                name : 'do van phong',
                age : 18
            }
            -- for/in dùng để lấy các biến trong hàm như trên, có thể lấy được những value của name hoặc age
            for(var hello in myInfo) {
                    console.log(myInfo[key]); --> sẽ truyền ra name : do van phong
                                                                age :     18
                                                                      --> vì key lấy dữ liệu từ đó ra.
                 }
3.for/of : dùng để lấy ra phần tử của 1 mảng hoặc là từng chữ cái của 1 chuỗi, ví dụ : var Language = [
                                                                        'Javascript',
                                                                        'PHP',
                                                                        'Ruby',
                                                                        'Javascript',

                                                                    ]
                                                                    for(var <tên biến> of Language) {
                                                                        console.log(<tên biến>);
                                                                    }
                                                                    ---> sẽ in ra những phần tử kia 
                                                                    cách xử lí lấy key với một object :  viết : Object.keys(tên biến object) --> thì nó sẽ trả về dạng mảng các keys
4. while, ví dụ : var i = 0;
                while(i < 1000) {
                    i++ ;
                    console.log(i);
                }
5. do/while, ví dụ : var i = 0;
        do {
            i++;
            console.log(i);
        } while (i < 10 );
6. break và continue :
    1. break:  để dừng lại câu lệnh
    2. continue : để tiếp tục vòng lặp(hoặc đến điều kiện đã được cho trước), ví dụ : 
        for ( var i = 1;i<10;i++) {
            if(i%2 !==0 ) {
                continue;
            }
            console.log(i);
        }
7. vòng lặp lồng nhau, ví dụ :
    for(var i=0;i< myArray123.length;i++) {
        for(var j=0;j<myArray123[i].length;j++) {
            console.log(myArray123[i][j])
        }
        }
--kiến thức thêm : ( khi dùng i++ tức là muốn tăng thêm 1) và nến muốn tăng thêm hơn 1 thì viết : i+= <số bạn muốn>, ví dụ : i += 5;
        - ví dụ : var array = [a,b,c,a,b,c,c,c,c] : trong mảng này có các phần tử giống nhau, bị lặp.
                                                    nếu muốn khi in ra sẽ xóa những cái phần tử lặp đi, thì dùng Set.
                console.log(new Set(array)); --> sẽ trả về hàm Set, và nếu muốn trả về mảng array thì viết :
                                                    console.log([...new Set(array)]);
7. đệ quy : đệ quy là khi thực thi 1 hàm tự gọi lại chính nó, ví dụ : funcrion deQuy() {
                                                                            deQuy();
                                                                        }
                                                                        deQuy();
        1 vài lưu ý khi làm về đệ quy :
            - xác định được điểm dừng của nó
            - có logic handle => tạo ra điểm dừng
                                                    ví dụ : function arrayyy(hehe) {
                                                                if(hehe > 0) {
                                                                 console.log(hehe);
                                                             return arrayyy(hehe - 2) ;
                                                              }
                                                        }
                                                                arrayyy(10);

---- mảng phần 2 ----
1. một vài thuộc tính nữa :
   forEach() : để duyệt qua được từng phần tử của mảng, ví dụ : <tên mảng>.forEach(function(<tên các bạn tùy đặt>,index) {
                        console.log(index, <tên các bạn tùy đặt ở trên>);
            });
   every() : để kiểm tra các phần tử của mảng nhằm thỏa mãn 1 điều kiện nào đó, giá trị trả về kiểu boolean.
                cách viết : var<tên biến> = <tên mảng>.forEach(function(<tên các bạn tùy đặt>,index) {
                        return <điều kiện gì đó mà các bạn muốn>; // nghĩa là nó sẽ kiểm tra xem phần tử bạn muốn có đạt điều kiện không, nếu đạt sẽ báo true, không sẽ báo false
                });
                console.log(<tên biến vừa nhập>);
   some() : chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện là sẽ ngừng lại, cách viết tương tự every();
   find() : để tìm kiếm 1 thông tin nào đấy trong phần tử của mảng, khi tìm kiếm thấy là sẽ dừng ngay ở phần tử thấy đầu tiên ví dụ :var<tên biến> = <tên mảng>.forEach(function(<tên các bạn tùy đặt>,index) {
                        return <tên các bạn tùy đặt ở trên>.<thông tin của phần tử đó, ví dụ : name: 'do van phong'; 
                }); --- sau khi thực thi, nó sẽ trả về thông tin của phần tử mà chứa thông tin ở trên
   filter() : giống như find, khác ở 1 điểm là sẽ trả về tất cả những phần tử thỏa mãn, thay vì find chỉ trả lại 1 phần tử thỏa mãn mà nó thấy đầu tiên
   map() : dùng để thay đổi hoặc chỉnh sửa phần tử của mảng, ví dụ :
                                                                    var array_123455 = [
                                                                        {
                                                                            name: 'PHP',
                                                                            age : 12,
                                                                            form : 'bac ninh',
                                                                            coin : 200;
                                                                        },
                                                                        {
                                                                            name: 'html',
                                                                            age : 14,
                                                                            form : 'bac ninh',
                                                                            coin : 200;
                                                                        },
                                                                        {
                                                                            name: 'css',
                                                                            age : 16,
                                                                            form : 'bac ninh',
                                                                            coin : 200;
                                                                        },
                                                                    ];
                                                                    function uh_hi(course) {
                                                                        return {
                                                                            name : course.name,
                                                                            age : course.age,
                                                                            form : `huong mac - tu son- ${array_123455.form}`,
                                                                            puppy: 'hello'
                                                                        
                                                                        };

                                                                    }
                                                                    var newCourses = array_123455.map(uh_hi);
                                                                    console.log(newCourses)
                                                                    
   reduce() : dùng khi bạn muốn nhận về 1 giá trị duy nhất sau khi tính toán trong mảng., ví dụ về reduce -- sẽ dùng luôn mảng array_123455 ở trên.
                                                function coinHandler(accumulator,currentValue,currentIndex,originArray) {
                                                
                                            }
                                            var totalCoin = array_123455.reduce(coinHandler,<giá trị khởi tạo, ví dụ : 0>)
                                                --- giá trị khởi tạo sẽ được gán cho accumulator trong lần chạy đầu tiên
                                                --- trong hàm function ở trên thì return cái gì nó sẽ lưu trữ cái đấy
                                            // giải nghĩa thêm : trong hàm coinHandler sẽ có 4 biến ( 4 biến dưới này có thể tự đặt tên khác thoải mái)
                                                    1. accumulator : biến lưu trữ -- sẽ được gán bởi giá trị khởi tạo
                                                    2.currentValue : giá trị hiên tại
                                                    3. currentIndex : để chỉ mục
                                                    4. originArray :  giá trị array gốc, chính là cái nào mà .reduce, ví dụ bên trên thì sẽ là array_123455

    cách để kiểm tra xem tron 1 chuỗi có từ gì đó không : dùng includes, ví dụ:
                                            var title = 'do van phong';
                                            console.log(title.includes('do', <bắt đầu tìm kiếm từ vị trí nào>));
                                            ---> sẽ trả về true, ví trong chuỗi title kia có chứa từ do
    kiểm tra mảng cũng tương tự
---- javascript callback -----
1.callback
--- kiến thức thêm: khi muốn định nghĩa ra 1 cái gì đó thì dùng prototype, ví dụ : Array.prototype<tên hàm muốn định nghĩa> = function() {
                                                                                                            
                                                                                            }
    1. callback là 1 hàm, được truyền qua đối số khi gọi 1 hàm khác ví dụ : function myFunction(param) {
                                                                               param('hoc lap trinh de di lam');
                                                                                
                                                                            }
                                                                            function myCallback(value) {
                                                                                console.log('value: ',value );

                                                                            }
                                                                            myFunction(myCallback);
                                                                            -- > myCallback thỏa mãn 2 điều kiện, trở thành callback



---- HTML DOM ----
1. html DOM - viết tắt của : Document Object Model
có 3 thành : element, attribute, text.
lưu ý : HTML DOM không phải là của Javascript, mà Javascript chỉ cung cấp phương tiện để truy cập vào HTML DOM

----------------------------
API là : Application Programming Interface : khi 1 ứng dụng, mở ra những con đường cho những cái ứng dụng khác nhìn thấy, giao tiếp được thì mang ý nghĩa là API
document chính là đại diện toàn bộ cho website, vì vậy nếu muốn truy xuất vào các thành phần trong website thì đều phải đi qua document
cách gọi : document.getElementsByClassName('<điền tên class muốn gọi vào trong này>')
hoặc gọi bằng CSS : document.querySelector('<điền như là viết trong CSS>'), 
                                                ví dụ :
                                                    document.querySelector('.header')   
                                                    --> sẽ gọi ra header
    Nhưng khi dùng querySelector thì chỉ gọi được 1 element, nếu muốn gọi ra tất cả element có cùng tên thì dùng : querySelectorAll
khi dùng querySelector thì sẽ trả ra 1 mảng, nên có thể truy cập vào bất kì element nào của mảng đó = [];
1.cách lấy element
ví dụ : <div class="box-1">
        có 2 thẻ li trong này
        </div>
        muốn lấy 2 thẻ li.
    cách 1 : document.querySelectorAll('.box-1 li')

    cách 2 : var box = document.queryselector('.box-1')
        box.querySelectorAll('li')

--- 2 cách này đều giúp lấy ra thẻ Li trong div box-1 ;
2.cách thêm attribute vào 1 element, ví dụ :
                              thẻ :  <h1> hello các bạn nhỏ </h1>, chúng ta muốn thêm attribute vào cho nó :
                    var element_h1 = document.querySelector('h1');
                    element_h1.setAttribute('<cái này là tên attribute>','<cái này là đặt tên cho nó>')
                    ví dụ : element_h1.setAttribute('class','hello')
            - còn nếu muốn lấy ra tên của attribute đó, lấy luôn ở trên :
                    element_h1.getAttribute('calss')
                    --> nó sẽ lấy ra từ hello

3. nếu muốn lấy ra nội dung nào đó trong element, attribute, có thể sử dụng innerText hoặc textContent.
    ví dụ : <h1 class= "class_header"> hello các bạn nhỏ </h1>
    muốn lấy nội dung là hello các bạn nhỏ, ta dùng : 
                                var content = document.querySelector('.class_header')
                                content.innerText
                        còn để gán nội dung khác vào, ví dụ muốn gán nội dung 'hello every child' :
                            content.innerText = 'hello every child';
        -- in ra nội dung thì gọi là: geter
           còn gán nội dung khác vào thì gọi là: seter
..... sự khác biệt giữa innerText và textContent : innerText thì đã qua 1 chút chỉnh sửa, gọn gàng hơn và mó sẽ trả lại đúng những gì chúng ta nhìn thấy trên web.
                                                   còn textContent thì sẽ giữ nguyên mọi thứ. Và trả lại như những gì ta nhìn thầy trên code.                                
4. nếu muốn thêm 1 element vào trong 1 element nào đó : dùng innerHTML( bên trong ) hoặc outerHTML( bên ngoài )
                ví dụ : <h1 class= "class_header"> hello các bạn nhỏ </h1>
                          var content = document.querySelector('.class_header')
                                content.innerHTML = '<h4> hello lũ chúng mày </h4>';
                                thì nó sẽ tự thêm thẻ h4 và nội dung vào bên trong thẻ h1 trên, còn nếu dùng outerHTML thì nó sẽ thay luôn thẻ h1 bằng thẻ  h4
5. thuộc tính DOM style
cách dùng : .style, rồi có thể gán các css vào. chú ý : khi viết ở css thì có dấu gạch ngang còn ở js thì không có.
                             ví dụ  : var hello = document.querySelector('.header')
                                    hello.style.backgroundColor = 'red';
                        cách có thể gán thêm nhiều css vào :
                            Object.assign(hello.style, ) {
                                width : '200px',
                                height : '100px',
                                backgroundColer: 'red',
                            }
                        -- > như vậy thì có thể gán vào nhiều css hơn mà đỡ mất công.
6. thuộc tính classList : giúp quản lí được class của chính cái element đang gọi tới thuộc tính này
    1. add: để thêm class vào element 
    2. contains: để kiểm tra xem 1 class có nằm trong element này hay không
    3. remove: để xóa bỏ class khỏi elemet
    4. toggle: nếu có 1 class đấy ở element mà gọi tới toggle thì sẽ xóa, còn không có ở element thì nó sẽ thêm vào
                            ví dụ : <div class="hello haha hihi">ILoveYou</div>
                            <style> .color-red {
                                        color: red;
                                    }
                            </style>
                            -- tức là có 3 class ở element này
                            ví dụ về thuộc tính red : 
                            var doVanPhong = document.querySelector('.hello')
                            doVanPhong.classList.add('color-red');
                            --> thì nó sẽ add thêm class color-red vào, và bên trên đã CSS cho class color-red có màu đỏ, nên text trong class hello sẽ biến thành màu đỏ
                                nếu muốn thêm nhiều class thì cách nhau bằng dấu phẩy.
                            các cái khác trong 1 2 3 4 cũng tương tự.
        --- có thể lấy ra chuỗi class bằng .value
                            -- toggle kết hợp với setInterval khá hay.
                            setInterval kiểu : lặp lại.
7. DOM events : những sự kiện diễn ra trong DOM ( ví dụ: click vào chữ, bôi đen chữ, click vào button, kéo lên kéo xuống,...)
gõ DOM events -- xem trên w3school để xem thêm các events
                ---- lưu ý : thêm tiền tố on ở trước các events, ví dụ events click, thì viết là onclick
    1 số event quan trọng cần nhớ :
        1. click : là khi bấm chuột vào thì được thực thi
        2. mouseover : là khi hover vào thì được thực thi
        3. mouseout :là khi di chuột ra thì được thực thi
--- gán events, ví dụ :
div class="haha hihi">ILoveYou</div>
var hello = document.querySelector('haha');
hello.onclick = function(e) {
console.log(e.target)
}
target : là tên thẻ mà click vào
khi dùng e ở trên, nó sẽ in ra thẻ mà chúng ta click. 
trong e ở trên, có thuộc tính e.which : sẽ mã hóa thành số giúp bạn biết người dùng bấm phím nào khi người dùng ấn các phím trên bàn phím
lưu ý, nên dùng e thay vì dùng thẳng biến khai báo từ var, trường hợp trên : hello
---- DOM events
--- một vài sự kiện của input, select :
        1. change : là thực thi khi có sự thay đổi
        2. input : gõ đến đâu thực thi đến đó ( dùng trong input )
        3. keydown : khi gõ phím thứ 2 sẽ lấy được phím thứ nhất
        4. keyup : gõ đến đâu lấy được đến đấy
        5. keypress : khi bấm xong cứ giữ phím đấy thì nó sẽ liên tục nhận

*/
alert ('Welcome you, Chào Mừng Mọi Người Đến Với Web của Phong! ');
setTimeout( function() {
    alert ('bấm ok để xác minh You không phải là robot');
}, 10000 ) ;
var language = 'JavaScript';
console.log(language)
var a = 3;
var b = 5;
var c = b**a;
var number = 6;
var output = ++number * 2 - --number * 2;
console.log('ouput: ', output)
var firstName = 'Son';
firstName += 'Dang';
console.log(firstName)
function Hi() {
    var myString= '';
    for(var Chanika of arguments) {
        myString += `${Chanika} -`;
    }
    console.log(myString)
}
Hi('do','van','phong');

function sum(a,b) {
    return a + b;
}
console.log(sum(10,6));
function sum(a, b) {
    return a + b;
}
var result = sum;
console.log(result(20,10))
function sum(a, b) {
    
    return a + b;
}
console.log(sum(20,10))
var result = sum;
var fullName_all = 'do \'van\' phong ';
console.log(fullName_all)
var firstName_1 = 'do van';
var lastName_1 = 'phong' ;
 console.log(`toi ten la: ${firstName_1} ${lastName_1}`) ;


 var allElement = [
     'hello',
     'goodbye',
     'ilove',
     'you',

 ];
 console.log(allElement[1])

 function joinWithCharacter(array, charactor) {
     return array.join(charactor);
}
 var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result);
function getLastElement(hello) {
    
    return hello.slice(-1);
}
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

var myInfo = {
    name : 'do van phong',
    age : 19,
    address : 'Huong Mac',
    element_Name : function () {
        return this.name;

    } 
}
console.log(myInfo.element_Name())

function Animal(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}
var parrot = new Animal('vẹt', 'hai chân','20km');
console.log(parrot);

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}


// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

var random = Math.floor(Math.random() * 100 );
if (random < 50 ) {
    console.log('cường hóa thành công');
}
// if else
function run(a) {
    if((a % 3) == 0 && (a % 5) != 0 && (a % 15) !=0 ) {
        return 1; 
    } else if((a % 5) == 0 && (a % 3) != 0 && (a%15) != 0 ) {
        return 2;
    }else if(a%15 == 0)  {
        return 3;
    }
    // 
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3


//switch
function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
            default : result = "No fruits";
    }

    return result;
}
// toán tử 3 ngôi 
var course = {
    name: 'PHP',
    coin: 250
}   
var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien Phi' ;
        console.log(result)
 function getCanVoteMessage(age) {
  return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu" ;  
  }  
 // Kỳ vọng
 console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
 console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

 //vòng lặp for
function getRandNumbers (min, max, length) {
    var array = [

]
 for (var i = 0 ; i < length ; i++ ) {
    array.unshift(Math.random() * (max - min) + min)
}
    return array
}
console.log(getRandNumbers(0,100,99))


 //vòng lặp for
for(var i = 0; i<10;i++) {
    console.log(i,Math.random())
}

 //vòng lặp for
var array__for = [
    'javacript',
    'PHP',
    'ruby',
    'c++',
    'c#',
    'html'
]
var array__forLength = array__for.length;
for(var i = 0; i< array__forLength;i++) {
    console.log(array__for[i]);
}
// for/in
for(var key in array__for) {
    console.log(array__for[key])
}
function run(object) {
    object = {
        name: 'nguyen van a',
        age: 16
    }
    var arrs = [];
    for (var key in object) {
      arrs.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
      
    }
    return arrs
  
  }
  
  // Kỳ vọng
// đọc bên dưới để hiểu hơn về cách hoạt động của đoạn code trên 
  console.log(run());
  object = {
    name: 'nguyen van a',
    age: 16
}
for (var key in object) {
    console.log(object[key])
    
  }

// for/of
  var array_123 = [
      'javascript',
      'PHP',
      'html',
      'css',
  ];
  for ( var hello of array_123) {
    console.log(hello);
  }

  var array_1234 = 'javascript' ;

for ( var hello of array_1234) {
  console.log(hello);
}


var array_12345 = {
    name: 'javascript',
    age : 19,
    form : 'bac ninh'
};
for ( var hello of Object.keys(array_12345)) {
  console.log(hello);
  for(var hihi of hello) {
      console.log(hihi);
  }
}
//while
var i = 0;
                while(i < 10) {
                    i++ ;
                    console.log(i);
                }
    for ( var i = 0;i<10;i++) {
         if(i%2 !==0 ) {
          continue;
             }
      console.log(i);
                }
var myArray123 = [
    [92,32],
    [3,4],
    [5,7],
]

for(var i=0;i< myArray123.length;i++) {
    for(var j=0;j<myArray123[i].length;j++) {
        console.log(myArray123[i][j])
    }
};
// new để khởi tạo mới
// dùng Set để giải bài toán xóa các phần tử trùng lặp trong 1 mảng
    // dùng [... Set(mảng cần thực thi)] để giải bài toán xóa các phần tử trùng lặp trong 1 mảng rồi trả về mảng đó
var arrayy = ['a','b','c','a','b','c','c'];
console.log([...new Set(arrayy)]);

// đệ quy
function arrayyy(hehe) {
if(hehe > 0) {
    console.log(hehe);
    return arrayyy(hehe - 2);
}
}
arrayyy(10);

// dùng đệ quy tính giai thừa
function deQuy(giaiThua) {

    if(giaiThua > 0) {
        return giaiThua * deQuy(giaiThua - 1) ;
    }else return 1;
    
}
console.log(deQuy(10))

// thuộc tính map khi sử dụng mảng :
var array_123455 = [
    {
        name: 'PHP',
        age : 12,
        form : 'bac ninh',
        coin : 400,
    },
    {
        name: 'html',
        age : 14,
        form : 'bac ninh',
        coin : 400,
    },
    {
        name: 'css',
        age : 16,
        form : 'bac ninh',
        coin : 100,
    },
];
function uh_hi(course) {
    return {
        name : course.name,
        age : course.age,
        form : `huong mac - tu son- ${course.form}`,
        puppy: 'hello',
        coin : course.coin
    };

}
var newCourses = array_123455.map(uh_hi);
console.log(newCourses)

// ví dụ về reduce, sử dụng luôn mảng array_123455 bên trên
function hiha(thomas, edison) {
return  thomas + edison.coin;    
}
var totalCoin = array_123455.reduce(hiha, 0) // tham số thứ 2 này là giá trị không bắt buộc
console.log(totalCoin)
// bài toán làm phẳng mảng bằng reduce :
var depthArray = [7,2,[3,1,[1,2,3,4,5,6,7,8,9]]]
var flatArray = depthArray.reduce(function(gtnm,gtsd) {
    return gtnm.concat(gtsd);
},[]);
var flatArrayy = flatArray.reduce(function(gtnmm,gtsdd) {
    return gtnmm.concat(gtsdd);
},[]);
console.log(flatArrayy);
// tính tổng của 1 mảng bằng reduce
var  total = flatArrayy.reduce(function(hoho, hehe) {
    return hoho + hehe;
},0);
console.log(total)
// callback
function helllo(hihi) {
   hihi(12345);
}
function myCallback(callBack) {
    console.log(callBack)

}
myCallback();
helllo(myCallback);

// ứng dụng
var array_pp = [
    1234,
    {
    name: 'hello',
    class: '2234',
    form: 'hoho'
    },
    {
    name: 'hehe',
    class: '7234',
    form: 'hoho'
    },
    {
    name: 'hoho',
    class: '1234',
    form: 'hoho'
    }
]
 Array.prototype.map2 = function(callback) {
    var thomasmuller = [];
       for(var i = 0; i < this.length; i++) {
       var result = callback(this[i],i);
       thomasmuller.push(result);
    }
    console.log(thomasmuller)
}
var thomas = array_pp.map2(function(index, array_p) {
return {
    name : 'do van phong',
    class : 12,
    form : 'ha noi'
}

})
;
// forEach ứng dụng callback
Array.prototype.forEach2 = function(hello) {
    for(var i = 0;i< this.length;i++) {
        console.log(hello(i,this[i]))
        if((typeof this[i]) == 'number') {
            console.log('địt cụ lũ chúng mày');
    
        }else {console.log('thành công')}
    }
}
array_pp.forEach2(function(dovanphong,index,array) {
    console.log( dovanphong,index,array);
    console.log(typeof dovanphong);
   
});
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function stringToArray(str) {
console.log(str.split(','));
}
stringToArray(coursesStr);

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders) {
    var result = 0;
for(var i = 0;i<orders.length;i++) {
    result = result + orders[i].price;
}
return result;
}


// Expected results
getTotal(orders) // Output: 8700000

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(hello) {
    var hoho = hello.filter(function(haha) {
        return haha.like > 5;
    })
    return hoho;
 }




// Expected results:
console.log(getMostFavoriteSport(sports)) 



var sportss = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
];

function getTotalGold(hihi) {
    function hihi(thomas,edison) {
 return thomas + edison.gold;
}
    var totolCoin = sportss.reduce(hihi,0)
    return totolCoin;
}


// Expected results:
console.log(getTotalGold(sportss)) // Output: 23



var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function calculateRating(hihi) {
   var hehe = hihi.filter(function(hoho) {
     return hoho.Director == "Christopher Nolan" ;
   })
   function hixhix(a,b) {
       return a + Number(b.imdbRating);
   }
   var imdb = hehe.reduce(hixhix,0)
   return imdb / hehe.length;
  }
  
  
  
  // Expected results
  console.log(calculateRating(watchList))

  var arrrr = [['name', 'Sơn Đặng'], ['age', 18]]
 function arrToObj(hehe) {
    for(var i = 0;i<hehe.length;i++) {
        function huhu(a,b) {
        return a + ':' + b;
        }
        var hixhix = hehe.reduce(huhu,hehe[0][0])
        return hixhix;
    }
    
}
// Expected results
console.log(arrToObj(arrrr)) // Output: { name: 'Sơn Đặng', age: 18 }

//  xây dựng phương thức myMap hoạt động giống map
Array.prototype.myMap = function(cb) {
    var array = [];
    for(var i = 0;i<this.length;i++) {
        array.push(cb(this[i],i));
    }
    return array;
    
}
const numbers = [1, 2, 3];
console.log(numbers.myMap(function (numberrr) {
    return numberrr * 2;
}))
console.log(numbers.myMap(function (numberrr, index) {
    return numberrr * index;})) 
    
    
    // khi dùng filter

const numberssssss = [1, 2, 3, 4];
    console.log(numberssssss.filter(function (numberrr) {
        return numberrr % 2 === 0;
    })); 
    console.log(numberssssss.filter(function (number, index) {
        return index % 2 === 0;
    }));
    console.log(numberssssss.filter(function (number, index, array) {
    return array.length % 2 === 0;
    }));


   // xây dựng phương thức myFilter, sẽ hoạt động giống filter bên trên, và dùng luôn mảng numberssssss trên :
   Array.prototype.myFilter = function(cbbb) {
    var output = [];
    for(var i = 0; i < this.length;++i) {
        var resulttt = cbbb(this[i],i,this)
        console.log(this[i])
        console.log(resulttt)
        if(resulttt) {
            output.push(this[i])
        }
    }
    return output;
   }
console.log(numberssssss.myFilter(function (numberrr) {
        return numberrr % 2 === 0;
    })); 
    console.log(numberssssss.myFilter(function (number, index) {
        return index % 2 === 0;
    }));
console.log(numberssssss.myFilter(function (number, index, array) {
    console.log(array.length);
    return array.length % 2 === 0;
}));

// xây dựng phương thức mySome, hoạt động giống như phương thức có sẵn : some.
Array.prototype.mySome = function(cb) {
    for(var i = 0; i < this.length;i++) {
        if(cb(this[i], i, this)) {
            return true;
        };
    } 
    return false;
}
const numberses = [1, 3, 3, 5];
console.log(numberses.mySome(function (number) {
    return number % 2 === 0;
}));
console.log(numberses.mySome(function (number, index) {
    return index % 2 === 0;
}));
console.log(numberses.mySome(function (number, index, array) {
    return array.length % 2 === 0;
}));

console.log('xây dựng phương thức myEvery, hoạt động giống như phương thức có sẵn: every')
//  xây dựng phương thức myEvery, hoạt động giống như phương thức có sẵn: every
Array.prototype.myEvery = function(cb) {
    var output = true ;
    for(var i = 0; i < this.length;i++) {
        result = cb(this[i],i,this);
        if(!result) {
            output = false ;
            break;
        }
    }
    return output;
}
  
const numberssssssssss = [1, 3, 3, 5];

console.log(numberssssssssss.myEvery(function (number) {
     return number % 2 !== 0;
 }))
 console.log(numberssssssssss.myEvery(function (number, index) {
        return index % 2 === 0;
     }));
 console.log(numberssssssssss.myEvery(function (number, index, arrayxyz) {
         return arrayxyz.length % 2 === 0;
       }));
       var thomasedison = document.getElementsByTagName('h1')
console.log({
    element : thomasedison  
});
var hohohoho = document.querySelector('.auth-form')
console.log(hohohoho.innerText) // in ra chữ có trong element, trả lại giống những gì chúng ta nhìn thấy trên web
console.log(hohohoho.textContent) // in ra chữ có trong element, trả lại giống những gì chúng ta nhìn thấy trên code
console.log(hohohoho.innerHTML) // in ra tất cả những gì chứa trong element đó, cả các thẻ,...
console.log(hohohoho.innerHTML = '<h4></h4>') // thêm element h4 đó vào bên trong element auth-form
// bài tập 145 trên F8, dưới đây khoảng 70%, 70% còn lại do lười tạo điều kiện nên nếu muốn đủ thì xem lại trên f8
var coursess = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(coursess) {
    console.log(coursess.join(' '))
    
    var helllllo = coursess.map(function okhaha(a) {
       
        return `<li> ${a} </li>`

    })
    console.log(helllllo.join(' '))
}
render(coursess);
hohohoho.classList.add('IloveYou'); // thêm class IloveYou vào trong class auth-form
console.log(hohohoho.classList.contains('IloveYou')) ;// kiểm tra xem trong class auth-form có class IloveYou không.
var anhYeuEm = document.querySelector('.click-search__header');
setInterval(() => {
    anhYeuEm.classList.toggle('color-red')
    
}, 400)
// từ dòng 1291 - 1295 : làm cho background-color trong button search nhấp nháy.

// từ dòng 1315 - 1325 : làm cho khi click vào chữ tài khoản của tôi, sẽ hiện lên đăng nhập, và khi click vào chữ trở lại sẽ đóng đăng nhập đi.
var displayNone = document.querySelector('.modal')
var onclickOutbtnReturn = document.querySelector('.btn-return')
var displauNoneLogIn = document.querySelector('.form__loginIn--display_none')
var onclickInbtnReturn = document.querySelector('.onclick__element-navbar__header-item')
onclickInbtnReturn.onclick = function() {
    displayNone.classList.add('form__loginIn--display_none')
}

onclickOutbtnReturn.onclick = function() {
    displayNone.classList.toggle('form__loginIn--display_none')
}
var onclickUpHidden = document.querySelector('.product-selected')
var onclickCart = document.querySelector('.header-cart-all__element')
onclickCart.onclick = function() {
    onclickUpHidden.classList.toggle('display-block')
}
var btnFooter = document.querySelector('.btn-footer')
btnFooter.onclick = function() {
    displayNone.classList.add('form__loginIn--display_none')
}
// ví dụ về phần events với input,select. e.which để in ra số tương ứng cách hiểu của máy tính khi nhập phím
var buttonn = document.querySelectorAll('input')
buttonn[38].onkeyup = function(e) {
console.log(e.which);
switch(e.which) {
    case 68: // 68 tương ứng với phím d
        console.log('em iu đã nhập đúng')
        break;
        case 86: // tương ứng với phím v
            console.log('em iu nhập tiếp đi')
            break;
}
}
