"use @hop/hiphop";
"use hopscript";

import * as hh from "@hop/hiphop";

hiphop module prg( in A, in B, out O ) {
   await( A.now );
   await( B.now );
   emit O();
}

exports.prg = new hh.ReactiveMachine( prg, "awaitseq" );
