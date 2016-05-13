"use hopscript"

/* check if semantics of suspends / resume is correct when a task is over */

const hh = require("hiphop");

var glob = 5;

const exec_interface = {
   start: function() {
      console.log("Oi.");
      setTimeout(function(self) {
	 console.log("Oi timeout.");
	 self.return(glob++);
      }, 1000, this);
   },
   susp: function() {
      console.log("suspended.");
   },
   res: function() {
      console.log("resumed.");
   }
}

const prg =
      <hh.module>

	<hh.inputsignal name="RES"/>
	<hh.inputsignal name="S"/>
	<hh.outputsignal name="O"/>
	<hh.outputsignal name="OT" valued/>
	<hh.tasksignal name="T"/>
	<hh.parallel>
	  <hh.suspend signal_name="S">
	    <hh.exec signal_name="T" interface=${exec_interface}/>
	    <hh.emit signal_name="OT" arg=${hh.value("T")}/>
	  </hh.suspend>
	  <hh.emit signal_name="O"/>
	</hh.parallel>
	<hh.await signal_name="RES"/>
	<hh.emit signal_name="OT" arg=${hh.value("T")}/>
      </hh.module>

var machine = new hh.ReactiveMachine(prg, "exec");

console.log(machine.react());
console.log(machine.inputAndReact("S"));
console.log(machine.inputAndReact("S"));
console.log(machine.inputAndReact("S"));
console.log(machine.inputAndReact("S"));
console.log(machine.react());
console.log(machine.react());
console.log(machine.inputAndReact("S"));

setTimeout(function() {
   console.log(machine.react());
   console.log(machine.inputAndReact("RES"));
   console.log(machine.inputAndReact("S"));
   console.log(machine.react());
}, 2000);
