particlesJS("particles-js", {
    "particles":{
        // --シェイプの設定----------
        "number":{
            "value":200, //シェイプの数
            "density":{
                "enable":true, //シェイプの密集度を変更するか否か
                "value_area":3551.164387345227 //シェイプの密集度
            }
        },
        "color":{
            "value":"#f5f5f5" //シェイプの色
        },
        "shape":{
            "type":"circle", //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像
            "stroke":{
                "width":0, //シェイプの外線の太さ
                "color":"#000000" //シェイプの外線の色
            },
            //typeをpolygonにした時の設定
            "polygon":{
                "nb_sides":5 //多角形の角の数
            },
            //typeをimageにした時の設定
            "image":{
                "src":"img/gi",
                "width":100,
                "height":100
            }
        },
        "opacity":{
            "value":0.5, //シェイプの透明度
            "random":true, //シェイプの透明度をランダムにするか否か
            "anim":{
                "enable":true, //シェイプの透明度をアニメーションさせるか否か
                "speed":1, //アニメーションのスピード
                "opacity_min":0, //透明度の最小値
                "sync":false //全てのシェイプを同時にアニメーションさせるか否か
            }
        },
        "size":{
            "value":3, //シェイプの大きさ
            "random":true, //シェイプの大きさをランダムにするか否か
            "anim":{
                "enable":false, //シェイプの大きさをアニメーションさせるか否か
                "speed":4, //アニメーションのスピード
                "size_min":0.3, //大きさの最小値
                "sync":false //全てのシェイプを同時にアニメーションさせるか否か
            }
        },
        //--------------------

        //--線の設定----------
        "line_linked":{
            "enable":false, //線を表示するか否か
            "distance":150, //線をつなぐシェイプの間隔
            "color":"#ffffff", //線の色
            "opacity":0.4, //線の透明度
            "width":1 //線の太さ
        },
        //--------------------

        //--動きの設定----------
        "move":{
            "enable":true,
            "speed":1, //シェイプの動くスピード
            "direction":"none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
            "random":true,
            "straight":false, //個々のシェイプの動きを止めるか否か
            "out_mode":"out", //エリア外に出たシェイプの動き(out、bounceより選択)
            "bounce":false,
            "attract":{
                "enable":false,
                "rotateX":600,
                "rotateY":600
            }
        }
        //--------------------
    },

    "interactivity":{
        "detect_on":"canvas",
        "events":{

            //--マウスオーバー時の処理----------
            "onhover":{
                "enable":false, //マウスオーバーが有効か否か
                "mode":"bubble" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
            },
            //--------------------

            //--クリック時の処理----------
            "onclick":{
                "enable":false, //クリックが有効か否か
                "mode":"repulse" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
            },
            //--------------------

            "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
        },

        "modes":{
            //--カーソルとシェイプの間に線が表示される----------
            "grab":{
                "distance":400, //カーソルからの反応距離
                "line_linked":{
                    "opacity":1 //線の透明度
                }
            },
            //--------------------

            //--シェイプが膨らむ---------
            "bubble":{
                "distance":250, //カーソルからの反応距離
                "size":0, //シェイプの膨らむ大きさ
                "duration":2, //膨らむシェイプの持続時間
                "opacity":0, //膨らむシェイプの透明度
                "speed":3 //膨らむシェイプの速度(onclick時のみ)
            },
            //--------------------

            //--シェイプがカーソルから逃げる----------
            "repulse":{
                "distance":400, //カーソルからの反応距離
                "duration":0.4
            },
            //--------------------

            //--シェイプが増える----------
            "push":{
                "particles_nb":4 //増えるシェイプの数
            },
            //--------------------

            //--シェイプが減る----------
            "remove":{
                "particles_nb":2 //減るシェイプの数
            }
            //--------------------
        }
    },
    "retina_detect":true //Retina Displayを対応するか否か
}
);
var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;