/* Mac specific */

const press = async (api, key, modifiers) => { 
	await api.pressKey(key, modifiers)
}

const type = async (api, text) => { 
	await api.typeText(text)
}

const global = (trigger, callback) => {
	serenade.global().command(trigger, callback);
}

const vscode = (trigger, callback) => {
	serenade.app("vscode").command(trigger, callback);
}

const chrome = (trigger, callback) => {
	serenade.app("chrome").command(trigger, callback);
}



/* Text Edit Commands */
// using default VS code keybindings
vscode("join lines", _ => press(_, "j", ["control"]));

vscode("comment", _ => press(_, "/", ["command"]));

vscode("copy down", _ => press(_, "down", ["option", "shift"]));

vscode("move up", _ => press(_, "up", ["option"]));
vscode("move down", _ => press(_, "down", ["option"]));

vscode("next occurrence", _ => press(_, "g", ["command"]));

vscode("select next occurrence", _ => press(_, "d", ["command"]));
vscode("select all occurrences", _ => press(_, "l", ["command", "shift"]));

// adds cursors at the end of a multi-line selection
vscode("cursor add", _ => press(_, "i", ["option", "shift"]));
vscode("cursor undo", _ => press(_, "u", ["command"]));

vscode("cursor below", _ => press(_, "down", ["option", "command"]));
vscode("cursor above", _ => press(_, "up", ["option", "command"]));

// partials are separate words in camelCase or snake_case
vscode("select next partial", _ => press(_, "right", ["shift", "option", "control"]));
vscode("select previous partial", _ => press(_, "left", ["shift", "option", "control"]));

// partials are separate words in camelCase or snake_case
vscode("next partial", _ => press(_, "right", ["option", "control"]));
vscode("previous partial", _ => press(_, "left", ["option", "control"]));

// uses default smartselect built into vscode
vscode("expand selection", _ => press(_, "right", ["shift", "control"]));
vscode("shrink selection", _ => press(_, "left", ["shift", "control"]));


// in vscode pressing ( [ { " ' or ` will wrap the selection in respective symbols so you only need to press the opening symbol unlike the global command
vscode("braces", _ => press(_, "{"));
vscode("brackets", _ => press(_, "["));
vscode("parens", _ => press(_, "("));
vscode("single quotes", _ => press(_, "'"));
vscode("double quotes", _ => press(_, "\""));
vscode("quotes", _ => press(_, "\""));
vscode("ticks", _ => press(_, "`"));

global("type title case <%text%>", async (api, matches) => {
	const wordlist = matches.text.split(" ");
	for await (word of wordlist) {
		await api.typeText(word.charAt(0).toUpperCase() + word.slice(1) + " ");
	}
	await api.pressKey("backspace");
});

// clear single quotes
// clear quotes


/*
	these vscode commands are NOT default VS Code bindings
	they are Sublime Text defaults I'm used to
	I added them in my VS code settings so I can use them.
	uncomment after you have changed your keybindings
*/

vscode("uppercase", async (api) => {
	// NOT A DEFAULT. Copied from sublime.
	// command + K chord to U (press U after command+K)
	await api.pressKey("k", ["command"]);
	await api.pressKey("u");
});

vscode("lowercase", async (api) => {
	// NOT A DEFAULT. Copied from sublime.
	// command + K chord to L (press L after command+K)
	await api.pressKey("k", ["command"]);
	await api.pressKey("l");
});


// NOT A DEFAULT. Copied from sublime.
vscode("join tag", _ => press(_, "'", ["command", "shift"]));

// NOT A DEFAULT. Copied from sublime.
vscode("update tag", async (api) => {
	// command + E chord to T (press T after command+E)
	await api.pressKey("e", ["command"]);
	await api.pressKey("t");
});


/* 
	These four snippets below only work after you disable 
	Mac OS default Mission Control shortcuts 
	Go to System Preferences > Keyboard > Shortcuts > Mission Control
	Disable "Mission Control" entirely (uncheck ^← ^→ ^↑ ^↓)

	
	Currently Does not work in Typescript React files (.tsx) in VSCode.
	Support is part of backlog milestone 8: 
	https://github.com/microsoft/vscode/issues/87608
	https://github.com/microsoft/vscode/milestone/8
*/
vscode("balance out", _ => press(_, "up", ["control"]));
vscode("balance in", _ => press(_, "down", ["control"]));
vscode("select next item", _ => press(_, "right", ["control"]));
vscode("select previous item", _ => press(_, "left", ["control"]));


