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
	 yield;
      }
   }
}

const machine = new hh.ReactiveMachine( prg, "sync2" );
machine.debug_emitted_func = console.log;

machine.react()
machine.react()
machine.react()
machine.react()
