"use @hop/hiphop";
"use hopscript";

import * as hh from "@hop/hiphop";

hiphop module m( in S, O, F, W, Z ) {
   weakabort( S.now ) {
      loop {
	 emit O();
	 yield;
	 emit W();
	 yield;
	 emit Z();
      }
   }
   emit F();
}
   
exports.prg = new hh.ReactiveMachine( m, "wabort2" );
