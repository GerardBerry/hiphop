"use @hop/hiphop"
"use hopscript"

import * as hh from "@hop/hiphop";

function foo( evt ) {
   console.log( "foo called by", evt.type, "with value", evt.nowval );
}

hiphop module prg( in I, out O ) {
   await( I.now );
   emit O( I.nowval );
}

const m = new hh.ReactiveMachine( prg, "awaitvalued" );
m.addEventListener( "O", foo );

exports.prg = m;
