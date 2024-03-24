<script>
	
	const h=document.querySelector("#h");

	const m=document.querySelector("#m");

	const s=document.querySelector("#s");

setInterval(()=>{

   const today = new Date();
   const th = todayDate.getHours() *30;

   const tm = todayDate.getMinutes() *6;

   const ts = todayDate.getSeconds() *6; 
   
    h.style.transform='rotateZ(${th+(tm/12)}deg)';
   
    m.style.transform='rotateZ(${th}deg)';

    s.style.transform='rotateZ(${th}deg)'; 
   })


  const body = document.querySelector("body");
  const checkbox = document.querySelector(".button")

checkbox.addEventListener("click" ,()=>{
   body.ClassList.toggle("active");    
}

</script>