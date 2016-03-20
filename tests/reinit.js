"use hopscript"

const hh = require("hiphop");

const prg =
      <hh.module>
	<hh.outputsignal name="AUX"
			 init_value=1
			 reinit_func=${function() {return 1}}/>
	<hh.outputsignal name="O" reinit_func=${function() {return 2}}/>
	<hh.emit signal_name="O" args=5/>
	<hh.emit signal_name="AUX" args=245/>
	<hh.pause/>
	<hh.loop>
	  <hh.emit signal_name="O"
		   func=${function(a, b) { return a + b }}
		   args=${[1, hh.preValue("O")]}/>
	  <hh.emit signal_name="AUX"/>
	  <hh.pause/>
	</hh.loop>
      </hh.module>;

const machine = new hh.ReactiveMachine(prg, "reinit");

console.log(machine.react());
console.log(machine.react());
console.log(machine.react());
console.log(machine.react());

