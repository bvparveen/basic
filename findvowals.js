var str = "TajMahal";     // String Given
var i = 0;
var vowels = 0;            // Vowels counter
var consonants = 0;        // Consonants counter

while(str[i++] != '\0') 
{
   if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' )
     
   {
       vowels++;
    }

   else
   { 
      consonants++;

   }

}
console.log(vowels,consonants,str);

