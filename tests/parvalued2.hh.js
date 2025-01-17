"use @hop/hiphop";
"use hopscript";

import * as hh from "@hop/hiphop";

hiphop module prg( J ) {
   signal I;

   fork {
      emit I( 5 );
      if( I.now ) emit J( I.nowval );
   }
}

exports.prg = new hh.ReactiveMachine( prg, "parvalued2" );
