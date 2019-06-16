var N , I=1, SP=0, CP=0, CI=0

    while (i<=5){
      N=prompt();
        
        if (N %2==0){
            SP+= N
            CP+=1
        }
        else{
            I++
        }
        console.log(CI/(CI + CP))
        if (CP!=0) {
            console.log(SP/CP)
        }
    }