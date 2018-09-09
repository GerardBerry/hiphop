"use hopscript"

var hh = require( "hiphop" );

function sum( arg1, arg2 ) {
   return arg1 + arg2;
}

hiphop module prg( S1_and_S2, S1_and_not_S2, not_S1_and_S2, not_S1_and_not_S2 ) {
   loop {
      T1: {
	 signal S1 = 10;

	 fork {
	    yield;
	    emit S1( preval( S1 ) );
	    break T1;
	 } par {
	    loop {
	       T2: {
		  signal S2 = 20;
		  
		  fork {
		     yield;
		     emit S2( preval( S2 ) );
		     break T2;
		  } par {
		     loop {
			if( now( S1 ) ) {
			   if( now( S2 ) ) {
			      emit S1_and_S2( sum( val( S1 ), val( S2 ) ) );
			   } else {
			      emit S1_and_not_S2( sum( val( S1 ), val( S2 ) ) );
			   }
			} else if( now( S2 ) ) {
			   emit not_S1_and_S2( sum( val( S1 ), val( S2 ) ) );
			} else {
			   emit not_S1_and_not_S2( sum( val( S1 ), val( S2 ) ) );
			}
			yield;
		     }
		  }
	       }
	    }
	 }
      }
   }
}

exports.prg = new hh.ReactiveMachine( prg, "P18valued" );