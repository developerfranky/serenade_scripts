# Serenade Scripts

## Workflows.js

Mostly general text editing commands and app navigation

General thinking is to avoid very long voice commands. I'd rather take things one step at at time and go through multiple steps/voice commands. 

For example, if I want to create a new branch, saying `"g checkout new sprint 92 slash snake case some new feature"` would be tedious in one breath and prone to misinterpretation. Instead, say `"g checkout new"` which focuses the terminal and types `git checkout -b ` with the cursor at the end where you can then say your branch name. Most commands will only type the core functionality and place the cursor in a convenient location where you can then take a breath and say another command.

If you have the same voice command for a global snippet and an app-specific snippet, the app-specific snippet must be defined first in the file.

Also, many of the non alphanumeric characters are very common in every day writing so I've mapped their literal names to pressng the key for them (`dot` presses period, `space` presses space, `slash` presses slash, etc.). This also solves an issue where sometimes if you say something like `type window.location.href` in the terminal or chrome console serenade literally outputs `window dot location dot href` (same bug happens with space and other chars).

### General global commands

Voice Command | Description 
------------ | -------------
open terminal | Opens (or focuses) terminal from Spotlight
open code | Opens VS Code
spotlight | Opens Spotlight for you to type
find <%text%>" | Standard cmd + f
find everywhere <%text%>" | cmd + shift + f (maybe move this only for VS code)
type title case <%text%>" | Types In Title Case With Every Word Capitalized
left enter | For when you add a pair of (), {}, or [] and want to expand them but your cursor is positioned after
expand | Same as "left enter"
forward delete | Deletes character in front of cursor
type in ticks <%text%> | \`Output will be wrapped in backticks\`
space | Presses space
dot | Presses period
comma | Presses comma
colon | Presses colon
semicolon | Presses semicolon
dash | Presses dash
underscore | Presses underscore
slash | Presses slash
braces | Types `{}` with the cursor place between them (this is where the `expand` command comes in)
brackets | Types `[]` with the cursor place between them (this is where the `expand` command comes in)
parens | Types `()` with the cursor place between them (this is where the `expand` command comes in)
single quotes | Types `''` with the cursor place between them (this is where the `expand` command comes in)
double quotes | Types `""` with the cursor place between them (this is where the `expand` command comes in)
quotes | same as `double quotes`
ticks | Types `` ` ` `` with the cursor place between them 
type single tag <%text%> | Types self-closing tag `<YourTagName />`
open tag | Opens blank tag `<>` with cursor in middle
close tag | Open blank close tag `</>` with cursor after the slash 
single tag | Open blank self-closing tag `</>` with cursor before the slash 
left | Presses left
right | Presses right
up | Presses up
down | Presses down
select left | Presses shift left (global command for selecting next char)
select right | Presses shift right (global command for selecting prev char)
select up | Presses shift up (global command for selecting up to prev line)
select down | Presses shift down (global command for selecting down to next)
select next word | Presses shift + option + right (global MacOS command for selecting next word)
select previous word" | Presses shift + option + left (global MacOS command for selecting prev word)
select to end | Presses cmd + shift + right (global MacOS command for selecting to end of line)
select to start | Presses cmd + shift + left (global MacOS command for selecting to start of line)
cursor start | Presses cmd + left (global command to move cursor to start of line)
cursor end | Presses cmd + right (global command to move cursor to end of line)
select all | Presses cmd + A (global command for selecting all)
switch window | Presses cmd + ~ (for when you have multiple windows of the same app open)
scroll | Presses Page Down
scroll down | Presses Page Down
scroll up | Presses Page Up
zoom in | Presses cmd + +
zoom out | Presses cmd + -
system copy | Presses cmd + c (since sometimes serenade's interal command is buggy)
system cut | Presses cmd + x 
system paste | Presses cmd + v (works for multiple line selections)
delete | synonym for "press backspace"


### VS Code specific commands

Almost all commands use default VS Code keybindings except those with (\*)

The word `partial` is used in some commands. A `word` refers to a string of chars (including underscores) not separated by a space, dash, slash, period, braces, brackets, etc. 

In the text `const fooBarNew = this.foo` `fooBar` is a word and `foo` is a partial as well as `Bar` and `New`. The same applies if we look at something like `my_pascal_case_var`. Maybe you can think of them as "subwords" and rename it if you like.


Voice Command | Description 
------------ | -------------
join lines | Joines next line with current line
comment | comments line
copy down | Duplicates current line to new line below
move up | Move current line up 1 line
move down | Move current line down 1 line
indent | Presses cmd + ] (works with multiple line selections)
outdent | Un-indents by pressing cmd + [ (also works with multiple line selections)
next occurrence | Goes to next occurence of current selection
select next occurrence | Selects current occurence and then selects next occurence as well
select all occurrences | Selects all occurences of current selection
cursor add | Adds cursor at the end of multiple lines when multiple lines are selected
cursor undo | "Soft undo", undoes the last cursor operation
cursor below | Adds extra cursor to line below
cursor above | Adds extra cursor to line above
select next partial | Selects next partial (as defined above this table)
select previous partial | Selects prev partial
next partial | Goes to next partial
previous partial | Goes to prev partial
expand selection | Expands the current selection (VERY useful, try it out in you code over and over)
shrink selection | Shrinks the current selection
braces | Types braces with cursor in the middle. Different from the global command because VS code automatically types the closing char when typing grouping symbols.
brackets | Types brackets 
parens | Types parens
single quotes | Types single quotes
double quotes | Types double quotes
quotes | Types double quotes
ticks | Types backticks
uppercase* | Transforms selection to uppercase
lowercase* | Transforms selection to lowercase
join tag* | [Emmet command for joining tag](https://docs.emmet.io/actions/split-join-tag/)
update tag* | Emmet command for renaming a tag (including it's respective closing tag)
balance out** | Emmet command similar to expand selection
balance in** | Emmet command similar to shrink selection
select next item** | [See Emmet docs](https://docs.emmet.io/actions/select-item/) 
select previous item** | [See Emmet docs](https://docs.emmet.io/actions/select-item/)

\* Not a default VS code shortcut, requires custom keybinding before it can work  
\*\* Also not custom, but also requires for you to disable Mac OS default Mission Control shortcuts so you can free up cntrl (ˆ). Currently does [not work](https://github.com/microsoft/vscode/issues/87608) in Typescript React files (.tsx) in VS Code. 

### Chrome specific commands

Also using default Mac OSX key bindings

Voice Command | Description 
------------ | -------------
new incognito window | Opens new incognito window
new window | Opens new window
hard reload | Performs hard reload
address bar | Highlights the address bar
open console | Opens dev tools JS console
open inspector | Opens dev tools Element Inspector
open developer tools | Opens dev tools to whatever was your last dev tool tab
next developer tab | Changes tab in dev tools
previous developer tab | Changes tab in dev tools
device mode | Toggles device mode (must have dev tools open for this to work)


### Terminal specific commands


#### General terminal stuff

Voice Command | Description 
------------ | -------------
open in code | Must have [VS Code shell command installed](https://code.visualstudio.com/docs/setup/mac)
cd | Types cd in to the console.
cd <%text%> | Types cd + text into the console
cd home | changes to home directory (presses enter)
cancel | Presses control + c
clear console | types clear into the terminal and presses enter


#### Git 
For some reason `serenade.app("term")` did not work so I'm using `serenade.global()` for now. On the bright side these commands work everywhere and always focus the terminal to run the command regardless of what app is currently focused.

Also, "git" gets misinterprated as "get" often so I'm using the word "g" instead and its much smoother.



Voice Command | Description 
------------ | -------------
g status | runs `git status` (presses enter)
g diff | runs `git diff`
g add new | runs `git add .`
g add all | runs `git add -A :/`
g commit | types `git commit -m ""` with cursor placed in middle of quotes
g merge | just types `git merge ` into console
g commit all | types `git commit -am ""` with cursor placed in middle of quotes
g push | runs `git push`
g pull | runs `git pull`
g log | runs `git log`
g branch | runs `git branch`
g checkout | types `git checkout `
g checkout new | types `git checkout -b `
g merge in <%text%> | Merges in the branch you specify into your current branch.\* 

\*First it checks out the branch specified and pulls. Sample use: if you're on a branch called `staging` and you want to merge in a more recent branch called `testing` then the command `g merge in testing` will checkout `testing`, pull, checkout `staging`, and run `git merge testing`.
