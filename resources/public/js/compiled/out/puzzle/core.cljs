(ns puzzle.core
  (:require
    [dommy.core :as dommy :refer-macros [sel sel1]]
    [puzzle.model :as model]
    [puzzle.move :as move]
    [puzzle.image_dimension :as image_dimension]
    [puzzle.dom_sizes :as dom_sizes]))

(defonce all-tiles (atom model/tiles))

(enable-console-print!)

(println "This text is printed from src/puzzle/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload
;;(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

( comment
  (println model/tiles)
  (println (move/findMove model/tiles {:x 1 :y 1}))
  (println (move/findMove model/tiles {:x -1 :y -1}))
  (println (move/findMove model/tiles {:x 0 :y 0}))
  (println (move/findMove model/tiles {:x 2 :y 2}))
  (println (move/findMove model/tiles {:x 2 :y 3}))
  (println (move/findMove model/tiles {:x 2 :y 1}))
  (println (move/findMove model/tiles {:x 3 :y 2}))
  (println (move/findMove model/tiles {:x 1 :y 2}))
  (println (move/moveCoord model/tiles {:x 1 :y 2}))
)

(println (clojure.string/join ["testttt" "123"]))
(println "testttt")
(println "testttt__2")
(println "testttt__3")
(println "testttt__4")
(println (get model/size :x))

(js/addEventListener "resize" (fn []
  (image_dimension/risize_image)
))
(image_dimension/risize_image)

(defn click-handler [e]
    (.log js/console "You clicked my button! Congratulations"))

(defn putTile [tile_model]
(let [ height (/ 100 (get model/size :y))
       width  (/ 100 (get model/size :x))
       left (* (get-in tile_model [:butIs :x]) width)
       top (* (get-in tile_model [:butIs :y]) height)
       heightStyle (clojure.string/join ["height:" height "%;"])
       widthStyle (clojure.string/join ["width:" width "%;"])
       leftStyle (clojure.string/join ["left:" left "%;"])
       topStyle (clojure.string/join ["top:" top "%;"])
       leftStyleMinus (clojure.string/join ["left:" (- ( * left (get model/size :x))) "%;"])
       topStyleMinus (clojure.string/join ["top:" (- ( * top (get model/size :y))) "%;"])
       style_size (clojure.string/join ["overflow:hidden;position:absolute;" heightStyle widthStyle leftStyle topStyle])
       style_inner (clojure.string/join ["z-index:10;position:absolute;" leftStyleMinus topStyleMinus])
       id (clojure.string/join ["js_id_tile" (get-in tile_model [:shouldBe :x]) (get-in tile_model [:shouldBe :y])])
       tile_model_state (atom (get tile_model :butIs))]

  (dommy/append! (sel1 :#puzzle_screen)
    (let [node (.cloneNode (sel1 :#prototype_tile) true)
         inner (sel1 node :#prototype_inner)]
      (dommy/set-attr! node :style style_size)
      (dommy/set-attr! node :id id)
      (dommy/set-attr! node :class "css_tiles")
      ;;(println inner)
      ;;(dommy/set-attr! inner :style style_inner)
      ))
   (dommy/set-attr! (sel1 (sel1 (clojure.string/join ["#" id])) :#prototype_inner) :style style_inner)
   ;;(dommy/listen! (sel1 (clojure.string/join ["#" id])) :click click-handler)

   (defn click-tile [e]
       (let [butIs (get tile_model :butIs)
             move (move/findMove (deref all-tiles) (deref tile_model_state))]
       ;;(.log js/console "You clicked my button! Congratulations 2")
       ;;(.log js/console (clojure.string/join [(get (deref tile_model_state) :x) "_" (get (deref tile_model_state) :y)]))
       ;;(.log js/console move)

       ;;(reset! atom newval)
       (if (not= move nil)
         ((fn []
           (let [ oldTile (deref tile_model_state)
                  newTile (move/adaptCoord oldTile move)
                  ;;animStyle (clojure.string/join ["overflow:hidden;position:absolute;" heightStyle widthStyle leftStyle topStyle])]
                  animStyle (dom_sizes/getAnimStyle oldTile newTile)
                  newTileX (get newTile :x)]

           ;; (.log js/console animStyle)
           ;; (.log js/console move)
           ;;(.log js/console (get (move/adaptCoord {:x 3 :y 1} "left") :x))
           ;;(.log js/console newTileX)
           ;;(.log js/console (clojure.string/join [(get oldTile :x) "_" (get oldTile :y)]))
           ;;(.log js/console (get newTile :x))
           ;;(.log js/console (clojure.string/join [(get newTile :x) "_" (get newTile :y)]))
           ;;(dommy/set-attr! (sel1 (clojure.string/join ["#" id])) :style (clojure.string/join ["overflow:hidden;position:absolute;" heightStyle widthStyle animStyle]))
            
            (if(= false (deref dom_sizes/busy)) 
            (
            (fn [] 
                ( dom_sizes/animate  id (clojure.string/join ["overflow:hidden;position:absolute;" heightStyle widthStyle]) oldTile newTile)
                                                         ;;(dom_sizes/getTileTop oldTile)
                                                         ;;(dom_sizes/getTileTop newTile)
                                                         ;;(dom_sizes/getTileLeft oldTile)
                                                         ;;(dom_sizes/getTileLeft newTile) )

                (reset! all-tiles (move/doMove (deref all-tiles) (deref tile_model_state) move ))
                (reset! tile_model_state (move/adaptCoord (deref tile_model_state) move))
            )
            ) )
            
           
            )))
         )

       ))

   ;;(dommy/listen! (sel1 (clojure.string/join ["#" id])) :click click-tile)
   ;;(dommy/listen! (sel1 (clojure.string/join ["#" id])) :dragstart click-tile)
    ;;(dommy/listen! (sel1 (clojure.string/join ["#" id])) :dragleave click-tile)
    (dommy/listen! (sel1 (clojure.string/join ["#" id])) :mousedown click-tile)
)
)
;;(putTile 1)
;;(mapv putTile model/tiles)
(mapv putTile (deref all-tiles))

(comment
(dommy/append! (sel1 :#puzzle_screen)
  (let [node (.cloneNode (sel1 :#prototype_tile) true)]
    (dommy/set-attr! node :id "12345")))
)
