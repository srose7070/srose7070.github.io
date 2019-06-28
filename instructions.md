# Opening your website locally

## opening from a file
1. Open a browser like Firefox or Chrome
2. Click **File** --> **Open File** or press *Command+O* on the keyboard
3. Open the `index.html` file in your github.io folder

You can also open this from your bookmarks if it's saved there


# Editing your code

- Open the app *Visual Studio Code*, which you can find in your applications folder
- Edit the content on the page in `index.html`
- Add CSS classes in `style.css`
- Change page behaviour with Javascript in `javascript.js`

# Inside the terminal

## general tips

- the squiggly character `~` is a shortcut to your home directory. On a Mac, this is where you will find your Applications, Desktop, Downloads, etc.

- you can press the tab character to auto-complete the rest of a command. If there is an exact match, it will type the rest of the text for you. If there are multiple matches, it will list all of them

## cd: Change Directory

To change into any directory, type `cd` and then the location of that directory. For example:

`$ cd ~/workspace-CODE/srose7070.github.io`

If you don't type any directory, it will change into the home directory:

`$ cd`
- this is the same thing as `$ cd ~`

## ls: List items

To list the items in any directory, type `ls` and then the location of that directory. For example:

`$ ls ~/workspace-code`

If you don't type any directory, it will list the items of the directory you currently in:

`$ ls`

# git

If you are in a directory that is using **git**, like we are for our websites, you can execute some useful git commands

### pulling code
To pull your code from github to your local computer:

`$ git pull origin master`
- "git" tells the terminal that we will be using a git command
- "pull" means we are pulling code from somewhere
- "origin" is our nickname for our project on github
- "master" is a nickname for the version of our code. Complicated projects often have many different versions of the code, but we've kept it simple with our website

### commiting code

To save changes to git, we first add the files we've changed, and then commit them

`$ git add -A`
`$ git commit -m "A very descriptive message summarizing what I've changed"`

### pushing code

To push our changes to github (and the internet), use the `git push` command:

`$ git push origin master`


