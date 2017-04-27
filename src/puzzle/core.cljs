(ns puzzle.core
  (:require
    [dommy.core :refer-macros [sel sel1]]
    [puzzle.model :as model]
      [puzzle.move :as move]))

(enable-console-print!)

(println "This text is printed from src/puzzle/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(println "Hello 234455")

;;(println (my-function/foo 7 6))
;;(println (model/test 13 11))
;;(println (model/test 13 12))
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

(enable-console-print!)
