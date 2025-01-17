"use @hop/hiphop";
"use hopscript";

import * as hh from "@hop/hiphop";

hiphop module prg( A, B, END1, END2 ) {
   fork {
      emit A();
      await immediate( B );
      emit END1();
   } par {
      emit B();
      await immediate( B );
      emit END2();
   }
}

exports.prg = new hh.ReactiveMachine( prg, "crossawait" );
