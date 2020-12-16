
let aboutBanner1 = document.querySelector(".aboutBanner1");
let aboutBanner2 = document.querySelector(".aboutBanner2");
let aboutBanner3 = document.querySelector(".aboutBanner3");
let aboutText4 = document.querySelector(".aboutText4");
let aboutText2 = document.querySelector(".aboutText2");
let aboutText3 = document.querySelector(".aboutText3");

let mouseImage = document.querySelector(".followCursor");

aboutBanner1.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/shutterstock_JosephineJulian.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(-20vw);";
}
);

aboutBanner1.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);

aboutBanner2.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/olga-kononenko-44YVLRpuSeY-unsplash.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(-20vw);";
}
);

aboutBanner2.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);

aboutBanner3.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/tyler-lastovich-xmJ1sOzftdI-unsplash.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(-20vw);";
}
);

aboutBanner3.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);

aboutText2.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/shutterstock_JosephineJulian.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(10vw);";
}
);

aboutText2.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);

aboutText3.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/olga-kononenko-44YVLRpuSeY-unsplash.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(10vw);";
}
);

aboutText3.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);

aboutText4.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/tyler-lastovich-xmJ1sOzftdI-unsplash.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(10vw);";
}
);

aboutText4.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);




// fish
let fish = document.querySelectorAll(".vertical");

function fishText(){
	fish.forEach(item => {item.innerHTML = "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------🐟";
	
})}