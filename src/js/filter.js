//filter
//All
const all = document.getElementById("all");
all.addEventListener("click", async event => loadCharacter(API));

//Alive
const alive = document.getElementById("alive");
const valueAlive = alive.id;
alive.addEventListener("click", async event => loadCharacter(`${API}?status=${valueAlive}`));

//Dead
const dead = document.getElementById("dead");
const valueDead = dead.id;
dead.addEventListener("click", async event => loadCharacter(`${API}?status=${valueDead}`));

//Unknown
const unknown = document.getElementById("unknown");
const valueUnknown = unknown.id;
unknown.addEventListener("click", async event => loadCharacter(`${API}?status=${valueUnknown}`));
