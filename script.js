/* 
function -Create a Github repository for this project. 
-The count starts at 0
-Have two buttons on the screen, one to increase (+) the count by 1, and one button to lower (-) the count by 1.
-Pressing the plus button increases the count by 1, pressing the minus button decreases by 1
-Create a Github repository for this project and write Git commits as you go.
-Send me the project for review and get started on the next project.
have a starting variable that is equal to 0
increase the count when pressing + by adding 1 to the current number at
the same time decrease the count by 1 when - is pressed 


*/				
 let increaseNumber = getElementById("increase");
 let decreaseNumber = getElementById("decrease");
 let int = getElementById("number");
 let integer = 0;
 
 increaseNumber.addEventListener("click", addOne(){																				 {
 		integer += 1;
 		int.innerHTML = integer;				

 });		
 

  decreaseNumber.addEventListener("click", subOne() {
  	integer -= 1;
  	int.innerHTML = integer;
  });

 		