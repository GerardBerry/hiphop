"use @hop/hiphop";
"use strict";
"use hopscript";

import * as hh from "@hop/hiphop";

hiphop module prg( O ) {
   signal L;

   fork {
      loop {
	 emit L();
	 yield;
      }
   } par {
      loop {
	 await immediate( L.now );
	 emit O();
      }
   }
}

const machine = new hh.ReactiveMachine( prg, "sync-err" );

try {
   console.log( machine.react() );
   console.log( machine.react() );
   console.log( machine.react() );
   console.log( machine.react() );
} catch( e ) {
   console.log( e.message );
}