global("find <%text%>", async (api, matches) => {
	await api.pressKey("f", ["command"]);
	await api.type(matches.text);
});

global("find everywhere <%text%>", async (api, matches) => {
	await api.pressKey("f", ["command", "shift"]);
	await api.type(matches.text);
});

// for when you add a pair of (), {}, or [] and want to expand them
// but your cursor is positioned after
global("left enter", async api => { 
	await api.pressKey("left");
	await api.pressKey("enter");
});

// synonym to above command
global("expand", async api => {
	await api.pressKey("left");
	await api.pressKey("enter");
});

global("forward delete", async api => {
	await api.pressKey("right");
	await api.pressKey("delete");
});

global("type in ticks <%text%>", async (api, matches) => {
	await api.pressKey("`");
	await api.typeText(matches.text);
	await api.pressKey("`");
});

/* General universal movement commands */
global("space", _ => press(_, "space"));
global("dot", _ => press(_, "."));
global("comma", _ => press(_, ","));
global("colon", _ => press(_, ":"));
global("semicolon", _ => press(_, ";"));
global("dash", _ => press(_, "-"));
global("underscore", _ => press(_, "_"));
global("slash", _ => press(_, "/"));

// for when typing symbols into other apps like terminal or chrome JS console
global("braces", async api => {
	await api.pressKey("{");
	await api.pressKey("}");
	await api.pressKey("left");
});
global("brackets", async api => {
	await api.pressKey("[");
	await api.pressKey("]");
	await api.pressKey("left");
});
global("parens", async api => {
	await api.pressKey("(");
	await api.pressKey(")");
	await api.pressKey("left");
});
global("single quotes", async api => {
	await api.pressKey("'");
	await api.pressKey("'");
	await api.pressKey("left");
});
global("double quotes", async api => {
	await api.pressKey("\"");
	await api.pressKey("\"");
	await api.pressKey("left");
});
global("quotes", async api => {
	await api.pressKey("\"");
	await api.pressKey("\"");
	await api.pressKey("left");
});
global("ticks", async api => {
	await api.pressKey("`");
	await api.pressKey("`");
	await api.pressKey("left");
});

global("type single tag <%text%>", async (api, matches) => {
	await api.typeText("<" + matches.text + "/>");
});

global("open tag", async api => {
	await api.typeText("<>");
	await api.pressKey("left");
});

global("close tag", async api => {
	await api.typeText("</>");
	await api.pressKey("left");
});

global("single tag", async api => {
	await api.typeText("</>");
	await api.pressKey("left");
	await api.pressKey("left");
});

vscode("uppercase", async (api) => {
	// NOT A DEFAULT. Copied from sublime.
	// command + K chord to U (press U after command+K)
	await api.pressKey("k", ["command"]);
	await api.pressKey("u");
});

global("spotlight", _ => press(_, "space", ["command"]));

global("left", _ => press(_, "left"));
global("right", _ => press(_, "right"));
global("up", _ => press(_, "up"));
global("down", _ => press(_, "down"));

global("select left", _ => press(_, "left", ["shift"]));
global("select right", _ => press(_, "right", ["shift"]));
global("select up", _ => press(_, "up", ["shift"]));
global("select down", _ => press(_, "down", ["shift"]));

global("select next word", _ => press(_, "right", ["shift", "option"]));
global("select previous word", _ => press(_, "left", ["shift", "option"]));

global("select to end", _ => press(_, "right", ["shift", "command"]));
global("select to start", _ => press(_, "left", ["shift", "command"]));

global("cursor start", _ => press(_, "left", ["command"]));
global("cursor end", _ => press(_, "right", ["command"]));

global("select all", _ => press(_, "a", ["command"]));
// when you have multiple windows of the same app open
global("switch window", _ => press(_, "`", ["command"]));

global("scroll", _ => press(_, "pagedown"));
global("scroll down", _ => press(_, "pagedown"));
global("scroll up", _ => press(_, "pageup"));

// works with multiple line selections
global("outdent", _ => press(_, "[", ["command"]));
global("indent", _ => press(_, "]", ["command"]));

global("zoom in", _ => press(_, "+", ["command"]));
global("zoom out", _ => press(_, "-", ["command"]));

