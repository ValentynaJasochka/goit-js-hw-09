!function(){var e=document.querySelector(".form"),n=null;function o(e,n){var o={position:e,delay:n},t=Math.random()>.3;return new Promise((function(e,a){setTimeout((function(){t?e(o):a(o)}),n)}))}e.addEventListener("submit",(function(t){t.preventDefault(),n=Number(e.delay.value);for(var a=1;a<=e.amount.value;a+=1)o(a,n).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=Number(e.step.value);t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.8fbebf72.js.map
