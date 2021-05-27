
shadow.cljs.devtools.client.env.module_loaded('app');

try { app.main.main_BANG_(); } catch (e) { console.error("An error occurred when calling (app.main/main!)"); throw(e); }