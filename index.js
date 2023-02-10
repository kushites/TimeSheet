function timeconversion(bag){
    let time = bag.split("");
    if((time[0]=="1")&&(time[1]=="2")&&(time[time.length-2]=="A")&&time.length==6){
       time[0]="0"
       time[1]="0"
        let ans = "";
        for(let i=0; i<time.length-2; i++){
            ans+=time[i];
        }
        return ans;
    }
    else if(time[time.length-2]=="P"){
       let temp = "";
        temp+=time[0];
        
        
        
       let temp1 = parseInt(temp);
        if(temp1!=12){
        temp1+=12;
        }
        let ans =temp1.toString();
        for(let i =time.length-4; i<time.length-2; i++){
            ans+=time[i];
        }
        return ans;
    }
    else{
        let ans ="";
         for(let i =0; i<time.length-2; i++){
            ans+=time[i];
        }
        return ans;

}
}
let arr =document.querySelectorAll("tr>td:nth-child(4)>input:nth-child(3)");
for(let i=0; i<arr.length; i++){
    arr[i].addEventListener("keypress", function(event){
        if(event.key=="Enter"){
            let start = document.querySelectorAll("tr>td:nth-child(2)>input:nth-child(1)")
            let start1=document.querySelectorAll("tr>td:nth-child(2)>input:nth-child(3)");
            let temp=""
            let bag1 = "";
            let bag=""
            temp=start1[i].value
            if(start1[i].value.toString().length==1){
                temp="0";
                temp+=start1[i].value;
            }
            let startmeridian = document.querySelectorAll("tr>td:nth-child(2)>#ampm");
            console.log(startmeridian[i].value)
            bag = start[i].value+temp+startmeridian[i].value;
         
            if((bag.length==5||bag.length==6)&&start[i].value>=1&&start[i].value<=12&&start1[i].value>=00&&start1[i].value<=59){
                console.log(bag)
            }
            else{
                bag=""

                alert(`please fill the correct value at row ${i}`)
            }
            if(bag.length!=0){
                
                let end = document.querySelectorAll("tr>td:nth-child(3)>input:nth-child(1)")
                let end1 = document.querySelectorAll("tr>td:nth-child(3)>input:nth-child(3)")
                let temp=""
                temp=end1[i].value
                if(end1[i].value.toString().length==1){
                    temp="0";
                    temp+=end1[i].value;
                }
                let endmeridian = document.querySelectorAll("tr>td:nth-child(3)>#ampm");
                bag1 = end[i].value+temp+endmeridian[i].value;
                console.log(bag1)
                
                if((bag1.length==5||bag1.length==6)&&end[i].value>=1&&end[i].value<=12&&end1[i].value>=00&&end1[i].value<=59){
                console.log(bag1)
                }
                else{
                bag1=""

                alert(`please fill the correct value at row ${i}`)
                }
                
            }
            else{
                alert("first fill the start time")
            }
           let ans = timeconversion(bag);
           let ans1 = timeconversion(bag1);
          minutesstart = ans.substring(ans.length-2, ans.length)
          minuteend = ans1.substring(ans1.length-2, ans1.length)
          let finalminute=0;
          let finalhour = 0;
          console.log(ans,ans1)
          if(Number(ans1)>Number(ans)){
          if(minuteend<minutesstart){
            let temp = eval(minutesstart-minuteend);
            finalminute= eval(60-temp);
          }
          else{
            finalminute=eval(minuteend-minutesstart);
          }
          let x = eval(ans1-ans);
          x = x.toString();
          if(x.length==3){
            finalhour=x[0]
          }
          else if(x.length==4){
            finalhour=x[0]
            finalhour+=x[1]
          }
          else{
            finalhour=0;
          }
          console.log(finalhour,finalminute)

        }
        else{
            alert("start time is greater than endtime")
        }
        if(bag!=""&&bag1!=""){
            let arr = document.querySelectorAll("tr>td:nth-child(4)>input:nth-child(1)");
            let arr1 = document.querySelectorAll("tr>td:nth-child(4)>input:nth-child(3)")
            
            if(finalhour>Number(arr[i].value)){
                finalhour= eval(finalhour-arr[i].value);
            }
            else{
                alert("break hour cannot be more than than work hour");
            }
            if(finalminute>arr1[i].value){
                finalminute=eval(finalminute-arr1[i].value)
            }
            else if(finalminute==arr1[i].value){
                finalminute=0;
            }
            else{
                finalhour--;
                finalminute = 60 - eval(arr1[i].value-finalminute)
            }
            let total = document.querySelectorAll("tr>td:nth-child(5)")
            total[i].innerText = `${finalhour}.${finalminute}`
        }
    }
        
    })
}

document.getElementById("calculate").addEventListener("click", function(){
    let arr = document.querySelectorAll("tr>td:nth-child(5)")
    let sum=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].innerText==""){
            alert("please fill all the column")
            break;
        }
        else{
            sum+=eval(arr[i].innerText)
        }
    }
    document.querySelector("#total").innerText=sum;
})

document.getElementById("clear").addEventListener("click",function(){
    window.location.reload();
})
