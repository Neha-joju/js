function filterEven(a)
{
    for(i=0;i<a.length;i++){
        if(a[i]%2!==0)
        {
            a.splice(i,1)
        }
    
    }
 console.log(a);
}
let filterednumbers = [1,2,3,4,5,6,7,8,9]
filterEven(filterednumbers)