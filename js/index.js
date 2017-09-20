window.onload=function(){
	
//侧导航开始

	let aside=$('.aside')[0];
	let asideli=aside.getElementsByTagName('li');
	let item=aside.getElementsByClassName('item');
	// console.log(item)
		
	for(let i=0;i<asideli.length;i++){
		asideli[i].onmouseover=function(){
			item[i].style.display='block';
		}
		asideli[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}

	let imglist=$('.img-list')[0];
	let imglistli=imglist.getElementsByTagName('li');
	let btnlist=$('.btn-list')[0];
	let btnlistli=btnlist.getElementsByTagName('li');
//鼠标点击btn 换图片	
	btnlistli[0].style.background='#fff';
	for(let i=0;i<btnlistli.length;i++){
		btnlistli[i].onclick=function(){
			for(let i=0;i<imglistli.length;i++){
				imglistli[i].style.display='none';
				btnlistli[i].style.background='';
			}
			
			imglistli[i].style.display='block';
			btnlistli[i].style.background='#fff';
			num=i;
		}
	}

//时间函数  图片轮播
	let t=setInterval(move,3000);
	let num=0;
	function move(){
		num++;
		if(num==imglistli.length){
			num=0;
		}
		for(let i=0;i<imglistli.length;i++){
				imglistli[i].style.display='none';
				btnlistli[i].style.background='';
			}
			
			imglistli[num].style.display='block';
			btnlistli[num].style.background='#fff';
	}
//鼠标移入停止轮播	
	imglist.onmouseover=function(){
		clearInterval(t);
	}
	imglist.onmouseout=function(){
		t=setInterval(move,3000);
	}

//点击左右箭头换图片
   let btnleft=$('.btn-left')[0];
   let btnright=$('.btn-right')[0];
   
   btnright.onclick=function(){
   		move();
   }
    btnleft.onclick=function(){
   		num--;
   		if(num<0){
			num=imglistli.length-1;
		}
		for(let i=0;i<imglistli.length;i++){
				imglistli[i].style.display='none';
				btnlistli[i].style.background='';
		}
			
			imglistli[num].style.display='block';
			btnlistli[num].style.background='#fff';
	}
   }


