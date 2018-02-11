$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "data/data.txt",
        language: { search: "",
        "searchPlaceholder": "Search" },
        columnDefs: [
            { width: 200, targets: 0 }
        ],
        "createdRow": function ( row, data, index ) {
            $(row).addClass(data[1]);                          
        },


"rowCallback": function( row, data, index ) {
    //Highlight Green      
     if ( data[1] === "3" ) {
      $('td:eq(1)', row).addClass( 'highlight-green' );
    };
    if ( data[2] === "3" ) {
      $('td:eq(2)', row).addClass( 'highlight-green' );
    };
    if ( data[3] === "3" ) {
      $('td:eq(3)', row).addClass( 'highlight-green' );
    };
    if ( data[4] === "3" ) {
      $('td:eq(4)', row).addClass( 'highlight-green' );
    };  
    if ( data[5] === "3" ) {
      $('td:eq(5)', row).addClass( 'highlight-green' );
    };        
    if ( data[6] === "3" ) {
      $('td:eq(6)', row).addClass( 'highlight-green' );
    };         
    if ( data[7] === "3" ) {
      $('td:eq(7)', row).addClass( 'highlight-green' );
    };     
     if ( data[8] >= "3" ) {
      $('td:eq(8)', row).addClass( 'highlight-green' );
    };           
     if ( data[9] <= "19" ) {
      $('td:eq(9)', row).addClass( 'highlight-green' );
    };   

 //Highlight Black     
    if ( data[1] === "2" ) {
      $('td:eq(1)', row).addClass( 'highlight-black' );
    };
    if ( data[2] === "2" ) {
      $('td:eq(2)', row).addClass( 'highlight-black' );
    };      
     if ( data[3] === "2" ) {
      $('td:eq(3)', row).addClass( 'highlight-black' );
    };
    if ( data[4] === "2" ) {
      $('td:eq(4)', row).addClass( 'highlight-black' );
    };    
    if ( data[5] === "2" ) {
      $('td:eq(5)', row).addClass( 'highlight-black' );
    };    
    if ( data[6] === "2" ) {
      $('td:eq(6)', row).addClass( 'highlight-black' );
    };
    if ( data[7] === "2" ) {
      $('td:eq(7)', row).addClass( 'highlight-black' );
    };
    if ( data[8] === "2" ) {
      $('td:eq(8)', row).addClass( 'highlight-black' );
    };


    //Highlight Orange      
     if ( data[1] === "1" ) {
      $('td:eq(1)', row).addClass( 'highlight-orange' );
    };
    if ( data[2] === "1" ) {
      $('td:eq(2)', row).addClass( 'highlight-orange' );
    };
    if ( data[3] === "1" ) {
      $('td:eq(3)', row).addClass( 'highlight-orange' );
    };
    if ( data[4] === "1" ) {
      $('td:eq(4)', row).addClass( 'highlight-orange' );
    };  
    if ( data[5] === "1" ) {
      $('td:eq(5)', row).addClass( 'highlight-orange' );
    };        
    if ( data[6] === "1" ) {
      $('td:eq(6)', row).addClass( 'highlight-orange' );
    };         
    if ( data[7] === "1" ) {
      $('td:eq(7)', row).addClass( 'highlight-orange' );
    };       
    if ( data[8] === "1" ) {
      $('td:eq(8)', row).addClass( 'highlight-orange' );
    }; 
     if ( data[9] === "11" ) {
      $('td:eq(9)', row).addClass( 'highlight-orange' );
    };       

        	//Highlight Red
     if ( data[1] === "0" ) {
      $('td:eq(1)', row).addClass( 'highlight-red' );
    };
    if ( data[2] === "0" ) {
      $('td:eq(2)', row).addClass( 'highlight-red' );
    };
    if ( data[3] === "0" ) {
      $('td:eq(3)', row).addClass( 'highlight-red' );
    };
    if ( data[4] === "0" ) {
      $('td:eq(4)', row).addClass( 'highlight-red' );
    };  
    if ( data[5] === "0" ) {
      $('td:eq(5)', row).addClass( 'highlight-red' );
    };        
    if ( data[6] === "0" ) {
      $('td:eq(6)', row).addClass( 'highlight-red' );
    };         
    if ( data[7] === "0" ) {
      $('td:eq(7)', row).addClass( 'highlight-red' );
    };     
    if ( data[8] === "0" ) {
      $('td:eq(8)', row).addClass( 'highlight-red' );
    }; 
     if ( data[9] === "10" ) {
      $('td:eq(9)', row).addClass( 'highlight-red' );
    };          
     if ( data[9] === "8" ) {
      $('td:eq(9)', row).addClass( 'highlight-red' );
    };  
  },



    } );


} );