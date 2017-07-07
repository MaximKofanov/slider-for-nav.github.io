var counterSlids = document.querySelectorAll('ul.sliderImage > li').length;
var currentSlide = document.querySelector('ul.sliderImage');
var counterStep = 1;
var countPx = 800;
var count = 0;
currentSlide.style.transition = settingsSlider.animationSpeed+'s';

var sliderArr = [];
for(var j = 0; j < counterSlids*2; j++){
	var childCount;
	if(j%2 != 0){
		childCount = j;
	}
	else{
		continue;
	}
	sliderArr.push(document.querySelector('ul.sliderImage').childNodes[childCount].childNodes[0].getAttribute('src'));	
}

for(var i = 0; i < counterSlids; i++){
	var newElem = document.createElement('li');
	listPages.appendChild(newElem);
}

for(var z = 0; z < counterSlids; z++){
	listPages.childNodes[z].style.backgroundImage = 'url('+sliderArr[z]+')';
	listPages.childNodes[z].style.opacity = '0.4';
}
listPages.childNodes[0].style.opacity = '1';

function pagerRight(){
	if(counterStep < counterSlids){
		currentSlide.style.left = "-"+(countPx*counterStep)+"px";
		count = -(countPx*counterStep);
		counterStep++;
	}
	for(var x = 0; x < counterSlids; x++){
		listPages.childNodes[x].style.opacity = '0.4';
		listPages.childNodes[counterStep-1].style.opacity = '1';
	}
	if(counterStep === counterSlids){
		document.querySelector('.pagerRight').style.opacity = '0.5';
		document.querySelector('.pagerLeft').style.opacity = '1';
	}else{
		document.querySelector('.pagerLeft').style.opacity = '1';
		document.querySelector('.pagerRight').style.opacity = '1';
	}
}

function pagerLeft(){
	if(counterStep > 1){
		count += countPx;
		currentSlide.style.left = count+"px";
		counterStep--;
	}
	for(var x = 0; x < counterSlids; x++){
		listPages.childNodes[x].style.opacity = '0.4';
		listPages.childNodes[counterStep-1].style.opacity = '1';
	}
	if(counterStep === 1){
		document.querySelector('.pagerLeft').style.opacity = '0.5';
		document.querySelector('.pagerRight').style.opacity = '1';
	}else{
		document.querySelector('.pagerRight').style.opacity = '1';
		document.querySelector('.pagerLeft').style.opacity = '1';
	}
}

function sliderMiniClick(number){
  counterStep = number;
  return slider.style.backgroundImage = slide[number];
}

listPages.onclick = function(e){
	for(var i = 0; i < counterSlids; i++){
		if(e.target == listPages.childNodes[i]){
			counterStep = i;
			pagerRight();
		}
	}
}
