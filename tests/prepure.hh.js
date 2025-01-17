"use @hop/hiphop";
"use hopscript";

import * as hh from "@hop/hiphop";

hiphop module prg( O1, O2 ) {
   loop {
      signal S;

      if( S.pre ) {
	 emit O1();
      } else {
	 emit O2();
      }

      yield;

      emit S();
   }
}

exports.prg = new hh.ReactiveMachine( prg, "prepure" );
