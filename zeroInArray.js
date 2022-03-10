var arr = [12, 32, 0, 43,0, 11,0, 2,88, 76];
var count=0
for (var i = 1; i < arr.length; i++)
 {
    if (arr[i] == 0)
    {

       count++
    }
 
  }
  console.log(count);
