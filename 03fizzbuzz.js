

        function fizzbuzz(){
            let c3=0;
            let c5=0;
            for(let i=0; i<100;i++){
                    c3++;
                    c5++;
                    let d= "";
               if(c3 === 3){d += console.log('fizz'); c3=0}
               if(c5 === 5){d += console.log('buzz'); c5=0 }
               if(i % 3===0 && i% 5===0){
                   console.log("fizzbuzz")
               }
               if(d===""){
                   console.log(i)
               }else{
                   console.log(d)
               }
            }



        }
fizzbuzz()
