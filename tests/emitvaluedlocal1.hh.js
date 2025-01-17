"use @hop/hiphop";
"use hopscript";

import * as hh from "@hop/hiphop";

hiphop module prg( O ) {
   loop {
      signal S = 1;
      
      emit S( S.preval + 1 );
      emit O( S.nowval );
      yield;
      emit O( O.preval );
      yield;
   }
}

exports.prg = new hh.ReactiveMachine( prg, "emitvaluedlocal1" );
