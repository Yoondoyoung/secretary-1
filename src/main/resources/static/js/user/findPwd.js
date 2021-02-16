$(function (){
    $("#checkEmail").on("click",function (){
        let email = {
            email:$("#pwdEmail").val(),
            userId:$("#pwdUserId").val()
        }
        if (email == "") {
            alert("메일 주소가 입력되지 않았습니다.");
        }else {
            $.ajax({
                url: '/restUser/emailCheck',
                type: 'get',
                data: email,
                contentType: "application/text",
                success: function (data) {
                    if(data===0){
                        $.ajax({
                            type: 'post',
                            url: '/restUser/sendMail',
                            data: email,
                            dataType: 'json',
                            success: function (key) {
                                alert("인증번호가 전송되었습니다.")
                                $('#check').attr("value", key);
                            }
                        });
                    }else{
                        alert("등록되지 않은 이메일입니다.");
                    }


                }, error: function () {
                    console.log("실패");
                }
            });
        }
    })
})


function checkCertificationNo() {
    alert("인증번호 맞는지 확인할게욥")

    let checkKey = $('#check').val();
    if (checkKey == ""){
        alert("인증번호를 입력해주세요")
    }else if ($("#certificationNo").val() == checkKey) { //인증 키 값의 비교를 위해 텍스트인풋과 벨류를 비교
        console.log("key" + checkKey);
        $("#certificationNo").text("인증완료").css("color", "blue");
        alert("인증이 완료되었습니다.")
        isCertification = true; //인증성공여부 check
    } else {
        $("#certificationNo").text("불일치").css("color", "red");
        isCertification = false; //인증실패
        alert("인증이 실패했습니다.")
    }
}

function submitCheck(){
    if (isCertification == true){
        return true;
    }else{
        alert("메일 인증이 완료되지 않았습니다.");
        return false;
    }
}

function passwordChange(){
	if(submitCheck() == true){
		$("#password-modal").modal("show");
	 $("#sendPassword").on("click",function(e){

	                if($("#password01").val() == $("#password02").val()){
	                	let text = {
	                        	password : $("#password02").val(),
	                        	userId : $("#pwdUserId").val()
	                        };
	                    $.ajax({
	                        url : "/restUser/changePassword",
	                        type : "POST",
	                        data :JSON.stringify(text),
	                        contentType: "application/json",
	                        //async: false,
	                        success: function (response){
	                            alert(response);
	                        }
	                    });
	                    
	                  location.href="login";
	                
	                }else{
	                    alert("입력하신 비밀번호가 일치하지 않습니다.")
	                  
	                }

	            })
					
		}
}



