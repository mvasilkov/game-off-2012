define(["Mob", "RectProp", "requestAnimationFrame", "conf"],
    function(Mob, RectProp, requestAnimationFrame, conf) {
        var _game = $("#game"), _world, _mobs = [],
            _lastUpdate = new Date().getTime()

        function render() {
            requestAnimationFrame(render)

            var now = new Date().getTime(), upd = 0.01 * (now - _lastUpdate)
            _lastUpdate = now

            _world.Step(upd, 10, 8)

            for (var i = 0; i < _mobs.length; ++i) {
                _mobs[i].render()
            }
        }

        function init() {
            var real_width = (960 - 325) / conf.GAME_SCALE,
                real_height = (540 - 87) / conf.GAME_SCALE,
                gravity = new Box2D.b2Vec2(0, 1),
                props = []

            _world = new Box2D.b2World(gravity)

            props.push(new RectProp(_world, real_width / 2, 0, real_width, 1))
            props.push(new RectProp(_world, real_width / 2, real_height, real_width, 1))
            props.push(new RectProp(_world, 0, real_height / 2, 1, real_height - 1))
            props.push(new RectProp(_world, real_width, real_height / 2, 1, real_height - 1))

            for (var i = 0; i < props.length; ++i) {
                props[i].render()
            }

            //_game.click(function(event) {
            //    var	offset = $(this).offset(),
            //        left = (event.pageX - offset.left) / conf.GAME_SCALE,
            //        top = (event.pageY - offset.top) / conf.GAME_SCALE,
            //        mob = new Mob(_world, left, top)
            //
            //    _mobs.push(mob)
            //})

            requestAnimationFrame(render)
        }

        function addMob(text) {
            var x = (7 + 55 / 2) / conf.GAME_SCALE,
                y = (7 + 40 / 2) / conf.GAME_SCALE

            _mobs.push(new Mob(_world, x, y, text))
        }
        
        function removeMob(text) {
            for (var i = 0; i < _mobs.length; ++i) {
                if (_mobs[i].text == text) {
                    _mobs[i].remove()
                    _mobs.splice(i, 1)
                    return
                }
            }

        }

        return {
            init: init,
            addMob: addMob,
            removeMob: removeMob
        }
    })
