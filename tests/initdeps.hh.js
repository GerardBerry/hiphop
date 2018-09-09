"use hopscript"

const hh = require("hiphop");

hiphop module prg( B = 5, A = val( B ) ) {
   emit A();
   yield;
   {
      signal Y = val( B );
      signal X = val( Y );

      fork {
	 emit X();
      }

      emit A( val( X ) );
   }
}

const m = new hh.ReactiveMachine( prg );
m.debug_emitted_func = console.log

m.react()
m.react()