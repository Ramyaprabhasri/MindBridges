function observable() {
    let observers = [];
    let state = "";
  
    function subscribe(func) {
      observers.push(func);
    }
  
    function unsubscribe(func) {
      var index = observers.indexOf(func);
      observers.splice(index, 1);
    }
  
    function notify() {
      return observers.forEach((observer) => observer(state));
    }
  
    function setState(newState) {
      state = newState;
      notify();
    }
  
    return {
      subscribe,
      unsubscribe,
      setState,
    };
  }
  var event1 = observable();
  
  function handler1(state) {
    console.log("Handler 1 received state:", state);
  }
  
  function handler2(state) {
    console.log("Handler 2 received state:", state);
  }
  
  event1.subscribe(handler1);
  event1.subscribe(handler2);
  event1.setState("Event Triggered!"); 
  event1.unsubscribe(handler1);
  event1.setState("Another Event");
  