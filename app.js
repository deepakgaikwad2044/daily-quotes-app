let apikey = `ICmAlfuDID6Y0y56hXiupw==RF2150NowQIHRrZa`;



let apiurl = `https://api.api-ninjas.com/v1/quotes`;
   
     

let contentdiv  = document.querySelector(".contentdiv");

let quateres = document.querySelector(".quateres");

let authors = document.querySelector("span");


let quotecategory = document.querySelector("#quotecategory");
let btn = document.querySelector(".btn");

let resdata = document.querySelector(".resdata");


let error = document.querySelector(".error");


let errortext = document.querySelector(".errortext");


const requestapi = async(api)=>{
quateres.innerHTML = 'getting quaote...';
authors.innerHTML = 'getting author...';
quotecategory.innerHTML = 'getting category...';

let apirep =  await fetch(api, {
    headers:{'X-Api-Key': apikey}
}) .then(resp=>resp.json()).then(res=>res).catch(function(er){
      
      error.style.display="block";
      errortext.innerHTML = "internet connection required";  
      quateres.innerHTML ="";
      authors.innerHTML="";
   
      
  });
  
  showquate(apirep);
  
}

requestapi(apiurl);


const showquate = async(result)=>{
   
   
   let rand = Math.floor(Math.random() * result.length);
   
   console.log(result[rand])
   
 const {quote , author , category} = result[0];
   
  

   
  quateres.innerHTML = ` <i class="fas fa-quote-left"></i>  ${quote}  
 <i class="fas fa-quote-right"></i> `;
    
     
   authors.innerHTML = author;
   
   quotecategory.innerHTML = category;
   
}


const slidechange = ()=>{
 

 quateres.innerHTML="geting quote...";
authors.innerHTML = "getting author.."
quotecategory.innerHTML = 'getting category...';  
  fetch(apiurl, {headers:{'X-Api-Key':apikey}}).then(resp=>resp.json()).then(function(res){
    
  
   let rand = Math.floor(Math.random() * res.length);
   
   const {quote , author, category} = res[rand];
   
  quateres.innerHTML = ` <i class="fas fa-quote-left"></i>  ${quote}  
 <i class="fas fa-quote-right"></i> `;
    
    let isauthor = author || "author not found"
   authors.innerHTML = ` -${isauthor}`;
quotecategory.innerHTML = category;
   error.style.display="none";
  }).catch(function(er){
      error.style.display="block";
      errortext.innerHTML = "internet connection required";  
  });
  
}  
  

btn.addEventListener("click", slidechange);