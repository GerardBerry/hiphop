"use @hop/hiphop";
"use hopscript";

import * as hh from "@hop/hiphop";

function sum( arg1, arg2 ) {
   return arg1 + arg2;
}

hiphop module prg( O ) {
   loop {
      signal S = 1;

      emit S( S.preval + 1 );
      emit O( S.nowval );

      yield;
   }
}

exports.prg = new hh.ReactiveMachine( prg, "emitvaluedlocal2" );
