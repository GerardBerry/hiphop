"use @hop/hiphop"
"use hopscript"

import * as hh from "@hop/hiphop";

hiphop module prg( in I, J, K ) {
   loop {
      abort( I.now ) {
	 sustain J();
      }
      emit K();
   }
}

exports.prg = new hh.ReactiveMachine( prg, "sustain1" );
