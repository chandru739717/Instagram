var a=document.getElementById("form")
var b=document.getElementById("form1")
var c=document.getElementById("btn")
console.log(a,b)
c.addEventListener('click',()=>{
if(a.value!==b.value){
alert("password doesn't match")
event.preventDefault()
}
else{
    this.form.submit()
    
}
})