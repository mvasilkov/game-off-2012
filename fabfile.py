from fabric.api import local

SED_PROGRAM = ";".join([
    # remove link to bootstrap css
    '/bootstrap.css/d',
    # fix css path
    's|media/main.css|app.css|',
    # fix javascript path
    's|data-main="app/main.js" src="lib/require.js"|src="app.js"|',
    # remove leading whitespace
    's|^ *||',
    # remove blank lines
    '/^$/d',
])

def optimize():
    """Rebuild (minify) game files."""
    # unlink old copy
    local("rm -f app/almond.js")
    # initialize
    local("ln -s ../lib/almond.js app/almond.js")
    # build html
    local("sed '%s' < index.html > upload/index.html" % SED_PROGRAM)
    # build css
    local("cat lib/bootstrap/bootstrap.css media/main.css | ycssmin > upload/app.css")
    # build js
    local("r.js -o baseUrl=app name=almond include=main out=upload/app.js wrap=true")
    # clean up
    local("rm app/almond.js")

def upload():
    """Deploy to server."""
    # lib and media
    local("rsync -Cavz lib media lib/bootstrap/media animuchan:git-invaders")
    # minified files
    local("rsync -Cavz upload/* favicon.ico animuchan:git-invaders")
