var array = [101, 11, 3, 4, 50, 69, 7, 8, 9, 0];
   var loop, largest, second;

   if(array[0] > array[1])
    {
      largest = array[0];
      second  = array[1];
   }
    else
     {
      largest = array[1];
      second  = array[0];
     }

   for(loop = 2; loop < 10; loop++)
    {
      if( largest < array[loop] )
       {
         second = largest;
         largest = array[loop];
      }
       else if( second < array[loop] )
        {
         second =  array[loop];
      }
   }
   console.log(largest, second);