global("system copy", _ => press(_, "c", ["command"]));
global("system cut", _ => press(_, "x", ["command"]));
global("system paste", _ => press(_, "v", ["command"]));

global("delete", _ => press(_, "backspace")); // make "delete" command global


/* chrome commands */
chrome("new incognito window", _ => press(_, "n", ["command", "shift"]));
chrome("new window", _ => press(_, "n", ["command", "shift"]));
chrome("hard reload", _ => press(_, "r", ["command", "shift"]));
chrome("open console", _ => press(_, "j", ["command", "option"]));
chrome("open inspector", _ => press(_, "c", ["command", "option"]));

// opens the last pane you had open
chrome("open developer tools", _ => press(_, "i", ["command", "option"])); 
chrome("address bar", _ => press(_, "l", ["command"]));

// 'developer' instead of 'dev' cause serenade hears it easier
chrome("next developer tab", _ => press(_, "]", ["command"])); 
chrome("previous developer tab", _ => press(_, "[", ["command"]));


// requires dev tools to be open
chrome("device mode", _ => press(_, "m", ["command", "shift"]));

/* Terminal + git commands */
// for some reason serenade.app("term").command did not work
// 'git' is easily confused with 'get' so using 'g' instead
global("g status", async (api) => {
	await api.focus("term");
	await api.typeText("git status");
	await api.pressKey("return");
});

global("g diff", async (api) => {
	await api.focus("term");
	await api.typeText("git diff");
	await api.pressKey("return");
});

global("g add new", async (api) => {
	await api.focus("term");
	await api.typeText("git add .");
	await api.pressKey("return");
});

global("g add all", async (api) => {
	await api.focus("term");
	await api.typeText("git add -A :/");
	await api.pressKey("return");
});

global("g commit", async (api) => {
	await api.focus("term");
	await api.typeText("git commit -m \"\"");
	await api.pressKey("left");
});

global("g merge", async (api) => {
	await api.focus("term");
	await api.typeText("git merge ");
});

global("g commit all", async (api) => {
	await api.focus("term");
	await api.typeText("git commit -am \"\"");
	await api.pressKey("left");
});

global("g push", async (api) => {
	await api.focus("term");
	await api.typeText("git push");
	await api.pressKey("return");
});

global("g pull", async (api) => {
	await api.focus("term");
	await api.typeText("git pull");
	await api.pressKey("return");
});

global("g log", async (api) => {
	await api.focus("term");
	await api.typeText("git log");
	await api.pressKey("return");
});

global("g branch", async (api) => {
	await api.focus("term");
	await api.typeText("git branch");
	await api.pressKey("return");
});

global("g checkout", async (api) => {
	await api.focus("term");
	await api.typeText("git checkout ");
});

global("g checkout new", async (api) => {
	await api.focus("term");
	await api.typeText("git checkout -b ");
});

global("clear console", async (api) => {
	await api.focus("term");
	await api.typeText("clear");
	await api.pressKey("return");
});

global("cancel", async (api) => {
	await api.focus("term");
	await api.pressKey("c", ["control"]);
});

global("cd", async (api) => {
	await api.focus("term");
	await api.typeText("cd ");
});

global("cd <%text%>", async (api, matches) => {
	await api.focus("term");
	await api.typeText("cd " + matches.text);
});

global("open code", async (api) => {
	await api.pressKey("space", ["command"]);
	await api.typeText("Visual Studio Code");
	await api.pressKey("return");
});

global("open terminal", async (api) => {
	await api.pressKey("space", ["command"]);
	await api.typeText("terminal");
	await api.pressKey("return");
});

global("open in code", async (api) => {
	await api.focus("term");
	await api.typeText("code .");
	await api.pressKey("return");
});

global("g merge in <%text%>", async (api, matches) => {
	await api.focus("term");
	await api.typeText("git branch | grep '*' | awk '{ print $2 }' | pbcopy"); // copies current branch to clipboard
	await api.pressKey("return");
	await api.typeText("git checkout " + matches.text); // checkout out branch from match
	await api.pressKey("return");
	await api.typeText("git pull"); // pulls updates
	await api.pressKey("return");
	await api.typeText("git checkout "); // checkouts original branch (pasted from clipboard)
	await api.pressKey("v", ["command"]);
	await api.pressKey("return");
	await api.typeText("git merge " + matches.text); // merges in branch from match
	await api.pressKey("return");
	// up to you to resolve conflicts manually
});

