"use hopscript"

var hh = require( "hiphop" );

function minus( arg1, arg2 ) { return arg1 - arg2 };
function plus( arg1, arg2 ) { return arg1 + arg2 };

hiphop module prg( I, O=5, U ) {
   loop {
      emit I( plus( 3 - 2, 5 ) );
      emit O( plus( val( I ),  7 ) );
      emit U( minus( preval( O ), 1 ) );
      yield;
   }
}

exports.prg = new hh.ReactiveMachine( prg, "value2" );
