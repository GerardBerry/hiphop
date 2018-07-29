"use hopscript"

var hh = require( "hiphop" );

hiphop module m( in S, O, F, W ) {
   weakabort now( S ) {
      loop {
	 emit O;
	 yield;
	 emit W;
      }
   }
   emit F;
}

exports.prg = new hh.ReactiveMachine( m, "wabort" );
