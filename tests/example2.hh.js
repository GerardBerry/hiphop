"use hopscript"

var hh = require( "hiphop" );

hiphop module prg( T, V ) {
   signal S;

   loop {
      emit S();
      if( now( S ) ) emit T();
      yield;
      emit V();
   }
}

exports.prg = new hh.ReactiveMachine( prg, "example2" );
