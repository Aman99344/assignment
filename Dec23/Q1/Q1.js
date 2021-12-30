//Check from the objects.js file g_class. Give the list of //students which have greater than or equal to 85 marks.

 
      
  var g_class = {
       
        'name': "Aman gupta",
        'marks': 99,

     'students': [

          {
            'name': "akhil",
            'marks':  85,
          },

           {
            'name': "sovan",
            'marks':  55,
          },


           {
            'name': "Rahul",
            'marks':  25,
          },
           
          {
            'name': "Aryan",
            'marks':  90,
          },

          {
            'name': "Ayush",
            'marks':  89,
          },

  ],
  };
 
    //Finding greater number from above.
    
  for(var a = 0; a < g_class.students.length; a = a + 1) {
     
     if(g_class.students[a].marks >= 85) { 
    
     
   console.log(g_class.students[a].name, g_class.students[a].marks); 

 }  
 }



//console.log(g_class.students.length);
//console.log(g_class.students[3].marks);

