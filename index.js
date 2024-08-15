 ///intlization
 let a=document.getElementById("a1")
 let b=document.getElementById("a2")
 let btn=document.getElementById("print")
let table=document.getElementById("table")
let table2=document.getElementById("table2")

 function PrintTable(a1,a2)
{
  let num1=parseInt(a.value)
  let num2=parseInt(b.value);
  for(let i=1;i<=num2;i++)
  {
   let row = table.insertRow();
       let cell=row.insertCell();
       cell.innerHTML=`${num1}x${i}=${num1*i}`
  }
   let i=1
  while(i<=a2)
  {
   let row = table2.insertRow();
       let cell=row.insertCell();
       cell.innerHTML=`${num1}x${i}=${num1*i}`
   i++
  }
}
function PrintTable2(a1,a2)
{
  let num1=parseInt(a.value)
  let num2=parseInt(b.value); 
   let i=1
  while(i<=a2)
  {
   let row = table2.insertRow();
       let cell=row.insertCell();
       cell.innerHTML=`${num1}x${i}=${num1*i}`
   i++
  }
} 
btn.addEventListener('click',()=>{
    PrintTable(a,b)
    PrintTable2(a,b)
   console.log(a.value)
   console.log(b.value)
 })
//  console.log(a)


// table()